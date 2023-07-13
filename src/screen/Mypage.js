import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "../styles/styles.css";
import personImg from "../img/auditor.png";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import Lecture from "../components/Lecture";
import { Button } from "react-bootstrap";

function Mypage() {
  let userInfo = useSelector((state) => state.userInfo);

  return (
    <div>
      <NavBar />
      <Button className="inforTitleBox">
        <b className="inforTitleText">나의 정보</b>
      </Button>

      <div className="inforBox">
        <div className="container">
          <img src={personImg} alt="personImg" className="personImg" />
          <span className="inforText">
            <h1 className="inforText1">{userInfo.name} 님</h1>
            <br />
            <br />
            <h5>
              &nbsp;&nbsp;&nbsp;
              <button className="inforTextButton">학과</button> &nbsp;&nbsp;
              {userInfo.major}
            </h5>
            <br />
            <h5>
              &nbsp;&nbsp;&nbsp;
              <button className="inforTextButton">학번</button> &nbsp;&nbsp;
              {userInfo.studentNum}
            </h5>
          </span>
        </div>
      </div>

      {userInfo.lecture.map((lec, i) => {
        return <Lecture lecture={lec} />;
      })}
    </div>
  );
}

export default Mypage;
