import configuration from '../../conf';

const { formSubmitEmail } = configuration;

const sendEmail = async (req, res) => {
  const data = req.body;
  console.log(data)
  const { firstName, lastName, email, phoneNumber, region, district } = JSON.parse(data);

  const emailContent = `Jméno: ${firstName}\nPříjmení: ${lastName}\nEmail: ${email}\nTelefonní číslo: ${phoneNumber}\nKraj: ${region ?? 'Neuvedeno'}\nOkres: ${district ?? 'Neuvedeno'}`;

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.SENDGRID_API_KEY,
      'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
    },
    body: JSON.stringify({
      personalizations:
        [
          {
            to: [{ email: formSubmitEmail }],
            subject: `Nezávazná poptávka - ${firstName} ${lastName}`
          }
        ],
      from: { 'email': formSubmitEmail },
      content: [{ 'type': 'text/plain', 'value': emailContent }]
    })
  };

  try {
    const response = await fetch('https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send', options);

    console.log('response:',response);
    
    
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