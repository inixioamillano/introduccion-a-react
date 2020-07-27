import React, {useState, useContext} from 'react'
import {Card, Button} from 'react-bootstrap'
import ContextoCarrito from '../context/Context';
export default function Producto(props) {
    const {nombre, descripcion, stock, precio} = props.producto;
    const [cantidad, setCantidad] = useState(0)
    const {carrito, setCarrito} = useContext(ContextoCarrito)
    console.log("Carrito: ", carrito)
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Subtitle><div style={{color: stock === 0 ? "red" : "black"}}>Stock: {stock}</div> · {precio}€</Card.Subtitle>
                    <p>{descripcion}</p>
                    <hr/>
                    <div className="form-group">
                        <label htmlFor="cantidad">Cantidad</label>
                        <input value={cantidad} onChange={(e) => setCantidad(parseInt(e.target.value))} min={0} disabled={stock === 0} type="number" className="form-control" id="cantidad" placeholder="Cantidad"/>
                    </div>
                    <Button disabled={stock === 0 || cantidad === 0 || !cantidad} onClick={() => {
                        setCarrito(carrito.concat({nombre, precio, cantidad}))
                        setCantidad(0)
                    }}>Añadir al carrito</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
