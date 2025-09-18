import React,{useState} from "react";
import { FileNode } from "@/types"
import getExtension from "@/utils/getExtension";
import getIconByExtension from "@/utils/getIconsByExtension";
const renderFilesTree = (node: FileNode, setSelectedFile: React.Dispatch<React.SetStateAction<FileNode | null>>) => {
    const [selectedFolder,setSelectedFolder] = useState<string | null>(null);
    const [showFolderMenu,setShowFolderMenu]=useState<boolean>(false)
    const handleCreateNewFile=()=>{
        alert("New File Triggered")
    }
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
                    onClick={handleCreateNewFile}
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
                    {node.children && node.children.map(child => renderFilesTree(child, setSelectedFile))}
                </div>
            </div>
            
        );
    }
}
export default renderFilesTree;