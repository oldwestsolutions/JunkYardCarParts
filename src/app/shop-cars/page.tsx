import type { Metadata } from 'next';
import Image from 'next/image';
import { MotionLink } from '@/components/MotionLink';

export const metadata: Metadata = {
  title: 'Shop cars',
  description:
    'Browse Auto Equity Group–aligned vehicle retail: new and pre-owned inventory, transparent pricing, and finance-friendly workflows.',
  alternates: { canonical: '/shop-cars' },
};

const sections = [
  {
    id: 'inventory',
    title: 'Curated inventory, not random listings',
    body:
      'Our retail footprint pairs with Junkyard Car Parts so you can move from vehicle shopping to upgrades in one ecosystem. Expect clear photos, history cues where available, and teams who understand both daily drivers and specialty builds.',
    image:
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1800&q=80',
    imageAlt: 'Dealership lot with vehicles',
    align: 'left' as const,
  },
  {
    id: 'finance',
    title: 'Finance-friendly workflows',
    body:
      'Transparent pricing and structured paths to approval help you plan total cost of ownership—not just the sticker. Ask about terms, protections, and how your trade or down payment fits into the picture.',
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1800&q=80',
    imageAlt: 'Person reviewing vehicle documents',
    align: 'right' as const,
  },
  {
    id: 'match',
    title: 'Match the car to the build',
    body:
      'Pick the platform first, then bolt on parts from our marketplace with confidence. Whether you need a work truck, a family SUV, or a base for a performance project, we help you align vehicle choice with the upgrades you already have in mind.',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e66929fa8a9?auto=format&fit=crop&w=1800&q=80',
    imageAlt: 'Sports car detail',
    align: 'left' as const,
  },
  {
    id: 'visit',
    title: 'Next steps',
    body:
      'When you are ready, connect with a retail representative through your preferred Auto Equity Group channel. Meanwhile, browse parts here to price upgrades and compare installation options before you sign.',
    image:
      'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1800&q=80',
    imageAlt: 'Customer handshake at dealership',
    align: 'right' as const,
  },
];

export default function ShopCarsPage() {
  return (
    <div className="bg-neutral-950 text-neutral-100">
      <section className="relative flex min-h-[min(100dvh,900px)] flex-col justify-end overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            className="object-cover opacity-50"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/88 to-neutral-950" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-400">
            Auto Equity Group · Vehicles
          </p>
          <h1 className="mb-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            Shop cars, trucks, and SUVs alongside your parts.
          </h1>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-neutral-300 sm:text-xl">
            Junkyard Car Parts sits in the same ecosystem as Auto Equity Group retail and
            remarketing—so you can choose a vehicle with transparent pricing and finance-friendly
            workflows, then return here for upgrades and maintenance parts.
          </p>
          <MotionLink
            href="#inventory"
            className="inline-flex rounded-full border-2 border-white bg-white px-8 py-3.5 text-sm font-bold text-neutral-950 transition hover:bg-neutral-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            See what we offer
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
            Already have a vehicle? Shop parts.
          </h2>
          <p className="mb-10 text-lg text-neutral-400">
            Browse the global marketplace for performance, OEM+, and salvage-sourced listings where
            permitted.
          </p>
          <MotionLink
            href="/products"
            className="inline-block rounded-full border-2 border-white bg-white px-10 py-4 text-base font-bold text-neutral-950 transition hover:bg-neutral-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Shop parts
          </MotionLink>
        </div>
      </section>
    </div>
  );
}
