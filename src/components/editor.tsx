import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';

export default function Editor() {
    return (
        <CodeEditor
            style={{
                fontSize: 20,
                inputLineHeight: 26,
                highlighterLineHeight: 26,
            }}
            language="javascript"
            syntaxStyle={CodeEditorSyntaxStyles.atomOneDark}
            showLineNumbers
        />
    );
};

