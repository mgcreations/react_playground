import React from 'react';
import ToDoItem from '../components/ToDoItem';

function MainContent() {
    return (
        <div className="Main">
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
        </div>
    );
}

export default MainContent;