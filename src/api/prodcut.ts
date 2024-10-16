import clienteAxios from "@/config/axios";


export const getProduct = async () => {
    try {
        const res = await clienteAxios.get("/product")
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getProductById = async (id: string) => {
    try {
        const res = await clienteAxios.get(`/product/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}