import { Component } from 'react';

const styles = {
    titulo: {
        marginBottom: '30px',
    }
}

class Title extends Component {
    render() {
        return (
            <h1 style={styles.title}>Tienda</h1>
        )
    }
}

export default Title