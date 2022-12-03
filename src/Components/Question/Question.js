import React, { useContext, useState } from 'react';
import { Card, CardBody, Toast, ToastBody, ToastHeader, CardTitle } from 'reactstrap'
import { RightAns, WrongAns } from './../Quiz/Quiz';

const Question = props => {
    const { question, index } = props;
    const [rightAnswer, setRightAnswer] = useContext(RightAns);
    const [wrongAnswer, setWrongAnswer] = useContext(WrongAns);
    const [toastStatus, setToastStatus] = useState(false);

    return (
        <div>

            <Card className="my-2 container border border-success">
                <CardBody>
                    <CardTitle tag="h5" className='text-start'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                Question {index + 1}: {question.question}
                            </div>
                            <div>
                                <button onClick={() => {
                                    setToastStatus(!toastStatus)
                                }}>{toastStatus ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}</button>
                                <Toast isOpen={toastStatus} className="toast-container position-fixed bottom-0 end-0 bg-primary text-white">
                                    <ToastHeader >
                                        Correction answer
                                    </ToastHeader>
                                    <ToastBody>
                                        {question.correctAnswer}
                                    </ToastBody>
                                </Toast>
                            </div>
                        </div>

                        <ul>
                            <div className="form-check">
                                {question.options.map((option, index) => {
                                    return (<div key={index} className='text-start'>
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => {
                                            if (question.correctAnswer === option) {
                                                setRightAnswer(rightAnswer + 1);
                                                alert("Correct Answer")
                                            }
                                            else {
                                                setWrongAnswer(wrongAnswer + 1);
                                                alert("wrong Answer")
                                            }
                                        }} />

                                        <label className="form-check-label">
                                            {option}
                                        </label>

                                    </div>)
                                })}

                            </div>
                        </ul>
                    </CardTitle>

                </CardBody>
            </Card>
        </div >
    );
};

export default Question;