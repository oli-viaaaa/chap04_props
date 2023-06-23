import React from "react";
import Employee from "./Employee";

export default function EmployeeList(){
    const employee ={
        name: "hong",
        age: 21,
        address: {
            zipcode: 12345,
            addr1: "서울시",
            addr2: "강남구 삼성동"
        }
    };

    return(
        <div>
            <h1>Employee List</h1>
            <Employee employee ={employee} />
        </div>
    );
}