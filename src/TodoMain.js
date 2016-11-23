import React from 'react';
import MainItem from './MainItem';
import MainStatus from './MainStatus';

export default class TodoMain extends React.Component{
    render(){
        return(
            <div className="todo-main">
                <ul>
                    <MainItem />
                    <MainItem />
                    <MainItem />
                </ul>
                <MainStatus/>
            </div>
        )
    }
}