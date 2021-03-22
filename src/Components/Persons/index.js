import  React from "react";
import   "./persons.css";
//un composant react c'est fonction au retourne un code JSX
//props est un objet qui contient tout les paramettres qu'on veut ajouter au
 const  person= (props)=>{
return (
    
    <div className="person">
   <div  >{props.name}</div>
   <div >{props.age}</div>
   <div>{props.job}</div>
    
  </div>
      )
    }


export default person;
