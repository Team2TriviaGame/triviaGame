
export enum TriviaAppActions {
    ChangeUsername = 'CHANGE_USERNAME',
    ChangeScore = 'CHANGE_SCORE'
}

export interface TriviaAppAction {
    type: TriviaAppActions;
    payload: string | number;
}

export function changeUsername(username: string): TriviaAppAction {
    return {
        type: TriviaAppActions.ChangeUsername,
        payload: username
    };
}

export function changeScore(score: number): TriviaAppAction {
    return {
        type: TriviaAppActions.ChangeScore,
        payload: score
    };
}