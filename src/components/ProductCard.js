import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export const ProductCard = ({ title, description, imgUrl}) => {
    return (
        <Col sm={3} md={3}>
            <div className="proj-imgbx">
                <Link to="/ffff">
                <img className="imagenBx" src={imgUrl} alt="ffff"/>
                </Link>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}