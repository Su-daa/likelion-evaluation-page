import "../src/styles.css";
import logoImg from "../src/img/logo.jpg";
import userImg from "../src/img/user.png";
import lectureImg from "../src/img/lectureImg.jpg";

function Evaluation() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">
            <img src={logoImg} alt="logo" className="logoImg" />
          </div>
          <div className="search">
            <form action="/search" method="GET">
              <input
                type="text"
                name="query"
                placeholder="과목명으로 검색"
                className="searchbar"
              />
            </form>
          </div>
          <div className="user">
            <img src={userImg} alt="user" className="userImg" />
          </div>
          <div>
            <button className="mypageButton" />
            마이페이지
          </div>
        </div>
      </header>

      <div class="lectureBox">
        <div class="container">
          <img src={lectureImg} alt="lectureImg" class="lectureImg" />
          <h1 class="titleText">
            <button class="emphTitleBox">강의</button> 사회계층론
          </h1>
          <h4 class="detailText">교수명 &nbsp;&nbsp;홍길동</h4>
          <h4 class="detailText">과목코드 &nbsp;&nbsp;45601-01</h4>
          <h4 class="detailText">강의평가 &nbsp;&nbsp;10개의 수강평</h4>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#">개요</a>
          </li>
          <li>
            <a href="#">수강평</a>
          </li>
        </ul>
      </nav>

      <div className="container">
        <p className="reviewTitle">
          <h1>강의평</h1>
          <h4>총 15개</h4>
        </p>
      </div>

      <div className="container">
        <div className="review">
          <span className="container">
            <img src={userImg} alt="reviewImg" className="reviewImg" />
            <span>
              <p className="speech-bubble">최고의 강의! 정말 유익하다!</p>
            </span>
          </span>
        </div>
        <button className="likeButton">수정 / 삭제</button>
        <button className="likeButton">좋아요</button>
        <h6 className="date">작성일자</h6>
      </div>

      <div className="container">
        <input
          className="reviewbox"
          type="text"
          placeholder="강의평을 입력해주세요."
        />
        <input className="reviewsubmit" type="submit" />
      </div>
    </div>
  );
}

export default Evaluation;
