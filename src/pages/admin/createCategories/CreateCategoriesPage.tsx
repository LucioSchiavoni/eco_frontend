
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Header from '@/components/navbar/Header'
import FormCategories from '@/components/forms/FormCategories'
import Layout from '@/components/Layout'
import { Link } from 'react-router-dom'

const CreateCategoriesPage = () => {
  return (
    <Layout>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-start justify-center p-4 sm:p-6 md:p-8 pt-16 sm:pt-20 md:pt-24">
        <Card className="w-full max-w-4xl flex flex-col shadow-none border-none bg-transparent">
          <div className="p-4 sm:p-6 md:p-8 flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <Link to="/">
                <Button variant="ghost" className="flex items-center" aria-label="Volver a la página principal">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Volver</span>
                </Button>
              </Link>
            </div>
            <div className="flex-grow flex items-start justify-center">
              <div className="w-full max-w-3xl">
                <FormCategories />
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  </Layout>
  )
}

export default CreateCategoriesPage;