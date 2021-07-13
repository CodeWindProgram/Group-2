import React, { Component } from 'react'
import './Question.css';
import QuestionHeader from './QuestionHeader';
import { Divider,Segment } from 'semantic-ui-react';
import QuestionForm from './QuestionForm';
import QuestionButtons from './QuestionButtons';
import {Col} from 'react-bootstrap';
import Results from './QuestionResults'

class question extends Component {
    
   state = {
       index: 0,
       isActive: true,
       windowWidth: null,
       answers: [],

       quiz: {
           title: "Quantitative Aptitude Test",
           questions: [
               {
                   question: "22, 21, 23, 22, 24, 23, ... What number should come next?",
                   questionPossibilities: [
                       "22", "24", "25", "26"
                   ],
                   answer: 2
               },
               {
                   question: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is?",
                   questionPossibilities: [
                       "15", "16", "18","25"
                   ],
                   answer: 1
               },
               {
                   question: "From a group of 7 men and 6 women, five persons are to be selected to form a committee so that at least 3 men are there on the committee. In how many ways can it be done?",
                   questionPossibilities: [
                       "564", "645", "735", "756"
                   ],
                   answer: 3
               },
               {
                   question: "In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?",
                   questionPossibilities: [
                       "1/3", "3/4", "7/19", "8/21"
                   ],
                   answer:0 
               },
               {
                   question: "Two pipes A and B can fill a cistern in 37 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:",
                   questionPossibilities: [
                       "5 min", "9 min", "10 min", "15 min"
                   ],
                   answer: 1 
               },
               {
                   question: "Two tailors X and Y are paid a total of Rs. 550 per week by their employer. If X is paid 120 percent of the sum paid to Y, how much is Y paid per week?",
                   questionPossibilities: [
                       "Rs. 200", "Rs. 250", "Rs. 300", "None of these"
                   ],
                   answer: 1
               },
               {
                   question: "There is 60% increase in an amount in 6 years at simple interest. What will be the compound interest of Rs. 12,000 after 3 years at the same rate?",
                   questionPossibilities: [
                       "Rs. 2160", "Rs. 3120", "Rs. 3972", "Rs. 6240"
                   ],
                   answer: 2
               },
               {
                   question: "In what ratio must a grocer mix two varieties of pulses costing Rs. 15 and Rs. 20 per kg respectively so as to get a mixture worth Rs. 16.50 kg?",
                   questionPossibilities: [
                       "3:7", "5:7", "7:3", "7:5"
                   ],
                   answer: 2
               },
               {
                   question: "A motorboat, whose speed in 15 km/hr in still water goes 30 km downstream and comes back in a total of 4 hours 30 minutes. The speed of the stream (in km/hr) is:",
                   questionPossibilities: [
                       "4", "5", "6", "10"
                   ],
                   answer: 1
               },
               {
                   question: "A 270 metres long train running at the speed of 120 kmph crosses another train running in opposite direction at the speed of 80 kmph in 9 seconds. What is the length of the other train?",
                   questionPossibilities: [
                       "230 m", "240 m", "260 m", "320 m"
                   ],
                   answer: 0
               },
           ]

       }
   }


    endQuiz = () => {
       this.setState({isActive: false})
        console.log("ENDER QUIZ")
    }

   incrementIndex = () => {
       this.setState({index: this.state.index + 1})
       console.log("increment")
   }


    decrementIndex = () => {
        this.setState({index: this.state.index - 1})
        console.log("decrement")
    }

    changeAnswers = (value,index) => {
       let tempArray = [...this.state.answers];
       tempArray[index] = value;
       this.setState({answers: tempArray});
    }

    wrongAnswers = () => {
        const wrongAnswers = this.state.quiz.questions.filter((item,index) => {
           return item.answer !== this.state.answers[index] || item.answer === null;
       })
        return wrongAnswers;
    }




   

    render() {
        return (
            <div className="Question">
                <Col md={10} mdOffset={1} xs={12} >
                    <Segment>
                        {
                            this.state.isActive ?
                            <div>
                                <QuestionHeader header={this.state.quiz.title}/>
                                < Divider />
                                < QuestionForm questions={this.state.quiz.questions}
                                index={this.state.index}
                                answers={this.state.answers}
                                changeAnswers={this.changeAnswers}
                                />
                                <Divider/>
                                <QuestionButtons index={this.state.index}
                                incrementIndex={this.incrementIndex}
                                decrementIndex={this.decrementIndex}
                                windowWidth={this.state.windowWidth}
                                questions={this.state.quiz.questions}
                                endQuiz={this.endQuiz}
                                />
                            </div> : null
                        }

                        {
                            this.state.isActive === false ?
                                <div>
                                    <Results wrongAnswers={this.wrongAnswers}
                                             questions={this.state.quiz.questions}
                                    />
                                </div> : null
                        }
                    </Segment>
                </Col>

            </div>
        )
    }
}

export default question;
