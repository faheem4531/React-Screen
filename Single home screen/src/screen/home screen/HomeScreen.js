import React from "react";
import './styleHomeScreen.css';
import Card from "../../component/card/Card";
import Header from "../../component/header/Header";
import Footer from "../../images/bottom.svg";

const HomeScreen = () => {
  return (
    <div className="home-screen">
        {
          <div className="screen-div"> 

             <div className="header-screen">
              <Header/>
              <div className="mid-div">
                <h1 className="Heading-primary">
                Scaffolding a New Economy
                </h1>
                <p className="mid-para">
                Join us with the latest blockchain innovations.
                </p>
              </div>
              <div className="cards-alignment">
                <Card/>
                <Card/>
                <Card/> 
              </div>

              </div>
           
              <div className="bottom-clip">
             <img className="clip-img"
              src={Footer}/>
                </div>   

          </div>
        }
    </div>
  )
}

export default HomeScreen