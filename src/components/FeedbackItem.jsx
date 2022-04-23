import React from 'react'
import Card from './shared/Card'
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {
    // console.log(item)
//   const [rating, setRating]= useState(7)
//   const [text, setText] = useState('This is feedback item')
//   const handleClick = () => {
//       setRating( (prev)=>{
//          console.log(prev)
//          return prev+1;
//       } 

//       )
//   }

    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card reverse={false}>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
            <FaTimes color="purple" />
        </button>
        <button onClick={() => editFeedback(item)} className="edit">
            <FaEdit color="purple" />
        </button>
        <div className="text-display">
            {item.text}
        </div>
        {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

export default FeedbackItem