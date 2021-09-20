import { useState, useEffect } from "react"
import Itemlist from "./ItemList.js"
import LoadingSpin from 'react-loading-spin';
import './programas.css'


const getProgramas = () => {
return new Promise ((resolve, reject) =>{
const programas =
    [
        {id: 1, name:"Funcional", dias:"Lunes y miercoles", price: "$2500", imgURL:"./img/funcional.jpg"},
        {id: 2, name:"Fitboxing", dias:"Martes y jueves", price: "$2000", imgURL:"./img/fitboxing1.jpg"},
        {id: 3, name:"FutFem", dias:"Miercoles y viernes", price:"$1800", imgURL:"./img/futbolFem.jpg"}
    ]
setTimeout(() => resolve(programas), 3000)

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
        <div  className="grupoCard">
        <h1> Programas </h1>
        <Itemlist prog={programs} />
        
        </div> 
       
    );
}

export default Programs