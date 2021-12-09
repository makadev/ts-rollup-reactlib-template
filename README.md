# React Library Template with TypeScript and Rollup

## What's this?

#### This is a React Library Template preconfigured with:

* [rollup](https://rollupjs.org) (as bundler or build tool)
* [typescript](https://www.typescriptlang.org) (for typed codebase, type extraction and type checking, cjs/esm
  transformation)
* [eslint](https://eslint.org) (for linting/formatting checks) and additional plugins [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) and [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) for react specific rules
* [prettier](https://prettier.io) (for source code formatting)
* [jest](https://jestjs.io) (for testing / coverage)
* [ts-jest](https://kulshekhar.github.io/ts-jest) (for jest with ts support)
* [react-test-renderer](https://reactjs.org/docs/test-renderer.html) (for rendering/snapshot tests)
* [react testing library](https://testing-library.com/docs/react-testing-library/intro) (testing library for react)

#### Additional Notes about the configuration:

TypeScript (`tsconfig.json` and those rollup - as well as `tsc` command in `package.json`) is set up to use `react-jsx` for use with `react/jsx-runtime` for [React 17+](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html), if you want to use `jsx` f.e. with React 16 you need to change that and the react peerDependency version in `package.json`. Also you need to remove `plugin:react/jsx-runtime` from the extends in `.eslintrc.js` to reenable linter messages about missing react import.

#### The input is:

* library files under `src/*.ts`
* a library bottle file `src/index.ts`

#### The output will be:

* the cjs library `dist/cjs/index.js` and external source map `dist/cjs/index.js.map`
* the esm library `dist/esm/index.js` and external source map `dist/esm/index.js.map`
* the ts type definitions `types/*.d.ts`

#### Docker Compose for Dev:

* for simplicity and common development environment there is a `docker-compose.yml` which can be used to create a nodejs container
* use `docker compose run --rm bash` to start up a container

## Usage Checklist

1. change `package.json` fields
    * `name`
    * `version`
    * `description`
    * `author`
    * `license`
2. run `npm install`
3. check operations:
    * `npm run check` should complete without errors
    * `npm run lint` should complete without errors
    * `npm run test` should complete without errors
    * `npm run build` should create `dist/`
    * `npm run coverage` should complete without errors and create `coverage/`
