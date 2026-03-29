import type { Metadata } from 'next';
import Image from 'next/image';
import { MotionLink } from '@/components/MotionLink';

export const metadata: Metadata = {
  title: 'Learn more',
  description:
    'Auto Equity Group ownership, marketplace standards, and how Junkyard Car Parts fits into retail and remarketing.',
  alternates: { canonical: '/learn-more' },
};

const sections = [
  {
    id: 'ownership',
    title: 'Ownership that scales with trust',
    body:
      'Junkyard Car Parts operates under Auto Equity Group—a holding company focused on automotive retail, remarketing, and digital commerce. That backing means disciplined operations, long-term investment in compliance, and support teams who understand both vehicles and parts.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80',
    imageAlt: 'Modern office building representing corporate stewardship',
    align: 'left' as const,
  },
  {
    id: 'marketplace',
    title: 'One ecosystem: inventory you can act on',
    body:
      'We connect verified suppliers, regulated auction channels where permitted, and clear condition notes so listings read like real inventory—not placeholders. Card checkout and optional bonded mechanic installation keep the path from cart to garage straightforward.',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=80',
    imageAlt: 'Vehicle showroom and inventory',
    align: 'right' as const,
  },
  {
    id: 'standards',
    title: 'Standards buyers and pros can rely on',
    body:
      'From sourcing documentation to shipping and returns policies, we aim for transparency at every step. When blockchain or verification tooling is in play, it is there to reduce disputes and support audits—not to complicate your purchase.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80',
    imageAlt: 'Team collaboration and planning',
    align: 'left' as const,
  },
  {
    id: 'future',
    title: 'Built for enthusiasts and fleets alike',
    body:
      'Whether you are restoring a weekend project, sourcing for a shop, or supporting a small fleet, the same infrastructure supports search, fitment context, and checkout. Explore products, review policies, and reach our help center when you need a human.',
    image:
      'https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&w=1800&q=80',
    imageAlt: 'Automotive workshop environment',
    align: 'right' as const,
  },
];

export default function LearnMorePage() {
  return (
    <div className="bg-neutral-950 text-neutral-100">
      <section className="relative flex min-h-[min(100dvh,900px)] flex-col justify-end overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            className="object-cover opacity-45"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/85 to-neutral-950" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-400">
            Auto Equity Group · Junkyard Car Parts
          </p>
          <h1 className="mb-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            Learn how we fit into your next build—and your next vehicle.
          </h1>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-neutral-300 sm:text-xl">
            From retail and remarketing roots to a global parts marketplace, here is the context
            behind the platform: ownership, standards, and what you can expect when you shop or
            browse with us.
          </p>
          <MotionLink
            href="#ownership"
            className="inline-flex rounded-full border-2 border-white bg-white px-8 py-3.5 text-sm font-bold text-neutral-950 transition hover:bg-neutral-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Read the story
          </MotionLink>
        </div>
      </section>

      {sections.map((s, i) => {
        const isLeft = s.align === 'left';
        return (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-20 border-t border-white/10 ${
              i % 2 === 0 ? 'bg-neutral-950' : 'bg-neutral-900/80'
            }`}
          >
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:gap-16 sm:px-6 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
              <div
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 lg:aspect-auto lg:min-h-[380px] ${
                  !isLeft ? 'lg:order-2' : ''
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px)100vw,50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-neutral-950/40" />
              </div>
              <div className={!isLeft ? 'lg:order-1' : ''}>
                <h2 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                  {s.title}
                </h2>
                <p className="text-lg leading-relaxed text-neutral-300 sm:text-xl">{s.body}</p>
              </div>
            </div>
          </section>
        );
      })}

      <section className="border-t border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black px-4 py-24 sm:px-6 sm:py-32">
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            Ready to explore the catalog?
          </h2>
          <p className="mb-10 text-lg text-neutral-400">
            Jump into live listings, filter by category, or open the help center for shipping and
            policies.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MotionLink
              href="/products"
              className="inline-block rounded-full border-2 border-white bg-white px-10 py-4 text-base font-bold text-neutral-950 transition hover:bg-neutral-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Shop products
            </MotionLink>
            <MotionLink
              href="/help-center"
              className="inline-block rounded-full border border-white/25 bg-white/5 px-10 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Help center
            </MotionLink>
          </div>
        </div>
      </section>
    </div>
  );
}
