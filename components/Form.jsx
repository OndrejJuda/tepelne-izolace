import React, { useContext, useState, useEffect } from 'react';
import useInput from '../hooks/use-input';
import { AiOutlineCheck } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import Link from 'next/link';
import AppContext from '../context/app-context';
import { Select } from './';
import { regions } from '../regions-and-districts';
import configuration from '../conf';

const {phone} = configuration;

const Input = ({ inputProps, hasError, title }) => {
  return (
    <div
      className='flex-1 flex xl:w-auto flex-col gap-2'
    >
      <label
        htmlFor={inputProps.id}
        className='font-semibold text-lg text-primary-900'
      >
        {title}<span className='text-red-600 font-bold'> *</span>
      </label>
      <input
        {...inputProps}
        className={`shadow-lg rounded-xl py-4 px-4 
        ${hasError ? 'border-red-500 border-[2px]' : 'm-[2px]'}`}
      />
    </div>
  )
};

const Form = () => {
  const [isGDPRChecked, setIsGDPRChecked] = useState(false);
  const [showValid, setShowValid] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const { formData, setFormData, clearFormData } = useContext(AppContext);

  useEffect(() => {
    const { firstName, lastName, email, phone, gdpr, district, region } = formData;
    firstName && firstNameChangeHandler({ target: { value: firstName } });
    lastName && lastNameChangeHandler({ target: { value: lastName } });
    email && emailChangeHandler({ target: { value: email } });
    phone && phoneNumberChangeHandler({ target: { value: phone } });
    region && regionChangeHandler({ target: { value: region } });
    district && districtChangeHandler({ target: { value: district } });
    gdpr !== undefined && setIsGDPRChecked(gdpr);
  }, []);

  useEffect(() => {
    setFormData('gdpr', isGDPRChecked);
  }, [isGDPRChecked]);

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

  const {
    value: region,
    valueChangeHandler: regionChangeHandler,
    reset: regionResetHandler
  } = useInput((value) => true);

  const {
    value: district,
    valueChangeHandler: districtChangeHandler,
    reset: districtResetHandler
  } = useInput((value) => true);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        '/api/raynet/',
        {
          method: 'POST',
          body: JSON.stringify({ firstName, lastName, email, phoneNumber, region: region.name, district: district.name }),
        }
      );

      if (response.ok) {
        setShowValid(true);
        setSubmitError('');
      } else {
        setShowValid(false);
        setSubmitError(`Nastala chyba. Zkuste to znovu nebo n??s kontaktujte na telefonn??m ????sle ${phone}.`);
      }
    } catch (error) {
      setShowValid(false);
      setSubmitError(error.message);
      console.error(error);
    }

    firstNameResetHandler();
    lastNameResetHandler();
    emailResetHandler();
    phoneNumberResetHandler();
    regionResetHandler();
    districtResetHandler();
    setIsGDPRChecked(false);

    clearFormData();
  };

  const updateValueHandler = (fieldName, event) => {
    let value;

    switch (fieldName) {
      case 'firstName':
        firstNameChangeHandler(event);
        value = event.target.value;
        break;
      case 'lastName':
        lastNameChangeHandler(event);
        value = event.target.value;
        break;
      case 'email':
        emailChangeHandler(event);
        value = event.target.value;
        break;
      case 'phone':
        phoneNumberChangeHandler(event);
        value = event.target.value;
        break;
      case 'region':
        regionChangeHandler({ target: { value: event } });
        value = event;
        if (event.name !== region.name) {
          districtChangeHandler({ target: { value: {} } });
          setFormData('district', {});
        }
        break;
      case 'district':
        districtChangeHandler({ target: { value: event } });
        value = event;
        break;
    }

    setFormData(fieldName, value);
  };

  let isFormValid = true;
  if (!firstNameIsValid || !lastNameIsValid || !emailIsValid || !phoneNumberIsValid || !isGDPRChecked) {
    isFormValid = false;
  }

  const districts = region?.districts ?? [];

  return (
    <>
      {
        !submitError && !showValid
          ? (
            <form
              onSubmit={submitHandler}
              className='mt-8 flex flex-col items-start gap-4 sm:gap-8'
            >
              <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 sm:gap-8 w-full'>
                <Input
                  inputProps={{
                    type: 'text',
                    name: 'firstName',
                    id: 'firstName',
                    autoComplete: 'given-name',
                    placeholder: 'Jm??no',
                    value: firstName,
                    onChange: updateValueHandler.bind(null, 'firstName'),
                    onBlur: firstNameBlurHandler,
                  }}
                  hasError={firstNameHasError}
                  title='Jm??no'
                />

                <Input
                  inputProps={{
                    type: 'text',
                    name: 'lastName',
                    id: 'lastName',
                    autoComplete: 'family-name',
                    placeholder: 'P????jmen??',
                    value: lastName,
                    onChange: updateValueHandler.bind(null, 'lastName'),
                    onBlur: lastNameBlurHandler,
                  }}
                  hasError={lastNameHasError}
                  title='P????jmen??'
                />
              </div>

              <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 sm:gap-8 lg w-full'>
                <Input
                  inputProps={{
                    type: 'email',
                    name: 'email',
                    id: 'email',
                    autoComplete: 'email',
                    placeholder: 'vas@email.cz',
                    value: email,
                    onChange: updateValueHandler.bind(null, 'email'),
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
                    onChange: updateValueHandler.bind(null, 'phone'),
                    onBlur: phoneNumberBlurHandler,
                  }}
                  hasError={phoneNumberHasError}
                  title='Telefonn?? ????slo'
                />
              </div>

              <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 sm:gap-8 lg w-full'>
                <div className='flex-1 flex xl:w-auto flex-col gap-2'>
                  <p className='font-semibold text-primary-900 text-lg'>Kraj</p>
                  <Select
                    options={regions}
                    placeholder='Kraj'
                    onChange={updateValueHandler.bind(null, 'region')}
                    value={region}
                  />
                </div>

                <div className='flex-1 flex xl:w-auto flex-col gap-2'>
                  <p className='font-semibold text-primary-900 text-lg'>Okres</p>
                  <Select
                    options={districts}
                    placeholder='Okres'
                    onChange={updateValueHandler.bind(null, 'district')}
                    value={district}
                  />
                </div>
              </div>

              <div
                className='flex flex-col gap-2'
              >
                <p
                  className='font-semibold text-primary-900 text-lg'
                >
                  GDPR<span className='text-red-600 font-bold'> *</span>
                </p>
                <div className='flex items-center gap-4'>
                  <div
                    className='bg-white w-12 h-12 rounded-full group
            shadow-lg
            flex justify-center items-center'
                    onClick={() => setIsGDPRChecked((prevValue) => !prevValue)}
                  >
                    <AiOutlineCheck
                      className={`${isGDPRChecked ? 'text-primary-900' : 'hidden group-hover:inline text-primary-100'}`}
                      size={30}
                    />
                  </div>
                  <p className='flex-1 text-primary-700'>
                    Souhlas??m se
                    <Link href='/gdpr'>
                      <span className='text-primary-800 hover:text-primary-900 font-medium'> zpracov??n??m osobn??ch ??daj??</span>
                    </Link>
                  </p>
                </div>
              </div>

              <button
                type='submit'
                disabled={!isFormValid}
                className='inline-block mt-4 py-4 px-8 rounded-xl font-semibold
          text-xl text-primary-900 bg-primary-200 shadow-lg
          disabled:bg-gray-200 disabled:text-black disabled:scale-90 disabled:shadow-none
          transition enabled:hover:bg-primary-400
          enabled:hover:scale-105 enabled:hover:shadow-md enabled:active:scale-95 enabled:active:shadow-lg'
              >
                Odeslat
              </button>
            </form >
          )
          : (
            <div className='flex gap-8 flex-col justify-center items-center my-12 lg:my-8'>
              {
                submitError && (
                  <div className='flex flex-col justify-center items-center gap-4'>
                    <div className='flex justify-center items-center bg-white rounded-xl p-8'>
                      <RxCross1
                        className='text-[#f76f6f]'
                        size={124}
                      />
                    </div>
                    <p className='text-xl text-primary-700 md:px-8'>{submitError}</p>
                  </div>
                )
              }
              {
                showValid && (
                  <div className='flex justify-center items-center bg-white rounded-xl p-8'>
                    <AiOutlineCheck
                      className='text-[#b2f291]'
                      size={124}
                    />
                  </div>
                )
              }
              <button
                type='button'
                className='inline-block mt-4 py-4 px-8 rounded-xl 
                text-xl text-primary-50 bg-primary-700 shadow-lg
                disabled:bg-gray-200 disabled:text-black disabled:scale-90 disabled:shadow-none
                transition enabled:hover:bg-primary-300 enabled:hover:text-primary-900 
                enabled:hover:scale-105 enabled:hover:shadow-md enabled:active:scale-95 enabled:active:shadow-lg'
                onClick={() => {
                  setSubmitError('');
                  setShowValid(false);
                }}
              >
                Zav????t
              </button>
            </div>
          )
      }
    </>
  );
};

export default Form;