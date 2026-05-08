import { Toast } from '@/components/toast/toast';
import { useAuthContext } from '@/hooks/useAuthContext';
import { ProviderRoutes } from '@/routes/paths';
import { UserRole } from '@/types/auth';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import * as Yup from 'yup';

export interface IRegisterValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  role: UserRole;
  avatarUrl: string;
  lat: number;
  lng: number;
  city: string;
  state: string;
  address: string;
  acceptTerms: boolean;
}

export const useRegister = ({ registerRole }: { registerRole: UserRole }) => {
  const { register } = useAuthContext();
  const router = useRouter();
  const initialValues: IRegisterValues = useMemo(
    () => ({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      role: registerRole,
      avatarUrl: '',
      lat: 0,
      lng: 0,
      city: '',
      state: '',
      address: '',
      acceptTerms: false,
    }),
    []
  );

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Requerido'),
    lastName: Yup.string().required('Requerido'),
    email: Yup.string().email('Correo inválido').required('Correo requerido'),
    phone: Yup.string().required('Teléfono requerido'),
    password: Yup.string()
      .min(8, 'Mínimo 8 caracteres')
      .required('Contraseña requerida'),
    acceptTerms: Yup.boolean().oneOf([true], 'Debes aceptar los términos'),
    category: Yup.string().when([], {
      is: () => registerRole === UserRole.provider,
      then: (schema) => schema.required('Selecciona una categoría'),
      otherwise: (schema) => schema.optional(),
    }),
    experience: Yup.string().when([], {
      is: () => registerRole === UserRole.provider,
      then: (schema) => schema.required('Selecciona tu experiencia'),
      otherwise: (schema) => schema.optional(),
    }),
  });

  const handleRegister = async (values: IRegisterValues) => {
    const submissionData = {
      ...values,
      role: registerRole,
    };

    const userLogin = await register(submissionData);
    if (!userLogin) {
      Toast('error', 'Credenciales incorrectas');
      return;
    }

    router.push(ProviderRoutes.DASHBOARD);
  };

  const formikProps = {
    initialValues,
    validationSchema,
    onSubmit: handleRegister,
  };
  return {
    formikProps,
  };
};
