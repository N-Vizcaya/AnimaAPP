import { useState, useEffect } from "react"
import ItemList from "./ItemList.js"
import LoadingSpin from 'react-loading-spin';
import './programas.css'

const getProgramas = () => {
return new Promise ((resolve, reject) =>{
const programas =
    [
        {id: 1, name:"Funcional", detalles: "Entrenamientos funcionales, para toda persona apta para realizar ejercicio", dias:"Lunes y miercoles", price: "$2500", imgURL:"./img/funcional.jpg"},
        {id: 2, name:"Fitboxing",  detalles: "Toma la parte aerobica del entrenamiento del boxeo", dias:"Martes y jueves", price: "$2000", imgURL:"./img/fitboxing1.jpg"},
        {id: 3, name:"Futbol Femenino", detalles: "Veni a entrenar con el equipo fememino de futbol, todos los miercoles y viernes", dias:"Miercoles y viernes", price:"$1800", imgURL:"./img/futbolFem.jpg"}
    ]
setTimeout(() => resolve(programas), 1000)

})}

const Programs = () => {

const [programs, setPrograms] = useState ([])

    useEffect(() => {
        const listPrograms = getProgramas()
        listPrograms.then(resultado => setPrograms(resultado))
        
    }, [])

    if(programs.length === 0){
        return <div className="cargando">

        <LoadingSpin />
        </div>  
        

    }

    return (
        <div style={{alignItems: "center"}}>
        <h1> Programas </h1>
        <ItemList program={programs}/>
        
        </div> 
       
    );
}

export default Programs