import React, { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeUsername } from '../redux/actions';
import '../css/login.css';

export default function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    
    function onNameInputChange(event: SyntheticEvent) {
        let element: HTMLInputElement = (event.target as HTMLInputElement);
        let inputValue: string = element.value;
        // Update the redux store with the form input
        dispatch(changeUsername(inputValue));
    }

    function goToGame() {
        // navigate to game component
        history.push('/game');
    }

    return (
        <div>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" onChange={onNameInputChange}/>
                </label>
                <button onClick={goToGame}>
                    Enter
                </button>
            </form>
        </div>
    );
}