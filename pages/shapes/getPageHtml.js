const Mustache = require("mustache");
const fs = require("fs");
const path = require("path");
const toTitle = require("../../utils/toTitle");

const shapeContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet sed
    dignissimos provident dolor natus iusto nulla eligendi veritatis, laudantium
    harum sunt explicabo, pariatur ratione excepturi eius quod laborum,
    voluptates molestiae odio repudiandae. Minima vero at provident dolor
    corporis facere, voluptas ad laboriosam ea impedit, quam nihil quaerat
    excepturi, delectus assumenda`;

const typeContent =
	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, quibusdam";

function getPageHtml(product, shape) {
	// Construct the file path to the template
	const templatePath = path.join(__dirname, "template.html");

	// Read the template file
	const template = fs.readFileSync(templatePath, "utf8");

	// Data to be inserted into the template
	const data = {
		product: toTitle(product.product),
		shape: toTitle(shape.type),
		types: product.types.map((type) => ({
			type: type.type,
			typeContent: typeContent,
		})),
		shapeContent: shapeContent,
	};

	// Render the Mustache template
	return Mustache.render(template, data);
}

module.exports = getPageHtml;
