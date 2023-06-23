import logo from './logo.svg';
import './App.css';
import Post from './Post';
import Library from './Library';
import Article from './Article';
import CommentList from './ArticleList';
import EmployeeList from './EmployeeList';
import StateNonTest from './StateNonTest';
import StateUseTest from './StateUseTest';
import UseRefNonTest from './UseRefNonTest';
import UseRefTest from './UseRefTest';
import UseRefTest2 from './UseRefTest2';
import MapObjListExample from './MapObjListExample';
import SignUp from './SignUp';

export default function App() {
  // 자식 컴포넌트로 보낼 raw 데이터
  const employees = [
    {
      name: "hong",
      age: 21,
      address: {
        zipcode: 12345,
        addr1: "서울시",
        addr2: "강남구 삼성동"
      }
    },
    {
      name: "kim",
      age: 25,
      address: {
        zipcode: 54321,
        addr1: "서울시",
        addr2: "마포구 홍대입구"
      }
    },
    {
      name: "lee",
      age: 30,
      address: {
        zipcode: 98765,
        addr1: "부산시",
        addr2: "해운대구 반송동"
      }
    }
  ]; // end
  return (
    <div className="App">
      
      <br /><br />
      <Post title ="안녕, 리액트" content = "나의 첫번째 리액트 프로젝트" author ="조희정" />

      <br /><br />
      <Library />

      <br /><br />
      <CommentList />

      <br /><br />
      <EmployeeList />

      <br /><br />
      <StateNonTest />

      <br /><br />
      <StateUseTest />

      <br /><br />
      {/* <UseRefNonTest /> */}
     
      <br /><br />
      <UseRefTest />

      <br /><br />
      <UseRefTest2 />

      <br /><br />
      <MapObjListExample employees={employees}/>

      <br /><br />
      <SignUp />
    </div>
  );
}


