import "../styles/styles.css";
import logoImg from "../img/logo.jpg";
import userImg from "../img/user.png";
import lectureImg from "../img/lectureImg.jpg";
import NavBar from "../components/NavBar";

function Evaluation() {
  return (
    <div>
      <NavBar />
      <div className="lectureBox">
        <div className="lecture-container">
          <img src={lectureImg} alt="lectureImg" className="lectureImg" />
          <div className="lecture-info">
            <h1 className="titleText">강의 사회계층론</h1>
            <h4 className="detailText">교수명 홍길동</h4>
            <h4 className="detailText">과목코드 45601-01</h4>
            <h4 className="detailText">강의평가 10개의 수강평</h4>
          </div>
        </div>
      </div>

      <div className="review-title">
        <h1>강의평</h1>
        <h4>총 15개</h4>
      </div>

      <div className="review-container">
        <img src={userImg} alt="reviewImg" className="reviewImg" />
        <span className="speech-bubble">contents</span>
        <button className="btn edit-btn">수정</button>
        <button className="btn delete-btn">삭제</button>
      </div>

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
