function getSubDir(product, shape) {
	return `products/${product.product}/${shape.type}`;
}

module.exports = getSubDir;
