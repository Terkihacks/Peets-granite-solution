import { FaWhatsapp } from 'react-icons/fa'
import { productList } from '../data/products'
export default function Catalog(){
    return(
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4 '> 
  {productList.map((product) => (
                <div key={product.id} className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="px-4 py-2">
                        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{product.name}</h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            {product.description}
                        </p>
                    </div>
                    <img className="object-cover w-full h-48 mt-2" 
                    src={product.image} alt={product.name} 
                    />
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                        <h1 className="text-lg font-bold text-white">{product.price}</h1>
                        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                            Call to order
                            <FaWhatsapp className="w-5 h-5 fill-current" />
                        </button>
                    </div>
                </div>
            ))}

    </div>
    
    )
}