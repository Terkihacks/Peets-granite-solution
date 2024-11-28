import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SaleProduct from "../components/SaleProduct";

export default function Products(){
    return(
        <>
             <Navbar/>
             <main className="bg-gray-100 min-h-screen">
                <div className="container mx-auto px-4 py-6">
                    <div className="mb-6 text-center">
                        <h1 className="text-4xl font-bold text-gray-800">Our Products</h1>
                        <p className="text-gray-600">Explore our latest collection and best offers!</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(7)].map((_, index) => (
                            <SaleProduct
                             key={index}
                             
                             />
                        ))}
                    </div>
                </div>
            </main>
             
             <Footer/>
        </>
    )
}