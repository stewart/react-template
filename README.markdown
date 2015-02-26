# react-template

A simple(-ish) playground/template for client-side-only React apps, using Babel + Browserify for JS, and Sass for CSS.
Also uses Mocha + JSDOM for a test harness

## Dependencies

    $ npm install
    $ gem install sass

For faster CSS compilation, you can also install `sassc`.

OS X instructions:

    $ brew install sassc

## Building

Included make tasks:

Command          | Result
---------------- | --------------------
`make lint`      | lints src/javascripts with JSXHint
`make js`        | builds JS
`make css`       | builds CSS
`make all`       | builds both
`make clean`     | cleans build targets
`make minify`    | builds minified CSS / JS
`make test`      | runs tests with Mocha
`make watch-js`  | watches + builds JS
`make watch-css` | watches + builds CSS*

*: depends on having [peat](https://github.com/sjl/peat) installed if you use `sassc`.
