import { useRouteError } from "react-router-dom";
import Footer from "../components/Footer";
import NuevaNav from "../components/NuevaNav";
import errorimg from '../img/error.webp'

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <> 
            <NuevaNav />
            <section>
                <div className='container'>
                    <h1 className='display-5 text-center mt-4 text-danger'>Página no encontrada</h1>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={errorimg} alt="Error" className="img-fluid w-75" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
