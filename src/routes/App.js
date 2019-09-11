import React from 'react'
import { Layout } from 'antd'
import styles from './App.css'
import HeadNav from '../components/HeaderNav/'
import { openPages } from '../utils/config'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
const { Content, Footer } = Layout

const App = ({children, location}) => (
  openPages.includes(location.pathname) ? children : <Layout className="layout">
    <HeadNav />
    <Content className={styles['content']}>
      {
        children
      }
    </Content>
    <Footer style={{textAlign:'center',position:'fixed',width:'100%',bottom:'0' }}>Tao's 部落格，一些好玩的</Footer>
  </Layout>
)

export default withRouter(connect(({ app, loading }) => ({app, loading}))(App))
