import type { Metadata } from "next";
import Image from "next/image";
import { MotionLink } from "@/components/MotionLink";
import {
  ArrowDownIcon,
  BoltIcon,
  CubeTransparentIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Technology solutions behind Junkyard Car Parts used car parts marketplace — blockchain, verification, and secure transactions.",
  alternates: { canonical: "/solutions" },
};

const sections = [
  {
    id: "settlement",
    title: "Verifiable settlement",
    body:
      "Every eligible transaction is anchored to verifiable records so buyers and sellers share one source of truth—reducing disputes and speeding reconciliation across suppliers and fulfillment partners.",
    icon: ShieldCheckIcon,
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Abstract network nodes representing distributed verification",
    align: "left" as const,
  },
  {
    id: "checkout",
    title: "Secure commerce",
    body:
      "Secure checkout surfaces quotes, fees, and confirmations in plain language so you always know what you are approving before funds move.",
    icon: BoltIcon,
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Digital payment and technology concept",
    align: "right" as const,
  },
  {
    id: "orders",
    title: "Immutable order records",
    body:
      "Order metadata and verification checkpoints can be recorded in ways that resist tampering—supporting audits, warranty claims, and compliance workflows without slowing down your purchase.",
    icon: CubeTransparentIcon,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Earth from space symbolizing connected systems",
    align: "left" as const,
  },
  {
    id: "trust",
    title: "Supplier & lot transparency",
    body:
      "Where auction-sourced or verified inventory is involved, blockchain-backed attestations help tie listings to documented sourcing—so you see the story behind the part, not just a photo.",
    icon: LinkIcon,
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f29a5e53?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Automotive parts and workshop environment",
    align: "right" as const,
  },
  {
    id: "security",
    title: "Security at the edge",
    body:
      "Sensitive payment data stays within PCI-aware flows. Our stack emphasizes least-privilege APIs, modern transport security, and monitoring tuned for high-value automotive commerce.",
    icon: LockClosedIcon,
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Security and encryption concept",
    align: "left" as const,
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-neutral-950 text-neutral-100">
      {/* Hero */}
      <section className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1639322537228-f710d846310f?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            className="object-cover opacity-40"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-neutral-950" />
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-400">
            Infrastructure you feel on every checkout
          </p>
          <h1 className="mb-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            Blockchain solutions that power the platform—and every transaction you trust us with.
          </h1>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-neutral-300 sm:text-xl">
            From settlement rails to verifiable records, Junkyard Car Parts is built so
            enthusiasts and pros get clarity, speed, and security when they transact—whether
            they pay with card or other approved methods alongside it.
          </p>
          <a
            href="#settlement"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            Explore the stack
            <ArrowDownIcon className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </section>

      {/* Narrative sections */}
      {sections.map((s, i) => {
        const Icon = s.icon;
        const isLeft = s.align === "left";
        return (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-20 border-t border-white/10 ${
              i % 2 === 0 ? "bg-neutral-950" : "bg-neutral-900/80"
            }`}
          >
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:gap-16 sm:px-6 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
              <div
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 lg:aspect-auto lg:min-h-[380px] ${
                  !isLeft ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px)100vw,50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-neutral-950/50" />
              </div>
              <div className={!isLeft ? "lg:order-1" : ""}>
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white">
                  <Icon className="h-7 w-7" aria-hidden />
                </div>
                <h2 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                  {s.title}
                </h2>
                <p className="text-lg leading-relaxed text-neutral-300 sm:text-xl">
                  {s.body}
                </p>
              </div>
            </div>
          </section>
        );
      })}

      {/* Closing CTA */}
      <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black px-4 py-24 sm:px-6 sm:py-32">
        <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-neutral-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Ready to shop with infrastructure built for the next era of parts?
          </h2>
          <p className="mb-10 text-lg text-neutral-400">
            Browse live listings, filter by category, and checkout with the same protections
            described across this page.
          </p>
          <MotionLink
            href="/products"
            className="inline-block rounded-full border-2 border-white bg-white px-10 py-4 text-base font-bold text-neutral-950 transition hover:bg-neutral-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View products
          </MotionLink>
        </div>
      </section>
    </div>
  );
}
