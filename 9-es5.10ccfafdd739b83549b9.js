!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{TSKf:function(a,n,c){"use strict";c.r(n),c.d(n,"NotAssignedOrderModule",function(){return H});var r=c("SVse"),i=c("FpXt"),o=c("iInd"),l=c("mrSG"),s=c("OaSA"),d=c("0sX0"),b=c("AytR"),u=c("3bzS"),m=c("8Y7J"),g=c("TSSN"),p=c("WW8z"),f=c("WzhS"),h=c("Dxy4"),v=c("ZFy/"),C=c("Q2Ze"),y=c("ZTz/"),S=c("s7LF"),Z=c("UhP/"),w=function(){return{height:"35px",backgroundColor:"#ddd"}};function Y(e,t){if(1&e&&(m.Zb(0,"div",11),m.Ub(1,"ngx-skeleton-loader",12),m.Yb()),2&e){var a=m.kc();m.Fb(1),m.qc("count",a.perPage)("theme",m.uc(2,w))}}function O(e,t){1&e&&(m.Zb(0,"mat-header-cell"),m.Lc(1),m.lc(2,"translate"),m.Yb()),2&e&&(m.Fb(1),m.Nc(" ",m.mc(2,1,"notAssignedOrders.orderNumber")," "))}function k(e,t){if(1&e&&(m.Zb(0,"mat-cell"),m.Lc(1),m.lc(2,"translate"),m.Yb()),2&e){var a=t.$implicit;m.Fb(1),m.Nc(" ",a.orderId||m.mc(2,1,"shared.noData")," ")}}function F(e,t){1&e&&(m.Zb(0,"mat-header-cell"),m.Lc(1),m.lc(2,"translate"),m.Yb()),2&e&&(m.Fb(1),m.Nc(" ",m.mc(2,1,"notAssignedOrders.agentName")," "))}function x(e,t){if(1&e&&(m.Zb(0,"mat-cell"),m.Lc(1),m.lc(2,"translate"),m.Yb()),2&e){var a=t.$implicit;m.Fb(1),m.Nc(" ",a.agentName||m.mc(2,1,"shared.noData")," ")}}function L(e,t){1&e&&(m.Zb(0,"mat-header-cell"),m.Lc(1),m.lc(2,"translate"),m.Yb()),2&e&&(m.Fb(1),m.Nc(" ",m.mc(2,1,"notAssignedOrders.customerName")," "))}function P(e,t){if(1&e&&(m.Zb(0,"mat-cell"),m.Lc(1),m.lc(2,"translate"),m.Yb()),2&e){var a=t.$implicit;m.Fb(1),m.Nc(" ",a.customerName||m.mc(2,1,"shared.noData")," ")}}function N(e,t){1&e&&(m.Zb(0,"mat-header-cell"),m.Lc(1),m.lc(2,"translate"),m.Yb()),2&e&&(m.Fb(1),m.Nc(" ",m.mc(2,1,"notAssignedOrders.date")," "))}function D(e,t){if(1&e&&(m.Zb(0,"mat-cell"),m.Lc(1),m.lc(2,"date"),m.lc(3,"translate"),m.Yb()),2&e){var a=t.$implicit;m.Fb(1),m.Nc(" ",m.nc(2,1,a.orderCreationDate,"dd/MM/yyyy")||m.mc(3,4,"shared.noData")," ")}}function A(e,t){1&e&&(m.Zb(0,"mat-header-cell"),m.Lc(1),m.lc(2,"translate"),m.Yb()),2&e&&(m.Fb(1),m.Nc(" ",m.mc(2,1,"notAssignedOrders.time")," "))}function T(e,t){if(1&e&&(m.Zb(0,"mat-cell"),m.Lc(1),m.lc(2,"date"),m.lc(3,"translate"),m.Yb()),2&e){var a=t.$implicit;m.Fb(1),m.Nc(" ",m.nc(2,1,a.orderCreationDate,"shortTime")||m.mc(3,4,"shared.noData")," ")}}function K(e,t){1&e&&(m.Zb(0,"mat-header-cell"),m.Lc(1),m.lc(2,"translate"),m.Yb()),2&e&&(m.Fb(1),m.Nc(" ",m.mc(2,1,"notAssignedOrders.status")," "))}function I(e,t){1&e&&(m.Zb(0,"span",27),m.Lc(1),m.lc(2,"translate"),m.Yb()),2&e&&(m.Fb(1),m.Nc(" ",m.mc(2,1,"notAssignedOrders.OrdersStatusTypes.notAssignedToCaptain")," "))}function M(e,t){if(1&e&&(m.Zb(0,"mat-cell"),m.Zb(1,"span",25),m.Kc(2,I,3,3,"span",26),m.Yb(),m.Yb()),2&e){var a=t.$implicit;m.Fb(1),m.qc("ngSwitch",a.orderCurrentStatus),m.Fb(1),m.qc("ngSwitchCase",9)}}function q(e,t){1&e&&m.Ub(0,"mat-header-row")}function R(e,t){if(1&e){var a=m.ac();m.Zb(0,"mat-row",28),m.gc("click",function(){var e=m.Ec(a).$implicit;return m.kc(2).routeUser(e.orderId)}),m.Yb()}}function _(e,t){if(1&e&&(m.Zb(0,"div",13),m.Zb(1,"mat-table",14),m.Xb(2,15),m.Kc(3,O,3,3,"mat-header-cell",16),m.Kc(4,k,3,3,"mat-cell",17),m.Wb(),m.Xb(5,18),m.Kc(6,F,3,3,"mat-header-cell",16),m.Kc(7,x,3,3,"mat-cell",17),m.Wb(),m.Xb(8,19),m.Kc(9,L,3,3,"mat-header-cell",16),m.Kc(10,P,3,3,"mat-cell",17),m.Wb(),m.Xb(11,20),m.Kc(12,N,3,3,"mat-header-cell",16),m.Kc(13,D,4,6,"mat-cell",17),m.Wb(),m.Xb(14,21),m.Kc(15,A,3,3,"mat-header-cell",16),m.Kc(16,T,4,6,"mat-cell",17),m.Wb(),m.Xb(17,22),m.Kc(18,K,3,3,"mat-header-cell",16),m.Kc(19,M,3,2,"mat-cell",17),m.Wb(),m.Kc(20,q,1,0,"mat-header-row",23),m.Kc(21,R,1,0,"mat-row",24),m.Yb(),m.Yb()),2&e){var a=m.kc();m.Fb(1),m.qc("dataSource",a.dataSource),m.Fb(19),m.qc("matHeaderRowDef",a.displayedColumns)("matHeaderRowDefSticky",!0),m.Fb(1),m.qc("matRowDefColumns",a.displayedColumns)}}function j(e,t){1&e&&(m.Zb(0,"div",29),m.Zb(1,"h3",30),m.Lc(2),m.lc(3,"translate"),m.Yb(),m.Yb()),2&e&&(m.Fb(2),m.Nc(" ",m.mc(3,1,"shared.noData")," "))}function z(e,t){if(1&e){var a=m.ac();m.Zb(0,"div",31),m.Zb(1,"div",32),m.Zb(2,"button",33),m.gc("click",function(){return m.Ec(a),m.kc().previousPage()}),m.lc(3,"translate"),m.Ub(4,"i",34),m.Yb(),m.Zb(5,"button",33),m.gc("click",function(){return m.Ec(a),m.kc().nextPage()}),m.lc(6,"translate"),m.Ub(7,"i",35),m.Yb(),m.Yb(),m.Zb(8,"div",36),m.Zb(9,"mat-form-field",37),m.Zb(10,"mat-label"),m.Lc(11),m.lc(12,"translate"),m.Yb(),m.Zb(13,"mat-select",38),m.gc("ngModelChange",function(e){return m.Ec(a),m.kc().perPage=e})("selectionChange",function(e){return m.Ec(a),m.kc().onRowsChanges(e)}),m.Zb(14,"mat-option",39),m.Lc(15," 5 "),m.Yb(),m.Zb(16,"mat-option",39),m.Lc(17," 10 "),m.Yb(),m.Yb(),m.Yb(),m.Yb(),m.Yb()}if(2&e){var n=m.kc();m.Fb(2),m.qc("matTooltip",m.mc(3,12,"shared.previous"))("matTooltipPosition",n.toolTipPosition)("disabled",1===n.page&&(null==n.dataSource?null:n.dataSource.data.length)),m.Fb(3),m.qc("matTooltip",m.mc(6,14,"shared.next"))("matTooltipPosition",n.toolTipPosition)("disabled",!(null!=n.dataSource&&n.dataSource.data.length)||(null==n.dataSource?null:n.dataSource.data.length)<n.perPage),m.Fb(4),m.qc("appearance",n.matInputAppearance)("color",n.matInputsColor),m.Fb(2),m.Mc(m.mc(12,16,"shared.perPage")),m.Fb(2),m.qc("ngModel",n.perPage),m.Fb(1),m.qc("value",5),m.Fb(2),m.qc("value",10)}}var W,U,X,$=[{path:"",component:(W=function(){function a(t,n,c){e(this,a),this.translate=t,this.orderService=n,this.router=c,this.currentLang="ar"===localStorage.getItem("sender-manage-lang")?"ar":"en",this.matInputAppearance=b.a.inputsStyleAppearance,this.matInputsColor=b.a.inputsStyleColor,this.toolTipPosition=b.a.tooltipPosition,this.OrderStatusTypes=d.i,this.isLoading=!1,this.displayedColumns=["orderNumber","agentName","date","time","status"],this.page=1,this.perPage=5}var n,c,r;return n=a,(c=[{key:"ngOnInit",value:function(){this.getAllOrders(),this.getCurrentLang()}},{key:"getCurrentLang",value:function(){var e=this;this.translate.onLangChange.pipe(Object(u.b)(this)).subscribe(function(t){e.currentLang="ar"===t.lang?"ar":"en"})}},{key:"getAllOrders",value:function(){var e=this;this.isLoading=!0,this.orderService.getAllCurrentStatusOrders({page:this.page,numberOfObjects:this.perPage,orderCurrentStatusId:d.i.NotAssignedToCaptain}).pipe(Object(u.b)(this)).subscribe(function(t){e.dataSource=new s.k(t),e.isLoading=!1},function(t){e.dataSource=new s.k([]),console.log(t),e.isLoading=!1})}},{key:"onRowsChanges",value:function(e){this.perPage=e.value,this.page=1,this.getAllOrders()}},{key:"nextPage",value:function(){this.page+=1,this.getAllOrders()}},{key:"previousPage",value:function(){this.page-=1,this.getAllOrders()}},{key:"routeUser",value:function(e){console.log(e),this.router.navigate(["dashboard/order/",e])}}])&&t(n.prototype,c),r&&t(n,r),a}(),W.\u0275fac=function(e){return new(e||W)(m.Tb(g.d),m.Tb(p.a),m.Tb(o.c))},W.\u0275cmp=m.Nb({type:W,selectors:[["app-not-assigned-order"]],decls:13,vars:7,consts:[[1,"card"],[1,"card-header","bg-white","py-0"],[1,"mat-card-header"],[1,"fas","fa-box-open","bg-danger"],[1,"text-capitalize","mx-2"],[1,"card-body","mat-card-body"],["class","mt-3",4,"ngIf"],[1,"table-responsive","mat-elevation-z2"],["class","table-container",4,"ngIf"],["class","no-data",4,"ngIf"],["class","paginator mat-elevation-z2 mb-4 py-2",4,"ngIf"],[1,"mt-3"],["animation","progress",3,"count","theme"],[1,"table-container"],[3,"dataSource"],["matColumnDef","orderNumber"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","agentName"],["matColumnDef","customerName"],["matColumnDef","date"],["matColumnDef","time"],["matColumnDef","status"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[3,"click",4,"matRowDef","matRowDefColumns"],[3,"ngSwitch"],["class","table-danger text-muted radius-35px px-4 py-2",4,"ngSwitchCase"],[1,"table-danger","text-muted","radius-35px","px-4","py-2"],[3,"click"],[1,"no-data"],[1,"lead","text-danger","text-capitalize","h2","text-center","mt-3"],[1,"paginator","mat-elevation-z2","mb-4","py-2"],[1,"next_back","px-2"],["mat-icon-button","",3,"matTooltip","matTooltipPosition","disabled","click"],[1,"fas","fa-chevron-left"],[1,"fas","fa-chevron-right"],[1,"per-page","px-2"],[1,"w-100","text-capitalize","mt-2",3,"appearance","color"],[3,"ngModel","ngModelChange","selectionChange"],[3,"value"]],template:function(e,t){1&e&&(m.Zb(0,"div",0),m.Zb(1,"div",1),m.Zb(2,"div",2),m.Ub(3,"i",3),m.Zb(4,"span",4),m.Lc(5),m.lc(6,"translate"),m.Yb(),m.Yb(),m.Yb(),m.Zb(7,"div",5),m.Kc(8,Y,2,3,"div",6),m.Zb(9,"div",7),m.Kc(10,_,22,4,"div",8),m.Kc(11,j,4,3,"div",9),m.Yb(),m.Kc(12,z,18,18,"div",10),m.Yb(),m.Yb()),2&e&&(m.Fb(5),m.Nc(" ",m.mc(6,5,"notAssignedOrders.notAssignedOrders")," "),m.Fb(3),m.qc("ngIf",t.isLoading),m.Fb(2),m.qc("ngIf",!t.isLoading&&(null==t.dataSource?null:t.dataSource.data.length)),m.Fb(1),m.qc("ngIf",!(null!=t.dataSource&&t.dataSource.data.length||t.isLoading)),m.Fb(1),m.qc("ngIf",!t.isLoading))},directives:[r.l,f.a,s.j,s.c,s.e,s.b,s.g,s.i,s.d,s.a,r.n,r.o,s.f,s.h,h.a,v.a,C.b,C.f,y.a,S.l,S.o,Z.j],pipes:[g.c,r.e],styles:["@media (max-width:1600px){.table-responsive[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]{width:1500px}}.paginator[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:#fff}.paginator[_ngcontent-%COMP%]   .next_back[_ngcontent-%COMP%]{width:100px;direction:ltr}.paginator[_ngcontent-%COMP%]   .per-page[_ngcontent-%COMP%]{width:150px}@media (max-width:767px){.date-button[_ngcontent-%COMP%]{text-align:center}}"]}),W=Object(l.a)([Object(u.a)({checkProperties:!0})],W))}],E=((X=function t(){e(this,t)}).\u0275mod=m.Rb({type:X}),X.\u0275inj=m.Qb({factory:function(e){return new(e||X)},imports:[[o.f.forChild($)],o.f]}),X),H=((U=function t(){e(this,t)}).\u0275mod=m.Rb({type:U}),U.\u0275inj=m.Qb({factory:function(e){return new(e||U)},providers:[],imports:[[r.c,E,i.a]]}),U)}}])}();