import React from 'react';
import ReactDOM from 'react-dom';

export default class MainItem extends React.Component{
    deleteClick(){
        this.props.deleteTask(this.props.index);
    }
    changeClick(){
        let isDone = !this.props.isDone;
        this.props.changeDone(this.props.index,isDone);
    }
    render(){
        let isDoneClass = this.props.isDone ? 'li-status' : 'li-status li-status-no';   //已/未完成的样式
        let isDoneTxt = this.props.isDone ? '已完成' : '未完成';  //已/未完成的文字
        return(
            <li>
                <span className="li-text">{this.props.index+1}.{this.props.task}</span>
                <button className="li-delete" onClick={this.deleteClick.bind(this)}>删除</button>
                <button className={isDoneClass} onClick={this.changeClick.bind(this)}>{isDoneTxt}</button>
            </li>
        )
    }
}