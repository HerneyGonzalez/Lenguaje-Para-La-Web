import Carousel from 'react-bootstrap/Carousel';
import crayon from '../img/crayonesA.jpg';
import bag1 from '../img/bag.jpg';
import notebook from '../img/notebook.jpg';
import { useState, useEffect } from "react"
function Carrusel() {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50 ){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrolled])
    return (
    <Carousel className="carrusel" variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crayon}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bag1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={notebook}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    );
  }
  export default Carrusel;