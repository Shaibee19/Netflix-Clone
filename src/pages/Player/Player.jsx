import React, { useEffect, useState } from "react"
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from "react-router-dom";

const Player = (props) => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "", 
    key: "",
    published_at: "",
    type: ""
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmFlOTJjYTI0YTJjZDIyYmZmNDE1ZjM3ZTM1NTRjYyIsIm5iZiI6MTc2ODkxODE0Ny44OTY5OTk4LCJzdWIiOiI2OTZmOGM4MzE0OGEwOGY2YmZmMmI4OTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VhN0PWgQT2WuqU4mNJIWtmRSbE__X7tLUexMsXDy1Xs'
  }
};

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
},[])

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate('/')}} />
      <iframe width='90%' height='90%' 
      src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameborder="0" allowFullScreen></iframe>
      <div className="player__info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
};

export default Player;
