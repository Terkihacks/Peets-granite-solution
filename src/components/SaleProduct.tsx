export default function SaleProduct(){
    return(
        <>
        
    <div className="max-w-sm mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
    <img className="w-full h-48 object-cover" src="https://placehold.co/600x400?text=Blue+Palm+Ceramic+Plate" alt="Blue palm ceramic plate" />
    <div className="p-4">
        <h2 className="text-lg font-semibold text-foreground">Blue palm ceramic plate</h2>
        <p className="text-xl font-bold text-primary">36$</p>
        <p className="text-muted-foreground mt-2">Blue palm ceramic plate is the perfect accent for your home decor and appeals to both minimal and bohemian style.</p>
    <div className="mt-4">
        <h3 className="text-sm font-semibold">Colors</h3>
        <div className="flex space-x-2 mt-1">
            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            <div className="w-6 h-6 rounded-full bg-blue-300"></div>
            <div className="w-6 h-6 rounded-full bg-blue-200"></div>
        </div>
    </div>

    <div className="mt-4">
        <h3 className="text-sm font-semibold">Size</h3>
        <div className="flex space-x-2 mt-1">
            <button className="bg-muted text-muted-foreground px-2 py-1 rounded">S</button>
            <button className="bg-muted text-muted-foreground px-2 py-1 rounded">M</button>
            <button className="bg-muted text-muted-foreground px-2 py-1 rounded">L</button>
        </div>
    </div>

    <div className="mt-4 flex items-center">
        <h3 className="text-sm font-semibold">Quantity</h3>
        <div className="flex items-center ml-2">
            <button className="bg-muted text-muted-foreground px-2 py-1 rounded">-</button>
            <span className="mx-2">1</span>
            <button className="bg-muted text-muted-foreground px-2 py-1 rounded">+</button>
        </div>
    </div>

    <button className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded flex items-center justify-center">
        <img aria-hidden="true" alt="cart" src="https://openui.fly.dev/openui/24x24.svg?text=🛒" className="mr-2" />
        Add to Cart
    </button>
</div>
</div>
        </>
    )
}