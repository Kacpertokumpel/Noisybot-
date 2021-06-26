const {expect} = require('chai');

const getExtension = require('./../lib/get-extension');

const factory = require('./factory-data/get-extension.json');

describe('test getExtension: /lib/get-extension', () => {

  describe('return value', () => {

    factory.forEach( call => {

      const message = `should return: "${call.output}"`;

      it( message, () => {

        expect( getExtension( call.entry ) ).to.be.equal( call.output );

      } );

    } );

  } );

  describe('RangeError', () => {

    [ true, false, null, undefined, NaN, Infinity, 42, [], {}, () => null ]
    .forEach( argErrror => {

      const message = `should throw RangeError arg1 invalid data type with: ${argErrror}`;

      it( message, () => {

        const fxThrow = () => getExtension( argErrror );

        expect( fxThrow ).to.be.throw( RangeError, "arg1: path, should be a string value" );

      } );

    } );

  } );

} );