import { useState, useEffect } from "react"
import Itemlist from "./ItemList.js"
import LoadingSpin from 'react-loading-spin';
import './programas.css'
import { useLocation } from "react-router";




const getProgramas = () => {
return new Promise ((resolve, reject) =>{
const programas =
    [
        {id: 1, name:"Funcional", dias:"Lunes y miercoles"},
        {id: 2, name:"Fitboxing", dias:"Martes y jueves"},
        {id: 3, name:"FutFem", dias:"Miercoles y viernes"}
    ]
setTimeout(() => resolve(programas), 3000)

})}

const Programs = () => {

const [programs, setPrograms] = useState ([])
const location = useLocation()
console.log(location.pathname)
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