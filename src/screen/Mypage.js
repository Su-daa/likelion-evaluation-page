import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "../styles/styles.css";
import personImg from "../img/auditor.png";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import Lecture from "../components/Lecture";

function Mypage() {

  let userInfo = useSelector((state) => state.userInfo);

  return (
    <div>
      <NavBar />
      <div className="inforTitleBox">
        <b className="inforTitleText">나의 정보</b>
      </div>

      <div className="inforBox">
        <div className="container">
          <img src={personImg} alt="personImg" className="personImg" />
          <span className="inforText">
            <h1>{userInfo.name} 님</h1>
            <h4>• 학과 &nbsp;&nbsp;{userInfo.major}</h4>
            <h4>• 학번 &nbsp;&nbsp;{userInfo.studentNum}</h4>
          </span>
        </div>
      </div>

      {
        userInfo.lecture.map((lec, i) => {
          return(
          <Lecture lecture = {lec}/>
          )
        })
      }
    </div>
  );
}

export default Mypage;
