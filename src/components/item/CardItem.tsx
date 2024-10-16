
import { useParams } from 'react-router-dom'

export const CardItem = () => {


    const {id} = useParams<{id: string}>()

  return (
    <div className='min-h-screen text-center font-semibold'> el id: {id}</div>
  )
}
