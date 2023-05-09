const { Router } = require("express");
const userRouter = Router();
const { signup, login } = require("../controller/user.controller");

// user/signup route
userRouter.post("/signup", signup);

// user/login route
userRouter.post("/login", login);


















module.exports = userRouter;