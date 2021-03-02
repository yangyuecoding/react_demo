import React from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from 'antd';
import style from '../../style/item.module.scss';
let Item = (props) => {
    const {name,age,sex,actived,changeFlag} = props;
    const history = useHistory();
    console.log(props);
    return (
        <div>
           <p className={actived?style.active:''}>{name}--{age}--{sex}--<Button type='primary' onClick={() => { changeFlag() }} >点击变色</Button></p> 
            <Button type='dashed' onClick={() => { history.push({pathname:'/index',query:{id:1001}}) } }>返回首页</Button>
        </div>
    )
}

//性能优化  react.memo 减少render次数
function diff(prev,next){
    return prev.actived === next.actived;
}
export default React.memo(Item,diff);