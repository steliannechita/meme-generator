(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(7),r=n.n(l),i=(n(15),n(1)),c=n(2),m=n(4),s=n(3),u=n(5);n(16),n(17);var h=function(){return o.a.createElement("header",null,o.a.createElement("img",{src:"http://www.pngall.com/wp-content/uploads/2016/06/Forever-Alone-PNG-Image.png",alt:""}),o.a.createElement("p",null,"Meme generator 2019"))},p=n(8),d=(n(18),n(19),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).handleChange=function(t){var n=t.target,a=n.name,o=n.value;e.setState(Object(p.a)({},a,o))},e.handleClick=function(){var t=Math.floor(Math.random()*e.state.allMemeImgs.length);e.setState({randomImg:e.state.allMemeImgs[t].url})},e.state={font_size:"22",topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then(function(e){return e.json()}).then(function(t){var n=t.data.memes;e.setState({allMemeImgs:n})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"main-container"},o.a.createElement("div",{className:"meme-form"},o.a.createElement("input",{type:"text",name:"topText",placeholder:"top text",onChange:this.handleChange,value:this.state.topText}),o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"bottomText",placeholder:"bottom text",onChange:this.handleChange,value:this.state.bottomText}),o.a.createElement("br",null),o.a.createElement("input",{type:"number",name:"font_size",placeholder:"font size",onChange:this.handleChange,value:this.state.font_size}),o.a.createElement("button",{onClick:this.handleClick},"Generate!")),o.a.createElement("div",{className:"meme"},o.a.createElement("h2",{style:{fontSize:Number(this.state.font_size)},className:"top"},this.state.topText),o.a.createElement("img",{src:this.state.randomImg,alt:""}),o.a.createElement("h2",{style:{fontSize:Number(this.state.font_size)},className:"bottom"},this.state.bottomText)))}}]),t}(a.Component)),f=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(h,null),o.a.createElement(d,null))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.f615b30e.chunk.js.map