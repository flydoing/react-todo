import React from 'react';
import ReactDOM from 'react-dom';

import TodoSearch from './TodoSearch.js';
import TodoMain from './TodoMain.js';
import TodoAdd from './TodoAdd.js';

import todoDb from './todoDb.js';

import './todo.scss';

class Todo extends React.Component{
    constructor(){
        super();
        this.testDb = [{'text':'任务1','isDone':true},{'text':'任务2','isDone':false}];
        // this.state = {};    //数组this.todoDb.isDone 集合成数组
        // this.todoDb = new todoDb('todoDb',this.testDb);
        this.todoDb = new todoDb('todoDb');
    }
    test(){
        console.log(this.todoDb);
        console.log(this.todoDb.set(this.testDb));
        console.log(this.todoDb.get());
    }
    render(){
        var props = {};
        return (
            <div className="todo-cont">
                <TodoSearch/>
                <TodoMain/>
                <TodoAdd/>
                <p><a href="javascript:;" onClick={this.test.bind(this)}>1测试localDb</a></p>
            </div>
        )
    }
}

ReactDOM.render(<Todo/>,document.getElementById('content'));

