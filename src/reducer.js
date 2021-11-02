export const initialState={
basket:[],
selecion:[]
}

export const actionTypes ={
ADD_TO_Basket: "ADD_TO_BASKET",
REMOVE_ITEM : "REMOVE_ITEM",
SUBTOTAL: "SUBTOTAL"
}
export const getBaketTotal=(basket)=>{
basket?.reduce((amount,item) => item.precio + amount,0);
}

const reducer =(state, action) =>{
console.log(action);
switch(action.type){
    case "ADD_TO_BASKET":
    return{
        ...state,
        basket:[...state.basket,action.item]
        
        };
case "REMOVE_ITEM":
return{


}
case "SUBTOTAL":
return{
        ...state,
        selecion:[...state.selecion,action.item]

};


        default:return state;
}

}
export default reducer;