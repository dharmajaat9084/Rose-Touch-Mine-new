
export type Category =
  | 'All'
  | 'Paper Napkins'
  | 'Toilet Tissue Roll'
  | 'Facial Tissue'
  | 'Kitchen Towels'
  | 'Kitchen Rolls'
  | 'HRT Rolls'
  | 'GRT Rolls'
  | 'Bed Rolls'
  | 'Multi Fold Towels'
  | 'L-Fold Napkin';

export interface Product {
  id: number;
  name: string;
  category: Category;
  description: string;
  imageUrl: string;
}
