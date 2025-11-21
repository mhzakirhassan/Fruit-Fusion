export interface Product {
  id: number;
  name: string;
  shortName: string;
  description: string;
  price: number;
  imageColor: string; // Fallback color for placeholder
  nutrition: {
    calories: number;
    sugar: number;
    vitamins: number;
  };
}

export type ViewState = 'HOME' | 'SHOP' | 'CONTACT' | 'PRODUCT_DETAIL';
