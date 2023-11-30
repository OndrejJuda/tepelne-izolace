import React, { useContext, useState, useEffect } from 'react';
import useInput from '../hooks/use-input';
import { AiOutlineCheck } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import Link from 'next/link';
import AppContext from '../context/app-context';
import { Select } from './';
import { event } from 'nextjs-google-analytics';
import configuration from '../conf';
import { regions } from '../regions-and-districts';
import { products } from '../products';
import { useRouter } from 'next/router';
import { createHash } from 'crypto';


const { phone } = configuration;

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
const Coupon = ({ inputProps, hasError, title }) => {
  return (
    <div
      className='flex-1 flex xl:w-auto flex-col gap-2'
    >
      <label
        htmlFor={inputProps.id}
        className='font-semibold text-lg text-primary-900'
      >
        {title}
      </label>
      <input
        {...inputProps}
        className={`shadow-lg rounded-l-xl py-4 px-4 w-full
        ${hasError ? 'border-red-500 border-[2px]' : 'm-[2px]'}`}
      />
    </div>
  )
};




const Form = () => {
  const router = useRouter();
  const [isGDPRChecked, setIsGDPRChecked] = useState(false);
  const [showValid, setShowValid] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const { formData, setFormData, clearFormData } = useContext(AppContext);

  useEffect(() => {
    const { firstName, lastName, email, phone, gdpr, district, region, product, coupon } = formData;
    firstName && firstNameChangeHandler({ target: { value: firstName } });
    lastName && lastNameChangeHandler({ target: { value: lastName } });
    email && emailChangeHandler({ target: { value: email } });
    phone && phoneNumberChangeHandler({ target: { value: phone } });
    region && regionChangeHandler({ target: { value: region } });
    district && districtChangeHandler({ target: { value: district } });
    product && productChangeHandler({ target: { value: product } });
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
    value: product,
    valueChangeHandler: productChangeHandler,
    reset: productResetHandler
  } = useInput((value) => true);

  const {
    value: district,
    valueChangeHandler: districtChangeHandler,
    reset: districtResetHandler
  } = useInput((value) => true);

  const {
    value: coupon,
    valueChangeHandler: couponChangeHandler,
    inputBlurHandler: couponBlurHandler,
  } = useInput((value) => value.trim() !== '');

  const sha256 = (data) => {
    const hash = createHash('sha256');
    hash.update(data);
    return hash.digest('hex');
  };

  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoadingSubmit(true);
      const response = await fetch(
        '/api/raynet/',
        {
          method: 'POST',
          body: JSON.stringify({ firstName, lastName, email, phoneNumber, region: region.name, district: district.name, product: product.name, couponCode: couponAdded ? couponCode : '' }),
        }
      );
      if (response.ok) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json; charset=UTF-8");
        emailHash = ha256(email.toLowerCase());
        let data = JSON.stringify({
          "data": [
            {
              "action_source": "website",
              "event_name": "Lead",
              "event_time": new Date().getTime(),
              "user_data": {
                "em": emailHash
              }
            }
          ]
        });

        let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: data,
          redirect: 'follow'
        };
        await fetch("https://graph.facebook.com/v18.0/1747459502334265/events?access_token=EAAD2J99otaUBO84WICapFuphB4lG7wDjJqbvmZBCfLjykQHFVSmpQyY8ZCK5T92wHHaExpbC6ojDoFLZBpdl8RwEcJ1arQ5DjhWWv33KjKYRuGfoZBAwnDEJ7DjtUtZAjpZAnAY6AZA0LsmFghdqtVKA0TsTdQriU4TTUhWFa8wTOU6AZC2FD2qQrLMTBpbhaQdVJgZDZD", requestOptions)
        // await fetch(
        //   '/api/facebook/',
        //   {
        //     method: 'POST',
        //     body: JSON.stringify({ firstName, lastName, email, phoneNumber, district: district.name }),
        //   }
        // );
        setShowValid(true);
        router.replace('/dekujeme-vam');
        setSubmitError('');
        event('submit_form', {
          category: 'Poptávka',
          label: 'Úspěšně odesláno'
        });

      } else {
        setShowValid(false);
        setSubmitError(`Nastala chyba. Zkuste to znovu nebo nás kontaktujte na telefonním čísle ${phone}.`);
        event('submit_form', {
          category: 'Poptávka',
          label: 'Nastala chyba'
        });
      }
      setLoadingSubmit(false);
    } catch (error) {
      setShowValid(false);
      setSubmitError(error.message);
      setLoadingSubmit(false);
      console.error(error);
    }

    firstNameResetHandler();
    lastNameResetHandler();
    emailResetHandler();
    phoneNumberResetHandler();
    regionResetHandler();
    districtResetHandler();
    productResetHandler();
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
      case 'product':
        productChangeHandler({ target: { value: event } });
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

  const [loading, setLoading] = useState(false);

  const handleAddCoupon = () => {
    setLoading(true);

    setTimeout(() => {
      if (validCouponCodes.includes(couponCode.toLowerCase())) {
        // Coupon code is valid
        setIsValidCoupon(true);
        setCouponAdded(true); // Set the state to indicate that the coupon was added successfully
        // Additional steps after successful verification
      } else {
        // Coupon code is invalid
        setIsValidCoupon(false);
      }

      setLoading(false);
    }, 2000);
  };
  const updateValueHandlerCoupon = (field, event) => {
    setCoupon(event.target.value);
    setIsValidCoupon(null);
    setCouponAdded(false);
  };

  const [isValidCoupon, setIsValidCoupon] = useState(null);
  const [couponCode, setCoupon] = useState('');
  const [couponAdded, setCouponAdded] = useState(false);
  const validCouponCodes = ['vidbfl20', 'xtuzpz20', 'brwstr2020'];

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
                    placeholder: 'Jméno',
                    value: firstName,
                    onChange: updateValueHandler.bind(null, 'firstName'),
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
                    onChange: updateValueHandler.bind(null, 'lastName'),
                    onBlur: lastNameBlurHandler,
                  }}
                  hasError={lastNameHasError}
                  title='Příjmení'
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
                  title='Telefonní číslo'
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

              <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 sm:gap-8 lg w-full'>
                <div className='flex-1 flex xl:w-auto flex-col gap-2'>
                  <p className='font-semibold text-primary-900 text-lg'>Produkt</p>
                  <Select
                    options={products}
                    placeholder='Zajímám se o'
                    onChange={updateValueHandler.bind(null, 'product')}
                    value={product}
                  />
                </div>

                <div className='flex-1 flex xl:w-auto flex-col gap-4'>
                  <div className='flex items-center'>
                    <Coupon
                      inputProps={{
                        type: 'text',
                        name: 'couponCode',
                        id: 'couponCode',
                        autoComplete: 'couponCode',
                        placeholder: 'Zde zadejte',
                        value: couponCode,
                        onChange: updateValueHandlerCoupon.bind(null, 'couponCode'),
                        onBlur: couponBlurHandler,
                        disabled: isValidCoupon === true && couponAdded,
                      }}
                      title='Slevový kód'
                    />
                    <button
                      type='button'
                      className={`inline-block mt-9 py-[18px] px-8 rounded-r-xl font-semibold
            text-xl text-primary-900 bg-primary-200 shadow-lg
            transition hover:bg-primary-400 hover:shadow-md active:scale-95 active:shadow-lg ${loading ? 'cursor-wait' : ''}`}
                      onClick={handleAddCoupon}
                      disabled={loading || (isValidCoupon === true && couponAdded)}
                    >
                      {loading ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black"></div>
                        </div>
                      ) : (
                        <>
                          {isValidCoupon === true && couponAdded ? (
                            <span className="text-sm flex">Přidáno</span>
                          ) : (
                            <span className="text-sm flex">Přidat</span>
                          )}
                        </>
                      )}
                    </button>
                  </div>
                  {isValidCoupon === true && couponAdded && (
                    <span className="ml-2 text-green-500">Kód byl úspěšně přidán!</span>
                  )}
                  {isValidCoupon === false && (
                    <p className="text-red-500 ml-2">Neplatný kód. Prosím zkuste to znova.</p>
                  )}
                </div>
              </div>
              <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row ms:mt-[-70px] md:mt-[-20px] gap-8 sm:gap-8 lg w-full md:w-full'>
                <div className='flex-1 flex xl:w-auto flex-col gap-2'>
                  <p className='font-semibold text-primary-900 text-lg'>GDPR <span className='text-red-600 font-bold'> *</span></p>
                  <div className='flex items-center gap-5'>
                    <div
                      className='bg-white w-12 h-12 rounded-full group shadow-lg flex justify-center items-center'
                      onClick={() => setIsGDPRChecked((prevValue) => !prevValue)} >
                      <AiOutlineCheck
                        className={`${isGDPRChecked ? 'text-primary-900' : 'hidden group-hover:inline text-primary-100'}`}
                        size={30}
                      />
                    </div>
                    <p className='flex-1 text-primary-700'>
                      Souhlasím se
                      <Link href='/gdpr'>
                        <span className='text-primary-800 hover:text-primary-900 font-medium'> zpracováním osobních údajů</span>
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Tlačítko pro odeslání formuláře */}
                <button
                  type='submit'
                  disabled={!isFormValid}
                  className={`inline-block mt-4 py-4 px-8 rounded-xl font-semibold
          text-xl text-primary-900 bg-primary-200 shadow-lg 
          disabled:bg-gray-200 disabled:text-black disabled:scale-90 disabled:shadow-none
          transition ${loadingSubmit
                      ? 'cursor-wait opacity-70' // Přidáno pro stav načítání
                      : 'enabled:hover:bg-primary-400 enabled:hover:scale-105 enabled:hover:shadow-md enabled:active:scale-95 enabled:active:shadow-lg'
                    }`}
                >
                  {loadingSubmit ? 'Odesílání...' : 'Odeslat'}
                </button>
              </div>
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
                Zavřít
              </button>
            </div>
          )
      }
    </>
  );
};

export default Form;