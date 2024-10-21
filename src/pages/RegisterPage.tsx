import UserForm from "@/components/forms/UserForm"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Link 
          to='/' 
          className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors duration-200 ease-in-out group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200 ease-in-out" />
          <span className="text-sm font-medium">Volver</span>
        </Link>
    
        <UserForm />
      </div>
    </div>
  )
}

export default RegisterPage