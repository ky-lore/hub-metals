function getSubDir(product, shape, type) {
	return `our-metals/${product.product}/${type.type}`;
}

module.exports = getSubDir;
