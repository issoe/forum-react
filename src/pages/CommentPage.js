import axios from 'axios'
import React, { useState, useEffect } from 'react';

import Level1 from '../components/comment/level1/Level1';
import SubmitComment from '../components/comment/SubmitComment/SubmitComment';


export default function CommentPage({ post_id, post_title }) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8083/api/forum/comments-post-id/3', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => {
                setComments(res.data)
            })
            .catch(error => console.log(error))
        console.log("Call api to get comments by post id")
    }, [])

    return (
        <>
            <h3>Comment page</h3>
            <h4>Comment title: ?_{post_title}</h4>

            {
                comments.map(comment => (
                    <Level1 level={comment.comment_level} name={comment.username} comment={comment.content} />
                ))
            }

            <SubmitComment />
        </>
    )
}