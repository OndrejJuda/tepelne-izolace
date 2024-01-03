exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': 'https://www.damepanely.cz',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
        body: JSON.stringify({ message: 'CORS enabled for https://www.damepanely.cz/' }),
    };
};