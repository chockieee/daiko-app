import cors from 'cors';
import express from 'express';

const app = express();
const shopRoute = require("./routes/shops")
const PORT = 8080;



const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

// ミドルウェア
app.use(cors(options)); 
app.use(express.json())
app.use("/api/shops", shopRoute)

app.listen(PORT, ()=> console.log("サーバーが起動しました"))