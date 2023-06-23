import './App.css';

export default function Comment(props){
    const{title, content, author} = props;
    return(
        <div>
            <h2>제목 : {title}</h2>
            <h2>내용 : {content}</h2>
            <h2>작성자 : {author}</h2>
        </div>
    );
}