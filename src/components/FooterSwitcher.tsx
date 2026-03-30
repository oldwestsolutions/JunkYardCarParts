'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';
import MinimalFooter from '@/components/MinimalFooter';

const NO_FOOTER_PATHS = ['/help-center'] as const;

const MINIMAL_FOOTER_PATHS = ['/legal', '/blockchain', '/network', '/marketplace', '/signature'] as const;

export default function FooterSwitcher() {
  const pathname = usePathname();
  const hideFooter = NO_FOOTER_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
  if (hideFooter) return null;
  const useMinimal = MINIMAL_FOOTER_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
  return useMinimal ? <MinimalFooter /> : <Footer />;
}
