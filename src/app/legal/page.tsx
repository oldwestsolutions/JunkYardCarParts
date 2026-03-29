import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal | Junkyard Car Parts',
  description: 'Legal information, policies, and compliance resources for Junkyard Car Parts.',
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500 mb-6">
          <Link href="/" className="text-red-600 hover:text-red-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          Legal
        </p>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Legal</h1>
        <p className="text-gray-700 mb-8">
          Central index for policies governing use of the Junkyard Car Parts marketplace,
          shipping and returns, and privacy. Auto Equity Group affiliated operations follow
          applicable federal and state motor-vehicle and commerce rules.
        </p>
        <ul className="space-y-4 text-lg">
          <li>
            <Link href="/terms" className="text-red-600 hover:text-red-800 font-medium">
              Terms &amp; Conditions
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              Terms of use for this site and related services.
            </p>
          </li>
          <li>
            <Link href="/privacy" className="text-red-600 hover:text-red-800 font-medium">
              Privacy Policy
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              How we collect, use, and protect your information.
            </p>
          </li>
          <li>
            <Link href="/shipping" className="text-red-600 hover:text-red-800 font-medium">
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
