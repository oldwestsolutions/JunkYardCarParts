/** Preview data for navbar cart dropdown and cart page initial state */

export type CartLineItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export const MOCK_CART_ITEMS: CartLineItem[] = [
  {
    id: 1,
    name: 'Performance Exhaust System',
    price: 299.99,
    image:
      'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=400&q=80',
    quantity: 1,
  },
  {
    id: 2,
    name: 'LED Headlight Kit',
    price: 149.99,
    image:
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=400&q=80',
    quantity: 2,
  },
];
