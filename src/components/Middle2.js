import dibujo from '../img/pintura.jpg';
import carta from '../img/cartas.jpg';
import peluche from '../img/peluches.jpg';
import hilo from '../img/hilos.jpg';
import { Col, Container, Row, Tab} from 'react-bootstrap';
import { ProductCard } from '../components/ProductCard';
//import color2 from '../img/color-sharp2.png'
import React from 'react';
import TrackVisibility from 'react-on-screen';
import { Link } from 'react-router-dom';
function Middle2() {
    const productos = [
        {
            title: "Materiales de Dibujo",
            imgUrl: dibujo,
        },
        {
            title: "Tarjetas de Regalo",
            imgUrl: carta,
        },
        {
            title: "Peluches",
            imgUrl: peluche,
        },
        {
            title: "Tejer y coser",
            imgUrl: hilo,
        },
    ];
    return (
        <section className="middle2" id="middle2">
            <Container>
                <Row>
                    <Col size={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <Tab.Container id="middle2-tabs" defaultActiveKey="first">
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        productos.map((producto, index) => {
                                                            return (
                                                                <ProductCard
                                                                    key={index}
                                                                    {...producto}                                                                    
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Middle2;