
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
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    //Validar si en el carro existe ya el mismo producto que se esta agregando
    const { carro } = this.state
    if (carro.find(x => x.name === producto.name)) {
      // Si se encuentra debe aumentar la cantidad
      const newCarro = carro.map(x => x.name === producto.name ? ({...x, cantidad: x.cantidad + 1}) : x)
      return this.setState({ carro: newCarro })
    }

    return this.setState({
      carro: this.state.carro.concat({...producto,cantidad: 1,})
    })
  }

  mostrarCarro = () => {
    if (!this.state.carro.length) { // Si no hay elementos en el carro que no lo muestre al pinchar el carro
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  render() {
    const { esCarroVisible } = this.state

    return (
      <div>
        <Navbar 
          carro={this.state.carro} 
          esCarroVisible={esCarroVisible} 
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos 
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
          <p>Hola mundo</p>
        </Layout>
       
      </div>
    )
  }
}

export default App;
