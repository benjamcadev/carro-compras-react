
import Productos from './components/Productos'
import Layout from './components/Layout';  // este componente se va encargar de centar el contenido
import Title from './components/Title';
import Navbar from './components/Navbar';
import { Component } from 'react';


class App extends Component {
  state = {
    productos: [
      { name: 'tomate', price: 1500, img: '/productos/tomate.png'},
      { name: 'Arberjas', price: 2500, img: '/productos/arberjas.png'},
      { name: 'Lechuga', price: 500, img: '/productos/lechuga.png'},
    ]
  }
  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Productos 
          agregarAlCarro={() => console.log('adad')}
          productos={this.state.productos}
          />
          <p>Hola mundo</p>
        </Layout>
       
      </div>
    )
  }
}

export default App;
