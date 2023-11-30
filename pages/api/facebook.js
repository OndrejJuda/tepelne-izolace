const apiKey = process.env.FACEBOOK_TOKEN;
const datasetID = process.env.FACEBOOK_PIXEL_ID;

const sha256 = (data) => {
  const hash = createHash('sha256');
  hash.update(data);
  return hash.digest('hex');
};

const sendFBdata = async (req, res) => {
  const data = req.body;
  const { firstName, lastName, email, phoneNumber, district, ipAddress } = JSON.parse(data);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json; charset=UTF-8");
  const leadId = Math.random(100000000, 999999999);
  const hashEmail = sha256(email.toLowerCase());
  const hashfirstName = sha256(firstName.toLowerCase());
  const hashlastName = sha256(lastName.toLowerCase());
  const hashphoneNumber = sha256(phoneNumber.toLowerCase());
  const hashdistrict = sha256(district.toLowerCase());
  const dataToSend = ` "{\r\n    \"data\": [\r\n        {\r\n            \"event_name\": \"Lead\",\r\n               \"user_data\": {\r\n                \"em\": [\r\n                    \"${hashEmail}\"\r\n                ],\r\n                \"ph\": [\r\n ${hashphoneNumber}\r\n                ],\r\n                \"ct\": [\r\n  ${hashdistrict}\r\n                ],\r\n                \"client_ip_address\": ${ipAddress},\r\n                         \"ln\": [\r\n ${hashlastName}\r\n                ],\r\n                \"lead_id\": ${leadId},\r\n                \"fn\": [\r\n ${hashfirstName}\r\n                ]\r\n            }\r\n        }\r\n    ]\r\n}";`;

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: dataToSend,
    redirect: 'follow'
  };

  try {
    const response = await fetch(`https://graph.facebook.com/v18.0/${datasetID}/events?access_token=${apiKey}`, requestOptions);

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