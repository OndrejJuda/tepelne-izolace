const apiKey = process.env.FACEBOOK_TOKEN;
const datasetID = process.env.FACEBOOK_PIXEL_ID

const sendFBdata = async (req, res) => {
  const data = req.body;
  const { firstName, lastName, email, phoneNumber, disctrict } = JSON.parse(data);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON({
      "data": [
        {
          "action_source": "website",
          "event_name": "Lead",
          "event_time": new Date().getTime(),
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
    const response = await fetch(`https://graph.facebook.com/v18.0/1747459502334265/events?access_token=EAAD2J99otaUBO84WICapFuphB4lG7wDjJqbvmZBCfLjykQHFVSmpQyY8ZCK5T92wHHaExpbC6ojDoFLZBpdl8RwEcJ1arQ5DjhWWv33KjKYRuGfoZBAwnDEJ7DjtUtZAjpZAnAY6AZA0LsmFghdqtVKA0TsTdQriU4TTUhWFa8wTOU6AZC2FD2qQrLMTBpbhaQdVJgZDZD`, options);

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