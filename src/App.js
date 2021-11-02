import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

//Componentes
import Carrito from "./Componentes/Carrito/Carrito";
import Productos from "./Componentes/Productos/Productos";
import ProductoDetalle from "./Componentes/ProductoDetalle/ProductoDetalle";
import FinalizarCompra from "./Componentes/FinalizarCompra/FinalizarCompra";
import Registro from "./Componentes/Registro/Registro";
import Nosotros from "./Componentes/Nosotros/Nosotros";
import InicioS from "./Componentes/InicioS/inicioS";
import Inicio from "./Componentes/Inicio/Inicio";



function App() {
  return (

    <Router>

      <Route path="/" exact component={Inicio} />
      <Route path="/Nosotros" exact component={Nosotros} />
      <Route path="/InicioS" exact component={InicioS} />
      <Route path="/Registro" exact component={Registro} />
      <Route path="/FinalizarCompra" exact component={FinalizarCompra} />
      <Route path="/ProductoDetalle" exact component={ProductoDetalle} />
      <Route path="/Carrito" exact component={Carrito} />
      <Route path="/Productos" exact component={Productos} />
    

    </Router>

  


  );
}

export default App;
