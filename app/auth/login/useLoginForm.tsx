import * as Yup from 'yup';

export interface ILoginValues {
  email: string;
  password: string;
}

export const useLoginForm = ({ loginRole }) => {
  const initialValues: ILoginValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('El correo es requerido')
      .email('Ingresa un correo válido'),
    password: Yup.string().required('La contraseña es requerida'),
  });

  const handleLogin = (values: ILoginValues) => {
    console.log('Login values:', values, 'Role:', loginRole);
    // TODO: Implement login logic with auth provider
  };

  return {
    validationSchema,
    initialValues,
    handleLogin,
  };
};
