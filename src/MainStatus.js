import React from 'react';
import ReactDOM from 'react-dom';

export default class MainItem extends React.Component{
    deleteDoneClick(){
        console.log('deleteDoneClick');
        this.props.deleteDone();
    }
    render(){
        return(
            <div className="main-status">
                <p>
                    <a>共<span>5</span>条，已完成<span>3</span>条，未完成<span>2</span>条</a>
                    <button onClick={this.deleteDoneClick.bind(this)}>删除全部已完成</button>
                </p>
            </div>
        )
    }
}