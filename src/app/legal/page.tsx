import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal',
  description:
    'Legal hub for Junkyard Car Parts used car parts marketplace: policies, terms, privacy documents, and compliance resources.',
  alternates: { canonical: '/legal' },
};

/** Set in `.env.local`: shared Dropbox links to your PDFs or docs. */
const DROPBOX_TERMS_URL =
  process.env.NEXT_PUBLIC_DROPBOX_TERMS_URL?.trim() ||
  'https://www.dropbox.com';
const DROPBOX_PRIVACY_URL =
  process.env.NEXT_PUBLIC_DROPBOX_PRIVACY_URL?.trim() ||
  'https://www.dropbox.com';

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500 mb-6">
          <Link href="/" className="text-gray-800 underline-offset-4 hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          Legal
        </p>
        <h1 className="text-2xl font-bold text-gray-900 mb-6 sm:text-3xl">Legal</h1>
        <p className="text-sm text-gray-700 mb-8 sm:text-base">
          Central index for policies governing use of the Junkyard Car Parts marketplace,
          shipping and returns, and privacy. Auto Equity Group affiliated operations follow
          applicable federal and state motor-vehicle and commerce rules.
        </p>

        <div className="space-y-6 rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Terms &amp; Conditions</h2>
            <p className="mt-2 text-sm text-gray-600">
              Full terms are provided as a Dropbox file. Replace{' '}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">
                NEXT_PUBLIC_DROPBOX_TERMS_URL
              </code>{' '}
              in your environment with your shared link.
            </p>
            <a
              href={DROPBOX_TERMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-base font-medium text-gray-900 underline underline-offset-4 hover:text-gray-600"
            >
              Open Terms document (Dropbox) →
            </a>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h2 className="text-lg font-semibold text-gray-900">Privacy Policy</h2>
            <p className="mt-2 text-sm text-gray-600">
              Privacy policy content is provided as a Dropbox file. Replace{' '}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">
                NEXT_PUBLIC_DROPBOX_PRIVACY_URL
              </code>{' '}
              in your environment with your shared link.
            </p>
            <a
              href={DROPBOX_PRIVACY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-base font-medium text-gray-900 underline underline-offset-4 hover:text-gray-600"
            >
              Open Privacy document (Dropbox) →
            </a>
          </div>
        </div>

        <ul className="mt-10 space-y-4">
          <li>
            <Link href="/shipping" className="text-gray-900 font-medium underline-offset-4 hover:underline">
              Shipping &amp; Returns
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              Delivery timelines, international shipping, and return eligibility.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
