import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import expositionRoutes from "./routes/expositionRoutes.js";

dotenv.config();

const app = express();

const corsOptions = {
  origin: "https://troytran.com",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

// Apply CORS middleware globally
app.use(cors(corsOptions));

// Manually handle OPTIONS requests for all routes
app.options('*', cors(corsOptions));

app.use(express.json());

app.use('/exposition', expositionRoutes);

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
