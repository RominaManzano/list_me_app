import React from 'react';
import styled from 'styled-components';
import {
  Formik,
  Form,
  Field,
  FormikProps,
} from 'formik';

import TextField from '../components/form/TextField';
import { Title } from '../styles/TextStyles';

interface ValuesType {
  accepted: boolean;
  city: string;
  description: string;
  gender: string;
  name: string;
  tags: string[];
}

const initialValues: ValuesType = {
  accepted: false,
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
    ({ isSubmitting }: FormikProps<ValuesType>) => (
      <Form>
        <FieldContainer>
          <TextField
            type="text"
            name="name"
            placeholder="Name"
          />
        </FieldContainer>

        <FieldContainer>
          <Field
            name="description"
            component="textarea"
            placeholder="Description"
          />
        </FieldContainer>

        <FieldContainer>
          <Field
            name="city"
            component="select"
            placeholder="Select your city"
          >
            <option value="Rosario">Rosario</option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Cordoba">Córdoba</option>
          </Field>
        </FieldContainer>

        <FieldContainer>
          <button type="submit">
            Submit
          </button>
        </FieldContainer>
      </Form>
    );

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
