import { Row, Col, Typography, Button } from 'antd'

const { Title } = Typography

export default function Login() {
    return (
        <div>
            <Row justify='center' style={{height: '80vh'}}>
                <Col span={8}>
                    <Title level={1} style={{ textAlign: 'center' }}>
                        Login
                    </Title>

                    <Button style={{ width: '100%', marginBottom: 5 }}>
                        Login with Google
                    </Button>
                </Col>
            </Row>
        </div>
    )
}
