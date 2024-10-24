import { useQuery } from '@tanstack/react-query'
import { getProduct } from '@/api/prodcut'
import CardProductItem from './CardProductItem'

const CardProduct = () => {

  interface SubCategory {
    id: number;
    name: string;
    categoryId: number;
  }

  interface Category {
    id: number;
    name: string;
  }

  interface CardProductProps {
    id: number;
    name: string;
    price: number; 
    img: string;
    stock: number;
    createdAt: string;
    categoryId: number;
    subCategoryId: number;
    category: Category;
    subCategory: SubCategory;
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
        <CardProductItem
          key={item.id}
          name={item.name}
          price={item.price}
          img={item.img}
          rating={4} 
          id={item.id.toString()}
          subCategories={item.subCategory.name} 
          categories={item.category.name} 
        />
      ))}
    </div>
  )
}

export default CardProduct