(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{UcM1:function(t,e,o){"use strict";o.r(e),o.d(e,"PromotionalModule",function(){return w});var i=o("SVse"),r=o("FpXt"),n=o("iInd"),a=o("mrSG"),s=o("0sX0"),c=o("v1vE"),l=o("3bzS"),d=o("8Y7J"),m=o("SOeY"),p=o("jy+X"),b=o("TSSN"),h=o("s7LF"),u=o("hvj1");const g=["dp1"];function f(t,e){if(1&t&&(d.Zb(0,"option",24),d.Lc(1),d.Yb()),2&t){const t=e.$implicit;d.qc("value",t.id),d.Fb(1),d.Nc(" ",t.type," ")}}const v=[{path:"",component:(()=>{let t=class{constructor(t,e,o,i){this.activatedRoute=t,this.systemService=e,this.loader=o,this.translate=i,this.currentLang="ar"===localStorage.getItem("sender-manage-lang")?"ar":"en",this.state="",this.promotion=new s.k,this.datePickerOptions={dateFormat:"dd/mm/yyyy",firstDayOfWeek:"sa",alignSelectorRight:!1,openSelectorTopOfInput:!1,minYear:(new Date).getFullYear(),maxYear:2200,showSelectorArrow:!0,monthSelector:!0,yearSelector:!0,satHighlight:!1,disableHeaderButtons:!0,showWeekNumbers:!1,selectorHeight:"250px",selectorWidth:"250px",closeSelectorOnDateSelect:!0,closeSelectorOnDocumentClick:!0,showMonthNumber:!0,focusInputOnDateSelect:!0,dateRangeDatesDelimiter:" - ",defaultView:c.d.Date,showFooterToday:!1,calendarAnimation:{in:c.c.FlipDiagonal,out:c.c.FlipDiagonal},rtl:!1},this.datepickerLocale="en",this.formData=new FormData,this.blob=new Blob}ngOnInit(){this.loadPromotionTypes(),this.activatedRoute.params.pipe(Object(l.b)(this)).subscribe(t=>{this.promotionId=Number.parseInt(t.id),"0"===t.id?this.state="add":(this.state="edit",this.loadPromotion(this.promotionId))}),this.getCurrentLang()}getCurrentLang(){this.translate.onLangChange.pipe(Object(l.b)(this)).subscribe(t=>{this.currentLang="ar"===t.lang?"ar":"en"})}loadPromotionTypes(){this.promotionTypes$=this.systemService.getPromotionTypes()}loadPromotion(t){this.loader.showLoader$.next(!0),this.systemService.getPromotion(t).pipe(Object(l.b)(this)).subscribe(t=>{this.loader.showLoader$.next(!1),this.promotion=t,this.promotion.expireDate=new Date(t.expireDate),this.promotion.expireDateString=this.promotion.expireDate.toLocaleDateString()})}blur(t){t.target.blur()}dateChange(t){this.promotion.expireDate=t.singleDate.jsDate}onPromoFileChange(t){if(!t||!t.target||!t.target.files||0===t.target.files.length)return;const e=t.target.files[0];let o=e.type.split("/")[1];const i="Ads_"+Math.floor((new Date).valueOf()*Math.random())+"."+o;this.promotion.image=i,this.promotion.file=new File([e],i,{type:e.type})}prepareFile(){null!=this.promotion.file&&this.formData.append("Ads",this.promotion.file,this.promotion.file.name)}save(t){this.prepareFile(),this.loader.showLoader$.next(!0),"add"===this.state?this.systemService.addPromotion(this.promotion).pipe(Object(l.b)(this)).subscribe(e=>{var o;if(null!=e&&e>0){if(null==(null===(o=this.promotion)||void 0===o?void 0:o.file))return this.loader.showLoader$.next(!1),void t.fire();this.systemService.submitPromotionFile(this.formData).pipe(Object(l.b)(this)).subscribe(e=>{this.loader.showLoader$.next(!1),1==e&&t.fire()})}else this.loader.showLoader$.next(!1)},t=>{this.loader.showLoader$.next(!1)}):this.systemService.updatePromotion(this.promotion).pipe(Object(l.b)(this)).subscribe(e=>{var o;if(1==e){if(null==(null===(o=this.promotion)||void 0===o?void 0:o.file))return this.loader.showLoader$.next(!1),void t.fire();this.systemService.submitPromotionFile(this.formData).pipe(Object(l.b)(this)).subscribe(e=>{this.loader.showLoader$.next(!1),1==e&&t.fire()})}else this.loader.showLoader$.next(!1)},t=>{this.loader.showLoader$.next(!1)})}};return t.\u0275fac=function(e){return new(e||t)(d.Tb(n.a),d.Tb(m.a),d.Tb(p.a),d.Tb(b.d))},t.\u0275cmp=d.Nb({type:t,selectors:[["app-promotional"]],viewQuery:function(t,e){if(1&t&&d.Qc(g,1),2&t){let t;d.Bc(t=d.hc())&&(e.ngxdp1=t.first)}},decls:49,vars:41,consts:[[1,"py-4"],[1,"row"],[1,"my-2","col-12"],[1,"card"],[1,"card-header","card-header-shadow","gradient-default","text-white","border-0","inside-card"],[1,"font-weight-normal","mb-2","text-capitalize"],[1,"card-text","mb-1"],[1,"card-body"],[1,"form-group","col-lg-4","col-md-6"],[1,"text-capitalize"],["type","text","name","name",1,"form-control",3,"ngModel","ngModelChange"],["name","typeId",1,"form-control",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"form-group","col-xl-4","col-md-6"],["type","text","name","expireDate","angular-mydatepicker","",1,"form-control",3,"options","locale","value","focus","dateChanged"],["dp1","angular-mydatepicker"],[1,"form-group","col-xl-6","col-md-12"],["type","file","name","file","accept","image/*",1,"form-control",3,"change"],[1,"form-group","col-lg-8","col-md-12"],["name","Description","id","","rows","4",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-md-12","d-flex","justify-content-center"],[1,"btn","btn-info","text-capitalize",3,"click"],["timer","3000","timerProgressBar","true","icon","success","position","top-end",3,"toast","showConfirmButton","title"],["successedSave",""],[3,"value"]],template:function(t,e){if(1&t){const t=d.ac();d.Zb(0,"div",0),d.Zb(1,"div",1),d.Zb(2,"div",2),d.Zb(3,"div",3),d.Zb(4,"div",4),d.Zb(5,"h3",5),d.Lc(6),d.lc(7,"translate"),d.lc(8,"translate"),d.Yb(),d.Zb(9,"p",6),d.Lc(10),d.lc(11,"translate"),d.Yb(),d.Yb(),d.Zb(12,"div",7),d.Zb(13,"form",1),d.Zb(14,"div",8),d.Zb(15,"label",9),d.Lc(16),d.lc(17,"translate"),d.Yb(),d.Zb(18,"input",10),d.gc("ngModelChange",function(t){return e.promotion.name=t}),d.Yb(),d.Yb(),d.Zb(19,"div",8),d.Zb(20,"label",9),d.Lc(21),d.lc(22,"translate"),d.Yb(),d.Zb(23,"select",11),d.gc("ngModelChange",function(t){return e.promotion.typeId=t}),d.Kc(24,f,2,2,"option",12),d.lc(25,"async"),d.Yb(),d.Yb(),d.Zb(26,"div",13),d.Zb(27,"label",9),d.Lc(28),d.lc(29,"translate"),d.Yb(),d.Zb(30,"input",14,15),d.gc("focus",function(o){return d.Ec(t),d.Cc(31).toggleCalendar(),e.blur(o)})("dateChanged",function(t){return e.dateChange(t)}),d.Yb(),d.Yb(),d.Zb(32,"div",16),d.Zb(33,"label",9),d.Lc(34),d.lc(35,"translate"),d.Yb(),d.Zb(36,"input",17),d.gc("change",function(t){return e.onPromoFileChange(t)}),d.Yb(),d.Yb(),d.Zb(37,"div",18),d.Zb(38,"label",9),d.Lc(39),d.lc(40,"translate"),d.Yb(),d.Zb(41,"textarea",19),d.gc("ngModelChange",function(t){return e.promotion.descriptions=t}),d.Yb(),d.Yb(),d.Zb(42,"div",20),d.Zb(43,"button",21),d.gc("click",function(){d.Ec(t);const o=d.Cc(47);return e.save(o)}),d.Lc(44),d.lc(45,"translate"),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Ub(46,"swal",22,23),d.lc(48,"translate")}2&t&&(d.Fb(6),d.Oc(" ",d.mc(7,19,"addEditPromotionals."+e.state)," ",d.mc(8,21,"addEditPromotionals.promotional")," "),d.Fb(4),d.Nc(" ",d.mc(11,23,"addEditPromotionals.discription")," "),d.Fb(6),d.Nc(" ",d.mc(17,25,"addEditPromotionals.name")," "),d.Fb(2),d.qc("ngModel",e.promotion.name),d.Fb(3),d.Nc(" ",d.mc(22,27,"addEditPromotionals.promotionalType")," "),d.Fb(2),d.qc("ngModel",e.promotion.typeId),d.Fb(1),d.qc("ngForOf",d.mc(25,29,e.promotionTypes$)),d.Fb(4),d.Mc(d.mc(29,31,"addEditPromotionals.ExpireDate")),d.Fb(2),d.qc("options",e.datePickerOptions)("locale",e.datepickerLocale)("value",e.promotion.expireDateString),d.Fb(4),d.Mc(d.mc(35,33,"addEditPromotionals.image")),d.Fb(5),d.Mc(d.mc(40,35,"addEditPromotionals.description")),d.Fb(2),d.qc("ngModel",e.promotion.descriptions),d.Fb(3),d.Nc(" ",d.mc(45,37,"addEditPromotionals.save")," "),d.Fb(2),d.rc("title",d.mc(48,39,"addEditPromotionals.saveSucceeded")),d.qc("toast",!0)("showConfirmButton",!1))},directives:[h.v,h.m,h.n,h.d,h.l,h.o,h.s,i.k,c.a,u.a,h.p,h.u],pipes:[b.c,i.b],styles:[""]}),t=Object(a.a)([Object(l.a)({checkProperties:!0})],t),t})()}];let y=(()=>{class t{}return t.\u0275mod=d.Rb({type:t}),t.\u0275inj=d.Qb({factory:function(e){return new(e||t)},imports:[[n.f.forChild(v)],n.f]}),t})(),w=(()=>{class t{}return t.\u0275mod=d.Rb({type:t}),t.\u0275inj=d.Qb({factory:function(e){return new(e||t)},providers:[],imports:[[i.c,y,r.a]]}),t})()}}]);