import { Router } from "express"
import { deleteData, editData, getData, postData } from "./Controller.js"

export const rootApi = Router()

rootApi.route("/").post(postData).get(getData)
rootApi.route('/delete').post(deleteData)
rootApi.route('/edit').put(editData)