

import { useState, useEffect } from "react";
import logo from '../page/logo.jpeg'
import daymode from '../page/daymode.png';
import moon from '../page/moon.png';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    // const [darkMode, setDarkMode] = useState(false);
    // useEffect(() => {
    //     document.documentElement.classList.toggle("darkMode", darkMode);
    // }, [darkMode]);
    // const toggleDarkMode = () => {
    //     setDarkMode(!darkMode);
    //     document.documentElement.classList.toggle("darkMode");
    const [theme, setTheme] = useState(
        ()=> localStorage.getItem("theme") || "light"
    );
      const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    });
    
     
  return (
    <>
<header> 
        <nav class=" border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800 darkMode:bg-blue-950 text-white fixed left-0 top-0 z-10 w-full">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl" >
                {/* <a href="#" class="flex items-center gap-3"> */}
                <div className="flex items-center gap-3">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
                    <img src={logo} className='rounded-full h-16 w-16' alt=" Logo " />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white  ">Okoro Ifeanyi Francis <p className="font-medium text-xs"> Full Stack Web Developer</p></span> 
                    </div>
                {/* </a> */}
                
                <div class="flex items-center lg:order-2">
                    {/* <a href="" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"> */}
                        {/* <img src={darkMode ? daymode : moon} alt="Toggle dark Mode" onClick={()=> setDarkMode(!darkMode) }/> */}
                        
                        
                        {/* </a> */}


        {/* <label className="swap swap-rotate">
  
              <input type="checkbox" />

  
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
             <path
               d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
             </svg>

  
             <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
             </svg>
            </label> */}



                    <a href="https://wa.link/ewryq6" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get started</a>
                    <button data-collapse-toggle="mobile-menu-2" type="button" onClick={() => setIsOpen(! isOpen)}  class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                {/* <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">  */}
                <div className={`${isOpen ? "block":"hidden" } justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2"`}>
                    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ">
                        <li>
                            <a href="/" class="block py-2 pr-4 pl-3   rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0: dark:bg-blue-950 dark:text-white " aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/about" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 mt-2">About</a>
                        </li>
                        <li>
                            <a href="/service" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 mt-2">Services</a>
                        </li>
                        <li>
                            <a href="/projects" class="block py-2 pr-4 pl-3  text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 mt-2">Projects</a>
                        </li>
                        <li>
                            <a href="/contact" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 mt-2">Contact</a>
                        </li>
                        {/* <li>
                            <a href="/footer" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Footer</a>
                        </li>  */}
                        {/* <img src={darkMode ? daymode : moon} alt="Toggle dark Mode" onClick={()=> setDarkMode(!darkMode) }/> */}
                        {/* <button onClick={toggleDarkMode}>
                        {darkMode ? (
                            <img src={daymode} alt=" Light mode" className="h-10 w-10" />
                        ):(
                            <img src={moon} alt="Dark mode" className="h-10 w-10" />
                        )} */}
                        {/* </button> */}
                        {/* <button onClick={() => setDarkMode(!darkMode)} >
                            {/* {darkMode ? "moon" : "daymode"} */}
                            {/* <img src={darkMode ?  moon : daymode} className="w-7 h-7 invert" alt="" /> 
                        </button>  */}
                        <button onClick={toggleTheme} aria-label="Toggle theme">
                            <img src={theme === "light" ? moon  : daymode} className="w-7 h-7 invert cursor-pointer" alt="" />
                        </button>
                    </ul>
                   
                </div>
            </div>
        </nav>
    </header>
    </>
  )
}
