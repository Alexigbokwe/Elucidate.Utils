export interface FlatTreeNode {
    id: string;
    level: number;
    hasParent: boolean;
    childrenCount: number;
}
export declare class MultiRootTree {
    rootIds: Array<string>;
    nodes: {
        [id: string]: Array<string>;
    };
    constructor(rootIds?: Array<string>, nodes?: {
        [id: string]: Array<string>;
    });
    initRootIds(): void;
    initNodes(): void;
    createEmptyNodeIfNotExist(nodeKey: string): void;
    getRootIds(): string[];
    getNodes(): {
        [id: string]: string[];
    };
    getObject(): {
        rootIds: string[];
        nodes: {
            [id: string]: string[];
        };
    };
    toObject(): {
        rootIds: string[];
        nodes: {
            [id: string]: string[];
        };
    };
    flatten(): Array<FlatTreeNode>;
    moveIdBeforeId(moveId: string, beforeId: string): void;
    moveIdAfterId(moveId: string, afterId: string): void;
    moveIdIntoId(moveId: string, insideId: string, atStart?: boolean): void;
    swapRootIdWithRootId(rootId: string, withRootId: string): void;
    swapRootPositionWithRootPosition(swapRootPosition: number, withRootPosition: number): void;
    deleteId(id: string): void;
    insertIdBeforeId(beforeId: string, insertId: string): void;
    insertIdAfterId(belowId: string, insertId: string): void;
    insertIdIntoId(insideId: string, insertId: string): void;
    insertIdIntoRoot(id: string, position?: number): void;
    insertIdIntoNode(nodeKey: string, id: string, position?: number): void;
    private moveId;
    private swapArrayElements;
    private rootDeleteId;
    private nodeAndSubNodesDelete;
    private nodeRefrencesDelete;
    private nodeDelete;
    private findRootId;
    private findNodeId;
    private findNode;
    private nodeInsertAtStart;
    private nodeInsertAtEnd;
    private rootDelete;
    private nodeDeleteAtIndex;
    private rootInsertAtStart;
    private rootInsertAtEnd;
}
//# sourceMappingURL=MultiRootTree.d.ts.map