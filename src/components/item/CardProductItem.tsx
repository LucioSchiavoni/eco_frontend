import { Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

interface ProductCardProps {
  id: string
  img: string
  name: string
  price: number
  originalPrice?: number
  rating: number
  subCategories?: string
  categories?: string
}

export default function CardProductItem({ 
  img = "/placeholder.svg?height=400&width=300", 
  name = "Championes de Futbol", 
  price = 3999, 
  originalPrice = 5999, 
  rating = 4.5,
  id="1",
  // subCategories="Deportes",
  // categories="Calzado"
}: ProductCardProps) {

  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(`/product/${id}`)
  }

  return (
    <Card className="w-full overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative ">
        <img 
          src={img} 
          alt={name} 
          className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
        />
        {discount > 0 && (
          <Badge className="absolute left-2 top-2 bg-red-500">
            -{discount}%
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="mb-2 text-sm sm:text-base lg:text-lg font-semibold line-clamp-2">{name}</h3>
              {/* <p className="mb-2 text-sm sm:text-base lg:text-lg font-semibold line-clamp-2">{subCategories}</p>
                    <p className="mb-2 text-sm sm:text-base lg:text-lg font-semibold line-clamp-2">{categories}</p> */}
        <div className="flex items-center gap-2 mb-2">
          <div className="text-lg sm:text-xl lg:text-2xl font-bold">${price}</div>
          {originalPrice && (
            <div className="text-xs sm:text-sm text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </div>
          )}
        </div>
        <div className="flex items-center">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 sm:h-4 sm:w-4 ${
                  i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-600">{rating}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Button className="w-full text-xs sm:text-sm" onClick={handleNavigate}>Añadir al carrito</Button>
      </CardFooter>
    </Card>
  )
}