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

      const {
        solarOrInsulationPlan,
        conditions,
        houseOrFlat,
        ownerOfProperty,
        permanentResidence,
        moreThan2Properties,
        otherPeople,
        contactInformation
      } = JSON.parse(surveyData);

      const phone = contactInformation.phone;
      const email = contactInformation.email;
      const fullname = contactInformation.fullname;
      const province = contactInformation.province;


      const response = await fetch(
        '/api/raynet-survey/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: email }),
        }
      );

      if (response.ok) {
        try {
          const getIp = await fetch('/api/get-ip');
          const ipAddress = await getIp.json();
          const currentUrl = router.asPath;
          const fb = await fetch(
            '/api/facebookLead/',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                firstName: surveyData.contactInformation.fullname.split(' ')[0],
                lastName: surveyData.contactInformation.fullname.split(' ').slice(1).join(' '),
                email: surveyData.contactInformation.email,
                phoneNumber: surveyData.contactInformation.phone,
                district: surveyData.contactInformation.province,
                ipAddress: ipAddress.ip,
                currentUrl: "https://lunastav.cz" + currentUrl
              }),
            }
          );
        }
        catch (error) { console.error(error); }
        setShowValid(true);
        router.replace('/dekujeme-vam');

      } else {
        setShowValid(false);
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