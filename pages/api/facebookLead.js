const apiKey = process.env.FACEBOOK_TOKEN;
const datasetID = process.env.FACEBOOK_PIXEL_ID;

const sha256 = (data) => {
  const hash = createHash('sha256');
  hash.update(data);
  return hash.digest('hex');
};

const sendFBdata = async (req, res) => {
  const data = req.body;
  const { firstName, lastName, email, phoneNumber, district, ipAddress, currentUrl } = JSON.parse(data);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json; charset=UTF-8");
  const guid = "e68cb608-4d6b-4ec4-ab9b-1310b790ec7a";
  const hashEmail = sha256(email.toLowerCase());
  const hashfirstName = sha256(firstName.toLowerCase());
  const hashlastName = sha256(lastName.toLowerCase());
  const hashphoneNumber = sha256(phoneNumber);
  const hashdistrict = sha256(district.name.toLowerCase());
  const date = Math.floor((new Date().getTime()) / 1000);

  // const dataToSend = JSON.stringify({
  //   "data": [
  //     {
  //       "action_source": "website",
  //       "event_name": "Lead",
  //       "event_id": guid,
  //       "event_time": date,
  //       "event_source_url": currentUrl,
  //       "user_data": {
  //         "em": hashEmail,
  //         "ln": hashlastName,
  //         "client_ip_address": ipAddress,
  //         "fn": hashfirstName,
  //         "ph": hashphoneNumber,
  //         "ct": hashdistrict
  //       }
  //     }
  //   ]
  // })
  const dataToSend = JSON.stringify({
    "data": [
      {
        "action_source": "website",
        "event_name": "Lead",
        "event_time": date,
        "user_data": {
          "em": hashEmail,
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
    return res.status(error.statusCode || 500).json({ error: "yooooooooo" });
  }

  return res.status(200).json({ error: '' });
};
export default sendFBdata;