import { FileNode } from "@/types"
import getExtension from "@/utils/getExtension";
import getIconByExtension from "@/utils/getIconsByExtension";
const renderFilesTree = (node: FileNode, setSelectedFile: React.Dispatch<React.SetStateAction<FileNode | null>>) => {


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
                <div className="drop-down">
                    <span className="mr-2 text-xs">📁</span>
                    <span>{node.name}</span>
                </div>
                <div className="ml-4 border-l border-[#30363d]/20 pl-2">
                    {node.children && node.children.map(child => renderFilesTree(child, setSelectedFile))}
                </div>
            </div>
            
        );
    }
}
export default renderFilesTree;