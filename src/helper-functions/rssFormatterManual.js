import React, { useEffect, useState } from "react";
const xmlJs = (await import("xml-js")).default;

const XMLDisplay = () => {
  const [xmlData, setXmlData] = useState(null);

  useEffect(() => {
    fetch("https://jtz9p1w4ne.execute-api.us-east-1.amazonaws.com/dev/rss")
      .then((response) => response.json())
      .then((data) => {
        setXmlData(data);
      })
      .catch((error) => {
        console.error("Error fetching XML data:", error);
      });
  }, []);

  return (
    <div>
      {xmlData ? (
        <pre>{JSON.stringify(xmlData, null, 4)}</pre>
      ) : (
        <p>Loading XML data...</p>
      )}
    </div>
  );
};

export default XMLDisplay;
