import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    const data=props
    return ( 
        <Card style={{ width: '18rem',display:"flex",justifyContent:"center",margin:"4px",border:"solid 2px #8B2D2D"}} key={props.id}>
            <Card.Img variant="top" src={props.img} width="30%" height="150px"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                Price: ${props.price}
                </Card.Text>
            </Card.Body>
            <Link to={`/Product/${props.id}`}><Button variant="primary" style={{backgroundColor:"#8B2D2D",marginTop:"auto",marginLeft:"25%",marginBottom:"1%"}}>VIEW PRODUCT</Button></Link>
        </Card>
     );
}
 
export default ProductCard;