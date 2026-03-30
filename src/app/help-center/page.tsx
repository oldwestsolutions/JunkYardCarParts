import type { Metadata } from 'next';
import { MotionLink } from '@/components/MotionLink';
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  CubeIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: {
    absolute: 'Help Center',
  },
  description:
    'Get help with orders, shipping, returns, parts fitment, and account questions for Junkyard Car Parts.',
  alternates: { canonical: '/help-center' },
  openGraph: {
    title: 'Help Center',
  },
};

const topics = [
  {
    href: '/products',
    title: 'Browse parts',
    subtitle: 'Search by keyword, category, or condition.',
    icon: CubeIcon,
  },
  {
    href: '/shipping',
    title: 'Shipping & returns',
    subtitle: 'Timelines, international lanes, and return eligibility.',
    icon: TruckIcon,
  },
  {
    href: '/legal',
    title: 'Policies & legal',
    subtitle: 'Terms, privacy, and compliance resources.',
    icon: DocumentTextIcon,
  },
] as const;

export default function HelpCenterPage() {
  return (
    <div className="min-h-[calc(100dvh-3.5rem)] bg-[#f7f7f8] text-neutral-900 antialiased sm:min-h-[calc(100dvh-4rem)]">
      {/* ChatGPT-style top: calm hero + search affordance */}
      <div className="border-b border-neutral-200/80 bg-white">
        <div className="mx-auto max-w-2xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            Support
          </p>
          <h1 className="mt-3 text-center text-[1.75rem] font-semibold leading-tight tracking-tight text-neutral-900 sm:text-3xl">
            How can we help?
          </h1>
          <p className="mx-auto mt-3 max-w-md text-center text-[15px] leading-relaxed text-neutral-600">
            Quick answers for orders, shipping, returns, and shopping used parts on Junkyard Car
            Parts.
          </p>

          <div className="mt-8" role="region" aria-label="Help entry">
            <p className="sr-only">
              Use the popular topics below or email support. There is no on-site search field.
            </p>
            <div className="relative rounded-2xl border border-neutral-200 bg-[#f7f7f8] px-4 py-3.5 pr-14 text-left text-[15px] text-neutral-400 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              Describe your question…
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg bg-white px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-neutral-400 shadow-sm"
                aria-hidden
              >
                Guide
              </span>
            </div>
            <p className="mt-2 text-center text-xs text-neutral-500">
              Tip: use the topics below or email us for order-specific help.
            </p>
          </div>
        </div>
      </div>

      {/* Robinhood-style cards: soft, rounded, green accent on hover */}
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-12">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Popular topics
        </p>
        <ul className="space-y-3">
          {topics.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <MotionLink
                  href={item.href}
                  className="group flex items-center gap-4 rounded-2xl border border-neutral-200/90 bg-white p-4 shadow-sm transition-all hover:border-emerald-500/35 hover:shadow-md"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/10">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-neutral-900">{item.title}</p>
                    <p className="mt-0.5 text-sm text-neutral-500">{item.subtitle}</p>
                  </div>
                  <ArrowRightIcon
                    className="h-5 w-5 shrink-0 text-neutral-300 transition group-hover:translate-x-0.5 group-hover:text-emerald-600"
                    aria-hidden
                  />
                </MotionLink>
              </li>
            );
          })}
        </ul>

        {/* Support panel: conversational, Robinhood green CTA */}
        <section className="mt-10 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <div className="border-b border-neutral-100 bg-gradient-to-br from-emerald-50/80 to-white px-5 py-5 sm:px-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm">
                <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h2 className="text-base font-semibold text-neutral-900">Still need help?</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                  Our team replies by email. Include your order number if you have one so we can
                  resolve faster.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4 px-5 py-5 sm:px-6">
            <a
              href="mailto:support@junkyardcarparts.com"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              <EnvelopeIcon className="h-5 w-5" aria-hidden />
              Email support
            </a>
            <p className="text-center text-xs text-neutral-500">
              support@junkyardcarparts.com
            </p>
          </div>
        </section>

        <p className="mt-10 text-center">
          <MotionLink
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 transition hover:text-neutral-900"
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.99 }}
          >
            <span aria-hidden>←</span> Back to home
          </MotionLink>
        </p>
      </div>
    </div>
  );
}
