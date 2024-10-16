import { useQuery } from '@tanstack/react-query'
import { getProduct } from '@/api/prodcut'
import CardProductItem from './CardProductItem'

const CardProduct = () => {

  interface CardProductProps {
    name: string,
    price: number,
    img: string,
    id: string,
  }

  const {data, isLoading, isError} = useQuery({
    queryKey: ['product'],
    queryFn: () =>  getProduct(),
  })  

  if(isLoading) {
    return <div>Loading...</div>
  }
  
  if(isError) {
    return <div>Error...</div>
  } 

  if(data)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 '>
      {data.map((item: CardProductProps, index: number) => (
     <CardProductItem key={index} name={item.name} price={item.price} img={item.img} rating={4} id={item.id} />
    ))}</div>
  )
}

export default CardProduct


