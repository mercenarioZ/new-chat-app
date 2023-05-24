import { UserAddOutlined } from '@ant-design/icons'
import { Avatar, Button, Form, Input, Tooltip } from 'antd'
import './ChatWindow.css'
import Message from '../Message'

const ChatWindow = () => {
    return (
        <div className='wrapper'>
            <div className='header'>
                <div className='header-name'>Box chat name</div>
                <div className='header-features'>
                    <Button icon={<UserAddOutlined />}>Invite</Button>
                    <Avatar.Group maxCount={2}>
                        <Tooltip title='Nguyen Vu'>
                            <Avatar>A</Avatar>
                        </Tooltip>
                        <Tooltip title=''>
                            <Avatar>B</Avatar>
                        </Tooltip>
                        <Tooltip title=''>
                            <Avatar>C</Avatar>
                        </Tooltip>
                        <Tooltip title=''>
                            <Avatar>N</Avatar>
                        </Tooltip>
                        <Tooltip title=''>
                            <Avatar>V</Avatar>
                        </Tooltip>
                    </Avatar.Group>
                </div>
            </div>

            <div className='message-box'>
                <div className='message-list'>
                    <Message
                        message='hello'
                        displayName='Nguyen Vu'
                        time='1234543543'
                    />
                    <Message
                        message='hello'
                        displayName='Nguyen Vu'
                        time='1234543543'
                    />
                    <Message
                        message='hello'
                        displayName='Nguyen Vu'
                        time='1234543543'
                    />
                </div>
                <Form className='form'>
                    <Form.Item>
                        <Input
                            size='large'
                            className='input'
                            placeholder='Type your message'
                        />
                        <Button
                            size='large'
                            className='send-btn'
                            type='primary'
                        >
                            Send
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default ChatWindow
