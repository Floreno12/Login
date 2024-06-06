const bcrypt = require('bcrypt');

const hashPassword = async (req, res, next) => {
  try {
    if (req.body.password) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      req.body.password = hashedPassword;
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = hashPassword;
