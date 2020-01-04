import {createStore,applyMiddleware} from 'redux';
import commonReducer from './reducers/commonReducer'
let initialState={};
export default createStore(commonReducer,initialState);