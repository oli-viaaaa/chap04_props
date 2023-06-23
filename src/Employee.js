import React from "react";
// 사원 컴포넌트
export default function Employee(props){
    // 프롭스를 객체 분해 할당으로 각각의 변수로 전달
    const{name, age, address} = props.employee;
    // 주소 객체 분해 할당.
    const{zipcode, addr1, addr2} = address;
    return(
        <div>
            <h2>이름 : {name}</h2>
            <h2>나이 : {age}</h2>
            <h2>주소 : ({zipcode}) {addr1} {addr2}</h2>
        </div>
    );
}