import Image from 'next/image';
import Link from 'next/link';
import { MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Junkyard Car Parts</h3>
            <div className="mb-4">
              <Image
                src="/brand-placeholder.svg"
                alt=""
                width={80}
                height={80}
                className="h-16 w-16 rounded-lg border border-white/20 bg-white/10 object-cover"
              />
            </div>
            <p className="flex items-start gap-2 text-sm text-gray-400 sm:text-base">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gray-300" aria-hidden />
              <span>Louisiana, USA</span>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/marketplace" className="text-gray-400 hover:text-white">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/signature" className="text-gray-400 hover:text-white">
                  Signature
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blockchain" className="text-gray-400 hover:text-white">
                  Blockchain
                </Link>
              </li>
              <li>
                <Link href="/network" className="text-gray-400 hover:text-white">
                  Network
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal" className="text-gray-400 hover:text-white">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Junkyard Car Parts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
