import React from 'react'
import { List } from 'antd';
import { connect } from 'dva';

class Topics extends React.Component {
  render() {
    const { topics, loading, dispatch } = this.props
    const topicLoading = loading.effects['topics/queryTopics']
    const topicsList = topics.topicsList || []
    return (
      <List
      pagination={{
        onChange: page => {
          dispatch({
            type: 'topics/queryTopics',
            payload: {
              page,
              per_page: 10
            }
          })
        },
        pageSize: 10,
        total: topicsList.total
      }}
      loading={topicLoading}
      itemLayout="horizontal"
      dataSource={topicsList.list}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<a href='/'>{item.title}</a>}
            description={<a href='http://www.baidu.com'>{item.content}</a>}
          />
        </List.Item>
      )}
    />
    )
  }
}

export default connect(({ topics, loading }) => ({ topics, loading }))(Topics)