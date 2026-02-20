import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;
const apiKey = process.env.API_KEY;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/stock", async (req, res) => {
  const symbol = req.query.symbol;
  try {
    const response = await axios.get(
      `https://financialmodelingprep.com/stable/quote?symbol=${symbol}&apikey=${apiKey}`,
    );
    const stockData = response.data;
    console.log("Fetched stock data:", stockData);
    res.render("stock.ejs", { stockData });
  } catch (error) {
    console.error("Error fetching stock data:", error);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }

  
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
