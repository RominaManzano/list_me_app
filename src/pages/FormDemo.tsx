import React from 'react';
import styled from 'styled-components';
import {
  Formik,
  Form,
  FormikProps,
} from 'formik';

import SelectField, { Option } from '../components/form/SelectField';
import TextareaField from '../components/form/TextareaField';
import TextField from '../components/form/TextField';
import { Title } from '../styles/TextStyles';

interface ValuesType {
  accepted: boolean;
  age: number;
  city: string;
  description: string;
  gender: string;
  name: string;
  tags: string[];
}

const initialValues: ValuesType = {
  accepted: false,
  age: 0,
  city: '',
  description: '',
  gender: 'male',
  name: '',
  tags: [],
};

const FormDemo: React.FC = () => {
  const handleSubmit: (values: ValuesType) => void = (values: ValuesType) => {
    console.log(values);
  };

  const displayForm: (formProps: FormikProps<ValuesType>) => React.ReactNode =
    ({ isSubmitting }: FormikProps<ValuesType>) => {
      const cityOptions: Option[] = [
        { label: 'Rosario', value: 'Rosario' },
        { label: 'Buenos Aires', value: 'Buenos Aires' },
        { label: 'Córdoba', value: 'Córdoba' },
      ];

      return (
        <Form>
          <FieldContainer>
            <TextField
              type="text"
              name="name"
              placeholder="Name"
            />
          </FieldContainer>

          <FieldContainer>
            <TextField
              type="number"
              name="age"
              placeholder="Age"
            />
          </FieldContainer>

          <FieldContainer>
            <TextareaField
              name="description"
              placeholder="Description"
            />
          </FieldContainer>

          <FieldContainer>
            <SelectField
              name="city"
              options={cityOptions}
              placeholder="Select your city"
            />
          </FieldContainer>

          <FieldContainer>
            <button type="submit">
              Submit
          </button>
          </FieldContainer>
        </Form>
      );
    };

  return (
    <FormContainer>
      <Title>
        Form Demo
      </Title>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {displayForm}
      </Formik>
    </FormContainer>
  );
};

export default FormDemo;

const FormContainer: React.FC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

const FieldContainer: React.FC = styled.div`
  padding: 10px;
`;
