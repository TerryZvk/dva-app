import React from 'react'
import { Layout, Menu, Tabs } from 'antd';
import Topics from './Topics'
import styles from './App.css';
import { connect } from 'dva';

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;
const tabsArr = [
  { tab: '全部', key: 'all' },
  { tab: '精华', key: 'good' },
  { tab: '分享', key: 'share' },
  { tab: '问答', key: 'ask' },
  { tab: '招聘', key: 'job' },
  { tab: '客户端测试', key: 'dev' }
]

class App extends React.Component {
 
  state = { activeKey: 'all' }
  
  render() {
    const { topics, loading, dispatch } = this.props
    const { activeKey } = this.state
    const topicLoading = loading.effects['topics/queryTopics']
    const topicsList = topics.topicsList || []
    const callback = (key) => {
      this.setState({
        activeKey: key
      })
      this.props.dispatch({
        type: 'topics/queryTopics',
        payload: {
          tab: key,
          page: 1
        }
      })
    }

    const topicProps = {
      topicLoading,
      topicsList,
      dispatch,
      activeKey
    }
    
    return (
      <Layout className="layout">
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
        <Content className={styles['content']}>
          <Tabs defaultActiveKey="all" onChange={callback}>
            {
              tabsArr.map(item => 
                <TabPane tab={item.tab} key={item.key}>
                  <Topics {...topicProps} />
                </TabPane>
              )
            }
          </Tabs>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
}

export default connect(({ topics, loading }) => ({ topics, loading }))(App)