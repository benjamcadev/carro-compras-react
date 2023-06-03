import { Component } from 'react';
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';

const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20,
    }
}

class Carro extends Component {
    render(){
        const { carro, esCarroVisible, mostrarCarro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0) // Con reduce sacamos todos los vlaores de la prop cantidad y los vamos sumando en acc

        return(
            <div>
                <span style={styles.bubble}>
                    {/* Render condicional: si cantidad es 0 no se renderiza */}
                    {cantidad !== 0 ?  <BubbleAlert value={cantidad} /> : null}
                   
                </span>
                <button 
                    style={styles.carro} 
                    onClick={mostrarCarro}>
                    Carro
                </button>
                {esCarroVisible ?  <DetallesCarro carro={carro}/> : null}
               
            </div>
        )
    }
}
export default Carro