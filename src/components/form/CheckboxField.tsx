import React from 'react';
import { Field, FieldProps } from 'formik';

interface Props {
  id: string;
  label: string;
  name: string;
}

type RenderCheckbox = (props: FieldProps) => React.ReactNode;

const CheckboxField: React.FC<Props> = (props: Props) => {
  const { id, label, name }: Props = props;

  const renderCheckbox: RenderCheckbox = (fieldProps: FieldProps) => {
    const { field: {
      onChange,
      value,
    } }: FieldProps = fieldProps;

    return (
      <React.Fragment>
        <input
          id={id}
          name={name}
          onChange={onChange}
          type="checkbox"
          value={value}
          checked={value}
        />
        <label htmlFor={id}>
          {label}
        </label>
      </React.Fragment>
    );
  };

  return (
    <Field
      name={name}
      render={renderCheckbox}
    />
  );
};

export default CheckboxField;
