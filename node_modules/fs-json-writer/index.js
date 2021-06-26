/**
 * @file endpoint package <https://npmjs.com/package/fs-json-writer> this package has been developed for the need of package <https://npmjs.com/package/react-native-style-parser>
 *
 * @package fs-json-writer
 * @version 0.9.0
 * @license BDSD-2-CLAUSE
 * @author S.GABORIEAU <sam.gabor@hotmail.com> (https://github.com/Orivoir/)
 * @see README.md
 */

const createFile = require('./lib/create-file');
const createContent = require('./lib/create-content');

/**
 * @description synchrone write *JSON* content
 * @param {{path: string, state: object, isEs6?: boolean, isNoQuote?: boolean, onReplace?: () => any, space?: string|number }} config
 */
function writeJson( config ) {

  const content = createContent( config );

  createFile({
    path: config.path,
    content
  });

}

/**
 * @description asynchrone write *JSON* content with usage **Promise** API
 * @param {{path: string, state: object, isEs6?: boolean, isNoQuote?: boolean, onReplace?: () => any, space?: string|number}} config
 * @returns Promise
 */
writeJson.async = function( config ) {

  const content = createContent( config );

  return new Promise( (resolve, reject) => {

    createFile({
      path: config.path,
      content,
      callback: function( error ) {

        if( error ) {
          reject( error );
        } else {

          resolve( {
            path,
            content,
            state
          } );
        }
      }
    });

  } );

};

/**
 * @description asynchrone write *JSON* content with callback response permuted to natively fs module
 * @param {{path: string, state: object, isEs6?: boolean, isNoQuote?: boolean, callback?: () => void, onError?: () => void, onSuccess?: () => void, onReplace?: () => any, space?: string|number}} config
 */
writeJson.legacyAsync = function( config ) {

  const {
    callback,
    onSuccess,
    onError,
    path
  } = config;

  const content = createContent( config );

  createFile({
    path,
    content,
    callback: error => {

      if( callback instanceof Function ) {

        callback( error || {
          path,
          content,
          state
        } );

      } else {

        if( error ) {

          if( onError instanceof Function ) {

            onError( error );
          }

        } else if( onSuccess instanceof Function ) {

          onSuccess( {
            path,
            content,
            state
          } );

        }

      }

    }
  });

};

module.exports = writeJson;
