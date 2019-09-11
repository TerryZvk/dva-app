
import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
import styles from './style.css'
import { connect } from 'dva'
import { Link } from 'dva/router'

class SignupForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleConfirmBlur = e => {
    const { value } = e.target
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不一致！')
    } else {
      callback()
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }

  render() {
    const { form, dispatch, history } = this.props
    const { getFieldDecorator } = form
    const handleSubmit = e => {
      e.preventDefault()
      form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      });
    };
   
    return (
      <Form onSubmit={handleSubmit} className={styles["signup-form"]}>
        <h2>注册</h2>
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入你的用户名！' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: '请输入你的邮箱！' }],
          })(
            <Input
              prefix={<Icon type="message" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入邮箱"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: '请输入密码！' },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(
            <Input.Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('confirm', {
            rules: [
              { required: true, message: '请确认密码！' },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(
            <Input.Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请确认密码"
              onBlur={this.handleConfirmBlur}
            />,
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit" style={{marginRight:20}}>
            注册
        </Button>
        已有账号？ <Link to="/login">去登录！</Link>
      </Form>
    )
  }
}
export default connect()(Form.create()(SignupForm))