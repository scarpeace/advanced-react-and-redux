import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'

class SignIn extends Component {

  // O formProps vem automaticamente aqui com os dados do formulário
  onSubmit = (formProps) => {
    console.log(formProps)
    this.props.signIn(formProps, ()=>{this.props.history.push('/')})
  }

  render() {

    // Eu acho que aqui a gente tá sobreescrevendo o handle submit que tá vindo to Redux Form
    const { handleSubmit } = this.props

    return (

      // Não colocar parenteses aqui pra função não ser executada quando o componente renderizar na tela
      <form onSubmit={handleSubmit(this.onSubmit)} >
        <fieldset>
          <label>Email</label>
          {/* A prop COMPONENT fala pro React qual tipo de Field renderizar */}
          <Field name='email' type='text' component='input' autoComplete='off' />
        </fieldset>

        <fieldset>
          <label>Password</label>
          <Field name='password' type='password' component='input' autoComplete='off' />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign In</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  errorMessage: state.auth.errorMessage
});

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(SignIn)