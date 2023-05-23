import { Col, Row } from "antd"
import ChatSidebar from "./ChatSidebar"
import ChatWindow from "./ChatWindow/ChatWindow"

const Chatroom = () => {
    return <div style={{overflowY: 'hidden'}}>
        <Row>
            <Col style={{borderRight: '1px solid whitesmoke', height: '100vh'}} span={4}><ChatSidebar /></Col>
            <Col span={20}><ChatWindow /></Col>
        </Row>
    </div>
}

export default Chatroom
