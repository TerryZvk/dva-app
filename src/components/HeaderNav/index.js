import { Layout, Menu, Icon } from 'antd'
import styles from './style.css'
import { Link } from 'dva/router'

const { Header } = Layout;
const HeaderNav = () => (
  <Header>
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['1']}
      className={styles['header-nav']}
    >
      <Menu.Item key="1"><Link to='/'><Icon type="home" />首页</Link></Menu.Item>
      <Menu.Item key="5" style={{float:'right'}}><Link to='/signup'>注册</Link></Menu.Item>
      <Menu.Item key="6" style={{float:'right'}}><Link to='/login'>登录</Link></Menu.Item>
    </Menu>
  </Header>
)

export default HeaderNav

