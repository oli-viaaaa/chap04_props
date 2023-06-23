import React from "react";

function Book(props){
    return(
        <div>
            <h2>{`이 책의 이름은 ${props.name}입니다.`}</h2>
            <h2>{'이 책의 이름은 '+props.name+'입니다.'}</h2>
            <h2>{props.name}</h2>
            <h3>{`이 책은 총 ${props.numOfPage} 페이지로 이뤄져 있습니다.`}</h3>
        </div>
    );
}
export default Book;
