const getPageHtml = require("./getPageHtml");
const getSubDir = require("./getSubDir");
const { TOP_LEVEL_DOMAIN } = require("../../constants");

function handlePage(product) {
	// Generate Link
	const subDir = getSubDir(product);
	const link = TOP_LEVEL_DOMAIN + subDir;
	console.log(link);

	// Generate html
	const pageHtml = getPageHtml(product);
	console.log(pageHtml);
}

module.exports = handlePage;
