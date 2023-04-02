// App controller

const getHome = async (req, res) => {
  res.status(200).send('<h2>Welcome</h2>');
};

module.exports = {
  getHome,
};
