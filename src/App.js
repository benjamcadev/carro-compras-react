
import Productos from './components/Productos'
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
