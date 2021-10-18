import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3001');

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
        <React.Fragment>
            {list.map((el, i) => {
                return (
                    <div style={{backgroundColor: el.sender === user.email ? 'blue' : 'green', color: 'white'}} key={i}>
                        <p>{el.sender}:{el.message}</p>
                    </div>
                )
            })}
            <textarea className="border-2" onChange={messageHandler} />
            <button onClick={sendMessage}>Send</button>
        </React.Fragment>
    )
}

export default ChatPage;