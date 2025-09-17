"use client";
import React from "react";
import { Editor } from "@monaco-editor/react";

const CodeEditor=()=>{
    return(
        <div style={{height:"100vh"}}>
            <Editor
                height="100%"
                defaultLanguage="javascript"
                defaultValue="Code Here"
                language="javascript"
                theme="vs-dark"
            />
        </div>
    )
}
export default CodeEditor;

