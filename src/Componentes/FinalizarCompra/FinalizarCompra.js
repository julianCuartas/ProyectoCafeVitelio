import './FinalizarCompra.css';
import Pedido from "./Pedido/Pedido";
import Boton from "./../Botones/bontones";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";


const FinalizarCompra = function () {
    return (
        <div className="App">
            <Header />
            <div className="o-finalizarCompra ">

                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-4 izq">
                        <h4>Hola Nombre,</h4>
                        <p>Estas a solo dos pasos de finalizar tu compra</p>
                        <br />
                        <h4><b>Dirección de envío</b></h4>
                        <p>Esta es la dirección hacia donde va tu pedido</p>
                        <div className="o-campo">
                            <input id="txtNombre" type="text" className="o-textbox" placeholder="Calle 13 Cra 39 Esquina, Barrio Departamental" />
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-4">
                        <Pedido />
                        <br />
                        <br />
                        <Boton texto="Finalizar compra"/>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default FinalizarCompra;