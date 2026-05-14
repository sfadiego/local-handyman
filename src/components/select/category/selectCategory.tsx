import Select from '@/components/ui/form/select';
import { FormikProps } from 'formik';

interface ISelectCategory {
  formik: FormikProps<any>;
}

const SelectCategory = ({ formik }: ISelectCategory) => {
  const options = [
    { value: '', label: 'Selecciona tu oficio...' },
    { value: 'plomeria', label: 'Plomería' },
    { value: 'electricidad', label: 'Electricidad' },
    { value: 'carpinteria', label: 'Carpintería' },
    { value: 'pintura', label: 'Pintura' },
    { value: 'albanileria', label: 'Albañilería' },
    {
      value: 'aire_acondicionado',
      label: 'Aire acondicionado',
    },
    { value: 'cerrajeria', label: 'Cerrajería' },
    { value: 'jardineria', label: 'Jardinería' },
    { value: 'vidrieria', label: 'Vidriería' },
    { value: 'remodelaciones', label: 'Remodelaciones' },
    { value: 'otro', label: 'Otro' },
  ];
  return (
    <Select
      name="category"
      className="input-wrap select-wrap"
      formik={formik}
      label="Categoría principal"
      options={options}
    />
  );
};

export default SelectCategory;
