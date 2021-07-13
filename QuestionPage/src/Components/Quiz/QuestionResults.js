import React from 'react';


const questionresults = (props) => {



    let quiz = props.questions;
    let wrongAnswers = props.wrongAnswers();
    let rightAnswers = quiz.length-wrongAnswers.length;
    let percentage = (rightAnswers/quiz.length)*100;


    return(
        <div className="QuestionResults">
            <div className="column">
               <div>
                    <p>Results: {rightAnswers}/{quiz.length}</p>
                    <br></br>
                    <h1>{percentage}%</h1>
               </div>
            </div>
        </div>
    )

}

export default questionresults;