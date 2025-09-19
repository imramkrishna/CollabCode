import React, { useState } from "react";
import { FileNode } from "@/types";
import getExtension from "@/utils/getExtension";
import getIconByExtension from "@/utils/getIconsByExtension";

interface FileTreeNodeProps {
    node: FileNode;
    setSelectedFile: React.Dispatch<React.SetStateAction<FileNode | null>>;
}

// ✅ This is now a REACT COMPONENT with PascalCase name
const FileTreeNode = ({ node, setSelectedFile }: FileTreeNodeProps) => {
    // ✅ Each component manages its OWN state
    const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
    const [showFolderMenu, setShowFolderMenu] = useState<boolean>(false);
    const [showAddNewFile, setShowAddNewFile] = useState<boolean>(false);
    const [newFileName, setNewFileName] = useState<string>('');

    const handleCreateFile = (targetNode: FileNode) => {
        if (newFileName.trim()) {
            // Ensure children array exists
            if (!targetNode.children) {
                targetNode.children = [];
            }
            targetNode.children.push({
                id: Date.now().toString(),
                name: newFileName,
                type: 'file',
                content: ''
            });
            setNewFileName('');
            setShowAddNewFile(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent, targetNode: FileNode) => {
        if (e.key === 'Enter') {
            handleCreateFile(targetNode);
        } else if (e.key === 'Escape') {
            setNewFileName('');
            setShowAddNewFile(false);
        }
    };

    // Render file nodes
    if (node.type === 'file') {
        const extension = getExtension(node.name);
        const icon = getIconByExtension(extension);
        
        return (
            <div
                className="file-item px-4 py-2 hover:bg-[#21262d] cursor-pointer rounded-md transition-all duration-200 ease-out text-[#8b949e] hover:text-[#f0f6fc]"
                onClick={() => setSelectedFile(node)}
            >
                <span className="mr-2 text-xs">{icon}</span>
                <span className="text-sm font-medium">{node.name}</span>
            </div>
        );
    }

    // Render folder nodes
    return (
        <div className="folder-item">
            <div className="folder relative">
                <span
                    onClick={() => {
                        if (selectedFolder === node.id) {
                            setSelectedFolder(null);
                        } else {
                            setSelectedFolder(node.id);
                        }
                    }}
                    className="mr-2 text-md cursor-pointer"
                >
                    {selectedFolder === node.id ? '▼' : '►'} 📁
                </span>
                <span>{node.name}</span>
                <span 
                    className="text-md ml-2 cursor-pointer hover:bg-[#30363d] px-1 rounded"
                    onClick={() => setShowAddNewFile(!showAddNewFile)}
                    title="Add new file"
                >
                    +
                </span>
                
                {showFolderMenu && (
                    <div className="context-menu flex flex-col bg-[#161b22] p-2 rounded-md border border-[#30363d]/50 absolute z-10 mt-2">
                        <button 
                            className="text-left px-2 py-1 hover:bg-[#21262d] rounded text-sm"
                            onClick={() => {
                                setShowAddNewFile(true);
                                setShowFolderMenu(false);
                            }}
                        >
                            New File
                        </button>
                        <button 
                            className="text-left px-2 py-1 hover:bg-[#21262d] rounded text-sm"
                            onClick={() => {/* Handle new folder */}}
                        >
                            New Folder
                        </button>
                        <button 
                            className="text-left px-2 py-1 hover:bg-[#21262d] rounded text-sm"
                            onClick={() => {/* Handle rename */}}
                        >
                            Rename
                        </button>
                        <button 
                            className="text-left px-2 py-1 hover:bg-[#21262d] rounded text-sm text-red-400"
                            onClick={() => {/* Handle delete */}}
                        >
                            Delete
                        </button> 
                    </div>
                )}
            </div>
            
            {/* Show folder contents when expanded */}
            {selectedFolder === node.id && (
                <div className="ml-4 border-l border-[#30363d]/20 pl-2">
                    {/* Add new file input */}
                    {showAddNewFile && (
                        <div className="flex items-center mb-1 pl-4">
                            <span className="mr-2 text-xs">📄</span>
                            <input
                                type="text"
                                value={newFileName}
                                onChange={(e) => setNewFileName(e.target.value)}
                                onKeyDown={(e) => handleKeyPress(e, node)}
                                onBlur={() => {
                                    if (!newFileName.trim()) {
                                        setShowAddNewFile(false);
                                    }
                                }}
                                className="bg-[#0d1117] border border-[#30363d] text-[#f0f6fc] text-sm px-2 py-1 rounded-sm outline-none focus:border-[#1f6feb] focus:ring-1 focus:ring-[#1f6feb] min-w-[120px]"
                                placeholder="Enter file name..."
                                autoFocus
                            />
                        </div>
                    )}
                    
                    {/* ✅ Render child nodes - only need to pass 2 props! */}
                    {node.children?.map(child => (
                        <FileTreeNode 
                            key={child.id} 
                            node={child} 
                            setSelectedFile={setSelectedFile}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FileTreeNode;