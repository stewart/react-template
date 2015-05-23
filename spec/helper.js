"use strict";

process.env.NODE_ENV = "test";

const path = require("path");

const chai = require("chai"),
      sinon = require("sinon"),
      sinonChai = require("sinon-chai");

chai.use(sinonChai);

global.chai = chai;
global.sinon = sinon;

global.should = chai.should();
global.expect = chai.expect;
global.assert = chai.assert;
global.AssertionError = chai.AssertionError;

global.spy = sinon.spy;
global.stub = sinon.stub;

global.source = function(module) {
  return require(path.normalize("./../src/javascripts/" + module));
};

// add Babel's 'require' overload
require("babel/register");

const jsdom = require("jsdom");

function createDOM() {
  global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
  global.window = document.parentWindow;
  global.navigator = global.window.navigator = { userAgent: "JSDOM" };
}

createDOM();
global.resetDOM = createDOM;

// add React + TestUtils to global namespace
const React = require("react/addons");
global.React = React;
global.TestUtils = React.addons.TestUtils;
