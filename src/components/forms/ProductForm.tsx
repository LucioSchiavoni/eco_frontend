import React, { useState, useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { createProduct, getCategory, getSubCategory } from '../../api/prodcut'


// Define the type for the product state
interface Product {
  name: string
  price: string
  stock: string
  img?: string
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
  const [categories, setCategories] = useState<Category[]>([])
  const [subCategories, setSubCategories] = useState<SubCategory[]>([])
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState<number | null>(null)
 const [image, setImage] = useState<File | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const queryClient = useQueryClient()



  const handleCreateProduct = async (data: FormData) => {
    try {
      queryClient.invalidateQueries({ queryKey: ['products'] })
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

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategory()
      setCategories(data)
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    if (selectedCategory) {
      const fetchSubCategories = async () => {
        const data = await getSubCategory(selectedCategory)
        setSubCategories(data)
      }

      fetchSubCategories()
    }
  }, [selectedCategory])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    })
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(Number(e.target.value))
  }

  const handleSubcategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubcategory(Number(e.target.value))
  }


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0])
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
    formData.append('stock', product.stock)
    if (product.img) formData.append('img', product.img)
    formData.append('category', selectedCategory!.toString())
    formData.append('subCategory', selectedSubcategory!.toString())
      if (image) formData.append('product[img]', image)


    await handleCreateProduct(formData)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-8 text-zinc-800">Agregar Nuevo Producto</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">
              Nombre del Producto
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={product.name}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-zinc-800"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-zinc-700 mb-1">
              Precio
            </label>
            <input
              type="text"
              name="price"
              id="price"
              value={product.price}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-zinc-800"
            />
            {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
          </div>
          <div>
            <label htmlFor="stock" className="block text-sm font-medium text-zinc-700 mb-1">
              Stock
            </label>
            <input
              type="text"
              name="stock"
              id="stock"
              value={product.stock}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-zinc-800"
            />
            {errors.stock && <p className="text-red-500 text-sm">{errors.stock}</p>}
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-zinc-700 mb-1">
              Categoría
            </label>
            <select
              name="category"
              id="category"
              value={selectedCategory || ''}
              onChange={handleCategoryChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-zinc-800"
            >
              <option value="">Selecciona una categoría</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
          </div>
          <div>
            <label htmlFor="subCategory" className="block text-sm font-medium text-zinc-700 mb-1">
              Subcategoría
            </label>
            <select
              name="subCategory"
              id="subCategory"
              value={selectedSubcategory || ''}
              onChange={handleSubcategoryChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-zinc-800"
            >
              <option value="">Selecciona una subcategoría</option>
              {subCategories.map((subcategory) => (
                <option key={subcategory.id} value={subcategory.id}>
                  {subcategory.name}
                </option>
              ))}
            </select>
            {errors.subcategory && <p className="text-red-500 text-sm">{errors.subcategory}</p>}
          </div>
          <div>
            <label htmlFor="images" className="block text-sm font-medium text-zinc-700 mb-1">
              Imágenes del Producto
            </label>
            <input
              type="file"
              name="img"
              id="img"
              multiple
              onChange={handleImageChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-zinc-800"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-800"
          >
            Agregar Producto
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProductForm