import { Field, FormikProps } from 'formik';

interface TextareaProps<T> {
  rows: number;
  className?: string;
  name: string;
  placeholder?: string;
  formik?: FormikProps<T>;
}

export const Textarea = <T extends object>({
  rows,
  className = '',
  placeholder = '',
  name,
  formik,
}: TextareaProps<T>) => {
  return (
    <Field
      as="textarea"
      className={className}
      rows={rows}
      name={name}
      formik={formik}
      placeholder={placeholder}
    />
  );
};
