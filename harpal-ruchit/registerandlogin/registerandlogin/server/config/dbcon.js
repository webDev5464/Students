import { connect } from "mongoose";

export const dbcon = async (URL) => {
    try {
        await connect(URL);
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}