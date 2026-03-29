import type { Metadata } from 'next';
import { MotionLink } from '@/components/MotionLink';
import {
  ChatBubbleLeftRightIcon,
  CubeIcon,
  TruckIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Help Center',
  description:
    'Get help with orders, shipping, returns, parts fitment, and account questions for Junkyard Car Parts.',
  alternates: { canonical: '/help-center' },
};

const quickLinks = [
  {
    href: '/products',
    title: 'Browse parts',
    body: 'Search used auto parts by keyword, category, or condition.',
    icon: CubeIcon,
  },
  {
    href: '/shipping',
    title: 'Shipping & returns',
    body: 'Delivery timelines, international shipping, and return eligibility.',
    icon: TruckIcon,
  },
  {
    href: '/legal',
    title: 'Policies & legal',
    body: 'Terms, privacy documents, and compliance resources.',
    icon: DocumentTextIcon,
  },
];

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b-2 border-black bg-[var(--primary-color)]">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="text-3xl font-black tracking-tight text-black sm:text-4xl md:text-5xl">
            Help Center
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-black/80">
            Find answers about orders, shipping, returns, and how to shop used car parts on
            Junkyard Car Parts.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="mb-12">
          <h2 className="mb-6 text-lg font-bold text-black">Popular topics</h2>
          <ul className="space-y-4">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <MotionLink
                    href={item.href}
                    className="flex gap-4 rounded-xl border-2 border-black bg-neutral-50 p-4 transition-colors hover:bg-neutral-100"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-black bg-white">
                      <Icon className="h-6 w-6 text-black" aria-hidden />
                    </div>
                    <div>
                      <p className="font-bold text-black">{item.title}</p>
                      <p className="mt-1 text-sm text-black/70">{item.body}</p>
                    </div>
                  </MotionLink>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="rounded-xl border-2 border-black bg-neutral-50 p-6 sm:p-8">
          <div className="flex gap-3">
            <ChatBubbleLeftRightIcon className="h-8 w-8 shrink-0 text-black" aria-hidden />
            <div>
              <h2 className="text-lg font-bold text-black">Still need help?</h2>
              <p className="mt-2 text-sm text-black/80 leading-relaxed">
                Email our support team and include your order number if you have one.
              </p>
              <a
                href="mailto:support@junkyardcarparts.com"
                className="mt-3 inline-block font-semibold text-black underline underline-offset-4 hover:text-black/70"
              >
                support@junkyardcarparts.com
              </a>
            </div>
          </div>
        </section>

        <p className="mt-10 text-center text-sm text-black/60">
          <MotionLink href="/" className="font-semibold text-black underline underline-offset-4">
            ← Back to home
          </MotionLink>
        </p>
      </div>
    </div>
  );
}
