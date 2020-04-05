import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './headerStyle.css'

class Header extends React.Component {

  renderLinks() {
    console.log(this.props)
    if (this.props.authenticated) {
      return (
        <div>
          <Link to='/features'>Features</Link>
          <Link to='/signout'>Sign Out</Link>
        </div>
      )
    }else{
      return(
        <div>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/signin'>Sign In</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="header">
        <Link to='/'>Redux AUTH</Link>
        {this.renderLinks()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.authenticated
});

export default connect(mapStateToProps)(Header);