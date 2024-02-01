import { useEffect, useState } from 'react';

import {Button, Divider, Form, Input, Layout} from 'antd';

import { useAuth } from '../../../../adapters/appService/auth.service';
import useForm from '../../../../hooks/useForm';
import Card from '../../../shared/card';
import './Login.less';
import { useNavigate } from 'react-router-dom';

import Logo from '../../../assets/images/logo.svg';

function Login() {
  const { login, checkSession } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (values: any) => {
    try {
      const body = {
        username: values.username,
        password: values.password,
      };
      await login(body);
    } catch (err: any) {}
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  // useEffect(() => {
  //   checkSession().then(() => {
  //     navigate(ROUTE.DASHBOARD);
  //   });
  // }, []);

  const [form] = Form.useForm();
  const { handleSubmit, isSubmitting } = useForm(form, handleLogin);

  return (
    <Layout className="cms-layout-app cms-layout-app-login">
      <Card className="card-form-login" bodyClassName="card-form-login__body">
        <div className="logo-login-container">
          <img className="logo-login" src={Logo} />
        </div>
        <Divider />
        <div className="layout-form-login">
          <Form
            form={form}
            name="basic"
            layout={'vertical'}
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              label={'Tên đăng nhập'}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng không để trống',
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Nhập tên đăng nhập"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label={'Mật khẩu'}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng không để trống',
                },
              ]}
            >
              <Input
                size="large"
                type="password"
                placeholder="Nhập mật khẩu"
              />
            </Form.Item>
            <Form.Item className="mb-0">
              <Button
                type="primary"
                htmlType="submit"
                className="login-button"
                loading={isSubmitting}
                disabled={isSubmitting || loading}
              >
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </Layout>
  );
}

export default Login;
