export function Greedy(grid, startNode, finishNode) {
    const visitedNodesInOrder = [];
    let nextNodesStack = [startNode]
    while (nextNodesStack.length) {
        sortUnvisited(nextNodesStack)
        const currNode = nextNodesStack.shift();
        if (currNode === finishNode) return visitedNodesInOrder;
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

function sortUnvisited(unvisited) {
    unvisited.sort((nodeA, nodeB) => nodeA.distanceToFinishNode - nodeB.distanceToFinishNode)
}

function updateUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    const {col, row} = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    const unvisitedNeighbors = neighbors.filter(neighbor => !neighbor.isVisited);
    for (const neighbor of unvisitedNeighbors) {
        neighbor.distance = node.distance + node.distanceToFinishNode;
        neighbor.previousNode = node;
    }
}

