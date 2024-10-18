import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import expositionRoutes from "./routes/expositionRoutes.js";
import path from "path";
import https from "https";
import http from "http";
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

app.use('/exposition', expositionRoutes);

const httpsOptions = {
  key: fs.readFileSync("/etc/letsencrypt/live/api.troytran.com/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/api.troytran.com/fullchain.pem"),
};

http.createServer((req, res) => {
  res.writeHead(301, { "Location": `https://${req.headers.host}${req.url}` });
  res.end();
}).listen(80);

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
