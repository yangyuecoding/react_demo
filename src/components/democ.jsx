import React, { Component } from 'react'
import store from '../store/index';
import actionType from './demob/actionTypes';
import Item from './hook/item';
import Parent from './hook/parent';
export default class democ extends Component {
    constructor(){
        super();
        this.state = {
            list:store.getState().demob.list
        }
    }
    componentDidMount(){
        // console.log(this.props)
        store.subscribe(() => {
            this.setState({
                list:store.getState().demob.list
            })
        })
    }
    changeFlag(key){
        let target = [...this.state.list];
        target[key].actived = !target[key].actived;
        store.dispatch(actionType.push_thunk({target}));
    }
    render() {
        return (
            <div>
                {
                    this.state.list.map((item,key) => {
                        return (
                            <Item key={key} {...item} changeFlag={this.changeFlag.bind(this,key)}></Item>
                        )
                    })
                }
                <Parent/>
            </div>
        )
    }
}
