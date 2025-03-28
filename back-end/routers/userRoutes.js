
const {Router} = require('express');
const {register, login} = require('../controllers/userControllers')
const authMiddleWare = require('../middleware/jwtauth')

const route = Router();

route.post('/adduser', register);
route.post('/loginuser', login);
route.get('/protected', authMiddleWare, (req, res)=>{
    res.json({message:'welcome to the protected route'})
})

module.exports = route;