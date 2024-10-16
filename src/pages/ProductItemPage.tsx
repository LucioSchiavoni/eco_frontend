import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import CardItem from "@/components/item/CardItem"
import Layout from "@/components/Layout"
import { Navbar } from "@/components/navbar/Navbar"
import { Button } from "@/components/ui/button"

const ProductItemPage = () => {
  return (
    <Layout>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-start mb-6">
          <Button
            variant="ghost"
            className="flex items-center text-primary hover:text-primary-dark transition-colors"
            asChild
          >
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Link>
          </Button>
        </div>
        <CardItem />
      </div>
    </Layout>
  )
}

export default ProductItemPage