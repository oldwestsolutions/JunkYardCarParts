import type { Metadata } from 'next';
import Image from 'next/image';
import { MotionLink } from '@/components/MotionLink';
import {
  BuildingStorefrontIcon,
  ClipboardDocumentCheckIcon,
  MapPinIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Auto Service & Bonded Mechanics',
  description:
    'Find verified shops and bonded mechanics through Auto Equity Group’s network — professional installation and service for parts you buy on Junkyard Car Parts.',
  alternates: { canonical: '/services' },
};

const sections = [
  {
    id: 'intro',
    title: 'Service that matches your parts',
    body:
      'Buying the right component is only half the job. Junkyard Car Parts connects you to professional auto service through Auto Equity Group’s bonded network—so installation, diagnostics, and safety-critical work are handled by vetted shops and technicians.',
    image:
      'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1800&q=80',
    imageAlt: 'Automotive technician at work in a professional shop',
  },
  {
    id: 'bonded',
    title: 'Bonded network. Real accountability.',
    body:
      'AEG-affiliated shops in the bonded network meet onboarding and insurance criteria designed for high-trust work: brakes, steering, suspension, and powertrain jobs where torque specs and liability matter. You get clarity on who is turning the wrench—not a random listing from a map pin.',
    image:
      'https://images.unsplash.com/photo-1487754180451-c456f29a5e53?auto=format&fit=crop&w=1800&q=80',
    imageAlt: 'Automotive service bay',
  },
  {
    id: 'find',
    title: 'Find a shop near you',
    body:
      'Tell us your vehicle, the parts you purchased, and your ZIP code. We route you toward participating locations that can confirm fitment, quote labor, and schedule installation—aligned with how Auto Equity Group supports retail and remarketing customers nationwide.',
    image:
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1800&q=80',
    imageAlt: 'Precision automotive work',
  },
  {
    id: 'booking',
    title: 'From cart to bay',
    body:
      'Eligible orders surface installation options at checkout. You’ll see estimated labor windows, shop credentials tied to the bonded program, and documentation expectations—so the handoff from parts marketplace to service bay is deliberate, not improvised.',
    image:
      'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=1800&q=80',
    imageAlt: 'Exhaust and undercar service',
  },
];

const bullets = [
  {
    title: 'Shop verification',
    text: 'Locations are reviewed for tooling, insurance, and program participation—not just star ratings.',
    icon: BuildingStorefrontIcon,
  },
  {
    title: 'Fitment-aware scheduling',
    text: 'Share VIN and part numbers so the shop can prep lifts, fluids, and specialty tools before you arrive.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: 'Regional coverage',
    text: 'Louisiana home base with AEG-backed expansion—urban and suburban lanes prioritized first.',
    icon: MapPinIcon,
  },
  {
    title: 'Right tool, right torque',
    text: 'Bonded pros document critical fasteners and road tests when the job demands it.',
    icon: WrenchScrewdriverIcon,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-neutral-900">
      {sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`relative flex min-h-[100dvh] flex-col justify-center scroll-mt-20 ${
            i % 2 === 0 ? 'bg-neutral-950 text-white' : 'bg-neutral-100 text-neutral-900'
          }`}
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
            <Image
              src={s.image}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
          </div>
          <div
            className={`absolute inset-0 ${
              i % 2 === 0
                ? 'bg-gradient-to-br from-neutral-950 via-neutral-950/97 to-neutral-900/95'
                : 'bg-gradient-to-br from-neutral-100 via-neutral-100/98 to-white/95'
            }`}
          />
          <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col justify-center px-4 py-20 sm:px-8 sm:py-24">
            <p
              className={`mb-4 text-xs font-semibold uppercase tracking-[0.35em] ${
                i % 2 === 0 ? 'text-neutral-400' : 'text-neutral-500'
              }`}
            >
              Services · Auto Equity Group
            </p>
            <h2 className="mb-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {s.title}
            </h2>
            <p
              className={`max-w-2xl text-lg leading-relaxed sm:text-xl ${
                i % 2 === 0 ? 'text-neutral-200' : 'text-neutral-700'
              }`}
            >
              {s.body}
            </p>
            {i === sections.length - 1 && (
              <MotionLink
                href="/products"
                className="mt-10 inline-flex w-fit rounded-full border-2 border-current px-8 py-3 text-sm font-bold transition hover:opacity-90"
              >
                Shop parts first
              </MotionLink>
            )}
          </div>
        </section>
      ))}

      <section className="flex min-h-[100dvh] flex-col justify-center border-t border-neutral-200 bg-white px-4 py-20 sm:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-black text-neutral-950 sm:text-4xl">
            Why the bonded network exists
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-neutral-600">
            Auto Equity Group stewards retail, remarketing, and digital commerce together. Service
            is the bridge between a part on a shelf and miles on the road—so bonded shops carry
            the same rigor as AEG-backed vehicle sales.
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            {bullets.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="flex gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8"
                >
                  <div className="shrink-0 rounded-xl border border-neutral-200 bg-white p-3 text-neutral-900">
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-neutral-900">{b.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{b.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-14 text-center text-sm text-neutral-500">
            Service availability varies by market and shop capacity. Bonded network enrollment is
            managed with Auto Equity Group operating standards.
          </p>
        </div>
      </section>
    </div>
  );
}
