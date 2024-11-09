import { useRef } from "react";

function Navitems({navopen}){
    const lastActiveLink=useRef(null);

    const items=[
        {
            label:'HOME',
            link:'#home',
            className:'nav-link active',
            ref:lastActiveLink

        },
        {
            label:'ABOUT',
            link:'#about',
            className:'nav-link',
            ref:null
        },
        {
            label:'PROJECTS',
            link:'#project',
            className:'nav-link',
            ref:null
        },
        {
            label:'CONTACT',
            link:'#contact',
            className:'nav-link',
            ref:null
        },
    ]

    const activeCurrentLink=((e)=>{
        lastActiveLink.current.classList.remove('active')
        e.target.classList.add('active')
        lastActiveLink.current=e.target
    })

    return(
        <nav className={"navitems "+(navopen?'':'close')}>
            {
                items.map((e)=>{
                    return(
                    <ItemComp item={e} activeCurrentLink={activeCurrentLink}></ItemComp>
                    )
                })
            }
        </nav>
    )
}

function ItemComp({item,activeCurrentLink}){
    return(
        <a href={item.link} ref={item.ref} className={item.className+" hover:scale-110 transform transition-all duration-300 ease-in-out"} onClick={(e)=>{
            activeCurrentLink(e);
        }}>{item.label}</a>
    )
}

export default Navitems;