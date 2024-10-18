import LoginForm from '@/components/login/Login'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'


const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <Link
        to="/"
        className="absolute top-4 left-4 inline-flex items-center justify-center p-2 rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 text-gray-600" />
        <span className="sr-only">Back to home</span>
      </Link>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Ingresa con tu cuenta</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Or{' '}
        <Link to="/register" className="font-semibold text-zinc-800 hover:text-zinc-600">
          crear nueva cuenta
        </Link>
      </p>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="">
        <LoginForm />
      </div>
    </div>
  </div>
  )
}

export default LoginPage