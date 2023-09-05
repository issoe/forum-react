import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Level1 from '../components/comment/level1/Level1';
import { useLocation } from 'react-router-dom';
import SubmitComment from '../components/comment/SubmitComment/SubmitComment';

import SockJsClient from 'react-stomp';

const SOCKET_URL = 'http://localhost:8083/ws-message';

export default function ChatPage() {
    // const [message, setMessage] = useState(['You server message here.']);
    const [comments, setComments] = useState([])

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const topicId = searchParams.get('topic_id');

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
        console.log("Msg", msg)

        setComments([...comments, {
            comment_level: msg.comment_level,
            username: msg.username,
            content: msg.content,
            comment_date: msg.comment_date
        }])
        console.log(comments)
    }

    useEffect(() => {
        axios.get(`http://localhost:8083/api/forum/comments/${topicId}`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => {
                console.log(res.data)
                setComments(res.data.comments)
            })
            .catch(error => console.log(error))
        console.log("Call api to get comments by post id_=")
    }, [])

    return <>
        {topicId ?
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
                {console.log("List comment", comments)}
                {

                    comments
                        .filter(comment => comment.post_id == {topicId})
                        .map(comment => (
                        <Level1 level={comment.comment_level} name={comment.username} comment={comment.content} />
                    ))
                }
            </div> : <>Có 1 sự thiếu soát topic_id ở đây rồi</>
        }
        <SubmitComment />
    </>
    // return <p>Topic ID: {topicId}</p>;

}