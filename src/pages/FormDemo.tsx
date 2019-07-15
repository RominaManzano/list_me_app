import React from 'react';
import styled from 'styled-components';
import {
  Formik,
  Form,
  FormikProps,
} from 'formik';

import { Option } from '../components/form/SelectField';
import {
  CheckboxField,
  DatepickerField,
  RadioButtonField,
  SelectField,
  TextareaField,
  TextField,
} from '../components/form';
import { Title } from '../styles/TextStyles';

interface ValuesType {
  accepted: boolean;
  age: number;
  city: string;
  description: string;
  dob: string;
  gender: string;
  hobbies: string[];
  name: string;
  tags: string[];
}

const initialValues: ValuesType = {
  accepted: false,
  age: 0,
  city: '',
  description: '',
  dob: '',
  gender: 'MALE',
  hobbies: [],
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

      const hobbiesOptions: Option[] = [
        { label: 'Judo', value: 'Judo' },
        { label: 'Reading', value: 'Reading' },
        { label: 'Netflix', value: 'Netflix' },
        { label: 'Football', value: 'Football' },
      ];

      return (
        <Form>
          <FieldContainer>
            <TextField type="text" name="name" placeholder="Name" />
          </FieldContainer>

          <FieldContainer>
            <TextField type="number" name="age" placeholder="Age" />
          </FieldContainer>

          <FieldContainer>
            <DatepickerField id="dob" name="dob" />
          </FieldContainer>

          <FieldContainer>
            <TextareaField name="description" placeholder="Description" />
          </FieldContainer>

          <FieldContainer>
            <SelectField
              name="city"
              options={cityOptions}
              placeholder="Select your city"
            />
          </FieldContainer>

          <FieldContainer>
            <RadioButtonField
              id="MALE"
              name="gender"
              label="Male"
            />
            <RadioButtonField
              id="FEMALE"
              name="gender"
              label="Female"
            />
          </FieldContainer>

          <FieldContainer>
            <CheckboxField
              id="accepted"
              name="accepted"
              label="Do you accept the terms and conditions?"
            />
          </FieldContainer>

          <FieldContainer>
            <SelectField
              name="hobbies"
              options={hobbiesOptions}
              placeholder="Select your hobbies"
              isMulti={true}
            />
          </FieldContainer>

          <FieldContainer>
            <button type="submit" disabled={isSubmitting}>
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
