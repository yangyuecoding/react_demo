import React,{useState,useCallback,useMemo} from 'react';
import Child from './titel';
let Parent = () => {
    let [count1,setCount1] = useState(0);
    let [count2,setCount2] = useState(10);
    let [count3,setCount3] = useState(10);
    
    let callback = () => {
        setCount2(count2+2)
    }
    let calc = () => {
        console.log('heelo')
        return Math.random() * 100 * count1;
    }
    let memoCount1 = useMemo(calc,[count1]);
    let memofn = useCallback(callback,[count2]);
    return (
        <div>
            <p>
                {count1}
            </p>
            <button onClick={() => { setCount1(count1+1) }}>修改111的</button>
            <p>
                {count2}
            </p>
            
            <Child memofn={memofn}></Child>
            <p>
                {count3}
            </p>
            <button onClick={() => { setCount3(count3+1) }}>修改111的</button>
            <p>
                {memoCount1}
            </p>
        </div>
    )
}

export default Parent;