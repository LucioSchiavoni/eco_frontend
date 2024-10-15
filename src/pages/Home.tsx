import Layout from "@/components/Layout"
import { Navbar } from "../components/navbar/Navbar"

import CardProduct from "@/components/item/CardProduct"



const Home = () => {
  return (
    <Layout>
    <div className="">
      <Navbar/>
      <div className="flex justify-center items-center">
       <CardProduct/>
      </div>
    </div> 
    </Layout>
  )
}

export default Home