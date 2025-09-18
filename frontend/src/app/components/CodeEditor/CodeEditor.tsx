"use client";
import React from "react";
import { Editor } from "@monaco-editor/react";

interface CodeEditorProps {
    language?: string;
    theme?: string;
}
const CodeEditor = ({
    language = "javascript",
    theme = "vs-dark"
}: CodeEditorProps) => {
    return (
        <div className="code-editor" style={{ height: "100vh" }}>
            <Editor
                height="100%"
                defaultValue="// Code Here"
                language={language}
                theme={theme}
            />
        </div>
    )
}
export default CodeEditor;

