import React from 'react';

function Jokes(props) {
    return (

        <div className="jokes">
            <h2 style={{
                display: !props.question && "none"
                }}
                >Question: {props.question}
                </h2>
            <h3 style={{
                color: !props.question && "#333333", 
                fontStyle: !props.question && "italic"}}>
                    Punch Line: {props.punchLine}
                    </h3>
            <hr/>
        </div>

    )
}

export default Jokes;