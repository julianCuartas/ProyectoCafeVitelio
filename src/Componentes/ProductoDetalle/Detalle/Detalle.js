import React, { useState } from 'react';
import "./Detalle.css";


import PerfilTaza from "./../../../Imagenes/perfil-taza.jpg"
import { actionTypes } from "../../../reducer";
import {useStateValue} from "../../../StateProvider";
    //peso selecionado 
var peso=0;
  // tipo de molienda seleccionado
var molienda="";

// boton carrito
var disponible = false;
var textoBoton="Agregar al carrito";

const Detalle = function ({ id, imagen, titulo, precio, descripcion }) {
const [contador, setContador] = useState(0);

const [basket, dispatch] = useStateValue();

  

   
    const incrementar=() =>{
        setContador(contador + 1);
        console.log(contador);
        }
        
        const disminuir =() =>{
        
            if(contador !== 0){
                setContador(contador - 1);
            }
        }


    function PesoNeto(comp) {
        var id = document.getElementById(comp);
        var verificado = id.classList.contains('o-btn-rojo');

        if (!verificado) {

            document.getElementById(comp).classList.add("o-btn-rojo");
        }

        if (comp === "4") {
            document.getElementById(5).classList.remove("o-btn-rojo");
            document.getElementById(6).classList.remove("o-btn-rojo");
        }
        else if (comp === "5") {
            document.getElementById(4).classList.remove("o-btn-rojo");
            document.getElementById(6).classList.remove("o-btn-rojo");
        }
        else if (comp === "6") {
            document.getElementById(5).classList.remove("o-btn-rojo");
            document.getElementById(4).classList.remove("o-btn-rojo");
        }
        peso = id.value;
        console.log(peso);

    }

    function Molienda(comp) {
        var id = document.getElementById(comp);
        var verificado = id.classList.contains('o-btn-rojo');

        if (!verificado) {

            document.getElementById(comp).classList.add("o-btn-rojo");
        }

        if (comp === "0") {
            document.getElementById(1).classList.remove("o-btn-rojo");
            document.getElementById(2).classList.remove("o-btn-rojo");
            document.getElementById(3).classList.remove("o-btn-rojo");
        }
        else if (comp === "1") {
            document.getElementById(0).classList.remove("o-btn-rojo");
            document.getElementById(2).classList.remove("o-btn-rojo");
            document.getElementById(3).classList.remove("o-btn-rojo");
        }
        else if (comp === "2") {
            document.getElementById(0).classList.remove("o-btn-rojo");
            document.getElementById(1).classList.remove("o-btn-rojo");
            document.getElementById(3).classList.remove("o-btn-rojo");
        }

        else if (comp === "3") {
            document.getElementById(0).classList.remove("o-btn-rojo");
            document.getElementById(1).classList.remove("o-btn-rojo");
            document.getElementById(2).classList.remove("o-btn-rojo");
        }


        molienda = id.value;
    

    }




    function addToBassket () {
if(contador!=0 && peso!=0 && molienda!="" ){
    dispatch ({
        type: actionTypes.ADD_TO_Basket,
        item :{
            id:id,
            nombreProducto:titulo,
            precio,
            imagen,
            peso,
            molienda,
            cantidad:contador,
        }
    })




// disponible = true;
// textoBoton="Producto agregado al carrito";
// document.getElementById("btnCarrito").classList.remove("o-color");
// document.getElementById("btnCarrito").classList.add("o-btn-bloqueado");



}
else{

    alert ("por favor complete los datos requeridos");
}





    }


    return (
        <div className="o-detalle">

            <div className="col-md-6">
                <div className="o-fondo-detalle">
                    <img className=" o-img-detalle" src={imagen}></img>
                </div>
            </div>
            <div className="col-md-6 o-detalle-izquierda">
                <p className="o-titulo-detalle">{titulo}</p>
                <p className="o-precio-detalle">$ {precio}</p>
                <p className="o-descripcion-detalle">{descripcion}</p>
                <img className="o-img-perfil" src={PerfilTaza}></img>

                <p>selecicones el tipo de  molienda*</p>
                <div className="o-tipoMolienda">
                    <button id="0" className="o-btn-detalle" onClick={() => Molienda('0')} value="Fina">Fina</button>
                    <button id="1" className="o-btn-detalle" onClick={() => Molienda('1')} value="Media">Media</button>
                    <button id="2" className="o-btn-detalle" onClick={() => Molienda('2')} value="Gruesa">Gruesa</button>
                    <button id="3" className="o-btn-detalle" onClick={() => Molienda('3')} value="Grano">Grano</button>
                </div>
                <p>Peso neto*</p>
                <div className="o-tipoMolienda">


                    <button id="4" onClick={(e) => PesoNeto('4')} className="o-btn-detalle" value={250}>250g</button>
                    <button id="5" className="o-btn-detalle" onClick={() => PesoNeto('5')} value={500}>500g</button>
                    <button id="6" onClick={(e) => PesoNeto('6')} className="o-btn-detalle" value={2500}>2500g</button>
                </div>
                <p>Cantidad*</p>

                <div className="o-botones-grupo">
        <button className="o-cantidad-btn o-cantidad-btn-iz" onClick={disminuir}>-</button>
        <p className="o-cantidad-input">{contador}</p>
        <button className="o-cantidad-btn o-cantidad-btn-der" onClick={incrementar}>+</button>
            </div>

<button id="btnCarrito" onClick={()=>addToBassket()}  disabled={disponible} className="btn o-color" >{textoBoton}</button>
          

            
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
            <div>

            </div>

        </div>
    );
}

export default Detalle;