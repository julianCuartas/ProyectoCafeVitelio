import React, { useState } from 'react';
import "./ProductoCarrito.css";

import X from "./../../../Imagenes/x.jpg"

import { actionTypes } from "../../../reducer";
import {useStateValue} from "../../../StateProvider";

const ProductoCarrito = function ({ imagen, precio, titulo, tipo, peso ,ctnr}) {


const [basket, dispatch] = useStateValue();
const [selecion, dispara] = useStateValue();
   


    const [contador, setContador] = useState(ctnr);


function subtotal(){
var valor =0;
if(contador==0){
valor= precio;}

else{
valor = precio*contador;
}

    return valor;
}


const removeItem=()=>dispatch({
type:actionTypes.REMOVE_ITEM , 
name:titulo,
})

    const incrementar=() =>{
        setContador(contador + 1);
        console.log(contador);
        }
        
        const disminuir =() =>{
        
            if(contador !== 0){
                setContador(contador - 1);
            }
        }

    return (
        <div className="o-productocarrito">
            <div className="col-md-6 o-productocarrito-izquierda">
                <div className="col-md-1">
                    <img className=" o-img-x" src={X} onClick={removeItem}></img>
                </div>
                <div className="col-md-4">
                    <img className=" o-img-productocarrito" src={imagen}></img>
                </div>
                <div className="col-md">
                    <div className="o-productocarrito-contenido">
                        <p className="o-productocarrito-titulo">{titulo}</p>
                        <p className="o-productocarrito-texto">Tipo de molienda: {tipo}</p>
                        <p className="o-productocarrito-texto">Peso neto: {peso} g</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                <p className="o-productocarrito-texto2">$ {precio}</p>
            </div>
            <div className="col-md-2">
            <div className="o-botones-grupo">
        <button className="o-cantidad-btn o-cantidad-btn-iz" onClick={disminuir}>-</button>
        <p className="o-cantidad-input">{contador}</p>
        <button className="o-cantidad-btn o-cantidad-btn-der" onClick={incrementar}>+</button>
            </div>
            </div>
            <div className="col-md-2">
                <p className="o-productocarrito-texto2">$ {subtotal()}</p>
            </div>

        </div>
    );
}

export default ProductoCarrito;