export function DFS(grid, startNode, finishNode) {
    const visitedNodesInOrder = [];
    let nodeStack = [];
    nodeStack.push(startNode);

    var directions = [[-1,0], [1,0], [0, -1], [0,1]]

    while (nodeStack.length) {

        const currNode = nodeStack.pop();
        if (currNode === finishNode) {
            return visitedNodesInOrder;
        }
        if (!currNode.isWall && (currNode.isStart || !currNode.isVisited)) {
            currNode.isVisited = true;
            visitedNodesInOrder.push(currNode)
            const {row, col} = currNode;
            let nextNode;

            if (0<row) {
                let dir = directions[0]
                nextNode = grid[row + dir[0]][col + dir[1]]
                if (!nextNode.isVisited) {
                    nextNode.previousNode = currNode;
                    nodeStack.push(nextNode);
                }
            }

            if (row<grid.length - 1) {
                let dir = directions[1]
                nextNode = grid[row + dir[0]][col + dir[1]]
                if (!nextNode.isVisited) {
                    nextNode.previousNode = currNode;
                    nodeStack.push(nextNode);
                }
            }

            if (0<col) {
                let dir = directions[2]
                nextNode = grid[row + dir[0]][col + dir[1]]
                if (!nextNode.isVisited) {
                    nextNode.previousNode = currNode;
                    nodeStack.push(nextNode);
                }
            }

            if (col<grid[0].length - 1) {
                let dir = directions[3]
                nextNode = grid[row + dir[0]][col + dir[1]]
                if (!nextNode.isVisited) {
                    nextNode.previousNode = currNode;
                    nodeStack.push(nextNode);
                }
            }
            
        }
    }
}

// export function DFS(grid, startNode, finishNode) {
//     const visitedNodesInOrder = [];
//     let nextNodesStack = [];
//     nextNodesStack.push(startNode);

//     while (nextNodesStack.length) {
//         const currNode = nextNodesStack.pop()
//         if (currNode === finishNode) {
//             console.log('dfs visited', visitedNodesInOrder)
//             return visitedNodesInOrder;
//         }

//         if (
//             !currNode.isWall &&
//             (currNode.isStart || !currNode.isVisited)
//             ) {
//                 currNode.isVisited = true;
//                 visitedNodesInOrder.push(currNode);
//                 const {col, row} = currNode;
//                 let nextNode;
//                 if (row>0) {
//                     nextNode = grid[row-1][col]
//                     if (!nextNode.isVisited) {
//                         nextNode.previousNode = currNode;
//                         nextNodesStack.push(nextNode);
//                     }
//                 }
//                 if (row < grid.length - 1) {
//                     nextNode = grid[row+1][col];
//                     if (!nextNode.isVisited) {
//                         nextNode.previousNode = currNode;
//                         nextNodesStack.push(nextNode);
//                     }
//                 }
//                 if (col > 0) {
//                     nextNode = grid[row][col - 1];
//                     if (!nextNode.isVisited) {
//                       nextNode.previousNode = currNode;
//                       nextNodesStack.push(nextNode);
//                     }
//                 }
//                   if (col < grid[0].length - 1) {
//                     nextNode = grid[row][col + 1];
//                     if (!nextNode.isVisited) {
//                       nextNode.previousNode = currNode;
//                       nextNodesStack.push(nextNode);
//                     }
//                 }
//             }
//     }
// }


// export function BFS(grid, startNode, finishNode) {
//     const visitedNodesInOrder = [];
//     let nextNodesStack = [startNode]
//     while (nextNodesStack.length) {
//         const currNode = nextNodesStack.shift();
//         if (currNode === finishNode) return visitedNodesInOrder;
//         if (
//             !currNode.isWall &&
//             (currNode.isStart || !currNode.isVisited)
//             ) {
//                 currNode.isVisited = true;
//                 visitedNodesInOrder.push(currNode);
//                 const {col, row} = currNode;
//                 let nextNode;
//                 if (row>0) {
//                     nextNode = grid[row-1][col]
//                     if (!nextNode.isVisited) {
//                         nextNode.previousNode = currNode;
//                         nextNodesStack.push(nextNode);
//                     }
//                 }
//                 if (row < grid.length - 1) {
//                     nextNode = grid[row+1][col];
//                     if (!nextNode.isVisited) {
//                         nextNode.previousNode = currNode;
//                         nextNodesStack.push(nextNode);
//                     }
//                 }
//                 if (col > 0) {
//                     nextNode = grid[row][col - 1];
//                     if (!nextNode.isVisited) {
//                       nextNode.previousNode = currNode;
//                       nextNodesStack.push(nextNode);
//                     }
//                   }
//                   if (col < grid[0].length - 1) {
//                     nextNode = grid[row][col + 1];
//                     if (!nextNode.isVisited) {
//                       nextNode.previousNode = currNode;
//                       nextNodesStack.push(nextNode);
//                     }
//                   }
//             }
        
//     }
// }