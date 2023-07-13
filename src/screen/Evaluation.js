import React, { useEffect, useState } from "react";
import "../styles/styles.css";
import logoImg from "../img/logo.jpg";
import userImg from "../img/user.png";
import lectureImg from "../img/lectureImg.jpg";
import NavBar from "../components/NavBar";

function Evaluation() {
  let reviewList1 = [
    {
      reviewId: 0,
      name: "김수빈",
      updatedAt: "2023.07.04",
      star: 5,
      content: "수업이 너무 지루해",
    },
    {
      reviewId: 1,
      name: "김수빈",
      updatedAt: "2023.07.04",
      star: 5,
      content: "수업이 너무 지루해1",
    },
    {
      reviewId: 2,
      name: "김수빈",
      updatedAt: "2023.07.04",
      star: 5,
      content: "수업이 너무 지루해2",
    },
    {
      reviewId: 3,
      name: "김수빈",
      updatedAt: "2023.07.04",
      star: 5,
      content: "수업이 너무 지루해3",
    },
  ];

  /*
  const [reviewList, setReviewList] = useState([]);

  const getReviewList = async () => {
    //데이터 받아오기
  };

  useEffect(() => {
    getReviewList();
  }, []);*/

  return (
    <div>
      <NavBar />
      <div className="lectureBox">
        <div className="lecture-container">
          <img src={lectureImg} alt="lectureImg" className="lectureImg" />
          <div className="lecture-info">
            <h1 className="titleText">강의 </h1>
            <h4 className="detailText">교수명 </h4>
            <h4 className="detailText">과목코드</h4>
            <h4 className="detailText">강의평가</h4>
          </div>
        </div>
      </div>

      <div className="review-title">
        <h1>강의평</h1>
        <h4>총 15개</h4>
      </div>

      {reviewList1.map((review) => (
        <>
          <div className="review-container">
            <img src={userImg} alt="reviewImg" className="reviewImg" />
            <span className="speech-bubble">{review.content}</span>
            <button className="btn edit-btn">수정</button>
            <button className="btn delete-btn">삭제</button>
          </div>
        </>
      ))}

      <div className="review-input-container">
        <input
          className="reviewbox"
          type="text"
          placeholder="한줄평을 입력해주세요."
        />
        <button className="submit-btn">제출</button>
      </div>
    </div>
  );
}

export default Evaluation;
