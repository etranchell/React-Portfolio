import React, { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    nameError: '',
    emailError: '',
  });

  const validateEmail = (email) => {
    const expression = /\S+@\S+/;
    return expression.test(email);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!formState.name.trim()) {
      isValid = false;
      setFormState((prevState) => ({
        ...prevState,
        nameError: 'Name is required',
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        nameError: '',
      }));
    }

    if (!formState.email.trim()) {
      isValid = false;
      setFormState((prevState) => ({
        ...prevState,
        emailError: 'Email is required',
      }));
    } else if (!validateEmail(formState.email)) {
      isValid = false;
      setFormState((prevState) => ({
        ...prevState,
        emailError: 'Email is invalid',
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        emailError: '',
      }));
    }

    if (isValid) {
      setFormState({
        name: '',
        email: '',
        message: '',
        nameError: '',
        emailError: '',
      });
    }
  };

  const { name, email, message, nameError, emailError } = formState;

  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={handleChange}
            required
          />
          {nameError && <p className='error-text'>{nameError}</p>}
        </div>
        <div>
          <label htmlFor='email'>Email address:</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            reaquired
          />
          {emailError && <p className='error-text'>{emailError}</p>}
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea
            name='message'
            rows='5'
            value={message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default Contact;
