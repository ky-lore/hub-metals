require("dotenv").config();
const axios = require("axios");

async function createWordPressPage(title, content, parentId) {
	const url = "https://demo.instaboostinc.com/wp-json/wp/v2/pages";
	const data = {
		title: title,
		content: content,
		status: "publish",
		parent: parentId,
	};

	const token = process.env.WORDPRESS_TOKEN;

	const response = await axios.post(url, data, {
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
	});
	return response.data.id;
}

module.exports = createWordPressPage;
