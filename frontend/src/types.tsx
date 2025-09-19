export interface FileNode{
    id: string;
    name: string;
    type: 'file' | 'folder';
    children?: FileNode[];
    content?: string;
}

export interface CodeEditorProps {
    language?: string;
    theme?: string;
    uniqueId?: string;
    rootNode?: FileNode;

}
export interface renderFilesTreeProps{
    node: FileNode;
    setSelectedFile: React.Dispatch<React.SetStateAction<FileNode | null>>;
    selectedFolder: string | null;
    setSelectedFolder: React.Dispatch<React.SetStateAction<string | null>>;
    showFolderMenu: boolean;
    setShowFolderMenu: React.Dispatch<React.SetStateAction<boolean>>;
    showAddNewFile: boolean;
    setShowAddNewFile: React.Dispatch<React.SetStateAction<boolean>>;
    newFileName: string;
    setNewFileName: React.Dispatch<React.SetStateAction<string>>;
}