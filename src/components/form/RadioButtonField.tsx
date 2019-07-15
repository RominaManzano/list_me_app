import React from 'react';
import { Field, FieldProps } from 'formik';

interface Props {
  id: string;
  label: string;
  name: string;
}

type RenderRadioButton = (props: FieldProps) => React.ReactNode;

const RadioButtonField: React.FC<Props> = (props: Props) => {
  const { name, label, id }: Props = props;

  const renderRadioButton: RenderRadioButton = (fieldProps: FieldProps) => {
    const { field: {
      onChange,
      value,
    } }: FieldProps = fieldProps;

    return (
      <React.Fragment>
        <input
          id={id}
          onChange={onChange}
          name={name}
          type="radio"
          checked={id === value}
          value={id}
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
      render={renderRadioButton}
    />
  );
};

export default RadioButtonField;
