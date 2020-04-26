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
    const { autores } = this.state;
    this.setState({
        autores: autores.filter((autor) => autor.id !== id),});
    ApiService.RemoveAutor(id)
      .then(res => PopUp.exibeMensagem('error', 'Item removido'));
  };

  escutadorDeSubmit = autor => {
    ApiService.CriaAutor(JSON.stringify(autor))
      .then(resAutor => {
        this.setState({ autores: [...this.state.autores, resAutor.data] });
        PopUp.exibeMensagem('success', 'Item adicionando')
      })
  };

  componentDidMount(){
    ApiService.ListaAutores()
    .then(res => this.setState({ autores: [...this.state.autores, ...res.data] }));
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
