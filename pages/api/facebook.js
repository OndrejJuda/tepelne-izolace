const apiKey = process.env.FACEBOOK_TOKEN;
const datasetID = process.env.FACEBOOK_PIXEL_ID

const sendFBdata = async (req, res) => {
  const data = req.body;
  const { firstName, lastName, email, phoneNumber, disctrict } = JSON.parse(data);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "data": [
        {
          "event_name": "Lead",
          "event_time": new Date().getTime(),
          "action_source": "website",
          "user_data": {
            "em": [
              email
            ],
            "ph": [
              phoneNumber
            ],
            "ln": [
              lastName
            ],
            "fn": [
              firstName
            ],
            "ct": [
              disctrict
            ]
          },
        }
      ]

    })
  };

  try {
    const response = await fetch(`https://graph.facebook.com/v18.0/${datasetID}/events?access_token=${apiKey}`, options);

    if (response.ok) {
    } else {
      return res.status(error.statusCode || 500).json({ error: response.statusText });
    }
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
};

export default sendFBdata;