

import message from '../page/message.png';
import x from '../page/x.png';
import linkedin from '../page/linkedin.png';
import Home from '../component/Home'

function Contact() {
  return (
    <>
    <Home />
    {/* <form className='bg-blue-950 overflow-x-hidden min-h-screen flex items-center justify-center '>
      <div className='text-white border-2 border-blue-500 rounded-xl p-6  bg-gray-950  max-w-4xl w-full'>
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
              <a href="">
            <img src={message} className='w-6 h-6 invert contrast-125 brightness-105 drop-shadow-lg' alt="" />
            </a>
            <a href="">
            <img src={x} className='w-6 h-6 invert' alt="" />
            </a>
            <a href="">
            <img src={twitter} className='w-6 h-6 invert' alt="" />
            </a>
            </div>
         </div>
         </div>
    </form> */}
    </>
  )
}

export default Contact