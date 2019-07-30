import React from 'react'
import { connect } from 'dva'

class Topic extends React.Component {
  componentDidMount(){
    this.props.dispatch({
      type: 'topics/getTopicDetail',
      payload: {
        id: this.props.history.location.state.id
      }
    })
  }
  render(){
    const { topics } = this.props
    const topicDetail = topics.topicDetail || {}
    return(
      <div>
        <h3>{topicDetail.title}</h3>
        <div dangerouslySetInnerHTML={{__html: topicDetail.content}}></div>
      </div>
    )
  }
}

export default connect(({ topics }) => ({ topics }))(Topic)