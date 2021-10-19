import { useState, useEffect, } from "react"
import Itemlist from "./ItemList.js"
import LoadingSpin from 'react-loading-spin';
import './ItemList.css'
import { useParams } from "react-router";
import { db } from "../services/Firebase/Firebase.js";
import { collection, getDocs} from "@firebase/firestore";

const Programs = () => {

const [programs, setPrograms] = useState ([])

const {idProg} = useParams()

    useEffect(() => {
    
        if(!idProg){
            getDocs(collection(db, 'items')).then((querySnapshot) => {
                const programs = querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data() }
                })
                setPrograms(programs)
                
            }).catch((error)=>
            console.log('error al encontrar los productos', error)
            )
        }
        
        
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