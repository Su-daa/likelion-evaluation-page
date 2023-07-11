import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NavBar.css";
import searchIcon from "../img/searchicon-blue.png";
import personIcon from "../img/personicon-blue.png";
import { Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="light" fixed="top">
      <Navbar.Brand>강의평가</Navbar.Brand>
      <div className="search-box-container">
        <input
          className="search-box"
          type="search"
          placeholder=" 과목명을 입력하세요"
        ></input>
        <button className="search-btn">
          <img
            className="search-btn-img"
            src={searchIcon}
            alt="search-icon"
          ></img>
        </button>
      </div>
      <button className="mypage-btn">
        <img
          className="mypage-btn-img"
          src={personIcon}
          alt="person-icon"
        ></img>
        마이페이지
      </button>
    </Navbar>
  );
}

export default NavBar;
