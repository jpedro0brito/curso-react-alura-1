import React, { Component, Fragment } from 'react';
import Table from './Table';
import Form from './Form';
import Header from './Header';
import PopUp from './PopUp';
import ApiService from './ApiService';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      autores: [],
    };

  }
  removeAutor = id => {
    const autoresAtualizando = this.state.autores.filter((autor) => autor.id !== id);
    ApiService.RemoveAutor(id)
      .then(res => {
        if(res.message === 'deleted'){
          this.setState({ autores: [...autoresAtualizando] });
          PopUp.exibeMensagem('error', 'Item removido');
        }
      })
      .catch(err => PopUp.exibeMensagem('error', 'Erro na comunicação com a API ao tentar remover o autor'));
  };

  escutadorDeSubmit = autor => {
    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => {
        if(res.message === 'success'){
          this.setState({ autores: [...this.state.autores, res.data] });
          PopUp.exibeMensagem('success', 'Item adicionando')
        }
      })
      .catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar criar o autor"));
  };

  componentDidMount(){
    ApiService.ListaAutores()
    .then(res => {
      if(res.message === 'success'){
        this.setState({ autores: [...this.state.autores, ...res.data] });
      }
    })
    .catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar listar os autores"));
  }

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
