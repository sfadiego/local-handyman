import { FormikProps } from 'formik';
import React from 'react';

interface CheckboxProps<T> {
  className?: string;
  name: string;
  children: React.ReactNode;
  formik?: FormikProps<T>;
}

export const Checkbox = <T extends object>(props: CheckboxProps<T>) => {
  const { name, children, formik, className = '' } = props;
  const classNames = `${className != '' ? className : 'check-row fade-up d5'}`;
  return (
    <>
      <div className={classNames}>
        <input
          type="checkbox"
          id={name}
          name={name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values[name]}
        />
        <label className="check-label" htmlFor={name}>
          {children}
        </label>
      </div>
      {formik.submitCount > 0 && formik.errors[name] ? (
        <div
          className="field-error show"
          style={{ marginTop: '-0.75rem', marginBottom: '0.75rem' }}
        >
          {String(formik.errors[name])}
        </div>
      ) : null}
    </>
  );
};
