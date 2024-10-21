import { useState } from 'react'
import { useQuery } from "@tanstack/react-query"
import { toast } from 'react-toastify'
import { createProduct, getCategory, getSubCategory } from '@/api/prodcut'
import { Input } from '../ui/input'

interface Product {
  name: string
  price: string
  stock: string
  img: string
}

interface Category {
  id: number
  name: string
}

interface SubCategory {
  id: number
  name: string
}

const ProductForm: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    name: '',
    price: '',
    stock: '',
    img: '',
  })
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null)
  const [image, setImage] = useState<File | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategory
  })
  const { data: subCategories } = useQuery({
    queryKey: ['subCategories', selectedCategory],
    queryFn: () => getSubCategory(selectedCategory!),
    enabled: !!selectedCategory,
  })

  async function handleCreateProduct(data: FormData) {
    try {
      const response = await createProduct(data)
      toast.success(response.message || "El producto se ha creado exitosamente.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    } catch (error: any) {
      toast.error(error.message || "Error al crear el producto.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!product.name) newErrors.name = 'El nombre del producto es obligatorio.'
    if (!product.price) newErrors.price = 'El precio del producto es obligatorio.'
    if (!product.stock) newErrors.stock = 'El stock del producto es obligatorio.'
    if (!selectedCategory) newErrors.category = 'La categoría es obligatoria.'
    if (!selectedSubcategory) newErrors.subcategory = 'La subcategoría es obligatoria.'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const formData = new FormData()
    formData.append('name', product.name)
    formData.append('price', product.price)
    formData.append('stock', product.stock.toString())
    if (image) formData.append('product[img]', image)

    const categoryName = categories?.find(cat => cat.id === selectedCategory)?.name
  if (categoryName) {
    formData.append('category', categoryName)
  }

  if (selectedSubcategory) {
    formData.append('subCategory', selectedSubcategory)
  }


    await handleCreateProduct(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    })
  }


  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategoryId = Number(e.target.value)
    setSelectedCategory(selectedCategoryId)
    setSelectedSubcategory(null) 
  }

  const handleSubcategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSubcategoryName = e.target.value
    setSelectedSubcategory(selectedSubcategoryName)
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0])
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">
              Nombre del Producto
            </label>
            <Input
              type="text"
              name="name"
              id="name"
              value={product.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-zinc-700 mb-1">
              Precio del Producto
            </label>
            <Input
              type="text"
              name="price"
              id="price"
              value={product.price}
              onChange={handleChange}
              className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
          </div>
          <div>
            <label htmlFor="stock" className="block text-sm font-medium text-zinc-700 mb-1">
              Stock del Producto
            </label>
            <Input
              type="number"
              name="stock"
              id="stock"
              value={product.stock}
              onChange={handleChange}
              className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.stock && <p className="text-red-500 text-xs mt-1">{errors.stock}</p>}
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-zinc-700 mb-1">
              Categoría del Producto
            </label>
            <select
              name="category"
              id="category"
              value={selectedCategory || ''}
              onChange={handleCategoryChange}
              className="mt-1 block py-1 w-full border border-zinc-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Seleccione una categoría</option>
              {categories?.map((category: Category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
          </div>
          <div>
            <label htmlFor="subcategory" className="block text-sm font-medium text-zinc-700 mb-1">
              Subcategoría del Producto
            </label>
            <select
              name="subcategory"
              id="subcategory"
              value={selectedSubcategory || ''}
              onChange={handleSubcategoryChange}
              className="mt-1 block w-full border py-1 border-zinc-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              disabled={!selectedCategory}
            >
              <option value="">Seleccione una subcategoría</option>
              {subCategories?.map((subCategory: SubCategory) => (
                <option key={subCategory.id} value={subCategory.name}>
                  {subCategory.name}
                </option>
              ))}
            </select>
            {errors.subcategory && <p className="text-red-500 text-xs mt-1">{errors.subcategory}</p>}
          </div>
          <div>
            <label htmlFor="img" className="block text-sm font-medium text-zinc-700 mb-1">
              Imagen del Producto
            </label>
            <Input
              type="file"
              name="img"
              id="img"
              onChange={handleImageChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-zinc-800"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 focus:outline-none focus:ring focus:ring-zinc-900"
          >
            Agregar Producto
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProductForm