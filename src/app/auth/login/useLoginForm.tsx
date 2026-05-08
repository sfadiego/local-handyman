import { Toast } from '@/components/toast/toast';
import { useAuthContext } from '@/hooks/useAuthContext';
import { ProviderRoutes } from '@/routes/paths';
import { useRouter } from 'next/navigation';
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
      Toast('error', 'Credenciales incorrectas');
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
