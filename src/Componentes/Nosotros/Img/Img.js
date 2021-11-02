import React from "react";
import "./Img.css";

const Img = function({imagen}){
    return(
        <div>
            <img className="o-imagne" src={imagen}></img>
        </div>
    );
}

export default Img;