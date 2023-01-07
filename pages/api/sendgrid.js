const sendEmail = async (req, res) => {
  const data = req.body;
  console.log('')
  console.log('')
  console.log('__________________________________')
  console.log(data)
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.SENDGRID_API_KEY,
      'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
    },
    body: JSON.stringify({
      "personalizations":
        [
          {
            "to": [{ "email": "ondra.juda@gmail.com" }],
            "subject": "Hello, World!"
          }
        ],
      "from": { "email": "from_address@example.com" },
      "content": [{ "type": "text/plain", "value": "Hello, World!" }]
    })
  };

  try {
    const response = await fetch('https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send', options);

    if (response.ok) {
      const responseBody = await response.json();
      console.log('responseBody:', responseBody)

    }
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
};

export default sendEmail;