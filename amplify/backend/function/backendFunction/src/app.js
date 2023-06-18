import aws from "aws-sdk";

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

app.post("/email", async function (req, res) {
  try {
    const secretData = await secretsManager
      .getSecretValue({ SecretId: "journals/aws" })
      .promise();

    const secretValues = JSON.parse(secretData.SecretString);

    const ses = new aws.SES({
      accessKeyId: secretValues.API_KEY,
      secretAccessKey: secretValues.API_SECRET,
      region: "us-east-1",
    });

    const { email, message, subject } = req.body;

    sesTest(ses, "mail@journals.gg", "ed@journals.gg", email, message, subject)
      .then((val) => {
        console.log("returned" + val);
        res.send("successful");
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("An error occurred: " + err);
      });
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred: " + err);
  }
});

function sesTest(ses, emailTo, emailFrom, email, message, subject) {
  console.log("Input parameters:", emailTo, emailFrom, message, subject);
  const params = {
    Destination: {
      ToAddresses: [emailTo],
    },
    Message: {
      Body: {
        Text: {
          Data: "Sender: " + email + "\n" + "Message " + message,
        },
      },
      Subject: {
        Data: `CONTACT FORM: ${subject}`,
      },
    },
    Source: emailFrom,
  };
  return ses.sendEmail(params).promise();
}

module.exports = app;
