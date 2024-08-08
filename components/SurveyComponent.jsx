import React, { useContext, useState, useEffect } from 'react';
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import { json } from "./json";
import { useRouter } from 'next/router';

const SurveyComponent = () => {
  const router = useRouter();

  const submitHandler = async (surveyData) => {
    try {

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

      } else {
        <div>Něco se pokazilo, zkuste to prosím znovu.
          Můžete se nám ozvat hned na číslo 705 968 968.
        </div>
      }
    } catch (error) {
      console.error(error);
    }
  }

  const survey = new Model(json);
  survey.applyTheme(themeJson);
  survey.onComplete.add((sender, options) => {
    const surveyData = sender.data;
    router.replace('/dekujeme-vam');
    submitHandler(surveyData);
  });

  return (<Survey model={survey} />);
}

export default SurveyComponent;