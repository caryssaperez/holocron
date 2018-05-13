import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import SurveyField from './SignUpFormField';
import formFields from './signUpFormFields';
import validateEmails from '../../utils/validateEmails';
import { createUser } from '../../actions';

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

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/login');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="card">
        <form
          className="col s12 card-content"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          {this.renderFields()}
          <button
            type="submit"
            className="teal btn-flat white-text center-align"
          >
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
})(connect(null, { createUser })(SignUpForm));
