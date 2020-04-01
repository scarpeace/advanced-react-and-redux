import React, {Component} from 'react'
import {connect} from 'react-redux'

// Aqui é um High Order Component. Reutilização de código. Muito útil pra fazer guarda de rota.
export default (ChildComponent)=>{

  class ComposedComponent extends Component{
    
    // Our component just got rendered
  componentDidMount() {
    this.shouldNavigateAway()
  }

  // Our component just got updated
  componentDidUpdate() {
    this.shouldNavigateAway()
  }

  shouldNavigateAway() {
    if (!this.props.auth) {
      this.props.history.push('/')
    }
  } 
    render(){
      // Tanking all the props that come from the parent and sending them to the child component.
      return <ChildComponent {...this.props}/>
    }
  }

  const mapStateToProps = state => ({
    auth: state.auth
  });

  return connect(mapStateToProps)(ComposedComponent);

}