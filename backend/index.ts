import cors from "cors";
import express from "express";

const app = express();
const shopRoute = require("./routes/shops");
const userRoute = require("./routes/users");
const logRoute = require("./routes/logs");
const requestRoute = require("./routes/requests");

const PORT = 8080;

const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

// ミドルウェア
app.use(cors(options));
app.use(express.json());
app.use("/api/shops", shopRoute);
app.use("/api/users", userRoute);
app.use("/api/logs", logRoute);
app.use("/api/requests", requestRoute);

app.listen(PORT, () => console.log("サーバーが起動しました"));
