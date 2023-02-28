import { Container } from 'react-bootstrap';
import middle1 from '../img/middle1A.jpg';
import middle2 from '../img/middle2.jpg';
import { Link } from 'react-scroll';
function Middle1() {
  return (
    <Container className="middle1" >
            <img href='#bolsos' src={middle1} id="middle1" className="rounded float-left" alt="Responsive image" />
            <h3 id="img1">Marca X | Materiales de escuela</h3>
            <img src={middle2} id="middle2" className="rounded float-right" alt="Responsive image"/>
            <h3 id="img2">Colaboración X | Detalles Especiales</h3>
    </Container>
  );
}
export default Middle1;