import CardProduct from "@/components/item/CardProduct"
import Layout from "@/components/Layout"

import Header from "@/components/navbar/Header"



const Home = () => {
  return (
    <Layout>

       <Header/>
       <div className="flex justify-center items-center">
            <CardProduct />
          </div>
    </Layout>
  )
}

export default Home