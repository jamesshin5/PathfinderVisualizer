(this["webpackJsonppathfinder-visualizer-james"]=this["webpackJsonppathfinder-visualizer-james"]||[]).push([[0],{16:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){},19:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var n=s(0),i=s(2),a=s.n(i),o=s(10),r=s.n(o),c=(s(16),s(17),s(9)),d=s(1),u=s(4),l=s(5),h=s(3),f=s(7),v=s(6),N=(s(18),s(19),function(e){Object(f.a)(s,e);var t=Object(v.a)(s);function s(){return Object(u.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this.props,t=e.row,s=e.col,i=e.isStart,a=e.isFinish,o=e.isWall,r=e.onMouseDown,c=e.onMouseEnter,d=e.onMouseUp,u=a?"node-finish":i?"node-start":o?"node-wall":"";return Object(n.jsx)("td",{id:"node-".concat(t,"-").concat(s),className:"node ".concat(u),onMouseDown:function(){return r(t,s)},onMouseEnter:function(){return c(t,s)},onMouseUp:function(){return d()}})}}]),s}(a.a.Component));function b(e,t,s){var n=[];t.distance=0;for(var i=function(e){var t,s=[],n=Object(d.a)(e);try{for(n.s();!(t=n.n()).done;){var i,a=t.value,o=Object(d.a)(a);try{for(o.s();!(i=o.n()).done;){var r=i.value;s.push(r)}}catch(c){o.e(c)}finally{o.f()}}}catch(c){n.e(c)}finally{n.f()}return s}(e);i.length;){p(i);var a=i.shift();if(!a.isWall){if(a.distance===1/0)return n;if(a.isVisited=!0,n.push(a),a===s)return n;O(a,e)}}}function p(e){e.sort((function(e,t){return e.distance-t.distance}))}function O(e,t){var s=[],n=e.col,i=e.row;i>0&&s.push(t[i-1][n]),i<t.length-1&&s.push(t[i+1][n]),n>0&&s.push(t[i][n-1]),n<t[0].length-1&&s.push(t[i][n+1]);var a,o=s.filter((function(e){return!e.isVisited})),r=Object(d.a)(o);try{for(r.s();!(a=r.n()).done;){var c=a.value;c.distance=e.distance+1,c.previousNode=e}}catch(u){r.e(u)}finally{r.f()}}function m(e,t,s){var n=[];t.distance=0;for(var i=function(e){var t,s=[],n=Object(d.a)(e);try{for(n.s();!(t=n.n()).done;){var i,a=t.value,o=Object(d.a)(a);try{for(o.s();!(i=o.n()).done;){var r=i.value;s.push(r)}}catch(c){o.e(c)}finally{o.f()}}}catch(c){n.e(c)}finally{n.f()}return s}(e);i.length;){g(i);var a=i.shift();if(!a.isWall){if(a.distance===1/0)return n;if(a.isVisited=!0,n.push(a),a===s)return n;S(a,e)}}}function g(e){e.sort((function(e,t){return e.distance-t.distance}))}function S(e,t){var s=[],n=e.col,i=e.row;i>0&&s.push(t[i-1][n]),i<t.length-1&&s.push(t[i+1][n]),n>0&&s.push(t[i][n-1]),n<t[0].length-1&&s.push(t[i][n+1]);var a,o=s.filter((function(e){return!e.isVisited})),r=Object(d.a)(o);try{for(r.s();!(a=r.n()).done;){var c=a.value;c.distance=e.distance+1+c.distanceToFinishNode,c.previousNode=e}}catch(u){r.e(u)}finally{r.f()}}var j=function(e){Object(f.a)(s,e);var t=Object(v.a)(s);function s(){var e;return Object(u.a)(this,s),(e=t.call(this)).initializeGrid=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.state.row_count,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.state.col_count,n=[],i=0;i<t;i++){for(var a=[],o=0;o<s;o++)a.push(e.createNode(i,o));n.push(a)}return n},e.createNode=function(t,s){return{row:t,col:s,isStart:t===e.state.START_NODE_ROW&&s===e.state.START_NODE_COL,isFinish:t===e.state.FINISH_NODE_ROW&&s===e.state.FINISH_NODE_COL,distance:1/0,distanceToFinishNode:Math.abs(e.state.FINISH_NODE_ROW-t)+Math.abs(e.state.FINISH_NODE_COL-s),isVisited:!1,isWall:!1,previousNode:null,isNode:!0}},e.state={grid:[],START_NODE_COL:5,START_NODE_ROW:5,FINISH_NODE_COL:10,FINISH_NODE_ROW:5,row_count:25,col_count:35,mouseIsPressed:!1,isRunning:!1,isStartNode:!1,isFinishNode:!1,isWallNode:!1,currRow:0,currCol:0,speed:1},e.handleMouseDown=e.handleMouseDown.bind(Object(h.a)(e)),e.handleMouseLeave=e.handleMouseLeave.bind(Object(h.a)(e)),e.toggleRunning=e.toggleRunning.bind(Object(h.a)(e)),e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this.initializeGrid();this.setState({grid:e})}},{key:"toggleRunning",value:function(){this.setState({isRunning:!this.state.isRunning})}},{key:"isGridClear",value:function(){var e,t=Object(d.a)(this.state.grid);try{for(t.s();!(e=t.n()).done;){var s,n=e.value,i=Object(d.a)(n);try{for(i.s();!(s=i.n()).done;){var a=s.value,o=document.getElementById("node-".concat(a.row,"-").concat(a.col)).className;if("node node-visited"===o||"node node-shortest-path"===o)return!1}}catch(r){i.e(r)}finally{i.f()}}}catch(r){t.e(r)}finally{t.f()}return!0}},{key:"clearGrid",value:function(){if(!this.state.isRunning){var e,t=this.state.grid.slice(),s=Object(d.a)(t);try{for(s.s();!(e=s.n()).done;){var n,i=e.value,a=Object(d.a)(i);try{for(a.s();!(n=a.n()).done;){var o=n.value,r=document.getElementById("node-".concat(o.row,"-").concat(o.col)).className;"node node-start"!==r&&"node node-finish"!==r&&"node node-wall"!==r&&(document.getElementById("node-".concat(o.row,"-").concat(o.col)).className="node",o.isVisited=!1,o.distance=1/0,o.distanceToFinishNode=Math.abs(this.state.FINISH_NODE_ROW-o.row)+Math.abs(this.state.FINISH_NODE_COL-o.col)),"node node-start"===r&&(o.isVisited=!1,o.distance=1/0,o.distanceToFinishNode=Math.abs(this.state.FINISH_NODE_ROW-o.row)+Math.abs(this.state.FINISH_NODE_COL-o.col),o.isStart=!0,o.isWall=!1,o.previousNode=null,o.isNode=!0),"node node-finish"===r&&(o.isVisited=!1,o.distance=1/0,o.distanceToFinishNode=0)}}catch(c){a.e(c)}finally{a.f()}}}catch(c){s.e(c)}finally{s.f()}}}},{key:"clearWalls",value:function(){if(!this.state.isRunning){var e,t=this.state.grid.slice(),s=Object(d.a)(t);try{for(s.s();!(e=s.n()).done;){var n,i=e.value,a=Object(d.a)(i);try{for(a.s();!(n=a.n()).done;){var o=n.value;"node node-wall"===document.getElementById("node-".concat(o.row,"-").concat(o.col)).className&&(document.getElementById("node-".concat(o.row,"-").concat(o.col)).className="node",o.isWall=!1)}}catch(r){a.e(r)}finally{a.f()}}}catch(r){s.e(r)}finally{s.f()}}}},{key:"handleMouseDown",value:function(e,t){if(!this.state.isRunning)if(this.isGridClear())if("node node-start"===document.getElementById("node-".concat(e,"-").concat(t)).className)this.setState({mouseIsPressed:!0,isStartNode:!0,currRow:e,currCol:t});else if("node node-finish"===document.getElementById("node-".concat(e,"-").concat(t)).className)this.setState({mouseIsPressed:!0,isFinishNode:!0,currRow:e,currCol:t});else{var s=y(this.state.grid,e,t);this.setState({grid:s,mouseIsPressed:!0,isWallNode:!0,currRow:e,currCol:t})}else this.clearGrid()}},{key:"handleMouseEnter",value:function(e,t){if(!this.state.isRunning&&this.state.mouseIsPressed){var s=document.getElementById("node-".concat(e,"-").concat(t)).className;if(this.state.isStartNode){if("node node-wall"!==s)this.state.grid[this.state.currRow][this.state.currCol].isStart=!1,document.getElementById("node-".concat(this.state.currRow,"-").concat(this.state.currCol)).className="node",this.setState({currRow:e,currCol:t}),this.state.grid[e][t].isStart=!0,document.getElementById("node-".concat(e,"-").concat(t)).className="node node-start";this.setState({START_NODE_ROW:e,START_NODE_COL:t})}else if(this.state.isFinishNode){if("node node-wall"!==s)this.state.grid[this.state.currRow][this.state.currCol].isFinish=!1,document.getElementById("node-".concat(e,"-").concat(t)).className="node",this.setState({currRow:e,currCol:t}),this.state.grid[e][t].isFinish=!0,document.getElementById("node-".concat(e,"-").concat(t)).className="node node-finish";this.setState({FINISH_NODE_ROW:e,FINISH_NODE_COL:t})}else if(this.state.isWallNode){var n=y(this.state.grid,e,t);this.setState({grid:n})}}}},{key:"handleMouseUp",value:function(e,t){if(!this.state.isRunning){if(this.setState({mouseIsPressed:!1}),this.state.isStartNode){var s=!this.state.isStartNode;this.setState({isStartNode:s,START_NODE_ROW:e,START_NODE_COL:t})}else if(this.state.isFinishNode){var n=!this.state.isFinishNode;this.setState({isFinishNode:n,FINISH_NODE_COL:t,FINISH_NODE_ROW:e})}this.initializeGrid()}}},{key:"handleMouseLeave",value:function(){if(this.state.isStartNode){var e=!this.state.isStartNode;this.setState({isStartNode:e,mouseIsPressed:!1})}else if(this.state.isFinishNode){var t=!this.state.isFinishNode;this.setState({isFinishNode:t,mouseIsPressed:!1})}else if(this.state.isWallNode){var s=!this.state.isWallNode;this.setState({isWallNode:s,mouseIsPressed:!1}),this.initializeGrid()}}},{key:"switchSpeed",value:function(){this.state.isRunning||(1===this.state.speed?this.setState({speed:5}):5===this.state.speed?this.setState({speed:10}):this.setState({speed:1}))}},{key:"visualize",value:function(e){if(!this.state.isRunning){this.clearGrid(),this.toggleRunning();var t,s=this.state.grid,n=s[this.state.START_NODE_ROW][this.state.START_NODE_COL],i=s[this.state.FINISH_NODE_ROW][this.state.FINISH_NODE_COL];switch(e){case"BFS":t=function(e,t,s){for(var n=[],i=[t];i.length;){var a=i.shift();if(a===s)return n;if(!a.isWall&&(a.isStart||!a.isVisited)){a.isVisited=!0,n.push(a);var o=a.col,r=a.row,c=void 0;r>0&&((c=e[r-1][o]).isVisited||(c.previousNode=a,i.push(c))),r<e.length-1&&((c=e[r+1][o]).isVisited||(c.previousNode=a,i.push(c))),o>0&&((c=e[r][o-1]).isVisited||(c.previousNode=a,i.push(c))),o<e[0].length-1&&((c=e[r][o+1]).isVisited||(c.previousNode=a,i.push(c)))}}}(s,n,i);break;case"DFS":t=function(e,t,s){var n=[],i=[];for(i.push(t);i.length;){var a=i.pop();if(a===s)return console.log("dfs visited",n),n;if(!a.isWall&&(a.isStart||!a.isVisited)){a.isVisited=!0,n.push(a);var o=a.col,r=a.row,c=void 0;r>0&&((c=e[r-1][o]).isVisited||(c.previousNode=a,i.push(c))),r<e.length-1&&((c=e[r+1][o]).isVisited||(c.previousNode=a,i.push(c))),o>0&&((c=e[r][o-1]).isVisited||(c.previousNode=a,i.push(c))),o<e[0].length-1&&((c=e[r][o+1]).isVisited||(c.previousNode=a,i.push(c)))}}}(s,n,i);break;case"Dijkstra":t=b(s,n,i);break;case"AStar":t=m(s,n,i);break;case"Greedy":t=function(e,t,s){for(var n=[],i=[t];i.length;){i.sort((function(e,t){return e.distanceToFinishNode-t.distanceToFinishNode}));var a=i.shift();if(a===s)return n;if(!a.isWall&&(a.isStart||!a.isVisited)){a.isVisited=!0,n.push(a);var o=a.col,r=a.row,c=void 0;r>0&&((c=e[r-1][o]).isVisited||(c.previousNode=a,i.push(c))),r<e.length-1&&((c=e[r+1][o]).isVisited||(c.previousNode=a,i.push(c))),o>0&&((c=e[r][o-1]).isVisited||(c.previousNode=a,i.push(c))),o<e[0].length-1&&((c=e[r][o+1]).isVisited||(c.previousNode=a,i.push(c)))}}}(s,n,i)}var a=function(e){var t=[],s=e;for(;null!==s&&null!==s.previousNode;)t.unshift(s),s=s.previousNode;return t}(i);a.push("end"),this.animate(t,a)}}},{key:"animate",value:function(e,t){for(var s=this,n=function(n){if(n===e.length)return setTimeout((function(){s.animateShortestPath(t)}),30*s.state.speed*n),{v:void 0};setTimeout((function(){var t=e[n],s=document.getElementById("node-".concat(t.row,"-").concat(t.col)).className;"node node-start"!==s&&"node node-finish"!==s&&(document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited")}),30*s.state.speed*n)},i=0;i<=e.length;i++){var a=n(i);if("object"===typeof a)return a.v}}},{key:"animateShortestPath",value:function(e){for(var t=this,s=function(s){"end"===e[s]?setTimeout((function(){t.toggleRunning()}),s*t.state.speed*50):setTimeout((function(){var t=e[s],n=document.getElementById("node-".concat(t.row,"-").concat(t.col)).className;"node node-start"!==n&&"node node-finish"!==n&&(document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-shortest-path")}),s*t.state.speed*30)},n=0;n<e.length;n++)s(n)}},{key:"render",value:function(){var e=this,t=this.state,s=t.grid,i=t.mouseIsPressed;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(n.jsxs)("a",{className:"navbar-brand",href:"/",children:["PATHFINDER ",Object(n.jsx)("b",{children:"VISUALIZER"})]}),Object(n.jsxs)("div",{className:"ml-auto",children:[Object(n.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(){return e.switchSpeed()},children:1===this.state.speed?"Fast":5===this.state.speed?"Regular":10===this.state.speed?"Slow":"Fast"}),Object(n.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return e.clearGrid()},children:"Clear Grid"}),Object(n.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(){return e.clearWalls()},children:"Clear Walls"}),Object(n.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){return e.visualize("Dijkstra")},children:"Dijkstra's"}),Object(n.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){return e.visualize("AStar")},children:"A*"}),Object(n.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){return e.visualize("Greedy")},children:"Greedy"}),Object(n.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){return e.visualize("BFS")},children:"Bread First Search"}),Object(n.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){return e.visualize("DFS")},children:"Depth First Search"})]})]}),Object(n.jsx)("table",{className:"grid-container",onMouseLeave:function(){return e.handleMouseLeave()},children:Object(n.jsx)("tbody",{className:"grid",children:s.map((function(t,s){return Object(n.jsx)("tr",{children:t.map((function(t,s){var a=t.row,o=t.col,r=t.isFinish,c=t.isStart,d=t.isWall;return Object(n.jsx)(N,{col:o,isFinish:r,isStart:c,isWall:d,mouseIsPressed:i,onMouseDown:function(t,s){return e.handleMouseDown(t,s)},onMouseEnter:function(t,s){return e.handleMouseEnter(t,s)},onMouseUp:function(){return e.handleMouseUp(a,o)},row:a},s)}))},s)}))})})]})}}]),s}(a.a.Component),y=function(e,t,s){var n=e.slice(),i=n[t][s];if(!i.isStart&&!i.isFinish&&i.isNode){var a=Object(c.a)(Object(c.a)({},i),{},{isWall:!i.isWall});n[t][s]=a}return n};var I=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(j,{})})},_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,22)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;s(e),n(e),i(e),a(e),o(e)}))};s(20);r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root")),_()}},[[21,1,2]]]);
//# sourceMappingURL=main.0cea24a7.chunk.js.map