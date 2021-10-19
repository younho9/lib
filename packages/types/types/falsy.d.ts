/**
 * {@link https://developer.mozilla.org/en-US/docs/Glossary/Falsy}
 *
 * `NaN` is also `Falsy`, but TypeScript doesn't have a numeric literal.
 * {@link https://github.com/Microsoft/TypeScript/issues/15135}
 *
 * `HTMLAllCollection` is also `Falsy`, but it's a deprecated feature.
 *
 * Also, `!!HTMLAllCollection` is inferred as true in TypeScript.
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/all}
 *
 * @category Basic
 */
export type Falsy = false | 0 | -0 | 0n | '' | null | undefined;
