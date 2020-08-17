const jwt = require("jsonwebtoken");
const secret = require("./config/secrets");

function generateToken(user) {
    const payload = {
        user_id: user.id,
        username: user.username
    }

    const options = {
        expiresIn: "1d"
    }

    const token = jwt.sign(payload, secret.jwtSecret, options);
    return token
}

module.exports = generateToken;
