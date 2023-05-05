import React from "react";

const CardSec = ({ data }) => {
  return (
    <>
      <div className="FRow_card">
        <div className="FRow_cardImg">
          <img src={data.srcImg} alt="" />
        </div>
        <div className="movieName">
          <h5>{data.movieName}</h5>
        </div>
        <div className="release">
          <p>Release on:(2022)</p>
        </div>
      </div>
    </>
  );
};

export default CardSec;
