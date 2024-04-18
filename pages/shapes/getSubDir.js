function getSubDir(product, shape) {
	return `products/${product.product}/${shape}`;
}

module.exports = getSubDir;
