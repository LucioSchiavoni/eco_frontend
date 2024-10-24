import ProductBySubCategory from "@/components/item/ProductBySubCategory";
import Layout from "@/components/Layout";
import Header from "@/components/navbar/Header";
import TransitionComponent from "@/components/transition/TransitionComponent";




const ProductSubCategoryPage = () => {



  return (
    <Layout>
        <Header/>
        <div className="container mx-auto px-4 py-8 "> 
        <TransitionComponent isVisible={true}>
        <ProductBySubCategory/> 
        </TransitionComponent>
        </div>
    </Layout>
  )
}

export default ProductSubCategoryPage