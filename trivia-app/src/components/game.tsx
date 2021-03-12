import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../css/game.css';
import React, { useEffect, useState } from 'react';
import databaseService from '../services/databaseService';
import triviaService from '../services/triviaService';
import QuestionComponent from './questionComponent';
import Question from '../questions/question';
import { TriviaAppState } from '../redux/store';


export default function Game() {
    // create state needed
    const [questions, setQuestions] = useState([] as Question[]);
    const score = useSelector((state: TriviaAppState) => state.score);
    const dispatch = useDispatch();

    // make an api call
    useEffect( () => {
        triviaService.getQuestions().then(result => {
            console.log(result);
            setQuestions(result);
        })
    }, []);

    return (
        <React.Fragment>
            <div>Score: {score}</div>
            {questions.map((question, index) => {
                return (
                    <QuestionComponent question={question}/>
                );
            })}
        </React.Fragment>
    );
}