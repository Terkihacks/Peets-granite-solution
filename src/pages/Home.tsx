import Explore from "../components/Explore";
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
    <Explore/>
    <Footer/>
  </main>
</div>
    )
}