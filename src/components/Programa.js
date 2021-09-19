import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import LoadingSpin from 'react-loading-spin';
import Item from "./Item.js";

const programas = () => {
    return new Promise ((resolve, reject) =>{
    const programas =
        [
            {id: 1, name:"Funcional", detalles: "Entrenamientos funcionales, para toda persona apta para realizar ejercicio", dias:"Lunes y miercoles", price: "$2500", imgURL:"./img/funcional.jpg"},
            {id: 2, name:"Fitboxing",  detalles: "Toma la parte aerobica del entrenamiento del boxeo", price: "$2000", imgURL:"./img/fitboxing1.jpg"},
            {id: 3, name:"FutFem", detalles: "Veni a entrenar con el equipo fememino de futbol, todos los miercoles y viernes", price:"$1800", imgURL:"./img/futbolFem.jpg"}
        ]
    setTimeout(() => resolve(programas), 3000)
    })}


 const Programa = () => {

    const { name } = useParams()
  const [programa, setPrograma] = useState(undefined)
  console.log(name)
  useEffect(() => {
    const listPrograma = programas()
    console.log(listPrograma)
    listPrograma.then(result => {
      const programa = result.find(prog => prog.name === name)
      setPrograma(programa)
    })
    return (() => {
      setPrograma(undefined)
    })
  }, [name])    
console.log(programa)
    return (
        <Item progDetails={programa}/>
    )
      
 }   

 export default Programa