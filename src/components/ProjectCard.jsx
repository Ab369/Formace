import bg1 from '../assets/bg1.jpg'

export default function ProjectCard(){

    return (
        <div className=" text-white inline-block m-4 bg-dark p-4 rounded-lg" >
           <div className=" flex flex-col innerpart bg-cover md:w-96 h-[600px] max-md:h-[400px] w-80 rounded-lg opacity-90 hover:opacity-100 hover:scale-105 transform transition-all duration-500 border-2 text-center border-cream1 items-center justify-evenly px-4" style={{backgroundImage:`url(${bg1})`}}>
            <div className="title lg:text-4xl md:text-3xl text-xl font-semibold">PROJECT NAME</div>
            <div className="description  text-wrap lg:text-xl md:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, sint. Dignissimos nam sequi optio dolorem recusandae quo, error adipisci pariatur.</div>

            <button className='bg-black w-fit p-2 rounded-lg hover:scale-105'>CLICK TO VIEW</button>
           </div>
        </div>
    )
}