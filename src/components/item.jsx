import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button} from 'antd';
export default class item extends Component {

   static propTypes = {
       name:PropTypes.string,
       age:PropTypes.string,
       sex:PropTypes.string,
       actived:PropTypes.bool
   }
   
    render() {
        const { name,age,sex,actived } = this.props;
        return (
            <div>
                <p><span>{name}</span><span>{age}</span><span>{sex}</span><Button type='primary'>点击变色</Button></p>
            </div>
        )
    }
}
