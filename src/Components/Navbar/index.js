import  React from "react";
import   "./Navbar.css";
//import Logo from "../Logo";
//un composant react c'est fonction au retourne un code JSx
const navbar =(props) =>{
//props est un objet qui contient tout les paramettres qu'on veut ajouter au
return <>
<div className="navbar"> 

<Logo size={{fontSize:10}} />
{props.title }
{props.children}
<div className="styling">{props.name}</div>

 </div>
</>
};
//pour afficher le contenu ou pour afficher toute la fonction
export default navbar;