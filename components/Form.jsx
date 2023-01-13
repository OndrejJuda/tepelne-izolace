import React from 'react';
import useInput from '../hooks/use-input';
import { ButtonStyle } from './';

const Input = ({ inputProps, errorMessage, hasError, title }) => {
  return (
    <div
      className='flex flex-col gap-2 '
    >
      <label 
      htmlFor={inputProps.id}
      className='font-semibold text-primary-500'
      >
        {title}
        </label>
      <input
        {...inputProps}
        className={`shadow-lg rounded-full py-4 px-8 
        ${hasError ? 'border-red-500 border-[2px]' : 'm-[2px]'}`}
      />
      {/* {hasError && (<p>{errorMessage}</p>)} */}
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
      // const response = await fetch(
      //   '/api/sendgrid/',
      //   {
      //     method: 'POST',
      //     body: JSON.stringify({ firstName, lastName, email, phoneNumber }),
      //   }
      // );

      // if (response.ok) {
      //   const body = await response.json();
      // }
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
      className='mt-8 flex flex-col gap-8'
    >
      <div className='flex flex-wrap gap-16'>
        <Input
          inputProps={{
            type: 'text',
            name: 'firstName',
            id: 'firstName',
            autoComplete: 'given-name',
            placeholder: 'Jméno',
            value: firstName,
            onChange: firstNameChangeHandler,
            onBlur: firstNameBlurHandler,
          }}
          errorMessage='Error'
          hasError={firstNameHasError}
          title='Jméno'
        />

        <Input
          inputProps={{
            type: 'text',
            name: 'lastName',
            id: 'lastName',
            autoComplete: 'family-name',
            placeholder: 'Příjmení',
            value: lastName,
            onChange: lastNameChangeHandler,
            onBlur: lastNameBlurHandler,
          }}
          errorMessage='Error'
          hasError={lastNameHasError}
          title='Příjmení'
        />
      </div>

      <div className='flex flex-wrap gap-16'>
        <Input
          inputProps={{
            type: 'email',
            name: 'email',
            id: 'email',
            autoComplete: 'email',
            placeholder: 'vas@email.cz',
            value: email,
            onChange: emailChangeHandler,
            onBlur: emailBlurHandler,
          }}
          errorMessage='Error'
          hasError={emailHasError}
          title='Email'
        />

        <Input
          inputProps={{
            type: 'tel',
            name: 'phoneNumber',
            id: 'phoneNumber',
            autoComplete: 'tel',
            placeholder: '123 456 789',
            value: phoneNumber,
            onChange: phoneNumberChangeHandler,
            onBlur: phoneNumberBlurHandler,
          }}
          errorMessage='Error'
          hasError={phoneNumberHasError}
          title='Telefonní číslo'
        />
      </div>


      <button
        type='submit'
        disabled={!formIsValid}
        className='mt-12'
      >
        <ButtonStyle>
          Odeslat
        </ButtonStyle>
      </button>
    </form >
  );
};

export default Form;