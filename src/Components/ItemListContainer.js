import DB from './DB';
import Card from './Card';
import StyleItemList from '../Styles/StyleItemList.css';

const ItemListContainer = () =>{
    return(
        <div className='ItemListContainer '>
        {
            DB.map( item => {
                return(
                    <Card key={item.id} img={item.img} nombre ={item.nombre}/>
                   )
                })
        }
        </div>
    )
}

export default ItemListContainer;