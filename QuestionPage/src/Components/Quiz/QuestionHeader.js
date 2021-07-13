import React from 'react';


const questionheader = (props) => {

    return(
        <div className="QuestionHeader">
            <div className="column">
                <h3>{props.header}</h3>
            </div>
        </div>
    )

}

export default questionheader;