(this.webpackJsonppoll=this.webpackJsonppoll||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/pc.b623dc1d.jpeg"},14:function(e,t,a){e.exports=a.p+"static/media/Ps.090cca5f.jpeg"},15:function(e,t,a){e.exports=a.p+"static/media/Xbox.db1755ff.jpg"},16:function(e,t,a){e.exports=a.p+"static/media/con.a96f4f3c.png"},19:function(e,t,a){e.exports=a(30)},30:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(3),r=a.n(o),c=a(4),l=a(5),i=a(7),p=a(6),u=a(2),m=a(13),b=a.n(m),g=a(14),d=a.n(g),h=a(15),y=a.n(h),P=a(16),v=a.n(P),f=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).handleVotePc=function(){e.props.PC()},e.handleVotePlaystation=function(){e.props.playstation()},e.handleVoteXbox=function(){e.props.Xbox()},e}return Object(l.a)(a,[{key:"render",value:function(){return console.log(this.props.state.PC),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"jumbotron",style:{textAlign:"center"}},s.a.createElement("img",{src:v.a,height:"96",alt:"Gaming"}),s.a.createElement("h2",null,"What is your favorite Gaming choice?"),s.a.createElement("h4",null,"Click on the logos below to vote!"),s.a.createElement("br",null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6 col-md-4 view"},s.a.createElement("img",{src:d.a,height:"96",alt:"playstation",onClick:this.handleVotePlaystation,className:"hoverable"})),s.a.createElement("div",{className:"col-6 col-md-4"},s.a.createElement("img",{src:b.a,height:"96",alt:"pc",onClick:this.handleVotePc,className:"hoverable"})),s.a.createElement("div",{className:"col-6 col-md-4"},s.a.createElement("img",{src:y.a,height:"96",alt:"xbox",onClick:this.handleVoteXbox,className:"hoverable"})))))}}]),a}(n.Component),x=Object(u.b)(null,(function(e){return{playstation:function(){return e({type:"Vote_Playstation"})},Xbox:function(){return e({type:"Vote_Xbox"})},PC:function(){return e({type:"Vote_PC"})}}}))(f),E=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).VotesInPercentagePlaystation=function(){return e.props.state.playstation?e.props.state.playstation/(e.props.state.playstation+e.props.state.Xbox+e.props.state.PC)*100:0},e.VotesInPercentageXbox=function(){return e.props.state.Xbox?e.props.state.Xbox/(e.props.state.Xbox+e.props.state.playstation+e.props.state.PC)*100:0},e.VotesInPercentagePC=function(){return e.props.state.PC?e.props.state.PC/(e.props.state.PC+e.props.state.Xbox+e.props.state.playstation)*100:0},e.votesplaystationInPercentageStyle=function(){return{width:e.VotesInPercentagePlaystation()+"%"}},e.votesPcInPercentageStyle=function(){return{width:e.VotesInPercentagePC()+"%"}},e.votesXboxInPercentageStyle=function(){return{width:e.VotesInPercentageXbox()+"%"}},e}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("span",{className:"label label-danger"},"playstation: ",this.VotesInPercentagePlaystation().toFixed(2)+"%"),s.a.createElement("div",{className:"progress progress-striped active"},s.a.createElement("div",{className:"progress-bar bg-danger progress-bar-animated",style:this.votesplaystationInPercentageStyle()})),s.a.createElement("span",{className:"label label-info"},"Xbox: ",this.VotesInPercentageXbox().toFixed(2)+"%"),s.a.createElement("div",{className:"progress progress-striped active"},s.a.createElement("div",{className:"progress-bar bg-success progress-bar-animated",style:this.votesXboxInPercentageStyle()})),s.a.createElement("span",{className:"label label-success"},"PC: ",this.VotesInPercentagePC().toFixed(2)+"%"),s.a.createElement("div",{className:"progress progress-striped active"},s.a.createElement("div",{className:"progress-bar progress-bar-success ",style:this.votesPcInPercentageStyle()})))}}]),a}(n.Component),C=Object(u.b)((function(e){return{playstation:e.playstation,state:e}}))((function(e){return s.a.createElement("div",null,s.a.createElement(x,{state:e.state}),s.a.createElement(E,{state:e.state}))})),X=a(1),V=a(17),j=a(18),N={playstation:0,Xbox:0,PC:0},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Vote_Playstation":return console.log("Your choice is Playstation!"),Object.assign({},e,{playstation:e.playstation+1});case"Vote_Xbox":return console.log("Your choice is Xbox!"),Object.assign({},e,{Xbox:e.Xbox+1});case"Vote_PC":return console.log("Your choice is PC!"),Object.assign({},e,{PC:e.PC+1});default:return e}},O=Object(X.createStore)(I,Object(j.composeWithDevTools)(Object(X.applyMiddleware)(V.a)));r.a.render(s.a.createElement(u.a,{store:O},s.a.createElement(C,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.92d2710d.chunk.js.map