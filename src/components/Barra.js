import React, {useContext} from 'react'
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, IconButton, Badge, InputBase } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ContextoCarrito from '../context/Context';
export default function Barra(props) {
    const contexto = useContext(ContextoCarrito)
    return (
        <div>
            <AppBar position="sticky">
            <Toolbar>
            <Typography variant="h6">The Comic Store</Typography>
            <div style={{position: "absolute", right: 10}}>
                <InputBase style={{background: "white", paddingLeft: 10}} placeholder="Buscar..." value={props.busqueda} onChange={(e) => props.setBusqueda(e.target.value)}/>
                <IconButton  color="inherit">
                    <Badge badgeContent={contexto.carrito.length}  color="secondary">
                    <ShoppingCartIcon/>
                    </Badge>
                </IconButton>
            </div>
            </Toolbar>
        </AppBar>
        </div>
    )
}
