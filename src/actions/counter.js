import { actionsTypes } from '../constants/counter';


/* 

ACTION SÃO OS NOMES DA AÇÃO QUE SAO DISPARADAS DOS COMPONENTES;
DENTRO DE REDUCERS É ONDE ACONTECE DETERMINADA COISA QUANDO SE RECEBE 
UMA ACTION EX:
QUANDO RECEBER A ACTION decrement ELE IRA DIMINUIR 1 DO VALOR DO ESTADO INICIAL
DA VARIAVEL counter QUE ESTA DEFINIDA EM REDUCERS;

*/

const actions = {

  decrement: () => ({
    type: actionsTypes.COUNTER_DECREMENT
  }),

  increment: () => ({
    type: actionsTypes.COUNTER_INCREMENT

  })
}

export { actions }