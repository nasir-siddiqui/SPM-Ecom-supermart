

import logo from "../assets/logo.png";

import { headerNavItems } from "../constant";


import { FaSearch } from "react-icons/fa";

import { FaHeart } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa";


const Header = () => {



    return (
        <header className="sticky top-0 z-50 backdrop-blur-lg w-full h-[70px] bg-slate-300 py-2">
            <div className="flex justify-around items-center container">
               <a href="#"> <img className="w-[50px]" src={logo} alt="Logo" /></a>
                {/* <nav>
                    <ul className="flex space-x-4">

                        {headerNavItems.map((link, index) => (
                            <li key={index}>
                                <a href={link.href}>
                                    {link.label}
                                </a>

                            </li>
                        ))}

                    </ul>
                </nav> */}

                {/* search box */}
                <div class="w-1/2">
                <form >
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
                </div>



                <div className="flex flex-wrap space-x-2">
                    <button className="px-4 py-2 mx-2 border border-neutral-700 rounded-md flex items-center space-x-2 h-10">
                        <span className="text-sm">Wishlist</span> <FaHeart />
                    </button>
                    <button className="px-4 py-2 mx-2 border border-neutral-700 rounded-md flex items-center space-x-2 h-10">
                        <span className="text-sm">Cart</span> <MdShoppingCart />

                    </button>
                    <button className="px-4 py-2 mx-2 bg-blue-700 text-neutral-200 rounded-md flex items-center space-x-2">
                       <FaUser /> <span>Sign in</span>
                    </button>
                </div>
            </div>

            {/* 2nd layer */}
            {/* <div className="flex">

            </div> */}

        </header>
    )
}

export default Header;
