
import React from 'react';
import { useLocation } from 'react-router-dom';


export default function CommentPage() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const topicId = searchParams.get('topic_id');
  
    return <p>Topic ID: {topicId}</p>;
}


// import axios from 'axios'
// import React, { useState, useEffect } from 'react';
// // import { useLocation } from 'react-router-dom'

// import Level1 from '../components/comment/level1/Level1';
// import SubmitComment from '../components/comment/SubmitComment/SubmitComment';
// import { useStoreLocal } from '../store';


// export default function CommentPage() {
//     const [comments, setComments] = useState([])
//     // const location = useLocation()

//     const post_id = useStoreLocal(state => state.post_id);
//     const post_title = useStoreLocal(state => state.post_title);

//     useEffect(() => {
//         axios.get(`http://localhost:8083/api/forum/comments/${post_id}`, {
//             headers: {
//                 'Access-Control-Allow-Origin': '*'
//             }
//         })
//             .then(res => {
//                 // console.log("test", res.data.comments)
//                 setComments(res.data.comments)
//             })
//             .catch(error => console.log(error))
//         console.log("Call api to get comments by post id ___")
//     }, [])

//     return (
//         <>
//             <h3>Comment page</h3>
//             <h4>Comment title: ?_{post_title}</h4>

//             {
//                 comments.map(comment => (
//                     <Level1 level={comment.comment_level} name={comment.username} comment={comment.content} />
//                 ))
//             }

//             <SubmitComment />
//         </>
//     )
// }