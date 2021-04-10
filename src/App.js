//import logo from './logo.svg';
import "./App.css";
import React, { createElement } from "react";
import  { useState ,useEffect} from "react";
import Mynavbar from "./Components/Mynavbar";
import Pagecont from "./Components/Pagecont";
import Pub from "./Components/Pub";
import  {Component}  from 'react';
import Myavbar from "./Components/Mynavbar";
import Show from "./Components/Show";
 
//import {MyFirstComponent,MySecondComponent,ActionLink} from "./Components/Exo";

const homeClick = () => (
  <div>
    <h2>Home</h2>
  </div>
)
function App (){
  const [products,setProducts]= useState([]);
  const [cart,setCart]=useState([]);
  console.log("the cart legnth is ",cart.length)
  const [count, setCount]=useState(cart.length);
 // const [showme,setShowme]=true;
  const handleClick=()=>{setCount(cart.length)};
  const getData=()=>
    fetch("products.json", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => response.json())
    useEffect(()=>{
      getData().then((data)=> {
        console.log(data); 
        setProducts(data.products)
      })
      
     // console.log("products");
     },[])
const addproduct=(product)=>{
setCount(cart.length)
console.log("we are in add to cart")
setCart([...cart,product])
console.log(cart)
}
 
   return <div className="all">
     
    <Myavbar  title="Home" acueil="Accueil" gender="gender" other="other"  count={count} />
    
    { products.map((p)=> <Pagecont addproduct={() => addproduct(p)}  pname={p.name} pprice={p.price} purl={p.url} />)}
   
    {cart.map((pr,idx)=><Show key={idx} addproduct={addproduct}  sname="chocolat" sprice={pr.price} squantity={pr.quantity} /> )}
     
      
      </div>
}
  export default App;
 
 
    