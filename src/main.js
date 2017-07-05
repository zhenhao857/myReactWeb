/**
 * Created by unicom on 2017-7-4.
 */
import React from 'react';
import {Menu,Breadcrumb,Icon} from 'antd';
import {BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';

import Header from './header';
import LeftAside from './leftAside'
import Login from './login';

import 'antd/dist/antd.css';
import './main.css';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="ant-layout-aside">
        <aside className="ant-layout-sider">
          <div className="ant-layout-logo"></div>
          <Header/>
          <LeftAside/>
        </aside>
        <div className="ant-layout-main">
          <div className="ant-layout-header"></div>
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
              <Breadcrumb.Item>某应用</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div style={{ height: 590 }}>
                内容区域
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">
            Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
          </div>
        </div>
      </div>
    )
  }
}

export default Home;