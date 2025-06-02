const express = require('express');

const userController = require("../controllers/userController");
const authenticated = require('../middleware/authMiddleware');

const router = express.Router();

router.post("/add",authenticated.isAuthenticated, userController.addUser);
router.post("/update/:id",authenticated.isAuthenticated,userController.updateUser);
router.post("/delete/:id",authenticated.isAuthenticated,userController.deleteUser);
router.get("/",authenticated.isAuthenticated,userController.user)
router.get("/update/:id",authenticated.isAuthenticated,userController.update)
module.exports = router;