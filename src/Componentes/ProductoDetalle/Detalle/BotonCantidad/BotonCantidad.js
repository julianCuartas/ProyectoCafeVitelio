import React, { useState } from "react";
import "./../BotonCantidad/BotonCantidad.css";


var valor = 0;

function BotonCantidad(){
   const [contador, setContador] = useState(0);

const incrementar=() =>{
setContador(contador + 1);
console.log(contador);
}

const disminuir =() =>{

    if(contador !== 0){
        setContador(contador - 1);
    }
}

return(
    // type="text"  value={valor} size="5"
    <div className="o-botones-grupo">
        <button className="o-cantidad-btn o-cantidad-btn-iz" onClick={disminuir}>-</button>
        <p className="o-cantidad-input">{contador}</p>
        <button className="o-cantidad-btn o-cantidad-btn-der" onClick={incrementar}>+</button>
            </div>

);










}
 
export default BotonCantidad;
            