import { ICategory } from './category.model';

export interface IProduct {
  id: number;
  name: string;
  thumnail: string;
  decription: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  category: ICategory;
}
