const handleProductPage = require("./pages/product/handlePage");
const handleProductShapePage = require("./pages/shapes/handlePage");
const { PRODUCTS } = require("./constants");

function main() {
	for (let product of PRODUCTS) {
		handleProductPage(product);
		for (let shape of product.shapes) {
			handleProductShapePage(product, shape);
		}
	}
}

main();
