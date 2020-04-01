import React from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from 'actions/index'

import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

class App extends React.Component {

  renderButton() {
    const isLoggedId = this.props.auth

    if (isLoggedId) {
      return <button onClick={()=>this.props.changeAuth(false)}>Sign Out</button>
    } else {
      return <button onClick={()=>this.props.changeAuth(true)}>Sign In</button>
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/post'>Post Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path='/post' component={CommentBox}></Route>
        <Route exact path='/' component={CommentList}></Route>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, actions)(App);