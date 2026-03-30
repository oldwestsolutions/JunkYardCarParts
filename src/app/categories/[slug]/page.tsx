import type { Metadata } from 'next';
import Image from 'next/image';
import { MotionLink } from '@/components/MotionLink';
import { notFound } from 'next/navigation';
import {
  SHOP_CATEGORIES,
  getCategoryBySlug,
  getCategoryImageSrc,
} from '@/data/shop-categories';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SHOP_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return { title: 'Category' };
  const desc = `Buy ${cat.title.toLowerCase()} — used car parts online. ${cat.blurb}`;
  return {
    title: cat.title,
    description: desc,
    alternates: { canonical: `/categories/${cat.slug}` },
    openGraph: {
      title: `${cat.title} — Used Car Parts`,
      description: desc,
      url: `/categories/${cat.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  const imgSrc = getCategoryImageSrc(cat);
  const productsHref = `/products?q=${encodeURIComponent(cat.productsQuery)}`;

  return (
    <div className="min-h-screen bg-[var(--background-color)]">
      <section className="border-b-2 border-black bg-[var(--primary-color)]">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <p className="mb-4 text-sm text-black/70">
            <MotionLink href="/" className="font-medium underline-offset-4 hover:underline">
              Home
            </MotionLink>
            <span className="mx-2 text-black/40">/</span>
            <MotionLink href="/#catalog" className="font-medium underline-offset-4 hover:underline">
              Categories
            </MotionLink>
            <span className="mx-2 text-black/40">/</span>
            <span className="text-black/60">{cat.title}</span>
          </p>
          <h1 className="mb-3 text-3xl font-black tracking-tight text-black sm:text-4xl md:text-5xl">
            {cat.title}
          </h1>
          <p className="text-xl font-semibold text-black sm:text-2xl">{cat.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="retro-card overflow-hidden">
          <div className="relative aspect-[16/10] w-full bg-gray-200">
            <Image
              src={imgSrc}
              alt={cat.title}
              fill
              className="object-cover"
              sizes="(max-width:768px)100vw,48rem"
              unoptimized={cat.imageVariant === 'interior' || cat.imageVariant === 'brakes'}
            />
          </div>
          <div className="border-t-2 border-black p-5 sm:p-6">
            <p className="text-base leading-relaxed text-black/85 sm:text-lg">{cat.blurb}</p>
            <MotionLink
              href={productsHref}
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md border-2 border-black bg-neutral-300 px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-neutral-400"
            >
              Browse {cat.title.toLowerCase()}
            </MotionLink>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-black/60">
          <MotionLink href="/" className="font-semibold text-black underline-offset-4 hover:underline">
            ← Back to home
          </MotionLink>
        </p>
      </section>
    </div>
  );
}
