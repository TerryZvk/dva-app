
import React from 'react';
import { Link } from 'dva/router';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './style.css'
import { connect } from 'dva';

class LoginForm extends React.Component {

  render() {
    const { form, dispatch } = this.props;
    const { getFieldDecorator } = form;
    const handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          dispatch({
            type: 'app/login',
            payload: values
          })
        }
      });
    };
    return (
      <Form onSubmit={handleSubmit} className={styles["login-form"]}>
        <h2>登录</h2>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入你的用户名！' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码！' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住我</Checkbox>)}
          <Link className={styles["login-form-forgot"]} to="/forgetPassword">
            忘记密码
          </Link>
          <Button type="primary" htmlType="submit" className={styles['login-form-button']}>
            登录
          </Button>
          或者 <Link to="/signup">现在就去注册！</Link>
        </Form.Item>
      </Form>
    );
  }
}
export default connect()(Form.create()(LoginForm));