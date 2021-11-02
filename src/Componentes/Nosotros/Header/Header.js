import React from "react";
import Boton from "./../Boton/botonos";
import "./Header.css";
import FondoLogo from "./../../../Imagenes/FormaLogo-02.png";
import Logo from "./../../../Imagenes/Logo-02-02.png";
import Carrito from "./../../../Imagenes/CarritoCompra.png";
const header = ()=>{

return (
<div className="o-header">
{/* <img /> */}
<div className="col">

<div className="o-logo-sup">



<img className="o-logo-fondo" src={FondoLogo} alt="LogoFondo"/>
<img className="o-logo-vitelio" src={Logo} alt="Logo"/>
</div>

</div>


<div className="col-4 o-medio">
    <p className="o-header-nav">Inicio</p>
    <p className="o-header-nav">Productos</p>
    <p className="o-header-nav">Nosotros</p>
    <p className="o-header-nav">Ayuda</p>
</div>

<div className="col-4 o-btn-iz">
<img className="o-carrito" src={Carrito} alt="Logo"/>
<Boton texto="Iniciar sesión"/>
</div>
</div>
);


}

export default header;