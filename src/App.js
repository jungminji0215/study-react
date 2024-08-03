import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

/**
 * 이 파일의 구조는 App 컴포넌트 안에 Modal 컴포넌트가 있는 구조이다.
 * App 의 state 를 Modal 로 전달해줄 수 있다. 전송할 때는 props 문법을 사용하면 된다.
 */

// 이거 하나하나 컴포넌트!!
function App() {
  let title = "강남우동맛집";
  let [글제목, setTitle] = useState(["남자코트추천", "강보경", "정보경"]);
  let [좋아요, setLike] = useState([0, 0, 0]);
  let [modal, setModel] = useState(false);

  const addLike = (index) => {
    let copy = [...좋아요];
    copy[index] = copy[index] + 1;
    setLike(copy);
  };

  const updateTitle = () => {
    let newTitles = [...글제목]; // 새로운 배열을 만들어서
    newTitles[0] = "여자코트추천"; // 첫 번째 제목을 변경
    setTitle(newTitles); // 새로운 배열을 상태로 설정
  };

  const sortTitle = () => {
    let sortTitle = [...글제목].sort();
    setTitle(sortTitle);
  };

  const openModal = () => {
    if (modal === true) {
      setModel(false);
    } else {
      setModel(true);
    }
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <button onClick={updateTitle}>버튼</button>
      <button onClick={sortTitle}>가나다순 정렬</button>

      {글제목.map((제목, index) => {
        return (
          <div className="list" key={index}>
            <h4 onClick={openModal}>
              {글제목[index]}
              <span
                onClick={() => {
                  addLike(index);
                }}
              >
                👍🏻
              </span>{" "}
              {좋아요[index]}
            </h4>
          </div>
        );
      })}

      {modal === true ? <Modal 글제목={글제목} setTitle={setTitle} /> : null}
    </div>
  );
}

// 이거를 컴포넌트라고 부른다.
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목}</h4>
      <button
        onClick={() => {
          let newTitles = [...props.글제목];
          newTitles[0] = "여자코트추천";
          props.setTitle(newTitles);
        }}
      >
        이거 누르면 제목 변경
      </button>
    </div>
  );
}

export default App;
