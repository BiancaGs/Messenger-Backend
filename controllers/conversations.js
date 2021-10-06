const Conversation = require('../models/Conversation');

module.exports = {

    /**
     * Find a conversation by its ObjectId
     */
    findById: async (req, res, next) => {

        const id = req.params.id;

        try {
            const conversation = await Conversation.findOne({ _id: id });
            res.send(conversation);
        } catch (error) {
            res.status(400).json(error);
        }

    },

    /**
     * Creates a new conversation
     */
    newConversation: async (req, res, next) => {

        const { title, members } = req.body;

        if (members.length <= 1) {
            res.status(400).json({
                error: "You must add at least two members in a conversation"
            });
        }

        try {
            const newConversation = new Conversation({
                title,
                members,
                messages: [],
                created_at: new Date()
            });
            await newConversation.save();

            res.send(newConversation);

        } catch (error) {
            res.status(400).json(error);
        }

    },

    /**
     * Creates a new message in a specific conversation
     */
    newMessage: async (req, res, next) => {

        try {
            const id = req.params.id;

            const { from, body } = req.body;

            const newMessage = {
                from,
                body,
                sent_at: new Date()
            }

            const conversation = await Conversation.findOne({ _id: id });

            conversation.messages.push(newMessage);

            conversation.save();

            res.send(conversation);

        } catch (error) {
            res.status(400).json(error);
        }

    }

}