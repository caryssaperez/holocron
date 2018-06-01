import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import SurveyField from '../shared/FormField';
import formFields from './loginFormFields';

class LoginForm extends Component {
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
    // Add POST to login route
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
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'loginForm'
})(connect(null)(LoginForm));
