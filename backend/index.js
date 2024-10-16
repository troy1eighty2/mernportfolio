import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import expositionRoutes from "./routes/expositionRoutes.js";
import path from "path";
import https from "https";
import fs from "fs";

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

const httpsOptions = {
  key: fs.readFileSync(path.resolve(__dirname, 'certificates/key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'certificates/cert.pem')),
};

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    https.createServer(httpsOptions, app).listen(443, () => {
      console.log(`Connected to database and listening on port 443`)
    })

  })
  .catch((error) => {
    console.log(error)
  })
