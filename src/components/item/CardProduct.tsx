
import { useQuery } from '@tanstack/react-query'
import { getProduct } from '@/api/prodcut'
const CardProduct = () => {

  const {data, isLoading, isError} = useQuery({
    queryKey: ['products'],
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
      {data.map((item: any, index: number) => (
      <div key={index}>
        <div>{item.name}</div>
        <div>{item.price}</div>
        <img src={item.img} className='w-24 h-24' alt="img" />
      </div>
    ))}</div>
  )
}

export default CardProduct