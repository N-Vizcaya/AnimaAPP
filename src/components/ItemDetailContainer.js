import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.js";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "./services/Firebase/Firebase.js";
import LoadingSpin from 'react-loading-spin';




 const ItemDetailContainer = () => {

    const [programs, setPrograms] = useState([])
    const [loading, setLoading] = useState(true)
    
     const {programid} = useParams()
     

    useEffect(() => {
        
        getDoc(doc(db, "items" , programid)).then((querySnapshot) => {
            console.log({id: querySnapshot.id, ...querySnapshot.data()})
            const programs = { id: querySnapshot.id, ...querySnapshot.data()}
            setPrograms(programs)
        }).catch((error) => {
            console.log('Error searching items', error)
        }).finally(() => {
            setLoading(false)
        })
        return (() => {
            setPrograms(undefined)
        })
    },[programid])

    




     return (
      
        <div className='ItemDetailContainer' >
         {loading ? <LoadingSpin/> : <ItemDetail item={programs} programid={programid}/>}  
    </div>
         
     )
      
 }   

 export default ItemDetailContainer