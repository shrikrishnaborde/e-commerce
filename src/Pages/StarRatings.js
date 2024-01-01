import React from 'react'
import { FaStar } from "react-icons/fa";

function StarRatings({activeStars}) {
  return (
    <>
        <div>StarRatings</div>
        <div>
        {[...new Array(5)].map(( arr,index) => {
            return index < activeStars.rate ? <FaStar color = "#ffa300" size ={15}/> : <FaStar color = "black" size ={15}/>;
        })}
      {' '}
        <span>{activeStars.count}</span>
        </div>
    </>

  )
}

export default StarRatings
