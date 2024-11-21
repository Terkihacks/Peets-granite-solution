import Catalog from "../components/Catalog";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

export default function Home(){
    return(
 <div>
  <main>
   <Navbar/>
    <div className="">
    <Hero/>
    </div>
    <h2 className="flex flex-row text-4xl md:text-3xl font-extrabold justify-center my-3 py-3">PRODUCTS</h2>
    <div className="flex flex-wrap w-[90%] md:w-[80%] mx-auto gap-[30px] md:justify-center">
    <Catalog/>
    </div>
    <Footer/>
  </main>
</div>
    )
}