const userName = process.env.RAYNET_USERNAME;
const apiKey = process.env.RAYNET_API_KEY;
const instanceName = process.env.RAYNET_INSTANCE_NAME;

const transformBooleans = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'boolean') {
      newObj[key] = obj[key] ? 'ANO' : 'NE';
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = transformBooleans(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

const sendSurvey = async (req, res) => {
  try {
    const data = transformBooleans(req.body);

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
        "contactSource": 306,
        "companyName": data.contactInformation.fullname,
        "contactInfo": {
          "email": data.contactInformation.email,
          "tel1": data.contactInformation.phone
        },
        "address": {
          "city": data.contactInformation.province
        },
        "notice": `-> Má zájem o zateplení strop nebo fotovoltaiku? ${data.solarOrInsulationPlan}
                      -> Splňujete alespoň jednu z následujících podmínek? ${data.conditions}
                      -> Bydlíte v rodinném domě či bytě? ${data.houseOrFlat}
                      -> Jste vlastníkem rodinného domu? ${data.ownerOfProperty}
                      -> Máte u této nemovitosti trvalé bydliště? ${data.permanentResidence}
                      -> Jste v důchodu a jste majitelem nebo spolumajitelem 2 a více nemovitostí určené k obývání? ${data.moreThan2Properties}
                      -> Pokud ve domě nebydlíte sami, splňují všechny ostatní osoby alespoň jednu z podmínek? ${data.otherPeople}
                  `
      }),
    };

    // Make the API request
    const response = await fetch('https://app.raynet.cz/api/v2/lead/', options);

    if (response.ok) {
      return res.status(200).json({ message: 'Data successfully sent' });
    } else {
      const errorResponse = await response.text(); // Get error details from response
      return res.status(response.status).json({ error: errorResponse });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default sendSurvey;
