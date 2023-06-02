import { Component } from 'react';

const styles = {
    layout: {
        backgroundColor: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        width: '80%',
    }
}
class Layout extends Component {
    render() {
        return (
            // div que se encargara solo de centar contenido
             <div style={styles.layout}>  
                {/* Div que se encargara de dar el ancho de la pantalla y alinear el contenido hacia la izquiera y no todo centrado */}
                <div style={styles.container}> 
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout