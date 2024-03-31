const express = require("express");

function fileRoutes(fileController) {
  const router = express.Router();
  router.get("/", fileController.getFiles);

  return router;
}

module.exports = fileRoutes;
