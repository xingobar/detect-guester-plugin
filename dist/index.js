var detectGuester = require('./detect_guester.min');

console.log(
	detectGuester.detect.swipe({
		target: '#test',
		callback: function() {
			console.log('teset');
		},
		direction: 'left'
	})
);
