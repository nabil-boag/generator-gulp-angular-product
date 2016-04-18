# tempoFoo

## Software Requirements

[Node.js](https://nodejs.org/en/download/)
[Java](https://java.com/en/download/) (for selenium server)

### Required global NPM packages:
* [Bower](http://bower.io/#install-bower)
* [Gulp](https://www.npmjs.com/package/gulp-install)
* [Typings](https://www.npmjs.com/package/typings)

## Installation

```sh
npm install && bower install
```

## Working with the project

- `$ gulp` to build an optimized version of your application in folder dist
- `$ gulp serve` to start BrowserSync server on your source files with live reload
- `$ gulp serve:dist` to start BrowserSync server on your optimized application without live reload
- `$ gulp test` to run your unit tests with Karma
- `$ gulp test:auto` to run your unit tests with Karma in watch mode
- `$ gulp protractor` to launch your e2e tests with Protractor
- `$ gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

## Contributing

We :heart: pull requests!

To contribute:

- Fork the repo
- Write unit tests for your change
- Run the unit+service tests
- Update the README.md