const userName = process.env.RAYNET_USERNAME;
const apiKey = process.env.RAYNET_API_KEY;
const instanceName = process.env.RAYNET_INSTANCE_NAME;

const sendSurvey = async (req, res) => {
  const data = req.body;
  const {
    solarOrInsulationPlan,
    conditions,
    houseOrFlat,
    ownerOfProperty,
    permanentResidence,
    moreThan2Properties,
    otherPeople,
    contactInformation: {
      fullname,
      phone,
      email,
      province
    },
    gdpr
  } = JSON.parse(data);
  console.log(data);

  const token = btoa(`${userName}:${apiKey}`);
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Instance-Name': instanceName,
      'Authorization': `Basic ${token}`,
    },
    body: JSON.stringify({
      "topic": "Poptávka přes dotazník",
      "priority": "DEFAULT",
      "firstName": "Roman",
      "lastName": "Erlebach",

      "contactInfo": {
        "email": "roman.erle@seznam.cz",
        "tel1": "732915199"
      },
      "address": {
        "city": "Hradec"
      },

    })
  };

  try {
    const response = await fetch('https://app.raynet.cz/api/v2/lead/', options);

    if (response.ok) {
      return res.status(200).json({ error: '' });
    } else {
      return res.status(response.status).json({ error: response.statusText });
    }
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export default sendSurvey;
