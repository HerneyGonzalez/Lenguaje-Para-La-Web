import NuevaNav from "../components/NuevaNav"
import Footer from "../components/Footer"
import data from './data';
import Itemcard from './Itemcard';

const Products = () => {
    return (
        <>
            <NuevaNav />
            <section className='container my-5 py-5'>
                <h2 className='display-5 title text-center mb-5 text-secondary'>Productos</h2>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center'>
                    {data.productData.map((item, index) => {
                        return (
                            <Itemcard
                                img={item.img}
                                title={item.title}
                                price={item.price}
                                item={item}
                                key={index}
                            />
                        )
                    })}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Products