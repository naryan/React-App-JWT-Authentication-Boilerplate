import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';


class Signup extends Component {
  // Our onSubmit function in reduxForm first argument
  // the properties that the user has submitted from the form
  onSubmit = formProps => {
    console.log(formProps)
  }

  render(){
    // We are getting the handleSubmit function from reduxForm
    const { handleSubmit } = this.props;

    return (
      // handleSubmit takes a function to call
      // When the user submits this form
      <form onSubmit={handleSubmit(this.onSubmit)}>
        {/*A fieldset is used to wrap a group of fields*/}
        <fieldset>
          <label>Email</label>
          <Field
            name='email'
            type='text'
            component='input'
            autoComplete='none'/>
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name='password'
            type='password'
            component='input'
            autoComplete='none'/>
        </fieldset>
      </form>
    )
  }
}


// Redux form takes an options object.
// The first key will be what you want to name the form

export default reduxForm({ form: 'signup' })(Signup);