/**
 * Created by unicom on 2017-7-4.
 */
import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './login.css'

const FormItem = Form.Item;

class Login extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    //   redirectToReferrer : false
    // }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        sessionStorage.setItem('onLogin',true);
        this.props.history.push("/home");
      }
    });
    // this.props.history.push("/home");
  };
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input style={{ width: 300 }} prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="UserName123" onChange={e=>{this.setState({userName:e.target.value})}}/>
            )}
          </FormItem>
          <FormItem style={{marginBottom:4}}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input style={{ width: 300 }} prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem style={{marginBottom:4}}>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot">Forgot password</a>
          </FormItem>
          <FormItem style={{marginBottom:4}}>
            <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <a>register now!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}

Login = Form.create()(Login);

export default Login;