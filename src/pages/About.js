import Footer from "../components/Footer"
import NuevaNav from "../components/NuevaNav"
import papeleria from '../img/papeleria.jpg'

const About = () => {
    return (
        <>
            <NuevaNav />
            <section className='about'>
                <div className='container'>
                    <h1 className='display-5 text-center mt-4 text-secondary'>Sobre nosotros</h1>
                    <div className='row align-items-center flex-wrap-reverse'>
                        <div className='col-md-6'>
                            <h3>Somos una empresa que busca mejorar la calidad de vida de nuestros clientes, ofreciendoles productos de muy buena calidad y a los mejores precios.</h3>
                        </div>
                        <div className='col-md-6'>
                            <img src={papeleria} className='w-100 mt-2' alt='Papeleria' />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About