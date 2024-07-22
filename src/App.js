import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "자바 독학",
  ]);
  let [like, setLike] = useState(0);

  function 좋아요() {
    setLike(like + 1);
  }

  function 제목변경() {
    setTitle((title[0] = "여자 코트 추천"));
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red" }}>ReactBlog</h4>
      </div>
      <span onClick={제목변경}>click</span>
      <div className="list">
        <h4>
          {title[0]}
          <span onClick={좋아요}>👍🏻</span> {like}
        </h4>
        <p>2월 15일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 15일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 15일 발행</p>
      </div>
    </div>
  );
}

export default App;
