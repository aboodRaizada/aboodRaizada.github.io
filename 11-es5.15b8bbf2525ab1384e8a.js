!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+hkp":function(a,n,c){"use strict";c.r(n),c.d(n,"OrdersModule",function(){return ve});var r=c("SVse"),i=c("FpXt"),s=c("iInd"),o=c("mrSG"),l=c("OaSA"),d=c("0sX0"),u=c("AytR"),b=c("3bzS"),p=c("8Y7J"),g=c("TSSN"),m=c("WW8z"),h=c("lmAj"),f=c("Q2Ze"),v=c("ZTz/"),S=c("s7LF"),k=c("UhP/"),y=c("e6WT"),O=c("Dxy4"),C=c("vrAh"),F=c("pu8Q"),A=c("TN/R"),Y=c("WzhS"),Z=c("ZFy/");function L(e,t){if(1&e){var a=p.ac();p.Zb(0,"div",22),p.Zb(1,"div",23),p.Zb(2,"div",24),p.Zb(3,"mat-form-field",25),p.Zb(4,"mat-label"),p.Lc(5),p.lc(6,"translate"),p.Yb(),p.Zb(7,"input",26),p.gc("ngModelChange",function(e){return p.Ec(a),p.kc().orderId=e})("keyup.enter",function(){return p.Ec(a),p.kc().getAllOrdersById()}),p.Yb(),p.Zb(8,"button",27),p.gc("click",function(){return p.Ec(a),p.kc().getAllOrdersById()}),p.Ub(9,"i",28),p.Yb(),p.Yb(),p.Yb(),p.Yb(),p.Yb()}if(2&e){var n=p.kc();p.Fb(3),p.qc("appearance",n.matInputAppearance)("color",n.matInputsColor),p.Fb(2),p.Mc(p.mc(6,4,"orders.orderNumber")),p.Fb(2),p.qc("ngModel",n.orderId)}}function w(e,t){1&e&&(p.Zb(0,"mat-option"),p.Ub(1,"mat-spinner",37),p.Yb())}function T(e,t){if(1&e&&(p.Zb(0,"mat-option",14),p.Zb(1,"span",38),p.Lc(2),p.Yb(),p.Yb()),2&e){var a=t.$implicit;p.qc("value",a),p.Fb(2),p.Nc(" ",a.fullname," ")}}function N(e,t){if(1&e){var a=p.ac();p.Zb(0,"div",29),p.Zb(1,"div",23),p.Zb(2,"div",30),p.Zb(3,"mat-form-field",25),p.Zb(4,"mat-label"),p.Lc(5),p.lc(6,"translate"),p.Yb(),p.Zb(7,"input",31,32),p.gc("keyup.enter",function(){p.Ec(a);var e=p.Cc(8);return p.kc().filteringAgents(e)}),p.Yb(),p.Zb(9,"mat-autocomplete",33,34),p.gc("optionSelected",function(e){return p.Ec(a),p.kc().selectedAgent(e)}),p.Kc(11,w,2,0,"mat-option",35),p.Kc(12,T,3,2,"mat-option",36),p.Yb(),p.Zb(13,"button",27),p.gc("click",function(){p.Ec(a);var e=p.Cc(8);return p.kc().filteringAgents(e)}),p.Ub(14,"i",28),p.Yb(),p.Yb(),p.Yb(),p.Yb(),p.Yb()}if(2&e){var n=p.Cc(10),c=p.kc();p.Fb(3),p.qc("appearance",c.matInputAppearance)("color",c.matInputsColor),p.Fb(2),p.Mc(p.mc(6,7,"orders.agentName")),p.Fb(2),p.qc("matAutocomplete",n),p.Fb(2),p.qc("displayWith",c.displayFn),p.Fb(2),p.qc("ngIf",c.agentsIsLoading),p.Fb(1),p.qc("ngForOf",c.filteredAgentsOptions)}}function I(e,t){if(1&e){var a=p.ac();p.Zb(0,"button",48),p.gc("click",function(){return p.Ec(a),p.kc(2).getAllOrdersFromToDate()}),p.Lc(1),p.lc(2,"translate"),p.Yb()}2&e&&(p.Fb(1),p.Nc(" ",p.mc(2,1,"shared.search")," "))}function x(e,t){if(1&e){var a=p.ac();p.Zb(0,"div",29),p.Zb(1,"div",23),p.Zb(2,"div",39),p.Zb(3,"mat-form-field",40),p.Zb(4,"mat-label"),p.Lc(5),p.lc(6,"translate"),p.Yb(),p.Zb(7,"input",41),p.gc("keypress",function(e){return p.Ec(a),p.kc().stopWriting(e)})("click",function(){return p.Ec(a),p.Cc(10).open()})("focus",function(){return p.Ec(a),p.Cc(10).open()})("keyup.enter",function(){return p.Ec(a),p.kc().getAllOrdersFromToDate()})("ngModelChange",function(e){return p.Ec(a),p.kc().fromDateSearchValue=e}),p.Yb(),p.Ub(8,"mat-datepicker-toggle",42),p.Ub(9,"mat-datepicker",null,43),p.Yb(),p.Yb(),p.Zb(11,"div",39),p.Zb(12,"mat-form-field",40),p.Zb(13,"mat-label"),p.Lc(14),p.lc(15,"translate"),p.Yb(),p.Zb(16,"input",44),p.gc("keypress",function(e){return p.Ec(a),p.kc().stopWriting(e)})("click",function(){return p.Ec(a),p.Cc(19).open()})("focus",function(){return p.Ec(a),p.Cc(19).open()})("keyup.enter",function(){return p.Ec(a),p.kc().getAllOrdersFromToDate()})("ngModelChange",function(e){return p.Ec(a),p.kc().toDateSearchValue=e}),p.Yb(),p.Ub(17,"mat-datepicker-toggle",42),p.Ub(18,"mat-datepicker",null,45),p.Yb(),p.Yb(),p.Zb(20,"div",46),p.Kc(21,I,3,3,"button",47),p.Yb(),p.Yb(),p.Yb()}if(2&e){var n=p.Cc(10),c=p.Cc(19),r=p.kc();p.Fb(3),p.qc("color",r.matInputsColor)("appearance",r.matInputAppearance),p.Fb(2),p.Mc(p.mc(6,13,"shared.from")),p.Fb(2),p.qc("matDatepicker",n)("ngModel",r.fromDateSearchValue),p.Fb(1),p.qc("for",n),p.Fb(4),p.qc("color",r.matInputsColor)("appearance",r.matInputAppearance),p.Fb(2),p.Mc(p.mc(15,15,"shared.to")),p.Fb(2),p.qc("matDatepicker",c)("ngModel",r.toDateSearchValue),p.Fb(1),p.qc("for",c),p.Fb(4),p.qc("ngIf",r.fromDateSearchValue&&r.toDateSearchValue)}}var D=function(){return{height:"35px",backgroundColor:"#ddd"}};function P(e,t){if(1&e&&(p.Zb(0,"div",49),p.Ub(1,"ngx-skeleton-loader",50),p.Yb()),2&e){var a=p.kc();p.Fb(1),p.qc("count",a.perPage)("theme",p.uc(2,D))}}function q(e,t){1&e&&(p.Zb(0,"mat-header-cell"),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e&&(p.Fb(1),p.Nc(" ",p.mc(2,1,"orders.orderNumber")," "))}function K(e,t){if(1&e&&(p.Zb(0,"mat-cell"),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e){var a=t.$implicit;p.Fb(1),p.Nc(" ",a.orderId||p.mc(2,1,"shared.noData")," ")}}function M(e,t){1&e&&(p.Zb(0,"mat-header-cell"),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e&&(p.Fb(1),p.Nc(" ",p.mc(2,1,"orders.agentName")," "))}function j(e,t){if(1&e&&(p.Zb(0,"mat-cell"),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e){var a=t.$implicit;p.Fb(1),p.Nc(" ",a.agentName||p.mc(2,1,"shared.noData")," ")}}function U(e,t){1&e&&(p.Zb(0,"mat-header-cell"),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e&&(p.Fb(1),p.Nc(" ",p.mc(2,1,"orders.customerName")," "))}function E(e,t){if(1&e&&(p.Zb(0,"mat-cell"),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e){var a=t.$implicit;p.Fb(1),p.Nc(" ",a.customerName||p.mc(2,1,"shared.noData")," ")}}function V(e,t){1&e&&(p.Zb(0,"mat-header-cell"),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e&&(p.Fb(1),p.Nc(" ",p.mc(2,1,"orders.date")," "))}function W(e,t){if(1&e&&(p.Zb(0,"mat-cell"),p.Lc(1),p.lc(2,"date"),p.lc(3,"translate"),p.Yb()),2&e){var a=t.$implicit;p.Fb(1),p.Nc(" ",p.nc(2,1,a.orderCreationDate,"dd/MM/yyyy")||p.mc(3,4,"shared.noData")," ")}}function z(e,t){1&e&&(p.Zb(0,"mat-header-cell"),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e&&(p.Fb(1),p.Nc(" ",p.mc(2,1,"orders.time")," "))}function R(e,t){if(1&e&&(p.Zb(0,"mat-cell"),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e){var a=t.$implicit;p.Fb(1),p.Nc(" ",(null==a?null:a.durationToCurrentStatus)||p.mc(2,1,"shared.noData")," ")}}function B(e,t){1&e&&(p.Zb(0,"mat-header-cell"),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e&&(p.Fb(1),p.Nc(" ",p.mc(2,1,"orders.captainName")," "))}function _(e,t){if(1&e&&(p.Zb(0,"mat-cell"),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e){var a=t.$implicit;p.Fb(1),p.Nc(" ",a.captainName||p.mc(2,1,"shared.noData")," ")}}function X(e,t){1&e&&(p.Zb(0,"mat-header-cell"),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e&&(p.Fb(1),p.Nc(" ",p.mc(2,1,"orders.status")," "))}function $(e,t){1&e&&(p.Zb(0,"span",71),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e&&(p.Fb(1),p.Nc(" ",p.mc(2,1,"shared.OrdersStatusTypes.new")," "))}function H(e,t){1&e&&(p.Zb(0,"span",71),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e&&(p.Fb(1),p.Nc(" ",p.mc(2,1,"shared.OrdersStatusTypes.assginedToCaptain")," "))}function Q(e,t){1&e&&(p.Zb(0,"span",71),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e&&(p.Fb(1),p.Nc(" ",p.mc(2,1,"shared.OrdersStatusTypes.pickedUp")," "))}function J(e,t){1&e&&(p.Zb(0,"span",71),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e&&(p.Fb(1),p.Nc(" ",p.mc(2,1,"shared.OrdersStatusTypes.progress")," "))}function G(e,t){1&e&&(p.Zb(0,"span",71),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e&&(p.Fb(1),p.Nc(" ",p.mc(2,1,"shared.OrdersStatusTypes.dropped")," "))}function ee(e,t){1&e&&(p.Zb(0,"span",72),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e&&(p.Fb(1),p.Nc(" ",p.mc(2,1,"shared.OrdersStatusTypes.delivered")," "))}function te(e,t){1&e&&(p.Zb(0,"span",73),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e&&(p.Fb(1),p.Nc(" ",p.mc(2,1,"shared.OrdersStatusTypes.canceled")," "))}function ae(e,t){1&e&&(p.Zb(0,"span",72),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e&&(p.Fb(1),p.Nc(" ",p.mc(2,1,"shared.OrdersStatusTypes.end")," "))}function ne(e,t){1&e&&(p.Zb(0,"span",74),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e&&(p.Fb(1),p.Nc(" ",p.mc(2,1,"shared.OrdersStatusTypes.notAssignedToCaptain")," "))}function ce(e,t){1&e&&(p.Zb(0,"span",75),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e&&(p.Fb(1),p.Nc(" ",p.mc(2,1,"shared.noData")," "))}function re(e,t){if(1&e&&(p.Zb(0,"mat-cell"),p.Zb(1,"span",65),p.Kc(2,$,3,3,"span",66),p.Kc(3,H,3,3,"span",66),p.Kc(4,Q,3,3,"span",66),p.Kc(5,J,3,3,"span",66),p.Kc(6,G,3,3,"span",66),p.Kc(7,ee,3,3,"span",67),p.Kc(8,te,3,3,"span",68),p.Kc(9,ae,3,3,"span",67),p.Kc(10,ne,3,3,"span",69),p.Kc(11,ce,3,3,"span",70),p.Yb(),p.Yb()),2&e){var a=t.$implicit;p.Fb(1),p.qc("ngSwitch",a.orderCurrentStatus),p.Fb(1),p.qc("ngSwitchCase",1),p.Fb(1),p.qc("ngSwitchCase",2),p.Fb(1),p.qc("ngSwitchCase",3),p.Fb(1),p.qc("ngSwitchCase",4),p.Fb(1),p.qc("ngSwitchCase",5),p.Fb(1),p.qc("ngSwitchCase",6),p.Fb(1),p.qc("ngSwitchCase",7),p.Fb(1),p.qc("ngSwitchCase",8),p.Fb(1),p.qc("ngSwitchCase",9)}}function ie(e,t){1&e&&(p.Zb(0,"mat-header-cell"),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e&&(p.Fb(1),p.Nc(" ",p.mc(2,1,"orders.deliveryAmount")," "))}function se(e,t){if(1&e&&(p.Zb(0,"mat-cell"),p.Lc(1),p.lc(2,"translate"),p.Yb()),2&e){var a=t.$implicit;p.Fb(1),p.Nc(" ",a.deliveryAmount?a.deliveryAmount:p.mc(2,1,"shared.noData")," ")}}function oe(e,t){1&e&&p.Ub(0,"mat-header-row")}function le(e,t){if(1&e){var a=p.ac();p.Zb(0,"mat-row",76),p.gc("click",function(){var e=p.Ec(a).$implicit;return p.kc(2).routeUser(e.orderId)}),p.Yb()}}function de(e,t){if(1&e&&(p.Zb(0,"div",51),p.Zb(1,"mat-table",52),p.Xb(2,53),p.Kc(3,q,3,3,"mat-header-cell",54),p.Kc(4,K,3,3,"mat-cell",55),p.Wb(),p.Xb(5,56),p.Kc(6,M,3,3,"mat-header-cell",54),p.Kc(7,j,3,3,"mat-cell",55),p.Wb(),p.Xb(8,57),p.Kc(9,U,3,3,"mat-header-cell",54),p.Kc(10,E,3,3,"mat-cell",55),p.Wb(),p.Xb(11,58),p.Kc(12,V,3,3,"mat-header-cell",54),p.Kc(13,W,4,6,"mat-cell",55),p.Wb(),p.Xb(14,59),p.Kc(15,z,3,3,"mat-header-cell",54),p.Kc(16,R,3,3,"mat-cell",55),p.Wb(),p.Xb(17,60),p.Kc(18,B,3,3,"mat-header-cell",54),p.Kc(19,_,3,3,"mat-cell",55),p.Wb(),p.Xb(20,61),p.Kc(21,X,3,3,"mat-header-cell",54),p.Kc(22,re,12,10,"mat-cell",55),p.Wb(),p.Xb(23,62),p.Kc(24,ie,3,3,"mat-header-cell",54),p.Kc(25,se,3,3,"mat-cell",55),p.Wb(),p.Kc(26,oe,1,0,"mat-header-row",63),p.Kc(27,le,1,0,"mat-row",64),p.Yb(),p.Yb()),2&e){var a=p.kc();p.Fb(1),p.qc("dataSource",a.dataSource),p.Fb(25),p.qc("matHeaderRowDef",a.displayedColumns)("matHeaderRowDefSticky",!0),p.Fb(1),p.qc("matRowDefColumns",a.displayedColumns)}}function ue(e,t){1&e&&(p.Zb(0,"div",77),p.Zb(1,"h3",78),p.Lc(2),p.lc(3,"translate"),p.Yb(),p.Yb()),2&e&&(p.Fb(2),p.Nc(" ",p.mc(3,1,"shared.noData")," "))}function be(e,t){if(1&e){var a=p.ac();p.Zb(0,"div",79),p.Zb(1,"div",80),p.Zb(2,"button",81),p.gc("click",function(){return p.Ec(a),p.kc().previousPage()}),p.lc(3,"translate"),p.Ub(4,"i",82),p.Yb(),p.Zb(5,"button",81),p.gc("click",function(){return p.Ec(a),p.kc().nextPage()}),p.lc(6,"translate"),p.Ub(7,"i",83),p.Yb(),p.Yb(),p.Zb(8,"div",84),p.Zb(9,"mat-form-field",9),p.Zb(10,"mat-label"),p.Lc(11),p.lc(12,"translate"),p.Yb(),p.Zb(13,"mat-select",10),p.gc("ngModelChange",function(e){return p.Ec(a),p.kc().perPage=e})("selectionChange",function(e){return p.Ec(a),p.kc().onRowsChanges(e)}),p.Zb(14,"mat-option",14),p.Lc(15," 5 "),p.Yb(),p.Zb(16,"mat-option",14),p.Lc(17," 10 "),p.Yb(),p.Yb(),p.Yb(),p.Yb(),p.Yb()}if(2&e){var n=p.kc();p.Fb(2),p.qc("matTooltip",p.mc(3,12,"shared.previous"))("matTooltipPosition",n.toolTipPosition)("disabled",1===n.page&&(null==n.dataSource?null:n.dataSource.data.length)),p.Fb(3),p.qc("matTooltip",p.mc(6,14,"shared.next"))("matTooltipPosition",n.toolTipPosition)("disabled",!(null!=n.dataSource&&n.dataSource.data.length)||(null==n.dataSource?null:n.dataSource.data.length)<n.perPage),p.Fb(4),p.qc("appearance",n.matInputAppearance)("color",n.matInputsColor),p.Fb(2),p.Mc(p.mc(12,16,"shared.perPage")),p.Fb(2),p.qc("ngModel",n.perPage),p.Fb(1),p.qc("value",5),p.Fb(2),p.qc("value",10)}}var pe,ge,me,he=[{path:"",component:(pe=function(){function a(t,n,c,r){e(this,a),this.translate=t,this.orderService=n,this.agentService=c,this.router=r,this.currentLang="ar"===localStorage.getItem("sender-manage-lang")?"ar":"en",this.matInputAppearance=u.a.inputsStyleAppearance,this.matInputsColor=u.a.inputsStyleColor,this.toolTipPosition=u.a.tooltipPosition,this.OrderStatusTypes=d.i,this.isLoading=!1,this.displayedColumns=["orderNumber","date","agentName","time","status","captainName","deliveryAmount"],this.page=1,this.perPage=5,this.searchType="",this.agentsIsLoading=!1,this.filteredAgentsOptions=[],this.agentId=null,this.orderId=null,this.fromDateSearchValue=null,this.toDateSearchValue=null}var n,c,r;return n=a,(c=[{key:"ngOnInit",value:function(){this.getAllOrders(),this.getCurrentLang()}},{key:"getCurrentLang",value:function(){var e=this;this.translate.onLangChange.pipe(Object(b.b)(this)).subscribe(function(t){e.currentLang="ar"===t.lang?"ar":"en"})}},{key:"filteringAgents",value:function(e){var t=this;this.agentsIsLoading=!0;var a=e.value;this.agentService.getAllAgentsByFullName({page:1,numberOfObjectsPerPage:20},a).pipe(Object(b.b)(this)).subscribe(function(e){var n=a.toLowerCase();t.filteredAgentsOptions=e.value.agents.filter(function(e){return-1!==e.fullname.toLowerCase().indexOf(n)}),t.agentsIsLoading=!1})}},{key:"selectedAgent",value:function(e){this.agentId=e.option.value.id,this.page=1,this.getAllOrdersByAgentId()}},{key:"getAllOrdersByAgentId",value:function(){var e=this;this.isLoading=!0,this.orderService.getAllOrdersByAgentId({page:this.page,numberOfObjects:this.perPage,agentId:this.agentId}).pipe(Object(b.b)(this)).subscribe(function(t){e.dataSource=new l.k(t),e.isLoading=!1},function(t){e.dataSource=new l.k([]),console.log(t),e.isLoading=!1})}},{key:"displayFn",value:function(e){return e&&e.fullname}},{key:"getAllOrdersById",value:function(){var e=this;this.isLoading=!0,this.orderService.getAllOrdersById({page:this.page,numberOfObjects:this.perPage,orderId:this.orderId}).pipe(Object(b.b)(this)).subscribe(function(t){e.dataSource=new l.k(t),e.isLoading=!1},function(t){e.dataSource=new l.k([]),console.log(t),e.isLoading=!1})}},{key:"getAllOrders",value:function(){var e=this;this.isLoading=!0,this.orderService.getAllOrders({page:this.page,numberOfObjects:this.perPage}).pipe(Object(b.b)(this)).subscribe(function(t){e.dataSource=new l.k(t),e.isLoading=!1},function(t){e.dataSource=new l.k([]),console.log(t),e.isLoading=!1})}},{key:"getAllNewOrders",value:function(){var e=this;this.isLoading=!0,this.orderService.getAllCurrentStatusOrders({page:this.page,numberOfObjects:this.perPage,orderCurrentStatusId:d.i.New}).pipe(Object(b.b)(this)).subscribe(function(t){e.dataSource=new l.k(t),e.isLoading=!1},function(t){e.dataSource=new l.k([]),console.log(t),e.isLoading=!1})}},{key:"getAllAssignedToCaptainOrders",value:function(){var e=this;this.isLoading=!0,this.orderService.getAllCurrentStatusOrders({page:this.page,numberOfObjects:this.perPage,orderCurrentStatusId:d.i.assginedToCaptain}).pipe(Object(b.b)(this)).subscribe(function(t){e.dataSource=new l.k(t),e.isLoading=!1},function(t){e.dataSource=new l.k([]),console.log(t),e.isLoading=!1})}},{key:"getAllPickedUpOrders",value:function(){var e=this;this.isLoading=!0,this.orderService.getAllCurrentStatusOrders({page:this.page,numberOfObjects:this.perPage,orderCurrentStatusId:d.i.pickedUp}).pipe(Object(b.b)(this)).subscribe(function(t){e.dataSource=new l.k(t),e.isLoading=!1},function(t){e.dataSource=new l.k([]),console.log(t),e.isLoading=!1})}},{key:"getAllProgressOrders",value:function(){var e=this;this.isLoading=!0,this.orderService.getAllCurrentStatusOrders({page:this.page,numberOfObjects:this.perPage,orderCurrentStatusId:d.i.Progress}).pipe(Object(b.b)(this)).subscribe(function(t){e.dataSource=new l.k(t),e.isLoading=!1},function(t){e.dataSource=new l.k([]),console.log(t),e.isLoading=!1})}},{key:"getAllDeliverdOrders",value:function(){var e=this;this.isLoading=!0,this.orderService.getAllCurrentStatusOrders({page:this.page,numberOfObjects:this.perPage,orderCurrentStatusId:d.i.Delivered}).pipe(Object(b.b)(this)).subscribe(function(t){e.dataSource=new l.k(t),e.isLoading=!1},function(t){e.dataSource=new l.k([]),console.log(t),e.isLoading=!1})}},{key:"getAllCanceledOrders",value:function(){var e=this;this.isLoading=!0,this.orderService.getAllCurrentStatusOrders({page:this.page,numberOfObjects:this.perPage,orderCurrentStatusId:d.i.Canceled}).pipe(Object(b.b)(this)).subscribe(function(t){e.dataSource=new l.k(t),e.isLoading=!1},function(t){e.dataSource=new l.k([]),console.log(t),e.isLoading=!1})}},{key:"getAllNotAssignedToCaptainOrders",value:function(){var e=this;this.isLoading=!0,this.orderService.getAllCurrentStatusOrders({page:this.page,numberOfObjects:this.perPage,orderCurrentStatusId:d.i.NotAssignedToCaptain}).pipe(Object(b.b)(this)).subscribe(function(t){e.dataSource=new l.k(t),e.isLoading=!1},function(t){e.dataSource=new l.k([]),console.log(t),e.isLoading=!1})}},{key:"selectedOption",value:function(){var e="".concat(this.searchType);switch(console.log(e),this.clearSearchValue(),e){case"":case"undefined":case"null":this.getAllOrders();break;case d.i.New.toString():this.getAllNewOrders();break;case d.i.assginedToCaptain.toString():this.getAllAssignedToCaptainOrders();break;case d.i.pickedUp.toString():this.getAllPickedUpOrders();break;case d.i.Progress.toString():this.getAllProgressOrders();break;case d.i.Delivered.toString():this.getAllDeliverdOrders();break;case d.i.Canceled.toString():this.getAllCanceledOrders();break;case d.i.NotAssignedToCaptain.toString():this.getAllNotAssignedToCaptainOrders()}}},{key:"stopWriting",value:function(e){e.preventDefault()}},{key:"getAllOrdersFromToDate",value:function(){var e=this;this.isLoading=!0;var t="".concat(this.fromDateSearchValue.getFullYear(),"-").concat(this.fromDateSearchValue.getMonth()+1,"-").concat(this.fromDateSearchValue.getDate()),a="".concat(this.toDateSearchValue.getFullYear(),"-").concat(this.toDateSearchValue.getMonth()+1,"-").concat(this.toDateSearchValue.getDate());this.orderService.getAllOrdersByFromToDate({page:this.page,numberOfObjects:this.perPage,startDate:t,endDate:a}).pipe(Object(b.b)(this)).subscribe(function(t){e.dataSource=new l.k(t),e.isLoading=!1},function(t){e.dataSource=new l.k([]),console.log(t),e.isLoading=!1})}},{key:"clearSearchValue",value:function(){this.orderId=null,this.agentId=null,this.page=1}},{key:"onRowsChanges",value:function(e){this.perPage=e.value,this.page=1,this.callTheApi()}},{key:"nextPage",value:function(){this.page+=1,console.log("page "),console.log(this.page),this.callTheApi()}},{key:"previousPage",value:function(){this.page-=1,console.log("page "),console.log(this.page),this.callTheApi()}},{key:"callTheApi",value:function(){var e="".concat(this.searchType);switch(console.log("searchType"),console.log(e),e){case"":case"undefined":case"null":this.getAllOrders();break;case"orderId":this.getAllOrdersById();break;case"agentName":this.getAllOrdersByAgentId();break;case"date":this.getAllOrdersFromToDate();break;case d.i.New.toString():this.getAllNewOrders();break;case d.i.assginedToCaptain.toString():this.getAllAssignedToCaptainOrders();break;case d.i.pickedUp.toString():this.getAllPickedUpOrders();break;case d.i.Progress.toString():this.getAllProgressOrders();break;case d.i.Delivered.toString():this.getAllDeliverdOrders();break;case d.i.Canceled.toString():this.getAllCanceledOrders();break;case d.i.NotAssignedToCaptain.toString():this.getAllNotAssignedToCaptainOrders()}}},{key:"routeUser",value:function(e){console.log(e),this.router.navigate(["dashboard/order/",e])}}])&&t(n.prototype,c),r&&t(n,r),a}(),pe.\u0275fac=function(e){return new(e||pe)(p.Tb(g.d),p.Tb(m.a),p.Tb(h.a),p.Tb(s.c))},pe.\u0275cmp=p.Nb({type:pe,selectors:[["app-orders"]],decls:57,vars:56,consts:[[1,"card"],[1,"card-header","bg-white","py-0"],[1,"mat-card-header"],[1,"fas","fa-box-open","bg-danger"],[1,"text-capitalize","mx-2"],[1,"card-body","mat-card-body"],[1,"table-actions"],[1,"buttons","row"],[1,"col-12","col-sm-12","col-md-5","col-lg-4"],[1,"w-100","text-capitalize","mt-2",3,"appearance","color"],[3,"ngModel","ngModelChange","selectionChange"],["value","orderId"],["value","agentName"],["value","date"],[3,"value"],["class","order-id",4,"ngIf"],["class","agent-name",4,"ngIf"],["class","mt-3",4,"ngIf"],[1,"table-responsive","mat-elevation-z2"],["class","table-container",4,"ngIf"],["class","no-data",4,"ngIf"],["class","paginator mat-elevation-z2 mb-4 py-2",4,"ngIf"],[1,"order-id"],[1,"row"],[1,"col-12","col-sm-12","col-md-6"],[1,"w-100","text-capitalize",3,"appearance","color"],["matInput","","type","number",3,"ngModel","ngModelChange","keyup.enter"],["mat-button","","matSuffix","","mat-icon-button","",3,"click"],[1,"fa","fa-search","text-default"],[1,"agent-name"],[1,"col-12","col-sm-12","col-md-8","col-lg-6"],["type","text","matInput","",3,"matAutocomplete","keyup.enter"],["agentInput",""],[3,"displayWith","optionSelected"],["auto","matAutocomplete"],[4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],["diameter","30"],[1,"text-default","mx-2"],[1,"col-12","col-sm-6","col-md-4"],[1,"w-100","text-capitalize",3,"color","appearance"],["matInput","","type","text","name","fromDateSearchValue",3,"matDatepicker","ngModel","keypress","click","focus","keyup.enter","ngModelChange"],["matSuffix","",3,"for"],["fromPicker",""],["matInput","","type","text","name","toDateSearchValue",3,"matDatepicker","ngModel","keypress","click","focus","keyup.enter","ngModelChange"],["toPicker",""],[1,"date-button","col-12","col-sm-12","col-md-4"],["class","btn btn-success text-capitalize my-3",3,"click",4,"ngIf"],[1,"btn","btn-success","text-capitalize","my-3",3,"click"],[1,"mt-3"],["animation","progress",3,"count","theme"],[1,"table-container"],[3,"dataSource"],["matColumnDef","orderNumber"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","agentName"],["matColumnDef","customerName"],["matColumnDef","date"],["matColumnDef","time"],["matColumnDef","captainName"],["matColumnDef","status"],["matColumnDef","deliveryAmount"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[3,"click",4,"matRowDef","matRowDefColumns"],[3,"ngSwitch"],["class","table-info text-muted radius-35px px-4 py-2",4,"ngSwitchCase"],["class","table-success text-muted radius-35px px-4 py-2",4,"ngSwitchCase"],["class","table-warning text-muted radius-35px px-4 py-2",4,"ngSwitchCase"],["class","table-danger text-muted radius-35px px-4 py-2",4,"ngSwitchCase"],["class","table-secondary text-muted radius-35px px-4 py-2",4,"ngSwitchDefault"],[1,"table-info","text-muted","radius-35px","px-4","py-2"],[1,"table-success","text-muted","radius-35px","px-4","py-2"],[1,"table-warning","text-muted","radius-35px","px-4","py-2"],[1,"table-danger","text-muted","radius-35px","px-4","py-2"],[1,"table-secondary","text-muted","radius-35px","px-4","py-2"],[3,"click"],[1,"no-data"],[1,"lead","text-danger","text-capitalize","h2","text-center","mt-3"],[1,"paginator","mat-elevation-z2","mb-4","py-2"],[1,"next_back","px-2"],["mat-icon-button","",3,"matTooltip","matTooltipPosition","disabled","click"],[1,"fas","fa-chevron-left"],[1,"fas","fa-chevron-right"],[1,"per-page","px-2"]],template:function(e,t){1&e&&(p.Zb(0,"div",0),p.Zb(1,"div",1),p.Zb(2,"div",2),p.Ub(3,"i",3),p.Zb(4,"span",4),p.Lc(5),p.lc(6,"translate"),p.Yb(),p.Yb(),p.Yb(),p.Zb(7,"div",5),p.Zb(8,"div",6),p.Zb(9,"div",7),p.Zb(10,"div",8),p.Zb(11,"mat-form-field",9),p.Zb(12,"mat-label"),p.Lc(13),p.lc(14,"translate"),p.Yb(),p.Zb(15,"mat-select",10),p.gc("ngModelChange",function(e){return t.searchType=e})("selectionChange",function(){return t.selectedOption()}),p.Zb(16,"mat-option"),p.Lc(17),p.lc(18,"translate"),p.Yb(),p.Zb(19,"mat-option",11),p.Lc(20),p.lc(21,"translate"),p.Yb(),p.Zb(22,"mat-option",12),p.Lc(23),p.lc(24,"translate"),p.Yb(),p.Zb(25,"mat-option",13),p.Lc(26),p.lc(27,"translate"),p.Yb(),p.Zb(28,"mat-option",14),p.Lc(29),p.lc(30,"translate"),p.Yb(),p.Zb(31,"mat-option",14),p.Lc(32),p.lc(33,"translate"),p.Yb(),p.Zb(34,"mat-option",14),p.Lc(35),p.lc(36,"translate"),p.Yb(),p.Zb(37,"mat-option",14),p.Lc(38),p.lc(39,"translate"),p.Yb(),p.Zb(40,"mat-option",14),p.Lc(41),p.lc(42,"translate"),p.Yb(),p.Zb(43,"mat-option",14),p.Lc(44),p.lc(45,"translate"),p.Yb(),p.Zb(46,"mat-option",14),p.Lc(47),p.lc(48,"translate"),p.Yb(),p.Yb(),p.Yb(),p.Yb(),p.Yb(),p.Kc(49,L,10,6,"div",15),p.Kc(50,N,15,9,"div",16),p.Kc(51,x,22,17,"div",16),p.Yb(),p.Kc(52,P,2,3,"div",17),p.Zb(53,"div",18),p.Kc(54,de,28,4,"div",19),p.Kc(55,ue,4,3,"div",20),p.Yb(),p.Kc(56,be,18,18,"div",21),p.Yb(),p.Yb()),2&e&&(p.Fb(5),p.Nc(" ",p.mc(6,30,"orders.allOrders")," "),p.Fb(6),p.qc("appearance",t.matInputAppearance)("color",t.matInputsColor),p.Fb(2),p.Mc(p.mc(14,32,"shared.searchType")),p.Fb(2),p.qc("ngModel",t.searchType),p.Fb(2),p.Nc(" ",p.mc(18,34,"orders.allOrders")," "),p.Fb(3),p.Nc(" ",p.mc(21,36,"orders.specificOrderNumber")," "),p.Fb(3),p.Nc(" ",p.mc(24,38,"orders.searchAgentName")," "),p.Fb(3),p.Nc(" ",p.mc(27,40,"orders.fromToDate")," "),p.Fb(2),p.qc("value",t.OrderStatusTypes.New),p.Fb(1),p.Nc(" ",p.mc(30,42,"orders.OrdersStatusTypes.new")," "),p.Fb(2),p.qc("value",t.OrderStatusTypes.assginedToCaptain),p.Fb(1),p.Nc(" ",p.mc(33,44,"orders.OrdersStatusTypes.assginedToCaptain")," "),p.Fb(2),p.qc("value",t.OrderStatusTypes.pickedUp),p.Fb(1),p.Nc(" ",p.mc(36,46,"orders.OrdersStatusTypes.pickedUp")," "),p.Fb(2),p.qc("value",t.OrderStatusTypes.Progress),p.Fb(1),p.Nc(" ",p.mc(39,48,"orders.OrdersStatusTypes.progress")," "),p.Fb(2),p.qc("value",t.OrderStatusTypes.Delivered),p.Fb(1),p.Nc(" ",p.mc(42,50,"orders.OrdersStatusTypes.delivered")," "),p.Fb(2),p.qc("value",t.OrderStatusTypes.Canceled),p.Fb(1),p.Nc(" ",p.mc(45,52,"orders.OrdersStatusTypes.canceled")," "),p.Fb(2),p.qc("value",t.OrderStatusTypes.NotAssignedToCaptain),p.Fb(1),p.Nc(" ",p.mc(48,54,"orders.OrdersStatusTypes.notAssignedToCaptain")," "),p.Fb(2),p.qc("ngIf","orderId"===t.searchType),p.Fb(1),p.qc("ngIf","agentName"===t.searchType),p.Fb(1),p.qc("ngIf","date"===t.searchType),p.Fb(1),p.qc("ngIf",t.isLoading),p.Fb(2),p.qc("ngIf",!t.isLoading&&(null==t.dataSource?null:t.dataSource.data.length)),p.Fb(1),p.qc("ngIf",!(null!=t.dataSource&&t.dataSource.data.length||t.isLoading)),p.Fb(1),p.qc("ngIf",!t.isLoading))},directives:[f.b,f.f,v.a,S.l,S.o,k.j,r.l,y.b,S.q,S.d,O.a,f.g,C.c,C.a,r.k,F.b,A.b,A.d,A.a,Y.a,l.j,l.c,l.e,l.b,l.g,l.i,l.d,l.a,r.n,r.o,r.p,l.f,l.h,Z.a],pipes:[g.c,r.e],styles:["@media (max-width:1600px){.table-responsive[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]{width:1500px}}.paginator[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:#fff}.paginator[_ngcontent-%COMP%]   .next_back[_ngcontent-%COMP%]{width:100px;direction:ltr}.paginator[_ngcontent-%COMP%]   .per-page[_ngcontent-%COMP%]{width:150px}@media (max-width:767px){.date-button[_ngcontent-%COMP%]{text-align:center}}"]}),pe=Object(o.a)([Object(b.a)({checkProperties:!0})],pe))}],fe=((me=function t(){e(this,t)}).\u0275mod=p.Rb({type:me}),me.\u0275inj=p.Qb({factory:function(e){return new(e||me)},imports:[[s.f.forChild(he)],s.f]}),me),ve=((ge=function t(){e(this,t)}).\u0275mod=p.Rb({type:ge}),ge.\u0275inj=p.Qb({factory:function(e){return new(e||ge)},providers:[],imports:[[r.c,fe,i.a]]}),ge)}}])}();