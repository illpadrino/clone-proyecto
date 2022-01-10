import StyleCard from '../Styles/StyleCard.css';
import { useParams } from 'react-router-dom';


const ItemDetail = () =>{
    let params = useParams();
    console.log(params);
  
    return(
        
        <div>
            <h5>nombre</h5>
            <p>Descripción completa del producto</p>
        </div>
             
    )
}

export default ItemDetail;