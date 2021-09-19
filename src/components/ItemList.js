import Item from './Item.js'
import css from './ItemList.css'
import Programas from './Programas.js'







const ItemList = ({programs}) => {


return(

 

  <div className="cardList">
      
      {programs?.map(program => <Item key={program.id} dias={program.dias} name={program.name} price={program.price} img={program.imgURL} item={program} />)}
  
  </div>
)
    

}


 export default ItemList 