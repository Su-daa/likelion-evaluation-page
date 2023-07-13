import React from "react"
import Header from "../components/Header"
import Lecture from "../components/Lecture"
import NavBar from "../components/NavBar"
import { useSelector } from "react-redux"



function HomePage() {

    let recLectures = useSelector((state) => state.recLectures);
    let lectures = useSelector((state) => state.lectures);
    console.log(lectures);

    return (
        <>
            <NavBar />
            <Header />
            {
                recLectures.map((lecture, i) => {
                    return (

                        <>
                            <Lecture lecIdx = {i} lecture = {lecture} />
                        </>
                    )
                })
            }
        </>
    )
}

export default HomePage;