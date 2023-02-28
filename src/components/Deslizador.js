import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DataCarrusel } from "./DataCarrusel";
import { Link } from 'react-router-dom';
function Deslizador() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 5,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="App2">
      <h1 id='nove'>Novedades</h1>
      <h2 id='ver'>VER TODO</h2>
      <Slider className='slidero' {...settings}>
        {DataCarrusel.map(item => (
          <div className="card">
            <div className="card-top">
              <Link to="/products">
                <span>{item.imgpath}</span>
                <h2 className='titulo'>{item.title}</h2>
                <h2 className='titulo'>{item.price}</h2>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Deslizador;