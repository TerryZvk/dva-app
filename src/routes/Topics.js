import React from 'react'
import { List, Avatar } from 'antd';

class Topics extends React.Component {
  render() {
    const { topicsList, topicLoading, dispatch, activeKey } = this.props
    return (
      <List
      pagination={{
        onChange: page => {
          dispatch({
            type: 'topics/queryTopics',
            payload: {
              page,
              tab: activeKey
            }
          })
        },
        pageSize: 10
      }}
      loading={topicLoading}
      itemLayout="horizontal"
      dataSource={topicsList}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.author.avatar_url} />}
            title={<a href='/'>{item.author.loginname}</a>}
            description={<a href='/'>{item.title}</a>}
          />
        </List.Item>
      )}
    />
      // <div>
      //   {
      //     topicsList.map(item => (
      //       <div key={item.id}>
      //         <div>{item.title}</div>
      //         {/* <div>{item.content}</div> */}
      //         <div>{item.author.loginname}  {item.create_at}</div>
      //       </div>
      //       )
      //     )
      //   }
      // </div>
    )
  }
}

export default Topics