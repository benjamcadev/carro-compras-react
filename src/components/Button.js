import { Component } from 'react';

const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
}

class Button extends Component{
    render() {

        return (
            <button style={styles.button} {...this.props}/>   // Aca recibe la funcion onClick() que se esta pasando desde Producto.js
        )
    }
}

export default Button