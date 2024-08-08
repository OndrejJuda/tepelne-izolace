import React, { useContext, useState, useEffect } from 'react';
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import { json } from "./json";
import { useRouter } from 'next/router';

const SurveyComponent = () => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [showValid, setShowValid] = useState(false);
  const router = useRouter();

  const submitHandler = async (surveyData) => {
    try {

      setLoadingSubmit(true);
      const response = await fetch(
        '/api/survey/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(surveyData),

        }
      );

      if (response.ok) {
        router.replace('/dekujeme-vam');
      } else {
        <div>Něco se pokazilo, zkuste to prosím znovu.
          Můžete se nám ozvat hned na číslo 705 968 968.
        </div>
      }
      setLoadingSubmit(false);
    } catch (error) {
      setShowValid(false);
      setSubmitError(error.message);
      setLoadingSubmit(false);
      console.error(error);
    }
  }

  const survey = new Model(json);
  survey.applyTheme(themeJson);
  survey.onComplete.add((sender, options) => {
    const surveyData = sender.data;
    submitHandler(surveyData);
  });

  return (<Survey model={survey} />);
}

export default SurveyComponent;