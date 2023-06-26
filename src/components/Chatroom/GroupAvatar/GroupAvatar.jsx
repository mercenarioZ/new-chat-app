/* eslint-disable react/prop-types */
import { Avatar } from 'antd'

// eslint-disable-next-line react/prop-types
const RecipientAvatar = ({ recipient, recipientEmail }) => {
    return recipient?.photoURL ? (
        <Avatar src={recipient.photoURL} />
    ) : (
        <Avatar>{recipientEmail && recipientEmail[0].toUpperCase()}</Avatar>
    )
}

export default RecipientAvatar
