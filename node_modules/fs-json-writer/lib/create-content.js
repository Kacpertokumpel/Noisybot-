const unminifiedJson = require('./unminified-json');
const getExtension = require('./get-extension');
const normalize = require('./normalize');

function createContent({
  state,
  path,
  isEs6,
  isNoQuote,
  minimified=false,

  // replacer and space of JSON.stringify: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
  onReplace,
  space
}) {

  if( typeof state !== "object" ) {

    throw new RangeError('attribute state should be a object');
  }

  return !minimified ? normalize({
    content: unminifiedJson( {
      json: state,
      onReplace,
      space,
      isNoQuote
    } ),
    extension: getExtension( path ),
    isEs6
  }): JSON.stringify( state );

}

module.exports = createContent;
