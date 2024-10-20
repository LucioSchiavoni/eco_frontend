export interface CreateProductData {
  name: string
  price: string
  stock: string
  img?: string
  categoryId: number
  subCategoryId: number
  images: File[]
}