import Select from '@/components/ui/form/select';
import { FormikProps } from 'formik';

interface ISelectExperience {
  formik: FormikProps<any>;
}

const SelectExperience = ({ formik }: ISelectExperience) => {
  const options = [
    { value: '', label: '¿Cuántos años llevas trabajando?' },
    { value: 'less_than_1', label: 'Menos de 1 año' },
    { value: '1_3', label: '1-3 años' },
    { value: '3_5', label: '3-5 años' },
    { value: '5_10', label: '5-10 años' },
    { value: 'more_than_10', label: 'Más de 10 años' },
  ];
  return (
    <Select
      name="experience"
      className="input-wrap select-wrap"
      formik={formik}
      label="Años de experiencia"
      options={options}
    />
  );
};

export default SelectExperience;
