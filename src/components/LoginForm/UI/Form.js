import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

const Form = ({ setLogin }) => {
  return (
    <Formik
      initialValues={{ login: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setLogin('test');
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="login"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.login}
          />
          <button type="submit">Change login</button>
        </form>
      )}
    </Formik>
  );
};

Form.propTypes = {};
Form.defaultProps = {};

export default Form;
