import React from 'react';
import ReactDOM from 'react-dom';

export default class MainItem extends React.Component{
    render(){
        return(
            <li>
                <span className="li-text">任务一任务一</span>
                <button className="li-delete">删除</button>
                <button className="li-status">已完成</button>
            </li>
        )
    }
}