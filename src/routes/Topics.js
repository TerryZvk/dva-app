import React from 'react'
import { List, Avatar } from 'antd';

class Topics extends React.Component {
  render() {
    const { topicsList, topicLoading, dispatch, history } = this.props
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
            // avatar={<Avatar src={item.author.avatar_url} />}
            title={<a href='/'>{item.title}</a>}
            description={<a href='http://www.baidu.com'>{item.content}</a>}
          />
        </List.Item>
      )}
    />
    )
  }
}

export default Topics