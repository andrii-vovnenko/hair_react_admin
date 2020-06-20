import React from 'react';
import { Form, Button } from 'react-bootstrap';

const FormComponent = ({
  submit, submitBtnText, elements
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
      </Form>
    </>
  )

};

export default FormComponent;
