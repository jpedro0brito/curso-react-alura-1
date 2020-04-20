import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: ''
        }

        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState(
            {
                [name]: value
            }
        );
    }

    submitForm = () => {
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
    }

    render() {
        const { nome, livro, preco } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <input
                            className='validate'
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput}
                        />
                        <label
                            htmlFor="nome"
                        >Nome
                        </label>
                    </div>
                    <div className="input-field col s4">
                        <label
                            htmlFor="livro"
                        >Livro
                        </label>
                        <input
                            className='validate'
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                    <div className="input-field col s4">
                        <label
                            htmlFor="preco"
                        >Preço
                        </label>
                        <input
                            className='validate'
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                </div>
                <button
                    className='waves-effect waves-light indigo lighten-2 btn'
                    type="button"
                    onClick={this.submitForm}
                > Salvar
                </button>
            </form>
        );
    }
}

export default Form;