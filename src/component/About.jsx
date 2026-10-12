// import { useState  } from "react";
import Header from "../component/Header";
 import Home from '../component/Home'

function About() {
    // const [readmore, setReadmore] = useState(false)
  return (
    <>
    
    <Home />  
    {/* <div className=" bg-blue-950 min-h-screen w-full px-4 sm:px-6 lg:px-12 text-white text-base font-medium sm:text-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 ">
            <ul className="w-full  text-3xl mb-28 mt-10 ">
                <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl  gap-2 flex ">About  <p className="text-orange-700">Me</p></h1>
                <p className=" mt-4 text-sm sm:text-base ">I build beautiful, accessible frontends and delightful user experiences.</p>
            </ul>
            <ul className="w-full md:w-1/2 text-center  -mt-36 sm:mt-8 md:-mt-4 lg:mt-0 translate-y-8">
                <p className="text-sm sm:text-base  leading-7  mt-4"><span className="">
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
            <ul className='w-full flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2  md:mt-20'>
              <p className="rounded-l-lg text-center border border-blue-500 px-5 py-3 w-full sm:w-auto ">5+<br/>Project</p>
              <p className="rounded-l-lg text-center border border-blue-500 px-5 py-3 w-full sm:w-auto">2+<br/>Clients</p>
              <p className="rounded-l-lg text-center border border-blue-500 px-2 py-3 w-full sm:w-auto  ">100+<br/>Availablity</p>
              <div>
              <a href="https://wa.link/e285n7" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-blue-900 px-4 py-3 w-full sm:w-[120px] text-center "> Hire me</a>
            </div>
            </ul>

        </div>
    </div> */}
    </>
  )
}

export default About
