import React from "react";
import { useEffect, useState } from "react";

function Header({}) {

    const [color, setColor] = useState(false);

    useEffect(function(){
        function scrollEffect(){
            if(window.scrollY > 10){
                setColor(true);
            } else {
                setColor(false);
            }
        }

        window.addEventListener('scroll', scrollEffect)
    }, []);

    return <>
        <div className="header-fixed" style={{backgroundColor: color ? "#0f0f0f" : "",
    transition: 'ease .5s',
    background: 'linear-gradient(to bottom, #0f0f0f 5%, transparent 30%',
    }}>
    </div>
        </>
}

export default Header