(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,a){e.exports=a(30)},24:function(e,t,a){},26:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),i=a.n(r),c=(a(24),a(25),a(18)),m=a(7),s=a(8),o=a(10),u=a(9),d=a(6),h=a(11),E=(a(26),function(e){return l.a.createElement("header",null,l.a.createElement("nav",{className:"navbar navbar-default navbar-static-top",role:"navigation",style:{marginBottom:0}},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("a",{className:"navbar-brand",href:"index.html"},"Body Stats Calculator"))))}),f=a(32),b=a(33),p=a(34),v=a(35),y=a(31),g=a(36),k=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={form:"",data:{gender:"female",date:"2019-09-11",age:"30",weight:"135",feet:"5",inches:"5",hips:"36",waist:"28",neck:"12",activity:"1.375"}},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"setFormData",value:function(){var e=this.props.prevForm[0];this.setState({form:e})}},{key:"componentDidUpdate",value:function(e,t){this.props.prevForm!==e.prevForm&&this.setFormData()}},{key:"render",value:function(){var e=this.state.data,t=e.gender,a=e.date,n=e.age,r=e.weight,i=e.feet,c=e.inches,m=e.hips,s=e.waist,o=e.neck,u=e.activity,d=function(e){return l.a.createElement(y.a,{className:e.className},l.a.createElement(f.a,{htmlFor:e.id},e.title,l.a.createElement(b.a,{id:e.id,name:e.id,type:e.type,defaultValue:e.default,placeholder:e.placeholder,min:e.min,max:e.max,required:!0})))},h=function(e){return l.a.createElement(p.a,{check:!0},l.a.createElement(f.a,{htmlFor:e.id,check:!0},l.a.createElement(b.a,{id:e.id,name:e.name,type:"radio",value:e.value,defaultChecked:e.checked,required:!0})," ",e.title))};return l.a.createElement(y.a,{className:"calcForm"},l.a.createElement("header",null,l.a.createElement("h4",null,"Your Measurements")),l.a.createElement("hr",null),l.a.createElement(v.a,{onSubmit:this.props.handleSubmit},l.a.createElement(g.a,{form:!0},l.a.createElement(y.a,null,l.a.createElement(p.a,{tag:"fieldset",row:!0},l.a.createElement("legend",{className:"col-form-label col-sm-2"},"Gender"),l.a.createElement(h,{id:"female",title:"Female",name:"gender",value:"female",checked:"female"===t}),l.a.createElement(h,{id:"male",title:"Male",name:"gender",value:"male",checked:"male"===t}))),l.a.createElement(d,{id:"date",type:"date",default:a})),l.a.createElement(g.a,{form:!0},l.a.createElement(d,{id:"age",title:"Age",type:"number",min:"18",max:"99",default:n}),l.a.createElement(d,{id:"weight",title:"Weight",type:"number",min:"85",max:"600",default:r})),l.a.createElement(p.a,null,l.a.createElement(f.a,{htmlFor:"Height"},"Height "),l.a.createElement(g.a,{form:!0},l.a.createElement(d,{id:"feet",className:"heightRow",placeholder:"Feet",type:"number",min:"4",max:"7",default:i}),l.a.createElement(d,{id:"inches",className:"heightRow",placeholder:"Inches",type:"number",min:"0",max:"11",default:c}))),l.a.createElement("hr",null),l.a.createElement(p.a,null,l.a.createElement(f.a,{htmlFor:"measurements",className:"fieldBold"},"Measurements (Inches)"),l.a.createElement(g.a,{form:!0},l.a.createElement(d,{id:"hips",title:"Hips",type:"number",default:m}),l.a.createElement(d,{id:"waist",title:"Waist",type:"number",default:s}),l.a.createElement(d,{id:"neck",title:"Neck",type:"number",default:o}))),l.a.createElement(g.a,{form:!0},l.a.createElement(f.a,{htmlFor:"activity",className:"fieldBold"},"Activity Level"),l.a.createElement(p.a,{tag:"fieldset",row:!0},l.a.createElement(h,{id:"none",title:"None",name:"activity",value:"1.2",checked:"1.2"===u}),l.a.createElement(h,{id:"light",title:"Light",name:"activity",value:"1.375",checked:"1.375"===u}),l.a.createElement(h,{id:"normal",title:"Normal",name:"activity",value:"1.55",checked:"1.55"===u}),l.a.createElement(h,{id:"extra",title:"Extra",name:"activity",value:"1.725",checked:"1.725"===u}),l.a.createElement(h,{id:"heavy",title:"Heavy",name:"activity",value:"1.9",checked:"1.9"===u}))),l.a.createElement("button",null,"Calculate ")))}}]),t}(l.a.Component),w=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={selectedProduct:{},statlist:a.props.statlist,error:"error"},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=function(e){var t=e.item;return l.a.createElement("tr",null,l.a.createElement("td",null,t.date),l.a.createElement("td",null,t.weight),l.a.createElement("td",null,t.bmi),l.a.createElement("td",null,t.bf),l.a.createElement("td",null,t.tdee))};return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("h4",null,"Your Progress")),l.a.createElement("table",{className:"table table-hover table-striped",id:"tableId"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Weight"),l.a.createElement("th",null,"Body Mass Index"),l.a.createElement("th",null,"Body Fat %"),l.a.createElement("th",null,"TDEE"))),l.a.createElement("tbody",null,l.a.createElement(function(a){a.lists;return Object.keys(e.props.statlist).reverse().map(function(a){return l.a.createElement(t,{key:a,item:e.props.statlist[a]})})},null))))}}]),t}(l.a.Component),O=a(37),j=a(38),N=a(39),D=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.bmi,a=e.bf,n=e.tdee,r=e.bmiR,i=this.props,c=i.bfR,m=i.tdeeA,s=function(e){return l.a.createElement(O.a,{body:!0},l.a.createElement(j.a,null,e.title),l.a.createElement(N.a,null,e.stat),l.a.createElement(N.a,null,e.about))};return l.a.createElement(y.a,{className:"statGroup"},l.a.createElement("header",null,l.a.createElement("h4",null,"Your Stats")),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement(s,{title:"Body Mass Index",stat:t,about:r}),l.a.createElement(s,{title:"Body Fat Percentage",stat:a,about:c}),l.a.createElement(s,{title:"Total Daily Energy Expenditure",stat:n,about:m})))}}]),t}(l.a.Component);var F=a(40),x="".concat("https://8qkziweyo4.execute-api.us-west-2.amazonaws.com/"),S=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={formitems:"",statList:[{id:1,date:"MonthYear",bmi:"23",bf:"21",weight:"125",tdee:"1800"}],form:"",tdee:"",tdeeA:"Calories",bmi:"",bmiR:"",bf:"",bfR:"Percent",error:"error"},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.setDisplay=a.setDisplay.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleDataChange",value:function(){var e=this;fetch("".concat(x,"dev/api/user/stats")).then(function(e){if(!e.ok)throw console.log("Error!!!!"),Error(e.statusText);return console.log("okay"),e}).then(function(e){return e.json()}).then(function(t){e.setState({list:t,isLoaded:!0,error:""})},function(t){e.setState({error:"Please input valid search..."})})}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("handleSubmit");var t=new FormData(e.target),a=Object.fromEntries(t),n=this.setDisplay(a);this.setState({formitems:n,statList:[].concat(Object(c.a)(this.state.statList),[n])})}},{key:"componentDidMount",value:function(){console.log("Did Mount"),this.handleDataChange()}},{key:"setDisplay",value:function(e){console.log("setDisplay,  data");var t=e.gender,a=e.age,n=e.feet,l=e.inches,r=e.waist,i=e.weight,c=e.neck,m=e.hips,s=e.activity;r=parseInt(r),c=parseInt(c),m=parseInt(m);var o=12*n+(l=parseInt(l)),u=(i/(o*o)*703).toPrecision(3),d=function(e){return e<18.5?"Underweight":e>=18.5&&e<25?"Normal":e>=25&&e<30?"Overweight":"Obese"}(u),h=function(e,t,a,n,l){var r=function(e){return Math.log(e)/Math.log(10)},i=86.01*r(t-a)-70.041*r(n)+36.76,c=163.205*r(t+l-a)-97.684*r(n)-78.387;return"male"===e?i:c}(t,r,c,o,m).toPrecision(3),E=function(e,t,a,n,l){return"male"===e?(66+6.23*a+12.7*n-6.8*l)*t:(655+4.35*a+4.7*n-4.7*l)*t}(t,s,i,o,a).toPrecision(4);return e.bf=h,e.bmi=u,e.tdee=E,e.bmiR=d,e}},{key:"componentDidUpdate",value:function(e,t){this.props.data!==e.data&&this.setDisplay()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement("br",null),l.a.createElement("div",{className:"main"},l.a.createElement("hr",null),l.a.createElement(F.a,{className:"calcAndStat"},l.a.createElement(k,{prevForm:this.state.statList,fromForm:this.state.formitems,handleSubmit:this.handleSubmit}),l.a.createElement(D,{data:this.state.formitems,tdeeA:this.state.tdeeA,bfR:this.state.bfR})),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement(w,{className:"container",statlist:this.state.statList})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.d48ad10c.chunk.js.map