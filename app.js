const express = require("express");
const gameRoutes = require("./routes/gameRoutes");
const saleRoutes = require("./routes/saleRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/games", gameRoutes);
app.use("/api/sales", saleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
