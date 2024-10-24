import { getSubCategoryById } from "@/api/prodcut";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import CardProductItem from "./CardProductItem";




const ProductBySubCategory = () => {

    const { id } = useParams<{ id: string }>();

    const { data: subCategory, error, isLoading } = useQuery(
{
        queryKey: ['subCategory', id],
        queryFn: () => getSubCategoryById(Number(id) || 0),
}
    )

    if(error)
    return <div>Error...</div>

    if(isLoading)
    return <div>Loading...</div>

    if(subCategory)
  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
       {subCategory.map((item: any) => (
        <CardProductItem 
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            rating={item.rating}
        />
       ))}
    </div>

  )
}

export default ProductBySubCategory