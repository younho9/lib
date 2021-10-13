# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.5.0](https://github.com/younho9/lib/compare/@younho9/object@0.4.7...@younho9/object@0.5.0) (2021-10-13)


### :broom: Other

* **`jest`:** use root config ([fdb19e5](https://github.com/younho9/lib/commit/fdb19e591f574dfffdd8dac076dde54382904768))
* **`pkgs`:** change author email ([ad9b1a5](https://github.com/younho9/lib/commit/ad9b1a57b35b3e47c25096aa451ecf73eede8356))


### :rocket: New Features

* **`object`:** exclude symbol in `Object.keys` ([2799be2](https://github.com/younho9/lib/commit/2799be257612a92dffeb30f92adb95a8cfaaf8a5))
* **`object`:** use `invariant-of` & setup te-jest esm import ([16320cc](https://github.com/younho9/lib/commit/16320cc5c632e6e13c233f8a83f4d4800920647e))
* **`object`:** use `InvariantOf` type ([3ffc476](https://github.com/younho9/lib/commit/3ffc47654c6236980bbd60cbea30955716b5ed9e))



### [0.4.7](https://github.com/younho9/lib/compare/@younho9/object@0.4.6...@younho9/object@0.4.7) (2021-10-08)

**Note:** Version bump only for package @younho9/object





### [0.4.6](https://github.com/younho9/lib/compare/@younho9/object@0.4.5...@younho9/object@0.4.6) (2021-10-08)

**Note:** Version bump only for package @younho9/object





### [0.4.5](https://github.com/younho9/lib/compare/@younho9/object@0.4.4...@younho9/object@0.4.5) (2021-10-08)

**Note:** Version bump only for package @younho9/object





### [0.4.4](https://github.com/younho9/lib/compare/@younho9/object@0.4.3...@younho9/object@0.4.4) (2021-10-07)

**Note:** Version bump only for package @younho9/object





### [0.4.3](https://github.com/younho9/lib/compare/@younho9/object@0.4.2...@younho9/object@0.4.3) (2021-10-07)


### :broom: Other

* **`pkgs`:** change author email ([f50d9cc](https://github.com/younho9/lib/commit/f50d9cc4942d756b4b239d109d0990bfbc39f2a2))



### [0.4.2](https://github.com/younho9/lib/compare/@younho9/object@0.4.1...@younho9/object@0.4.2) (2021-10-05)


### :broom: Other

* **`eslint-config`:** add `@type/eslint` ([b1838e4](https://github.com/younho9/lib/commit/b1838e4755c40e3cd286c1e3bfee8d98c9424434))
* **`package.json`:** add description ([d04772f](https://github.com/younho9/lib/commit/d04772fee6585b8bb1529589b570d8237156189a))



### [0.4.1](https://github.com/younho9/lib/compare/@younho9/object@0.4.0...@younho9/object@0.4.1) (2021-10-05)


### :broom: Other

* add keywords ([ad936d0](https://github.com/younho9/lib/commit/ad936d0a2aa3ecb5d1a7450359688b6f4fbd3ea9))



## [0.4.0](https://github.com/younho9/lib/compare/@younho9/object@0.3.1...@younho9/object@0.4.0) (2021-09-30)


### ⚠ BREAKING CHANGES

* **`types`:** - deprecate `Nominal` & `Invariant` in types
- deprecate `seal` in object

### :rocket: New Features

* **`types`:** deprecate system types ([550703f](https://github.com/younho9/lib/commit/550703f19d7683be2fe93b37778e1226ed03f97f))



### [0.3.1](https://github.com/younho9/lib/compare/@younho9/object@0.3.0...@younho9/object@0.3.1) (2021-09-28)


### :broom: Other

* **`scripts`:** remove duplicate build process when pre-publish ([c3eecac](https://github.com/younho9/lib/commit/c3eecac5652850fdc3365c555e386837d0a60773))



## [0.3.0](https://github.com/younho9/lib/compare/@younho9/object@0.2.0...@younho9/object@0.3.0) (2021-09-28)


### ⚠ BREAKING CHANGES

* **`exports`:** DO NOT support dual package strategy

See:

### :memo: Documentation

* update README.md ([23111a6](https://github.com/younho9/lib/commit/23111a61c9b48cd5f5c9ed84514e0d145ac3e0dd))


### :rocket: New Features

* **`object`:** add type-safe `Object.seal` ([e5d553f](https://github.com/younho9/lib/commit/e5d553fdb13f219d6c0eb214b0793e385baac66a))
* **`object`:** narrow object type to Dict ([e2756ff](https://github.com/younho9/lib/commit/e2756fff616bad3e1cd42db291874e453c9e503c))


### :hammer: Build System

* **`esm`:** support esm ([f8f3144](https://github.com/younho9/lib/commit/f8f3144921c6d9adfc80c7637620c777a17e6546)), closes [eslint/eslint#13440](https://github.com/eslint/eslint/issues/13440) [facebook/jest#11453](https://github.com/facebook/jest/issues/11453)
* **`exports`:** export single cjs or esm package ([4086b33](https://github.com/younho9/lib/commit/4086b337c36471268ddb55ee1aa632a3d056bfd0)), closes [/gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c#gistcomment-3850849](https://github.com/younho9//gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c/issues/gistcomment-3850849)



## [0.2.0](https://github.com/younho9/lib/compare/@younho9/object@0.1.0...@younho9/object@0.2.0) (2021-09-25)


### :broom: Other

* **`eslint`:** ignore `object` & `Function` type of ban-types ([7ce9878](https://github.com/younho9/lib/commit/7ce9878bb0080e3e8b0baf88eed2bffcfe5c9e3d))
* **`scripts`:** add src folder param to build:types ([f10e2fb](https://github.com/younho9/lib/commit/f10e2fb681bb632dd046ac655087e516b03e9925))
* **`scripts`:** unify scripts naming ([22a148d](https://github.com/younho9/lib/commit/22a148d449c440ad8dc002a14bad4aaff6472f65))
* **`tsconfig`:** remove include option to recognize test folder ([b0bf0ea](https://github.com/younho9/lib/commit/b0bf0ea007b2ff7ac28b5afc81ea896ef9a9b833))


### :rocket: New Features

* **`object`:** narrow parameter type of`keys` to object ([56f35e9](https://github.com/younho9/lib/commit/56f35e905793e320047ec39ee4ae864f50ccd34a))
* **`object`:** use type casting ([9574c2f](https://github.com/younho9/lib/commit/9574c2f7e3bcb335f047b3caa329f1072b47e470))



## 0.1.0 (2021-09-21)


### :rocket: New Features

* **`object`:** add type safe `Object.keys` ([0417e06](https://github.com/younho9/lib/commit/0417e06e879b2f320bbf095444935c5a0d7ec3fb))
