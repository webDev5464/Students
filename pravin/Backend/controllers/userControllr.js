import { UserModel } from "../models/userModel.js"

//! post
export const userPostApi = (req, res) => {
    const { fname, lname, age } = req.body
    UserModel({ fname, lname, age }).save()
}

//! get
export const getUserData = async (req, res) => {
    try {
        const data = await UserModel.find()

        if (data.length == 0) throw new Error("Somethings Wrong")

        res.status(200).send(data)
    } catch (err) {
        res.status(401).send(err.message)
    }
}

//! delete
export const deleteData = async (req, res) => {
    const { userId } = req.body
    const deleteUser = await UserModel.findByIdAndDelete(userId)
    console.log(deleteUser)
}

//! put, patch
export const updateData = async (req, res) => {
    const { userId, fname, lname, age } = req.body
    const updateUser = await UserModel.findByIdAndUpdate(userId, { fname, lname, age }, {
        new: true
    })
}


/*

find
findOne
findById
findByIdAndUpdate
findByIdAndDelete
findByIdAndRemove-
updateOne
updateMany
deleteOne
deleteMany

*/
