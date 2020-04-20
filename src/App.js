import React, { Component, Fragment } from 'react';
import Table from './Table';
import Form from './Form';
import Header from './Header';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {

  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      },
      {
        nome: 'teste',
        livro: 'teste',
        preco: '100'
      }
    ],
  };

  removeAutor = index => {
    const { autores } = this.state;

    this.setState(
      {
        autores: autores.filter((autor, posAtual) => index !== posAtual),
      }
    );
  };

  escutadorDeSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor] });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className='container'>
          <h1>Casa do codigo</h1>
          <Table autores={this.state.autores} removeAutor={this.removeAutor} />
          <Form escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
