import { useEffect,useState } from 'react'
import bg2 from '../assets/bg2.jpg'
import bg3 from '../assets/bg3.jpg'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'
import facebook from '../assets/facebook.png'

function Home(){
    const backgrounds=[bg2,bg3,bg2]
    const [currBackground,setCurrBackground]=useState(bg2)

    // let currImageIndex=0;
    // useEffect(()=>{
    //     setInterval(()=>{
    //         currImageIndex=(currImageIndex+1)%backgrounds.length
    //         setCurrBackground(backgrounds[currImageIndex]);
    //     },5000)
    // },[backgrounds])

    return (
        <div className="outer relative bg-cream2 border-t-2 border-solid border-dark w-full">
         <div className="inner flex justify-center text-center items-center bg-cover h-[60vh] md:h-[89vh]" style={{backgroundImage:`url(${currBackground})`}}>
          <div className='text-xl md:text-5xl text-dark font-semibold md:backdrop-blur-sm bg-opacity-50 p-2 rounded-md md:px-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, rem.</div>
         </div>
         <div className="socials absolute flex w-28 gap-2 bottom-2 right-2 md:flex-col md:w-12 md:top-4 md:right-2 md:gap-4">
            <a href="" className='hover:scale-110 transform transition-all duration-150'><img src={facebook} alt="icon" /></a>
            <a href="" className='hover:scale-110 transform transition-all duration-150'><img src={instagram} alt="icon" /></a>
            <a href="" className='hover:scale-110 transform transition-all duration-150'><img src={whatsapp} alt="icon" /></a>
         </div>
        </div>
    )
}

export default Home