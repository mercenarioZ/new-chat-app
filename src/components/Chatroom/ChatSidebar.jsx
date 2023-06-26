import { PlusSquareOutlined } from '@ant-design/icons'
import { Button, Col, Input, Modal, Row } from 'antd'
import * as EmailValidator from 'email-validator'
import { addDoc, collection, query, where } from 'firebase/firestore'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { auth, db } from '../../firebase/config'
import RoomList from './RoomList/RoomList'
import UserInfo from './UserInfo'

const ChatSidebar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Current user's data
    const [user] = useAuthState(auth)
    // console.log({user})

    const [recipientEmail, setRecipientEmail] = useState('') // State for your opponent's email

    const isInvitingSelf = recipientEmail === user?.email

    // Query all conversations for current user
    const queryAllConvForCurrentUser = query(
        collection(db, 'conversations'),
        where('users', 'array-contains', user?.email)
    )

    const [convSnapshot] = useCollection(queryAllConvForCurrentUser)

    const isConvExisted = (recipientEmail) => {
        return convSnapshot?.docs.find((conversation) =>
            conversation.data().users.includes(recipientEmail)
        )
    }

    const handleOk = async () => {
        // Handle create chat box
        if (
            EmailValidator.validate(recipientEmail) &&
            !isInvitingSelf &&
            !isConvExisted(recipientEmail)
        ) {
            // Check 2 conditions: the email is true and do not invite myself
            // Add user to a collection in Firestore named "conversation"
            await addDoc(collection(db, 'conversations'), {
                users: [user?.email, recipientEmail],
            })
        }

        // Close the modal
        setIsModalOpen(false)
        setRecipientEmail('')
    }
    const handleCancel = () => {
        setIsModalOpen(false)
        setRecipientEmail('')
    }

    return (
        <div style={{ height: '100vh' }}>
            <Row>
                <Col span={24}>
                    <UserInfo />
                </Col>

                <Button
                    icon={<PlusSquareOutlined />}
                    style={{ margin: '5px auto' }}
                    onClick={() => setIsModalOpen(true)}
                >
                    Add room
                </Button>

                <Modal
                    title='Invite your friend'
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <Input
                        autoFocus
                        onChange={(e) => setRecipientEmail(e.target.value)}
                        value={recipientEmail}
                        placeholder='Enter Google email'
                    />
                </Modal>

                <Col span={24}>
                    <RoomList />
                </Col>
            </Row>
        </div>
    )
}

export default ChatSidebar
