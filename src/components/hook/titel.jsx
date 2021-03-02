import React,{useEffect} from 'react';
import {Button} from 'antd';
let Item = (props) => {
    const {memofn } = props;
    useEffect(() => {
        console.log('hello')
    },[memofn])
    return (
        <div>
            <Button type='dashed' onClick={ memofn  }>修改count222</Button>
        </div>
    )
}
export default Item;