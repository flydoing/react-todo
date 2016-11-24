import React from 'react';
import ReactDOM from 'react-dom';

export default class TodoAdd extends React.Component{
    enterClick(){
        console.log('enterClick');
        let task = ReactDOM.findDOMNode(this.refs.inputTask).value;
        console.log(task);
        if(!task) return false;
        let newTask = {
            task: task,
            'isDone': false
        }
        this.props.addTask(newTask);
    }
    render(){
        return(
            <div className="todo-add">
                <input ref='inputTask' type="text" placeholder="输入要新建的任务，点击或enter键新建"/>
                <a href="javascript:;" onClick={this.enterClick.bind(this)}>新增</a>
            </div>
        )
    }
}