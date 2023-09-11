const xml2js = require("xml2js");
const RSS_URL = `https://rss.beehiiv.com/feeds/hhU1hZ5vnX.xml`;

const formatRSS = (RSS_URL) => {
  fetch(RSS_URL)
    .then((response) => response.text())
    .then((xmlString) => {
      xml2js.parseString(xmlString, (err, result) => {
        if (err) {
          console.log("Error whilst parsing XML");
          return;
        }
        const items = result.rss.channel[0].item;
        console.log(items);
      });
    });
};

formatRSS(RSS_URL);
