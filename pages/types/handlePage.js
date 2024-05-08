const getPageHtml = require("./getPageHtml");
const getSubDir = require("./getSubDir");
const { TOP_LEVEL_DOMAIN } = require("../../utils/constants");

function handlePage(product, shape, type) {
	// Generate Link
	const subDir = getSubDir(product, shape, type);
	const link = TOP_LEVEL_DOMAIN + subDir;
	console.log(link);

	// Generate html
	const pageHtml = getPageHtml(product);
	console.log(pageHtml);

	return {
		link: link,
		title: product.product,
		pageHtml: pageHtml,
	};
}

module.exports = handlePage;
