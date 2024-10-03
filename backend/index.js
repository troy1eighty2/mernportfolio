import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import expositionRoutes from "./routes/expositionRoutes.js";
import path from "path";

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


const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/exposition', expositionRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

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
