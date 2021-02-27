import React, { Component } from 'react'
import {Button} from 'antd';
export default class index extends Component {
    render() {
        return (
            <div>
                <h1>我是首页</h1>
                <Button type='primary' onClick={ () => { this.props.history.push( { pathname:'/demoa',query:{id:1001} } ) } }>前往demoa</Button>
                <Button type='primary' onClick={ () => { this.props.history.push( { pathname:'/demob',state:{id:1001} } ) } }>前往demob</Button>
            </div>
        )
    }
}
