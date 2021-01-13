import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { actions } from '../actions/counter';

import { selectors } from '../selector/counter';

const CounterHooks = () => {



  /* PEGA O state COM O NOME DO NOSSO REDUCER counterRecuders 
  E O QUE QUEREMOS DO REDUCER NO CASO O counter
  */

  // const counter = useSelector(state => state.counterReducers.counter);

  // outro modelo passando a responsabilidade de encontrar as coisas do store pra um SELECTOR
  /* no UseSlector é feito igual no mapStateToProps */
  const counter = useSelector(selectors.getCounter);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(actions.increment());
  const handleDecrement = () => dispatch(actions.decrement());

  return (
    <>
      <h1>Counter: {counter}</h1>
      <ul>
        <li><button onClick={handleIncrement}>Increment</button></li>
        <li><button onClick={handleDecrement}>Decrement</button></li>
      </ul>
    </>
  )
}




export default CounterHooks;