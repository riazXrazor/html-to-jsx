import * as assert from 'assert';
import JSXConvertor from '../JSXConvertor';

suite("Extension Tests", function () {

    // Defines a Mocha unit test
    test("convert html with one line", function () {
        var html = '<!-- Hello world --> <div class="awesome" style="border: 1px solid red"> <label for="name">Enter your name: </label> <input type="text" id="name" /> </div> <p>Enter your HTML here</p>';
        var jsTool = new JSXConvertor();
        var resultString = jsTool.convert(html);
        var expectedString = '<div> {/* Hello world */} <div className="awesome" style={{border: \'1px solid red\'}}> <label htmlFor="name">Enter your name: </label> <input type="text" id="name" /> </div> <p>Enter your HTML here</p> </div>';
        assert.strictEqual(resultString, expectedString);
    });
});