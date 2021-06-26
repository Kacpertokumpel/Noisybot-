# [fs-json-writer](https://npmjs.com/package/fs-json-writer)

> Generate JSON file content readable by a human

The native solution [fs.writeFile](https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_fs_writefile_file_data_options_callback) combined with [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) generate a minified content because **JSON.stringify** is designed for
data transfer.

This package full rewrite a *JavaScript Object Notation* with resolve tabulation depth and resolve nested object/array.

- [installation](#installation)
- [usage](#usage)
  - [json file](#json-file)
  - [js file](#js-file)
  - [async](#async)
- [optionals](#optionals)

## installation

in depending your need you can install at **dev-dependencies**

```bash
> npm install --save fs-json-writer
```

or with yarn

```bash
> yarn add fs-json-writer
```

## usage

### json file

```js
const jsonWriter = require('fs-json-writer');
const path = require('path');


const myHumanJson = {

  version: "1.0.0",
  details: "this is a stable version with goodly peoples ^.^"
};

jsonWriter({

  path: path.join( __dirname, "./file-name.json" ),

  state: myHumaJson
});

```

output *(filename.json)*
```json
{
  "version": "1.0.0",
  "details": "this is a stable version with goodly peoples ^.^"
}
```

This encoding use is always **UTF-8** for write a **JSON** content
and `path` argument should be a **absolute path**

## js file

```js
const jsonWriter = require('fs-json-writer');
const path = require('path');


const myHumanJson = {

  version: "1.0.0",
  details: "this is a stable version with goodly peoples ^.^"
};

jsonWriter({

  path: path.join( __dirname, "./file-name.js" ),
  state: myHumaJson,

  isEs6: true,
  isNoQuote: true
});

```

extension of filename determined if content should be JS or JSON file.

output *(filename.js)*
```js
export default {

  version: "1.0.0",
  details: "this is a stable version with goodly peoples ^.^"
}
```

### async

Can **asynchrone** generate content with [Promise API](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) or inehrit from natively [fs module](https://nodejs.org/docs/latest-v0.12.x/doc/api/fs.html) callback system.

#### Promise

```js
const jsonWriter = require('fs-json-writer');
const path = require('path');


const myHumanJson = {

  version: "1.0.0",
  details: "this is a stable version with goodly peoples ^.^"
};

jsonWriter.async({

  path: path.join( __dirname, "./file-name.js" ),
  state: myHumaJson,

  isEs6: true
})
.then( ({ path, content, state }) => {

  console.log( "success write at:" + path + " the content: " + content + " from javascript object: ", state );

} )
.catch( error => {

  console.log( error );

  throw "Oops, something went wrong.";

} );

```

#### Callback


```js
const jsonWriter = require('fs-json-writer');
const path = require('path');


const myHumanJson = {

  version: "1.0.0",
  details: "this is a stable version with goodly peoples ^.^"
};

jsonWriter.legacyAsync({

  path: path.join( __dirname, "./file-name.js" ),
  state: myHumaJson,

  isEs6: true,
  isNoQuote: true,

  onError: error => {

    console.log( error );

    throw "Oops, something went wrong.";
  },

  onSuccess: ({path, content, state}) => {

    console.log( "success write at:" + path + " the content: " + content + " from javascript object: ", state );

  }

});

```

## optionals

From a syn/async call can define optionals attributes: `onReplace: () => any | string[] | number[]`, `space: string | number`
this attributes is passed to **arg2** and **arg3** of [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

Please if you detect any bugs/undetermined comportement open new [issue](https://github.com/Orivoir/fs-json-writer/issues)
