import axios from 'axios'
import React, { useState, useEffect } from 'react';

export default function CommentPage({ post_id, post_title }) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8083/api/forum/comments-post-id/1', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => {
                setComments(res.data)
            })
            .catch(error => console.log(error))
        console.log("hellodasfdsa")
    }, [])

    return (
        <>
            <h3>Comment page</h3>
            <h4>Comment title: ?_{post_title}</h4>

            {
                comments.map(comment => (
                    <div>{comment.user_id}::: {comment.content}</div>
                ))
            }
            <input type='text'></input>
        </>
    )
}