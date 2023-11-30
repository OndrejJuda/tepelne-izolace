export default (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.body({ "ip": ip })
  res.status(200);
};