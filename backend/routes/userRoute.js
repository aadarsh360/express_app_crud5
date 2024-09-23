const express = require("express");

const router = express.Router();
const userContoller = require("../controller/userController");

// route for all users

router.get('/user', userContoller.getAllUser);
router.get('/user/:id',userContoller.getUser);
router.post('/user', userContoller.createUser);
router.put('/user/:id', userContoller.updateUser);
router.delete('/user/:id', userContoller.deleteUser);

module.exports = router;