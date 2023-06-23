import React from "react";

// 보는 쪽에서 : employees = {employees} 이와 같이 보내고
// 받는 쪽에서 : {employees} 와 같이 받게 되면
// 객체 분해 할당이 진행되어 보낸쪽의 employees props객체의 주소가
// employees 변수로 전달되어 props.employees와 같이 안받아도 됨.
export default function MapObjListExample(props){
    return(
        <div>
            <h2>Employee List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Zipcode</th>
                        <th>Addr1</th>
                        <th>Addr2</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map((employees, index)=>(
                        <tr key={index}>
                            <td>{employees.name}</td>
                            <td>{employees.age}</td>
                            <td>{employees.address.zipcode}</td>
                            <td>{employees.address.addr1}</td>
                            <td>{employees.address.addr2}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}