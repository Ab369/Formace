import bg1 from '../assets/bg1.jpg'

export default function ProjectInfo({showProject,setShowProject}){

    if(!showProject)
    {
        return(
            <div></div>
        )
    }

    return(
        <div className="z-10 absolute flex flex-col border-2 border-solid border-black bg-cream1 rounded-lg md:p-8 p-2 gap-6 items-center md:mx-4 mx-1 transform transition-all duration-500">
        <div className='grid lg:grid-cols-2 items-center gap-6'>
        
        <div className="left flex flex-col items-center gap-4">
            <div className="projectImage md:p-10 p-4 bg-grey">
                <img src={bg1} alt="image" className='w-full'/>
            </div>
        <div className="projectheading lg:text-4xl md:text-3xl font-semibold">PROJECT NAME</div>
        </div>

         <div className='max-md:text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nobis et temporibus quidem inventore modi adipisci voluptate sapiente obcaecati ex, aliquid eveniet aliquam dolorum vero. Numquam nisi minus amet ratione, quisquam suscipit tenetur. Porro excepturi non perferendis quibusdam dignissimos harum inventore nulla eligendi qui vel nisi possimus aut adipisci consectetur odio ad commodi, ullam voluptates vitae quam nemo id quis quasi. Commodi, provident. Beatae mollitia quas, magnam fuga ab quam nulla consequuntur molestiae voluptate facere excepturi quisquam, expedita Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quis, ipsam harum accusantium iste ipsum facilis temporibus totam reprehenderit unde ipsa aspernatur nisi corrupti laborum labore modi esse ea. Deleniti assumenda natus sit alias tempora, similique molestias nihil recusandae? Reprehenderit quidem ratione, praesentium fugit optio corrupti obcaecati blanditiis iste ut laborum nisi voluptates fugiat asperiores reiciendis deserunt repudiandae molestiae odit vero in.
        </div>
        </div>
         <div className="close border-dark border-2 border-solid p-2 font-semibold hover:bg-grey" onClick={()=>setShowProject(false)}>
            CLOSE
         </div>
        </div>
    )
}