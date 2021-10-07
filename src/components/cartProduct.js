import Card from 'react-bootstrap/Card'
import {Col,Row} from'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
const CartProduct = (props) => {
    console.log("CART PRODUCT",props);
    const deleteFromCart=(id)=>{
        console.log("ID TO DELETE",id)
        fetch(`http://localhost:8000/cart/${id}`,{method:'DELETE'})
    }
    return ( 
        <Card style={{ width: '100%',display:"flex",border:"solid 2px #8B2D2D",backgroundColor:"#e7dddd",marginTop:"1%"}}>
            <Row>
                <Col>
            <Card.Img className="img" variant="top" src={props.image} width="5rem" height="200px"/>
            </Col><Col>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                Price : $ {props.price}
                </Card.Text>
            </Card.Body>
            <Link to={`/Product/${props.pId}`}><Button variant="primary" style={{backgroundColor:"#8B2D2D",marginTop:"9%",marginLeft:"15%",marginBottom:"1%"}}>VIEW PRODUCT</Button></Link>
            <Button variant="primary" style={{backgroundColor:"#8B2D2D",marginTop:"9%",marginLeft:"15%",marginBottom:"1%"}} onClick={()=>deleteFromCart(props.id)}>REMOVE</Button>
            </Col>
            </Row>
        </Card>
     );
}
 
export default CartProduct;