import React from 'react';

function Jokes(props) {
    return (

        <div className="jokes">
            <p>Question: {props.joke.question}</p>
            <p>Punch Line: {props.joke.punchLine}</p>
        </div>

    )
}

export default Jokes;