import React from 'react'
import LoginForm from '../../components/nav/LoginForm'
import { Modal, Button } from 'antd';
import { useState } from 'react';
import './home.css'

export default function LoginFormButton() {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <Button className="login-btn" type="primary" onClick={() => setVisible(true)}>
                Login
            </Button>
            <Modal
                bodyStyle={{
                    backgroundColor: 'rgb(228, 175, 77)',
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}
                title="Get back to being shelfish!"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={800}
            >
                < LoginForm />
            </Modal>
        </div>
    )
}
