import React from 'react';
import * as api from './api';
import { useState } from 'react';

const CommentAdder = ({ review_id }) => {
  const [comment, setComment] = useState(0);
<form onSubmit={(e)=>{e.preventDefault()
 api.postComment(review_id, comment).then((postedComment) => {
      setComment((currentComments) => {
          return [postedComment, ...currentComments]

      } )})
    }}
}

//   return 
//     <label htmlFor="comment">Comment</label>
//     <input type ="text"
//     id="comment"
//     value={comment}
//     onChange={(e) => {
//         setComments(e.target.value)
//     }}
//     required />

  



export default Votes;