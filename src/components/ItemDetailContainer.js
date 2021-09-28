import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.js";

const programas = () => {
    return new Promise ((resolve, reject) =>{
    const programas =
        [
            {id: 1, name:"Funcional", detalles: "Entrenamientos funcionales, para toda persona apta para realizar ejercicio", price: 2500, imgURL:"./img/funcional.jpg", stock: 5},
            {id: 2, name:"Fitboxing",  detalles: "Toma la parte aerobica del entrenamiento del boxeo", price: 2000, imgURL:"./img/fitboxing1.jpg", stock: 5},
            {id: 3, name:"FutFem", detalles: "Veni a entrenar con el equipo fememino de futbol, todos los miercoles y viernes", price:2000 , imgURL:"./img/futbolFem.jpg", stock: 5}
        ]
    setTimeout(() => resolve(programas), 1000)
    })}


 const ItemDetailContainer = ({programsAdded, addProgFunction}) => {

    const { name } = useParams()
  const [programa, setPrograma] = useState(undefined)

  useEffect(() => {
    const listPrograma = programas()
    
    listPrograma.then(result => {
      const programa = result.find(progD => progD.name === name)
      setPrograma(programa)
    })
    

    return (() => {
      setPrograma(undefined)
    })
  }, [name])    

  

     return (
      
      <ItemDetail item={programa} programsAdded={programsAdded} addProgFunction={addProgFunction} itemComprar={programa}  />
         
     )
      
 }   

 export default ItemDetailContainer