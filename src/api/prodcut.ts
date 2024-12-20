import clienteAxios from "@/config/axios";
import axios from "axios";



export const getProduct = async () => {
    try {
        const res = await clienteAxios.get("/product")
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getProductById = async (id: string): Promise<any> => {
    try {
        const res = await clienteAxios.get(`/product/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}


export const createProduct = async (data: any) => {
  try {
    const res = await clienteAxios.post("/product", data)
    return res.data
  } catch (error: any) {
    console.error(error)
    throw new Error(error.response?.data?.message || 'Error creating product')
  }
}

export const getCategory = async (): Promise<any[]> => {
  try {
    const res = await clienteAxios.get<any[]>("/categories")
    return res.data
  } catch (error: any) {
    console.error(error)
    throw new Error('Error fetching categories')
  }
}

export const getSubCategory = async (id: number): Promise<any[]> => {
  try {
    const res = await clienteAxios.get<any[]>(`/subCategories/${id}`)
    return res.data
  } catch (error: any) {
    console.error(error)
    throw new Error('Error fetching subcategories')
  }
}


export const getSubCategoryById = async (id: number): Promise<any> => {
  try {
    const res = await clienteAxios.get(`/product/category/${id}`)
    return res.data
  } catch (error: any) {
    console.error(error)
    throw new Error('Error fetching subcategory')
  }
}


export const createSubCategory = async (data: any) => {
  try {
    const res = await clienteAxios.post("/subCategories", data)
    return res.data
  } catch (error: any) {
    console.error(error)
    throw new Error(error.response?.data?.message || 'Error creating subcategory')
  }
}


export const createCategory = async (data: any) => {
  try {
    const res = await clienteAxios.post("/newCategories", data)
    return res.data
  } catch (error: any) {
    console.error(error)
    throw new Error(error.response?.data?.message || 'Error creating category')
  }
}

const API_PYTHON = import.meta.env.VITE_API_PYTHON
export const createPayment = async (data: any) => {
  try {
    const result = await axios.post(`${API_PYTHON}/process_payment`, data)
    return result.data
  } catch (error) {
    console.log(error)
  }
}


