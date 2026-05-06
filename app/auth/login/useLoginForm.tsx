import { useAuthContext } from '@/hooks/useAuthContext';
import { ProviderRoutes } from '@/routes/routes';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

export interface ILoginValues {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  const { login } = useAuthContext();
  const router = useRouter();
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

  const handleLogin = async (values: ILoginValues) => {
    const userLogin = await login({
      email: values.email,
      password: values.password,
    });

    if (!userLogin) {
      toast.error('Credenciales incorrectas');
      return;
    }

    router.push(ProviderRoutes.DASHBOARD);
  };

  return {
    validationSchema,
    initialValues,
    handleLogin,
  };
};
