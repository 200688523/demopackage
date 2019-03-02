"use strict";
var expect = require('chai').expect;
var add = require('../dist/index').add;
describe('ts-hi function test', function () {
    it('should return 2', function () {
        var result = add(1, 1);
        expect(result).to.equal(2);
    });
});
