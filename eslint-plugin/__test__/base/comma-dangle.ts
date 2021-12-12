// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-empty-function */
import { equal, notEqual } from 'assert';
import {
	atob,
	btoa,
} from 'buffer';
// eslint-disable-next-line @typescript-eslint/comma-dangle
import { exec, spawn, } from 'child_process';
import {
	createSocket,
	// eslint-disable-next-line @typescript-eslint/comma-dangle
	Socket
} from 'dgram';

export {
	equal,
	notEqual,
};
export { atob, btoa };
// eslint-disable-next-line @typescript-eslint/comma-dangle
export { exec, spawn, };
export {
	createSocket,
	// eslint-disable-next-line @typescript-eslint/comma-dangle
	Socket
};

enum CorrectEnum1 {
	a,
	b,
}
enum CorrectEnum2 { a, b }
// eslint-disable-next-line @typescript-eslint/comma-dangle
enum WrongEnum1 {
	a,
	b
}
// eslint-disable-next-line @typescript-eslint/comma-dangle
enum WrongEnum2 { a, b, }

type CorrectGenerics1<T, K> = 1;
type CorrectGenerics2<
	T,
	K,
> = 1;
// eslint-disable-next-line @typescript-eslint/comma-dangle
type WrongGenerics1<T, K,> = 1;
// eslint-disable-next-line @typescript-eslint/comma-dangle
type WrongGenerics2<
	T,
	K
> = 1;

type CorrectTupple1 = [number, number];
type CorrectTupple2 = [
	number,
	number,
];
// eslint-disable-next-line @typescript-eslint/comma-dangle
type WrongTupple1 = [number, number,];
// eslint-disable-next-line @typescript-eslint/comma-dangle
type WrongTupple2 = [
	number,
	number
];

function commaDangle() {
	const correctObject1 = {
		a: 1,
		b: 2,
	};
	const correctObject2 = { a: 1, b: 2 };
	const correctArray1 = [
		1,
		2,
	];
	const correctArray2 = [1, 2];
	function correctFunction1(
		a,
		b
	) {}
	function correctFunction2(a, b) {}

	const wrongObject1 = {
		a: 1,
		// eslint-disable-next-line @typescript-eslint/comma-dangle
		b: 2
	};
	// eslint-disable-next-line @typescript-eslint/comma-dangle
	const wrongObject2 = { a: 1, b: 2, };
	const wrongArray1 = [
		1,
		// eslint-disable-next-line @typescript-eslint/comma-dangle
		2
	];
	// eslint-disable-next-line @typescript-eslint/comma-dangle
	const wrongArray2 = [1, 2,];
	function wrongFunction1(
		a,
		// eslint-disable-next-line @typescript-eslint/comma-dangle
		b,
	) {}
	// eslint-disable-next-line @typescript-eslint/comma-dangle
	function wrongFunction2(a, b,) {}
}
