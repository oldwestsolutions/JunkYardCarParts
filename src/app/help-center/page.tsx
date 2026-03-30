import type { Metadata } from 'next';
import { MotionLink } from '@/components/MotionLink';
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  CubeIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
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

function AssistantAvatar() {
  return (
    <div
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm ring-2 ring-white"
      aria-hidden
    >
      <ChatBubbleLeftRightIcon className="h-4 w-4" />
    </div>
  );
}

export default function HelpCenterPage() {
  return (
    <div className="min-h-[calc(100dvh-3.5rem)] bg-[#f7f7f8] text-neutral-900 antialiased sm:min-h-[calc(100dvh-4rem)]">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10">
        {/* Chat-window shell */}
        <div className="overflow-hidden rounded-2xl border border-neutral-200/90 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
          {/* Chat header — bot / support strip */}
          <div className="flex items-center gap-3 border-b border-neutral-100 bg-gradient-to-r from-neutral-50 to-white px-4 py-3.5 sm:px-5">
            <AssistantAvatar />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-neutral-900">Support</p>
              <p className="text-xs text-emerald-700">
                <span className="inline-flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Online · We reply by email
                </span>
              </p>
            </div>
          </div>

          {/* Thread */}
          <div className="space-y-4 bg-[#f7f7f8] px-4 py-5 sm:px-5 sm:py-6">
            <div className="flex gap-3">
              <AssistantAvatar />
              <div className="min-w-0 max-w-[min(100%,22rem)] rounded-2xl rounded-tl-md border border-neutral-200/80 bg-white px-4 py-3.5 shadow-sm">
                <h1 className="text-[1.125rem] font-semibold leading-snug tracking-tight text-neutral-900 sm:text-xl">
                  How can we help?
                </h1>
                <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
                  Quick answers for orders, shipping, returns, and shopping used parts on Junkyard Car
                  Parts.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <AssistantAvatar />
              <div className="min-w-0 max-w-[min(100%,22rem)] rounded-2xl rounded-tl-md border border-neutral-200/80 bg-neutral-50 px-4 py-3 text-[14px] leading-relaxed text-neutral-600">
                Use the popular topics below or email support. There is no on-site search field.
              </div>
            </div>

            {/* Composer-style input (read-only affordance) */}
            <div className="ml-0 sm:ml-11">
              <div className="relative rounded-2xl border border-neutral-200 bg-white px-4 py-3 pr-24 text-left text-[15px] text-neutral-400 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                Describe your question…
                <span
                  className="absolute right-12 top-1/2 -translate-y-1/2 rounded-lg bg-neutral-100 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-neutral-500"
                  aria-hidden
                >
                  Guide
                </span>
                <span
                  className="absolute right-2.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm"
                  aria-hidden
                >
                  <PaperAirplaneIcon className="h-4 w-4 -rotate-12" />
                </span>
              </div>
              <p className="mt-2 text-center text-xs text-neutral-500 sm:text-left">
                Tip: use the topics below or email us for order-specific help.
              </p>
            </div>

            <div className="border-t border-neutral-200/80 pt-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">
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
                        <div className="min-w-0 flex-1 text-left">
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
            </div>

            {/* Assistant follow-up + email CTA */}
            <section className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
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
          </div>
        </div>

        <p className="mt-8 text-center">
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
