module.exports = function(height) {
	if (height.charAt(0) === '<') {
		return ('screen and (min-height: ' + height.substr(1) + 'px)' );
	} else if (height.charAt(0) === '>') {
		return ('screen and (max-height: ' + height.substr(1) + 'px)' );
	} else if (height.charAt(0) <= '9') {
		return ('screen and (min-height: ' + height + 'px)' );
	}
};
