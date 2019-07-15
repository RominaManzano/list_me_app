// tslint:disable: no-any
import React from 'react';
import Select from 'react-select';
import { Field, FieldProps } from 'formik';

export interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  name: string;
  placeholder?: string;
}

type RenderSelect = (props: FieldProps) => React.ReactNode;
type HandleChange = (option: any) => void;

const SelectField: React.FC<Props> = (props: Props) => {
  const {
    name,
    options,
    placeholder,
  }: Props = props;

  const renderSelect: RenderSelect = (fieldProps: FieldProps) => {
    const {
      field: { value },
      form,
    }: FieldProps = fieldProps;

    const handleChange: HandleChange = (option: any) => {
      form.setFieldValue(name, option.value);
    };

    return (
      <Select
        name={name}
        values={value}
        options={options}
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  };

  return (
    <Field
      name={name}
      render={renderSelect}
    />
  );
};

export default SelectField;
