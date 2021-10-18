import React from 'react'

import './../css/style.css'

function Chat(props) {
    return (
        <div className="flex flex-col">
            <div className={`chat_s flex flex-col my-3 ${props.email === props.sender ? 'self-end' : 'self-start'}`}>
                <div className={`rounded-lg text-black ${props.email === props.sender ? 'bg-blue-300' : 'bg-green-300'}`}>
                    <p className="p-2">{props.message}</p>
                </div>
                <p className="self-end">{props.sender}</p>
            </div>
        </div>
    )
}

export default Chat
