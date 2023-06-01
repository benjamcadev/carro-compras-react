import logo from './logo.svg';
import Productos from './components/Productos'
import { Component } from 'react';

class App extends Component {
  state = {
    productos: [
      { name: 'tomate', price: 1500, img: '/productos/tomate.jpg'},
      { name: 'Arberjas', price: 2500, img: '/productos/arberjas.jpg'},
      { name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg'},
    ]
  }
  render() {
    return (
      <div>
        <Productos 
        agregarAlCarro={() => console.log('adad')}
        productos={this.state.productos}
        />
        <p>Hola mundo</p>
      </div>
    )
  }
}

export default App;
