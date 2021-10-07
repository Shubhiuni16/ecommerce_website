import Card from 'react-bootstrap/Card'
import {Col,Row} from'react-bootstrap'
const CartProduct = (props) => {
    console.log("CART PRODUCT",props)
    return ( 
        <Card style={{ width: '100%' }}>
            <Row>
                <Col>
            <Card.Img className="img" variant="top" src={props.image} width="5rem" height="250px"/>
            </Col><Col>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                Price : $ {props.price}
                </Card.Text>
            </Card.Body>
            </Col>
            </Row>
        </Card>
     );
}
 
export default CartProduct;