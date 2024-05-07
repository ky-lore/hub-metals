require("dotenv").config();
const axios = require("axios");

async function createWordPressPage(title, content, parentId) {
  const url = "https://hubmetalsandtrading.com/wp-json/wp/v2/pages";
  const data = {
    title: title,
    content: content,
    status: "publish",
    // parent: parentId,
  };

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsIm5hbWUiOiJpYm0iLCJpYXQiOjE3MTUxMDk5NjAsImV4cCI6MTg3Mjc4OTk2MH0.AAzfkUvCe3ZnF1EIx82osOOCrailzkn6EUllXITjYpc";

  const response = await axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  console.log(response)
  return response.data.id;
}

createWordPressPage('Test', 'testcontent')