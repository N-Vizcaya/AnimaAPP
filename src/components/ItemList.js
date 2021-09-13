import Item from './Item.js'
import ItemDetailContainer from './ItemDetailContainer.js'
import css from './ItemList.css'






const ItemList = ({items}) => {


return(
  <div className="cardList">
  {items.map(i => <Item key={i.id} description={i.description} name={i.name} price={i.price} img={i.imgURL}/>)}
  
  </div>
)
    

}


 export default ItemList 