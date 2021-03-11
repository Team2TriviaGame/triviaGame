import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../css/game.css';
import React from 'react';

export default function Game() {

    //function for what happens when a user chooses an answer
    function chooseAnswer() {

    }
        // compare to see if it was correct
        // update score
        // change question and answers

    return (
        <React.Fragment>
            <div>
                <p>Question?</p>
            </div>
            <div>
                <button onClick={chooseAnswer}>Answer1</button>
                <button onClick={chooseAnswer}>Answer2</button>
                <button onClick={chooseAnswer}>Answer3</button>
                <button onClick={chooseAnswer}>Answer4</button>
            </div>
        </React.Fragment>
    );
}