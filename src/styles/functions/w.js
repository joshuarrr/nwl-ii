module.exports = function(width) {
  if (width.charAt(0) === '<') {
  	return ('screen and (min-width: ' + width.substr(1) + 'px)');
	} else if (width.charAt(0) === '>') {
	  return ('screen and (max-width: ' + width.substr(1) + 'px)');
	} else if (width.charAt(0) <= '9') {
	  return ('screen and (min-width: ' + width + 'px)');
	}
};
