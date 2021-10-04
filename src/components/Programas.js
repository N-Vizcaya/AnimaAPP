import { useState, useEffect, } from "react"
import Itemlist from "./ItemList.js"
import LoadingSpin from 'react-loading-spin';
import './programas.css'
import { useParams } from "react-router";
import { db } from "./services/Firebase/Firebase.js";
import { collection, doc, getDocs, query, where } from "@firebase/firestore";





// const getProgramas = () => {
// return new Promise ((resolve, reject) =>{
// const programas =
//     [
//         {id: 1, name:"Funcional", dias:"Lunes y miercoles", stock: 6},
//         {id: 2, name:"Fitboxing", dias:"Martes y jueves", stock: 6},
//         {id: 3, name:"FutFem", dias:"Miercoles y viernes", stock: 6}
//     ]
// setTimeout(() => resolve(programas), 3000)

// })}
const Programs = () => {

const [programs, setPrograms] = useState ([])

const {idProg} = useParams()

    useEffect(() => {
    
        if(!idProg){
            getDocs(collection(db, 'items')).then((querySnapshot) => {
                const programs = querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data() }
                })
                console.log(programs)
                setPrograms(programs)
                
            }).catch((error)=>
            console.log('error al encontrar los productos', error)
            )
        }
        // else {
        //     getDocs(query(collection(db, 'items'), where('category', '==', idProg))).then((querySnapshot) =>{
        //         const programs = querySnapshot.docs.map(doc => {
        //             return {id: doc.id, ...doc.data() }
        //         })
        //         setPrograms(programs) 
            
        //     }).catch((error) =>{
        //         console.log(('Error searching intems', error))
        //     })
        // }
        
    }, [idProg])

    if(programs.length === 0){
        return <div className="cargando">

        <LoadingSpin />
        </div>  
        

    }

    return (
        <div  className="grupoCard">
        <h1> Programas </h1>
        <Itemlist programs={programs} />
        
        
        </div> 
       
    );
}

export default Programs