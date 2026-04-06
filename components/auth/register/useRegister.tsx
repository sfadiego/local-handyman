import { RoleEnum } from '@/enums/roleEnum';
import { useState } from 'react';
import * as Yup from 'yup';

export const useRegister = ({
  registerRole,
  switchTab,
}: {
  registerRole: string;
  switchTab: (tab: string) => void;
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    category: '',
    experience: '',
    acceptTerms: false,
  };

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
      is: () => registerRole === RoleEnum.PROVIDER,
      then: (schema) => schema.required('Selecciona una categoría'),
      otherwise: (schema) => schema.optional(),
    }),
    experience: Yup.string().when([], {
      is: () => registerRole === RoleEnum.PROVIDER,
      then: (schema) => schema.required('Selecciona tu experiencia'),
      otherwise: (schema) => schema.optional(),
    }),
  });

  const handleRegister = (values: typeof initialValues) => {
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
    showPassword,
    setShowPassword,
    formikProps,
  };
};
