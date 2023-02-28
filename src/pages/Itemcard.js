import { useCart } from 'react-use-cart';

const Itemcard = (props) => {

    const { addItem } = useCart();

    return (
        <div classNameName='col'>
            <div className="card" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                <div className="card-top text-center">
                    <span><img className="slider1" src={props.img} alt={props.title} /></span>
                    <h6 className="titulo">{props.title}</h6>
                    <h6 className="titulo"> ${props.price}</h6>
                    <button className='btn btn-outline-secondary' onClick={() => addItem(props.item)}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Itemcard;