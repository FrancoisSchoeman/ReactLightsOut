(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),s=a.n(o),c=(a(16),a(2)),l=a(3),i=a(5),u=a(4),h=a(6),d=a(10),b=a(1),m=(a(18),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(b.a)(Object(b.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){this.props.flipCellsAroundMe(this.props.coord)}},{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return r.a.createElement("td",{className:e,onClick:this.handleClick})}}]),t}(n.Component)),p=(a(20),a(9)),f=(a(22),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={rows:"",cols:""},a.handleSubmit=a.handleSubmit.bind(Object(b.a)(Object(b.a)(a))),a.handleChange=a.handleChange.bind(Object(b.a)(Object(b.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.changeBoard(this.state.rows,this.state.cols),this.setState({rows:"",cols:""})}},{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return r.a.createElement("div",{className:"BoardForm"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"BoardForm-form"},r.a.createElement("label",{htmlFor:"rows"},"Rows: "),r.a.createElement("input",{onChange:this.handleChange,type:"text",id:"rows",name:"rows",value:this.state.rows}),r.a.createElement("label",{htmlFor:"cols"},"Columns: "),r.a.createElement("input",{onChange:this.handleChange,type:"text",id:"cols",name:"cols",value:this.state.cols}),r.a.createElement("button",null,"Select")))}}]),t}(n.Component)),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={nrows:3,ncols:3,hasWon:!1,board:a.createBoard(a.props.nrows,a.props.ncols)},a.flipCellsAround=a.flipCellsAround.bind(Object(b.a)(Object(b.a)(a))),a.changeBoard=a.changeBoard.bind(Object(b.a)(Object(b.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"showBoard",value:function(){for(var e=[],t=0;t<this.state.nrows;t++){for(var a=[],n=0;n<this.state.ncols;n++){var o="".concat(t,"-").concat(n);a.push(r.a.createElement(m,{key:o,isLit:this.state.board[t][n],flipCellsAroundMe:this.flipCellsAround,coord:o}))}e.push(r.a.createElement("tr",{key:t},a))}return e}},{key:"createBoard",value:function(e,t){for(var a=[],n=0;n<e;n++){for(var r=[],o=0;o<t;o++)r.push(Math.random()<this.props.chanceLightStartsOn);a.push(r)}return a}},{key:"flipCellsAround",value:function(e){var t=this.props,a=t.ncols,n=t.nrows,r=this.state.board,o=e.split("-").map(Number),s=Object(d.a)(o,2),c=s[0],l=s[1];function i(e,t){t>=0&&t<a&&e>=0&&e<n&&(r[e][t]=!r[e][t])}i(c,l),i(c+1,l),i(c-1,l),i(c,l+1),i(c,l-1);var u=r.every(function(e){return e.every(function(e){return!e})});this.setState({board:r,hasWon:u})}},{key:"changeBoard",value:function(e,t){this.setState({nrows:parseInt(e),ncols:parseInt(t),hasWon:!1,board:this.createBoard(e,t)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Board"},this.state.hasWon?r.a.createElement("div",null,r.a.createElement("h1",null,"You Win!"),r.a.createElement(f,{changeBoard:this.changeBoard})):r.a.createElement("table",{className:"Board Board-shadow"},r.a.createElement("tbody",null,this.showBoard())))}}]),t}(n.Component);v.defaultProps={nrows:3,ncols:3,chanceLightStartsOn:.5};var O=v,j=(a(24),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.cd7d72d4.chunk.js.map