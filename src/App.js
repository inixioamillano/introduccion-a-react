import React, {useState, useEffect} from 'react';
import './App.css';
import Producto from './components/Producto';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextoCarrito from './context/Context';
import { getProducts } from './server/Server';
import Barra from './components/Barra';

function App() {

  const [catalogo, setCatalogo] = useState();
  const [cargando, setCargando] = useState(true);
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setCatalogo(getProducts());
      setCargando(false);
    }, 1500)
  }, [])

  if (cargando){
    return(<div className="App">
      <Barra/>
      Cargando...
    </div>)
  }

  return (
    <div className="App">
      <ContextoCarrito.Provider value={{carrito, setCarrito}}>
        <Barra busqueda={busqueda} setBusqueda={(busqueda) => setBusqueda(busqueda)}/>
        <Container>
          <Row md={4} sm={12}>
            {catalogo.filter(p => p.nombre.toLowerCase().includes(busqueda.toLowerCase())).map((producto) => {
              return <div key={producto.nombre}>
              <Col style={{paddingTop: 10}}>
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
