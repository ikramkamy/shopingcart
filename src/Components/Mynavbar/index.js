import  React from "react";
import { Button } from '@material-ui/core';
import   "./mynavbar.css";
import Pagecont from '../Pagecont';


const myavbar =(props) =>{
  
    
//props est un objet qui contient tout les paramettres qu'on veut ajouter au
return <>
<div className="mynavbar"> 

<div className="nav">

<Button variant="contained" color="secondary">{props.title}</Button>
<Button variant="contained" color="secondary">{props.acueil}</Button>
<Button variant="contained" color="secondary">{props.gender}</Button>
<Button variant="contained" color="secondary">{props.other}</Button>
</div>
<div className="Wrap-cart">
  <img  className="show-items" src="./images/shopping-cart.png" width="50em"/>
  <div className="bought-item">{props.count} </div>
  </div>





 </div>
</>
};
//pour afficher le contenu ou pour afficher toute la fonction
export default myavbar;