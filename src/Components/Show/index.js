import react  from "react";
import './show.css';
import {Button } from '@material-ui/core';


const Show=(props)=>{
const {addproduct}=props;
return <div className="show"  >
    {props.key}
<div>{props.sname}</div>
<div>{props.squantity}</div>
<div>{props.sprice}</div>
<Button  /*onClick = {addproduct} */  variant="contained" color="secondary">
            Ajouter au panier
</Button>
</div>
}
export default Show;

/*
if(cart.include(item1)){
var tempCart=cart.filter(el=>el.id  !=item1.id)
var precevt=cart.find(el=> el.id == item1.id)
setCart ([...tempCart,]{...prevItem,quantity: prevItem.quantity+1})
}else {

}

}
*/