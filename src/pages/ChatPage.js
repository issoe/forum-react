import React, { useState } from 'react';
import SockJsClient from 'react-stomp';

const SOCKET_URL = 'http://localhost:8083/ws-message';

const messages = [
    {
        name: "message sample 1"
    }, {
        name: "message sample 2"
    }

]

export default function ChatPage() {
    const [message, setMessage] = useState('You server message here.');

    let onConnected = () => {
        console.log("Connected!!")
    }

    let onMessageReceived = (msg) => {
        setMessage(msg.message);
        messages.push({name: "hello--"})
        console.log(messages)
    }

    return (
        <div>
            <SockJsClient
                url={SOCKET_URL}
                topics={['/topic/message']}
                onConnect={onConnected}
                // onDisconnect={console.log("Disconnected!")}
                onMessage={msg => onMessageReceived(msg)}
                debug={false}
            />

            <div>
                {
                    messages.map(message => (
                        <h4>{message.name}</h4>
                    ))
                }
            </div>
        </div>
    );
}