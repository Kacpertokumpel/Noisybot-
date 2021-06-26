const pathResolver = require('path');

function getExtension( path ) {

  if( typeof path !== "string") {

    throw RangeError('arg1: path, should be a string value');
  }

  if( path.indexOf('.') === -1 ) {

    return "";
  }

  const filename = pathResolver.basename( path );

  const ext = filename.split('.').slice( -1 )[0].toLocaleLowerCase();

  return ext;
}

module.exports = getExtension;
