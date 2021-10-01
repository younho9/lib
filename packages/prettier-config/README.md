# @younho9/prettier-config

> Shared prettier config that personally prefer

## Usage

Install the package using `npm` or `yarn`

```sh
npm install --save-dev @younho9/prettier
```

Add `prettier` key to your `package.json`

```diff
  "keywords": ["prettier"],
+ "prettier": "@younho9/prettier-config",
  "license": "MIT",
  "main": "index.js"
```

### [.prettierignore](./.prettierignore)

`npm scripts`

```json
// package.json
{
  "scripts": {
    "format": "prettier --write . --ignore-path ./node_modules/@younho9/prettier-config/.prettierignore"
  }
}
```

`lint-staged`

```json
// package.json
{
  "lint-staged": {
    "*": [
      "prettier --write --ignore-path ./node_modules/@younho9/prettier-config/.prettierignore"
    ]
  }
}
```

`format on save (VSCode)`

```json
// .vscode/settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "prettier.ignorePath": "./node_modules/@younho9/prettier-config/.prettierignore"
}
```

## License

[MIT](../../LICENSE)
