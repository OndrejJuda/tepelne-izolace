const apiKey = process.env.FACEBOOK_TOKEN;
const datasetID = process.env.FACEBOOK_PIXEL_ID;

const sha256 = (data) => {
  const hash = createHash('sha256');
  hash.update(data);
  return hash.digest('hex');
};

const sendFBdata = async (req, res) => {
  const data = req.body;
  const { ipAddress, currentURL } = JSON.parse(data);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json; charset=UTF-8");
  const date = Math.floor((new Date().getTime()) / 1000);

  const dataToSend = JSON.stringify({
    "data": [
      {
        "action_source": "website",
        "event_name": "ViewContent",
        "event_time": date,
        "event_source_url": currentURL,
        "user_data": {
          "client_ip_address": ipAddress,
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
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
};
export default sendFBdata;