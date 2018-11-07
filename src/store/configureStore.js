import { createStore } from 'redux';
import counterReducer from '../reducers/counterReducer'


export default ()=>{
    const store = createStore(counterReducer);
    return store;
}

