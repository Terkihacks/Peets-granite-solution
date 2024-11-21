import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react'; // Import icons from Lucide React

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [
        {name:'Home', href:'/'},
        { name: 'Products', href: '/products' },
        { name: 'Contact', href: '/contact' },
        { name: 'About', href: '/about' },
    ]

    return (
        <>
            <nav className="relative bg-white shadow dark:bg-gray-800  top-0">
                <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <a href="#">
                            <h1 className="w-auto h-7 sm:h-10 text-white font-bold ">
                                PEET'S GRANITE & BUILDING SOLUTIONS
                            </h1>
                        </a>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                {isOpen ? (
                                    <X className="w-6 h-6" /> // Close icon
                                ) : (
                                    <Menu className="w-6 h-6" /> // Menu icon
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:flex md:items-center ${
                            isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                        }`}
                    >
                        <div className="flex flex-col text-white md:flex-row md:mx-6 ">
                        {menuItems.map((link) => (
                       <a
                       key={link.name}
                       href={link.href}
                       className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                        >
                      {link.name}
                      </a> ))}
                        </div>

                        <div className="flex justify-center md:block">
                            <a
                                className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                                href="#"
                            >
                                <ShoppingCart size={50} className="w-5 h-5" />
                                <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
