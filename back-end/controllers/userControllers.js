const User = require('../models/user')
require('dotenv').config();
const jwttoken = require('jsonwebtoken')


exports.register = async (req, res) => {


    console.log("Received Data:", req.body);
    const { username, password, email, phoneno } = req.body;
    const user = await new User({ username, password, phoneno, email });
    await user.save();
    res.json(user);

}

exports.login = (async (req, res) => {

    try {
        const { username, password } = req.body;
        console.log(username, password);

        let user = await User.findOne({ username });

        if (!user) {
            return res.json({ message: 'user is not registered yet', success: false });
        }

        const isMatched = await user.comparePass(password);

        if (!isMatched) {

            return res.json({ message: 'invalid password', success: false });
        }

        let token = jwttoken.sign({ user }, process.env.JWT_TOKEN, { expiresIn: '1h' });
        res.json({ message: 'user login successful', success: true, token: token });


    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Server error', success: false });
    }
})