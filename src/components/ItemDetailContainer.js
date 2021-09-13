import ItemDetail from './ItemDetail.js'

const ItemDetailContainer = ({details}) => {

return(

<div>
{details.map(i => <ItemDetail key={i.id} detail={i.detail}/>)}

</div>

)

}


export default ItemDetailContainer