import React, {useState, useEffect} from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, IconButton, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Producto from './components/Producto';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextoCarrito from './context/Context';

function App() {
  const [catalogo, setCatalogo] = useState();
  const [cargando, setCargando] = useState(true);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    //Aquí se obtendrían los productos del servidor
    setTimeout(() => {
      setCatalogo([{
        nombre: "Pack 6 uds Papel higiénico",
        descripcion: "Llega el fin del mundo, ¡no te quedes sin papel higiénico!",
        precio: 625,
        stock: 0
      },{
        nombre: "Mascarilla quirúrgica",
        descripcion: "Ponte la mascarilla, por favor",
        precio: 0.96,
        stock: 125
      },{
        nombre: "Funda de móvil",
        descripcion: "Píllate una, que luego vienen los sustos",
        precio: 1.23,
        stock: 4
      }]);
      setCargando(false);
    }, 1500)
  }, [])

  const Barra = () => {
    return <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Amazonas</Typography>
          <IconButton style={{position: "absolute", right: 10}} color="inherit">
            <Badge badgeContent={carrito.length}  color="secondary">
              <ShoppingCartIcon/>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
  }

  if (cargando){
    return(<div className="App">
      <Barra/>
      Cargando...
    </div>)
  }

  return (
    <div className="App">
      <ContextoCarrito.Provider value={{carrito, setCarrito}}>
        <Barra/>
        <Container>
          <Row md={3}>
            {catalogo.map((producto) => {
              return <div key={producto.nombre}>
              <Col>
                <Producto producto={producto}/>
              </Col>
            </div>
            })}
          </Row>
        </Container>
      </ContextoCarrito.Provider>
    </div>
  );
}

export default App;
