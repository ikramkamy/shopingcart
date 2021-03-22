import  React from "react";
import   "./logo.css";
//un composant react c'est fonction au retourne un code JSx
const logo =(props) =>{
//props est un objet qui contient tout les paramettres qu'on veut ajouter au
return <div className="logo" style={{...props.size}}>logo </div>


};
//pour afficher le contenu ou pour afficher toute la fonction
export default logo;