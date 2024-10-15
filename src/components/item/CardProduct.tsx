import { useQuery } from '@tanstack/react-query'
import { getProduct } from '@/api/prodcut'

const CardProduct = () => {

  interface CardProductProps {
    name: string,
    price: number,
    img: string,
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
    <div className='grid grid-cols-4 gap-8 '>
      {data.map((item: CardProductProps, index: number) => (
      <div key={index} className='text-white'>
        <div>{item.name}</div>
        <div>{item.price}</div>
        <p>{item.img}</p>
       <img src={item.img} alt="img" className='w-24 h-24 rounded-md border shadow-xl' />
      </div>
    ))}</div>
  )
}

export default CardProduct