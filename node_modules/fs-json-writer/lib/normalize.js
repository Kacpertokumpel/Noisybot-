function normalize( {
  content,
  extension,
  isEs6
} ) {

  if( extension === "json" ) {

    return content;

  } else {

    content = (!isEs6 ? "module.exports = ": "export default ") + content;

    return content;
  }

}

module.exports = normalize;
