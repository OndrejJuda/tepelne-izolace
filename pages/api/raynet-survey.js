const userName = process.env.RAYNET_USERNAME;
const apiKey = process.env.RAYNET_API_KEY;
const instanceName = process.env.RAYNET_INSTANCE_NAME;

const sendSurvey = async (req, res) => {
  try {
    // Ensure the request body is parsed correctly
    const data = req.body;
    if (typeof data === 'string') {
      // If data is a JSON string, parse it
      data = JSON.parse(data);
    }

    // Extract the necessary fields
    const { email } = data;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Prepare the API request
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
        "firstName": "Roman",  // Replace with dynamic value if needed
        "lastName": "Erlebach", // Replace with dynamic value if needed
        "contactInfo": {
          "email": email,
          "tel1": "732915199"
        },
        "address": {
          "city": "Hradec"
        },
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
