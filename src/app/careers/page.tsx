import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  MapPinIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Careers at Junkyard Car Parts — build the used car parts marketplace: engineering, operations, and customer roles in Louisiana and remote.',
  alternates: { canonical: '/careers' },
};

const values = [
  {
    title: 'Ship with clarity',
    body:
      'We bias toward honest roadmaps, written decisions, and measurable outcomes—whether we are launching a feature or resolving a customer issue.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Learn in public',
    body:
      'Automotive commerce and blockchain move fast. We invest in documentation, pairing, and room to experiment without blame when things change.',
    icon: AcademicCapIcon,
  },
  {
    title: 'Own your lane',
    body:
      'Small teams with clear ownership: you will see your work in production and in customer feedback loops.',
    icon: BriefcaseIcon,
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="relative overflow-hidden border-b border-neutral-200 bg-neutral-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
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
            Company
          </p>
          <h1 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Careers at Junkyard Car Parts
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-300 sm:text-xl">
            Help us connect buyers to verified inventory—from mission-critical used parts to
            Signature customs—while raising the bar for transparency and trust.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-white p-8 sm:flex-row sm:items-start sm:gap-10 sm:p-10">
          <div className="flex items-start gap-3 text-neutral-700">
            <MapPinIcon className="mt-1 h-6 w-6 shrink-0 text-neutral-900" aria-hidden />
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">Location</h2>
              <p className="mt-1 text-neutral-600">
                Headquartered in Louisiana, USA—with remote-friendly roles where role fit
                allows. We list location expectations in each posting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-bold text-neutral-900 sm:text-3xl">
            How we work
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-300 bg-white text-neutral-900">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-900">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 className="mb-4 text-2xl font-bold text-neutral-900 sm:text-3xl">Open roles</h2>
        <p className="mb-8 text-neutral-700 leading-relaxed">
          We post new openings as we grow. Send your résumé, portfolio link (for design or
          engineering roles), and a short note on what you want to build with us.
        </p>
        <a
          href="mailto:careers@junkyardcarparts.com?subject=Careers%20inquiry"
          className="inline-flex rounded-full border-2 border-neutral-900 bg-neutral-900 px-10 py-3 text-sm font-bold text-white hover:bg-neutral-800"
        >
          careers@junkyardcarparts.com
        </a>
        <p className="mt-8 text-sm text-neutral-500">
          We are an equal opportunity employer. Junkyard Car Parts is part of the Auto Equity
          Group ecosystem.
        </p>
        <p className="mt-6">
          <Link href="/" className="text-sm font-semibold text-neutral-900 underline underline-offset-4">
            ← Back to home
          </Link>
        </p>
      </section>
    </div>
  );
}
