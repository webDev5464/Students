import { $users } from "../models/users.model.js";
import { compare, hash } from "bcrypt";

export async function UserRegister(req, res) {
    try {
        const { fName, lName, username, email, password, conPass } = req.body;

        if (!fName) throw new Error('First name is required');
        if (!lName) throw new Error('Last name is required');
        if (!username) throw new Error('Username is required');
        if (!email) throw new Error('Email is required');
        if (!password) throw new Error('Password is required');
        if (password !== conPass) throw new Error('Password and confirm password must be the same');

        await $users({
            fName: lName, username, email, password: await hash(password, 10)
        }).save()

        res.status(201).send({
            process: true,
            message: "user register successfully"


        })


    } catch (err) {
        res.status(301).send({
            process: false,
            message: err.message

        })
    }
}


export async function Userlogin(req, res) {
    try {
        const { username, password } = req.body;

        if (!username) throw new Error('Username is required');
        if (!password) throw new Error('Password is required');
        const user = await $users.findOne({ username });
        if (!user) throw new Error('User not found');
        
        console.log(user)
        const isMatch = await compare(password,user.password);

        if (!isMatch) throw new Error('Invalid password');


        res.status(201).send({
            process: true,
            message: "user login successfully",
            userData: user
        })
    } catch (err) {
        res.status(301).send({
            process: false,
            message: err.message
        })




    }
}
