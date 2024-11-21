import image3 from '../assets/image 3.webp'
export default function Hero(){
    return(
        <>
       <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 py-1 font-[sans-serif] h-[40rem] lg:py-6 leading-10 justify-items-center">
      <div className="absolute inset-0">
        <img src={image3} alt="Background Image" className="w-full h-full object-cover opacity-50" />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white ">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 py-6 ">Peet's Granite & Building Solutions</h1>
        <h2 className="text-lg md:text-xl mb-8">Transforming Spaces with Timeless Craftsmanship</h2>
        <h3 className="text-lg text-white font-extrabold dark:text-gray-400 py-5">
        At Peet's Granite & Building Solutions, we bring elegance and durability to life. From stunning granite
         countertops to expert building solutions, we tailor every project to reflect your vision with precision and care.
        </h3>
        <button type="button" className="bg-indigo-600 hover:bg-indigo-700 text-white text-base text-wide px-6
         py-2 mb-2  transition duration-300 ease-in-out shadow-lg hover:shadow-xl">View Products </button>
      </div>
    </div>
        </>
    )
}