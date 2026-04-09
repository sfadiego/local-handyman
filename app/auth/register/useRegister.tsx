import type { UserRole } from '@prisma/client';
import { useMemo } from 'react';
import * as Yup from 'yup';

export interface IRegisterValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  category: string;
  experience: string;
  acceptTerms: boolean;
}

export const useRegister = ({
  registerRole,
  switchTab,
}: {
  registerRole: UserRole;
  switchTab: (tab: string) => void;
}) => {
  const initialValues: IRegisterValues = useMemo(
    () => ({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      category: '',
      experience: '',
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

  const handleRegister = (values: IRegisterValues) => {
    const submissionData = {
      ...values,
      role: registerRole,
    };
    console.log('Register values:', submissionData);
    switchTab('success');

    // TODO: Implement register logic
    // setShowSuccessScreen(true);
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
