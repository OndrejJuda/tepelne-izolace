import React from 'react';
import useInput from '../hooks/use-input';

const Input = ({ children }) => {
  return (
    <div
      className='flex gap-2'
    >
      {children}
    </div>
  )
};

const Form = () => {
  const {
    value: firstName,
    hasError: firstNameHasError,
    isValid: firstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameResetHandler
  } = useInput((value) => value.trim() !== '');

  const {
    value: lastName,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameResetHandler
  } = useInput((value) => value.trim() !== '');

  const {
    value: email,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailResetHandler
  } = useInput((value) => value.includes('@') && value.split('@').every((part) => part.trim() !== ''));

  const {
    value: phoneNumber,
    hasError: phoneNumberHasError,
    isValid: phoneNumberIsValid,
    valueChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: phoneNumberResetHandler
  } = useInput((value) => value.trim() !== '');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        '/api/sendgrid/',
        {
          method: 'POST',
          body: JSON.stringify({ firstName, lastName, email, phoneNumber }),
        }
      );

      if (response.ok) {
        const body = await response.json();
      }
    } catch (error) {
      console.error(error)
    }

    console.log('')
    console.log('submitHandler')

    firstNameResetHandler();
    lastNameResetHandler();
    emailResetHandler();
    phoneNumberResetHandler();
  };

  let formIsValid = true;
  if (!firstNameIsValid || !lastNameIsValid || !emailIsValid || !phoneNumberIsValid) {
    formIsValid = false;
  }

  return (
    <form
      onSubmit={submitHandler}
      className='my-8 flex flex-col gap-4'
    >
      <Input>
        <label htmlFor='firstName'>Jméno</label>
        <input
          type='text'
          name='firstName'
          id='firstName'
          autoComplete='given-name'
          placeholder='Jméno'
          value={firstName}
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
        />
        {firstNameHasError && (<p>Error</p>)}
      </Input>

      <Input>
        <label htmlFor='lastName'>Příjmení</label>
        <input
          type='text'
          name='lastName'
          id='lastName'
          autoComplete='family-name'
          placeholder='Příjmení'
          value={lastName}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
        />
        {lastNameHasError && (<p>Error</p>)}
      </Input>

      <Input>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          autoComplete='email'
          placeholder='vas@email.cz'
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (<p>Error</p>)}
      </Input>

      <Input>
        <label htmlFor='phoneNumber'>Telefonní číslo</label>
        <input
          type='tel'
          name='phoneNumber'
          id='phoneNumber'
          autoComplete='tel'
          placeholder='123 456 789'
          value={phoneNumber}
          onChange={phoneNumberChangeHandler}
          onBlur={phoneNumberBlurHandler}
        />
        {phoneNumber && (<p>Error</p>)}
      </Input>

      <button
        type='submit'
        disabled={!formIsValid}
      >
        Odeslat
      </button>
    </form>
  );
};

export default Form;