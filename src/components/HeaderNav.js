import { Layout, Menu, Icon } from 'antd'
import styles from './style.css'
const { Header } = Layout;
const HeaderNav = () => (
  <Header>
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['1']}
      className={styles['header-nav']}
    >
      <Menu.Item key="1"><Icon type="home" />首页</Menu.Item>
      <Menu.Item key="5" style={{float:'right'}}>注册</Menu.Item>
      <Menu.Item key="6" style={{float:'right'}}>登录</Menu.Item>
    </Menu>
  </Header>
)

export default HeaderNav

