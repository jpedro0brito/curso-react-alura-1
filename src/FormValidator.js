import validator from 'validator';

export default class FormValidator{
    constructor(validacoes){
        this.validacoes = validacoes;
    }

    validar(state){
        let validacao = this.validor();

        this.validacoes.forEach(regra => {
            const campoValidar = state[regra.campoValidar.toString()];
            const args = regra.args || [];
            const metodoValidar = typeof regra.metodo === 'string' 
                ? validator[regra.metodo]
                : regra.metodo;
            
            if(metodoValidar(campoValidar, args, state) !== regra.validoQuando){
                validacao[regra.campoValidar] = {
                    isInvalid: true,
                    message: regra.mensagem
                }
                validacao.isValid = false;
            }
        });

        return validacao;
    }

    validor(){
        const validacao = {};
        
        this.validacoes.map(regra => (
            validacao[regra.campoValidar] = {isInvalid: false, message: ''}
        ));

        return {isValid: true, ...validacao};
    }
}