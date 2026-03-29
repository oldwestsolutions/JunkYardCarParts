/** Homepage tiles + /categories/[slug] — matches global auto parts marketplace theme */

export const CATEGORY_IMG_INTERIOR =
  'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1200';
export const CATEGORY_IMG_BRAKES =
  'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1200';

export type ShopCategory = {
  slug: string;
  title: string;
  description: string;
  image: string;
  /** use alternate CDN image for these tiles */
  imageVariant?: 'interior' | 'brakes';
  /** `q` param for /products browse CTA */
  productsQuery: string;
  /** Short blurb for the category page body */
  blurb: string;
};

export const SHOP_CATEGORIES: ShopCategory[] = [
  {
    slug: 'engine-parts',
    title: 'ENGINE PARTS',
    description: 'Power up your ride!',
    image:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80',
    productsQuery: 'Engine',
    blurb:
      'Intake, exhaust manifolds, cooling, ignition, and power-adders—sourced with condition notes and verification where suppliers provide documentation.',
  },
  {
    slug: 'exterior-parts',
    title: 'EXTERIOR PARTS',
    description: 'Make it look mean!',
    image:
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
    productsQuery: 'Exterior',
    blurb:
      'Body panels, trim, aerodynamics, and weather seals—listed with fitment context so your build looks intentional, not accidental.',
  },
  {
    slug: 'interior-parts',
    title: 'INTERIOR PARTS',
    description: 'Level up your interior!',
    image:
      'https://images.unsplash.com/photo-1616423645488-daf7c3a0b8dd?auto=format&fit=crop&w=1200&q=80',
    imageVariant: 'interior',
    productsQuery: 'Interior',
    blurb:
      'Seats, dash pieces, consoles, and upholstery-adjacent hardware—comfort and function for daily drivers and show cars alike.',
  },
  {
    slug: 'suspension',
    title: 'SUSPENSION',
    description: 'Ride like a pro!',
    image:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    productsQuery: 'Suspension',
    blurb:
      'Springs, dampers, arms, and bushings—track stance or OEM+ ride quality, with clear notes on mileage and hardware where relevant.',
  },
  {
    slug: 'brakes',
    title: 'BRAKES',
    description: 'Stop on a dime!',
    image:
      'https://images.unsplash.com/photo-1487754180451-c456f29a5e53?auto=format&fit=crop&w=1200&q=80',
    imageVariant: 'brakes',
    productsQuery: 'Brakes',
    blurb:
      'Calipers, rotors, pads, lines, and ABS-adjacent parts—mission-critical stopping power with verification on fit and wear.',
  },
  {
    slug: 'lighting',
    title: 'LIGHTING',
    description: 'Light up the night!',
    image:
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80',
    productsQuery: 'Lighting',
    blurb:
      'Headlights, tail lights, LEDs, and housings—visibility and style with compliance-friendly listings where required.',
  },
  {
    slug: 'exhaust',
    title: 'EXHAUST',
    description: 'Sound like a beast!',
    image:
      'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=1200&q=80',
    productsQuery: 'Exhaust',
    blurb:
      'Headers, mid-pipes, mufflers, and tips—flow, sound, and emissions awareness where sellers document configuration.',
  },
  {
    slug: 'wheels-tires',
    title: 'WHEELS & TIRES',
    description: 'Roll in style!',
    image:
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
    productsQuery: 'Wheels',
    blurb:
      'Wheels, tires, and mounting hardware—sizes, offsets, and tread depth called out so you match your chassis and use case.',
  },
  {
    slug: 'electronics',
    title: 'ELECTRONICS',
    description: 'Tech up your ride!',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    productsQuery: 'Electronics',
    blurb:
      'ECUs, sensors, infotainment, and wiring-adjacent parts—tested where noted, with clear compatibility cues when sellers provide them.',
  },
];

export function getCategoryImageSrc(cat: ShopCategory): string {
  if (cat.imageVariant === 'interior') return CATEGORY_IMG_INTERIOR;
  if (cat.imageVariant === 'brakes') return CATEGORY_IMG_BRAKES;
  return cat.image;
}

export function getCategoryBySlug(slug: string): ShopCategory | undefined {
  return SHOP_CATEGORIES.find((c) => c.slug === slug);
}
