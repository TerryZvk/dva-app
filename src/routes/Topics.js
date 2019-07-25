import React from 'react'
import { connect } from 'dva'

class Topics extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'topics/queryTopics'
    })
  }
  render() {
    const { topics } = this.props
    const topicsList = topics.topicsList || []
    return (
      <div>
        {
          topicsList.map(item => (
            <div key={item.id}>
              <div>{item.title}</div>
              {/* <div>{item.content}</div> */}
              <div>{item.author.loginname}  {item.create_at}</div>
            </div>
            )
          )
        }
      </div>
    )
  }
}

export default connect(({ topics }) => ({
  topics,
}))(Topics)