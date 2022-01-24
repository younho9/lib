import {isKeyOf} from '../src/index.js';

describe('isKeyof', () => {
	it('detects valid keys', () => {
		expect(isKeyOf({foo: 1})('foo')).toBeTruthy();
		expect(isKeyOf({foo: 1, bar: 2})('bar')).toBeTruthy();
		expect(isKeyOf(['1', '2', '3'])('0')).toBeTruthy();
	});

	it('detects invalid keys', () => {
		expect(isKeyOf({bar: 1})('foo')).toBeFalsy();
		expect(isKeyOf({})('bar')).toBeFalsy();
	});
});
