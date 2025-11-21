import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Applelicious Twist Pure Apple Drink",
    shortName: "Applelicious Twist",
    description: "Experience the crisp, refreshing taste of 100% pure apple juice. No added sugars, just nature's sweetness in a can.",
    price: 300.00,
    imageColor: "bg-red-600",
    nutrition: { calories: 120, sugar: 22, vitamins: 80 }
  },
  {
    id: 2,
    name: "Mango Magic Burst",
    shortName: "Mango Magic",
    description: "Dive into a tropical paradise with our rich and creamy mango nectar. Sourced from the finest Alphonso mangoes.",
    price: 350.00,
    imageColor: "bg-yellow-500",
    nutrition: { calories: 140, sugar: 28, vitamins: 90 }
  },
  {
    id: 3,
    name: "Orange Oasis Squeeze",
    shortName: "Orange Oasis",
    description: "Start your morning right with a zesty blast of Vitamin C. Freshly squeezed taste in every sip.",
    price: 320.00,
    imageColor: "bg-orange-500",
    nutrition: { calories: 110, sugar: 20, vitamins: 100 }
  },
  {
    id: 4,
    name: "Mixed Medley Fusion",
    shortName: "Mixed Medley",
    description: "Why choose one when you can have them all? A perfect blend of passion fruit, guava, and pineapple.",
    price: 380.00,
    imageColor: "bg-pink-500",
    nutrition: { calories: 130, sugar: 25, vitamins: 85 }
  }
];

export const CONTACT_INFO = {
  phone: "+94 079 253 4128",
  email: "fruitfusionlk@gmail.com",
  address: "Independence Square, Colombo 07, Sri Lanka"
};
