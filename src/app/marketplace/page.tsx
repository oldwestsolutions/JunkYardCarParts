import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  BoltIcon,
  ShieldCheckIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Mission-Critical Used Parts',
  description:
    'Marketplace for mission-critical used car parts and salvage components — brakes, steering, drivetrain, and more with verified listings.',
  alternates: { canonical: '/marketplace' },
};

const highlights = [
  {
    title: 'Mission-critical inventory',
    body:
      'Brakes, steering, drivetrain, cooling, and electrical—parts where failure is not an option. Listings emphasize condition, fitment notes, and verification so you can decide with confidence.',
    icon: BoltIcon,
  },
  {
    title: 'Verified sourcing',
    body:
      'Supplier checks, documentation where available, and auction-linked lanes when regulations allow—so provenance is never an afterthought.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Built for uptime',
    body:
      'Search and filters tuned for VIN-adjacent fitment, part numbers, and urgency—whether you are fixing a daily driver or a work truck that cannot sit idle.',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'Tracked fulfillment',
    body:
      'Carrier handoffs and warehouse milestones surface in your order journey so you are not guessing when a mission-critical part will land.',
    icon: TruckIcon,
  },
];

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden border-b border-neutral-200 bg-neutral-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1487754180451-c456f29a5e53?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            className="object-cover opacity-45"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-neutral-900/85" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Products · Marketplace
          </p>
          <h1 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            The marketplace for parts that cannot fail
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-300 sm:text-xl">
            Used, salvage, and verified aftermarket inventory focused on what keeps vehicles
            safe and operational—mission-critical components sourced with transparency, not
            guesswork.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
              alt="Mechanic installing a critical automotive component"
              fill
              className="object-cover"
              sizes="(max-width:1024px)100vw,50vw"
            />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold text-neutral-900 sm:text-3xl">
              When downtime costs real money
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              Marketplace listings skew toward high-stakes categories: stopping power,
              directional control, power delivery, and environmental systems. We surface
              condition grades, mileage context where relevant, and supplier verification
              notes so you are not buying blind from a single photo.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Browse the live inventory to filter by category, keyword, and fitment—then
              checkout with the same protections as the rest of Junkyard Car Parts.
            </p>
            <Link
              href="/products"
              className="mt-8 inline-flex rounded-full border-2 border-neutral-900 bg-neutral-900 px-8 py-3 text-sm font-bold text-white hover:bg-neutral-800"
            >
              Browse mission-critical parts
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-bold text-neutral-900 sm:text-3xl">
            Why Marketplace exists
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-300 bg-white text-neutral-900">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-neutral-900">{h.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {h.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
        <p className="mb-6 text-neutral-700">
          Looking for one-of-a-kind custom work from independent makers? See{' '}
          <Link href="/signature" className="font-semibold text-neutral-900 underline underline-offset-4">
            Signature
          </Link>
          .
        </p>
        <Link
          href="/products"
          className="inline-flex rounded-full border-2 border-neutral-900 px-8 py-3 text-sm font-bold text-neutral-900 hover:bg-neutral-200"
        >
          Open product search
        </Link>
      </section>
    </div>
  );
}
