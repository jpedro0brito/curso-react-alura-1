const hostName = 'http://localhost:8000/api/';

const ApiService = {
    ListaAutores: async () => {
        return fetch(`${hostName}autor`)
            .then(res =>  TrataErros(res));
    },
    CriaAutor: async (autor) => {
        return fetch(`${hostName}autor`, {method: 'POST', headers: {'content-type': 'application/json'}, body: autor})
            .then(res =>  TrataErros(res));
    },
    ListaNomes: async () => {
        return fetch(`${hostName}autor/nome`)
            .then(res =>  TrataErros(res));
    },
    ListaLivros: async () => {
        return fetch(`${hostName}autor/livro`)
            .then(res =>  TrataErros(res));  
    },
    RemoveAutor: async (id) => {
        return fetch(`${hostName}autor/${id}`, {method: 'DELETE', headers: {'content-type': 'application/json'}})
            .then(res => TrataErros(res));
    },
}

const TrataErros = res =>{
    if(!res.ok){
        throw Error(res.responseText);
    }
    return res.json();
}

export default ApiService;