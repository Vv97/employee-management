const { Router } = require("express");
const userRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");
require("dotenv").config();



const signup = async (req, res) => {
    const { email, password, confirm_Password } = req.body;

    try {
        if (password === confirm_Password) {
            bcrypt.hash(password, 5, async (err, hash) => {
                if (hash) {
                    const newUser = userModel({
                        email,
                        password: hash,
                        confirm_Password: hash
                    });


                    await newUser.save();
                    res.status(201).send({ message: "signup successful" })
                } else res.status(400).send({ message: err.message });
            })
        } else {
            res.status(400).send({ message: "password not match" });
        }

    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};


const login = async (req, res) => {
    let { email, password } = req.body;
    try {
        let userExist = await userModel.findOne({ email });
        if (userExist) {
            bcrypt.compare(password, userExist.password, (err, result) => {
                if (result) {
                    res.status(201).send({ message: "login successful", token: jwt.sign({ id: userExist._id }, process.env.jwt_key) })
                } else res.status(400).send({ message: "Invalid Credentials" })
            })
        } else res.status(400).send({ message: "Invalid Credentials" })

    } catch (error) {
        res.status(400).send({ message: error.message })
    }

}




module.exports = { signup, login }