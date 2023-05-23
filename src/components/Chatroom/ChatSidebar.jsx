import { Button, Col, Row } from 'antd'
import UserInfo from './UserInfo'
import RoomList from './RoomList/RoomList'
import {PlusSquareOutlined} from '@ant-design/icons' 

const ChatSidebar = () => {
    return (
        <div style={{ height: '100vh'}}>
            <Row>
                <Col span={24}>
                    <UserInfo />
                </Col>

                <Button icon={<PlusSquareOutlined />} style={{margin: '5px auto'}}>Add new</Button>
                
                <Col span={24}>
                    <RoomList />
                </Col>
            </Row>
        </div>
    )
}

export default ChatSidebar
