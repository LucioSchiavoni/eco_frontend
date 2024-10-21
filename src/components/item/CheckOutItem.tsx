import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface CheckoutItemProps {
    productData: {
      name: string;
      price: number;
      img: string;
      selectedSize: string;
    };
    onBack: () => void;
  } 

 const CheckOutItem: React.FC<CheckoutItemProps> = ({ productData, onBack }) => {
    const { name, price, img, selectedSize } = productData


  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardInfo({
      ...cardInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log('Processing payment:', cardInfo)
  }

  return (
<div className="container mx-auto px-4 py-8">

      <div className="flex flex-col-reverse lg:flex-row gap-8">
       
        <div className="lg:w-2/3">
        
                  <Card>
    
            <CardHeader>
              <CardTitle>Información de Pago</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Número de Tarjeta</Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardInfo.cardNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cardName">Nombre en la Tarjeta</Label>
                  <Input
                    id="cardName"
                    name="cardName"
                    type="text"
                    placeholder="John Doe"
                    value={cardInfo.cardName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Label htmlFor="expiryDate">Fecha de Expiración</Label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      type="text"
                      placeholder="MM/YY"
                      value={cardInfo.expiryDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      type="text"
                      placeholder="123"
                      value={cardInfo.cvv}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full">Procesar Pago</Button>
              </form>
            </CardContent>
          </Card>
        </div>
         
        <div className="lg:w-1/3">
        <button className='bg-black w-64 text-white px-3 mb-4 py-1 rounded-md ' onClick={onBack}>Volver a seleccionar talle</button>
          <Card>
            
            <CardHeader>
                
              <CardTitle>Detalles del Producto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <img src={img} alt={name} className="w-24 h-24 object-cover rounded-md" />
                <div>
                  <h2 className="text-lg font-semibold">{name}</h2>
                  <p className="text-sm text-gray-600">Talla: {selectedSize}</p>
                  <p className="text-lg font-bold mt-2">${price}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


export default CheckOutItem;