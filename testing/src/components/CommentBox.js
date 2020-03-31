import React, { Component } from 'react'
import * as actions from 'actions'
import {connect} from 'react-redux'

class CommentBox extends Component {
  state = {
    comment: ''
  }

  handleChange = (e) => {
    this.setState({ comment: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    // TODO - Call an action creator
    // And save the comment
    this.props.saveComment(this.state.comment)
    // Reseting the form
    this.setState({comment:''})
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h4>Add a Comment</h4>
        <textarea cols="30" rows="5" value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  }
}

export default connect(null,actions)(CommentBox);
