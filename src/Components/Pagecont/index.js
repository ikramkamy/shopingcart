
import "./pagecont.css";
import { Button } from "@material-ui/core";


//un composant react c'est fonction au retourne un code JSx
const Pagecont = (props) => {
  const {count,handleClick,addproduct}=props;
  //props est un objet qui contient tout les paramettres qu'on veut ajouter au
return ( 
 <div className="pagecont">
   
    <div className="card-header"><img style={{width:"10em"} }src={props.purl}></img></div>
    <div className="content-wrapper">
           <div className="row">
              <div> {props.pname}</div>
              <div> {props.pprice} </div>
           </div>
        <div className="button-wrapper">
             <Button  onClick = {addproduct}   variant="contained" color="secondary">
            Ajouter
             </Button>0   
        </div>
      </div>  
  
   </div>
  );
};
//pour afficher le contenu ou pour afficher toute la fonction
export default Pagecont;
