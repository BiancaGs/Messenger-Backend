const User = require('../models/User');

module.exports = {

    findById: async (req, res, next) => {

        const id = req.params.id;

        try {
            const user = await User.findOne({ _id: id });
            res.send(user);
        } catch (error) {
            res.status(400).json(error);
        }

    },

    findByUsername: async (req, res, next) => {

        const username = req.params.username;

        try {
            const user = await User.findOne({ username: username });
            res.send(user);
        } catch (error) {
            res.status(400).json(error);
        }

    },

    register: async (req, res, next) => {

        try {
            const { name, username } = req.body;

            // Check if there is a user with the same email
            const user = await User.findOne({ username: username });
            if (user) {
                res.status(403).json({
                    error: "Username is already in use",
                })
            }

            // Create a new User
            const newUser = new User({
                name,
                username,
                joined_at: new Date()
            })
            await newUser.save();

            res.status(200).json(newUser);
        } catch (error) {
            console.log(error);
        }


    },

}