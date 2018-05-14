'use strict';

import * as vscode from 'vscode';
import JSXConvertor from './JSXConvertor';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerTextEditorCommand('extension.convertHTMLtoJSX', () => {

        let editor = vscode.window.activeTextEditor;
        if (!editor) {            
            return;
        }

        let selection = editor.selection;
        let range = new vscode.Range(selection.start.line, selection.start.character, selection.end.line, selection.end.character);
        let text = editor.document.getText(selection);
        const jsxConverter = new JSXConvertor();
        let newString = jsxConverter.convert(text);

        editor.edit(function (editBuilder: vscode.TextEditorEdit) {
            editBuilder.replace(range, newString);
        }, );
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {

}