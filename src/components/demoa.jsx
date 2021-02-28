import React, { Component, Suspense, lazy } from 'react'
import { Button } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import store from '../store/index';
import actionType from '../components/demoa/actionType';
import logo from '../static/微信图片_20190823171319.jpg';

const A = lazy(() => import('./erziA'));
const B = lazy(() => import('./erziB'));

export default class demoa extends Component {
    constructor() {
        super();
        this.state = {
            count: store.getState().demoa.count,
            num: 2
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                count: store.getState().demoa.count
            })
            //     this.setState((prevState,props) => {
            //        console.log(prevState,props);
            //        return {
            //            count:prevState.count
            //        }
            //     })
            //     this.setState((prevState,props) => {
            //         console.log(prevState,props);
            //         return {
            //             count:prevState.count
            //         }
            //      })
        })
    }
    add() {
      setTimeout(() => {
        let count = this.state.count;
        count++;
        store.dispatch(actionType.addThunk({ count }));
        this.setState((prevState, props) => {
            return {
                num: prevState.num+1
            }
        })
        this.setState((prevState, props) => {
            return { 
                num: prevState.num+1
            }
        })
      })
    }
    render() {
        // console.log(this.props);
        return (
            <div>
                <h2>demoa页面</h2>
                <Button type='primary' onClick={() => { this.props.history.push({ pathname: '/demoa/erzia' }) }}>返回首页A</Button>
                <Button type='primary' onClick={() => { this.props.history.push({ pathname: '/demoa/erzib', query: { id: 1002 } }) }}>返回首页b</Button>
                {/* <Suspense fallback={<div>loading...</div>}> */}
                <Suspense fallback={<img src={logo} alt='hello'></img>}>
                    <Switch>
                        <Route path='/demoa/erzia' component={A}></Route>
                        <Route path='/demoa/erzib' component={B}></Route>
                        <Redirect from='/' to='/demoa/erzia'></Redirect>
                    </Switch>
                </Suspense>
                <Button type='primary' onClick={() => { this.add() }}>点击累计2</Button>
                <p>{this.state.count}</p>
                <p>{this.state.num}</p>
                <Button type='primary' onClick={() => { this.props.history.push({ pathname: '/', serach: 'name=张娜' }) }}>返回首页</Button>
            </div>
        )
    }
}
