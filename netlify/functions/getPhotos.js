require("dotenv").config();
const axios = require("axios");
const process = require("process");

exports.handler = async (event, context) => {
  try {
    const { q } = event.queryStringParameters;
    const { editors_choice } = event.queryStringParameters;
    const { per_page } = event.queryStringParameters;
    const { page } = event.queryStringParameters;
    const { order } = event.queryStringParameters;
    const { image_type } = event.queryStringParameters;
    const { orientation } = event.queryStringParameters;
    const { colors } = event.queryStringParameters;

    let feedURL = `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}`;

    if (editors_choice) {
      feedURL += `&editors_choice=${editors_choice}`;
    }
    if (q) {
      feedURL += `&q=${q}`;
    }
    if (page) {
      feedURL += `&page=${page}`;
    }
    if (order) {
      feedURL += `&order=${order}`;
    }
    if (image_type) {
      feedURL += `&image_type=${image_type}`;
    }
    if (orientation) {
      feedURL += `&orientation=${orientation}`;
    }

    if (colors) {
      feedURL += `&colors=${colors}`;
    }

    if (per_page) {
      feedURL += `&per_page=${per_page}`;
    }

    let response = await axios.get(feedURL, {
      headers: { Accept: "application/json", "Accept-Encoding": "identity" },
      params: { trophies: true },
    });   

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
      headers: {
        "access-control-allow-origin": "*",       
      },
    };   
  } catch (error) {
    return {
      statusCode: 500,
      // body: JSON.stringify({ error }),
    };
  }
};
