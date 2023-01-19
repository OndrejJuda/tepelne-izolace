import React, { useState } from 'react';
import useInput from '../hooks/use-input';
import { AiOutlineCheck } from 'react-icons/ai';
import Link from 'next/link';

const Input = ({ inputProps, hasError, title }) => {
  return (
    <div
      className='flex flex-col gap-2'
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
    </div>
  )
};

const Form = () => {
  const [isGDPRChecked, setIsGDPRChecked] = useState(false);

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
      alert('Testovací režim. Kontakt nebyl odeslán.')
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

  let isFormValid = true;
  if (!firstNameIsValid || !lastNameIsValid || !emailIsValid || !phoneNumberIsValid || !isGDPRChecked) {
    isFormValid = false;
  }

  return (
    <form
      onSubmit={submitHandler}
      className='mt-8 flex flex-col items-start gap-8'
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
          hasError={phoneNumberHasError}
          title='Telefonní číslo'
        />
      </div>

      <div
        className='flex flex-col gap-2'
      >
        <p
          htmlFor='checkbox'
          className='font-semibold text-primary-500'
        >
          GDPR
        </p>
        <div className='flex items-center gap-4'>
          <div
            className='bg-white w-12 h-12 rounded-full group
          shadow-lg
          flex justify-center items-center'
            onClick={() => setIsGDPRChecked((prevValue) => !prevValue)}
          >
            <AiOutlineCheck
              className={`${isGDPRChecked ? 'text-primary-500' : 'hidden group-hover:inline text-primary-200'}`}
              size={30}
            />
          </div>
          <p className='flex-1'>
            Souhlasím se
            <Link href='/gdpr'>
              <span className='text-primary-600 hover:text-primary-700 font-medium'> zpracováním osobních údajů</span>
            </Link>
          </p>
        </div>
      </div>

      <button
        type='submit'
        disabled={!isFormValid}
        className='inline-block mt-12 py-4 px-8 rounded-full 
        text-xl text-primary-50 bg-primary-700 shadow-lg
        disabled:bg-gray-200 disabled:text-black disabled:scale-90 disabled:shadow-none
        transition enabled:hover:bg-primary-300 enabled:hover:text-primary-900 
        enabled:hover:scale-105 enabled:hover:shadow-md enabled:active:scale-95 enabled:active:shadow-lg'
      >
        Odeslat
      </button>
    </form >
  );
};

export default Form;