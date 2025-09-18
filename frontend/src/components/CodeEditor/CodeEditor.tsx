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
        <div
            className="code-editor flex min-h-screen bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#21262d]"
            style={{ fontFamily: 'var(--font-mono, "JetBrains Mono", "Fira Code", "SF Mono", "Consolas", monospace)' }}
        >
            {/* Sidebar */}
            <div
                className="sidebar w-[280px] min-w-[260px] max-w-[320px] bg-gradient-to-b from-[#161b22] to-[#0d1117] border-r border-[#30363d]/50 flex flex-col transition-all duration-300 ease-out"
                style={{ 
                    boxShadow: 'inset -1px 0 0 0 rgba(48, 54, 61, 0.2), 4px 0 12px 0 rgba(0,0,0,0.15)' 
                }}
            >
                {/* Sidebar Header */}
                <div className="p-4 border-b border-[#30363d]/40">
                    <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#27ca3f] rounded-full"></div>
                    </div>
                    <h3 
                        className="font-semibold text-sm text-[#f0f6fc] tracking-wide uppercase opacity-80" 
                        style={{ fontFamily: 'var(--font-sans, "Inter", "SF Pro Display", sans-serif)' }}
                    >
                        Explorer
                    </h3>
                </div>

                {/* File Tree */}
                <div className="flex-1 p-3">
                    <div className="space-y-1">
                        <div 
                            className="group flex items-center px-3 py-2 rounded-md cursor-pointer text-[#8b949e] hover:bg-[#21262d] hover:text-[#f0f6fc] transition-all duration-200 ease-out"
                        >
                            <span className="mr-2 text-xs opacity-60">📄</span>
                            <span className="text-sm font-medium">index.js</span>
                        </div>
                        <div 
                            className="group flex items-center px-3 py-2 rounded-md cursor-pointer text-[#8b949e] hover:bg-[#21262d] hover:text-[#f0f6fc] transition-all duration-200 ease-out"
                        >
                            <span className="mr-2 text-xs opacity-60">⚛️</span>
                            <span className="text-sm font-medium">App.js</span>
                        </div>
                        <div 
                            className="group flex items-center px-3 py-2 rounded-md cursor-pointer text-[#8b949e] hover:bg-[#21262d] hover:text-[#f0f6fc] transition-all duration-200 ease-out"
                        >
                            <span className="mr-2 text-xs opacity-60">🎨</span>
                            <span className="text-sm font-medium">styles.css</span>
                        </div>
                        <div 
                            className="group flex items-center px-3 py-2 rounded-md cursor-pointer text-[#8b949e] hover:bg-[#21262d] hover:text-[#f0f6fc] transition-all duration-200 ease-out"
                        >
                            <span className="mr-2 text-xs opacity-60">📝</span>
                            <span className="text-sm font-medium">README.md</span>
                        </div>
                    </div>
                </div>

                {/* Sidebar Footer */}
                <div className="p-3 border-t border-[#30363d]/40">
                    <div className="flex items-center space-x-2 text-[#8b949e] text-xs">
                        <div className="w-2 h-2 bg-[#238636] rounded-full animate-pulse"></div>
                        <span>Connected</span>
                    </div>
                </div>
            </div>

            {/* Main Editor Area */}
            <div className="editor flex-1 flex flex-col bg-gradient-to-br from-[#0d1117] to-[#161b22]">
                {/* Tab Bar */}
                <div className="flex items-center px-4 py-2 bg-gradient-to-r from-[#161b22] to-[#21262d] border-b border-[#30363d]/40">
                    <div className="flex items-center space-x-1">
                        <div className="flex items-center px-3 py-1.5 bg-[#21262d] rounded-md border border-[#30363d]/50">
                            <span className="mr-2 text-xs">📄</span>
                            <span className="text-sm text-[#f0f6fc] font-medium">index.js</span>
                            <button className="ml-2 text-[#8b949e] hover:text-[#f0f6fc] transition-colors duration-150">
                                ×
                            </button>
                        </div>
                    </div>
                </div>

                {/* Code Editor */}
                <div 
                    className="flex-1 bg-gradient-to-br from-[#0d1117] to-[#161b22]"
                    style={{ 
                        minHeight: 'calc(100vh - 60px)',
                        boxShadow: 'inset 0 1px 0 0 rgba(48, 54, 61, 0.2)' 
                    }}
                >
                    <Editor
                        height="100%"
                        defaultValue={"// Welcome to CollabCode\n// Start coding together!\n\nconsole.log('Hello, World!');"}
                        language={language}
                        theme={theme}
                        options={{
                            fontFamily: 'var(--font-mono, "JetBrains Mono", "Fira Code", "SF Mono", "Consolas", monospace)',
                            fontSize: 14,
                            lineHeight: 1.6,
                            minimap: { enabled: false },
                            smoothScrolling: true,
                            cursorBlinking: 'smooth',
                            cursorSmoothCaretAnimation: 'on',
                            scrollbar: {
                                verticalScrollbarSize: 12,
                                horizontalScrollbarSize: 12,
                                verticalSliderSize: 8,
                                horizontalSliderSize: 8,
                            },
                            padding: { top: 20, bottom: 20 },
                            renderLineHighlight: 'gutter',
                            selectionHighlight: false,
                            occurrencesHighlight: 'off',
                            roundedSelection: false,
                            scrollBeyondLastLine: false,
                            automaticLayout: true,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
export default CodeEditor;

