import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import formFields from './signUpFormFields';

class SignUpForm extends Component {
  render() {
    return 'this form';
  }
}

export default reduxForm({
  validate,
  form: 'signUpForm'
})(SignUpForm);
