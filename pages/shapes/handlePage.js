const getPageHtml = require("./getPageHtml");
const getSubDir = require("./getSubDir");
const { TOP_LEVEL_DOMAIN } = require("../../utils/constants");

function handlePage(product, shape) {
	// Generate Link
	const subDir = getSubDir(product, shape);
	const link = TOP_LEVEL_DOMAIN + subDir;
	console.log(link);

	// Generate html
	const pageHtml = getPageHtml(product, shape);
	console.log(pageHtml);
}

module.exports = handlePage;
