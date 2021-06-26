const {expect} = require('chai');

const factory = require('./factory-data/generate-indent.json');

const generateIndent = require('./../lib/generate-indent');

describe('test generateIndent: /lib/generate-indent', () => {

  describe('return value', () => {

    factory.forEach( call => {

      const message = `should return: "${call.output}"`;

      it( message, () => {

        expect( generateIndent( ...call.entry ) ).to.be.equal( call.output );

      } );

    } );

  } );

  describe('RangeError:', () => {

    describe('with arg1:', () => {

      [ "", null, NaN, Infinity, undefined, true, false ]
      .forEach( argError => {

        const message = `should throw with arg1: ${argError}`;

        const fxThrow = () => generateIndent( argError );

        it( message, () => {

          expect( fxThrow ).to.throw( RangeError, "arg1: depth, should be a number" );

        } );

      } );

    } );

    describe('with arg2:', () => {

      // not throw with undefined value because
      // have defined a default value from head function
      [ 42, null, NaN, Infinity, true, false ]
      .forEach( argError => {

        const message = `should throw with arg2: ${argError}`;

        it( message, () => {

          const fxThrow = () => generateIndent( 0, argError );
          expect( fxThrow ).to.throw( RangeError, "arg2: generator (optional), should be a string value" );

        } );

      } );


    } );

  } );

} );
