import { Formik, Form, Field } from "formik";

export default function Search(onSubmit) {
  return (
    <Formik initialValues={{}} onSubmit={onSubmit}>
      <header>
        <Form>
          <Field type="text" name="search">
            {/* type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos" */}
          </Field>
          <button type="submit">Search</button>
        </Form>
      </header>
    </Formik>
  );
}
