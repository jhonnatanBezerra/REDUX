import { createStore } from 'redux';
import { reducers } from './reducers';

//store recebe reducers como parametro
const store = createStore(reducers);

export { store }