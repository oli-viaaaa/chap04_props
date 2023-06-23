import React from "react";
import Acitle from "./Article";

const comments = [
    {
        name: "유남규",
        comment: "안녕하세요, 남규입니다.",
    },
    {
        name: "이문열",
        comment: "리액트 재미있어요~!",
    },
    {
        name: "채시라",
        comment: "저도 리액트 배워보고 싶어요!!",
    },
];

export default function CommentList(props){
    return(
        <div>
            {/* Article 컴포넌트 호출 
            map() : 함수는 앞의 배열 갯수만큼 반복*/}
            {comments.map((comment, index) => {
                return(
                    // <Acitle key={index} name={comment.name} comment={comment.comment} />
                    <Acitle key={index} user={comment} />
                );
            })}
        </div>
    );
}