import React, {useContext, useState} from 'react'
import {Card, Button} from 'react-bootstrap'
import ContextoCarrito from '../context/Context';
export default function Producto(props) {
    const {nombre, descripcion, stock, precio, imagen, descuento, nuevo} = props.producto;
    const [cantidad, setCantidad] = useState(1)
    const {carrito, setCarrito} = useContext(ContextoCarrito)
    const precioConDescuento = (precio*(1-descuento)).toFixed(2)
    return (
        <div>
            <Card>
                <Card.Body>
                    <div style={{position: "absolute", top: 30, color: "white", zIndex: 10}}>
                    {nuevo ? <div style={{backgroundColor: "green", padding: 10, paddingTop: 5, paddingBottom: 5, color: "white", margin: 10, display: "inline"}}>{' NUEVO '}</div> : null}
                    {descuento > 0 ? <div style={{backgroundColor: "red", padding: 10, paddingTop: 5, paddingBottom: 5, color: "white", margin: 10, display: "inline"}}>{` -${descuento*100}% `}</div> : null}
                    </div>
                    <Card.Body className="fit">
                        <Card.Img className="zoom" src={imagen}></Card.Img>
                    </Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Subtitle>{descuento > 0 ? <div className="discount">{` ${precio}€ `}</div> : null}{precioConDescuento}€</Card.Subtitle>
                    <p>{descripcion}</p>
                    <hr/>
                    <div class="form-group">
                        <label for="cantidad">Cantidad</label>
                        <input value={cantidad} onChange={(e) => setCantidad(parseInt(e.target.value))} min={1} max={stock} disabled={stock === 0} type="number" class="form-control" id="cantidad" placeholder="Cantidad"/>
                    </div>    
                    <Button disabled={stock === 0 || cantidad === 0 || !cantidad} onClick={() => {
                        setCarrito(carrito.concat({nombre, precio, cantidad}))
                    }}>Añadir al carrito</Button>
                    <p>Stock: <div style={{color: stock === 0 ? "red" : "black", display: "inline"}}>{stock}</div></p>
                </Card.Body>
            </Card>
        </div>
    )
}
