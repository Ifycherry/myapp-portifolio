import Header from "../component/Header";
// import About from '../component/About'
import { TypeAnimation } from "react-type-animation";
import photo from '../page/photo.png';
import { useState } from "react";
import transfer from '../page/transfer.png';
import phone from '../page/phone.png';
import search from '../page/search.png';
import Army from '../page/Army.png';
import caljez from '../page/caljez.png';
import nafc from '../page/nafc.png'
import boomyaga from '../page/boomyaga.png'
import message from '../page/message.png';
import x from '../page/x.png';
import linkedin from '../page/linkedin.png';
import logo from '../page/logo.jpeg';

export default function Home() {
  const [readmore, setReadmore] = useState(false)
  return (
    <>
    <Header /> 
    <div className="flex flex-col md:flex-row justify-center  dark:bg-blue-950 dark:text-white min-h-screen text-base font-medium sm:text-lg  overflow-x-hidden w-full max-w-full h-auto object-contain mt-20 ">
      <div className="mx-auto flex min-h-[80vh] flex-col max-w-6xl  gap-12 ml-2 w-full ">
    <ul className="text-center md:w-1/2 md:text-left "> 
      <h1 className="mb-3 mt-5 ml-10 md:ml-16">HELLO, I'M</h1>
      <h1 className="text-4xl font-extrabold md:text-5xl ml-8 md:ml-14">OKORO IFEANYI FRANCIS</h1>
    </ul>  
    
    <h1 className=" text-4xl font-semibold md:text-3xl h-[60px] text-red-800/75 ml-8 md:ml-14 ">
      <TypeAnimation
      sequence={[
        "Full Stack Developer,", 2000,
        "React Developer.", 2000,
      ]}
      speed={50}
      repeat={Infinity}
      />
    </h1>
    
    <p className=" leading-8 ml-1 md:ml-14  ">
      I am a Full Stack Web Developer with experience building responsive <br/>and user-friendly web applications. I enjoy creating modern frontend <br/>interfaces, developing reliable backend systems,   integrating APIs, and<br/> solving real-world problem through technology.
    </p> 
    
     <div className="flex gap-5 mb-6 ml-12">
      <a href="https://wa.link/ewryq6"><nav className="bg-orange-800 rounded-lg border border-orange-600 px-6 py-3 font-semibold transition hover:bg-lime-300">Get In Touch</nav></a>
      <a href="http://localhost:3000/"><nav className="bg-orange-800 rounded-lg border border-orange-600 px-6 py-3 font-semibold transition hover:bg-lime-300">See Projects</nav></a>
     </div>
     
     </div>
     <div className="flex justify-center md:w-1/2 items-center overflow-hidden h-[450px] rounded-[40px] relative mt-8">
      <img src={photo} alt="" className=" rounded-lg  object-top shadow-2xl ring-blue-500 md:h-80 md:w-80 bg-gray-900 absolute bottom-0 left-1/2 -translate-x-1/2  h-full  p-5 w-10/12" />
      
     </div>
    </div>
  
    
    
  {/* About */}
  
 <>
<div className=" dark:bg-blue-950 min-h-screen w-full px-4 sm:px-6 lg:px-12 dark:text-white text-base font-medium sm:text-lg overflow-x-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10  ">
            <ul className="w-full  text-3xl mb-28 mt-10 ">
                <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl  gap-2 flex m ">About  <p className="text-orange-700">Me</p></h1>
                <p className=" mt-4 text-sm sm:text-base ">I build beautiful, accessible frontends and delightful user experiences.</p>
            </ul>
            <ul className="w-full md:w-1/2 text-center  -mt-36 sm:mt-8 md:-mt-4 lg:mt-0 translate-y-8">
                <p className="text-sm sm:text-base  leading-7  mt-6"><span className="">
                    I'm a passionate Full Stack Web Developer focused <br /> on building modern, responsive, and user-friendly<br /> web application. I work with technologies such as<br />  HTML, CSS, JavaScript, React.js, PHP, Tailwind CSS,<br /> Bootstrap, Laravel, and MySQL.</span>{readmore && (
                        <>
                    I enjoy turning ideas<br/> into functional digital experiences  and solving problems <br />through clean, efficient, and maintainable code. I'm <br />continuously improving my skills by building real-world<br /> projects and learning new technologies.
                    I'm currently looking<br /> for opportunities where I can contribute to a development team, gain professional experience, and continue growing as a Full Stack Developer.
                    </>
                     )}
                     <div onClick={() => setReadmore(! readmore)} className=" text-orange-500 underline">{readmore ? "Read Less" : "Read More"}</div>
                </p>
                <nav className="w-full flex flex-col md:flex-row gap-3  justify-center mt-5">
                  <h1 className="rounded-lg px-5 py-2  bg-red-400">HTML</h1>
                  <h1 className="rounded-lg px-5 py-2 bg-red-400">CSS</h1> 
                  <h1 className="rounded-lg px-5 py-2 bg-red-400">JavaScript</h1>
                   <h1 className="rounded-lg px-5 py-2 bg-red-400">React.js</h1> 
                   <h1 className="rounded-lg px-5 py-2 bg-red-400">Bootstrap</h1> 
                   </nav>
                   <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center gap-3 mt-7 ">
                   <h1 className="rounded-lg px-5 py-2 bg-red-400">Tailwind CSS</h1>
                    <h1 className="rounded-lg px-5 py-2 bg-red-400">PHP</h1>
                   <h1 className="rounded-lg px-5 py-2 bg-red-400">Laravel</h1>
                    <h1 className="rounded-lg px-5 py-2 bg-red-400">MySQL</h1>
                   </div>
            </ul>
            <ul className='w-full flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mt-10 md:mt-32 '>
              <p className="rounded-l-lg text-center border border-blue-500 px-5 py-3 w-full sm:w-auto ">5+<br/>Project</p>
              <p className="rounded-l-lg text-center border border-blue-500 px-5 py-3 w-full sm:w-auto">2+<br/>Clients</p>
              <p className="rounded-l-lg text-center border border-blue-500 px-5 py-3 w-full sm:w-auto">100+<br/>Availablity</p>
              <a href="https://wa.link/e285n7" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-blue-900 px-4 py-3 w-full sm:w-[120px] text-center "> Hire me</a>
            </ul>
        </div>
    </div> 
 
    </>
    {/* service */}
    <>
     <div className=' dark:bg-blue-950 min-h-screen  flex-col sm:flex-row lg:relative   px-4 sm:px-6  py-16 w-full lg:-mt-56'>
          <div className=' dark:text-white justify-center items-center text-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:mt-5'>
            <h1 className='text-5xl font-extrabold text-center sm:text-5xl '>Services</h1>
            <p className='mt-5 dark:text-gray-200 mxax-w-2xl mx-auto text-center text-base sm:text-lg'>Design & build experiences that scale — from discovery to delivery.</p>
          </div>
          <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 '>
          <div className=' rounded-lg border dark:border-white/30  text-center  w-80 h-80 mx-auto'>
            <img src={transfer} className='w-4 h-6 ml-4 brightness-0 invert translate-y-32' alt="" />
            <ul>
            <h1 className='text-lg font-semibold  dark:text-violet-200'>Full Stack <br /> Development</h1>
            <p className='mt-7 dark:text-gray-300'>Build scalable, maintainable<br /> web applications (React, <br />Node.js, PHP/Laravel) and <br />robust backends.</p>
            <h4 className='mt-4 font-medium dark:text-gray-300'>learn more</h4>
            </ul>
          </div>
          <nav className=' rounded-lg border dark:border-white/30  text-center  w-80 h-80 mx-auto'>
            <img src={phone} className=' w-4 h-6  ml-4 brightness-0 invert translate-y-32' alt="" />
            <ul>
            <h1 className='text-lg font-semibold  dark:text-violet-200'>Mobile & Web</h1>
            <p className='mt-7 dark:text-gray-300'>Design and implement <br />responsive, accessible <br />interfaces for web and <br /> mobile.</p>
            <h4 className='mt-4 font-medium dark:text-gray-300'>learn more</h4>
            </ul>
          </nav>
          <ul className=' rounded-lg border dark:border-white/30  text-center  w-80 h-80 mx-auto'>
            <img src={search} className='w-4 h-6  ml-4 brightness-0 invert translate-y-32' alt="" />
            <main>
            <h1 className='text-lg font-semibold  dark:text-violet-200'>Dev Tools & Infrastructure</h1>
            <p className='mt-7 dark:text-gray-300'>CI/CD, testing, databases <br />(MySQL, MongoDB), and <br />production-ready <br />deployment practices.</p>
            <h4 className='mt-4 font-medium dark:text-gray-300'>learn more</h4>
            </main>
          </ul>
          </div>
          </div>
    </>

    {/* Projects */}

    <>
        
        <div className='dark:bg-blue-950 min-h-screen   overflow-x-hidden  '>
            <div className='text-center dark:text-white leading-8 '>
                <h1 className='font-extrabold text-5xl'>Latest Work</h1>
                <p>Selected case studies and production projects — crafted with performance and accessibility in mind.</p>
                <main className='flex gap-8 justify-center mt-6'>
                    <h4 className='rounded-full border border-orange-500 bg-orange-500 w-14'>All</h4>
                    <h4 className=' rounded-full border border-gray-500 bg-gray-600 w-40'>Web Development</h4>
                    <h4 className='rounded-full border border-gray-500 bg-gray-600 w-36'>Web Design</h4>
                </main>
            </div>
            <section className='flex flex-wrap gap-6 mt-16 justify-center  w-full  mx-auto  ml-6 '>
                 <a href="https://www.nafcservices.com.ng/" className=''> 
                    <img src={Army} className='relative  h-60 w-[83%]  rounded-lg   object-cover sm:h-56 lg:h-64 block md:w-[500px] lg:w-[550] mr-24' alt="" />
                    <p className='absolute  -mt-28 text-gray-300 rounded-lg w-36 h-7 text-center bg-slate-900 ml-6'>Web Development</p>
                    </a>
                 <a href="https://caljezgroup.com/" className=''>
                    <img src={caljez} className='relative  h-60 w-[85%] rounded-lg   sm:h-56 lg:h-64 object-cover block md:w-[500px] lg:w-[550] ' alt="" />
                    <p className='absolute  -mt-28 text-gray-300 rounded-lg w-36 h-7 text-center bg-slate-900 ml-6'>Web Design</p>
                    </a>
                 <a href="https://www.schools.nafcservices.com.ng/" className='mt-5'>
                    <img src={nafc} className='relative   h-64 w-[85%]  mr-24 rounded-lg sm:h-56 lg:h-64 object-cover block md:w-[500px] lg:w-[550] ' alt="" />
                    <p className='absolute  -mt-28 text-gray-300 rounded-lg w-36 h-7 text-center bg-slate-900 ml-6'>Web Development</p>
                    </a>
                 <a href="https://boomyaga.com/" className=' mt-6'>
                    <img src={boomyaga} className='relative  h-64 w-[85%] rounded-lg  sm:h-56 lg:h-64 object-cover block md:w-[500px] lg:w-[550] ' alt="" />
                    <p className='absolute ml-16 -mt-28 text-gray-300 rounded-lg w-36 h-7 text-center bg-slate-900'>Web Design</p>
                    </a>
            </section>
        </div>
        </>

        {/* Contact */}

        <>
            <form className='dark:bg-blue-950 overflow-x-hidden min-h-screen flex items-center justify-center '>
              <div className='dark:text-white border-2 border-blue-500 rounded-xl p-6  dark:bg-gray-950  max-w-4xl w-full mt-32'>
                <div className=' leading-8 '>
                    <h1 className='font-extrabold text-3xl '>Contact Me</h1>
                    <p>Interested in a project, freelance? Send a message or reach out via the links below.</p>
                </div>
                 <div className='text-center flex gap-5 justify-center mt-5 flex-wrap '>
                    <input type="text" id='name' name='name' className=' rounded-lg border border-gray-300 p-3 w-80 h-14 ' placeholder='Your Name'/>
                    <input type="email" name="email" id="email" className='rounded-lg border border-gray-300 p-3 w-80 h-14 ' placeholder='you@company.com' />
                     </div>
                     <div className='text-center mt-5 justify-center '>
                    <textarea name="" id="" placeholder='Tell me about your project or question' className='rounded-lg border border-gray-300 p-3  w-[320px] h-72 sm:w-[450px] md:w-[550px] lg:w-[600px] xl:w-[680px]'></textarea>
                     </div>
                      <div className='flex mt-6 justify-center ' >
                    <button className=' rounded-lg border border-orange-500 w-[20%] h-[50px]  bg-orange-500 xl:mr-60'>Send Message</button>
                    <div className='flex ml-40 gap-6 '>
                      <a>
                    <img src={message} className='w-6 h-6 dark:invert contrast-125 brightness-105 drop-shadow-lg' alt="" />
                    </a>
                    <a href="https://x.com/x/@IfeanyiIfeanyi">
                    <img src={x} className='w-6 h-6 dark:invert' alt="" />
                    </a>
                    <a href="https://linkedin.com/in/ifeanyi-ifeanyi">
                    <img src={linkedin} className='w-6 h-6 dark:invert' alt="" />
                    </a>
                    </div>
                 </div>
                 </div>
            </form>
            </>

            {/* Footer */}

            <>
            <footer class="dark:bg-blue-950 rounded-base shadow-xs  ">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
                    <div class="sm:flex sm:items-center sm:justify-between mt-28">
                        {/* <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"> */}
                  <div>
                  <div className='flex gap-5'>
                            <img src={logo} className='rounded-full h-10 w-10' alt=" Logo" />
                            <span class="text-heading self-center text-xl font-semibold whitespace-nowrap dark:text-white">Okoro Ifeanyi Francis</span> 
                    </div>
                    <p className='ml-16 dark:text-white'>Full Stack Developer</p>
                    </div>
                    
                        {/* </a> */}
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0 dark:text-white">
                    <span className='flex mr-52 gap-4'>
                            <li>
                                <a href="/home" class="hover:underline me-4 md:me-6">Home</a>
                            </li>
                            <li>
                                <a href="/about" class="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="/service" class="hover:underline me-4 md:me-6">Services</a>
                            </li>
                            <li>
                                <a href="/projects" class="hover:underline me-4 md:me-6">Projects</a>
                            </li>
                            <li>
                                <a href="/contact" class="">Contact</a>
                            </li>
                      </span>
                    <span className='flex gap-10 mt-4'>
                      {/* <img src={x} className='w-6 h-6 invert' alt="" />
                      <img src={twitter} className='w-6 h-6 invert' alt="" />
                      <img src={message} className='w-6 h-6 invert' alt="" /> */}
                  <div>		
                        <img src={message} className='w-6 h-6 dark:invert contrast-125 brightness-105 drop-shadow-lg' alt="" />
                        </div>
                        <a href="https://x.com/x/@IfeanyiIfeanyi" target='_blank' rel="noreferrer">
                        <img src={x} className='w-6 h-6 dark:invert' alt="" />
                        </a>
                        <a href="https://linkedin.com/in/ifeanyi-ifeanyi" target='_blank' rel="noreferrer">
                        <img src={linkedin} className='w-6 h-6 dark:invert' alt="" />
                        </a>
                    </span>
                        </ul>
                    </div>
                    <hr class="my-6 border-default sm:mx-auto lg:my-8 " />
                    <span class=" text-sm text-body sm:text-center dark:text-white">© 2026 Okoro Ifeanyi Francis . Ifycherry Ventures. All Rights Reserved.
                 <p className='md:text-right text-center  sm:-mt-10 md:-mt-7 lg:-mt-7'>Build with Tailwind . Design for Clarity.</p>
                </span>
            
                </div>
            </footer>
            
            
                </>
  </>
  )
  }

