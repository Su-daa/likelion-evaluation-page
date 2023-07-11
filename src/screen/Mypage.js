import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./styles.css";
import personImg from "../src/img/auditor.png";

function Mypage() {
  return (
    <div>
      <div className="inforTitleBox">
        <b className="inforTitleText">나의 정보</b>
      </div>

      <div className="inforBox">
        <div className="container">
          <img src={personImg} alt="personImg" className="personImg" />
          <span className="inforText">
            <h1>김미영 님</h1>
            <h4>&nbsp;&nbsp;• 신분 &nbsp;&nbsp;학생(학부)</h4>
            <h4>&nbsp;&nbsp;• 학과 &nbsp;&nbsp;법학과</h4>
            <h4>&nbsp;&nbsp;• 학번 &nbsp;&nbsp;202312345</h4>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Mypage;
