'use strict';

const HTMLtoJSX = require('htmltojsx');

export default class JSXConvertor {
    convert(input: string): string {
        let output: string; 
        let converter = new HTMLtoJSX({
            createClass: false,
        });
          output = converter.convert(input);
          return output;
        
    }

}