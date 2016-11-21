import React from 'react';
import ReactDOM from 'react-dom';

import TodoSearch from './TodoSearch.js';
import TodoMain from './TodoMain.js';
import TodoAdd from './TodoAdd.js';

import './todo.scss';

class Todo extends React.Component{
    constructor(){
        super();
        this.todoDb = [{'text':'任务1','isDone':true},{'text':'任务2','isDone':false}];
        this.state = {};    //数组this.todoDb.isDone 集合成数组
    }
    render(){
        var props = {};
        return (
            <div className="todo-cont">
                <TodoSearch/>
                <TodoMain/>
                <TodoAdd/>
            </div>
        )
    }
}

ReactDOM.render(<Todo/>,document.getElementById('content'));

