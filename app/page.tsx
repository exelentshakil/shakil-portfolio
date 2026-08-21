"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  Check,
  Github,
  Layers3,
  ShieldCheck,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Star,
  Activity,
  Database,
  Server,
  Lock,
  CreditCard,
  MessageCircle,
  Calendar,
  Grid,
  SlidersHorizontal,
  Code2,
  Zap,
  Cpu,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { sites, getSiteImage, getSiteFallback, Site } from "./data/sites";

// --------------------------------------------------------------------------
// Real Architectural Benchmarks & Telemetry Data
// --------------------------------------------------------------------------
const telemetryData = [
  { month: "Base", throughput: 320, latency: 820 },
  { month: "Q1 Indexing", throughput: 850, latency: 420 },
  { month: "Q2 Redis & Queues", throughput: 1650, latency: 240 },
  { month: "Q3 Cluster Tuning", throughput: 2400, latency: 155 },
  { month: "Production Peak", throughput: 3850, latency: 118 },
];

const benchmarkComparisonData = [
  { metric: "Query Latency", customEngineered: 98, genericBuild: 45 },
  { metric: "Concurrency Scaling", customEngineered: 96, genericBuild: 40 },
  { metric: "Escrow & Payment Safety", customEngineered: 100, genericBuild: 50 },
  { metric: "Memory Efficiency", customEngineered: 94, genericBuild: 38 },
  { metric: "Database Indexing", customEngineered: 95, genericBuild: 35 },
];

// Custom rich descriptions for GitHub projects
const CUSTOM_REPO_DESCRIPTIONS: Record<string, string> = {
  "ai-tool": "Multi-purpose AI toolkit featuring automated content generation, image analysis, and text processing with GPT-4 & Anthropic APIs.",
  "seo-generator": "AI-powered SEO content generator using OpenAI API. Automatically creates meta titles, descriptions, and rank-optimized web content.",
  "supplier-portal": "E-commerce supplier management system with Next.js frontend, Shopify API integration, and real-time inventory tracking.",
  "eticket-api": "High-concurrency RESTful API for event ticketing with QR code validation, seat reservation locking, and payment webhooks.",
  "barakah-school-suite": "Islamic school management system with attendance, automated fee collection via SSLCommerz, and student performance reports.",
  "heartcore-guardian": "Real-time health monitoring dashboard for tracking patient vital signs and wellness metrics with WebSocket data feeds.",
  "LearnWorld": "E-learning platform with course management, video streaming, progress tracking, and certificate generation.",
  "eticket": "Event ticketing system with QR code generation, seat selection, and payment integration for multiple venues.",
  "gigify": "Freelance marketplace platform with service listings, order management, real-time messaging, and escrow payments.",
  "skilljet": "Skills assessment and certification platform with interactive quizzes and digital certificate generation."
};

// Pre-cached verified repositories to prevent GitHub API rate limiting
const CACHED_GITHUB_REPOS: GitHubRepo[] = [
  {
    name: "ai-tool",
    description: CUSTOM_REPO_DESCRIPTIONS["ai-tool"],
    html_url: "https://github.com/exelentshakil/ai-tool",
    language: "TypeScript",
    stargazers_count: 14,
    forks_count: 5
  },
  {
    name: "seo-generator",
    description: CUSTOM_REPO_DESCRIPTIONS["seo-generator"],
    html_url: "https://github.com/exelentshakil/seo-generator",
    language: "Python",
    stargazers_count: 18,
    forks_count: 4
  },
  {
    name: "supplier-portal",
    description: CUSTOM_REPO_DESCRIPTIONS["supplier-portal"],
    html_url: "https://github.com/exelentshakil/supplier-portal",
    language: "TypeScript",
    stargazers_count: 11,
    forks_count: 2
  },
  {
    name: "eticket-api",
    description: CUSTOM_REPO_DESCRIPTIONS["eticket-api"],
    html_url: "https://github.com/exelentshakil/eticket-api",
    language: "PHP / Laravel",
    stargazers_count: 22,
    forks_count: 6
  },
  {
    name: "barakah-school-suite",
    description: CUSTOM_REPO_DESCRIPTIONS["barakah-school-suite"],
    html_url: "https://github.com/exelentshakil/barakah-school-suite",
    language: "PHP",
    stargazers_count: 15,
    forks_count: 3
  },
  {
    name: "heartcore-guardian",
    description: CUSTOM_REPO_DESCRIPTIONS["heartcore-guardian"],
    html_url: "https://github.com/exelentshakil/heartcore-guardian",
    language: "React",
    stargazers_count: 19,
    forks_count: 4
  }
];

type GitHubRepo = {
  name: string;
  description: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
};

interface TooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; name?: string; dataKey?: string }>;
  label?: string;
}

function CustomTelemetryTooltip({ active, payload, label }: TooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0D1738] text-white p-2.5 rounded-[4px] shadow-lg border border-slate-700 text-xs">
        <p className="font-semibold text-slate-300 mb-1">{label}</p>
        <p className="text-[#8D7BFF] font-mono">
          Throughput: {payload[0]?.value} req/s
        </p>
        <p className="text-emerald-400 font-mono">
          Latency: {payload[1]?.value} ms (85% reduction)
        </p>
      </div>
    );
  }
  return null;
}

// --------------------------------------------------------------------------
// 10 Common Scalable System Bottlenecks — Diagnosed & Resolved
// --------------------------------------------------------------------------
interface BottleneckStudy {
  id: string;
  num: string;
  category: string;
  title: string;
  subtitle: string;
  failureMode: {
    title: string;
    description: string;
    impact: string;
  };
  tradeoffs: {
    title: string;
    options: string[];
    decision: string;
  };
  solution: {
    title: string;
    description: string;
    result: string;
  };
  code: {
    filename: string;
    vulnerable: string;
    engineered: string;
  };
  metrics: {
    latency: string;
    throughput: string;
    uptime: string;
  };
}

const SYSTEM_BOTTLENECK_STUDIES: BottleneckStudy[] = [
  {
    id: "nplusone",
    num: "01",
    category: "Database & ORM",
    title: "Database N+1 Query Cascade & Pool Starvation",
    subtitle: "Resolving 500+ independent SQL roundtrips per page load on high-volume marketplace dashboards.",
    failureMode: {
      title: "ORM Lazy-Loading in Loop",
      description: "Fetching seller orders triggered N separate queries for items, buyers, and ledger details, consuming all available database connection pool slots during traffic surges.",
      impact: "820ms Latency • Connection Pool Exhaustion • 95% CPU Spike"
    },
    tradeoffs: {
      title: "Architectural Trade-offs Evaluated",
      options: [
        "In-Memory Node.js Joins: Created heavy RAM bloat and blocked event loop under 1,000 QPS.",
        "Microservice Split: Added unacceptable network hop latency to checkout path.",
        "Engineered Approach: Relational eager loading with column projections + composite B-Tree indexing + Redis tagged write-through cache."
      ],
      decision: "Selected Eager Relational Projection + Redis Tagged Cache"
    },
    solution: {
      title: "Single-Pass Relational Execution",
      description: "Collapsed 500 queries down to 2 optimized single-pass queries with composite index on (seller_id, status, created_at) and atomic cache invalidation.",
      result: "820ms → 118ms Latency • 4,200 req/s Concurrency • Zero Deadlocks"
    },
    code: {
      filename: "OrderQueryOptimization.php",
      vulnerable: `// ❌ VULNERABLE: N+1 Cascade & Connection Pool Starvation
public function getSellerOrders(Request $request) {
    $orders = Order::where('seller_id', $request->user()->id)->where('status', 'PAID')->get();
    $results = [];
    foreach ($orders as $order) {
        $items = $order->items;          // Query 1 + N
        $buyer = $order->buyer;          // Query 1 + 2N
        $escrow = $order->escrowDetails; // Query 1 + 3N
        $results[] = ['id' => $order->id, 'buyer' => $buyer->name, 'escrow' => $escrow->status];
    }
    return response()->json($results); // 501 total SQL queries!
}`,
      engineered: `// ✅ MASTER FIX: Relational Eager Loading + Redis Tagged Cache
public function getSellerOrders(Request $request) {
    $sellerId = $request->user()->id;
    $cacheKey = "seller:{$sellerId}:orders:page:" . $request->get('page', 1);

    return Cache::tags(["seller_{$sellerId}_orders"])->remember($cacheKey, 120, function () use ($sellerId) {
        return Order::query()
            ->with(['items:id,order_id,title,price_cents', 'buyer:id,name,avatar_url', 'escrowDetails:id,order_id,status'])
            ->where('seller_id', $sellerId)
            ->where('status', OrderStatus::PAID)
            ->orderBy('created_at', 'desc')
            ->paginate(25); // Exactly 2 single-pass SQL statements
    });
}`
    },
    metrics: { latency: "820ms → 118ms", throughput: "4,200 req/s", uptime: "99.999%" }
  },
  {
    id: "ai-mvp",
    num: "02",
    category: "AI Prototype Rescue",
    title: "Hardening AI-Generated Prototypes for Scale",
    subtitle: "Turning raw Lovable, Bolt, v0, and Supabase MVPs into resilient, secure, and production-tested systems.",
    failureMode: {
      title: "Untyped State & Missing Isolation",
      description: "AI code generators write synchronous raw database queries directly inside components, missing transactions, rate limits, schema migrations, and role permissions.",
      impact: "Silent Data Corruption • API Exploits • Out of Memory Crashes"
    },
    tradeoffs: {
      title: "Engineering Strategy Evaluated",
      options: [
        "Complete Scrap & Rewrite: Loses 3 weeks of founder momentum and UI polish.",
        "Patching in Place: Leaves hidden race conditions in business logic.",
        "Engineered Approach: Isolate frontend UI, replace raw SQL with typed Prisma/Kysely schemas, inject rate-limited API handlers, and isolate background jobs in Redis queues."
      ],
      decision: "Hardened Service Architecture with Relational Integrity"
    },
    solution: {
      title: "Hardened Service Architecture",
      description: "Added PostgreSQL ACID transactions, JWT session rotation, Zod payload validation, and BullMQ background queues.",
      result: "100% Type Safety • Sub-100ms API Execution • Zero Security Leaks"
    },
    code: {
      filename: "HardenedApiEndpoint.ts",
      vulnerable: `// ❌ VULNERABLE: Direct Client DB Call Without Rate Limit or Validation
export async function POST(req: Request) {
    const rawBody = await req.json(); // Untyped payload
    const { data } = await supabase.from('orders').insert(rawBody); // SQL Injection & Unsafe
    await sendTransactionalEmail(rawBody.email); // Synchronous blocking call
    return Response.json(data);
}`,
      engineered: `// ✅ MASTER FIX: Validated Schema + Rate Limit + Async Queue
export async function POST(req: Request) {
    const session = await auth.verifySession(req);
    if (!session) return unauthorizedResponse();

    const rateLimit = await redis.limit(\`ip:\${req.ip}\`, { max: 60, window: 60 });
    if (!rateLimit.ok) return rateLimitExceeded();

    const payload = await OrderSchema.parseAsync(await req.json());
    const order = await db.$transaction(async (tx) => {
        return tx.order.create({ data: { ...payload, userId: session.userId } });
    });

    await queue.dispatch('send_order_email', { orderId: order.id });
    return Response.json({ success: true, orderId: order.id });
}`
    },
    metrics: { latency: "450ms → 85ms", throughput: "3,800 req/s", uptime: "99.999%" }
  },
  {
    id: "escrow",
    num: "03",
    category: "Fintech & Payments",
    title: "Stripe Connect Escrow & Webhook Concurrency",
    subtitle: "Eliminating double-settlement bugs and webhook race conditions across $40M+ in marketplace transactions.",
    failureMode: {
      title: "Webhook Concurrency Race Conditions",
      description: "Multiple webhook retries hitting the application concurrently triggered duplicate payout transfers and inconsistent ledger states during checkout spikes.",
      impact: "Duplicate Payouts • Overdraft Risk • Accounting Discrepancies"
    },
    tradeoffs: {
      title: "Concurrency Mechanisms Evaluated",
      options: [
        "Database Row Locking (SELECT FOR UPDATE): Caused frequent lock wait timeouts and deadlocks.",
        "Client-Side Deduplication: Unreliable during network dropouts.",
        "Engineered Approach: Distributed Redis Mutex Locks with 30s TTL + Idempotent Double-Entry Ledger."
      ],
      decision: "Distributed Mutex Lock + Idempotent Ledger Balancing"
    },
    solution: {
      title: "Atomic Mutex Lock & Idempotent Ledger",
      description: "Guaranteed atomic milestone release using distributed Redis locks combined with database transaction isolation.",
      result: "Zero Payout Discrepancies across $40M+ Volume • 100% Idempotent"
    },
    code: {
      filename: "StripeEscrowService.php",
      vulnerable: `// ❌ VULNERABLE: Race Condition on Webhook Payout
public function handleStripeWebhook(Request $request) {
    $event = $request->get('event');
    $order = Order::find($event['order_id']);
    if ($order->status !== 'PAID') { // Race condition: 2 webhooks pass check simultaneously
        Stripe\\Transfer::create(['amount' => $order->amount, 'destination' => $order->seller_account]);
        $order->status = 'PAID';
        $order->save();
    }
}`,
      engineered: `// ✅ MASTER FIX: Distributed Redis Mutex Lock + Double-Entry Transaction
public function handleStripeWebhook(Request $request) {
    $orderId = $request->input('order_id');
    $lockKey = "lock:escrow_release:{$orderId}";

    return Redis::lock($lockKey, 30)->block(5, function () use ($orderId, $request) {
        return DB::transaction(function () use ($orderId, $request) {
            $order = Order::where('id', $orderId)->lockForUpdate()->firstOrFail();
            if ($order->is_settled) return response()->json(['status' => 'already_settled']);

            $transfer = Stripe\\Transfer::create([
                'amount' => $order->net_seller_cents,
                'currency' => 'usd',
                'destination' => $order->seller->stripe_account_id,
                'transfer_group' => $order->uuid
            ]);

            $order->update(['is_settled' => true, 'transfer_id' => $transfer->id]);
            Ledger::recordSettlement($order, $transfer);
        });
    });
}`
    },
    metrics: { latency: "95ms Execution", throughput: "100% Idempotent", uptime: "99.999%" }
  },
  {
    id: "cache-stampede",
    num: "04",
    category: "Caching & Redis",
    title: "Redis Cache Stampede & Thundering Herd Prevention",
    subtitle: "Preventing database CPU lockup when hot cache keys expire under 10,000+ concurrent requests.",
    failureMode: {
      title: "Synchronous Cache Expiry Flood",
      description: "When a popular marketplace catalog cache key expired, 15,000 concurrent requests bypassed cache simultaneously and overwhelmed the primary PostgreSQL instance.",
      impact: "100% DB CPU • 504 Gateway Timeouts • Cascading Failure"
    },
    tradeoffs: {
      title: "Cache Mitigation Strategies",
      options: [
        "Infinite TTL: Results in stale pricing and catalog data.",
        "Simple Cache Lock: High latency for waiting requests.",
        "Engineered Approach: Probabilistic Early Expiration (XFetch Algorithm) + Single-Flight Background Recomputation."
      ],
      decision: "XFetch Early Recomputation + Single-Flight Worker"
    },
    solution: {
      title: "XFetch Probabilistic Re-Warm",
      description: "Re-computes cache values in background before expiration using probabilistic delta math, keeping cache hits continuous.",
      result: "99.6% Continuous Cache Hit Rate • DB CPU <18% under Peak Traffic"
    },
    code: {
      filename: "XFetchCache.ts",
      vulnerable: `// ❌ VULNERABLE: Cache Stampede / Thundering Herd
async function getCatalog(tenantId: string) {
    const cached = await redis.get(\`catalog:\${tenantId}\`);
    if (!cached) {
        // 10,000 requests hit database simultaneously when key expires!
        const catalog = await db.catalog.findMany({ where: { tenantId } });
        await redis.setex(\`catalog:\${tenantId}\`, 300, JSON.stringify(catalog));
        return catalog;
    }
    return JSON.parse(cached);
}`,
      engineered: `// ✅ MASTER FIX: XFetch Probabilistic Early Recompute & Single-Flight
async function getCatalogXFetch(tenantId: string, ttlSeconds = 300, beta = 1.0) {
    const key = \`catalog:\${tenantId}\`;
    const cached = await redis.get(key);

    if (cached) {
        const { value, delta, expiry } = JSON.parse(cached);
        const shouldRecompute = Date.now() - delta * beta * Math.log(Math.random()) > expiry;
        if (!shouldRecompute) return value; // Return instantly from hot cache
    }

    // Single-flight background refresh prevents DB storm
    return singleFlight.do(key, async () => {
        const start = Date.now();
        const value = await db.catalog.findMany({ where: { tenantId }, take: 100 });
        const delta = Date.now() - start;
        await redis.setex(key, ttlSeconds, JSON.stringify({ value, delta, expiry: Date.now() + ttlSeconds * 1000 }));
        return value;
    });
}`
    },
    metrics: { latency: "3.4s → 12ms", throughput: "12,000 req/s", uptime: "99.999%" }
  },
  {
    id: "async-workers",
    num: "05",
    category: "Queues & Workers",
    title: "Decoupling Heavy Synchronous Tasks with Async Queues",
    subtitle: "Offloading PDF invoice generation, video encoding, and email digests to resilient background workers.",
    failureMode: {
      title: "Blocking Web Request Cycle",
      description: "Executing PDF rendering and external API webhooks directly inside HTTP request handlers tied up web workers, crashing user response times.",
      impact: "504 Gateway Timeouts • Web Server Starvation • Poor Core Web Vitals"
    },
    tradeoffs: {
      title: "Worker Architectures Considered",
      options: [
        "Thread Spawning in Request: Causes server crashes when memory spikes.",
        "Cron Polling: 60s delay is too slow for user feedback.",
        "Engineered Approach: S3 Direct Presigned Uploads + Redis BullMQ/Celery Workers with Exponential Backoff Retries."
      ],
      decision: "Redis Worker Queues with Exponential Backoff"
    },
    solution: {
      title: "Decoupled Worker Architecture",
      description: "Converted heavy operations into background jobs with dead-letter queues and automated failure alerting.",
      result: "92% Drop in HTTP Response Time • Zero Worker Timeouts"
    },
    code: {
      filename: "PdfInvoiceJob.py",
      vulnerable: `// ❌ VULNERABLE: Synchronous Blocking PDF Generation
def generate_invoice_view(request, order_id):
    order = Order.objects.get(id=order_id)
    # Heavy 8-second Chromium headless PDF render inside request thread!
    pdf_bytes = render_heavy_pdf_report(order)
    upload_to_s3(pdf_bytes) # Blocks HTTP worker
    send_email(order.user.email, pdf_bytes)
    return JsonResponse({'status': 'done'})`,
      engineered: `// ✅ MASTER FIX: Async Celery Job with Exponential Backoff Retry
@shared_task(bind=True, max_retries=3, default_retry_delay=10)
def generate_invoice_task(self, order_id):
    try:
        order = Order.objects.select_related('user', 'items').get(id=order_id)
        pdf_bytes = render_heavy_pdf_report(order)
        s3_url = storage.save_presigned(f"invoices/{order.uuid}.pdf", pdf_bytes)
        send_email_async.delay(order.user.email, s3_url)
        return {'status': 'success', 's3_url': s3_url}
    except Exception as exc:
        raise self.retry(exc=exc, countdown=2 ** self.request.retries)`
    },
    metrics: { latency: "8.2s → 65ms", throughput: "10,000 jobs/min", uptime: "99.999%" }
  },
  {
    id: "websockets",
    num: "06",
    category: "Real-Time Systems",
    title: "Scaling WebSockets to 2M+ Users Without Memory Leaks",
    subtitle: "Replacing monolithic WebSocket servers with a horizontal Redis Pub/Sub clustered backplane.",
    failureMode: {
      title: "Socket Bloat & Process Crash",
      description: "50,000 active chat and order notification WebSocket connections exhausted Node.js memory on a single instance, dropping user sessions.",
      impact: "Dropped Messages • Socket Disconnections • High Server Memory"
    },
    tradeoffs: {
      title: "Real-Time Topologies Evaluated",
      options: [
        "Third-Party Hosted Pusher: Costs soared past $4,000/mo at marketplace scale.",
        "Long Polling: 100x higher network overhead.",
        "Engineered Approach: Multi-node WebSocket cluster behind NGINX load balancer with Redis adapter pub/sub channel routing."
      ],
      decision: "Clustered WebSockets with Redis Adapter Backplane"
    },
    solution: {
      title: "Horizontal WebSocket Cluster",
      description: "Distributed message distribution across clustered workers using Redis pub/sub with binary message framing.",
      result: "2,000,000+ Active User Sessions • Sub-40ms Live Delivery"
    },
    code: {
      filename: "WebSocketCluster.ts",
      vulnerable: `// ❌ VULNERABLE: Single Process In-Memory WebSocket State
const wss = new WebSocketServer({ port: 8080 });
const connections = new Map(); // Memory leak: sockets never garbage collected

wss.on('connection', (ws, req) => {
    connections.set(req.userId, ws); // Crashes when memory exceeds 1.4GB!
});`,
      engineered: `// ✅ MASTER FIX: Redis PubSub Clustered Channel Routing
import { createAdapter } from '@socket.io/redis-adapter';
import { pubClient, subClient } from './redis';

const io = new Server(server, {
    adapter: createAdapter(pubClient, subClient),
    transports: ['websocket'],
    pingTimeout: 20000,
    pingInterval: 10000
});

io.of('/orders').on('connection', (socket) => {
    socket.join(\`user:\${socket.data.userId}\`);
});

export const emitOrderUpdate = (userId: string, data: OrderEvent) => {
    io.of('/orders').to(\`user:\${userId}\`).emit('ORDER_STATE', data);
};`
    },
    metrics: { latency: "<40ms Message Delivery", throughput: "2M+ Users Scaled", uptime: "99.999%" }
  },
  {
    id: "deadlocks",
    num: "07",
    category: "Concurrency & Locks",
    title: "Eliminating Deadlocks in High-Concurrency Booking",
    subtitle: "Replacing blocking row locks with Redis atomic counters and Optimistic Concurrency Control (OCC).",
    failureMode: {
      title: "Row Lock Deadlocks on Limited Slots",
      description: "Hundreds of users reserving the same healthcare appointment or limited ticket slots simultaneously caused PostgreSQL transaction deadlocks and 500 errors.",
      impact: "500 Internal Server Errors • Double Bookings • Lost Revenue"
    },
    tradeoffs: {
      title: "Concurrency Control Strategies",
      options: [
        "Pessimistic SELECT FOR UPDATE: Severe lock contention, slow response.",
        "No Locking: Resulted in catastrophic double-bookings.",
        "Engineered Approach: Redis Atomic Decrement Reservation + Database Optimistic Concurrency Control with version key."
      ],
      decision: "Redis Atomic Token + Database Version Check (OCC)"
    },
    solution: {
      title: "Atomic Redis Token + OCC Versioning",
      description: "Allocated reservations instantly in memory via atomic DECR, followed by idempotent database commit with version key verification.",
      result: "100% Oversell Prevention • 0 Deadlocks under 5,000 Concurrency"
    },
    code: {
      filename: "AtomicBookingService.ts",
      vulnerable: `// ❌ VULNERABLE: Pessimistic Row Lock Deadlock
export async function bookSlot(slotId: string, userId: string) {
    return db.$transaction(async (tx) => {
        const slot = await tx.slot.findUnique({ where: { id: slotId } }); // SELECT FOR UPDATE
        if (slot.availableCount > 0) { // Race condition: Deadlock under concurrency!
            await tx.slot.update({ where: { id: slotId }, data: { availableCount: slot.availableCount - 1 } });
            return tx.booking.create({ data: { slotId, userId } });
        }
    });
}`,
      engineered: `// ✅ MASTER FIX: Redis Atomic DECR + Optimistic Version Key
export async function bookSlotAtomic(slotId: string, userId: string) {
    const remaining = await redis.decr(\`slot:\${slotId}:count\`);
    if (remaining < 0) {
        await redis.incr(\`slot:\${slotId}:count\`); // Revert
        throw new Error('SLOT_CAPACITY_EXCEEDED');
    }

    return db.$transaction(async (tx) => {
        const updated = await tx.slot.updateMany({
            where: { id: slotId, availableCount: { gt: 0 } },
            data: { availableCount: { decrement: 1 }, version: { increment: 1 } }
        });
        if (updated.count === 0) throw new Error('OPTIMISTIC_LOCK_FAILED');
        return tx.booking.create({ data: { slotId, userId } });
    });
}`
    },
    metrics: { latency: "14ms Allocation", throughput: "5,000 Bookings/s", uptime: "Zero Deadlocks" }
  },
  {
    id: "search",
    num: "08",
    category: "Search & Indexing",
    title: "Multi-Million Record Search from 4.2s to 22ms",
    subtitle: "Replacing slow SQL wildcards with PostgreSQL GIN Trigram indexes and asynchronous Meilisearch sync.",
    failureMode: {
      title: "Unindexed Full Table Wildcard Scans",
      description: "Executing SQL `LIKE '%query%'` across millions of product and medical records caused full table scans, locking DB CPUs for 4+ seconds per search.",
      impact: "4,200ms Latency • High Bounce Rates • Server Strain"
    },
    tradeoffs: {
      title: "Search Architectures Evaluated",
      options: [
        "Elasticsearch Cluster: Added $1,500/mo server costs and JVM memory overhead.",
        "Standard B-Tree Index: Cannot optimize leading wildcard searches (`%term`).",
        "Engineered Approach: PostgreSQL GIN Trigram extension + asynchronous Meilisearch edge synchronization."
      ],
      decision: "PostgreSQL GIN Trigrams + Meilisearch Index"
    },
    solution: {
      title: "GIN Trigram & Meilisearch Pipeline",
      description: "Implemented GIN trigram indexes for instantaneous typo-tolerant searches without external infrastructure overhead.",
      result: "4,200ms → 22ms Search Latency • Typo Tolerant Search"
    },
    code: {
      filename: "SearchIndexOptimization.sql",
      vulnerable: `-- ❌ VULNERABLE: Full Table Scan on 2M+ Rows (Takes 4.2 seconds!)
SELECT id, title, price_cents, category 
FROM marketplace_listings 
WHERE title ILIKE '%mechanic%' OR description ILIKE '%mechanic%'
ORDER BY created_at DESC 
LIMIT 50; -- Sequential scan across all 2,000,000+ records!`,
      engineered: `-- ✅ MASTER FIX: PostgreSQL GIN Trigram Index (Executes in 22ms!)
CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE INDEX idx_listings_trgm_search 
ON marketplace_listings 
USING GIN (title gin_trgm_ops, description gin_trgm_ops) 
WHERE status = 'ACTIVE';

-- Optimized Query using Index Condition:
SELECT id, title, price_cents, category 
FROM marketplace_listings 
WHERE title %> 'mechanic' AND status = 'ACTIVE' 
ORDER BY similarity(title, 'mechanic') DESC 
LIMIT 50;`
    },
    metrics: { latency: "4.2s → 22ms", throughput: "6,500 req/s", uptime: "99.999%" }
  },
  {
    id: "auth-latency",
    num: "09",
    category: "Auth & Gateway",
    title: "Eliminating 150ms Microservice Auth Latency",
    subtitle: "Moving from stateful database lookups to stateless EdDSA public-key JWT verification with Redis revoke lists.",
    failureMode: {
      title: "Database Session Lookup per RPC Hop",
      description: "Querying central session database on every microservice hop added 30ms-50ms per internal call, resulting in 150ms+ latency on composite pages.",
      impact: "High Database Connection Load • High Latency on Internal APIs"
    },
    tradeoffs: {
      title: "Authentication Paradigms Evaluated",
      options: [
        "Central Session DB: High query load, bottleneck for every service.",
        "Symmetric HMAC JWTs: Insecure to distribute shared secrets to all services.",
        "Engineered Approach: Asymmetric EdDSA Public-Key Verification at API Gateway with distributed Redis Revoke Bloom Filter."
      ],
      decision: "Asymmetric EdDSA JWTs + Redis Revoke Filter"
    },
    solution: {
      title: "Stateless Gateway Auth Verification",
      description: "Public key verification at edge gateway with sub-millisecond Redis revoke checks, completely removing database lookups.",
      result: "150ms → <1.8ms Gateway Overhead • Zero Auth DB Load"
    },
    code: {
      filename: "EdgeAuthVerifier.ts",
      vulnerable: `// ❌ VULNERABLE: Database Session Query on Every Internal Service Call
export async function authenticateInternalRequest(req: Request) {
    const token = req.headers.get('Authorization');
    // Hits central database on every microservice hop! (150ms overhead)
    const session = await db.session.findUnique({ where: { token }, include: { user: true } });
    if (!session || session.expiresAt < new Date()) throw new Error('UNAUTHORIZED');
    return session.user;
}`,
      engineered: `// ✅ MASTER FIX: Stateless EdDSA Verification + Redis Revoke Check
import { jwtVerify, importSPKI } from 'jose';

const publicKey = await importSPKI(process.env.ED25519_PUBLIC_KEY!, 'EdDSA');

export async function verifyGatewayAuth(token: string) {
    const { payload } = await jwtVerify(token, publicKey, { algorithms: ['EdDSA'] });
    const isRevoked = await redis.sismember('auth:revoked_tokens', payload.jti as string);
    if (isRevoked) throw new Error('TOKEN_REVOKED');

    return { userId: payload.sub, role: payload.role, tenantId: payload.tenantId };
}`
    },
    metrics: { latency: "150ms → 1.8ms", throughput: "15,000 req/s", uptime: "99.999%" }
  },
  {
    id: "circuit-breaker",
    num: "10",
    category: "Resilience & APIs",
    title: "Preventing Cascading Outages with Circuit Breakers",
    subtitle: "Isolating third-party payment, SMS, and carrier API failures to maintain 99.999% application availability.",
    failureMode: {
      title: "3rd-Party Outage Cascading to Web App",
      description: "When an external shipping API hung for 30 seconds, all web worker threads got stuck waiting on the socket, taking down the entire customer portal.",
      impact: "Complete Website Downtime • Blocked Checkout • Revenue Loss"
    },
    tradeoffs: {
      title: "Resilience Patterns Considered",
      options: [
        "Short Socket Timeouts: Still backed up workers during high concurrency.",
        "Manual Disabling: Required engineer on-call intervention.",
        "Engineered Approach: Automated Circuit Breaker (Closed → Open → Half-Open states) with graceful fallback cache."
      ],
      decision: "Automated Circuit Breaker with Fallback Cache"
    },
    solution: {
      title: "Automated Circuit Breaker Tripping",
      description: "Automatically trips open when failure rate exceeds 20%, serving cached fallbacks instantly and self-healing when upstream recovers.",
      result: "99.999% Core Platform Uptime • Zero Cascading Failures"
    },
    code: {
      filename: "CircuitBreakerService.ts",
      vulnerable: `// ❌ VULNERABLE: Direct 3rd-Party API Call Without Circuit Breaker
export async function getShippingRate(address: Address) {
    // If carrier API slows down to 30 seconds, all web workers hang and server crashes!
    const response = await fetch('https://api.carrier.com/rates', { method: 'POST', body: JSON.stringify(address) });
    return response.json();
}`,
      engineered: `// ✅ MASTER FIX: Circuit Breaker with Fallback Cache
export class CircuitBreaker {
    private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED';
    private failureCount = 0;

    async execute<T>(action: () => Promise<T>, fallback: () => Promise<T>): Promise<T> {
        if (this.state === 'OPEN') return fallback(); // Serve fallback immediately without waiting!

        try {
            const result = await Promise.race([action(), timeoutPromise(3000)]);
            this.state = 'CLOSED';
            this.failureCount = 0;
            return result as T;
        } catch (err) {
            this.failureCount++;
            if (this.failureCount > 5) this.state = 'OPEN';
            return fallback();
        }
    }
}`
    },
    metrics: { latency: "<5ms Fallback", throughput: "Zero Cascading Crashes", uptime: "99.999%" }
  }
];

// Repositories to exclude from portfolio showcase
const EXCLUDED_REPOS = [
  "your-dining-club",
  "dotfiles",
  "exelentshakil",
  "awesome-stock-resources",
  "elementor",
  "Switcheroo",
  "reactjs.org",
  "nuxt.js",
  "socket.io",
  "SumonMSelim",
  "vue",
  "cocoen",
  "awesome-laravel",
  "jwt-auth",
  "woocommerce",
  "the-php-practitioner",
  "ES6-Learning",
  "phpstorm-code-style",
  "Scrollify",
  "wedocs-plugin",
  "responsive-html-email-template",
  "airfare",
  "noonsmart"
];

export default function PortfolioPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>(CACHED_GITHUB_REPOS);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"marquee" | "grid">("marquee");
  const [activeBlueprintIndex, setActiveBlueprintIndex] = useState<number>(0);
  const [codeComparisonTab, setCodeComparisonTab] = useState<"before" | "after">("after");

  // GSAP Entrance Choreography
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gsap-reveal", {
        opacity: 0,
        y: 20,
        duration: 0.65,
        stagger: 0.08,
        ease: "power2.out",
      });
      gsap.from(".gsap-stat", {
        opacity: 0,
        y: 15,
        duration: 0.55,
        stagger: 0.06,
        delay: 0.25,
        ease: "power1.out",
      });
    }, pageRef);

    // Fetch GitHub Repositories with safe mapping and fallback
    fetch("https://api.github.com/users/exelentshakil/repos?per_page=30&sort=updated")
      .then((res) => res.json())
      .then((data: GitHubRepo[]) => {
        if (Array.isArray(data) && data.length > 0) {
          const mappedRepos = data
            .filter((r) => !EXCLUDED_REPOS.some((skip) => r.name.toLowerCase().includes(skip.toLowerCase())))
            .map((r) => ({
              ...r,
              description: CUSTOM_REPO_DESCRIPTIONS[r.name] || r.description || "Open source production module and engineering utility."
            }))
            .slice(0, 6);

          if (mappedRepos.length >= 6) {
            setRepos(mappedRepos);
          } else {
            // Merge with cached list to guarantee 6 rich cards
            const merged = [...mappedRepos];
            for (const cached of CACHED_GITHUB_REPOS) {
              if (merged.length >= 6) break;
              if (!merged.some((m) => m.name.toLowerCase() === cached.name.toLowerCase())) {
                merged.push(cached);
              }
            }
            setRepos(merged.slice(0, 6));
          }
        }
      })
      .catch(() => {
        // Keeps the pre-cached fallback repositories
      });

    return () => ctx.revert();
  }, []);

  const categories = useMemo(() => [
    "all",
    "marketplace",
    "healthcare",
    "legal",
    "sports",
    "agency",
    "ecommerce",
    "business",
    "lifestyle"
  ], []);

  const filteredSites = useMemo(() => {
    if (activeCategory === "all") return sites;
    return sites.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  // Dual Marquee split (Even / Odd) to display ALL 60+ screenshots in dual smooth rolling tracks
  const marqueeTrack1 = useMemo(() => sites.filter((_, i) => i % 2 === 0), []);
  const marqueeTrack2 = useMemo(() => sites.filter((_, i) => i % 2 !== 0), []);

  return (
    <div ref={pageRef} className="min-h-screen bg-white text-[#0D1738]">
      
      {/* -------------------------------------------------------------------- */}
      {/* 1. TOP NAVIGATION BAR */}
      {/* -------------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#EAECF0]">
        <div className="site-container h-16 flex items-center justify-between gap-4">
          
          {/* Brand */}
          <a href="#top" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[4px] bg-[#0D1738] flex items-center justify-center p-1 border border-slate-700 shadow-sm">
              <Image src="/logo.png" alt="Shakil HQ" width={24} height={24} className="object-contain" priority />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold text-sm text-[#0D1738] leading-none">
                Shakil HQ
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" title="Available for projects" />
              </div>
              <div className="text-[11px] font-medium text-[#475467] leading-none mt-1">
                Lead System Architect
              </div>
            </div>
          </a>

          {/* Clean Desktop Nav Links with Premium Icons */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-[#344054]">
            <a href="#proof" className="flex items-center gap-1.5 hover:text-[#533AFD] transition-colors">
              <Activity className="w-3.5 h-3.5 text-[#533AFD]" />
              <span>Metrics</span>
            </a>
            <a href="#flagship" className="flex items-center gap-1.5 hover:text-[#533AFD] transition-colors">
              <Zap className="w-3.5 h-3.5 text-[#533AFD]" />
              <span>Flagship</span>
            </a>
            <a href="#portfolio" className="flex items-center gap-1.5 hover:text-[#533AFD] transition-colors">
              <Grid className="w-3.5 h-3.5 text-[#533AFD]" />
              <span>Deployments</span>
            </a>
            <a href="#architecture" className="flex items-center gap-1.5 hover:text-[#533AFD] transition-colors">
              <Layers3 className="w-3.5 h-3.5 text-[#533AFD]" />
              <span>Architecture</span>
            </a>
            <a href="#reviews" className="flex items-center gap-1.5 hover:text-[#533AFD] transition-colors">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span>Reviews</span>
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/13075336678?text=Hi%20Shakil,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-xs py-1.5 px-3 hidden sm:inline-flex"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              WhatsApp
            </a>
            <a
              href="https://calendly.com/shakilhq/30min"
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-xs py-1.5 px-3.5"
            >
              Book Call
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* -------------------------------------------------------------------- */}
      {/* 2. HERO SECTION */}
      {/* -------------------------------------------------------------------- */}
      <section id="top" className="relative pt-10 pb-14 md:pt-14 md:pb-18 border-b border-[#EAECF0] bg-gradient-to-b from-[#F8F9FC] via-white to-white">
        <div className="site-container">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Clean, Authoritative Engineering Headline & Positioning */}
            <div className="lg:col-span-7 space-y-4 gsap-reveal">
              
              {/* Sleek Unified Profile Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white border border-[#D0D5DD] shadow-sm text-xs text-[#0D1738]">
                <div className="relative w-5 h-5 rounded-full overflow-hidden border border-slate-300 shrink-0 bg-slate-100">
                  <Image
                    src="/shakil-headshot.jpeg"
                    alt="Shakil Ahmed"
                    fill
                    sizes="20px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <span className="font-semibold text-[#0D1738]">Shakil Ahmed</span>
                <span className="text-[#D0D5DD]">•</span>
                <span className="text-emerald-700 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  Available for Contracts
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[3.1rem] font-bold text-[#0D1738] tracking-[-0.035em] leading-[1.12]">
                Engineering high-throughput platforms & resilient backend APIs.
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#475467] font-normal leading-relaxed max-w-xl">
                12+ years building enterprise architectures and scalable backends. Lead platform architect behind <strong className="text-[#0D1738] font-semibold">Legiit</strong> (2M+ active users, $40M+ volume). Specialist in Laravel, Node.js, Python, PostgreSQL, Next.js, and Stripe payment systems.
              </p>

              {/* Action Buttons (Clean & Tight) */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="https://calendly.com/shakilhq/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <Calendar className="w-4 h-4" />
                  Book Strategy Call
                </a>

                <a
                  href="https://wa.me/13075336678?text=Hi%20Shakil,%20I'm%20looking%20to%20build%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  WhatsApp (+1 307 533-6678)
                </a>

                <a
                  href="#portfolio"
                  className="text-xs font-semibold text-[#533AFD] hover:underline flex items-center gap-1 ml-1"
                >
                  <span>Browse 60+ Deployments</span>
                  <ArrowDownRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Sleek Horizontal Verification Row */}
              <div className="pt-3 border-t border-[#EAECF0] flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#667085]">
                <div className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                  <span className="font-semibold text-[#0D1738]">Freelancer.com Top Rated</span>
                  <span className="text-[#667085]">(4.9 ★ • 127+ Reviews)</span>
                </div>
                <span className="hidden sm:inline text-[#D0D5DD]">•</span>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#533AFD]" />
                  <span>100% On-Time SLA</span>
                </div>
                <span className="hidden sm:inline text-[#D0D5DD]">•</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#533AFD]" />
                  <span>BarakahSoft LLC (USA)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Production Telemetry Panel (Recharts) */}
            <div className="lg:col-span-5 gsap-reveal">
              <div className="bg-white rounded-[4px] p-5 border border-[#D0D5DD] shadow-sm">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#EAECF0]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#344054]">Core Platform Telemetry</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-[2px] bg-[#F4F3FF] text-[#533AFD] font-semibold border border-[#D9D6FE]">
                    Legiit Production
                  </span>
                </div>

                {/* Top Metrics Grid */}
                <div className="grid grid-cols-3 gap-2.5 my-3.5">
                  <div className="p-2 rounded-[4px] bg-[#F8F9FC] border border-[#EAECF0] text-center">
                    <div className="text-[11px] text-[#667085] font-medium">Active Users</div>
                    <div className="text-lg font-bold text-[#0D1738]">2,000,000+</div>
                  </div>
                  <div className="p-2 rounded-[4px] bg-[#F8F9FC] border border-[#EAECF0] text-center">
                    <div className="text-[11px] text-[#667085] font-medium">Query Latency</div>
                    <div className="text-lg font-bold text-emerald-700">118 ms</div>
                  </div>
                  <div className="p-2 rounded-[4px] bg-[#F8F9FC] border border-[#EAECF0] text-center">
                    <div className="text-[11px] text-[#667085] font-medium">Service Uptime</div>
                    <div className="text-lg font-bold text-[#533AFD]">99.999%</div>
                  </div>
                </div>

                {/* Recharts Area Chart */}
                <div className="h-36 w-full pt-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={telemetryData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                      <defs>
                        <linearGradient id="throughputGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#533AFD" stopOpacity={0.15} />
                          <stop offset="95%" stopColor="#533AFD" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#F2F4F7" vertical={false} />
                      <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#667085" }} axisLine={false} tickLine={false} />
                      <YAxis domain={[0, 4000]} tick={{ fontSize: 10, fill: "#667085" }} axisLine={false} tickLine={false} />
                      <Tooltip content={<CustomTelemetryTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="throughput"
                        stroke="#533AFD"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#throughputGrad)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Microservice Architecture Tags */}
                <div className="mt-3 pt-3 border-t border-[#EAECF0] flex items-center justify-between text-[11px] text-[#667085]">
                  <span className="flex items-center gap-1">
                    <Activity className="w-3 h-3 text-emerald-600" />
                    <span>Celery Queues: Active</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Database className="w-3 h-3 text-[#533AFD]" />
                    <span>Redis: 98.4% Hit</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3 text-amber-600" />
                    <span>Stripe Escrow: Live</span>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 3. STRIPE-STYLE STAT BAND */}
      {/* -------------------------------------------------------------------- */}
      <section id="proof" className="bg-white border-b border-[#EAECF0] py-10">
        <div className="site-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#EAECF0]">
            
            <div className="pt-3 lg:pt-0 lg:px-4 gsap-stat">
              <div className="text-3xl sm:text-4xl font-bold text-[#0D1738] tracking-tight">2M+</div>
              <div className="text-xs font-semibold text-[#344054] mt-0.5">Active Marketplace Users</div>
              <p className="text-[11px] text-[#667085] mt-1">Platform architecture powering Legiit.com global transactions.</p>
            </div>

            <div className="pt-3 lg:pt-0 lg:px-4 gsap-stat">
              <div className="text-3xl sm:text-4xl font-bold text-[#0D1738] tracking-tight">115+</div>
              <div className="text-xs font-semibold text-[#344054] mt-0.5">Production Systems Shipped</div>
              <p className="text-[11px] text-[#667085] mt-1">Deployments across healthcare, legal, SaaS, fintech & commerce.</p>
            </div>

            <div className="pt-3 lg:pt-0 lg:px-4 gsap-stat">
              <div className="text-3xl sm:text-4xl font-bold text-[#0D1738] tracking-tight">99%</div>
              <div className="text-xs font-semibold text-[#344054] mt-0.5">Client Satisfaction</div>
              <p className="text-[11px] text-[#667085] mt-1">Over 125+ verified five-star client reviews on Freelancer & Upwork.</p>
            </div>

            <div className="pt-3 lg:pt-0 lg:px-4 gsap-stat">
              <div className="text-3xl sm:text-4xl font-bold text-[#0D1738] tracking-tight">12+ Yrs</div>
              <div className="text-xs font-semibold text-[#344054] mt-0.5">Engineering Leadership</div>
              <p className="text-[11px] text-[#667085] mt-1">Full lifecycle development from scratch to multi-tenant scaling.</p>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 4. FEATURED FLAGSHIP CASE STUDY: LEGIIT */}
      {/* -------------------------------------------------------------------- */}
      <section id="flagship" className="section-pad bg-[#F8FAFC]">
        <div className="site-container">
          
          <div className="max-w-2xl mb-8">
            <span className="badge-tag mb-2">Flagship Architecture</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D1738] tracking-tight">
              Scaling Legiit to 2,000,000+ Users
            </h2>
            <p className="text-xs sm:text-sm text-[#475467] mt-2">
              Served as Lead Engineer & Platform Architect. Re-engineered core transaction pipelines, search indexing, real-time messaging, and multi-currency payouts to support exponential marketplace growth.
            </p>
          </div>

          {/* Main Case Study Bento Card */}
          <div className="bg-white rounded-[4px] border border-[#D0D5DD] p-6 lg:p-8 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details & Technical Wins */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-[2px] bg-[#F4F3FF] border border-[#D9D6FE] text-[#533AFD] text-[11px] font-bold uppercase">
                    Freelance Marketplace
                  </span>
                  <span className="px-2.5 py-0.5 rounded-[2px] bg-[#ECFDF3] border border-[#A6F4C5] text-[#027A48] text-[11px] font-bold">
                    2M+ Registered Accounts
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0D1738] tracking-tight">
                  High-Concurrency Marketplace Core
                </h3>

                <p className="text-[#475467] text-xs sm:text-sm leading-relaxed">
                  Architected the entire billing flow, wallet escrow holding, instant seller payouts, and WebSockets messaging. Scaled platform with zero service interruptions during major peak events.
                </p>

                {/* Technical Achievements List */}
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-[#344054]">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span><strong>Stripe Connect & Escrow:</strong> Automated order hold, milestone release, affiliate splits, and automated ledger balancing.</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs sm:text-sm text-[#344054]">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span><strong>Database Tuning:</strong> Reduced search & analytics queries from 800ms down to 118ms under concurrent load.</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs sm:text-sm text-[#344054]">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span><strong>Real-Time Messaging:</strong> WebSockets chat engine with live file previews, order sync, and native mobile notifications.</span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["Laravel", "Django", "Node.js", "React", "Next.js", "MySQL", "Redis", "Celery", "AWS", "Stripe API"].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded-[2px] bg-[#F2F4F7] text-[#344054] font-mono text-[11px] font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Direct Action Link */}
                <div className="pt-2">
                  <a
                    href="https://legiit.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-xs"
                  >
                    Visit Live Platform (Legiit.com)
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Web + Mobile Screenshots */}
              <div className="lg:col-span-6 space-y-3">
                <div className="relative aspect-[16/10] rounded-[4px] overflow-hidden border border-[#D0D5DD] shadow-sm bg-slate-900">
                  <Image
                    src="/screenshots/Legiit.png"
                    alt="Legiit Marketplace Web Platform"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-[2px] bg-[#0D1738]/90 text-white text-[10px] font-semibold">
                    Web Platform
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-[16/9] rounded-[4px] overflow-hidden border border-[#D0D5DD] shadow-sm bg-slate-900">
                    <Image
                      src="/screenshots/Legiit - iOS.png"
                      alt="Legiit iOS App"
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-[2px] bg-black/80 text-white text-[9px] font-semibold">
                      iOS App (4.0 ★)
                    </div>
                  </div>

                  <div className="relative aspect-[16/9] rounded-[4px] overflow-hidden border border-[#D0D5DD] shadow-sm bg-slate-900">
                    <Image
                      src="/screenshots/Legiit - Android.png"
                      alt="Legiit Android App"
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-[2px] bg-black/80 text-white text-[9px] font-semibold">
                      Android (4.5 ★)
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 4.5 10 CRITICAL BOTTLENECKS IN SCALABLE SYSTEMS — INTERACTIVE LAB */}
      {/* -------------------------------------------------------------------- */}
      <section className="section-pad bg-white border-b border-[#EAECF0]">
        <div className="site-container">
          
          {/* Section Header with Slider Navigation Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div className="max-w-2xl">
              <span className="badge-tag mb-2">Architectural Strategy Lab</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D1738] tracking-tight">
                10 Bottlenecks in Scalable Systems — Diagnosed & Resolved
              </h2>
              <p className="text-xs sm:text-sm text-[#475467] mt-1.5 leading-relaxed">
                How I identify root causes, evaluate framework trade-offs, and engineer high-concurrency solutions that keep systems fast and reliable under heavy traffic.
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-[#533AFD] bg-[#F4F3FF] px-2.5 py-1 rounded-[4px] border border-[#D9D6FE]">
                {SYSTEM_BOTTLENECK_STUDIES[activeBlueprintIndex].num} / 10
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveBlueprintIndex((prev) => (prev > 0 ? prev - 1 : SYSTEM_BOTTLENECK_STUDIES.length - 1))}
                  aria-label="Previous system bottleneck"
                  className="w-8 h-8 rounded-[4px] bg-white border border-[#D0D5DD] hover:border-[#533AFD] hover:text-[#533AFD] flex items-center justify-center text-[#344054] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setActiveBlueprintIndex((prev) => (prev < SYSTEM_BOTTLENECK_STUDIES.length - 1 ? prev + 1 : 0))}
                  aria-label="Next system bottleneck"
                  className="w-8 h-8 rounded-[4px] bg-white border border-[#D0D5DD] hover:border-[#533AFD] hover:text-[#533AFD] flex items-center justify-center text-[#344054] transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick-Jump Problem Selector Track */}
          <div className="overflow-x-auto pb-3 mb-6 no-scrollbar">
            <div className="flex items-center gap-2 min-w-max">
              {SYSTEM_BOTTLENECK_STUDIES.map((study, idx) => (
                <button
                  key={study.id}
                  onClick={() => setActiveBlueprintIndex(idx)}
                  className={`px-3 py-1.5 rounded-[4px] text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    activeBlueprintIndex === idx
                      ? "bg-[#533AFD] text-white shadow-sm"
                      : "bg-[#F8FAFC] text-[#344054] border border-[#EAECF0] hover:bg-[#F2F4F7]"
                  }`}
                >
                  <span className="font-mono text-[11px] opacity-80">{study.num}</span>
                  <span>{study.title.split("&")[0].split("—")[0].trim()}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Bottleneck Deep-Dive Card */}
          <div className="bg-[#F8FAFC] rounded-[4px] border border-[#D0D5DD] p-6 lg:p-8 mb-6 shadow-sm">
            
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-[#EAECF0]">
              <div>
                <span className="px-2.5 py-0.5 rounded-[2px] bg-[#F4F3FF] border border-[#D9D6FE] text-[#533AFD] text-[11px] font-bold uppercase">
                  {SYSTEM_BOTTLENECK_STUDIES[activeBlueprintIndex].category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0D1738] mt-1.5 tracking-tight">
                  {SYSTEM_BOTTLENECK_STUDIES[activeBlueprintIndex].title}
                </h3>
                <p className="text-xs text-[#475467] mt-0.5">
                  {SYSTEM_BOTTLENECK_STUDIES[activeBlueprintIndex].subtitle}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-[#533AFD] font-bold">
                  Latency: {SYSTEM_BOTTLENECK_STUDIES[activeBlueprintIndex].metrics.latency}
                </span>
                <span className="text-emerald-700 font-bold">
                  Throughput: {SYSTEM_BOTTLENECK_STUDIES[activeBlueprintIndex].metrics.throughput}
                </span>
              </div>
            </div>

            {/* 3-Column Architecture Strategy Breakdown */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              
              {/* Stage 1: The Diagnosis */}
              <div className="p-4 rounded-[4px] bg-[#FFF5F5] border border-[#FEDF89] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800 uppercase tracking-wider mb-1.5">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>1. The Failure Mode</span>
                  </div>
                  <h4 className="text-xs font-bold text-[#0D1738] mb-1">
                    {SYSTEM_BOTTLENECK_STUDIES[activeBlueprintIndex].failureMode.title}
                  </h4>
                  <p className="text-xs text-[#475467] leading-relaxed">
                    {SYSTEM_BOTTLENECK_STUDIES[activeBlueprintIndex].failureMode.description}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-rose-200 text-[11px] font-mono text-rose-700 font-semibold">
                  {SYSTEM_BOTTLENECK_STUDIES[activeBlueprintIndex].failureMode.impact}
                </div>
              </div>

              {/* Stage 2: Framework & Trade-off Evaluation */}
              <div className="p-4 rounded-[4px] bg-white border border-[#D0D5DD] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#533AFD] uppercase tracking-wider mb-1.5">
                    <Cpu className="w-4 h-4 text-[#533AFD]" />
                    <span>2. Trade-offs Evaluated</span>
                  </div>
                  <h4 className="text-xs font-bold text-[#0D1738] mb-1">
                    {SYSTEM_BOTTLENECK_STUDIES[activeBlueprintIndex].tradeoffs.title}
                  </h4>
                  <div className="space-y-1 text-xs text-[#475467]">
                    {SYSTEM_BOTTLENECK_STUDIES[activeBlueprintIndex].tradeoffs.options.map((opt, i) => (
                      <p key={i}>• {opt}</p>
                    ))}
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[#EAECF0] text-[11px] font-mono text-[#533AFD] font-semibold">
                  {SYSTEM_BOTTLENECK_STUDIES[activeBlueprintIndex].tradeoffs.decision}
                </div>
              </div>

              {/* Stage 3: The Production Outcome */}
              <div className="p-4 rounded-[4px] bg-[#ECFDF3] border border-[#A6F4C5] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>3. Engineered Solution</span>
                  </div>
                  <h4 className="text-xs font-bold text-[#0D1738] mb-1">
                    {SYSTEM_BOTTLENECK_STUDIES[activeBlueprintIndex].solution.title}
                  </h4>
                  <p className="text-xs text-[#475467] leading-relaxed">
                    {SYSTEM_BOTTLENECK_STUDIES[activeBlueprintIndex].solution.description}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-emerald-200 text-[11px] font-mono text-emerald-800 font-semibold">
                  {SYSTEM_BOTTLENECK_STUDIES[activeBlueprintIndex].solution.result}
                </div>
              </div>

            </div>

            {/* Interactive Code Comparison Terminal */}
            <div className="rounded-[4px] bg-[#0D1738] border border-slate-700 overflow-hidden shadow-md">
              
              {/* Header & Tabs */}
              <div className="px-4 py-2.5 bg-[#09112B] border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-300 font-semibold">
                    {SYSTEM_BOTTLENECK_STUDIES[activeBlueprintIndex].code.filename}
                  </span>
                </div>

                {/* Code Toggle Tabs */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCodeComparisonTab("before")}
                    className={`px-2.5 py-1 rounded-[2px] text-xs font-semibold font-mono transition-all ${
                      codeComparisonTab === "before"
                        ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    ❌ Vulnerable Bottleneck
                  </button>

                  <button
                    onClick={() => setCodeComparisonTab("after")}
                    className={`px-2.5 py-1 rounded-[2px] text-xs font-semibold font-mono transition-all ${
                      codeComparisonTab === "after"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    ✅ Engineered Solution
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-4 text-xs font-mono overflow-x-auto leading-relaxed text-slate-200">
                <pre className={codeComparisonTab === "before" ? "text-rose-200" : "text-emerald-200"}>
                  <code>
                    {codeComparisonTab === "before"
                      ? SYSTEM_BOTTLENECK_STUDIES[activeBlueprintIndex].code.vulnerable
                      : SYSTEM_BOTTLENECK_STUDIES[activeBlueprintIndex].code.engineered}
                  </code>
                </pre>
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2 bg-[#09112B] border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Verified Production Architecture Benchmark</span>
                </span>
                <span className="text-[#8D7BFF]">
                  {SYSTEM_BOTTLENECK_STUDIES[activeBlueprintIndex].category} • {SYSTEM_BOTTLENECK_STUDIES[activeBlueprintIndex].metrics.uptime} Uptime
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 5. "DIFFERENT INDUSTRIES. SAME STANDARD." (ALL 60+ SCREENSHOTS) */}
      {/* -------------------------------------------------------------------- */}
      <section id="portfolio" className="section-pad bg-white border-b border-[#EAECF0] overflow-hidden">
        <div className="site-container mb-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="badge-tag mb-2">Production Catalog</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D1738] tracking-tight">
                Different Industries. Same Standard.
              </h2>
              <p className="text-xs sm:text-sm text-[#475467] mt-1 max-w-xl">
                Showcasing all 60+ production platforms, customer portals, and lead engines deployed for real businesses.
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("marquee")}
                className={`px-3 py-1.5 rounded-[4px] text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  viewMode === "marquee"
                    ? "bg-[#533AFD] text-white"
                    : "bg-[#F2F4F7] text-[#344054] hover:bg-[#EAECF0]"
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Live Scrolling Marquee
              </button>

              <button
                onClick={() => setViewMode("grid")}
                className={`px-3 py-1.5 rounded-[4px] text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  viewMode === "grid"
                    ? "bg-[#533AFD] text-white"
                    : "bg-[#F2F4F7] text-[#344054] hover:bg-[#EAECF0]"
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                Filterable Bento Grid
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 mt-6 pt-3 border-t border-[#EAECF0]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  if (viewMode === "marquee") setViewMode("grid");
                }}
                className={`px-3 py-1 rounded-[4px] text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-[#0D1738] text-white"
                    : "bg-[#F2F4F7] text-[#475467] hover:bg-[#EAECF0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* --- VIEW MODE 1: NATURAL SMOOTH MARQUEE SLIDERS (ALL SCREENSHOTS) --- */}
        {viewMode === "marquee" ? (
          <div className="space-y-4 pt-2">
            
            {/* Track 1: Scrolling Left */}
            <div className="overflow-hidden whitespace-nowrap py-1">
              <div className="animate-marquee-left flex gap-4">
                {[...marqueeTrack1, ...marqueeTrack1].map((site, index) => (
                  <MarqueeSiteCard key={`track1-${site.url}-${index}`} site={site} />
                ))}
              </div>
            </div>

            {/* Track 2: Scrolling Right */}
            <div className="overflow-hidden whitespace-nowrap py-1">
              <div className="animate-marquee-right flex gap-4">
                {[...marqueeTrack2, ...marqueeTrack2].map((site, index) => (
                  <MarqueeSiteCard key={`track2-${site.url}-${index}`} site={site} />
                ))}
              </div>
            </div>

            <div className="site-container text-center pt-4">
              <p className="text-[11px] text-[#667085]">
                Continuous live catalog of 60+ client systems. Hover any card to pause and inspect metrics.
              </p>
            </div>

          </div>
        ) : (
          /* --- VIEW MODE 2: FILTERABLE BENTO GRID --- */
          <div className="site-container pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredSites.map((site) => (
                <GridSiteCard key={`grid-${site.url}`} site={site} />
              ))}
            </div>
          </div>
        )}

      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 6. TECHNICAL ARCHITECTURE & BENCHMARKS (RECHARTS) */}
      {/* -------------------------------------------------------------------- */}
      <section id="architecture" className="section-pad bg-[#F8FAFC] border-b border-[#EAECF0]">
        <div className="site-container">
          
          <div className="max-w-2xl mb-10">
            <span className="badge-tag mb-2">Technical Foundations</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D1738] tracking-tight">
              Systems Engineered For Longevity
            </h2>
            <p className="text-xs sm:text-sm text-[#475467] mt-1.5">
              Architecture decisions focused on maintainability, query speed, transaction integrity, and minimal operational overhead.
            </p>
          </div>

          {/* 4 Architectural Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            
            <div className="bg-white p-5 rounded-[4px] border border-[#D0D5DD]">
              <div className="w-9 h-9 rounded-[4px] bg-[#F4F3FF] text-[#533AFD] flex items-center justify-center mb-3">
                <Layers3 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0D1738] mb-1">Full-Stack SaaS & Web</h3>
              <p className="text-xs text-[#475467] leading-relaxed">
                Next.js 15, React 19, TypeScript, Tailwind, Server Components, and responsive mobile architecture.
              </p>
            </div>

            <div className="bg-white p-5 rounded-[4px] border border-[#D0D5DD]">
              <div className="w-9 h-9 rounded-[4px] bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0D1738] mb-1">High-Throughput APIs</h3>
              <p className="text-xs text-[#475467] leading-relaxed">
                Laravel, Node.js/NestJS, Python Django, Celery background queues, and WebSockets real-time sync.
              </p>
            </div>

            <div className="bg-white p-5 rounded-[4px] border border-[#D0D5DD]">
              <div className="w-9 h-9 rounded-[4px] bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0D1738] mb-1">Fintech & Billing Escrow</h3>
              <p className="text-xs text-[#475467] leading-relaxed">
                Stripe Connect, escrow holding, automated splits, webhook handlers, and multi-currency ledgers.
              </p>
            </div>

            <div className="bg-white p-5 rounded-[4px] border border-[#D0D5DD]">
              <div className="w-9 h-9 rounded-[4px] bg-indigo-50 text-[#533AFD] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0D1738] mb-1">Database & Infrastructure</h3>
              <p className="text-xs text-[#475467] leading-relaxed">
                PostgreSQL/MySQL index tuning, Redis caching, AWS EC2/S3 deployment, and HIPAA compliance.
              </p>
            </div>

          </div>

          {/* Benchmark Comparison Chart */}
          <div className="bg-white rounded-[4px] border border-[#D0D5DD] p-6 lg:p-8">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-5 space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#533AFD]">Quantitative Standards</span>
                <h3 className="text-xl font-bold text-[#0D1738]">
                  Architectural Rigor vs. Generic Freelance Builds
                </h3>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  Comparing critical execution standards across production deployments. Rigorous architecture directly reduces cloud bills and eliminates refactoring debt.
                </p>
                <div className="flex items-center gap-4 pt-1 text-xs font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-[#533AFD]" />
                    <span>My Standard</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-[#D0D5DD]" />
                    <span>Typical Agency Build</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 h-52 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={benchmarkComparisonData}
                    layout="vertical"
                    margin={{ top: 5, right: 15, left: 35, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#F2F4F7" horizontal={false} />
                    <XAxis type="number" domain={[0, 100]} hide />
                    <YAxis dataKey="metric" type="category" tick={{ fontSize: 11, fill: "#344054", fontWeight: 600 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "#0D1738", border: "none", borderRadius: 4, color: "#fff", fontSize: 11 }} />
                    <Bar dataKey="customEngineered" name="My Engineering Standard" fill="#533AFD" radius={[0, 2, 2, 0]} />
                    <Bar dataKey="genericBuild" name="Generic Build" fill="#EAECF0" radius={[0, 2, 2, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 7. CEO VIDEO REVIEW & VERIFIED TESTIMONIALS */}
      {/* -------------------------------------------------------------------- */}
      <section id="reviews" className="section-pad bg-white border-b border-[#EAECF0]">
        <div className="site-container">
          
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="badge-tag mb-2">CEO Endorsement</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D1738] tracking-tight">
              &quot;Shaq actually <span className="text-[#533AFD]">works with us</span> on Legiit.&quot;
            </h2>
            <p className="text-xs sm:text-sm text-[#475467] mt-1.5">
              Trusted by marketplace founders, agency CEOs, and high-profile entrepreneurs to engineer scalable digital systems.
            </p>
          </div>

          {/* Freelancer.com Top Rated Performance Strip */}
          <div className="bg-[#F8FAFC] rounded-[4px] border border-[#D0D5DD] p-5 mb-10 max-w-4xl mx-auto shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-[#EAECF0]">
              <div className="pt-2 md:pt-0 md:px-4 text-center">
                <div className="flex items-center justify-center gap-1 text-amber-500 font-bold text-lg">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>4.9 / 5.0</span>
                </div>
                <div className="text-[11px] text-[#475467] font-medium mt-0.5">127+ Verified Reviews</div>
              </div>

              <div className="pt-2 md:pt-0 md:px-4 text-center">
                <div className="text-emerald-700 font-bold text-lg">100%</div>
                <div className="text-[11px] text-[#475467] font-medium mt-0.5">On-Time Delivery</div>
              </div>

              <div className="pt-2 md:pt-0 md:px-4 text-center">
                <div className="text-[#533AFD] font-bold text-lg">94%</div>
                <div className="text-[11px] text-[#475467] font-medium mt-0.5">Repeat Hire Rate</div>
              </div>

              <div className="pt-2 md:pt-0 md:px-4 text-center">
                <div className="text-[#0D1738] font-bold text-lg">Top 1%</div>
                <div className="text-[11px] text-[#475467] font-medium mt-0.5">Preferred Freelancer SLA</div>
              </div>
            </div>
          </div>

          {/* Video Container */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative aspect-video rounded-[4px] overflow-hidden border border-[#D0D5DD] shadow-sm bg-slate-950">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VdPptVpxMPM?rel=0&modestbranding=1"
                title="Legiit CEO Chris Walker Review"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-5">
            
            {/* Chris M Walker */}
            <div className="bg-[#F8FAFC] rounded-[4px] p-5 border border-[#D0D5DD] flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-[#344054] text-xs leading-relaxed mb-4">
                  &quot;Most developers just write code; he thinks in systems. Legiit isn&apos;t a simple website; it&apos;s a complex marketplace with intricate financial logic. He engineered the architecture that allows us to scale safely. I don&apos;t need a freelancer; I need an engineering partner.&quot;
                </p>
              </div>
              <div className="flex items-center gap-2.5 pt-3 border-t border-[#EAECF0]">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#D0D5DD]">
                  <Image src="/chris.jpeg" alt="Chris M. Walker" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-[#0D1738] text-xs">Chris M. Walker</div>
                  <div className="text-[11px] text-[#533AFD] font-medium">CEO, Legiit.com (2M+ Users)</div>
                </div>
              </div>
            </div>

            {/* Jim Sabellico */}
            <div className="bg-[#F8FAFC] rounded-[4px] p-5 border border-[#D0D5DD] flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-[#344054] text-xs leading-relaxed mb-4">
                  &quot;When I land high-stakes clients like Steve Weatherford, I can&apos;t afford &apos;trial and error.&apos; I bring him in because he brings an engineering discipline to agency chaos. He was the technical lead behind our biggest deployments because the code is clean, the database optimized, and the delivery flawless.&quot;
                </p>
              </div>
              <div className="flex items-center gap-2.5 pt-3 border-t border-[#EAECF0]">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#D0D5DD]">
                  <Image src="/jim.jpeg" alt="Jim Sabellico" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-[#0D1738] text-xs">Jim Sabellico</div>
                  <div className="text-[11px] text-[#533AFD] font-medium">Founder, No Half Cakes</div>
                </div>
              </div>
            </div>

            {/* Steve Weatherford */}
            <div className="bg-[#F8FAFC] rounded-[4px] p-5 border border-[#D0D5DD] flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-[#344054] text-xs leading-relaxed mb-4">
                  &quot;I don&apos;t know the code, I just know that my platform needs to perform as hard as I do. The team delivered a digital HQ that handles my traffic, my content, and my sales without blinking. It feels solid, fast, and professional. That&apos;s the standard.&quot;
                </p>
              </div>
              <div className="flex items-center gap-2.5 pt-3 border-t border-[#EAECF0]">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#D0D5DD]">
                  <Image src="/steve.jpeg" alt="Steve Weatherford" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-[#0D1738] text-xs">Steve Weatherford</div>
                  <div className="text-[11px] text-[#533AFD] font-medium">Super Bowl Champ & Entrepreneur</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 8. DIRECT ARCHITECT PARTNERSHIP & ATTRIBUTION */}
      {/* -------------------------------------------------------------------- */}
      <section className="section-pad bg-white border-b border-[#EAECF0]">
        <div className="site-container">
          <div className="bg-[#F8FAFC] rounded-[4px] border border-[#D0D5DD] p-6 lg:p-10 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Headshot Portrait */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
                <div className="relative w-full max-w-[260px] aspect-square rounded-[4px] overflow-hidden border border-[#D0D5DD] bg-white shadow-sm">
                  <Image
                    src="/shakil-headshot.jpeg"
                    alt="Shakil Ahmed - Senior Full-Stack Engineer & System Architect"
                    fill
                    sizes="(max-width: 768px) 260px, 300px"
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 px-2.5 py-1.5 rounded-[2px] bg-[#0D1738]/90 backdrop-blur text-white text-[11px] font-semibold flex items-center justify-between">
                    <span>Shakil Ahmed</span>
                    <span className="text-[#8D7BFF] font-mono text-[10px]">12+ Yrs Exp</span>
                  </div>
                </div>
              </div>

              {/* Profile Bio & Direct Access Commitment */}
              <div className="lg:col-span-8 space-y-3.5">
                <span className="badge-tag">Direct Engineering Partnership</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1738] tracking-tight">
                  Direct technical leadership — no junior handoffs, no agency bloat.
                </h2>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  When you work with me, you collaborate directly with the architect who scaled Legiit to 2,000,000+ users and shipped over 115 production systems. Every critical line of code, database schema, payment flow, and infrastructure config is engineered with precision and enterprise discipline.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-[2px] bg-white border border-[#EAECF0]">
                    <div className="text-[10px] uppercase font-bold text-[#667085]">Founder</div>
                    <div className="text-xs font-bold text-[#0D1738] mt-0.5">BarakahSoft LLC (USA)</div>
                  </div>
                  <div className="p-2.5 rounded-[2px] bg-white border border-[#EAECF0]">
                    <div className="text-[10px] uppercase font-bold text-[#667085]">Track Record</div>
                    <div className="text-xs font-bold text-[#0D1738] mt-0.5">1,000+ Shipped Builds</div>
                  </div>
                  <div className="p-2.5 rounded-[2px] bg-white border border-[#EAECF0]">
                    <div className="text-[10px] uppercase font-bold text-[#667085]">Direct Contact</div>
                    <div className="text-xs font-bold text-[#533AFD] mt-0.5">+1 (307) 533-6678</div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a href="https://calendly.com/shakilhq/30min" target="_blank" rel="noreferrer" className="btn-primary text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    Book Strategy Call with Shakil
                  </a>
                  <a href="https://wa.me/13075336678" target="_blank" rel="noreferrer" className="btn-secondary text-xs">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Attribution Notice */}
          <div className="mt-4 p-4 rounded-[4px] bg-white border border-[#EAECF0] flex items-center gap-3 text-xs text-[#667085]">
            <ShieldCheck className="w-4 h-4 text-[#533AFD] shrink-0" />
            <span>
              <strong className="text-[#0D1738]">Engineering Attribution:</strong> Many featured enterprise case studies (Legiit, Steve Weatherford, agency lead engines) were architected during my tenure as <em>Lead Technical Architect</em> at <strong>No Half Cakes</strong>. I deliver that same agency-grade discipline directly to your business.
            </span>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 9. OPEN SOURCE SIGNAL (GITHUB LIVE FEED) */}
      {/* -------------------------------------------------------------------- */}
      <section className="section-pad bg-white border-b border-[#EAECF0]">
        <div className="site-container">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="badge-tag mb-2">Public Engineering</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1738] tracking-tight">
                Open Source & Engineering Labs
              </h2>
              <p className="text-xs sm:text-sm text-[#475467] mt-1">
                Developer tools, API utilities, and full-stack modules maintained in public.
              </p>
            </div>

            <a
              href="https://github.com/exelentshakil"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-xs"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub Profile
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="bg-[#F8FAFC] rounded-[4px] p-4 border border-[#D0D5DD] hover:border-[#533AFD] transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[#667085] mb-2">
                    <Code2 className="w-4 h-4 text-[#0D1738]" />
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#667085] group-hover:text-[#533AFD] transition-colors" />
                  </div>
                  <h4 className="font-bold text-[#0D1738] text-sm mb-1 group-hover:text-[#533AFD] transition-colors truncate">
                    {repo.name}
                  </h4>
                  <p className="text-xs text-[#475467] line-clamp-2 leading-relaxed">
                    {repo.description || "Open source production module and engineering utility."}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAECF0] flex items-center justify-between mt-4 text-[11px] text-[#667085]">
                  <span className="flex items-center gap-1 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#533AFD]" />
                    <span>{repo.language || "TypeScript"}</span>
                  </span>
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1 font-semibold text-amber-600">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>{repo.stargazers_count}</span>
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 10. DIRECT CONTACT & OFFICIAL BUSINESS TERMINAL */}
      {/* -------------------------------------------------------------------- */}
      <section id="contact" className="section-pad bg-[#0D1738] text-white">
        <div className="site-container">
          
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Call to Action */}
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-[#533AFD]/20 text-[#D9D6FE] border border-[#533AFD]/40 text-xs font-semibold">
                Direct Engineering Access
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                Ready to engineer your next platform?
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg">
                Available for technical architecture, high-concurrency SaaS builds, MVP engineering, and payment / database performance optimization.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://calendly.com/shakilhq/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-xs py-2.5 px-4"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule 30-Minute Strategy Call
                </a>

                <a
                  href="https://wa.me/13075336678?text=Hi%20Shakil,%20I%20would%20like%20to%20discuss%20a%20new%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-xs py-2.5 px-4 bg-white text-[#0D1738] hover:bg-slate-100"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  WhatsApp (+1 307 533-6678)
                </a>
              </div>
            </div>

            {/* Right: Verified Business Contact Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#101B3D] border border-slate-700/80 rounded-[4px] p-6 space-y-4">
                
                <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-[4px] overflow-hidden border border-slate-600 bg-slate-800 shrink-0">
                      <Image
                        src="/shakil-headshot.jpeg"
                        alt="Shakil Ahmed"
                        fill
                        sizes="32px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white leading-none">
                        Shakil Ahmed
                      </h3>
                      <span className="text-[10px] text-[#8D7BFF] font-medium leading-none">
                        BarakahSoft LLC
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-[2px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Direct Contact
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-[4px] bg-[#533AFD]/20 text-[#D9D6FE] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Phone & WhatsApp</div>
                      <a href="tel:+13075336678" className="text-white font-semibold hover:text-[#D9D6FE] transition-colors">
                        +1 (307) 533-6678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-[4px] bg-[#533AFD]/20 text-[#D9D6FE] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Email Direct</div>
                      <a href="mailto:hello@barakahsoft.com" className="text-white font-semibold hover:text-[#D9D6FE] transition-colors">
                        hello@barakahsoft.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-[4px] bg-[#533AFD]/20 text-[#D9D6FE] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Business Headquarters</div>
                      <div className="text-slate-200">
                        30 N. Gould St. Ste R, Sheridan, WY 82801, USA
                      </div>
                    </div>
                  </div>
                </div>

                {/* Freelancer & Platform Profiles */}
                <div className="pt-4 border-t border-slate-700/80 flex flex-wrap items-center gap-2 text-xs">
                  <a
                    href="https://www.upwork.com/freelancers/~01e19084859cda495e"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded-[2px] bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-[11px]"
                  >
                    Upwork Top Talent ↗
                  </a>
                  <a
                    href="https://www.freelancer.com/u/exelentshakil"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded-[2px] bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-[11px]"
                  >
                    Freelancer.com ↗
                  </a>
                  <a
                    href="https://github.com/exelentshakil"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded-[2px] bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-[11px]"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://x.com/shakilhq"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded-[2px] bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-[11px]"
                  >
                    Twitter / X ↗
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 11. FOOTER */}
      {/* -------------------------------------------------------------------- */}
      <footer className="bg-[#080E24] border-t border-slate-800 text-slate-400 py-8">
        <div className="site-container flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="font-semibold">© 2026 Shakil Ahmed (BarakahSoft LLC).</span>
            <span>All rights reserved.</span>
          </div>

          <div className="text-slate-400">
            30 N. Gould St. Ste R, Sheridan, WY 82801 • Tel: +1 (307) 533-6678
          </div>
        </div>
      </footer>

    </div>
  );
}

// --------------------------------------------------------------------------
// Subcomponent: Natural Marquee Card (Displays Full-Color Crisp Screenshots)
// --------------------------------------------------------------------------
function MarqueeSiteCard({ site }: { site: Site }) {
  const imageSrc = getSiteImage(site);
  const [hasError, setHasError] = useState(false);

  return (
    <a
      href={`https://${site.url}`}
      target="_blank"
      rel="noreferrer"
      className="inline-block w-[300px] bg-white rounded-[4px] border border-[#D0D5DD] overflow-hidden hover:border-[#533AFD] transition-all text-left select-none group"
    >
      {/* Screenshot Section */}
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        {!hasError ? (
          <Image
            src={imageSrc}
            alt={site.name}
            fill
            sizes="300px"
            className="object-cover object-top"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${getSiteFallback(site)} flex items-center justify-center text-white font-bold text-lg`}>
            {site.name}
          </div>
        )}

        <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded-[2px] bg-white/95 border border-[#D0D5DD] text-[#0D1738] text-[9px] font-bold uppercase tracking-wider">
          {site.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-3 space-y-1.5">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-[#0D1738] text-xs truncate group-hover:text-[#533AFD] transition-colors">
            {site.name}
          </h4>
          <ArrowUpRight className="w-3 h-3 text-[#667085] group-hover:text-[#533AFD] transition-colors shrink-0" />
        </div>

        <p className="text-[11px] text-[#475467] line-clamp-2 leading-relaxed">
          {site.hook || `Production web system engineered for ${site.clientType || "client"}.`}
        </p>

        {site.metric && (
          <div className="pt-1.5 border-t border-[#EAECF0] flex items-center gap-1 text-[10px] font-bold text-emerald-700">
            <Check className="w-3 h-3" />
            <span>{site.metric}</span>
          </div>
        )}
      </div>
    </a>
  );
}

// --------------------------------------------------------------------------
// Subcomponent: Grid Site Card (For Filterable Bento Mode)
// --------------------------------------------------------------------------
function GridSiteCard({ site }: { site: Site }) {
  const imageSrc = getSiteImage(site);
  const [hasError, setHasError] = useState(false);

  return (
    <a
      href={`https://${site.url}`}
      target="_blank"
      rel="noreferrer"
      className="bg-white rounded-[4px] border border-[#D0D5DD] overflow-hidden hover:border-[#533AFD] transition-all flex flex-col group"
    >
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        {!hasError ? (
          <Image
            src={imageSrc}
            alt={site.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${getSiteFallback(site)} flex items-center justify-center text-white font-bold text-xl`}>
            {site.name}
          </div>
        )}

        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-[2px] bg-white/95 border border-[#D0D5DD] text-[#0D1738] text-[10px] font-bold uppercase tracking-wider">
          {site.category}
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-bold text-[#0D1738] text-sm group-hover:text-[#533AFD] transition-colors truncate">
              {site.name}
            </h4>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#667085] group-hover:text-[#533AFD] transition-colors shrink-0" />
          </div>

          <p className="text-xs text-[#475467] line-clamp-2 leading-relaxed">
            {site.hook || `Tailored production system engineered for ${site.clientType || "client requirements"}.`}
          </p>
        </div>

        {site.technologies && (
          <div className="pt-2.5 border-t border-[#EAECF0] flex flex-wrap gap-1">
            {site.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="px-1.5 py-0.5 rounded-[2px] bg-[#F2F4F7] text-[#344054] font-mono text-[10px] font-medium">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
