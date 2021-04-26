const express = require("express");
const router = express.Router();
const excelController = require("./../controllers/excel.controller");
const upload = require("./../middleware/uploadExcel");

let routes = (app) => {
  router.post("/upload", upload.single("file"), excelController.upload);
  router.get("/tutorials", excelController.getTutorials);

  app.use("/api/excel", router);
};

module.exports = routes;