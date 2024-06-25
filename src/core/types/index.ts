export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imagePath: string;
  weight: string;
};

export type Category = {
  id: string;
  name: string;
  products: Product[];
};

export enum RouterPaths {
  ROOT = '/',
  DETAILS = '/product',
  ABOUT = '/about',
  NOT_FOUND = '*',
}