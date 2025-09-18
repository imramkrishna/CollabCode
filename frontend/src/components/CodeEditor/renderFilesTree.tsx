import { FileNode } from "@/types"
const renderFilesTree = (node: FileNode, setSelectedFile: React.Dispatch<React.SetStateAction<FileNode | null>>) => {
    if (node.type === 'file') {
        return (
            <div
                key={node.id}
                className="file-item px-4 py-2 hover:bg-[#21262d] cursor-pointer rounded-md"
                onClick={()=>{
                    setSelectedFile(node);
                }}
            >
                <span className="mr-2 text-xs">📄</span>
                {node.name}
            </div>
        );
    } else {
        return (
            <div key={node.id} className="folder-item">
                <div className="px-4 py-2 font-semibold text-[#f0f6fc]">{node.name}</div>
                <div className="ml-4 border-l border-[#30363d]/20 pl-2">
                    {node.children && node.children.map(child => renderFilesTree(child, setSelectedFile))}
                </div>
            </div>
            
        );
    }
}
export default renderFilesTree;