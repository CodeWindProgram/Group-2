import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'

class questionform extends Component {


    render() {


        let questions = this.props.questions[this.props.index].questionPossibilities.map((value,index) => {
            return(
                <Form.Field key={index}>
                    <Radio
                        label={value}
                        name='radioGroup'
                        value={index}
                        checked={index === this.props.answers[this.props.index]}
                        onChange={() => this.props.changeAnswers(index,this.props.index)}
                    />
                </Form.Field>
            )
        })

        return (
            <div className={"QuestionForm"}>
                <Form>
                    <Form.Field>
                         <h4>{this.props.questions[this.props.index].question}</h4>
                    </Form.Field>
                    {questions}

                </Form>
            </div>
        )
    }
}

export default questionform;