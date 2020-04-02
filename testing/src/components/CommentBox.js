import React, { Component } from 'react'
import * as actions from 'actions'
import { connect } from 'react-redux'
import requireAuth from 'components/requireAuth'

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
    this.setState({ comment: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h4>Add a Comment</h4>
          <textarea cols="30" rows="5" value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className='fetch-comments' onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    )
  }
}

// Double composing. Adding redux and RequireAuth.
export default connect(null, actions)(requireAuth(CommentBox));
