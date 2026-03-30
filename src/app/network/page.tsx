import type { Metadata } from 'next';
import Image from 'next/image';
import { MotionLink } from '@/components/MotionLink';
import {
  GlobeAltIcon,
  ServerStackIcon,
  SignalIcon,
  TruckIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Network & Fulfillment',
  description:
    'How the Junkyard Car Parts network connects buyers to inventory: suppliers, logistics, edge infrastructure, and local professionals.',
  alternates: { canonical: '/network' },
};

const stats = [
  { label: 'Coverage model', value: 'Multi-region suppliers & partners' },
  { label: 'Operations', value: 'Monitored APIs · health-checked paths' },
  { label: 'Last mile', value: 'Tracked lanes · installation options' },
] as const;

const layers = [
  {
    title: 'Global supplier fabric',
    body:
      'We integrate verified suppliers and fulfillment partners across North America, Europe, and Asia-Pacific. Routing logic favors inventory that meets published condition standards, ships inside quoted windows, and aligns with hazmat and customs rules for the lane—so the catalog reflects what can realistically reach your bay.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Resilient edge and APIs',
    body:
      'Search, cart, and checkout run on an edge-friendly stack with observability and graceful degradation. Peak traffic during promotions or viral listings should not translate into fragile timeouts; capacity and caching strategies are tuned for automotive SKU depth and image-heavy pages.',
    icon: ServerStackIcon,
  },
  {
    title: 'Real-time status signals',
    body:
      'Order updates surface through email and in-account views where available. Carrier and warehouse handoffs are tracked so you see progression from paid to shipped to delivered—not a silent void while a turbo crosses three time zones.',
    icon: SignalIcon,
  },
  {
    title: 'Mechanic and dealer ecosystem',
    body:
      'Where bonded installation is offered, we connect you to vetted local professionals through workflows built for scheduling, liability clarity, and documentation. That ecosystem aligns with Auto Equity Group’s broader automotive footprint—retail, remarketing, and digital commerce under one operational discipline.',
    icon: UserGroupIcon,
  },
  {
    title: 'Warehouse and consolidation',
    body:
      'Some lanes consolidate multi-line orders or cross-dock transfers to reduce damage and cost. When consolidation applies, cut-off times and handling fees appear before you commit—no surprise surcharges after the fact.',
    icon: BuildingOffice2Icon,
  },
  {
    title: 'Carrier diversity',
    body:
      'Ground, freight, and express partners are selected by weight, value, and destination. Oversized body panels, engines, and hazmat-class fluids each follow distinct rules; our network maps SKUs to eligible services so checkout does not promise a lane the part cannot legally travel.',
    icon: TruckIcon,
  },
] as const;

const logisticsMatrix = [
  {
    title: 'Domestic US',
    text:
      'Tracked ground is the default for most sub-freight parts; express upgrades appear when weight and value justify speed. Signature confirmation and adult receipt options surface for high-ticket assemblies.',
  },
  {
    title: 'International',
    text:
      'Cross-border lanes respect customs declarations, restricted categories, and carrier cutoffs. Duties and taxes estimates are shown when we can source reliable quotes; otherwise we link to guidance before you pay.',
  },
  {
    title: 'Oversized / freight',
    text:
      'Bumpers, axles, and glass often require LTL or dedicated freight. Quotes and liftgate options are coordinated before dispatch so residential garages are not surprised by a curbside-only drop.',
  },
  {
    title: 'Returns path',
    text:
      'Return eligibility follows part category, condition, and supplier policy. Initiation flows preserve RMA identifiers so warehouse intake matches what left the first mile—reducing mismatches that plague peer marketplaces.',
  },
] as const;

export default function NetworkPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero */}
      <section className="relative min-h-[min(92dvh,920px)] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            className="object-cover opacity-50"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/90 to-neutral-950" />
          <div
            className="absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 72 72' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='36' cy='36' r='1.5' fill='%23fff'/%3E%3C/svg%3E")`,
              backgroundSize: '48px 48px',
            }}
          />
        </div>
        <div className="relative mx-auto flex min-h-[min(92dvh,920px)] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400 sm:text-left">
            Infrastructure · Partners · Fulfillment
          </p>
          <h1 className="mx-auto max-w-5xl text-center text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl lg:text-left">
            The network behind every listing
          </h1>
          <div className="mx-auto mt-10 grid max-w-5xl gap-8 text-center lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-14 lg:text-left">
            <p className="text-lg leading-relaxed text-neutral-300 sm:text-xl">
              A marketplace is only as dependable as the suppliers, carriers, APIs, and local
              professionals behind it. Junkyard Car Parts stitches those pieces into a coherent
              experience: search and discovery that respect fitment, checkout that quotes real
              lanes, and updates that keep you informed from authorization to delivery—or
              installation when you choose it.
            </p>
            <p className="text-lg leading-relaxed text-neutral-300 sm:text-xl">
              Auto Equity Group’s retail and remarketing operations sit alongside this platform.
              That relationship reinforces shared standards for inventory quality, customer
              communication, and dispute handling—whether you are buying a vehicle, a crate motor,
              or a set of coilovers for a build already in progress.
            </p>
          </div>
        </div>
      </section>

      {/* Stats — symmetric 3-column */}
      <section className="border-b border-white/10 bg-neutral-900/50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center px-6 py-10 text-center sm:py-12"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                {s.label}
              </p>
              <p className="mt-3 max-w-xs text-sm font-medium leading-snug text-neutral-200 sm:text-base">
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Split: image left, copy right — equal columns */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative order-2 min-h-[320px] border-t border-white/10 lg:order-1 lg:min-h-0 lg:border-t-0 lg:border-r">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
              alt="Connected commerce and urban logistics"
              fill
              className="object-cover"
              sizes="(max-width:1024px)100vw,50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent lg:bg-gradient-to-r" />
          </div>
          <div className="order-1 flex flex-col justify-center px-6 py-16 sm:px-8 sm:py-24 lg:order-2 lg:py-28">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From listing to your garage
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-400 sm:text-lg">
              Every part is expected to pass sourcing checks appropriate to its channel—whether
              that is aftermarket new-old-stock, verified used, or auction-sourced inventory where
              regulations allow. The network coordinates QC notes, photography, packaging
              requirements, and dispatch so what you configure in checkout maps to what arrives
              at your door or your installer’s lift.
            </p>
            <p className="mt-5 text-base leading-relaxed text-neutral-400 sm:text-lg">
              When something deviates—a back-order, a substitute SKU, or a carrier delay—our
              operations tooling routes exceptions to humans who can explain options in plain
              language. Automation speeds the happy path; people own the edge cases that define
              trust in high-value parts.
            </p>
          </div>
        </div>
      </section>

      {/* Six layers — 3×2 grid */}
      <section className="border-b border-white/10 bg-neutral-900/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Layers of the network
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-400 sm:text-lg">
              Six layers describe how we structure partners and systems—not as a single vendor
              story, but as a mesh: global sourcing, resilient application delivery, status
              transparency, human installation options, physical consolidation, and carrier
              diversity tuned to automotive SKUs.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {layers.map((layer) => {
              const Icon = layer.icon;
              return (
                <article
                  key={layer.title}
                  className="flex h-full flex-col rounded-2xl border border-white/10 bg-neutral-900/60 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{layer.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400 sm:text-base">
                    {layer.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Logistics matrix — 2×2 symmetric */}
      <section className="border-b border-white/10 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Shipping and lane coverage
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-neutral-400 sm:text-lg">
            Delivery is not one-size-fits-all. The matrix below summarizes how we think about
            common lanes—always subject to carrier availability, part dimensions, and the policies
            linked from our shipping hub.
          </p>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {logisticsMatrix.map((cell) => (
              <div
                key={cell.title}
                className="rounded-2xl border border-white/10 bg-neutral-900/40 p-8 sm:p-10"
              >
                <h3 className="text-lg font-semibold text-white">{cell.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base">
                  {cell.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed banner + copy — symmetric card */}
      <section className="border-b border-white/10 bg-neutral-900/20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
            <div className="relative h-56 sm:h-72">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
                alt="Warehouse and distribution network"
                fill
                className="object-cover"
                sizes="(max-width:1024px)100vw,1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
            </div>
            <div className="grid gap-10 px-8 py-12 sm:px-12 sm:py-14 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Operations you can reason about
                </h2>
                <p className="mt-5 text-base leading-relaxed text-neutral-400 sm:text-lg">
                  Behind the scenes, inventory positions, partner SLAs, and exception queues feed
                  the same systems that power customer-facing status. That alignment is what lets
                  us commit to honest ETAs instead of optimistic placeholders that collapse under
                  the first carrier scan.
                </p>
              </div>
              <div>
                <p className="text-base leading-relaxed text-neutral-400 sm:text-lg">
                  For hazmat, high-value, or internationally routed shipments, additional validation
                  steps may apply. When they do, we surface them before payment so you can adjust
                  quantity, split orders, or pick up locally when that is the right answer.
                </p>
                <MotionLink
                  href="/shipping"
                  className="mt-6 inline-flex font-semibold text-white underline-offset-4 hover:underline"
                  whileHover={{ opacity: 0.9 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Read shipping &amp; returns →
                </MotionLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Connect trust infrastructure to live inventory
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-400 sm:text-lg">
            Explore how blockchain-style attestations complement this network on the blockchain
            page, or browse parts with the same operational rigor described here.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:justify-center">
            <MotionLink
              href="/blockchain"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white bg-white px-10 py-3 text-sm font-bold text-neutral-950 transition hover:bg-neutral-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Blockchain
            </MotionLink>
            <MotionLink
              href="/products"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white/30 bg-transparent px-10 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Shop products
            </MotionLink>
          </div>
        </div>
      </section>
    </div>
  );
}
