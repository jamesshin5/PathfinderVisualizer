import React from 'react';
import './PathfinderVisualizer.css';
import Node from './Node';
import {BFS} from '../Algorithms/BFS.js';
import {DFS} from '../Algorithms/DFS.js';
import {Dikstra} from '../Algorithms/Dijkstra.js'
import {AStar} from '../Algorithms/AStar.js'
import {Greedy} from '../Algorithms/Greedy.js'


export default class PathfindingVisualizer extends React.Component {
    constructor() {
        super();
        this.state = {
            grid: [],
            START_NODE_COL: 5,
            START_NODE_ROW: 5,
            FINISH_NODE_COL: 10,
            FINISH_NODE_ROW: 5,
            row_count: 25,
            col_count: 35,
            mouseIsPressed: false,
            isRunning: false,
            isStartNode: false,
            isFinishNode: false,
            isWallNode: false, 
            currRow: 0,
            currCol: 0,
        }
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.toggleRunning = this.toggleRunning.bind(this);
    };

    componentDidMount() {
        const grid = this.initializeGrid();
        this.setState({grid});
    }

    toggleRunning() {
        this.setState({isRunning: !this.state.isRunning});
    }

    initializeGrid = (
        row_count = this.state.row_count,
        col_count = this.state.col_count,
    ) => {
        const initialGrid = [];
        for (let row = 0; row < row_count; row++) {
            const curr_row = [];
            for (let col = 0; col < col_count; col++) {
                curr_row.push(this.createNode(row, col));
            }
            initialGrid.push(curr_row)
        }
        return initialGrid
    };

    createNode = (row, col) => {
        return {
            row, 
            col,
            isStart: 
                row === this.state.START_NODE_ROW && col === this.state.START_NODE_COL,
            isFinish: 
                row === this.state.FINISH_NODE_ROW && col === this.state.FINISH_NODE_COL,
            distance: Infinity,
            distanceToFinishNode:
                Math.abs(this.state.FINISH_NODE_ROW - row) + 
                Math.abs(this.state.FINISH_NODE_COL - col),
            isVisited: false,
            isWall: false,
            previousNode: null,
            isNode: true,
        }
    }

    isGridClear() {
        for (const row of this.state.grid) {
            for (const node of row) {
                const nodeClassName = document.getElementById(
                    `node-${node.row}-${node.col}`,
                ).className;
                if (
                    nodeClassName === 'node node-visited' || nodeClassName === 'node node-shortest-path'
                ) {
                    return false;
                }
            }
        }
        return true;
    }

    clearGrid() {
        if (!this.state.isRunning) {
            const newGrid = this.state.grid.slice();
            for (const row of newGrid) {
                for (const node of row) {
                    let nodeClassName = document.getElementById(
                        `node-${node.row}-${node.col}`,
                    ).className;
                    if (
                        nodeClassName !== 'node node-start' &&
                        nodeClassName !== 'node node-finish' &&
                        nodeClassName !== 'node node-wall'
                    ) {
                        document.getElementById(`node-${node.row}-${node.col}`).className = 'node';
                        node.isVisited = false;
                        node.distance = Infinity;
                        node.distanceToFinishNode = 
                            Math.abs(this.state.FINISH_NODE_ROW - node.row) + 
                            Math.abs(this.state.FINISH_NODE_COL- node.col);
                    }
                    if (nodeClassName === 'node node-start') {
                        node.isVisited = false;
                        node.distance = Infinity;
                        node.distanceToFinishNode = 
                            Math.abs(this.state.FINISH_NODE_ROW - node.row) + 
                            Math.abs(this.state.FINISH_NODE_COL - node.col);
                        node.isStart = true;
                        node.isWall = false;
                        node.previousNode = null;
                        node.isNode = true;
                    }
                    if (nodeClassName === 'node node-finish') {
                        node.isVisited = false;
                        node.distance = Infinity;
                        node.distanceToFinishNode = 
                            0;
                    }
                }
            }
        }
    }

    clearWalls() {
        if (!this.state.isRunning) {
            const newGrid = this.state.grid.slice();
            for (const row of newGrid) {
                for (const node of row) {
                    let nodeClassName = document.getElementById(
                        `node-${node.row}-${node.col}`,
                    ).className;
                    if (nodeClassName === 'node node-wall') {
                        document.getElementById(`node-${node.row}-${node.col}`).className = 'node';
                        node.isWall = false;
                    }
                }
            }
        }
    }

    /******************** mouse events ********************/

    handleMouseDown(row, col) {
        if (!this.state.isRunning) {
            if (this.isGridClear()) {
                if (
                    document.getElementById(`node-${row}-${col}`).className === 'node node-start'
                ) {
                    this.setState({
                        mouseIsPressed: true,
                        isStartNode: true,
                        currRow: row,
                        currCol: col
                    })
                } else if (
                    document.getElementById(`node-${row}-${col}`).className === 'node node-finish'
                ) {
                    this.setState({
                        mouseIsPressed: true,
                        isFinishNode: true,
                        currRow: row,
                        currCol: col
                    })
                } else {
                    const newGrid = getNewGridWithToggledWalls(this.state.grid, row, col);
                    this.setState({
                        grid: newGrid,
                        mouseIsPressed: true,
                        isWallNode: true,
                        currRow: row, 
                        currCol: col,
                    })
                } 
            } else {
                this.clearGrid();
            }
        }
    }

    handleMouseEnter(row, col) {
        if (!this.state.isRunning) {
            if (this.state.mouseIsPressed) {
                const nodeClassName = document.getElementById(`node-${row}-${col}`).className;
                if (this.state.isStartNode) {
                    if (nodeClassName !== 'node node-wall') {
                        const prevStartNode = this.state.grid[this.state.currRow][this.state.currCol];
                        prevStartNode.isStart = false;
                        document.getElementById(
                            `node-${this.state.currRow}-${this.state.currCol}`
                        ).className = 'node';
                        this.setState({currRow: row, currCol: col});
                        const currStartNode = this.state.grid[row][col];
                        currStartNode.isStart = true;
                        document.getElementById(`node-${row}-${col}`).className = 'node node-start';
                    }
                    this.setState({START_NODE_ROW: row, START_NODE_COL: col});
                    // const currStartNode = this.state.grid[row][col];
                    // currStartNode.isStart = true;
                    // document.getElementById(`node-${row}-${col}`).className = 'node node-start'
                    // this.setState({START_NODE_ROW: row, START_NODE_COL: col});
                } else if (this.state.isFinishNode) {
                    if (nodeClassName !== 'node node-wall') {
                        const prevFinishNode = this.state.grid[this.state.currRow][this.state.currCol];
                        prevFinishNode.isFinish = false;
                        document.getElementById(`node-${row}-${col}`).className = 'node';
                        this.setState({currRow: row, currCol: col});
                        const currStartNode = this.state.grid[row][col];
                        currStartNode.isFinish = true;
                        document.getElementById(`node-${row}-${col}`).className = 'node node-finish';
                    }
                    this.setState({FINISH_NODE_ROW: row, FINISH_NODE_COL: col});
                } else if (this.state.isWallNode) {
                    const newGrid = getNewGridWithToggledWalls(this.state.grid, row, col);
                    this.setState({grid: newGrid});
                }
            }
        }
    }

    handleMouseUp(row, col) {
        if (!this.state.isRunning) {
            this.setState({mouseIsPressed: false});
            if (this.state.isStartNode) {
                const isStartNode = !this.state.isStartNode;
                this.setState({isStartNode, START_NODE_ROW: row, START_NODE_COL: col});
            } else if (this.state.isFinishNode) {
                const isFinishNode = !this.state.isFinishNode;
                this.setState({
                    isFinishNode,
                    FINISH_NODE_COL: col,
                    FINISH_NODE_ROW: row,
                });
            }
            this.initializeGrid();
        }
    }

    handleMouseLeave() {
        if (this.state.isStartNode) {
            const isStartNode = !this.state.isStartNode;
            this.setState({
                isStartNode, mouseIsPressed: false,
            });
        } else if (this.state.isFinishNode) {
            const isFinishNode = !this.state.isFinishNode;
            this.setState({
                isFinishNode, mouseIsPressed: false,
            });
        } else if (this.state.isWallNode) {
            const isWallNode = !this.state.isWallNode;
            this.setState({
                isWallNode, mouseIsPressed: false,
            });
            this.initializeGrid();
        }
    }

    visualize(algo) {
        if (!this.state.isRunning) {
            this.clearGrid();
            this.toggleRunning();
            const {grid} = this.state;
            const startNode = grid[this.state.START_NODE_ROW][this.state.START_NODE_COL];
            const finishNode = grid[this.state.FINISH_NODE_ROW][this.state.FINISH_NODE_COL];
            let visitedNodesInOrder;
            switch (algo) {
                case 'BFS':
                    visitedNodesInOrder = BFS(grid, startNode, finishNode);
                    break;
                case 'DFS':
                    visitedNodesInOrder = DFS(grid, startNode, finishNode);
                    break;
                case 'Dijkstra':
                    visitedNodesInOrder = Dikstra(grid, startNode, finishNode);
                    break;
                case 'AStar':
                    visitedNodesInOrder = AStar(grid, startNode, finishNode);
                    break;
                case 'Greedy':
                    visitedNodesInOrder = Greedy(grid, startNode, finishNode);
                    break;
                default:
                    break;
            }
            const nodesInShortestPathInOrder = getNodesInShortestPathInOrder(finishNode);
            nodesInShortestPathInOrder.push('end');
            this.animate(visitedNodesInOrder, nodesInShortestPathInOrder);
        }
    }

    animate(visitedNodesInOrder, nodesInShortestPathInOrder) {
        for (let i = 0; i <= visitedNodesInOrder.length; i++) {
            if (i === visitedNodesInOrder.length) {
                setTimeout(()=> {
                    this.animateShortestPath(nodesInShortestPathInOrder);
                }, 10 * i);
                return;
            }
            setTimeout(()=> {
                const node = visitedNodesInOrder[i];
                const nodeClassName = document.getElementById(
                    `node-${node.row}-${node.col}`
                ).className;
                if (
                    nodeClassName !== 'node node-start' &&
                    nodeClassName !== 'node node-finish'
                ) {
                    document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-visited'
                }
            }, 10 * i)
        }
    }

    animateShortestPath(nodesInShortestPathInOrder) {
        for (let i = 0; i < nodesInShortestPathInOrder.length; i++) {
            if (nodesInShortestPathInOrder[i] === 'end') {
                setTimeout(()=> {
                    this.toggleRunning();
                }, i * 50)
            } else {
                setTimeout(()=> {
                    const node = nodesInShortestPathInOrder[i];
                    const nodeClassName = document.getElementById(
                        `node-${node.row}-${node.col}`,
                    ).className;
                    if (
                        nodeClassName !== 'node node-start' &&
                        nodeClassName !== 'node node-finish'
                    ) {
                        document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-shortest-path';
                    }
                }, i * 40)
            }
        }
    }

    render() {
        const {grid, mouseIsPressed} = this.state;
        return (
            <div>
                <nav className = 'navbar navbar-expand-lg navbar-dark bg-dark'>
                    <a className = 'navbar-brand' href="/">
                        PATHFINDER <b>VISUALIZER</b>
                    </a>
                    <div className='ml-auto'>
                    <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.clearGrid()}>
                    Clear Grid
                    </button>
                    <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => this.clearWalls()}>
                    Clear Walls
                    </button>
                    <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => this.visualize('Dijkstra')}>
                    Dijkstra's
                    </button>
                    <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => this.visualize('AStar')}>
                    A*
                    </button>
                    <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => this.visualize('Greedy')}>
                    Greedy
                    </button>
                    <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => this.visualize('BFS')}>
                    Bread First Search
                    </button>
                    <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => this.visualize('DFS')}>
                    Depth First Search
                    </button>
                    </div>
                </nav>
                <table
                    className='grid-container'
                    onMouseLeave={()=>this.handleMouseLeave()}>
                    <tbody className='grid'>
                        {grid.map((row, rowIdx) => {
                            return (
                                <tr key={rowIdx}>
                                    {row.map((node, nodeIdx) => {
                                        const {row, col, isFinish, isStart, isWall} = node;
                                        return (
                                            <Node
                                            key={nodeIdx}
                                            col={col}
                                            isFinish={isFinish}
                                            isStart={isStart}
                                            isWall={isWall}
                                            mouseIsPressed={mouseIsPressed}
                                            onMouseDown={(row, col) =>
                                            this.handleMouseDown(row, col)
                                            }
                                            onMouseEnter={(row, col) =>
                                            this.handleMouseEnter(row, col)
                                            }
                                            onMouseUp={() => this.handleMouseUp(row, col)}
                                            row={row}></Node>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const getNewGridWithToggledWalls = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    if (!node.isStart && !node.isFinish && node.isNode) {
        const newNode = {
            ...node,
            isWall: !node.isWall,
        };
        newGrid[row][col] = newNode;
    }
    return newGrid;
}

function getNodesInShortestPathInOrder(finishNode) {
  const nodesInShortestPathInOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null && currentNode.previousNode !== null) {
    nodesInShortestPathInOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathInOrder;
}
