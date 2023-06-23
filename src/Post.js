import './App.css';
import Comment from './Comment';

export default function Post(props){
    const{title, content, author} = props;
    return(  // 가장 기본적인 방법으로 전달
        <Comment title ={title} content ={content} author ={author}/>
    );
}