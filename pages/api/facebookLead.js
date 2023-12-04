const apiKey = process.env.FACEBOOK_TOKEN;
const datasetID = process.env.FACEBOOK_PIXEL_ID;

import crypto from 'crypto';
import { disconnect } from 'process';

export function SHA256(inputString) {
  const hash = crypto.createHash('sha256');
  hash.update(inputString);
  return hash.digest('hex');
}

const sendFBLeaddata = async (req, res) => {
  const data = req.body;
  const { firstName, lastName, email, phoneNumber, district, ipAddress, currentUrl } = JSON.parse(data);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json; charset=UTF-8");
  const hashEmail = SHA256(email.toLowerCase());
  const hashfirstName = SHA256(firstName.toLowerCase());
  const hashlastName = SHA256(lastName.toLowerCase());
  const hashphoneNumber = SHA256(phoneNumber);
  const hashdistrict = '';
  if (district !== null && district !== undefined) { hashdistrict = SHA256(district.toLowerCase()); }

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
          "client_ip_address": ipAddress,
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
export default sendFBLeaddata;