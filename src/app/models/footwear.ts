import {Review} from "./review";

export interface Footwear {
  id: string;
  brand: string;
  model: string;
  type: string;
  size: number;
  color: string;
  material: string;
  gender: string;
  quantity: number;
  price: number;
  description: string;
  features: string[];
  categories: string[];
  image: string;
  reviews: Review[];
}

