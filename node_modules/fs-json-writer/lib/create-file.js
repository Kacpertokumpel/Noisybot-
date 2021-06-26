const fs = require('fs');

function createFile( {
  path,
  content,
  callback,
  encoding="utf8"
} ) {

  if( callback instanceof Function ) {

    fs.writeFile(
      path,
      content,
      callback
    );

  } else {

    fs.writeFileSync(
      path,
      content,
      {
        encoding
      }
    );

  }

}

module.exports = createFile;
