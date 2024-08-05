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

      const datatt = JSON.stringify(surveyData);

      console.log(datatt);

      const {
        solarOrInsulationPlan,
        conditions,
        houseOrFlat,
        ownerOfProperty,
        permanentResidence,
        moreThan2Properties,
        otherPeople,
        contactInformation
      } = JSON.parse(datatt);
      console.log("iinformace" + contactInformation.phone)

      console.log("parsed data   " + datatt);

      const response = await fetch(
        '/api/raynet-survey/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            solarOrInsulationPlan: surveyData.solarOrInsulationPlan,
            conditions: surveyData.conditions,
            houseOrFlat: surveyData.houseOrFlat,
            ownerOfProperty: surveyData.ownerOfProperty,
            permanentResidence: surveyData.permanentResidence,
            moreThan2Properties: surveyData.moreThan2Properties,
            otherPeople: surveyData.otherPeople,
            contactInformation: surveyData.contactInformation
          }),
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
    console.log(JSON.stringify(surveyData, null, 3));
    submitHandler(surveyData);
  });
  return (<Survey model={survey} />);
}

export default SurveyComponent;