function getSubDir(product, shape) {
	return `our-metals/${product.product}/${shape.type}`;
}

module.exports = getSubDir;
