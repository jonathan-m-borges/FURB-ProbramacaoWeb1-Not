import React from 'react';
import ReactDOM from 'react-dom';

class Teste extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: 'Jonathan',
            contador: 1
        }
    }

    incremetarContador = () => {
        this.setState({
            contador: this.state.contador + 1
        });
    }

    render() {
        return (
            <>
                <h1>Nome: {this.state.nome}</h1>
                <h1>Contador: {this.state.contador}</h1>
                <button onClick={this.incremetarContador}>Incrementar</button>
            </>
        )
    }
}

ReactDOM.render(<Teste />, document.getElementById('root'));