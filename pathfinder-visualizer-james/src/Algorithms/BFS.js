export function BFS(grid, startNode, finishNode) {
    const visitedNodesInOrder = [];
    let nodeStack = [];
    nodeStack.push(startNode);

    var directions = [[0,1], [-1,0], [0, -1], [1,0]]

    while (nodeStack.length) {

        const currNode = nodeStack.shift();
        if (currNode === finishNode) {
            return visitedNodesInOrder;
        }
        if (!currNode.isWall && (currNode.isStart || !currNode.isVisited)) {
            currNode.isVisited = true;
            visitedNodesInOrder.push(currNode)
            const {row, col} = currNode;
            let nextNode;
            for (const dir of directions) {
                if ((0<row && row < grid.length - 1) && (0<col && col <grid[0].length - 1)) {
                    nextNode = grid[row + dir[0]][col + dir[1]]
                    if (!nextNode.isVisited) {
                        nextNode.previousNode = currNode;
                        nodeStack.push(nextNode);
                    }
                }
            }
        }
    }
}