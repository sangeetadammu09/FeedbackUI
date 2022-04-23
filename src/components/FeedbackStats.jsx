import React from 'react'
//import PropTypes from 'prop-types';
import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
     const {feedback} = useContext(FeedbackContext)
    //calculate rating average for all feedbacks

    let average = feedback.reduce((acc, cur )=>{
          //console.log(acc.rating, cur.rating)
          return acc + +cur.rating
    }, 0) / feedback.length
    
    average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        {/* <h4>Average Rating : {isNaN(average) ? 0 : average}</h4> */}
        <h4>Average Rating :  {average}</h4>
    </div>
  )
}

// FeedbackStats.protoTypes ={
//   feedback:PropTypes.array.isRequired
// }

export default FeedbackStats