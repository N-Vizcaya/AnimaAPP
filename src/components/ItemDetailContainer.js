import ItemDetail from './ItemDetail.js'

const ItemDetailContainer = ({progDetail}) => {

return(

<div className="detailGroup">
{progDetail?.map(progDet => <ItemDetail key={progDet.id} detail={progDet.name}/>)}

</div>

)

}


export default ItemDetailContainer