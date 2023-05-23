import { UserAddOutlined } from '@ant-design/icons'
import { Avatar, Button, Tooltip } from 'antd'
import './ChatWindow.css'

const ChatWindow = () => {
    return (
        <div className='header'>
            <div className='header__name'>Box chat name</div>
            <div className='header__features'>
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
    )
}
export default ChatWindow
