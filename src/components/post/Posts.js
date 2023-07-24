import { useEffect, useState } from "react"
import axios from "axios"

import CommentPage from "../../pages/CommentPage"

export default function Posts({ topic_id }) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8083/api/forum/posts-topic/1', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => {
                setPosts(res.data)
            })
            .catch(error => console.log(error))
        console.log("Test2")
    }, [])

    return (
        <>
            {
                posts.map(post => (
                    <div>
                        <a href="https://github.com/issoe">Post: {post.post_content}</a>
                    </div>
                ))
            }
        </>
    )
}