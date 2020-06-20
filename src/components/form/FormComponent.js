import React from 'react';
import { Form, Button } from 'react-bootstrap';

const FormComponent = ({
  submit, submitBtnText, elements, children
}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    submit();
  }

  return (
    <>
      <Form onSubmit={handleSubmit} className='m-2'>
        {elements()}
        <Button type='submit' className='mt-2' variant='outline-success'>
          {submitBtnText}
        </Button>
        {children}
      </Form>
    </>
  )

};

export default FormComponent;
