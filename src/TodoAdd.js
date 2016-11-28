import React from 'react';
import ReactDOM from 'react-dom';

export default class TodoAdd extends React.Component{
    addClick(){
        console.log('addClick');
        this.addOne();
    }
    addEnter(event){
        if(event.keyCode === 13){
            console.log('addEnter13');
            this.addOne();
        }
    }
    addOne(){
        let task = ReactDOM.findDOMNode(this.refs.inputTask).value;
        console.log(task);
        if(!task) return false;
        let newTask = {
            task: task,
            isDone: false
        }
        this.props.addTask(newTask);
        ReactDOM.findDOMNode(this.refs.inputTask).value = '';
        ReactDOM.findDOMNode(this.refs.inputTask).focus();
    }
    render(){
        return(
            <div className="todo-add">
                <input ref='inputTask' onKeyUp={this.addEnter.bind(this)} type="text" placeholder="输入要新建的任务，点击或enter键新建"/>
                <a href="javascript:;" onClick={this.addClick.bind(this)}>新增</a>
            </div>
        )
    }
}