import React from 'react';

export default class MainItem extends React.Component{
    deleteDoneClick(){
        this.props.deleteDone();
    }
    render(){
        var countNotDone = this.props.countAll - this.props.countDone;
        return(
            <div className="main-status">
                <p>
                    <a>共<span>{this.props.countAll}</span>条，已完成<span>{this.props.countDone}</span>条，未完成<span>{countNotDone}</span>条</a>
                    <button onClick={this.deleteDoneClick.bind(this)}>删除全部已完成</button>
                </p>
            </div>
        )
    }
}