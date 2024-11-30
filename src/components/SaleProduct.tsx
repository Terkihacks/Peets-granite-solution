import { productList } from "../data/products";
export default function SaleProduct(){
    return(
        <>
  {
    productList.map((product) =>{
        <div key={product.id}  className="max-w-sm mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
        <img className="w-full h-48 object-cover" src={product.image} alt="Blue palm ceramic plate" />
        <div className="p-4">
            <h2 className="text-lg font-semibold text-foreground">{product.name}</h2>
            <p className="text-xl font-bold text-primary">Ksh{product.price}</p>
            <p className="text-muted-foreground mt-2">{product.description}</p>
        <button className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded flex items-center justify-center">
            <img aria-hidden="true" alt="cart" src="https://openui.fly.dev/openui/24x24.svg?text=🛒" className="mr-2" />
            Add to Cart
        </button>
    </div>
    </div>
    })
  }
        </>
    )
}