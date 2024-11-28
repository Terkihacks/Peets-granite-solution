import image2 from '../assets/image 2.png'
export default function SaleProduct(){
    return(
        <>
    <div className="max-w-sm mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
    <img className="w-full h-48 object-cover" src={image2} alt="Blue palm ceramic plate" />
    <div className="p-4">
        <h2 className="text-lg font-semibold text-foreground">Blue palm ceramic plate</h2>
        <p className="text-xl font-bold text-primary">36$</p>
        <p className="text-muted-foreground mt-2">Blue palm ceramic plate is the perfect accent 
            for your home decor and appeals to both minimal and bohemian style.</p>
    <button className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded flex items-center justify-center">
        <img aria-hidden="true" alt="cart" src="https://openui.fly.dev/openui/24x24.svg?text=🛒" className="mr-2" />
        Add to Cart
    </button>
</div>
</div>
        </>
    )
}