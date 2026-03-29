'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';
import MinimalFooter from '@/components/MinimalFooter';

const MINIMAL_FOOTER_PATHS = ['/legal', '/blockchain', '/network', '/marketplace', '/signature'] as const;

export default function FooterSwitcher() {
  const pathname = usePathname();
  const useMinimal = MINIMAL_FOOTER_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
  return useMinimal ? <MinimalFooter /> : <Footer />;
}
