import { useState } from "react";
import Navitems from "./Navitems";

function Navbar(){

    const [navopen,setNavOpen]=useState(false);
    const [toggle,setToggle]=useState(true);

    function changeToggle(){
        setToggle(!toggle)
        setNavOpen(!navopen)
    }

    return (
        <div className="navbar w-full sticky top-0">
            <div className="logo text-xl md:text-3xl font-semibold font-plex">FORMACE</div>
            <Navitems navopen={navopen}></Navitems>
            <div className="toggle md:hidden" onClick={()=>changeToggle()}><span class="material-symbols-outlined">{(toggle?'menu':'close')}</span></div>
        </div>
    )
}

export default Navbar;