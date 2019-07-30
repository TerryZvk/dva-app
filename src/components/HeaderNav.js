import { Layout, Menu } from 'antd'
import styles from './style.css'
const { Header } = Layout;
const HeaderNav = () => (
  <Header>
    <div className={styles['logo']}>
      <a href='/'>
        <img src='./cnodejs_light.svg' alt='logo' />
      </a>
    </div>
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['1']}
      className={styles['header-nav']}
    >
      <Menu.Item key="1">首页</Menu.Item>
      <Menu.Item key="2">新手入门</Menu.Item>
      <Menu.Item key="3">API</Menu.Item>
      <Menu.Item key="4">关于</Menu.Item>
      <Menu.Item key="5">注册</Menu.Item>
      <Menu.Item key="6">登录</Menu.Item>
    </Menu>
  </Header>
)

export default HeaderNav

