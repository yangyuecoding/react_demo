import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button} from 'antd';
import itemStyle from '../style/item.module.scss';
export default class item extends Component {

   static propTypes = {
       name:PropTypes.string,
       age:PropTypes.number,
       sex:PropTypes.string,
       actived:PropTypes.bool,
       obj:PropTypes.shape({
           name:PropTypes.string,
           age:PropTypes.number
       }).isRequired
   }

   static defaultProps = {
        name:'PropTypes.string',
        age:'PropTypes.number',
        sex:'PropTypes.string',
        actived:'PropTypes.bool'
   }
   shouldComponentUpdate(nextProps,props){
    //    console.log(this.props.actived,nextProps.actived)
       return nextProps.actived !== this.props.actived;
   }
   changeActived(){
       this.props.changeActived();
   }
    render() {
        const { name,age,sex,actived } = this.props;
        console.log(this.props);
        return (
            <div className={ actived? itemStyle.active:''}>
                <p><span>{name}</span>---<span>{age}</span>---<span>{sex}</span>---<Button type='primary' onClick={ () => { this.changeActived() } }>点击变色</Button></p>
            </div>
        )
    }
}