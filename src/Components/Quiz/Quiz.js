import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import NavBar from './../NavBar/NavBar';
export const RightAns = createContext(0)
export const WrongAns = createContext(0);
const Quiz = () => {
    const quizData = useLoaderData();
    const [rightAnswer, setRightAnswer] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);

    return (
        <div>
            <NavBar></NavBar>
            <RightAns.Provider value={[rightAnswer, setRightAnswer]}>
                <WrongAns.Provider value={[wrongAnswer, setWrongAnswer]}>
                    <div className='mt-5'>
                        <h1>Quiz of {quizData.data.name}</h1>
                        <p className='text-success'>Right Answer: {rightAnswer} </p>
                        <p className='text-danger'>wrong Answer: {wrongAnswer} </p>
                        {quizData.data.questions.map((question, index) => {
                            return (<Question question={question} index={index} key={question.id}></Question>)
                        })}

                    </div>
                </WrongAns.Provider>
            </RightAns.Provider>

        </div>

    );
};

export default Quiz;