import React, { Component, Fragment } from 'react';
import Tabela from '../../Components/Table';
import Form from '../../Components/Form';
import Header from '../../Components/Header';
import PopUp from '../../utils/PopUp';
import ApiService from '../../utils/ApiService';

class Home extends Component {
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
    const campos = [
        { titulo: 'Autores', dado: 'nome' },
        { titulo: 'Livros', dado: 'livro' },
        { titulo: 'Preços', dado: 'preco' }
    ]

    return (
        <Fragment>
            <Header />
            <div className='container mb-10'>
                <h1>Casa do Código</h1>
                <Tabela
                    campos={campos}
                    dados={this.state.autores}
                    removeDados={this.removeAutor}
                />
                <Form escutadorDeSubmit={this.escutadorDeSubmit} />
            </div>
        </Fragment>
    )
}
}

export default Home;
