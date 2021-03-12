import React, { useState, useEffect, SyntheticEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Question from '../questions/question';
import { TriviaAppState } from '../redux/store';
import { changeScore } from '../redux/actions';

interface QuestionProps {
    question: Question;
}

export default function QuestionComponent(props: QuestionProps) {

    // Question the string not the object
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState([] as string[]);
    // Index of answers array that is the correct answer
    const [correct, setCorrect] = useState(0);
    const [answerSelected, setAnswerSelected] = useState(false);
    const alert = useSelector((state: TriviaAppState) => state.alert);
    const score = useSelector((state: TriviaAppState) => state.score);
    const dispatch = useDispatch();
    
    useEffect(() => {
        // Populate question
        setQuestion(props.question.question);
        // Populate the answers
        let answerList: string[] = [];
        answerList.push(props.question.correct_answer);
        for(let answer of props.question.incorrect_answers) {
            answerList.push(answer);
        }
        // randomize order of answers
        console.log('before shuffle, ', answerList);
        shuffleArray(answerList);

        // get correct answer
        setCorrect(answerList.findIndex((elem) => { return(elem === props.question.correct_answer); }));
        setAnswers(answerList);
    }, []);

    function shuffleArray(array: string[]) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        console.log('after shuffle, ', array);
    }

    function onRadioSelect(event: SyntheticEvent) {
        setAnswerSelected(true);
        let element: HTMLInputElement = (event.target as HTMLInputElement);
        let value: number = Number(element.value);
        console.log('selected answer '+value);
        let isCorrect: boolean = (value === correct);
        if (isCorrect) {
            // change score
            dispatch(changeScore(score + 1));
            // set alert

        } else {
            // set alert

        }
    }

    // create alertUI
    let alertUI;
    if (alert === 'correct') {
        alertUI = <div>Right Answer!</div>;
    } else if (alert === 'incorrect') {
        alertUI = <div>Wrong Answer, sorry!</div>;
    } else {
        alertUI = <div></div>;
    }

    return (
        <div>
            <h3>{question}</h3>
            {answers.map((answer, index) => {
                return (
                    <div>
                        <input type='radio' name={question} value={index} onChange={onRadioSelect} disabled={answerSelected}/>
                        {answer}<br/>
                    </div>
                );
            })}
            {alertUI}
        </div>
    );
}