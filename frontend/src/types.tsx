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