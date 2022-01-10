import StyleCard from '../Styles/StyleCard.css'
import { Link } from 'react-router-dom';


const Card = (props) =>{

    const {img, nombre, id} = props;

    return(
        <div className="card">
            <div className='imgContainer'>
                <img src={img} />
            </div>
            <div className ="card-body">
                <h5 className ="card-title">{nombre}</h5>
                <p >Descripción del producto</p>
                <Link  to = "/ItemDetail/:detalle">Ver Detalle</Link>
            </div>
        </div> 
    )
}

export default Card 