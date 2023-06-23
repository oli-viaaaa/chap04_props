import React from "react";

export default function MapArrayExample(){
    const number = [1,2,3,4,5];
    const dNum = number.map((number)=>number*2);
    return(
        <>
            <h2>map함수로 Array다루기</h2>
            <ul>
                {dNum.map((number, index)=>(
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </>
    );
}