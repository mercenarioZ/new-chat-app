import { Avatar } from 'antd'
import './Chatbox.css'

const Chatbox = () => {
    return (
        <div
            onClick={() => {
                console.log('Clicked on chatbox')
            }}
            className='chat-box'
        >
            <Avatar className='chat-avatar' src={null}>C</Avatar>
            <p className='chat-name'>Chat</p>
        </div>
    )
}

export default Chatbox
