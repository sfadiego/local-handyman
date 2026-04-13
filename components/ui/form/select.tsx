import { FormikProps } from 'formik';

export interface ISelectOption {
  value: string;
  label: string;
}

interface ISelect<T> {
  name: string;
  className: string;
  formik?: FormikProps<T>;
  label?: string;
  options: ISelectOption[];
}
const Select = <T,>({
  name,
  className = '',
  formik,
  label = '',
  options,
}: ISelect<T>) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className={`${className}`}>
        <select
          id={name}
          name={name}
          onChange={formik?.handleChange}
          onBlur={formik?.handleBlur}
          value={formik?.values[name]}
          className={
            formik?.touched[name] && formik?.errors[name] ? 'error' : ''
          }
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div
        className={`field-error ${formik?.touched[name] && formik?.errors[name] ? 'show' : ''}`}
      >
        {formik?.errors[name]}
      </div>
    </>
  );
};

export default Select;
