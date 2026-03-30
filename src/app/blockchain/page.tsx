import type { Metadata } from 'next';
import Image from 'next/image';
import { MotionLink } from '@/components/MotionLink';
import {
  ArrowPathIcon,
  ChartBarIcon,
  CubeIcon,
  DocumentCheckIcon,
  CurrencyDollarIcon,
  LockClosedIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Blockchain & Trust',
  description:
    'Blockchain and verification technology on Junkyard Car Parts — settlement, immutable records, and secure checkout for high-value automotive commerce.',
  alternates: { canonical: '/blockchain' },
};

const stats = [
  { label: 'Trust surfaces', value: 'Settlement · orders · receipts' },
  { label: 'Design stance', value: 'Security-first, privacy-aware' },
  { label: 'Checkout', value: 'Cards + optional anchoring' },
] as const;

const pillars = [
  {
    title: 'Transparent settlement',
    body:
      'When a high-value part crosses borders, currencies, or payment rails, ambiguity is expensive. Verifiable records help align what buyers authorize with what sellers and fulfillment partners expect to settle—so reconciliation is faster and disputes start from facts, not conflicting spreadsheets.',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Verifiable order history',
    body:
      'Critical checkpoints in an order lifecycle can be recorded in tamper-resistant ways: confirmation, dispatch, delivery attestation where partners support it. That supports warranty claims, audits, and fair dispute resolution without exposing more personal data than the transaction requires.',
    icon: DocumentCheckIcon,
  },
  {
    title: 'Streamlined checkout',
    body:
      'Whether you pay by card or approved methods alongside it, the checkout surface is designed to show fees, destinations, and timing in plain language before you approve. Saved profiles and digital receipts reduce friction while keeping you in control of each charge.',
    icon: CubeIcon,
  },
  {
    title: 'Security-first design',
    body:
      'Payment data stays inside PCI-aware flows. We pair modern transport security with least-privilege services, segmentation, and monitoring tuned for high-value parts commerce—where a single fraudulent transaction can dwarf typical retail loss.',
    icon: LockClosedIcon,
  },
  {
    title: 'Attestations & provenance',
    body:
      'For auction-sourced or verified inventory, cryptographic-style attestations can tie a listing to documented sourcing when suppliers provide paperwork. The goal is a defensible story behind the part: lot numbers, inspection notes, and fitment context that survive scrutiny.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Operational resilience',
    body:
      'Ledger-backed features are rolled out where they improve clarity—not as a gimmick. Our teams maintain traditional invoices, carrier tracking, and support tickets in parallel so you are never stranded if you prefer conventional records for your shop or insurer.',
    icon: ArrowPathIcon,
  },
] as const;

const principles = [
  {
    title: 'Clarity over novelty',
    text:
      'We deploy distributed-trust features where they reduce ambiguity for buyers, sellers, and partners. If a workflow does not make settlement or dispute resolution measurably clearer, it does not ship.',
    icon: ChartBarIcon,
  },
  {
    title: 'Compliance in the loop',
    text:
      'Automotive commerce spans motor-vehicle rules, payment networks, and export controls depending on part and lane. Legal and policy teams review how attestations interact with advertising, warranties, and regional requirements before features reach production.',
    icon: DocumentCheckIcon,
  },
  {
    title: 'Privacy by default',
    text:
      'Anchoring emphasizes transaction metadata and supplier documentation—not unnecessary PII. Where identity is required for regulated categories, access is minimized and retention follows published policies linked from our legal hub.',
    icon: LockClosedIcon,
  },
] as const;

export default function BlockchainPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero */}
      <section className="relative min-h-[min(92dvh,920px)] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            className="object-cover opacity-45"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/92 to-neutral-950" />
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 72 72' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-opacity='0.35'%3E%3Cpath d='M0 36h72M36 0v72'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative mx-auto flex min-h-[min(92dvh,920px)] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400 sm:text-left">
            Technology · Trust · Settlement
          </p>
          <h1 className="mx-auto max-w-5xl text-center text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl lg:text-left">
            Blockchain infrastructure for real automotive commerce
          </h1>
          <div className="mx-auto mt-10 grid max-w-5xl gap-8 text-center lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-14 lg:text-left">
            <p className="text-lg leading-relaxed text-neutral-300 sm:text-xl">
              Junkyard Car Parts treats distributed ledger concepts as tools for alignment—not
              marketing theater. Where we anchor records, it is to give buyers, sellers, and
              fulfillment partners a shared source of truth across high-value parts, cross-border
              lanes, and the documentation expectations that come with verified and
              auction-sourced inventory.
            </p>
            <p className="text-lg leading-relaxed text-neutral-300 sm:text-xl">
              You do not need to be a cryptography expert to shop. Standard card checkout remains
              the default path. Optional attestations and record-anchoring appear on eligible
              orders when they genuinely improve traceability, speed reconciliation, or reduce
              dispute friction—always alongside human-readable invoices and carrier tracking.
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

      {/* Narrative + image — balanced split */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="flex flex-col justify-center border-white/10 px-6 py-16 sm:px-8 sm:py-24 lg:border-r lg:py-28">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built for real parts—not hype cycles
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-400 sm:text-lg">
              Auto parts involve asymmetric information: condition, mileage, fitment, and prior
              repair history can all affect value. Traditional marketplaces often collapse that
              nuance into a single photo and a star rating. We invest in verification workflows,
              supplier credentialing, and—where appropriate—immutable fingerprints that connect
              listings to sourcing paperwork so serious buyers and professional shops can stand
              behind their purchases.
            </p>
            <p className="mt-5 text-base leading-relaxed text-neutral-400 sm:text-lg">
              Blockchain-style attestations complement invoices and bills of lading; they do not
              replace them. When a dispute arises, parties can point to a shared anchor tied to
              timestamps and document hashes, while still working through normal support and legal
              channels. That is the bar for every feature we label as trust-enhancing.
            </p>
          </div>
          <div className="relative min-h-[320px] border-t border-white/10 lg:min-h-0 lg:border-t-0">
            <Image
              src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1600&q=80"
              alt="Digital commerce and secure payment flows"
              fill
              className="object-cover"
              sizes="(max-width:1024px)100vw,50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent lg:bg-gradient-to-l" />
          </div>
        </div>
      </section>

      {/* Pillars — strict 3×2 grid */}
      <section className="border-b border-white/10 bg-neutral-900/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              What on-chain thinking unlocks here
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-400 sm:text-lg">
              Six capability areas describe how we apply distributed trust—not as a single
              monolithic chain, but as a set of patterns chosen for automotive marketplaces:
              settlement clarity, record integrity, security posture, provenance, and resilient
              operations.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.title}
                  className="flex h-full flex-col rounded-2xl border border-white/10 bg-neutral-900/60 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400 sm:text-base">
                    {p.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principles — 3 equal columns */}
      <section className="border-b border-white/10 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Principles that govern our roadmap
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-neutral-400 sm:text-lg">
            Product and policy teams use these principles when prioritizing roadmap work. They keep
            experimentation aligned with buyer safety, regulatory expectations, and the long-term
            credibility of the Junkyard Car Parts brand under Auto Equity Group stewardship.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col rounded-2xl border border-white/10 bg-neutral-900/40 p-8 text-center md:text-left"
                >
                  <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white md:mx-0">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400 sm:text-base">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance split — mirror of earlier: image | text */}
      <section className="border-b border-white/10 bg-neutral-900/20">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative order-2 min-h-[300px] border-t border-white/10 lg:order-1 lg:min-h-0 lg:border-t-0 lg:border-r">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80"
              alt="Compliance documentation and review"
              fill
              className="object-cover"
              sizes="(max-width:1024px)100vw,50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-transparent to-transparent lg:bg-gradient-to-r" />
          </div>
          <div className="order-1 flex flex-col justify-center px-6 py-16 sm:px-8 sm:py-24 lg:order-2 lg:py-28">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Compliance, clarity, and policy
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-400 sm:text-lg">
              Junkyard Car Parts operates within applicable commerce, payments, and motor-vehicle
              rules in the jurisdictions we serve. Blockchain-related capabilities are introduced
              only where they improve traceability or user experience—not to sidestep regulation.
              Our legal hub hosts the full text of terms, privacy notices, and regional policies;
              this page remains a plain-language companion for how technology fits the marketplace.
            </p>
            <p className="mt-5 text-base leading-relaxed text-neutral-400 sm:text-lg">
              If you are a supplier integrating attestations, or a shop documenting installs for
              warranty, our support and legal teams can point you to the right artifacts and
              retention schedules. We are explicit about what is anchored, what stays off-chain,
              and how to exercise data rights where they apply.
            </p>
            <MotionLink
              href="/legal"
              className="mt-8 inline-flex w-fit items-center font-semibold text-white underline-offset-4 hover:underline"
              whileHover={{ opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
            >
              View legal &amp; policies →
            </MotionLink>
          </div>
        </div>
      </section>

      {/* CTA — centered symmetric */}
      <section className="bg-neutral-950 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            See how infrastructure meets your next checkout
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-400 sm:text-lg">
            Explore the broader solutions narrative—from settlement patterns to secure
            commerce—or jump straight into live listings and filter by category, condition, and
            supplier signals.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:justify-center">
            <MotionLink
              href="/solutions"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white bg-white px-10 py-3 text-sm font-bold text-neutral-950 transition hover:bg-neutral-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Solutions overview
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
