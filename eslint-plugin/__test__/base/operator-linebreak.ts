function operatorLinebreak() {
	const a = 'test'.length === 4 ?
		1 :
		0;
	const b = 'test'.length === 4
		// eslint-disable-next-line operator-linebreak
		? 1
		// eslint-disable-next-line operator-linebreak
		: 0;
}
