import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import io from 'socket.io-client'
import styled from 'styled-components'

import Chat from './../components/Chat'

const socket = io.connect('http://localhost:3001');

const ChatList = styled.div`
    width: 80%;
    margin: auto;
`

const Wrapper = styled.div`
    margin: 1rem 0 0 0;
`

const ChatPage = props => {
    const user = useSelector(state => state.user);
    const [list, setList] = useState([]);
    const [message, setMessage] = useState('')

    const messageHandler = e => {
        setMessage(e.target.value)
    }

    useEffect(() => {
        async function sockets() {
            console.log(props.location.state.room)
            await socket.emit('join', props.location.state.room);
            await socket.on('send_room_message', data => {
                setList(state => [...state, ...data])
            })
        }
        sockets()
        return () => {
            setList([])
        }
    }, [])

    useEffect(() => {
        socket.on('receive', data => {
            setList(state => [...state, data])
        });
    }, [socket])

    const sendMessage = async () => {
        const forServer = {
            sender: user.email,
            room: props.location.state.room,
            message
        }
        await socket.emit('send', forServer)
        setList(state => [...state, forServer])
        setMessage("")
    }

    return (
        <Wrapper>
            <p className="text-center my-4 font-bold text-2xl">Chat Page</p>
            {list.map((el, i) => {
                return (
                    <ChatList key={i}>
                        <Chat {...user} {...el}/>
                    </ChatList>
                )
            })}
            <div className="flex justify-center my-8">
                <textarea className="w-64 h-20 self-center border-2" onChange={messageHandler} />
                <button className="bg-blue-300 w-8" onClick={sendMessage}>+</button>
            </div>
        </Wrapper>
    )
}

export default ChatPage;