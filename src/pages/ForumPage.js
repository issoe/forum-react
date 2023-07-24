import axios from 'axios'
import React, { useState, useEffect } from 'react';
import Posts from '../components/post/Posts';


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
                topics.map(topic => (
                    <>
                        <h1>Topic: {topic.topic_name}</h1>
                        <Posts topic_id={topic.topic_id} />
                    </>
                ))
            }

        </div>
    )
}