const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserDetails } = require("../../models/userModel");

const login = async (req, res) => {

    try {
        let { email, password } = req.body;
        // first to check the email in database
        let user = await UserDetails.findOne({ email: email });
        if (user) {
            // compare the two password
            let compare = await bcrypt.compare(password, user.password)
            if (compare) {
                let token = jwt.sign({ id: user._id }, process.env.SECRETKEY, { expiresIn: "5m" });
                res.json({
                    statusCode: 201,
                    message: "login successfully",
                    token,
                    id : user._id
                    
                })
            } else {
                res.json({
                    statusCode: 401,
                    message: "Password is Wrong"
                })
            }
        } else {
            res.json({
                statusCode: 401,
                message: "Invaild Email "
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            statusCode: 500,
            message: "Internal Server Error",
            error
        })
    }

}

module.exports = { login }