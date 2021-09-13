import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css'

export default function Canasta ()  {
return  <div className="iconCanasta">
<FontAwesomeIcon icon={faShoppingCart} size="2x"/> 
</div>
}