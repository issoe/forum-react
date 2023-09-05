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
        console.log("test")
    }, [])

    return (
        <div>
            {
                topics.map(topic => {
                    // console.log(topic.posts)


                    return <>
                        <h1>{topic.topicName}</h1>
                        {topic.posts.map((post, index) => (
                            <p key={index}>
                                <Link to={`/comment?post_id=${post.post_id}`}>{post.title}</Link>
                            </p>
                        ))}
                    </>
                })
            }

        </div>
    )
}
