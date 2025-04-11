import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import expositionRoutes from "./routes/expositionRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

dotenv.config();

const app = express();

const corsOptions = {
  // origin: "https://troytran.com",
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: false,
};

// Apply CORS middleware globally
app.use(cors());


app.use(express.json());

app.use('/exposition', expositionRoutes);
app.use('/comment', commentRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to database and listening on port 3000`)
    })

  })
  .catch((error) => {
    console.log(error)
  })
