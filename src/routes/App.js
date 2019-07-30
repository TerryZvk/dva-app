import React from 'react'
import { Layout } from 'antd'
import styles from './App.css'
import HeadNav from '../components/HeaderNav'

const { Content, Footer } = Layout

const App = ({children}) => (
  <Layout className="layout">
    <HeadNav />
    <Content className={styles['content']}>
      {
        children
      }
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
)

export default App