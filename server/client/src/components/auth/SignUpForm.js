import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import SurveyField from './SignUpFormField';
import formFields from './signUpFormFields';
import validateEmails from '../../utils/validateEmails';

class SignUpForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, type }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type={type}
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div className="card">
        <form className="col s12 card-content">
          {this.renderFields()}
          <button type="submit" className="teal btn-flat white-text center">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.email = validateEmails(values.email || '');

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'signUpForm'
})(SignUpForm);
