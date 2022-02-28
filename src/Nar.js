import React from "react";
import './Nav.css';
import { useEffect } from "react";
import { useState } from "react";

function Nav(){

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 200){
                handleShow(true);
                
            }else { handleShow(false)}
        });
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);

    return(
        <div className= {`Nav ${ show && "black"}`}>
           <img className="Nav-image" src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="Netflix"/>
           <img className="Nav-image" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="icon"/>
        </div>
    )
}

export default Nav;