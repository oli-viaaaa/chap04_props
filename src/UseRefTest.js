import React, {useState, useRef, useEffect} from "react";

// useRef() 훅(Hook)
// 현재 컴포넌트에서 렌더링에 관계없이 지속적으로 유지되어야하는 값이나 상태를 유지하고자 할때 useRef를 사용한다.
// 화면 렌더링에 영향을 받지 않고 영향을 주지도않음.
export default function UseRefTest(){
    const[name, setName] = useState("");
    // useRef()훅
    const renderCount = useRef(0);
    
    
    useEffect(()=>{
        renderCount.current += 1;
    }, [name]);

    return(
        <>
            <input value={name} onChange={(e)=>setName(e.target.value)}></input>
            <div>이름: {name}</div>
            <div>렌더링 횟수: {renderCount.current}번</div>
        </>
    );
}