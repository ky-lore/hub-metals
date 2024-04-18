const Mustache = require("mustache");
const fs = require("fs");
const path = require("path");
const toTitle = require("../../utils/toTitle");

function getPageHtml(product, shape) {
	// Construct the file path to the template
	const templatePath = path.join(__dirname, "template.html");

	// Read the template file
	const template = fs.readFileSync(templatePath, "utf8");

	// Data to be inserted into the template
	const data = {
		product: toTitle(product.product),
		shape: toTitle(shape),
		types: product.types.map((type) => ({ type })),
	};

	// Render the Mustache template
	return Mustache.render(template, data);
}

module.exports = getPageHtml;
