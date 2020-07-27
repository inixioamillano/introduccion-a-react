import React from 'react';

const ContextoCarrito = React.createContext({
    carrito: [],
    setCarrito: () => {}
})

export default ContextoCarrito;