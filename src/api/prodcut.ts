import clienteAxios from "@/config/axios";


export const getProduct = async () => {
    try {
        const res = await clienteAxios.get("/product")
        return res.data
    } catch (error) {
        console.log(error)
    }
}

