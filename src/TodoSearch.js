import React from 'react';
import todoSearch from './todo-search.png'

export default class TodoSearch extends React.Component{
    render(){
        return(
            <div className="todo-search">
                <input type="text" placeholder="输入要查询任务，点击或enter键搜索"/>
                <a href="javascript:;"><img src={todoSearch} /></a>
            </div>
        )
    }
}