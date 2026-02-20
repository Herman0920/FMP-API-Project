# 📈 Stock Lookup Web App

A simple full-stack web application that allows users to search for real-time stock quotes using the Financial Modeling Prep (FMP) public API.
Built with **Node.js**, **Express**, **Axios**, **EJS**, and styled using **Pico.css**.

---

## 🚀 Features

- Search stocks by ticker symbol (e.g., AAPL, TSLA, MSFT)
- Fetch real-time stock data from the FMP API
- Display stock information on a results page
- Minimal and clean UI using Pico.css
- Environment variable support for API key security
- Version controlled with Git and hosted on GitHub

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- Axios
- EJS (templating engine)
- Pico.css (via CDN)
- dotenv
- Git & GitHub

---

## 📁 Project Structure

```text
project-root/
│
├── public/
│   └── (optional static files)
│
├── views/
│   ├── index.ejs
│   └── stock.ejs
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Create a `.env` file

In the project root, create a file named `.env`:

```text
API_KEY=your_fmp_api_key_here
```

⚠️ Do not put quotes around the API key.

---

### 4. Run the server

```bash
node index.js
```

or (if using nodemon):

```bash
npx nodemon index.js
```

---

### 5. Open in browser

Visit:

```text
http://localhost:3000
```

---

## 🧪 How It Works

1. User enters a stock symbol in a form.
2. Form sends a request to `/stock` route.
3. Server uses Axios to call the FMP API.
4. Data is passed to `stock.ejs`.
5. Stock information is rendered on the page.

---

## 🧾 Example API Endpoint Used

```text
https://financialmodelingprep.com/stable/quote?symbol=AAPL&apikey=YOUR_API_KEY
```

---

## 🔐 Environment Variables

This project uses `dotenv` to protect the API key.

The `.env` file is ignored by Git using `.gitignore`:

```text
node_modules/
.env
```

---

## 🧩 Future Improvements

- Add loading indicator
- Add error messages for invalid symbols
- Add historical price chart
- Add responsive layout
- Deploy using GitHub Pages / Render / Railway

---

## 📌 Requirements

- Node.js (v18+ recommended)
- npm
- Internet connection
- FMP API key

---

## 👤 Author

Created by Herman as a beginner full-stack project using public APIs and Express.

---

## 📄 License

This project is for educational purposes.
