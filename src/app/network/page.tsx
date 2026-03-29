import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  GlobeAltIcon,
  ServerStackIcon,
  SignalIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Network & Fulfillment',
  description:
    'How the Junkyard Car Parts network connects buyers to used car parts: suppliers, shipping, and fulfillment infrastructure.',
  alternates: { canonical: '/network' },
};

const layers = [
  {
    title: 'Global supplier fabric',
    body:
      'We integrate with verified suppliers and fulfillment partners across North America, Europe, and Asia-Pacific. Routing logic favors inventory that meets condition standards and can ship within quoted windows.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Resilient edge & APIs',
    body:
      'Product search, cart, and checkout run on a modern edge-friendly stack with health monitoring and graceful degradation—so peak traffic during promotions does not mean a fragile experience.',
    icon: ServerStackIcon,
  },
  {
    title: 'Real-time status signals',
    body:
      'Order updates flow through email and in-account surfaces where available. Carrier and warehouse handoffs are tracked so you see progression from paid to shipped—not a silent void.',
    icon: SignalIcon,
  },
  {
    title: 'Mechanic &amp; dealer ecosystem',
    body:
      'Where bonded installation is offered, we connect you to vetted local pros through workflows designed for scheduling and liability clarity—aligned with Auto Equity Group’s broader automotive footprint.',
    icon: UserGroupIcon,
  },
];

export default function NetworkPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden border-b border-neutral-200 bg-neutral-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            className="object-cover opacity-40"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-950 to-neutral-950" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Infrastructure
          </p>
          <h1 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            The Junkyard Car Parts network
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-300 sm:text-xl">
            A marketplace is only as strong as the partners and pipes behind it. Our network
            ties together suppliers, logistics, payments, and local pros so you get real
            parts—not empty listings.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-neutral-900 sm:text-3xl">
              From listing to your garage
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              Every part passes through sourcing checks appropriate to its channel—whether
              that is aftermarket new-old-stock, verified used, or auction-sourced inventory
              where regulations allow. The network coordinates QC notes, photos, and
              dispatch so what you see maps to what arrives.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Auto Equity Group’s retail and remarketing footprint sits alongside this
              marketplace, so long-term vehicle buyers and parts buyers benefit from shared
              operational discipline.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Connected city and logistics"
              fill
              className="object-cover"
              sizes="(max-width:1024px)100vw,50vw"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-bold text-neutral-900 sm:text-3xl">
            Layers of the network
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {layers.map((layer) => {
              const Icon = layer.icon;
              return (
                <div
                  key={layer.title}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-300 bg-white text-neutral-900">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-neutral-900">{layer.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {layer.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80"
            alt="Warehouse and distribution"
            width={1600}
            height={600}
            className="h-48 w-full object-cover opacity-90 sm:h-64"
          />
          <div className="p-8 sm:p-10">
            <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
              Shipping &amp; coverage
            </h2>
            <p className="max-w-2xl text-neutral-300 leading-relaxed">
              Delivery options depend on part size, hazmat rules, and origin. International
              lanes follow customs and carrier requirements; domestic US orders prioritize
              tracked ground and express where it makes sense for weight and value.
            </p>
            <Link
              href="/shipping"
              className="mt-6 inline-block font-semibold text-white underline underline-offset-4 hover:text-neutral-200"
            >
              Read shipping &amp; returns →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-100 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="mb-6 text-neutral-700">
            Dive deeper into blockchain-enabled trust, or start browsing inventory.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/blockchain"
              className="inline-flex rounded-full border-2 border-neutral-900 bg-neutral-900 px-8 py-3 text-sm font-bold text-white hover:bg-neutral-800"
            >
              Blockchain
            </Link>
            <Link
              href="/products"
              className="inline-flex rounded-full border-2 border-neutral-900 px-8 py-3 text-sm font-bold text-neutral-900 hover:bg-neutral-200"
            >
              Shop products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
