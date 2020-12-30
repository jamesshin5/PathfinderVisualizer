export function DFS(grid, startNode, finishNode) {
    const visitedNodesInOrder = [];
    let nextNodesStack = [];
    nextNodesStack.push(startNode);

    while (nextNodesStack.length) {
        const currNode = nextNodesStack.pop()
        if (currNode === finishNode) {
            console.log('dfs visited', visitedNodesInOrder)
            return visitedNodesInOrder;
        }

        if (
            !currNode.isWall &&
            (currNode.isStart || !currNode.isVisited)
            ) {
                currNode.isVisited = true;
                visitedNodesInOrder.push(currNode);
                const {col, row} = currNode;
                let nextNode;
                if (row>0) {
                    nextNode = grid[row-1][col]
                    if (!nextNode.isVisited) {
                        nextNode.previousNode = currNode;
                        nextNodesStack.push(nextNode);
                    }
                }
                if (row < grid.length - 1) {
                    nextNode = grid[row+1][col];
                    if (!nextNode.isVisited) {
                        nextNode.previousNode = currNode;
                        nextNodesStack.push(nextNode);
                    }
                }
                if (col > 0) {
                    nextNode = grid[row][col - 1];
                    if (!nextNode.isVisited) {
                      nextNode.previousNode = currNode;
                      nextNodesStack.push(nextNode);
                    }
                  }
                  if (col < grid[0].length - 1) {
                    nextNode = grid[row][col + 1];
                    if (!nextNode.isVisited) {
                      nextNode.previousNode = currNode;
                      nextNodesStack.push(nextNode);
                    }
                  }
            }



    }
}