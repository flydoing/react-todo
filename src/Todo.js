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
        // this.testDb = [{'task':'任务1','isDone':true},{'task':'任务2','isDone':false}];
        this.todoDb = new todoDb('todoDb'); //初始化实例，localStorage命名为todoDb
        this.state = {
            tasks: this.todoDb.get() || [],    //array里面的obj
            isAllDone: false
        };
    }
    addTask(newTask){
        this.state.tasks.unshift(newTask);  //改变dtate:数组首端插入新的task
        this.todoDb.set(this.state.tasks);  //更新this.todoDb数据库
        this.setState(
            {
                tasks: this.state.tasks,
                isAllDone: false
            }
        );
    }
    deleteTask(index){
        this.state.tasks.splice(index, 1);  //改变dtate:数组删除指定index的一条task
        this.todoDb.set(this.state.tasks);  //更新this.todoDb数据库
        this.setState(
            {
                tasks: this.state.tasks,
                isAllDone: false
            }
        );
    }
    changeDone(index,isDone){
        this.state.tasks[index].isDone = isDone;
        this.todoDb.set(this.state.tasks);  //更新this.todoDb数据库
        this.setState(
            {
                tasks: this.state.tasks,
                isAllDone: false
            }
        );
    }
    deleteDone(){
        let tasks = this.todoDb.get().filter(task => !task.isDone);  //筛选出未完成的，去掉已完成的
        this.state.tasks = tasks;
        this.todoDb.set(this.state.tasks);  //更新this.todoDb数据库
        this.setState(
            {
                tasks: this.state.tasks,
                isAllDone: false
            }
        );
    }
    searchTasks(val){
        //从数据库去除完整的数据
        let searchResult = this.todoDb.get().filter((tasks) => tasks.task.includes(val));
        this.state.tasks = searchResult;
        this.setState(
            {
                tasks: this.state.tasks,
                isAllDone: false
            }
        );

    }
    render(){
        var count = {
            countAll: this.state.tasks.length || 0,
            countDone: (this.state.tasks && this.state.tasks.filter((task) => task.isDone)).length || 0
        }
        return (
            <div className="todo-cont">
                <TodoSearch searchTasks={this.searchTasks.bind(this)}/>
                <TodoMain tasks={this.state.tasks} deleteTask={this.deleteTask.bind(this)} changeDone={this.changeDone.bind(this)} deleteDone={this.deleteDone.bind(this)} {...count}/>
                <TodoAdd addTask={this.addTask.bind(this)}/>
            </div>
        )
    }
}

ReactDOM.render(<Todo/>,document.getElementById('content'));

