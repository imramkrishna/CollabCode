import React,{useState} from "react";
import { FileNode } from "@/types"
import getExtension from "@/utils/getExtension";
import getIconByExtension from "@/utils/getIconsByExtension";
const renderFilesTree = (node: FileNode, setSelectedFile: React.Dispatch<React.SetStateAction<FileNode | null>>) => {
    const [selectedFolder,setSelectedFolder] = useState<string | null>(null);
    const [showFolderMenu,setShowFolderMenu]=useState<boolean>(false)
    const [showAddNewFile,setShowAddNewFile]=useState<boolean>(false)
    const [newFileName, setNewFileName] = useState<string>('');

    const handleCreateFile = (node:FileNode) => {
        if (newFileName.trim()) {
            node.children.push({
                id: Date.now().toString(),
                name: newFileName,
                type: 'file',
                content: ''
            })
            setNewFileName('');
            setShowAddNewFile(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent,node:FileNode) => {
        if (e.key === 'Enter') {
            handleCreateFile(node);
        } else if (e.key === 'Escape') {
            setNewFileName('');
            setShowAddNewFile(false);
        }
    };

    if (node.type === 'file') {
        const extension = getExtension(node.name);
        const icon = getIconByExtension(extension);
        
        return (
            <div
                key={node.id}
                className="file-item px-4 py-2 hover:bg-[#21262d] cursor-pointer rounded-md transition-all duration-200 ease-out text-[#8b949e] hover:text-[#f0f6fc]"
                onClick={()=>{
                    setSelectedFile(node);
                }}
            >
                <span className="mr-2 text-xs">{icon}</span>
                <span className="text-sm font-medium">{node.name}</span>
            </div>
        );
    } else {
        return (
            <div key={node.id} className="folder-item">
                <div className="folder">
                    <span
                    onClick={()=>{
                        if(selectedFolder === node.id){
                            setSelectedFolder(null);
                        }else{
                            setSelectedFolder(node.id);
                        }
                    }}
                    className="mr-2 text-md">{selectedFolder === node.id ? '▼' : '►'} 📁</span>
                    <span>{node.name}</span>
                    <span className="text-md ml-2 cursor-pointer"
                    onClick={()=>setShowAddNewFile(!showAddNewFile)}
                    >{/* Adding New File Icon here */}+</span>
                    {showFolderMenu && (
                        <div className="context-menu flex flex-col space-x-2 bg-[#161b22] p-2 rounded-md border border-[#30363d]/50 absolute">
                            <button onClick={() => {/* Handle new file */}}>New File</button>
                            <button onClick={() => {/* Handle new folder */}}>New Folder</button>
                            <button onClick={() => {/* Handle rename */}}>Rename</button>
                            <button onClick={() => {/* Handle delete */}}>Delete</button> 
                        </div>
                    )}
                </div>
                <div className="ml-4 border-l border-[#30363d]/20 pl-2">
                {/** adding a input for creating new file*/}
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
                    {node.children && node.children.map(child => renderFilesTree(child, setSelectedFile))}
                </div>
            </div>
            
        );
    }
}
export default renderFilesTree;