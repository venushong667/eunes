
export interface Project {
    id: string;
    name: string;
    config: any;
}

export interface Board {
    id: string;
    name: string;
    projectId: string;
    position: number;
    config: any;
    memos: Array<Memo>;
}

export interface Memo {
    id: string;
    name: string;
    boardId: string;
    projectId: string;
    description: string;
    position: number;
    config: any;
}