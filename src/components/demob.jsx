import React, { Component } from 'react';
import store from '../store/index';
import Item from './item';
import actionType from './demob/actionTypes';

export default class Demob extends Component {
    constructor(){
        super();
        this.state = {
            list:store.getState().demob.list,
            obj:{
                name:'张阿森纳',
                age:20
            }
        }
    }
    componentDidMount(){
        store.subscribe(() => {
            this.setState({
              list:store.getState().demob.list
            })
        })
    }
    changeActived(key){
        let target = [...this.state.list];
        target[key].actived = !target[key].actived;
        store.dispatch(actionType.push_thunk({target}));
    }
    renderList(){
        return this.state.list.map((item,key) => {
            return (
                <Item key={key} {...item} obj={this.state.obj} changeActived={this.changeActived.bind(this,key)}></Item>
            )
        })
    }
    render() {
        console.log(store.getState())
        return (
            <div>
                <h2>demobyemain</h2>
                {
                    this.renderList()
                }
            </div>
        )
    }
}
