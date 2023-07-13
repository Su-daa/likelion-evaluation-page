import "../styles/Home.css";
import profileImg from "../img/profile.png";
import { useNavigate } from "react-router-dom";

function Lecture(props) {

  let navigate = useNavigate();

  return (
    <div className="review-box-container">
      <div className="review-box">
        <img className="professor-img" src={profileImg} alt="professor-img" />
        <div>
          <div className="lecture-title-container">
            <h2>{props.lecture.lecName}</h2>
          </div>
          <div className="professor-name-container">
            <span>{props.lecture.professor}</span>
          </div>
          <div className="lecture-num-container">
            <span>{props.lecture.lecCode}</span>
          </div>
          <div className="best-review-container">
            <span>best 강의평</span>
          </div>
        </div>
        <div>
          <button type="button" className="detail-btn" onClick={() => {
            navigate(`/Detail/${props.lecture.lecId}`)
          }}>
            상세보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lecture;
