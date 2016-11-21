import React from 'react';

export default class TodoAdd extends React.Component{
    render(){
        return(
            <div className="todo-add">
                <input type="text" placeholder="输入要新建的任务，点击或enter键新建"/>
                <a href="javascript:;">新增</a>
            </div>
        )
    }
}