import { actionsTypes } from '../constants/counter';

/* 

AQUI SÃO DEFINIDAS OS ESTADOS GLOBAIS DA APLICAÇÃO ONDE EM TODOS OS NIVEIS
DA APLICAÇÃO SERA POSSIVEL CHAMAR / ALTERAR ESSES ESTADOS GLOBAIS

*/

const INITIAL_STATE = {
  counter: null
}

/* 
  REDUCER SÃO CONTROLADORES DE AÇÕES ONDE SE É RECEBIDA UMA AÇÃO
  E BASEADA NESSA AÇÃO É EXECUTADA DETERMINADA TAREFA;

*/

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.COUNTER_DECREMENT:
      console.log(action.type);

      return { ...state.counter, counter: state.counter - 1 }

    case actionsTypes.COUNTER_INCREMENT:
      console.log(action.type);
      return { ...state, counter: state.counter + 1 }

    default:
      console.log(action.type);
      return state
  }
}

export { reducers }