import Image from 'next/image';
import { MotionLink } from '@/components/MotionLink';
import { MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 sm:max-w-none sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 md:grid-cols-4 md:gap-x-6 md:justify-items-stretch lg:gap-x-10">
          <div className="flex w-full flex-col items-start text-left">
            <h3 className="mb-4 text-lg font-semibold text-white">Junkyard Car Parts</h3>
            <div className="mb-4">
              <Image
                src="/brand-placeholder.svg"
                alt=""
                width={80}
                height={80}
                className="h-16 w-16 rounded-lg border border-white/20 bg-white/10 object-cover"
              />
            </div>
            <p className="flex items-start gap-2 text-sm text-neutral-300 sm:text-base">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-neutral-300" aria-hidden />
              <span>Louisiana, USA</span>
            </p>
          </div>

          <div className="flex w-full flex-col items-start text-left">
            <h3 className="mb-4 text-lg font-semibold text-white">Products</h3>
            <ul className="flex w-full flex-col items-start space-y-2">
              <li>
                <MotionLink href="/marketplace" className="text-neutral-300 hover:text-white">
                  Marketplace
                </MotionLink>
              </li>
              <li>
                <MotionLink href="/signature" className="text-neutral-300 hover:text-white">
                  Signature
                </MotionLink>
              </li>
              <li>
                <MotionLink href="/services" className="text-neutral-300 hover:text-white">
                  Services
                </MotionLink>
              </li>
            </ul>
          </div>

          <div className="flex w-full flex-col items-start text-left">
            <h3 className="mb-4 text-lg font-semibold text-white">Solutions</h3>
            <ul className="flex w-full flex-col items-start space-y-2">
              <li>
                <MotionLink href="/blockchain" className="text-neutral-300 hover:text-white">
                  Blockchain
                </MotionLink>
              </li>
              <li>
                <MotionLink href="/network" className="text-neutral-300 hover:text-white">
                  Network
                </MotionLink>
              </li>
            </ul>
          </div>

          <div className="flex w-full flex-col items-start text-left">
            <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
            <ul className="flex w-full flex-col items-start space-y-2">
              <li>
                <MotionLink href="/help-center" className="text-neutral-300 hover:text-white">
                  Help Center
                </MotionLink>
              </li>
              <li>
                <MotionLink href="/legal" className="text-neutral-300 hover:text-white">
                  Legal
                </MotionLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-neutral-300">
          <p>&copy; {new Date().getFullYear()} Junkyard Car Parts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
