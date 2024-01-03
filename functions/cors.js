const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    const apiUrl = 'https://lunastav.cz/api/raynet';

    const response = await fetch(apiUrl, {
        method: event.httpMethod,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',  // Adjust as needed
        },
        body: event.body,
    });

    return {
        statusCode: response.status,
        body: JSON.stringify(await response.json()),
    };
};