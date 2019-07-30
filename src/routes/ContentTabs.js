import React from 'react'
import { Tabs } from 'antd';
import Topics from './Topics'
import { connect } from 'dva';
import { TABS_ARR as tabsArr } from '../utils/config'

const { TabPane } = Tabs;


class ContentTabs extends React.Component {

  state = { activeKey: 'all' }

  render() {
    const { topics, loading, dispatch, history } = this.props
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
      activeKey,
      history
    }

    return (
      <Tabs defaultActiveKey="all" onChange={callback}>
        {
          tabsArr.map(item =>
            <TabPane tab={item.tab} key={item.key}>
              <Topics {...topicProps} />
            </TabPane>
          )
        }
      </Tabs>
    )
  }
}

export default connect(({ topics, loading }) => ({ topics, loading }))(ContentTabs)