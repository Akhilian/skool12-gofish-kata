# Kata Node.js Starter Project

__A starter project for coding kata in Node.js.__

Whenever I want to start a coding kata to training, I have to boot a new project, install all the dependencies I need (they're always the same ones) and configure npm scripts.

This project will save your time. Now, you can quickly start a coding kata from scratch with all useful tools: testing framework, assertion library, coverage reporting, etc.

## Tools
- Testing framework: [Mocha](https://mochajs.org/)
- Assertion library: [Chai](http://www.chaijs.com/)
- For spies, stubs and mocks: [Sinon.js](http://sinonjs.org/)
- Coverage reporting: [Istanbul](https://istanbul.js.org/)
- Linter: [ESLint](https://eslint.org/) with [JavaScript Standard Style](https://standardjs.com/) configuration

## Getting Started

### Clone repository

You can clone this repository to start a new coding kata from scratch with this starter project.

```shell
# with ssh
git clone git@github.com:smicaliz/kata-node-starter.git

# with https
git clone https://github.com/smicaliz/kata-node-starter.git
```

__Note:__ If you want to push your code on your own repository, you can clone this repository, then delete `Git` directory and create an empty `Git` repository.

```shell
# change directory
cd kata-node-starter

# delete Git repository
rm -rf .git

# create an empty Git repository
git init
```

### Install dependencies

Before starting to code, don't forget to install all dependencies. Go to the root directory (where the package.json is located) and run:

```shell
npm install
```

### Writing code

When you'll write some code, you must place source code files in the directory `lib` and test files in the directory `test`. 

### Running tests

Run all tests once:

```shell
npm test
```

Automatically re-run all tests once whenever you change (save) a file:

```shell
npm run test:watch
```

### Check coverage

Run a coverage report:

```shell
npm run coverage
```

__Output:__ `text` (display on console) and `lcov` (generate web pages).

### Linter

Run the linter to check your code meets the standard style rules:

```shell
npm run lint
```

Automatically fix a lot of lint errors and warnings:

```shell
npm run lint:fix
```

__Note:__ Some errors must be fixed manually.

## Node version

By default, this project uses the last LTS version of Node.js (8.x) and the last version of NPM (6.x).

If you want to use another version of Node.js and NPM, you can edit `package.json` by changing values for `node` and `npm` in `engines`:

```javascript
{
  ...
  "engines": {
    "node": "8.x",
    "npm": "6.x"
  },
  ...
}
```

If you use `nvm` you can also change the node version on `.nvmrc`:

```shell
node -v > .nvmrc
```
