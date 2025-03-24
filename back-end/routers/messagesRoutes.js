


const {Router} = require('express');
const {getMessages, sendMessages} = require('../controllers/messagesControllers')

const route = Router();

route.get('/messages', getMessages)
route.post('/messages', sendMessages);

module.exports = route;