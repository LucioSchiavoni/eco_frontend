import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import CardItem from "@/components/item/CardItem"
import Layout from "@/components/Layout"

import Header from "@/components/navbar/Header"

const ProductItemPage = () => {
  return (
    <Layout>
      <Header/>
    
      <div className="container mx-auto px-4 py-8">
      <Link to='/'>
      <ArrowLeft className="h-5 w-5 text-gray-600" />
      </Link>
         <CardItem />
      </div>
    </Layout>
  )
}

export default ProductItemPage