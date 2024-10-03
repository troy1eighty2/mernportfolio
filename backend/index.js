import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import expositionRoutes from "./routes/expositionRoutes.js";

dotenv.config();

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://troytran.com");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200); // Respond OK to preflight requests
  }

  next();
});

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
