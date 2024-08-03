import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let title = "강남우동맛집";
  let [글제목, setTitle] = useState(["남자코트추천", "강보경", "정보경"]);
  let [좋아요, setLike] = useState([0, 0, 0]);
  let [modal, setModel] = useState(false);

  const addLike = () => {
    setLike(좋아요 + 1);
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
    console.log(modal);
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
                  let copy = [...좋아요];
                  copy[index] = copy[index] + 1;
                  setLike(copy);
                }}
              >
                👍🏻
              </span>{" "}
              {좋아요[index]}
            </h4>
          </div>
        );
      })}

      {modal === true ? <Modal /> : null}
    </div>
  );
}

// 이거를 컴포넌트라고 부른다.
function Modal() {
  return (
    <>
      <div className="modal">
        <h4>제목</h4>
      </div>
    </>
  );
}

export default App;
