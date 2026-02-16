import puppeteer from 'puppeteer';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import slugify from 'slugify';
import { sites } from '@/app/data/sites';

// --- CONFIGURATION ---
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'screenshots');
const VIEWPORT = { width: 1440, height: 900 }; // Desktop view
const QUALITY = 80; // JPEG Quality (0-100)
const TIMEOUT = 20000; // 20 seconds max per site

async function generateScreenshots() {
    // 1. Setup folders
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    console.log(`🚀 Starting screenshot generator for ${sites.length} sites...`);

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setViewport(VIEWPORT);

    // Track failures to report at the end
    const failedSites: string[] = [];

    for (const [index, site] of sites.entries()) {
        // Skip if site has a manual image defined (like Legiit)
        if (site.image && site.image.startsWith('http')) {
            console.log(`[${index + 1}/${sites.length}] ⏭️  Skipping (Manual Image): ${site.name}`);
            continue;
        }

        const slug = slugify(site.name, { lower: true, strict: true });
        const filename = `${slug}.jpg`;
        const filepath = path.join(OUTPUT_DIR, filename);

        // Skip if screenshot already exists (Delete public/screenshots folder to force refresh)
        if (fs.existsSync(filepath)) {
            console.log(`[${index + 1}/${sites.length}] ⏭️  Skipping (Exists): ${site.name}`);
            continue;
        }

        // Ensure URL has protocol
        let url = site.url;
        if (!url.startsWith('http')) {
            url = `https://${url}`;
        }

        try {
            console.log(`[${index + 1}/${sites.length}] 📸 Snapping: ${site.name}...`);

            // Attempt to load page
            await page.goto(url, {
                waitUntil: 'networkidle0', // Wait for network to settle
                timeout: TIMEOUT
            });

            // Buffer slightly to ensure animations/images render
            await new Promise(r => setTimeout(r, 1000));

            // Capture and Compress
            const buffer = await page.screenshot({ type: 'jpeg', quality: 100 });

            await sharp(buffer)
                .resize(1000) // Resize to 1000px width (Perfect for thumbnails)
                .jpeg({ quality: QUALITY, mozjpeg: true })
                .toFile(filepath);

            console.log(`   ✅ Saved.`);

        } catch (error) {
            console.error(`   ❌ FAILED: ${site.name} (Offline or Timeout)`);
            failedSites.push(site.name);
        }
    }

    await browser.close();

    console.log('\n------------------------------------------------');
    console.log('✨ GENERATION COMPLETE');
    console.log('------------------------------------------------');

    if (failedSites.length > 0) {
        console.log(`⚠️  The following ${failedSites.length} sites failed to load.`);
        console.log('   You can remove these from your data/sites.ts file:');
        console.log('------------------------------------------------');
        failedSites.forEach(name => console.log(`- ${name}`));
        console.log('------------------------------------------------');
    } else {
        console.log('🎉 All sites captured successfully!');
    }
}

generateScreenshots();