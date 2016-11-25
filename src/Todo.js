import React from 'react';
import ReactDOM from 'react-dom';
import todoDb from './todoDb.js';

import TodoSearch from './TodoSearch.js';
import TodoMain from './TodoMain.js';
import TodoAdd from './TodoAdd.js';

import './todo.scss';

class Todo extends React.Component{
    constructor(){
        super();
        this.testDb = [{'task':'任务1','isDone':true},{'task':'任务2','isDone':false}];
        // this.todoDb = new todoDb('todoDb',this.testDb);
        this.todoDb = new todoDb('todoDb'); //初始化实例，localStorage命名为todoDb
        // console.log(this.todoDb.get().length);
        // if(this.todoDb.get()){
        //     this.todoDb.set([{'task':'默认的任务','isDone':false}]);
        // }
        this.state = {
            tasks: this.todoDb.get() || [],    //array里面的obj
            isAllDone: false
        };
        // this.todoDb.set(this.testDb);
    }
    test(){
        console.log(this.todoDb);
        // this.todoDb.set(this.testDb);
        console.log(this.todoDb.get());
        console.log(this.state);
    }
    addTask(newTask){
        console.log('addTask!');
        this.state.tasks.unshift(newTask);  //改变dtate:数组首端插入新的task
        this.todoDb.set(this.state.tasks);  //更新this.todoDb数据库
        console.log(this.todoDb.get());
        this.setState(
            {
                tasks: this.state.tasks,
                isAllDone: false
            }
        );
    }
    deleteTask(index){
        console.log('deleteTask!');
        console.log(index);
        this.state.tasks.splice(index, 1);  //改变dtate:数组首端插入新的task
        this.todoDb.set(this.state.tasks);  //更新this.todoDb数据库
        console.log(this.todoDb.get());
        this.setState(
            {
                tasks: this.state.tasks,
                isAllDone: false
            }
        );
    }
    render(){
        return (
            <div className="todo-cont">
                <TodoSearch/>
                <TodoMain tasks={this.state.tasks} deleteTask={this.deleteTask.bind(this)}/>
                <TodoAdd addTask={this.addTask.bind(this)}/>
                <p><a href="javascript:;" onClick={this.test.bind(this)}>1测试localDb</a></p>
            </div>
        )
    }
}

ReactDOM.render(<Todo/>,document.getElementById('content'));

