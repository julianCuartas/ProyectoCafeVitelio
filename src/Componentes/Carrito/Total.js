import React from "react" ;
import "./Total.css";
import {getBaketTotal} from "./../../reducer";
import {useStateValue} from "../../StateProvider";
function Total (){

    const [{basket}, dispatch] = useStateValue();


return(
    <div>
    <div className="col-md-6 o-txt-total-carrito">
    <p >Total</p>
</div>
<div className="col-md-6 o-txt-precio-carrito">
    <p>$ {getBaketTotal(basket)}</p>
</div>
</div>

);


}

export default Total;