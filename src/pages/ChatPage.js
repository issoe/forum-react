import React, { useState } from 'react';
import SockJsClient from 'react-stomp';

const SOCKET_URL = 'http://localhost:8083/ws-message';

// const messages = [
//     {
//         name: "message sample 1"
//     }, {
//         name: "message sample 2"
//     }
// ]

export default function ChatPage() {
    const [message, setMessage] = useState(['You server message here.']);

    let onConnected = () => {
        console.log("Connected!!")
    }

    let onDisconnect = () => {
        console.log("Disconnected!")
    }

    let onMessageReceived = (msg) => {
        // setMessage(msg.message);
        setMessage([...message, msg.message])
        console.log(message)
    }

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
            {
                message.map(item => (
                    // console.log(item)
                    <h3>{item}</h3>
                ))
            }
            hello
        </div>
    );
}