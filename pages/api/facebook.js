const apiKey = process.env.FACEBOOK_TOKEN;
const datasetID = process.env.FACEBOOK_PIXEL_ID;

const sha256 = (data) => {
  const hash = createHash('sha256');
  hash.update(data);
  return hash.digest('hex');
};

const sendFBdata = async (req, res) => {
  const data = req.body;
  const { firstName, lastName, email, phoneNumber, district } = JSON.parse(data);
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "data": [
        {
          "action_source": "website",
          "event_name": "Lead",
          "event_time": new Date().getTime(),
          "user_data": {
            "em": [
              sha256(email.toLowerCase())
            ],
            "ph": [
              sha256(phoneNumber.toLowerCase())
            ],
            "ln": [
              sha256(lastName.toLowerCase())
            ],
            "fn": [
              sha256(firstName.toLowerCase())
            ],
            "ct": [
              sha256(district.toLowerCase())
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
      return res.status(error.statusCode || 500).json({ error: 'poslalo ale spatne' });
    }
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: 'neposlalo se to' });
  }

  return res.status(200).json({ error: '' });
};

export default sendFBdata;