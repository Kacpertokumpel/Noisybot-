const generateIndent = require('./generate-indent');

const PATTERN_STRING_DELIMITER = /^(\'|\")$/;

function unminifiedJson({
  json,
  onReplace,
  space,
  isNoQuote
}) {

  json = JSON.stringify(
    json,
    onReplace instanceof Function ? onReplace: undefined,
    !!space ? space: undefined
  );

  let jsonUnminified = "";

  let depth = 0;

  let isInString = false;
  let isInArray = false;

  // is currently run a left value
  let isLv = false;

  // is currently run a right value
  let isRv = true;

  json.split('').forEach(char => {

    const isStringDelimiter = PATTERN_STRING_DELIMITER.test( char );

    if( isStringDelimiter ) {

      isInString = !isInString;
    }

    if( !isInString && /^\[|\]$/.test(char) ) {

      isInArray = !isInArray;
    }

    if( (!isInString && char === ":") || ( !isInString && /^(\,|\{)$/.test(char) ) ) {
      // switch between left value and right value

      if( !(char === "," && isInArray) ) {
        isLv = !isLv;
        isRv = !isRv;
      }
    }

    if( ( isLv && isNoQuote && isStringDelimiter ) ) {
      // current char is a keyname delimiter
      // and no quote is enabled

      // return is equal to `continue` directive from this forEach context
      return;
    }

    if( char === "{"  || char === "[" ) {

      depth++;
      jsonUnminified += char + "\n" + generateIndent( depth );
    }
    else if( char === "}" || char === "]") {

      depth--;
      jsonUnminified += "\n" + generateIndent( depth ) + char ;
    }
    else if( char === "," && !isInString ) {

      jsonUnminified += ",\n" + generateIndent( depth );
    }
    else if( char === ":" && !isInString ) {

      jsonUnminified += char + " ";
    }
    else {

      jsonUnminified += char;
    }

  });

  return jsonUnminified;
}

module.exports = unminifiedJson;
