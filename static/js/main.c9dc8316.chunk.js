(this["webpackJsonppathfinder-visualizer-james"]=this["webpackJsonppathfinder-visualizer-james"]||[]).push([[0],{16:function(t,e,s){},17:function(t,e,s){},18:function(t,e,s){},19:function(t,e,s){},21:function(t,e,s){"use strict";s.r(e);var n=s(0),i=s(2),a=s.n(i),o=s(10),r=s.n(o),c=(s(16),s(17),s(9)),d=s(1),u=s(4),l=s(5),h=s(3),f=s(7),v=s(6),N=(s(18),s(19),function(t){Object(f.a)(s,t);var e=Object(v.a)(s);function s(){return Object(u.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var t=this.props,e=t.row,s=t.col,i=t.isStart,a=t.isFinish,o=t.isWall,r=t.onMouseDown,c=t.onMouseEnter,d=t.onMouseUp,u=a?"node-finish":i?"node-start":o?"node-wall":"";return Object(n.jsx)("td",{id:"node-".concat(e,"-").concat(s),className:"node ".concat(u),onMouseDown:function(){return r(e,s)},onMouseEnter:function(){return c(e,s)},onMouseUp:function(){return d()}})}}]),s}(a.a.Component));function b(t,e,s){var n=[];e.distance=0;for(var i=function(t){var e,s=[],n=Object(d.a)(t);try{for(n.s();!(e=n.n()).done;){var i,a=e.value,o=Object(d.a)(a);try{for(o.s();!(i=o.n()).done;){var r=i.value;s.push(r)}}catch(c){o.e(c)}finally{o.f()}}}catch(c){n.e(c)}finally{n.f()}return s}(t);i.length;){O(i);var a=i.shift();if(!a.isWall){if(a.distance===1/0)return n;if(a.isVisited=!0,n.push(a),a===s)return n;p(a,t)}}}function O(t){t.sort((function(t,e){return t.distance-e.distance}))}function p(t,e){var s=[],n=t.col,i=t.row;i>0&&s.push(e[i-1][n]),i<e.length-1&&s.push(e[i+1][n]),n>0&&s.push(e[i][n-1]),n<e[0].length-1&&s.push(e[i][n+1]);var a,o=s.filter((function(t){return!t.isVisited})),r=Object(d.a)(o);try{for(r.s();!(a=r.n()).done;){var c=a.value;c.distance=t.distance+1,c.previousNode=t}}catch(u){r.e(u)}finally{r.f()}}function m(t,e,s){var n=[];e.distance=0;for(var i=function(t){var e,s=[],n=Object(d.a)(t);try{for(n.s();!(e=n.n()).done;){var i,a=e.value,o=Object(d.a)(a);try{for(o.s();!(i=o.n()).done;){var r=i.value;s.push(r)}}catch(c){o.e(c)}finally{o.f()}}}catch(c){n.e(c)}finally{n.f()}return s}(t);i.length;){g(i);var a=i.shift();if(!a.isWall){if(a.distance===1/0)return n;if(a.isVisited=!0,n.push(a),a===s)return n;S(a,t)}}}function g(t){t.sort((function(t,e){return t.distance-e.distance}))}function S(t,e){var s=[],n=t.col,i=t.row;i>0&&s.push(e[i-1][n]),i<e.length-1&&s.push(e[i+1][n]),n>0&&s.push(e[i][n-1]),n<e[0].length-1&&s.push(e[i][n+1]);var a,o=s.filter((function(t){return!t.isVisited})),r=Object(d.a)(o);try{for(r.s();!(a=r.n()).done;){var c=a.value;c.distance=t.distance+1+c.distanceToFinishNode,c.previousNode=t}}catch(u){r.e(u)}finally{r.f()}}var j=function(t){Object(f.a)(s,t);var e=Object(v.a)(s);function s(){var t;return Object(u.a)(this,s),(t=e.call(this)).initializeGrid=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.state.row_count,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.state.col_count,n=[],i=0;i<e;i++){for(var a=[],o=0;o<s;o++)a.push(t.createNode(i,o));n.push(a)}return n},t.createNode=function(e,s){return{row:e,col:s,isStart:e===t.state.START_NODE_ROW&&s===t.state.START_NODE_COL,isFinish:e===t.state.FINISH_NODE_ROW&&s===t.state.FINISH_NODE_COL,distance:1/0,distanceToFinishNode:Math.abs(t.state.FINISH_NODE_ROW-e)+Math.abs(t.state.FINISH_NODE_COL-s),isVisited:!1,isWall:!1,previousNode:null,isNode:!0}},t.state={grid:[],START_NODE_COL:5,START_NODE_ROW:5,FINISH_NODE_COL:10,FINISH_NODE_ROW:5,row_count:25,col_count:35,mouseIsPressed:!1,isRunning:!1,isStartNode:!1,isFinishNode:!1,isWallNode:!1,currRow:0,currCol:0,speed:1},t.handleMouseDown=t.handleMouseDown.bind(Object(h.a)(t)),t.handleMouseLeave=t.handleMouseLeave.bind(Object(h.a)(t)),t.toggleRunning=t.toggleRunning.bind(Object(h.a)(t)),t}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var t=this.initializeGrid();this.setState({grid:t})}},{key:"toggleRunning",value:function(){this.setState({isRunning:!this.state.isRunning})}},{key:"isGridClear",value:function(){var t,e=Object(d.a)(this.state.grid);try{for(e.s();!(t=e.n()).done;){var s,n=t.value,i=Object(d.a)(n);try{for(i.s();!(s=i.n()).done;){var a=s.value,o=document.getElementById("node-".concat(a.row,"-").concat(a.col)).className;if("node node-visited"===o||"node node-shortest-path"===o)return!1}}catch(r){i.e(r)}finally{i.f()}}}catch(r){e.e(r)}finally{e.f()}return!0}},{key:"clearGrid",value:function(){if(!this.state.isRunning){var t,e=this.state.grid.slice(),s=Object(d.a)(e);try{for(s.s();!(t=s.n()).done;){var n,i=t.value,a=Object(d.a)(i);try{for(a.s();!(n=a.n()).done;){var o=n.value,r=document.getElementById("node-".concat(o.row,"-").concat(o.col)).className;"node node-start"!==r&&"node node-finish"!==r&&"node node-wall"!==r&&(document.getElementById("node-".concat(o.row,"-").concat(o.col)).className="node",o.isVisited=!1,o.distance=1/0,o.distanceToFinishNode=Math.abs(this.state.FINISH_NODE_ROW-o.row)+Math.abs(this.state.FINISH_NODE_COL-o.col)),"node node-start"===r&&(o.isVisited=!1,o.distance=1/0,o.distanceToFinishNode=Math.abs(this.state.FINISH_NODE_ROW-o.row)+Math.abs(this.state.FINISH_NODE_COL-o.col),o.isStart=!0,o.isWall=!1,o.previousNode=null,o.isNode=!0),"node node-finish"===r&&(o.isVisited=!1,o.distance=1/0,o.distanceToFinishNode=0)}}catch(c){a.e(c)}finally{a.f()}}}catch(c){s.e(c)}finally{s.f()}}}},{key:"clearWalls",value:function(){if(!this.state.isRunning){var t,e=this.state.grid.slice(),s=Object(d.a)(e);try{for(s.s();!(t=s.n()).done;){var n,i=t.value,a=Object(d.a)(i);try{for(a.s();!(n=a.n()).done;){var o=n.value;"node node-wall"===document.getElementById("node-".concat(o.row,"-").concat(o.col)).className&&(document.getElementById("node-".concat(o.row,"-").concat(o.col)).className="node",o.isWall=!1)}}catch(r){a.e(r)}finally{a.f()}}}catch(r){s.e(r)}finally{s.f()}}}},{key:"handleMouseDown",value:function(t,e){if(!this.state.isRunning)if(this.isGridClear())if("node node-start"===document.getElementById("node-".concat(t,"-").concat(e)).className)this.setState({mouseIsPressed:!0,isStartNode:!0,currRow:t,currCol:e});else if("node node-finish"===document.getElementById("node-".concat(t,"-").concat(e)).className)this.setState({mouseIsPressed:!0,isFinishNode:!0,currRow:t,currCol:e});else{var s=y(this.state.grid,t,e);this.setState({grid:s,mouseIsPressed:!0,isWallNode:!0,currRow:t,currCol:e})}else this.clearGrid()}},{key:"handleMouseEnter",value:function(t,e){if(!this.state.isRunning&&this.state.mouseIsPressed){var s=document.getElementById("node-".concat(t,"-").concat(e)).className;if(this.state.isStartNode){if("node node-wall"!==s)this.state.grid[this.state.currRow][this.state.currCol].isStart=!1,document.getElementById("node-".concat(this.state.currRow,"-").concat(this.state.currCol)).className="node",this.setState({currRow:t,currCol:e}),this.state.grid[t][e].isStart=!0,document.getElementById("node-".concat(t,"-").concat(e)).className="node node-start";this.setState({START_NODE_ROW:t,START_NODE_COL:e})}else if(this.state.isFinishNode){if("node node-wall"!==s)this.state.grid[this.state.currRow][this.state.currCol].isFinish=!1,document.getElementById("node-".concat(t,"-").concat(e)).className="node",this.setState({currRow:t,currCol:e}),this.state.grid[t][e].isFinish=!0,document.getElementById("node-".concat(t,"-").concat(e)).className="node node-finish";this.setState({FINISH_NODE_ROW:t,FINISH_NODE_COL:e})}else if(this.state.isWallNode){var n=y(this.state.grid,t,e);this.setState({grid:n})}}}},{key:"handleMouseUp",value:function(t,e){if(!this.state.isRunning){if(this.setState({mouseIsPressed:!1}),this.state.isStartNode){var s=!this.state.isStartNode;this.setState({isStartNode:s,START_NODE_ROW:t,START_NODE_COL:e})}else if(this.state.isFinishNode){var n=!this.state.isFinishNode;this.setState({isFinishNode:n,FINISH_NODE_COL:e,FINISH_NODE_ROW:t})}this.initializeGrid()}}},{key:"handleMouseLeave",value:function(){if(this.state.isStartNode){var t=!this.state.isStartNode;this.setState({isStartNode:t,mouseIsPressed:!1})}else if(this.state.isFinishNode){var e=!this.state.isFinishNode;this.setState({isFinishNode:e,mouseIsPressed:!1})}else if(this.state.isWallNode){var s=!this.state.isWallNode;this.setState({isWallNode:s,mouseIsPressed:!1}),this.initializeGrid()}}},{key:"switchSpeed",value:function(){this.state.isRunning||(1===this.state.speed?this.setState({speed:5}):5===this.state.speed?this.setState({speed:10}):this.setState({speed:1}))}},{key:"visualize",value:function(t){if(!this.state.isRunning){this.clearGrid(),this.toggleRunning();var e,s=this.state.grid,n=s[this.state.START_NODE_ROW][this.state.START_NODE_COL],i=s[this.state.FINISH_NODE_ROW][this.state.FINISH_NODE_COL];switch(t){case"BFS":e=function(t,e,s){var n=[],i=[];i.push(e);for(var a=[[0,1],[-1,0],[0,-1],[1,0]];i.length;){var o=i.shift();if(o===s)return n;if(!o.isWall&&(o.isStart||!o.isVisited)){o.isVisited=!0,n.push(o);var r,c=o.row,u=o.col,l=void 0,h=Object(d.a)(a);try{for(h.s();!(r=h.n()).done;){var f=r.value;0<c&&c<t.length-1&&0<u&&u<t[0].length-1&&((l=t[c+f[0]][u+f[1]]).isVisited||(l.previousNode=o,i.push(l)))}}catch(v){h.e(v)}finally{h.f()}}}}(s,n,i);break;case"DFS":e=function(t,e,s){var n=[],i=[];i.push(e);for(var a=[[-1,0],[1,0],[0,-1],[0,1]];i.length;){var o=i.pop();if(o===s)return n;if(!o.isWall&&(o.isStart||!o.isVisited)){o.isVisited=!0,n.push(o);var r=o.row,c=o.col,d=void 0;if(0<r){var u=a[0];(d=t[r+u[0]][c+u[1]]).isVisited||(d.previousNode=o,i.push(d))}if(r<t.length-1){var l=a[1];(d=t[r+l[0]][c+l[1]]).isVisited||(d.previousNode=o,i.push(d))}if(0<c){var h=a[2];(d=t[r+h[0]][c+h[1]]).isVisited||(d.previousNode=o,i.push(d))}if(c<t[0].length-1){var f=a[3];(d=t[r+f[0]][c+f[1]]).isVisited||(d.previousNode=o,i.push(d))}}}}(s,n,i);break;case"Dijkstra":e=b(s,n,i);break;case"AStar":e=m(s,n,i);break;case"Greedy":e=function(t,e,s){for(var n=[],i=[e];i.length;){i.sort((function(t,e){return t.distanceToFinishNode-e.distanceToFinishNode}));var a=i.shift();if(a===s)return n;if(!a.isWall&&(a.isStart||!a.isVisited)){a.isVisited=!0,n.push(a);var o=a.col,r=a.row,c=void 0;r>0&&((c=t[r-1][o]).isVisited||(c.previousNode=a,i.push(c))),r<t.length-1&&((c=t[r+1][o]).isVisited||(c.previousNode=a,i.push(c))),o>0&&((c=t[r][o-1]).isVisited||(c.previousNode=a,i.push(c))),o<t[0].length-1&&((c=t[r][o+1]).isVisited||(c.previousNode=a,i.push(c)))}}}(s,n,i)}var a=function(t){var e=[],s=t;for(;null!==s&&null!==s.previousNode;)e.unshift(s),s=s.previousNode;return e}(i);a.push("end"),this.animate(e,a)}}},{key:"animate",value:function(t,e){for(var s=this,n=function(n){if(n===t.length)return setTimeout((function(){s.animateShortestPath(e)}),30*s.state.speed*n),{v:void 0};setTimeout((function(){var e=t[n],s=document.getElementById("node-".concat(e.row,"-").concat(e.col)).className;"node node-start"!==s&&"node node-finish"!==s&&(document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-visited")}),30*s.state.speed*n)},i=0;i<=t.length;i++){var a=n(i);if("object"===typeof a)return a.v}}},{key:"animateShortestPath",value:function(t){for(var e=this,s=function(s){"end"===t[s]?setTimeout((function(){e.toggleRunning()}),s*e.state.speed*50):setTimeout((function(){var e=t[s],n=document.getElementById("node-".concat(e.row,"-").concat(e.col)).className;"node node-start"!==n&&"node node-finish"!==n&&(document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-shortest-path")}),s*e.state.speed*30)},n=0;n<t.length;n++)s(n)}},{key:"render",value:function(){var t=this,e=this.state,s=e.grid,i=e.mouseIsPressed;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(n.jsxs)("a",{className:"navbar-brand",href:"/",children:["PATHFINDER ",Object(n.jsx)("b",{children:"VISUALIZER"})]}),Object(n.jsxs)("div",{className:"ml-auto",children:[Object(n.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(){return t.switchSpeed()},children:1===this.state.speed?"Fast":5===this.state.speed?"Regular":10===this.state.speed?"Slow":"Fast"}),Object(n.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return t.clearGrid()},children:"Clear Grid"}),Object(n.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(){return t.clearWalls()},children:"Clear Walls"}),Object(n.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){return t.visualize("Dijkstra")},children:"Dijkstra's"}),Object(n.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){return t.visualize("AStar")},children:"A*"}),Object(n.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){return t.visualize("Greedy")},children:"Greedy"}),Object(n.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){return t.visualize("BFS")},children:"Bread First Search"}),Object(n.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){return t.visualize("DFS")},children:"Depth First Search"})]})]}),Object(n.jsx)("table",{className:"grid-container",onMouseLeave:function(){return t.handleMouseLeave()},children:Object(n.jsx)("tbody",{className:"grid",children:s.map((function(e,s){return Object(n.jsx)("tr",{children:e.map((function(e,s){var a=e.row,o=e.col,r=e.isFinish,c=e.isStart,d=e.isWall;return Object(n.jsx)(N,{col:o,isFinish:r,isStart:c,isWall:d,mouseIsPressed:i,onMouseDown:function(e,s){return t.handleMouseDown(e,s)},onMouseEnter:function(e,s){return t.handleMouseEnter(e,s)},onMouseUp:function(){return t.handleMouseUp(a,o)},row:a},s)}))},s)}))})})]})}}]),s}(a.a.Component),y=function(t,e,s){var n=t.slice(),i=n[e][s];if(!i.isStart&&!i.isFinish&&i.isNode){var a=Object(c.a)(Object(c.a)({},i),{},{isWall:!i.isWall});n[e][s]=a}return n};var I=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(j,{})})},_=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,22)).then((function(e){var s=e.getCLS,n=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;s(t),n(t),i(t),a(t),o(t)}))};s(20);r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root")),_()}},[[21,1,2]]]);
//# sourceMappingURL=main.c9dc8316.chunk.js.map