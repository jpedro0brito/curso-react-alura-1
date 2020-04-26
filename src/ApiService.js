const hostName = 'http://localhost:8000/api/';

const ApiService = {
    ListaAutores: async () => {
        return fetch(`${hostName}autor`)
            .then(res => res.json());
    },
    CriaAutor: async (autor) => {
        return fetch(`${hostName}autor`, {method: 'POST', headers: {'content-type': 'application/json'}, body: autor})
            .then(res => res.json());
    },
    ListaNomes: async () => {
        return fetch(`${hostName}autor/nome`)
            .then(res => res.json());
    },
    ListaLivros: async () => {
        return fetch(`${hostName}autor/livro`)
            .then(res => res.json());  
    },
    RemoveAutor: async (id) => {
        return fetch(`${hostName}autor/${id}`, {method: 'DELETE', headers: {'content-type': 'application/json'}})
            .then(res => res.json());
    },
}

export default ApiService;