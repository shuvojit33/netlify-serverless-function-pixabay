require("dotenv").config();
const axios = require("axios");
const process = require("process");


// //This solves the "No ‘Access-Control-Allow-Origin’ header is present on the requested resource."
// let HEADERS = {
//   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin',
//   'Content-Type': 'application/json', //optional
//   'Access-Control-Allow-Methods': 'POST, OPTIONS',
//   'Access-Control-Max-Age': '8640'
// }
// HEADERS['Access-Control-Allow-Origin'] = '*'
// HEADERS['Vary'] = 'Origin'


exports.handler = async (event, context) => {
  // export async function handler(event, context) {
  // console.log("hello 2!");

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

    // console.log("feedURL-" + feedURL);

    let response = await axios.get(feedURL, {
      headers: { Accept: "application/json", "Accept-Encoding": "identity" },
      params: { trophies: true },
    });   

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
      headers: {
        // "access-control-allow-origin": "*",
        "access-control-allow-origin": "https://www.figma.com/",
      },
    };

   
  } catch (error) {
    return {
      statusCode: 500,
      // body: JSON.stringify({ error }),
    };
  }
};

// module.exports.handler();
