module.exports = function(options) {
	var button = `<a href="https://google.com/"${options.fn(this)}</a>`;
	return button;
};
