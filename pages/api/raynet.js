const userName = process.env.RAYNET_USERNAME;
const apiKey = process.env.RAYNET_API_KEY;
const instanceName = process.env.RAYNET_INSTANCE_NAME;

const sendEmail = async (req, res) => {
  const data = req.body;
  const { firstName, lastName, email, phoneNumber, region, district, product, coupon } = JSON.parse(data);

  const token = btoa(`${userName}:${apiKey}`);
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Instance-Name': instanceName,
      'Authorization': `Basic ${token}`,
    },
    body: JSON.stringify({
      "topic": `Poptávka přes web - ${product}`,
      "priority": "DEFAULT",
      "firstName": firstName,
      "lastName": lastName,
      "contactInfo": {
        "email": email,
        "tel1": phoneNumber
      },
      "address": {
        "province": region,
        "city": district
      },
      "notice": `Slevový kod: ${coupon}`
    })
  };

  try {
    const response = await fetch('https://app.raynet.cz/api/v2/lead/', options);

    if (response.ok) {
    } else {
      return res.status(error.statusCode || 500).json({ error: response.statusText });
    }
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
};

export default sendEmail;