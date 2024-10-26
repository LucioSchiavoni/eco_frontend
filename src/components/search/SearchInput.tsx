import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Item = {
  id: number;
  name: string;
  img: string;
};

type SearchProps = {
  items: Item[];
  isLoading: boolean;
};

const SearchInput: React.FC<SearchProps> = ({ items, isLoading }) => {
  const [query, setQuery] = useState<string>("");

    const navigate = useNavigate()
  const handleNavigate = (id: number) => {
    navigate(`/product/${id}`)
  }

  const filteredItems = query
    ? items.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className='w-full flex flex-col  items-center top-5 z-10 max-w-4xl'>
      <div className="relative w-full mb-2">
        <input
          type="search"
          placeholder="Buscar..."
          className="w-full border rounded-md pl-10 pr-3 py-2 focus:outline-none focus:ring focus:ring-zinc-800"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>
      <ul className='w-7/12 md:w-4/12  bg-white absolute mt-11 '>
        {isLoading && <li>Cargando...</li>}
        {filteredItems.map(item => (
          <button   key={item.id} onClick={ () => handleNavigate(item.id)} className='flex gap-3 py-3 px-3 border hover:bg-gray-100 w-full'>
            <li>{item.name}</li>
            <img src={item.img} alt={item.name} className='h-6 w-16 object-cover' />
          </button>
        ))}
      </ul>
    </div>
  );
};

export default SearchInput;