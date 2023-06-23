import React, {useState, useEffect} from "react";

// useRef 훅(Hook)사용하지 않는 컴포넌트
export default function UseRefNonTest(){
    const[name, setName] = useState("");
    const[renderCount, setRenderCount] = useState(1);
    
    // useEffect훅(화면이 렌더링 되면 자동으로 호출)
    useEffect(()=>{
        setRenderCount((prev)=>prev +1);
    });

    return(
        <>
            <input value={name} onChange={(e)=>setName(e.target.value)}></input>
            <div>이름: {name}</div>
            <div>렌더링 횟수: {renderCount}번</div>
        </>
    );
}