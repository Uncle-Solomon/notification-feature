import mongoose from "mongoose";

export const connectDB = (url: string) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};
