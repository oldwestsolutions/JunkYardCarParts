import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  PaintBrushIcon,
  SparklesIcon,
  UserGroupIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Signature | Junkyard Car Parts',
  description:
    'Signature custom parts and accessories from independent Etsy-class makers—curated style for builds that stand apart.',
};

const pillars = [
  {
    title: 'Independent makers',
    body:
      'Signature connects you with small-batch fabricators, upholsterers, badge makers, and artisans whose work often starts on Etsy or similar channels—brought into one trusted checkout with Junkyard Car Parts.',
    icon: UserGroupIcon,
  },
  {
    title: 'Custom, not commodity',
    body:
      'Expect made-to-order timelines, material choices, and direct communication on fit and finish. These are not mass-market SKUs; they are pieces that reflect your taste.',
    icon: PaintBrushIcon,
  },
  {
    title: 'Curated presentation',
    body:
      'Listings highlight craftsmanship photos, lead times, and return policies clearly—so you know what you are commissioning before you commit.',
    icon: SparklesIcon,
  },
  {
    title: 'Built with care',
    body:
      'We favor sellers who document their process and stand behind their work—aligned with the same trust principles as the rest of the platform.',
    icon: HeartIcon,
  },
];

export default function SignaturePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="relative overflow-hidden border-b border-neutral-200 bg-neutral-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e66929fa8a9?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            className="object-cover opacity-50"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-900/95 to-neutral-950" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Products · Signature
          </p>
          <h1 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Signature customs from makers who get it
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-300 sm:text-xl">
            A home for bespoke interior touches, trim, accessories, and artful add-ons—often
            from sellers you would meet on Etsy—unified under Junkyard Car Parts for
            discovery and secure purchase.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-neutral-900 sm:text-3xl">
              Etsy energy, platform-grade checkout
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              Signature is where independent creators list custom and small-batch work—shift
              boots, wheel accents, interior panels, lighting touches, and more. You get the
              personality of marketplace makers with the cart, payment options, and support
              rails of our marketplace.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Inventory and seller onboarding for Signature rolls out in phases; browse
              eligible listings in the product catalog and filter for Signature where
              available.
            </p>
            <Link
              href="/products"
              className="mt-8 inline-flex rounded-full border-2 border-neutral-900 bg-neutral-900 px-8 py-3 text-sm font-bold text-white hover:bg-neutral-800"
            >
              Explore Signature listings
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=1200&q=80"
              alt="Custom automotive detail and craftsmanship"
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
            What Signature stands for
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

      <section className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
        <p className="mb-6 text-neutral-700">
          Need mission-critical used parts first? Head to{' '}
          <Link
            href="/marketplace"
            className="font-semibold text-neutral-900 underline underline-offset-4"
          >
            Marketplace
          </Link>
          .
        </p>
        <Link
          href="/products"
          className="inline-flex rounded-full border-2 border-neutral-900 px-8 py-3 text-sm font-bold text-neutral-900 hover:bg-neutral-200"
        >
          Browse all products
        </Link>
      </section>
    </div>
  );
}
