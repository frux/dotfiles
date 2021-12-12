function quoteProps() {
	const a = {
		correct: true,
		'cor-rect': true,
		// eslint-disable-next-line quote-props
		'wrong': true,
	};
}
