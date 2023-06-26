import { Row, Col, Typography, Button } from 'antd'
import { auth, db } from '../../firebase/config'
const { Title } = Typography
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'

export default function Login() {
    const [signInWithGoogle] = useSignInWithGoogle(auth)

    const signIn = async () => {
        try {
            const userData = await signInWithGoogle()
            console.log('[userData]', { userData })
            const user = userData.user

            // Create/reference to database in Firestore
            const docRef = doc(db, 'users', user?.email)
            await setDoc(
                docRef,
                {
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    uid: user.uid,
                    lastLogin: serverTimestamp(),
                },
                { merge: true } // Just override params which has been modified.
            )
        } catch (error) {
            console.error('Error signing in: ', error)
        }
    }

    return (
        <div>
            <Row align='middle' justify='center' style={{ height: '80vh' }}>
                <Col span={8}>
                    <Title level={1} style={{ textAlign: 'center' }}>
                        Login to Chat app
                    </Title>

                    <Button
                        style={{
                            height: 'auto',
                            fontSize: '1.5rem',
                            width: '100%',
                        }}
                        onClick={signIn}
                    >
                        Login with Google
                    </Button>
                </Col>
            </Row>
        </div>
    )
}
