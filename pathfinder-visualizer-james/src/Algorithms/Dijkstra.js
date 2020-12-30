export function Dikstra(grid, startNode, finishNode) {
    const visitedNodesInOrder = [];
    startNode.distance = 0;
    const unvisited = getAllNodes(grid);

    while (unvisited.length) {
        sortUnvisited(unvisited);
        const closestNode = unvisited.shift();
        if (!closestNode.isWall) {
            if (closestNode.distance === Infinity) return visitedNodesInOrder;
            closestNode.isVisited = true;
            visitedNodesInOrder.push(closestNode);
            if (closestNode === finishNode) return visitedNodesInOrder;
            updateUnvisitedNeighbors(closestNode, grid);
        }

    }

}

function getAllNodes(grid) {
    const allNodes = [];
    for (const row of grid) {
        for (const node of row) {
            allNodes.push(node);
        }
    }
    return allNodes;
}

function sortUnvisited(unvisited) {
    unvisited.sort((nodeA, nodeB) => {return nodeA.distance - nodeB.distance})
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
        neighbor.distance = node.distance + 1;
        neighbor.previousNode = node;
    }
}

