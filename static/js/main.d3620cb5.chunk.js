(this["webpackJsonpmy-first-app"]=this["webpackJsonpmy-first-app"]||[]).push([[0],{32:function(t,e,o){},33:function(t,e,o){"use strict";o.r(e);var n=o(1),r=o(0),c=o.n(r),a=o(20),i=o.n(a),s=o(18),d=o(7),l=o(8),u=o(10),p=o(9),j=o(13),b=o(2);var h={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},f={color:"#fff",textDecoration:"none"},O=function(){return Object(n.jsxs)("header",{style:h,children:[Object(n.jsx)("h1",{children:"To Do List"}),Object(n.jsx)(j.b,{style:f,to:"/",children:"Home"})," | ",Object(n.jsx)(j.b,{style:f,to:"/about",children:"About"})]})},m=function(t){Object(u.a)(o,t);var e=Object(p.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(l.a)(o,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return Object(n.jsx)("div",{style:this.getStyle(),children:Object(n.jsxs)("p",{children:[Object(n.jsx)("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",o,Object(n.jsx)("button",{onClick:this.props.delTodo.bind(this,e),style:x,children:"x"})]})})}}]),o}(r.Component),x={backgroundColor:"#ff0000",color:"#fff",border:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},v=m,g=function(t){Object(u.a)(o,t);var e=Object(p.a)(o);function o(){return Object(d.a)(this,o),e.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return Object(n.jsx)(v,{todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo},e.id)}))}}]),o}(r.Component),y=function(t){Object(u.a)(o,t);var e=Object(p.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={title:""},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t.onChange=function(e){return t.setState({title:e.target.value})},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(n.jsxs)("form",{onSubmit:this.onSubmit,style:{display:"flex"},children:[Object(n.jsx)("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),Object(n.jsx)("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}})]})}}]),o}(r.Component);var C=function(){return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)("h1",{children:"About"}),Object(n.jsx)("p",{children:"This is the ToDoList app v1.0.0. It is part of a React crash course"})]})},k=o(35),T=(o(32),function(t){Object(u.a)(o,t);var e=Object(p.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={todos:[{id:Object(k.a)(),title:"Take out the trash",completed:!1},{id:Object(k.a)(),title:"Cook dinner",completed:!1},{id:Object(k.a)(),title:"Meeting with boss",completed:!1}]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){t.setState({todos:Object(s.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addTodo=function(e){var o={id:Object(k.a)(),title:e,completed:!1};t.setState({todos:[].concat(Object(s.a)(t.state.todos),[o])})},t}return Object(l.a)(o,[{key:"render",value:function(){var t=this;return Object(n.jsx)(j.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(O,{}),Object(n.jsx)(b.a,{exact:!0,path:"/",render:function(e){return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(y,{addTodo:t.addTodo}),Object(n.jsx)("h1",{children:"Hi Tomasz It`s great too see You ;)"}),Object(n.jsx)(g,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo})]})}}),Object(n.jsx)(b.a,{path:"/about",component:C})]})})})}}]),o}(r.Component)),S=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,36)).then((function(e){var o=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;o(t),n(t),r(t),c(t),a(t)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root")),S()}},[[33,1,2]]]);
//# sourceMappingURL=main.d3620cb5.chunk.js.map