const axios = require("axios");

async function deleteWordPressPageById(pageId) {
	const url = `https://demo.instaboostinc.com/wp-json/wp/v2/pages/${pageId}`;
	const token = process.env.WORDPRESS_TOKEN;

	try {
		await axios.delete(url, {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});
		console.log(`Successfully deleted page: ${pageId}`);
	} catch (e) {
		console.log(`Failed to delete page ${pageId}: ${e}`);
	}
}

module.exports = deleteWordPressPageById;
