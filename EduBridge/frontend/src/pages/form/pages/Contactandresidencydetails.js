import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../components/Sidebar';

const Contactandresidencydetails = () => {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Sidebar>
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="mobileNumber1">Mobile telephone number (1)</label>
      <input
        type="text"
        id="mobileNumber1"
        name="mobileNumber1"
        ref={register({ required: true })}
      />
      {errors.mobileNumber1 && <p>This field is required</p>}

      <label htmlFor="mobileNumber2">Mobile telephone number (2)</label>
      <input
        type="text"
        id="mobileNumber2"
        name="mobileNumber2"
        ref={register({ required: true })}
      />
      {errors.mobileNumber2 && <p>This field is required</p>}

      <label htmlFor="otherNumber">Other telephone number</label>
      <input
        type="text"
        id="otherNumber"
        name="otherNumber"
        ref={register({ required: true })}
      />
      {errors.otherNumber && <p>This field is required</p>}

      <label htmlFor="email">Email address</label>
      <input
        type="email"
        id="email"
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p>This field is required and must be a valid email address</p>}

      {/* Add more fields here */}

      <button type="submit">Submit</button>
    </form>
    </div>
    </Sidebar>
  );
  
}

export default Contactandresidencydetails;