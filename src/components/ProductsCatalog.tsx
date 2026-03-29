'use client';

import { Suspense, useEffect, useState, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

const products = [
  {
    id: 1,
    name: 'Performance Exhaust System',
    price: 299.99,
    category: 'Exhaust',
    image:
      'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    sourceLocation: 'Dalton, GA, USA · Verified supplier',
    copartLotId: '8843215-US',
    condition: 'New – aftermarket (verified SKU)',
    verification:
      'Supplier credential check + packaging photos on file before listing.',
  },
  {
    id: 2,
    name: 'Carbon Fiber Spoiler',
    price: 199.99,
    category: 'Exterior',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
    rating: 4.2,
    sourceLocation: 'Ontario, CA, USA · Verified supplier',
    copartLotId: null,
    condition: 'New – open box; inspected for weave defects',
    verification: 'QC pass documented; serial sticker cross-checked.',
  },
  {
    id: 3,
    name: 'LED Headlight Kit',
    price: 149.99,
    category: 'Lighting',
    image:
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    sourceLocation: 'Rotterdam, NL · EU fulfillment partner',
    copartLotId: null,
    condition: 'New – sealed retail',
    verification: 'EU partner onboarding + invoice match on dispatch.',
  },
  {
    id: 4,
    name: 'Performance Air Filter',
    price: 49.99,
    category: 'Engine',
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e81a29d?auto=format&fit=crop&w=800&q=80',
    rating: 4.3,
    sourceLocation: 'Houston, TX, USA · Copart lane (where permitted)',
    copartLotId: '7721044-TX',
    condition: 'Used – tested good; mileage unknown',
    verification:
      'Copart run & bid documentation; bench airflow test prior to ship.',
  },
  {
    id: 5,
    name: 'Custom Steering Wheel',
    price: 179.99,
    category: 'Interior',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e66929fa8a9?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    sourceLocation: 'Nagoya, JP · Verified supplier',
    copartLotId: null,
    condition: 'New – custom build to order',
    verification: 'Factory photos + buyer sign-off before international ship.',
  },
  {
    id: 6,
    name: 'Lowering Springs Kit',
    price: 249.99,
    category: 'Suspension',
    image:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    rating: 4.4,
    sourceLocation: 'Chicago, IL, USA · Verified supplier',
    copartLotId: '6619022-IL',
    condition: 'New – take-off; stored indoors',
    verification: 'Spring rate tag photo + alignment recommendation supplied.',
  },
];

const categories = ['All', 'Engine', 'Exterior', 'Interior', 'Lighting', 'Suspension', 'Exhaust'];

function matchesQuery(product: (typeof products)[0], q: string): boolean {
  if (!q) return true;
  const hay = `${product.name} ${product.category} ${product.condition} ${product.verification} ${product.sourceLocation}`.toLowerCase();
  return hay.includes(q.toLowerCase());
}

type ProductsContentProps = { basePath: string };

function ProductsContent({ basePath }: ProductsContentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const qParam = searchParams.get('q')?.trim() ?? '';

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchInput, setSearchInput] = useState(qParam);

  useEffect(() => {
    setSearchInput(qParam);
  }, [qParam]);

  const filteredProducts = products.filter(
    (product) =>
      matchesQuery(product, qParam) &&
      (selectedCategory === 'All' || product.category === selectedCategory)
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  function onSearchSubmit(e: FormEvent) {
    e.preventDefault();
    const q = searchInput.trim();
    router.push(q ? `${basePath}?q=${encodeURIComponent(q)}` : basePath);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Global inventory & Copart auction parts
        </h1>
        <p className="text-gray-700 mb-3 max-w-3xl">
          Explore our global auto parts marketplace with regulated Copart
          participation, supplier verification, and lot-level transparency on
          eligible listings. Every card shows{' '}
          <span className="font-medium">source location</span>,{' '}
          <span className="font-medium">part condition</span>, and{' '}
          <span className="font-medium">verification notes</span>—plus a Copart lot
          ID when the unit is Copart-sourced.
        </p>
        <p className="text-sm text-gray-600 mb-6 max-w-3xl">
          This catalog sits inside a broader <span className="font-medium">global auto
          parts marketplace</span> that also lists <span className="font-medium">
          Copart auction parts</span> when regulations and seller permissions align.
          Eligible checkouts support <span className="font-medium">crypto car parts
          payments</span>, and you can add <span className="font-medium">bonded mechanic
          installation</span> for verified local pros.
        </p>

        <form
          onSubmit={onSearchSubmit}
          className="flex flex-col sm:flex-row gap-2 mb-8 max-w-2xl"
          role="search"
        >
          <label htmlFor="catalog-search" className="sr-only">
            Search parts
          </label>
          <input
            id="catalog-search"
            type="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search by part name, category, condition…"
            className="flex-1 rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            autoComplete="off"
          />
          <button
            type="submit"
            className="rounded-md bg-red-600 px-6 py-2.5 font-semibold text-white hover:bg-red-700 transition-colors"
          >
            Search
          </button>
        </form>
        {qParam && (
          <p className="text-sm text-gray-600 mb-4">
            Showing results for &quot;{qParam}&quot; ·{' '}
            <button
              type="button"
              onClick={() => {
                setSearchInput('');
                router.push(basePath);
              }}
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Clear search
            </button>
          </p>
        )}

        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Live listings
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm text-gray-600">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border-gray-300 text-sm"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {sortedProducts.length === 0 ? (
          <div className="rounded-lg border border-gray-200 bg-white p-12 text-center text-gray-600">
            <p className="text-lg font-medium text-gray-900 mb-2">No parts match your search</p>
            <p className="mb-4">Try different keywords or browse all categories.</p>
            <button
              type="button"
              onClick={() => {
                setSearchInput('');
                setSelectedCategory('All');
                router.push(basePath);
              }}
              className="text-red-600 hover:text-red-700 font-semibold"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="block"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-1">
                      <span className="font-semibold text-gray-600">Source: </span>
                      {product.sourceLocation}
                    </p>
                    {product.copartLotId && (
                      <p className="text-xs text-gray-500 mb-1">
                        <span className="font-semibold text-gray-600">Copart lot: </span>
                        {product.copartLotId}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mb-1">
                      <span className="font-semibold text-gray-600">Condition: </span>
                      {product.condition}
                    </p>
                    <p className="text-xs text-gray-500 mb-2">
                      <span className="font-semibold text-gray-600">Verification: </span>
                      {product.verification}
                    </p>
                    <p className="text-xs text-gray-700 mb-2">
                      Purchase this part securely using Bitcoin.
                    </p>
                    <p className="text-xs text-gray-700 mb-2">
                      Arrange professional installation with verified mechanics near you.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-red-600">
                        ${product.price.toFixed(2)}
                      </span>
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    <span className="mt-4 block w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors text-center">
                      Add to Cart
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

type ProductsCatalogProps = { basePath?: string };

export default function ProductsCatalog({ basePath = '/catalog' }: ProductsCatalogProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 text-gray-600">Loading catalog…</div>
        </div>
      }
    >
      <ProductsContent basePath={basePath} />
    </Suspense>
  );
}
