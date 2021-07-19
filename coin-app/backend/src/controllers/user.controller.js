function controller() {
  const getProfile = async (req, res) => {
    res.json({
      message: 'You made it to the secure route',
      user: req.user,
      token: req.headers.authorization
    });
  };

  return {
    getProfile
  };
}

module.exports = controller();
