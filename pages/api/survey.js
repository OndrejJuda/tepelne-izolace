const userName = process.env.RAYNET_USERNAME;
const apiKey = process.env.RAYNET_API_KEY;
const instanceName = process.env.RAYNET_INSTANCE_NAME;

const sendSurvey = async (req, res) => {
  try {
    JSON.parse(req.body);
    const data = {};
    Object.keys(req.body).forEach((key) => {
      if (typeof req.body[key] === 'boolean') {
        data[key] = req.body[key] ? 'ANO' : 'NE';
      } else if (typeof req.body[key] === 'object' && !Array.isArray(req.body[key])) {
        data[key] = transformBooleans(req.body[key]); // Recursively handle nested objects
      } else {
        data[key] = req.body[key];
      }
    });


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
        "notice": ` Má zájem o zateplení strop nebo fotovoltaiku? ${data.solarOrInsulationPlan},
                        Splňujete alespoň jednu z následujících podmínek? ${data.conditions},
                        Bydlíte v rodinném domě či bytě? ${data.houseOrFlat},
                        Jste vlastníkem rodinného domu? ${data.ownerOfProperty},
                        Máte u této nemovitosti trvalé bydliště? ${data.permanentResidence}, 
                        Jste v důchodu a jste majitelem nebo spolumajitelem 2 a více nemovitostí určené k obývání? ${data.oreThan2Properties}, 
                        Pokud ve domě nebydlíte sami, splňují všechny ostatní osoby alespoň jednu z podmínek? ${data.otherPeople},
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
