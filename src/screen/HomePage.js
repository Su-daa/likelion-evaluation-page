import React from "react"
import Header from "../components/Header"
import Home from "../components/Home"
import NavBar from "../components/NavBar"



function HomePage (){
    return(
        <>
        <NavBar/>
        <Header />
        <Home />
        </>
    )
}

export default HomePage;