import React, { useState,useEffect} from "react";
import "./App.css";
import MenuSec from "./component/MenuSec";
import HeroSec from "./component/HeroSec";
import CardSec from "./component/CardSec";
import DataSheet from "./server/DataSheet";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RotatingLines } from  'react-loader-spinner'
import ClipLoader from "react-spinners/ClipLoader";


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

function App() {  
  let[movies,setMovies]=useState([]);
  let [loading, setLoading] = useState(false);
    const GetMovie=async()=>{
      setLoading(true)
      
        const Response=await fetch("https://yts.mx/api/v2/list_movies.json")
        .then(res => res.json()) 
          
          setTimeout(()=>{
            setMovies(Response.data.movies); 
            setLoading(false)
          },2000)
  } 
  useEffect(()=>{
    GetMovie();
  },[])
 
  return (
    <> 
      <div className="main_wrapper">
        <div className="wrapper">
          <div className="container">
         
            
            <MenuSec />
            <HeroSec />
            <div className="cardSec">
              <div className="cardWrapper">
                <div className="topRate_heading">
                  <h3>Tranding Now</h3>
                </div>
                 {
            loading&&(            
            <ClipLoader name="line-scale-pulse-out" color="blue"/>           
            )}
                <div className="topRate_card">
                  <Carousel responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={1000} 
                  transitionDuration={500}
                  >  
                    {movies.map((movie) => (
                      <CardSec movie={movie} />
                    ))}
                  </Carousel>
                  ;
                  </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}
export default App;
