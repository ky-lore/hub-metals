const fs = require("fs");
const path = require("path");
const handleProductPage = require("./pages/product/handlePage");
const handleProductShapePage = require("./pages/shapes/handlePage");
const createWordPressPage = require("./utils/createWordPressPage");
const deleteWordPressPage = require("./utils/deleteWordPressPage");
const pageIds = require("./utils/pageIds");
const { PRODUCTS, PRODUCT_PAGE_ID } = require("./utils/constants");

async function main() {
	// for (let pageId of pageIds) {
	// 	await deleteWordPressPage(pageId);
	// }

	let newPageIds = [];
	for (let product of PRODUCTS) {
		const productPageDetails = handleProductPage(product);
		const parentId = await createWordPressPage(
			productPageDetails.title,
			productPageDetails.pageHtml,
			PRODUCT_PAGE_ID
		);
		newPageIds.push(parentId);

		for (let shape of product.shapes) {
			const shapePageDetails = handleProductShapePage(product, shape);
			const id = await createWordPressPage(
				shapePageDetails.title,
				shapePageDetails.pageHtml,
				parentId
			);
			newPageIds.push(id);
			break;
		}
		break; // Remove this line if you want to process all products
	}

	// Write newPageIds to pageIds.js in the utils folder
	const folderPath = path.join(__dirname, "utils");
	const filePath = path.join(folderPath, "pageIds.js");
	const data = `const pageIds = ${JSON.stringify(
		newPageIds
	)};\n\nmodule.exports = pageIds;\n`;

	// Write the file, overwriting any existing one
	fs.writeFileSync(filePath, data, "utf8");
}

main();
