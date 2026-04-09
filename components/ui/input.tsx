import { Field, FormikProps } from 'formik';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
export type inputType = 'email' | 'text' | 'password' | 'tel';
export type InputVariants = 'default' | 'disabled' | 'error';

interface InputProps<T> {
  name: Extract<keyof T, string>;
  label: string;
  type?: inputType;
  Icon?: React.ReactNode;
  placeholder: string;
  disabled?: boolean;
  formik?: FormikProps<T>;
}

const useInputVariant = (variant: InputVariants) => {
  const variants = {
    default: '',
    error: '',
    disabled: '',
  };
  return `${variants[variant]}`;
};

export const Input = <T extends object>(props: InputProps<T>) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    name,
    label = '',
    disabled = false,
    placeholder = '',
    formik,
    type = 'text',
    Icon,
  } = props;

  const variant = formik.errors[name]
    ? 'error'
    : disabled
      ? 'disabled'
      : 'default';

  const inputIcon = Icon ? <span className="input-icon">{Icon}</span> : null;
  const inputClass = useInputVariant(variant);
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className="input-wrap">
        {inputIcon}
        <Field
          type={showPassword ? 'text' : 'password'}
          id={name}
          name={name}
          placeholder={placeholder}
          className={inputClass}
        />
        {type === 'password' && (
          <button
            type="button"
            className="eye-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Eye width={16} height={16} />
            ) : (
              <EyeOff width={16} height={16} />
            )}
          </button>
        )}
      </div>
      {formik.submitCount > 0 && formik.errors[name] ? (
        <div className="field-error show">{String(formik.errors[name])}</div>
      ) : null}
    </>
  );
};
