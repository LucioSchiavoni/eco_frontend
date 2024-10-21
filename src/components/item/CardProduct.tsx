import { useQuery } from '@tanstack/react-query'
import { getProduct } from '@/api/prodcut'
import CardProductItem from './CardProductItem'

const CardProduct = () => {

  interface SubCategory {
    id: number
    categoryId: number
    name: string
  }

  interface Category {
    id: number
    name: string
    subCategories: SubCategory[]
  }

  interface CardProductProps {
    id: number
    name: string
    price: number
    img: string
    stock: number
    createdAt: string
    productCategories: any[]
    categories: Category[]
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['product'],
    queryFn: () => getProduct(),
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error...</div>
  }

  if (data)

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 '>
      {data.map((item: CardProductProps) => (
        item.categories.map((category) => (
          category.subCategories.map((subCategory) => (
            <CardProductItem
              key={`${item.id}-${category.id}-${subCategory.id}`}
              name={item.name}
              price={item.price}
              img={item.img}
              rating={4}
              id={item.id.toString()}
              subCategories={subCategory.name}
              categories={category.name}
            />
          ))
        ))
      ))}
    </div>
  )
}

export default CardProduct