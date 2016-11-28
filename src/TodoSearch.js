import React from 'react';
import ReactDOM from 'react-dom';
import todoSearch from './todo-search.png'

export default class TodoSearch extends React.Component{
    searchClick(){
        this.searchUp();
    }
    searchUp(){
        // if(event.keyCode === 13){
        //     console.log('searchUp');
        //     let val = ReactDOM.findDOMNode(this.refs.inputSearch).value;
        //     console.log(val);
        //     this.props.searchTasks(val);
        // }
        console.log('searchUp');
        let val = ReactDOM.findDOMNode(this.refs.inputSearch).value;
        console.log(val);
        this.props.searchTasks(val);
    }
    render(){
        return(
            <div className="todo-search">
                <input type="text" ref='inputSearch' onKeyUp={this.searchUp.bind(this)} placeholder="输入要查询任务，点击或enter键搜索"/>
                <a href="javascript:;" onClick={this.searchClick.bind(this)}><img src={todoSearch} /></a>
            </div>
        )
    }
}