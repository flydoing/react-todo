import React from 'react';
import ReactDOM from 'react-dom';

export default class MainItem extends React.Component{
    render(){
        return(
            <div className="main-status">
                <p>
                    共<span>5</span>条，已完成<span>3条</span>，未完成<span>2</span>条
                    <button>删除全部已完成</button>
                </p>
            </div>
        )
    }
}