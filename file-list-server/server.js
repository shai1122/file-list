const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const cors = require("cors");

const fileRoutes = require("./routes/file.route");
const FileService = require("./services/file.service");
const FileController = require("./controller/file.controller");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

const fileService = new FileService();
const fileController = new FileController(fileService);

app.use("/files", fileRoutes(fileController));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
