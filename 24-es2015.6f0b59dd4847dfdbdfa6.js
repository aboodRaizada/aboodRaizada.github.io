(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{xS1G:function(t,e,a){"use strict";a.r(e),a.d(e,"PromotionalsModule",function(){return z});var n=a("SVse"),o=a("FpXt"),i=a("iInd"),c=a("mrSG"),s=a("OaSA"),r=a("0sX0"),l=a("AytR"),b=a("3bzS"),d=a("8Y7J"),m=a("jy+X"),g=a("SOeY"),u=a("Gpft"),p=a("TSSN"),h=a("WzhS"),f=a("5QHs");const S=function(){return{height:"35px",backgroundColor:"#ddd"}};function w(t,e){if(1&t&&(d.Zb(0,"div",14),d.Ub(1,"ngx-skeleton-loader",15),d.Yb()),2&t){const t=d.kc();d.Fb(1),d.qc("count",t.perPage)("theme",d.uc(2,S))}}function v(t,e){1&t&&d.Ub(0,"mat-header-cell")}function P(t,e){if(1&t&&(d.Zb(0,"mat-cell"),d.Ub(1,"img",24),d.Yb()),2&t){const t=e.$implicit,a=d.kc(2);d.Fb(1),d.qc("src",a.baseURL+a.assetsPath+t.image,d.Fc)}}function L(t,e){1&t&&(d.Zb(0,"mat-header-cell"),d.Lc(1),d.lc(2,"translate"),d.Yb()),2&t&&(d.Fb(1),d.Nc(" ",d.mc(2,1,"promotionals.name")," "))}function y(t,e){if(1&t&&(d.Zb(0,"mat-cell"),d.Lc(1),d.Yb()),2&t){const t=e.$implicit;d.Fb(1),d.Nc(" ",t.name," ")}}function C(t,e){1&t&&d.Ub(0,"mat-header-row")}function Y(t,e){if(1&t){const t=d.ac();d.Zb(0,"mat-row",25),d.gc("click",function(){const e=d.Ec(t).$implicit;return d.kc(2).routePromotional(e.id)}),d.Yb()}}function k(t,e){if(1&t&&(d.Zb(0,"div",16),d.Zb(1,"mat-table",17),d.Xb(2,18),d.Kc(3,v,1,0,"mat-header-cell",19),d.Kc(4,P,2,1,"mat-cell",20),d.Wb(),d.Xb(5,21),d.Kc(6,L,3,3,"mat-header-cell",19),d.Kc(7,y,2,1,"mat-cell",20),d.Wb(),d.Kc(8,C,1,0,"mat-header-row",22),d.Kc(9,Y,1,0,"mat-row",23),d.Yb(),d.Yb()),2&t){const t=d.kc();d.Fb(1),d.qc("dataSource",t.dataSource),d.Fb(7),d.qc("matHeaderRowDef",t.displayedColumns)("matHeaderRowDefSticky",!0),d.Fb(1),d.qc("matRowDefColumns",t.displayedColumns)}}function Z(t,e){1&t&&(d.Zb(0,"div",26),d.Zb(1,"h3",27),d.Lc(2),d.lc(3,"translate"),d.Yb(),d.Yb()),2&t&&(d.Fb(2),d.Nc(" ",d.mc(3,1,"shared.noData")," "))}const F=function(){return[5,10]};function x(t,e){if(1&t){const t=d.ac();d.Zb(0,"mat-paginator",28),d.gc("page",function(e){return d.Ec(t),d.kc().onPageChanges(e)}),d.Yb()}if(2&t){const t=d.kc();d.qc("length",t.total)("pageSize",t.perPage)("pageSizeOptions",d.uc(3,F))}}const I=[{path:"",component:(()=>{let t=class{constructor(t,e,a,n,o){this.loader=t,this.systemService=e,this.authService=a,this.router=n,this.translate=o,this.currentLang="ar"===localStorage.getItem("sender-manage-lang")?"ar":"en",this.matInputAppearance=l.a.inputsStyleAppearance,this.matInputsColor=l.a.inputsStyleColor,this.isLoading=!1,this.displayedColumns=["avatar","Name"],this.total=0,this.page=1,this.perPage=5,this.pagination=new r.j,this.baseURL="",this.assetsPath="/Assets/Images/Ads/"}ngOnInit(){this.baseURL=l.a.baseUrl,this.loadPromotions(this.page,this.perPage),this.getCurrentLang()}getCurrentLang(){this.translate.onLangChange.pipe(Object(b.b)(this)).subscribe(t=>{this.currentLang="ar"===t.lang?"ar":"en"})}onPageChanges(t){this.page=t.pageIndex+1,this.perPage=t.pageSize,this.loadPromotions(this.page,this.perPage)}loadPromotions(t,e){this.isLoading=!0,this.systemService.getPromotions({page:t,numberOfObjectsPerPage:e}).pipe(Object(b.b)(this)).subscribe(t=>{this.dataSource=new s.k(t.promotions),this.total=t.total,this.isLoading=!1},t=>{this.dataSource=new s.k([]),console.log(t),this.isLoading=!1})}filter(t){console.log(t.target.value),this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},1e3),t.target.value=null}routePromotional(t){console.log(t),this.router.navigate(["dashboard/promotional",t])}newPromotional(){this.router.navigate(["dashboard/promotional",0])}};return t.\u0275fac=function(e){return new(e||t)(d.Tb(m.a),d.Tb(g.a),d.Tb(u.a),d.Tb(i.c),d.Tb(p.d))},t.\u0275cmp=d.Nb({type:t,selectors:[["app-promotionals"]],decls:18,vars:10,consts:[[1,"card"],[1,"card-header","bg-white","py-0"],[1,"mat-card-header"],[1,"fas","fa-ad","bg-danger"],[1,"text-capitalize","mx-2"],[1,"card-body","mat-card-body"],[1,"table-actions","d-flex","justify-content-between","align-items-center","flex-wrap"],[1,"buttons"],[1,"btn","btn-info","text-capitalize",3,"click"],["class","mt-3",4,"ngIf"],[1,"table-responsive","mat-elevation-z2","my-2"],["class","table-container",4,"ngIf"],["class","no-data",4,"ngIf"],[3,"length","pageSize","pageSizeOptions","page",4,"ngIf"],[1,"mt-3"],["animation","progress",3,"count","theme"],[1,"table-container"],[3,"dataSource"],["matColumnDef","avatar"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","Name"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[3,"click",4,"matRowDef","matRowDefColumns"],["alt","",3,"src"],[3,"click"],[1,"no-data"],[1,"lead","text-danger","text-capitalize","h2","text-center","mt-3"],[3,"length","pageSize","pageSizeOptions","page"]],template:function(t,e){1&t&&(d.Zb(0,"div",0),d.Zb(1,"div",1),d.Zb(2,"div",2),d.Ub(3,"i",3),d.Zb(4,"span",4),d.Lc(5),d.lc(6,"translate"),d.Yb(),d.Yb(),d.Yb(),d.Zb(7,"div",5),d.Zb(8,"div",6),d.Zb(9,"div",7),d.Zb(10,"button",8),d.gc("click",function(){return e.newPromotional()}),d.Lc(11),d.lc(12,"translate"),d.Yb(),d.Yb(),d.Yb(),d.Kc(13,w,2,3,"div",9),d.Zb(14,"div",10),d.Kc(15,k,10,4,"div",11),d.Kc(16,Z,4,3,"div",12),d.Yb(),d.Kc(17,x,1,4,"mat-paginator",13),d.Yb(),d.Yb()),2&t&&(d.Fb(5),d.Nc(" ",d.mc(6,6,"promotionals.promotionals")," "),d.Fb(6),d.Nc(" ",d.mc(12,8,"promotionals.addNewPromo")," "),d.Fb(2),d.qc("ngIf",e.isLoading),d.Fb(2),d.qc("ngIf",!e.isLoading&&(null==e.dataSource?null:e.dataSource.data.length)),d.Fb(1),d.qc("ngIf",!(null!=e.dataSource&&e.dataSource.data.length||e.isLoading)),d.Fb(1),d.qc("ngIf",!e.isLoading&&(null==e.dataSource?null:e.dataSource.data.length)))},directives:[n.l,h.a,s.j,s.c,s.e,s.b,s.g,s.i,s.d,s.a,s.f,s.h,f.a],pipes:[p.c],styles:["@media (max-width:600px){.table-responsive[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]{width:500px}}"]}),t=Object(c.a)([Object(b.a)({checkProperties:!0})],t),t})()}];let O=(()=>{class t{}return t.\u0275mod=d.Rb({type:t}),t.\u0275inj=d.Qb({factory:function(e){return new(e||t)},imports:[[i.f.forChild(I)],i.f]}),t})(),z=(()=>{class t{}return t.\u0275mod=d.Rb({type:t}),t.\u0275inj=d.Qb({factory:function(e){return new(e||t)},providers:[],imports:[[n.c,O,o.a]]}),t})()}}]);