/**
 * Created by unicom on 2017-7-5.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import {Menu,Dropdown,Button,Modal,Icon} from 'antd';
import 'antd/dist/antd.css';
// import { connect } from 'react-redux';

// import { Link, hashHistory } from 'react-router'

const confirm = Modal.confirm;

// connect(
//   (state, props) => ({ config: state.config })
// );

 class Header extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       staff:{
         name:'haozhen',
       }
     };
     // this.logout = this.logout.bind(this);
   }

   logout = ()=>{
     sessionStorage.setItem('onLogin',false);
     confirm({
       title:'提示',
       content: '确认退出登录吗？',
       onOk() {
         // this.props.history.push("/login");
       }
     });

   };

   render(){
     const staff = this.state.staff;
     const privateMenu = (
       <Menu className="nav-dropmenu">
         <Menu.Item key="0">
           <span className="label">所属单位</span><span>{staff.name}</span>
         </Menu.Item>
         <Menu.Divider />
         <Menu.Item key="1">
           <span className="label">用户姓名</span><span>{staff.name}</span>
         </Menu.Item>
         <Menu.Item key="5">
           <Button type="primary" size="small" onClick={this.logout}>退出登录</Button>
         </Menu.Item>
       </Menu>
     );
     return(
     <header className="main-header">
       <div className="main-header-content">
       <div   className="main-header-home">
         <Link to={'/home'} className="navbar-brand">
           <div className="brand-title">
             <span className="brand-text">unicom</span>
           </div>
         </Link>
       </div>
       <div className="navbar-user">
         <Dropdown overlay={privateMenu} trigger={['click']}>
           <a className="ant-dropdown-link">{staff.username || 'unicom'}</a>
         </Dropdown>
       </div>
       </div>
     </header>

     );
   }
 }
  export default Header;