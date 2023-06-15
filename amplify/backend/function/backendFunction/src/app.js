const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

const AWS = require("aws-sdk");
const secretsManager = new AWS.SecretsManager();

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/api", async function (req, res) {
  try {
    const secretData = await secretsManager
      .getSecretValue({ SecretId: "journals/aws" })
      .promise();

    const secretValues = JSON.parse(secretData.SecretString);
    console.log(`${secretValues.API_KEY}`);
    res.json({ success: `${secretValues.API_KEY}`, url: req.url });
  } catch (error) {
    console.error("Error getting secret", error);
    res.status(500).json({ error: "Error getting secret" });
  }
});

module.exports = app;
