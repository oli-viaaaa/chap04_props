import React, {useState} from "react";

// 상태(state) 변수를 사용하지 않는 경우
export default function StateNonTest(){
    let count = 0;

    return(
        <div>
            <h2>(상태 미사용 예제)</h2>
            <p>총 {count}번 클릭</p>
            <button onClick={()=>{console.log(count); count++;}}>클릭</button>
        </div>
    )
}