import axios from 'axios'
import React, { useState, useEffect } from 'react';
import Posts from '../components/post/Posts';
import { Link } from 'react-router-dom';



export default function ForumPage() {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8083/api/forum/topics', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => {
                setTopics(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <button>Create new post</button>
            {
                topics.map(topic => {
                    return <>
                        <h1>{topic.topicName}</h1>
                        {topic.posts.map((post, index) => (
                            
                            <p key={index}>
                                {/* Post_id: ${post} */}
                                <Link to={`/comment?topic_id=${post.postId}`}>{post.title}</Link>
                                <button>Delete</button>
                                <button>Edit</button>
                            </p>
                        ))}
                    </>
                })
            }

        </div>
    )
}