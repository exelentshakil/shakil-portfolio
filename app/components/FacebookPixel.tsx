"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

// 1. Fix TypeScript errors by extending the Window interface
declare global {
    interface Window {
        fbq: any; // Using 'any' for simplicity, but you can define a stricter type
        _fbq: any;
    }
}

const FB_PIXEL_ID = "1660610965104369"; // Consider using process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

export default function FacebookPixel() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [loaded, setLoaded] = useState(false);

    // 2. Trigger PageView on route changes (SPA navigation)
    useEffect(() => {
        if (!loaded) return;

        // Track page view with current URL
        window.fbq("track", "PageView");
    }, [pathname, searchParams, loaded]);

    return (
        <>
            <Script
                id="fb-pixel"
                strategy="afterInteractive"
                onLoad={() => setLoaded(true)}
                dangerouslySetInnerHTML={{
                    __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
                }}
            />
            {/* 3. Keep the noscript tag for users with JS disabled */}
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: "none" }}
                    src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                    alt="Meta Pixel"
                />
            </noscript>
        </>
    );
}