import './Chatbox.css'

const Chatbox = () => {
    return (
        <div
            onClick={() => {
                console.log('Clicked on chatbox')
            }}
            className='chat-box'
        >
            <p className='chat-name'>Chat</p>
        </div>
    )
}

export default Chatbox
