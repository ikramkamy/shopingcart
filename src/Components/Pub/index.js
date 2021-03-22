import React from "react";
import   "./pub.css";
//un composant react c'est fonction au retourne un code JSx
const pubspace =(props) =>{
    //props est un objet qui contient tout les paramettres qu'on veut ajouter au
    return <>
    
    <div className="pub-style">
     
      
      <div > {props.title}</div>
      </div> 
    
    
    
    
  
    
    </>
    };
    //pour afficher le contenu ou pour afficher toute la fonction
    export default pubspace;
/*
    <button onClick={(a)=>{a.preventDefault()}}>click me</button>
    <label for="fname">label</label>
  
    <br />
    <input
      type="text"
      id="fname"
      name="fname"
      onChange={(e) => this.setState({ name: e.target.value })}
    />
    <br />
    <div for="text" >{label}</div>
    <input type="text" id="lname" name="lname"/><br/>
    <label for="lname">{age} </label>
    <br />
    <input type="text" id="lname" name="lname" /><br/>
    <br />
    <label for="lname">{hi}</label>
    <br />
    <input type="text" id="lname" name="lname" />
    changesalutation = (event) =>
    this.setState(
      { hi: event.target.value },
      { item: event.target.value },
      { label: event.target.value },
      { age: event.target.value },
      { name: event.target.value }
    );
    <Mynavbar/>
    */