import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import expositionRoutes from "./routes/expositionRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/exposition', expositionRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to database and listening on port ${process.env.PORT}`)
    })

  })
  .catch((error) => {
    console.log(error)
  })
