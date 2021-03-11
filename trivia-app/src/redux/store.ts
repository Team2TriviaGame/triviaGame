import { createStore, Store } from 'redux';
import { TriviaAppAction } from './actions';
import reducer from './reducer';

export interface TriviaAppState {
    username: string;
    score: number;
}

const store: Store<TriviaAppState, TriviaAppAction> = createStore(reducer);

export default store;