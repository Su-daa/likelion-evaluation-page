import "../styles/Home.css";
import profileImg from "../img/profile.png";

function Home() {
  return (
    <div className="review-box-container">
      <div className="review-box">
        <img className="professor-img" src={profileImg} alt="professor-img" />
        <div>
          <div className="lecture-title-container">
            <h2>컴퓨터와 프로그래밍1</h2>
          </div>
          <div className="professor-name-container">
            <span>교수이름</span>
          </div>
          <div className="lecture-num-container">
            <span>과목번호</span>
          </div>
          <div className="best-review-container">
            <span>best 강의평</span>
          </div>
        </div>
        <div>
          <button type="button" className="detail-btn">
            상세보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
