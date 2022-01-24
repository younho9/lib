import {expectAssignable, expectNotAssignable, expectType} from 'tsd';

import type {InvariantOf} from '../types/invariant-of.js';

declare const invariantString: InvariantOf<string>;
declare const invariantStringOrNumber: InvariantOf<string | number>;
declare const invariantSomeString: InvariantOf<'someString'>;

expectNotAssignable<InvariantOf<string>>(invariantSomeString);
expectNotAssignable<InvariantOf<string>>(invariantSomeString);
expectNotAssignable<InvariantOf<string | number>>(invariantString);
expectNotAssignable<InvariantOf<string>>(invariantStringOrNumber);

type BaseType = {
	foo: number;
	bar?: string;
};

type SubType = BaseType & {
	baz: number | undefined;
};

type SameType = {
	foo: number;
	bar?: string;
};

interface BaseInterface {
	foo: number;
	bar?: string;
}

interface SubInterface extends BaseInterface {
	baz: number | undefined;
}

interface SameInterface {
	foo: number;
	bar?: string;
}

class BaseClass {
	declare foo: number;
	declare bar?: string;
}

class SubClass extends BaseClass {
	declare baz: number | undefined;
}

class SameClass {
	declare foo: number;
	declare bar?: string;
}

declare const baseTypeValue: BaseType;
declare const invariantBaseTypeValue: InvariantOf<BaseType>;
declare const invariantBaseInterfaceValue: InvariantOf<BaseInterface>;
declare const invariantBaseClassInstanceValue: InvariantOf<BaseClass>;

declare const sameTypeValue: SameType;
declare const invariantSameTypeValue: InvariantOf<SameType>;
declare const invariantSameInterfaceValue: InvariantOf<SameInterface>;
declare const invariantSameClassInstanceValue: InvariantOf<SameClass>;

declare const subTypeValue: SubType;
declare const invariantSubTypeValue: InvariantOf<SubType>;
declare const invariantSubInterfaceValue: InvariantOf<SubInterface>;
declare const invariantSubClassInstanceValue: InvariantOf<SubClass>;

/** Invariance does accept same type */
expectType<BaseType>(baseTypeValue);
expectType<InvariantOf<BaseType>>(invariantBaseTypeValue);
expectType<InvariantOf<BaseInterface>>(invariantBaseInterfaceValue);
expectType<InvariantOf<BaseClass>>(invariantBaseClassInstanceValue);

/** Invariance does accept equal structure type */
expectType<BaseType>(sameTypeValue);
expectType<InvariantOf<BaseType>>(invariantSameTypeValue);
expectType<InvariantOf<SameInterface>>(invariantSameInterfaceValue);
expectType<InvariantOf<SameClass>>(invariantSameClassInstanceValue);

/** Invariance does not accept sub type */
expectAssignable<BaseType>(subTypeValue);
expectNotAssignable<InvariantOf<BaseType>>(invariantSubTypeValue);
expectNotAssignable<InvariantOf<BaseInterface>>(invariantSubInterfaceValue);
expectNotAssignable<InvariantOf<BaseClass>>(invariantSubClassInstanceValue);

/** Invariance does not accept super type */
expectNotAssignable<SubType>(baseTypeValue);
expectNotAssignable<InvariantOf<SubType>>(invariantBaseTypeValue);
expectNotAssignable<InvariantOf<SubInterface>>(invariantBaseInterfaceValue);
expectNotAssignable<InvariantOf<SubClass>>(invariantBaseClassInstanceValue);

/** Invariant type is subtype of default type */
expectAssignable<BaseType>(invariantBaseTypeValue);
expectAssignable<BaseInterface>(invariantBaseInterfaceValue);
expectAssignable<BaseClass>(invariantBaseClassInstanceValue);
