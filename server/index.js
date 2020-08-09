"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const {
  handleGallery,
  handleGetItem,
  handleGetCompany,
  handleGetAllCompanies,
  handleGetAllOrders,
  handleGetOrder,
  handleNewOrder,
  handleFourOhFour,
} = require("./handlers");

const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints?
  .get("/items", handleGallery)
  .get("/items/:itemId", handleGetItem)
  .get("/companies", handleGetAllCompanies)
  .get("/companies/:companyId", handleGetCompany)
  .get("/orders", handleGetAllOrders)
  .get("/orders/:orderId", handleGetOrder)
  .post("/orders", handleNewOrder)
  .get("*", handleFourOhFour)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
