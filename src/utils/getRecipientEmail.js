// Get the recipient's email
export const getRecipientEmail = (conversationUsers, loggedInUser) => conversationUsers.find(userEmail => userEmail !== loggedInUser?.email)
