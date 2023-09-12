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
        const items = result.rss.channel[0].item; // saves an array of objects(newsletter posts)

        const recentPosts = [];

        for (let index = 0; index < 3; index++) {
          const currentPost = items[index];
          let formattedPost = {
            title: currentPost.title[0],
            link: currentPost.link[0],
            description: currentPost.description[0],
            pubDate: currentPost.pubDate[0],
          };
          recentPosts.push(formattedPost);
        }

        console.log(recentPosts);
      });
    });
};

formatRSS(RSS_URL);
