import mongoose from "mongoose";

export const ConnectDB = async() => {
    const connect = await mongoose.connect("mongodb+srv://fexipa4248:jziXfNYOTojnPcgH@cluster0.2qp3s.mongodb.net/")
    console.log("host:", connect.connection.host);
}
