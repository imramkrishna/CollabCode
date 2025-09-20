"use client";
import React, { useState, useEffect } from "react";
import { Editor } from "@monaco-editor/react";
import { FileNode, CodeEditorProps } from "@/types";
import FileTreeNode from "./FileTreeNode";
import { motion, AnimatePresence } from "framer-motion";

const initialFiles: FileNode = {
    id: 'root',
    name: 'my-project',
    type: 'folder',
    children: [
        {
            id: '1',
            name: 'src',
            type: 'folder',
            children: [
                {
                    id: '1-1',
                    name: 'index.js',
                    type: 'file',
                    content: "// Welcome to CollabCode IDE\n// A modern collaborative coding platform\n\nimport React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport './styles.css';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n\nconsole.log('🚀 App started successfully!');"
                },
                {
                    id: '1-2',
                    name: 'App.js',
                    type: 'file',
                    content: "import React, { useState } from 'react';\nimport './App.css';\n\nfunction App() {\n  const [count, setCount] = useState(0);\n  const [users] = useState(['Alice', 'Bob', 'Charlie']);\n\n  return (\n    <div className=\"App\">\n      <header className=\"App-header\">\n        <h1>🚀 CollabCode Project</h1>\n        <div className=\"counter\">\n          <button onClick={() => setCount(count - 1)}>-</button>\n          <span>Count: {count}</span>\n          <button onClick={() => setCount(count + 1)}>+</button>\n        </div>\n        <div className=\"users\">\n          <h3>Active Users:</h3>\n          <ul>\n            {users.map((user, index) => (\n              <li key={index}>{user}</li>\n            ))}\n          </ul>\n        </div>\n      </header>\n    </div>\n  );\n}\n\nexport default App;"
                },
                {
                    id: '1-3',
                    name: 'App.css',
                    type: 'file',
                    content: ".App {\n  text-align: center;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n.App-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n}\n\n.counter {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.counter button {\n  padding: 0.5rem 1rem;\n  background: #14b8a6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  font-size: 1.2rem;\n  transition: all 0.2s;\n}\n\n.counter button:hover {\n  background: #0d9488;\n  transform: scale(1.05);\n}\n\n.users ul {\n  list-style: none;\n  padding: 0;\n}\n\n.users li {\n  padding: 0.5rem;\n  background: rgba(255, 255, 255, 0.1);\n  margin: 0.2rem 0;\n  border-radius: 0.3rem;\n}"
                }
            ]
        },
        {
            id: '2',
            name: 'public',
            type: 'folder',
            children: [
                {
                    id: '2-1',
                    name: 'index.html',
                    type: 'file',
                    content: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>CollabCode Project</title>\n  <link rel=\"icon\" href=\"/favicon.ico\" />\n</head>\n<body>\n  <div id=\"root\"></div>\n  <script src=\"/src/index.js\"></script>\n</body>\n</html>"
                }
            ]
        },
        {
            id: '3',
            name: 'package.json',
            type: 'file',
            content: "{\n  \"name\": \"collabcode-project\",\n  \"version\": \"1.0.0\",\n  \"description\": \"A collaborative coding project\",\n  \"main\": \"src/index.js\",\n  \"scripts\": {\n    \"start\": \"react-scripts start\",\n    \"build\": \"react-scripts build\",\n    \"test\": \"react-scripts test\",\n    \"eject\": \"react-scripts eject\"\n  },\n  \"dependencies\": {\n    \"react\": \"^18.2.0\",\n    \"react-dom\": \"^18.2.0\",\n    \"react-scripts\": \"5.0.1\"\n  },\n  \"browserslist\": {\n    \"production\": [\n      \">0.2%\",\n      \"not dead\",\n      \"not op_mini all\"\n    ],\n    \"development\": [\n      \"last 1 chrome version\",\n      \"last 1 firefox version\",\n      \"last 1 safari version\"\n    ]\n  }\n}"
        },
        {
            id: '4',
            name: 'README.md',
            type: 'file',
            content: "# 🚀 CollabCode Project\n\nWelcome to your collaborative coding environment!\n\n## Features\n\n- ⚡ Real-time collaboration\n- 🎨 Modern UI/UX\n- 🔧 Integrated development tools\n- 📱 Responsive design\n\n## Getting Started\n\n1. Start coding in the editor\n2. Invite team members to collaborate\n3. Use the terminal for commands\n4. Deploy with one click\n\n## Available Scripts\n\n- `npm start` - Start development server\n- `npm build` - Build for production\n- `npm test` - Run tests\n\n## Collaboration\n\nThis project supports real-time collaboration. You can see:\n- Live cursors of other developers\n- Real-time code changes\n- Shared terminal sessions\n- Voice/video chat integration\n\nHappy coding! 🎉"
        }
    ]
};

const CodeEditor = ({
    language = "javascript",
    theme = "vs-dark",
    uniqueId,
    rootNode
}: CodeEditorProps) => {
    const [selectedFile, setSelectedFile] = useState<FileNode | null>(null);
    const [files, setFiles] = useState<FileNode>(initialFiles);
    const [openTabs, setOpenTabs] = useState<FileNode[]>([]);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Initialize with first file open
    useEffect(() => {
        const firstFile = files.children?.[0]?.children?.[0];
        if (firstFile && firstFile.type === 'file') {
            setSelectedFile(firstFile);
            setOpenTabs([firstFile]);
        }
    }, []);

    const openFileInTab = (file: FileNode) => {
        if (file.type === 'file') {
            setSelectedFile(file);
            if (!openTabs.find(tab => tab.id === file.id)) {
                setOpenTabs([...openTabs, file]);
            }
        }
    };

    const closeTab = (fileId: string, e: React.MouseEvent) => {
        e.stopPropagation();
        const newTabs = openTabs.filter(tab => tab.id !== fileId);
        setOpenTabs(newTabs);
        
        if (selectedFile?.id === fileId) {
            setSelectedFile(newTabs.length > 0 ? newTabs[newTabs.length - 1] : null);
        }
    };

    const handleFileSelect = (file: FileNode | null) => {
        if (file && file.type === 'file') {
            openFileInTab(file);
        }
    };

    // Watch for selectedFile changes and open in tab
    useEffect(() => {
        if (selectedFile && selectedFile.type === 'file') {
            openFileInTab(selectedFile);
        }
    }, [selectedFile]);

    const getLanguageFromFileName = (fileName: string) => {
        const ext = fileName.split('.').pop()?.toLowerCase();
        switch (ext) {
            case 'js': case 'jsx': return 'javascript';
            case 'ts': case 'tsx': return 'typescript';
            case 'py': return 'python';
            case 'css': return 'css';
            case 'html': return 'html';
            case 'json': return 'json';
            case 'md': return 'markdown';
            default: return 'text';
        }
    };

    return (
        <div className="flex h-full bg-[#0d1117] text-white">
            {/* Enhanced Sidebar */}
            <motion.div
                className={`bg-[#161b22] border-r border-[#30363d] flex flex-col transition-all duration-300 ${
                    sidebarCollapsed ? 'w-12' : 'w-72'
                }`}
                initial={false}
                animate={{ width: sidebarCollapsed ? 48 : 288 }}
            >
                {/* Sidebar Header */}
                <div className="h-12 flex items-center justify-between px-3 border-b border-[#30363d]">
                    {!sidebarCollapsed && (
                        <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-300">EXPLORER</span>
                        </div>
                    )}
                    <motion.button
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        className="p-1 hover:bg-[#30363d] rounded transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <span className="text-gray-400 text-sm">
                            {sidebarCollapsed ? '👁️' : '👀'}
                        </span>
                    </motion.button>
                </div>

                {!sidebarCollapsed && (
                    <>
                        {/* Search Bar */}
                        <div className="p-3 border-b border-[#30363d]">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search files..."
                                    className="w-full bg-[#0d1117] border border-[#30363d] text-white text-sm px-3 py-1.5 rounded-md focus:outline-none focus:border-teal-500 pl-8"
                                />
                                <span className="absolute left-2.5 top-1.5 text-gray-400 text-sm">🔍</span>
                            </div>
                        </div>

                        {/* File Tree */}
                        <div className="flex-1 overflow-y-auto p-2">
                            <FileTreeNode 
                                node={files} 
                                setSelectedFile={setSelectedFile}
                            />
                        </div>

                        {/* Sidebar Footer */}
                        <div className="p-3 border-t border-[#30363d] space-y-2">
                            <div className="flex items-center justify-between text-xs text-gray-400">
                                <span>Git Status</span>
                                <span className="text-teal-400">main ✓</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-gray-400">4 collaborators online</span>
                            </div>
                        </div>
                    </>
                )}
            </motion.div>

            {/* Main Editor Area */}
            <div className="flex-1 flex flex-col">
                {/* Enhanced Tab Bar */}
                <div className="h-10 bg-[#161b22] border-b border-[#30363d] flex items-center overflow-x-auto">
                    <div className="flex">
                        <AnimatePresence>
                            {openTabs.map((tab) => (
                                <motion.div
                                    key={tab.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className={`flex items-center px-3 py-2 border-r border-[#30363d] cursor-pointer group min-w-0 ${
                                        selectedFile?.id === tab.id 
                                            ? 'bg-[#0d1117] text-white' 
                                            : 'bg-[#21262d] text-gray-400 hover:text-white'
                                    }`}
                                    onClick={() => setSelectedFile(tab)}
                                >
                                    <span className="mr-2 text-xs flex-shrink-0">
                                        {tab.name.endsWith('.js') || tab.name.endsWith('.jsx') ? '📄' :
                                         tab.name.endsWith('.css') ? '🎨' :
                                         tab.name.endsWith('.html') ? '🌐' :
                                         tab.name.endsWith('.json') ? '⚙️' :
                                         tab.name.endsWith('.md') ? '📝' : '📄'}
                                    </span>
                                    <span className="text-xs font-medium truncate max-w-24">{tab.name}</span>
                                    <motion.button
                                        onClick={(e) => closeTab(tab.id, e)}
                                        className="ml-2 text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        ×
                                    </motion.button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                    
                    {/* Add new tab button */}
                    <motion.button
                        onClick={() => setIsSearchOpen(true)}
                        className="px-3 py-2 text-gray-400 hover:text-white hover:bg-[#30363d] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        +
                    </motion.button>
                </div>

                {/* Editor */}
                <div className="flex-1 relative">
                    {selectedFile ? (
                        <Editor
                            height="100%"
                            value={selectedFile.content}
                            language={getLanguageFromFileName(selectedFile.name)}
                            theme={theme}
                            options={{
                                fontFamily: '"JetBrains Mono", "Fira Code", "SF Mono", "Consolas", monospace',
                                fontSize: 14,
                                lineHeight: 1.6,
                                minimap: { enabled: true, scale: 0.5 },
                                smoothScrolling: true,
                                cursorBlinking: 'smooth',
                                cursorSmoothCaretAnimation: 'on',
                                scrollbar: {
                                    verticalScrollbarSize: 8,
                                    horizontalScrollbarSize: 8,
                                },
                                padding: { top: 20, bottom: 20 },
                                renderLineHighlight: 'gutter',
                                contextmenu: true,
                                automaticLayout: true,
                                wordWrap: 'bounded',
                                lineNumbers: 'on',
                                glyphMargin: true,
                                folding: true,
                                links: true,
                                colorDecorators: true,
                                // lightbulb: { enabled: 'on' }, // Removed due to type compatibility
                                suggest: {
                                    showKeywords: true,
                                    showSnippets: true,
                                    showFunctions: true,
                                },
                            }}
                        />
                    ) : (
                        <div className="h-full flex items-center justify-center bg-[#0d1117]">
                            <div className="text-center space-y-4">
                                <div className="text-6xl">👨‍💻</div>
                                <h2 className="text-xl text-gray-300">Welcome to CollabCode IDE</h2>
                                <p className="text-gray-500">Select a file from the explorer to start coding</p>
                                <motion.button
                                    onClick={() => {
                                        const firstFile = files.children?.[0]?.children?.[0];
                                        if (firstFile) openFileInTab(firstFile);
                                    }}
                                    className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Open First File
                                </motion.button>
                            </div>
                        </div>
                    )}

                    {/* Live collaboration cursors indicator */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                        <motion.div
                            className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <span className="text-xs text-blue-400">Alice typing...</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeEditor;

