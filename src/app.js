const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const { HTTP_CODES, STATUS } = require("./codes/constants.js");

const { contactsRouter } = require("./routes");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(HTTP_CODES.NOT_FOUND).json({
    status: STATUS.ERROR,
    code: HTTP_CODES.NOT_FOUND,
    message: "Not found",
  });
});

app.use((err, req, res, next) => {
  err.status = err.status || HTTP_CODES.INTERNAL_SERVER_ERROR;
  res.status(err.status).json({
    status:
      err.status === HTTP_CODES.INTERNAL_SERVER_ERROR
        ? STATUS.FAIL
        : STATUS.ERROR,
    code: err.status,
    message:
      err.status === HTTP_CODES.INTERNAL_SERVER_ERROR
        ? "Internal Server Error"
        : err.message,
  });
});

module.exports = app;