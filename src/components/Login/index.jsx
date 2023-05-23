import { Row, Col, Typography, Button } from 'antd'
import { auth } from '../../firebase/config'
const { Title } = Typography
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

export default function Login() {
    const [signInWithGoogle] = useSignInWithGoogle(auth)

    const signIn = () => {
        signInWithGoogle()
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
