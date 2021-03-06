import LoginForm from './LoginForm'
import { Modal, Button } from 'antd';
import { useState } from 'react';

export default function LoginFormButton() {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Button  type="primary" onClick={() => setVisible(true)}>
                Login
            </Button>
            <Modal
                className="form"
                title="Get back to being shelfish!"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={600}
            >
                < LoginForm />
            </Modal>
        </>
    )
}
