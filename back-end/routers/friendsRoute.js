const {Router} = require('express');
const {getFriends} = require('../controllers/friendsRoute')

const route = Router();

route.get('/friends',getFriends)
