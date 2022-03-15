import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Auth from '../utils/auth';
import { ADD_GARDENER } from '../utils/mutations';
// export default function SignupForm() {


const SignupForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const [gardenerFormData, setGardenerFormData] = useState({ username: '', email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setGardenerFormData({ ...gardenerFormData, [name]: value });
    };

    const [addGardener] = useMutation(ADD_GARDENER)

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await addGardener({
                variables: { ...gardenerFormData }
            })
            Auth.login(data.addGardener.token)
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setGardenerFormData({
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}

            onSubmit={handleFormSubmit}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
              
            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                Something went wrong with your signup!
            </Alert>
            <Form.Item
                label="Name"
                name="name"
                onChange={handleInputChange}
                value={userFormData.name}
                rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                onChange={handleInputChange}
                value={userFormData.username}
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                onChange={handleInputChange}
                value={userFormData.username}
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            {/* <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >

                <Button
                    disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                    type="primary"
                    htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};


export default SignupForm;
// };




