import image2 from '../assets/image 2.png'
import { FaWhatsapp,FaTwitter, FaFacebook } from 'react-icons/fa';
 

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 bottom-0 p-4 W-[100%]">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="#">
            <img src={image2} className="w-auto h-7" alt="" />
          </a>

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"> Home </a>
            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"> About </a>
            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"> Teams </a>
            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"> Privacy </a>
            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"> Cookies </a>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-300">© Copyright 2024. All Rights Reserved.</p>
          
          <div className="flex -mx-2">
            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              <FaFacebook bg-color = 'green' className="w-5 h-5 fill-current" />
            </a>
            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <FaTwitter className="w-5 h-5 fill-current" />
            </a>
            <a href="https://wa.me/+254782280375"
             className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <FaWhatsapp className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
