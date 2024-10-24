import clienteAxios from "@/config/axios";



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