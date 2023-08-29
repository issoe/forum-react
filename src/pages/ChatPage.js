import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Level1 from '../components/comment/level1/Level1';

import SockJsClient from 'react-stomp';

const SOCKET_URL = 'http://localhost:8083/ws-message';

export default function ChatPage() {
    // const [message, setMessage] = useState(['You server message here.']);
    const [comments, setComments] = useState([])


    let onConnected = () => {
        console.log("Connected!!")
    }

    let onDisconnect = () => {
        console.log("Disconnected!")
    }

    let onMessageReceived = (msg) => {
        // setMessage(msg.message);
        // setMessage([...message, msg.content])
        // console.log(message)

        setComments([...comments, {
            comment_level: 1,
            username: 'pham',
            content: msg.content,
            comment_date: null
        }])
        console.log(comments)
    }

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
        console.log("Call api to get comments by post id_=")
    }, [])


    return (
        <div>
            <SockJsClient
                url={SOCKET_URL}
                topics={['/topic/message']}
                onConnect={onConnected}
                onDisconnect={onDisconnect}
                onMessage={msg => onMessageReceived(msg)}
                debug={false}
            />
            {/* {
                message.map(item => (
                    // console.log(item)
                    <h3>{item}</h3>
                ))
            } */}
            {
                comments.map(comment => (
                    <Level1 level={comment.comment_level} name={comment.username} comment={comment.content} />
                ))
            }
        </div>
    );
}