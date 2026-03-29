import type { Metadata } from 'next';
import Image from 'next/image';
import { MotionLink } from '@/components/MotionLink';
import {
  CubeIcon,
  DocumentCheckIcon,
  CurrencyDollarIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Blockchain & Trust',
  description:
    'Blockchain and verification technology on Junkyard Car Parts used car parts marketplace — settlement, records, and secure checkout.',
  alternates: { canonical: '/blockchain' },
};

const pillars = [
  {
    title: 'Transparent settlement',
    body:
      'Verifiable records help align what buyers pay with what sellers and fulfillment partners expect—reducing ambiguity when orders cross borders, currencies, or payment rails.',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Verifiable order history',
    body:
      'Key checkpoints in an order lifecycle can be recorded in tamper-resistant ways, supporting warranty claims, audits, and dispute resolution without exposing unnecessary personal data.',
    icon: DocumentCheckIcon,
  },
  {
    title: 'Streamlined checkout',
    body:
      'Where supported, saved payment profiles and digital receipts keep approvals clear—fees, destinations, and timing stay visible before you confirm.',
    icon: CubeIcon,
  },
  {
    title: 'Security-first design',
    body:
      'Payment details stay protected in PCI-aware flows. Our systems use modern transport security, least-privilege services, and monitoring tuned for high-value parts commerce.',
    icon: LockClosedIcon,
  },
];

export default function BlockchainPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden border-b border-neutral-200 bg-neutral-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            className="object-cover opacity-35"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-neutral-900/90" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Technology
          </p>
          <h1 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Blockchain at Junkyard Car Parts
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-300 sm:text-xl">
            Distributed ledger technology underpins how we think about trust: verifiable
            records, transparent settlement paths, and checkout flows that put you—not a
            black box—in charge of approvals.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1200&q=80"
              alt="Digital ledger and payment concept"
              fill
              className="object-cover"
              sizes="(max-width:1024px)100vw,50vw"
            />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold text-neutral-900 sm:text-3xl">
              Built for real parts—not hype
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              Auto parts involve high value, condition nuance, and cross-border logistics.
              Blockchain-style attestations complement—not replace—traditional invoices and
              carrier tracking: they give buyers and sellers a shared anchor when it matters
              most, especially for verified suppliers and auction-sourced inventory where
              documentation must line up.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              You do not need specialized knowledge to shop. Standard card checkout remains available;
              optional record-anchoring features may appear on eligible orders.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-bold text-neutral-900 sm:text-3xl">
            What blockchain unlocks here
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-300 bg-white text-neutral-900">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-neutral-900">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {p.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="order-2 lg:order-1">
            <h2 className="mb-4 text-2xl font-bold text-neutral-900 sm:text-3xl">
              Compliance &amp; clarity
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              Junkyard Car Parts operates within applicable commerce and motor-vehicle rules.
              Blockchain features are introduced where they improve traceability and user
              experience—not to sidestep regulation. Our legal hub links to full policy
              documents; this page is a plain-language overview of how the technology fits
              our marketplace.
            </p>
            <MotionLink
              href="/legal"
              className="mt-6 inline-block font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
            >
              View legal &amp; policies →
            </MotionLink>
          </div>
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 lg:order-2">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80"
              alt="Documents and compliance workflow"
              fill
              className="object-cover"
              sizes="(max-width:1024px)100vw,50vw"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-100 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="mb-6 text-neutral-700">
            See how all layers fit together—from infrastructure to your first checkout.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <MotionLink
              href="/solutions"
              className="inline-flex rounded-full border-2 border-neutral-900 bg-neutral-900 px-8 py-3 text-sm font-bold text-white hover:bg-neutral-800"
            >
              Solutions overview
            </MotionLink>
            <MotionLink
              href="/products"
              className="inline-flex rounded-full border-2 border-neutral-900 px-8 py-3 text-sm font-bold text-neutral-900 hover:bg-neutral-200"
            >
              Shop products
            </MotionLink>
          </div>
        </div>
      </section>
    </div>
  );
}
