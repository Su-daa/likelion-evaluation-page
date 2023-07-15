import React, { useEffect } from "react";
import Header from "../components/Header";
import Lecture from "../components/Lecture";
import NavBar from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import axios from "../axios";
import { setRecLectures } from "../store";

function HomePage() {
  let recLectures = useSelector((state) => state.recLectures);
  let lectures = useSelector((state) => state.lectures);
  console.log(lectures);
  const dispatch = useDispatch();

  useEffect(() => {
    // 백엔드에서 추천 강의 목록을 가져오는 비동기 함수
    const fetchRecLectures = async () => {
      try {
        const response = await axios.get("/lecture/recommend");
        dispatch(setRecLectures(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecLectures();
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Header />
      {recLectures.map((lecture, i) => {
        return (
          <>
            <Lecture lecIdx={i} lecture={lecture} />
          </>
        );
      })}
    </>
  );
}

export default HomePage;
