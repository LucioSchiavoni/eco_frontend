import { useState } from 'react'
import { Star, ShoppingCart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { getProductById } from '@/api/prodcut'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import TransitionComponent from '../transition/TransitionComponent'
import CheckOutItem from './CheckOutItem'

export default function CardItem() {

  const { id } = useParams<{ id: string }>()
  
  if(!id) {
    return <div>Producto no encontrado</div>
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: () =>  getProductById(id),
  })

  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false)

  const sizes = Array.from({ length: 10 }, (_, i) => (i + 36).toString())

  const handleBuyNow = () => {
    setIsCheckoutVisible(true)
    const productData = data || defaultData;
    const productInfo = {
      ...productData,
      selectedSize: selectedSize || ''
    }
    localStorage.setItem('selectedProduct', JSON.stringify(productInfo))
  }

  const defaultData = {
    name: "Championes Deportivos",
    description: "Estos championes deportivos de alta calidad ofrecen comodidad y estilo para tus actividades diarias. Con una suela duradera y un diseño ergonómico, son perfectos para correr, entrenar o simplemente para uso casual.",
    price: 4999,
    rating: 4.5,
    img: "/placeholder.svg?height=600&width=400"
  };


  if(isLoading) {
    return <div className='flex justify-center items-center'>Loading...</div>
  }

  if(isError) {
    return <div>Error...</div>
  }

  const productData = data || defaultData;
  const { name, price, img } = productData;

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }
  

  return (
<div className="container mx-auto px-4 py-8">
      <TransitionComponent isVisible={!isCheckoutVisible} >
        <div className={classNames("flex flex-col lg:flex-row gap-8", isCheckoutVisible && "hidden")}>
          <div className="lg:w-2/3">
            <Card>
              <CardContent className="p-0">
                <img 
                  src={img} 
                  alt={name} 
                  className="w-full h-auto object-cover rounded-t-lg"
                />
              </CardContent>
            </Card>
          </div>
          <div className="lg:w-1/3">
            <h1 className="text-3xl font-bold mb-4">{name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(defaultData.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">{defaultData.rating}</span>
            </div>
            <p className="text-gray-700 mb-6">{defaultData.description}</p>
            <div className="text-2xl font-bold mb-6">${price}</div>
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Selecciona tu talla</h2>
              <RadioGroup onValueChange={setSelectedSize} className="grid grid-cols-5 gap-2">
                {sizes.map((size) => (
                  <div key={size}>
                    <RadioGroupItem
                      id={`size-${size}`}
                      value={size}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`size-${size}`}
                      className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-gray-100 transition-all peer-focus:bg-gray-200 peer-data-[state=checked]:bg-gray-200 peer-data-[state=checked]:border-primary cursor-pointer"
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <Button 
              className="w-full hover:shadow-xl" 
              size="lg"
              disabled={!selectedSize}
              onClick={handleBuyNow}
            >
              <ShoppingCart className="mr-2 h-5 w-5" /> Comprar ahora
            </Button>
          </div>
        </div>
      </TransitionComponent>

      <TransitionComponent isVisible={isCheckoutVisible}>
        <CheckOutItem 
          productData={{...productData, selectedSize}} 
          onBack={() => setIsCheckoutVisible(false)}
        />
      </TransitionComponent>
    </div>
  )
}