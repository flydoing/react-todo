import React from 'react';
import MainItem from './MainItem';
import MainStatus from './MainStatus';

export default class TodoMain extends React.Component{
    render(){
        if(this.props.tasks.length <= 0){
            return(
                <div className="todo-main">
                    <ul>
                        <li>暂没有任务，请新增任务</li>
                    </ul>
                    <MainStatus/>
                </div>
            )
        }else{
            return(
                <div className="todo-main">
                    <ul>
                        {this.props.tasks.map((tasks,index) => {
                            return <MainItem key={index} {...tasks} index={index} {...this.props}/>
                        })}
                        {/*回调数组：tasks:当前数组的一个元素；index:当前索引*/}
                    </ul>
                    <MainStatus deleteDone={this.props.deleteDone.bind(this)} {...this.props}/>
                </div>
            )
        }

    }
}