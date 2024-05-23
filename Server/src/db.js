import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://Victor_01:Hudsetkey18@cluster0.rnf7ait.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};
