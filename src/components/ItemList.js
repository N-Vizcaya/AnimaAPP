import Item from './Item.js'
import  './ItemList.css'








const ItemList = ({programs}) => {


 return(

 

   <div className="cardList">
      
       {programs.map(programs => <Item key={programs.id} programs={programs} />)}
  
   </div>
 )
    

}


 export default ItemList 