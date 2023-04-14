const { UserDetails } = require("../../models/userModel");
const bcrypt = require("bcryptjs");

const passwordResetPage = async (req, res) => {
  try {
    let { id, password } = req.body;
    // hash the password
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);
    req.body.password = hash;
    // update the password in database
    await UserDetails.findByIdAndUpdate(id, {  $set: { password: req.body.password } });
    res.json({
      statusCode: 200,
      message: "Password Reset successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { passwordResetPage };
