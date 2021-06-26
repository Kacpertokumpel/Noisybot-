function generateIndent( depth, generator="\t" ) {

  if( typeof depth !== "number" || isNaN( depth ) || !isFinite( depth ) ) {

    throw new RangeError("arg1: depth, should be a number");
  }

  if( typeof generator !== "string") {

    throw new RangeError("arg2: generator (optional), should be a string value");
  }

  depth = parseInt( depth );

  return Array.from(
    Array( depth ).keys()
  )
  .map( () => generator )
  .join('');

}

module.exports = generateIndent;
