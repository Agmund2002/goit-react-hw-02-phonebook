import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    // .length(9, 'Invalid phone number')
    .required('Required'),
});

export const ContactForm = ({onAdd}) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field name="name" placeholder="Jane Doe" />
          <ErrorMessage name="name" />
        </label>

        <label>
          Phone number
          <Field type="tel" name="number" placeholder="+380(99)-000-0000" />
          <ErrorMessage name="number" />
        </label>

        <button type='submit'>Add contact</button>
      </Form>
    </Formik>
  );
};
