import React, { useState } from "react";

function SignUp(props) {
    // name 상태변수 선언 : 초기값은 ''
    const [name,setName] = useState('');
    // gender 상태변수 선언 : 초기값은 '남자'
    const [gender,setGender] = useState('남자');

    // 상태 변경 함수
    // 이름을 변경해주는 함수
    const changeName = (event) => {
        setName(event.target.value);
    };
  
    // gender를 변경해 주는 함수
    const changeGender = (event) => {
        setGender(event.target.value);
    };


    const onSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender}`);
        event.preventDefault();
    };

    return (
        <form onSubmit={onSubmit}>
            <h1>Sign UP</h1>
            <label>
                이름:
                <input type="text" 
                    value={name} 
                    onChange={changeName} 
                />
            </label>
            <br />
            <label>
                성별:
                <select value={gender} 
                    onChange={changeGender}
                >
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default SignUp;