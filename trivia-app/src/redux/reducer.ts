import { TriviaAppState } from './store';
import { TriviaAppAction, TriviaAppActions } from './actions';

export const initialState: TriviaAppState = {
    username: '',
    score: 0,
    alert: ''
}

const reducer = (state: TriviaAppState = initialState, action: TriviaAppAction): TriviaAppState => {
    
    const newState = {...state};

    switch (action.type) {
        case TriviaAppActions.ChangeUsername:
            newState.username = action.payload as string;
            return newState;
        case TriviaAppActions.ChangeScore:
            newState.score = action.payload as number;
            return newState;
        case TriviaAppActions.ChangeAlert:
            newState.alert = action.payload as string;
            return newState;
        default: 
            return state;
    }
}

export default reducer;