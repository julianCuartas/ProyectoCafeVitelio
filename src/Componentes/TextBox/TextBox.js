import React from "react";
import "./TextBox.css";

const TextBox=({palabraPorDefecto,titulo}) =>{

    return(
<div className="o-campo">
 <p className="o-titulo">{titulo}</p>   
<input id ="txtNombre" type="text" className="o-textbox"  placeholder={palabraPorDefecto}/>
</div>
    );



}
export default TextBox;