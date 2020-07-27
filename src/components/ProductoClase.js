import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'
export default class ProductoClase extends Component {

    constructor(props){
        super(props);
        this.state = {
            cantidad: 0
        }
    }

    render() {
        const {nombre, descripcion, stock, precio} = this.props.producto;
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Subtitle><div style={{color: stock === 0 ? "red" : "black"}}>Stock: {stock}</div> · {precio}€</Card.Subtitle>
                        <p>{descripcion}</p>
                        <hr/>
                        <div class="form-group">
                            <label for="cantidad">Cantidad</label>
                            <input value={this.state.cantidad} onChange={(e) => this.setState({cantidad: parseInt(e.target.value)})} min={0} disabled={stock === 0} type="number" class="form-control" id="cantidad" placeholder="Cantidad"/>
                        </div>
                        <Button disabled={stock === 0 || this.state.cantidad === 0 || !this.state.cantidad} onClick={() => {
                            console.log("Añadido producto al carrito")
                        }}>Añadir al carrito</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
