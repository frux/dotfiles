function memberDelimiterStyle() {
	interface CorrectInterface {
		a: 1;
	}
	interface WrongInterface {
		// eslint-disable-next-line @typescript-eslint/member-delimiter-style
		a: 1,
	}

	type CorrectType1 = {
		a: 1;
	};
	type CorrectType2 = { a: 1 };
	type WrongType1 = {
		// eslint-disable-next-line @typescript-eslint/member-delimiter-style
		a: 1,
	};
	// eslint-disable-next-line @typescript-eslint/member-delimiter-style
	type WrongType2 = { a: 1, };
	// eslint-disable-next-line @typescript-eslint/member-delimiter-style
	type WrongType3 = { a: 1; };
}
