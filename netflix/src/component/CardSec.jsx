import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";


const CardSec = ({ movie }) => {
  return (
    <>
    {/* <Router> */}
      <div className="FRow_card">
        <div className="FRow_cardImg">
          <img src={movie.large_cover_image} alt="" />
        </div>
        <div className="movieName">
          <h5>{movie.title_english}</h5>
        </div>
        <div className="release">
          <p>Release on:{movie.year}</p>
        </div>  

        {/* <ul>
          <li><Link to="/">{movie.url}</Link></li>
        </ul>
       
        <Routes>
        <Route path="/" element={movie.url}/>
        </Routes> */}
        </div>
     
      {/* </Router> */}
    </>
  );
};

export default CardSec;
