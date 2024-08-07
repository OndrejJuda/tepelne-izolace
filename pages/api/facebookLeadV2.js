const apiKey = process.env.FACEBOOK_TOKEN;
const datasetID = process.env.FACEBOOK_PIXEL_ID;

import crypto from 'crypto';

export function SHA256(inputString) {
  const hash = crypto.createHash('sha256');
  hash.update(inputString);
  return hash.digest('hex');
}

const sendFBLeaddatav2 = async (req, res) => {
  const data = req.body;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json; charset=UTF-8");
  const hashEmail = SHA256(data.email.toLowerCase());
  const hashfirstName = SHA256(data.firstName.toLowerCase());
  const hashlastName = SHA256(data.lastName.toLowerCase());
  const hashphoneNumber = SHA256(data.phoneNumber);
  let hashdistrict = '';
  if (data.district === '') { } else { hashdistrict = SHA256(data.district.toLowerCase()); }


  const date = Math.floor((new Date().getTime()) / 1000);

  const dataToSend = JSON.stringify({
    "data": [
      {
        "action_source": "website",
        "event_name": "Lead",
        "event_time": date,
        "event_source_url": currentUrl,
        "user_data": {
          "em": hashEmail,
          "ln": hashlastName,
          "client_ip_address": data.ipAddress,
          "fn": hashfirstName,
          "ph": hashphoneNumber,
          "ct": hashdistrict
        }
      }
    ]
  })

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
    return res.status(error.statusCode || 500).json({ error: '' });
  }

  return res.status(200).json({ error: '' });
};
export default sendFBLeaddatav2;