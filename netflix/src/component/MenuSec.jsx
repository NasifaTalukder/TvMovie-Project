import React from "react";
import TvMovielogo from "../assets/TvMovie logo.png";
const MenuSec=()=>{
    return(
        <>
        <div className="menuSec">
            <div className="menuLogo">
              <img src={TvMovielogo} alt="TvMovie logo" />
            </div>
            <div className="menu">
              <nav>
              <ul>
                <li><a href="#">New</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Cartoons</a></li>
                <li><a href="#">Series</a></li>
              </ul>
              </nav>
              
            </div>
            <div className="menuicon">
            <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div className="menuCompo">
            <i className="fa fa-search" aria-hidden="true"></i>
            <i className="fa fa-bell-o" aria-hidden="true"></i>
            </div>
          </div>
        </>
    )
}
export default MenuSec;