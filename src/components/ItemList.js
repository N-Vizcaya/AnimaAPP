import Item from './Item.js'
import css from './ItemList.css'
import Programas from './Programas.js'







const ItemList = ({prog}) => {


 return(

 

   <div className="cardList">
      
       {prog.map(program => <Item key={program.id} dias={program.dias} name={program.name} price={program.price} img={program.imgURL} />)}
  
   </div>
 )
    

}


 export default ItemList 