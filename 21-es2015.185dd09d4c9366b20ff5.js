(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{FjBd:function(e,t,r){"use strict";r.r(t),r.d(t,"ConfigrationModule",function(){return j});var n=r("SVse"),o=r("FpXt"),a=r("iInd"),c=r("mrSG"),s=r("3bzS"),i=r("8Y7J"),l=r("Gpft"),u=r("SOeY"),y=r("TSSN"),g=r("jy+X"),b=r("s7LF"),d=r("hvj1");function p(e,t){if(1&e&&(i.Zb(0,"option",38),i.Lc(1),i.Yb()),2&e){const e=t.$implicit,r=i.kc();i.qc("value",e.id),i.Fb(1),i.Nc(" ","ar"===r.translate.currentLang?e.arabicType:e.type," ")}}function m(e,t){if(1&e&&(i.Zb(0,"option",38),i.Lc(1),i.Yb()),2&e){const e=t.$implicit,r=i.kc();i.qc("value",e.id),i.Fb(1),i.Nc(" ","ar"===r.translate.currentLang?e.arabicType:e.type," ")}}function h(e,t){if(1&e&&(i.Zb(0,"option",38),i.Lc(1),i.Yb()),2&e){const e=t.$implicit,r=i.kc();i.qc("value",e.id),i.Fb(1),i.Nc(" ","ar"===r.translate.currentLang?e.arabicType:e.type," ")}}function P(e,t){if(1&e&&(i.Zb(0,"option",38),i.Lc(1),i.Yb()),2&e){const e=t.$implicit,r=i.kc();i.qc("value",e.id),i.Fb(1),i.Nc(" ","ar"===r.translate.currentLang?e.arabicType:e.type," ")}}const f=[{path:"",component:(()=>{let e=class{constructor(e,t,r,n,o){this.authService=e,this.systemService=t,this.translate=r,this.loader=n,this.route=o,this.currentLang="ar"===localStorage.getItem("sender-manage-lang")?"ar":"en",this.ignoreType="[type]",this.rejectType="[type]",this.rejectPenaltyType="[type]",this.ignorePenaltyType="[type]",this.system={id:null,allowUserToReject:null,allowUserToWorkOutShift:null,allowUserPayment:null,allowFixedPricePerCountry:null,allowPricePerProductCountry:null,rejectPerTypeId:null,rejectRequestsNumbers:null,rejectPenaltyPerTypeId:null,rejectPenaltyPeriodNumber:null,ignorPerTypeId:null,ignorRequestsNumbers:null,ignorPenaltyPerTypeId:null,ignorPenaltyPeriodNumber:null,isCurrent:null,isDeleted:null,createdBy:null,modifiedBy:null,creationDate:null,modificationDate:null}}ngOnInit(){this.loadIgnorPerTypes(),this.loadPenaltyPerTypes(),this.loadRejectPerTypes(),this.loadData(),this.getCurrentLang()}getCurrentLang(){this.translate.onLangChange.pipe(Object(s.b)(this)).subscribe(e=>{this.currentLang="ar"===e.lang?"ar":"en"})}loadData(){this.loader.showLoader$.next(!0),this.systemService.getCurrentSystemSettings().pipe(Object(s.b)(this)).subscribe(e=>{this.loader.showLoader$.next(!1),e&&(this.system=e),console.log(this.system)},e=>{console.log(e)})}loadIgnorPerTypes(){this.ignorPerTypes$=this.systemService.getIgnorePerTypes()}loadRejectPerTypes(){this.rejectPerTypes$=this.systemService.getRejectPerTypes()}loadPenaltyPerTypes(){this.rejectPenaltyPerTypes$=this.ignorePenaltyPerTypes$=this.systemService.getPenaltyPerTypes()}getRejectPerType(e){return""}rejectPerTypeOnChange(e){switch("number"==typeof e&&(e=e.toString()),e){case"1":return this.rejectType="ar"===this.currentLang?"\u0633\u0627\u0639\u0629":"Hour",this.rejectType;case"2":return this.rejectType="ar"===this.currentLang?"\u064a\u0648\u0645":"Day",this.rejectType;case"3":return this.rejectType="ar"===this.currentLang?"\u064d\u0634\u0647\u0631":"Month",this.rejectType;case"4":return this.rejectType="ar"===this.currentLang?"\u0633\u0646\u0629":"Year",this.rejectType;default:return null}}ignorePerTypeOnChange(e){switch("number"==typeof e&&(e=e.toString()),e){case"1":return this.ignoreType="ar"===this.currentLang?"\u0633\u0627\u0639\u0629":"Hour",this.ignoreType;case"2":return this.ignoreType="ar"===this.currentLang?"\u064a\u0648\u0645":"Day",this.ignoreType;case"3":return this.ignoreType="ar"===this.currentLang?"\u064d\u0634\u0647\u0631":"Month",this.ignoreType;case"4":return this.ignoreType="ar"===this.currentLang?"\u0633\u0646\u0629":"Year",this.ignoreType;default:return null}}rejectPenaltyPerTypeOnChange(e){switch("number"==typeof e&&(e=e.toString()),e){case"1":return this.rejectPenaltyType="ar"===this.currentLang?"\u0633\u0627\u0639\u0629":"Hour",this.rejectPenaltyType;case"2":return this.rejectPenaltyType="ar"===this.currentLang?"\u064a\u0648\u0645":"Day",this.rejectPenaltyType;case"3":return this.rejectPenaltyType="ar"===this.currentLang?"\u064d\u0634\u0647\u0631":"Month",this.rejectPenaltyType;case"4":return this.rejectPenaltyType="ar"===this.currentLang?"\u0633\u0646\u0629":"Year",this.rejectPenaltyType;default:return null}}ignorePenaltyPerTypeOnChange(e){switch("number"==typeof e&&(e=e.toString()),e){case"1":return this.ignorePenaltyType="ar"===this.currentLang?"\u0633\u0627\u0639\u0629":"Hour",this.ignorePenaltyType;case"2":return this.ignorePenaltyType="ar"===this.currentLang?"\u064a\u0648\u0645":"Day",this.ignorePenaltyType;case"3":return this.ignorePenaltyType="ar"===this.currentLang?"\u064d\u0634\u0647\u0631":"Month",this.ignorePenaltyType;case"4":return this.ignorePenaltyType="ar"===this.currentLang?"\u0633\u0646\u0629":"Year",this.ignorePenaltyType;default:return null}}save(e,t){this.loader.showLoader$.next(!0),this.systemService.saveConfigurations(this.system).pipe(Object(s.b)(this)).subscribe(t=>{this.loader.showLoader$.next(!1),1==t&&e.fire()},e=>{this.loader.showLoader$.next(!1),t.text=e,t.fire()})}};return e.\u0275fac=function(t){return new(t||e)(i.Tb(l.a),i.Tb(u.a),i.Tb(y.d),i.Tb(g.a),i.Tb(a.a))},e.\u0275cmp=i.Nb({type:e,selectors:[["app-configration"]],decls:112,vars:112,consts:[[1,"card"],[1,"card-header","bg-white","py-0"],[1,"mat-card-header"],[1,"fas","fa-cog","bg-info"],[1,"text-capitalize","mx-2"],[1,"card-body","mat-card-body"],[1,"row"],[1,"form-group","col-12","col-xl-6"],[1,"text-capitalize"],["name","rejectPerTypeId",1,"form-control",3,"ngModel","change","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["type","number","name","rejectRequestsNumbers",1,"form-control",3,"ngModel","ngModelChange"],["name","rejectPenaltyPerType",1,"form-control",3,"ngModel","change","ngModelChange"],["type","number","name","rejectPenaltyPeriodNumber",1,"form-control",3,"ngModel","ngModelChange"],["name","ignorPerType",1,"form-control",3,"ngModel","change","ngModelChange"],["type","number","name","ignorRequestsNumbers",1,"form-control",3,"ngModel","ngModelChange"],["name","rejectPerType",1,"form-control",3,"ngModel","change","ngModelChange"],["type","number","name","ignorPenaltyPeriodNumber",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group"],[1,"form-check-for-android"],["type","checkbox","id","allowUserToReject","name","allowUserToReject",1,"form-check-android",3,"ngModel","ngModelChange"],["for","allowUserToReject",1,"form-check-android-label","mx-0"],["for","allowUserToReject",1,"mx-3"],["type","checkbox","id","allowUserToWorkOutShift","name","allowUserToWorkOutShift",1,"form-check-android",3,"ngModel","ngModelChange"],["for","allowUserToWorkOutShift",1,"form-check-android-label","mx-0"],["for","allowUserToWorkOutShift",1,"mx-3"],["type","checkbox","id","allowFixedPricePerCountry","name","allowFixedPricePerCountry",1,"form-check-android",3,"ngModel","ngModelChange"],["for","allowFixedPricePerCountry",1,"form-check-android-label","mx-0"],["for","allowFixedPricePerCountry",1,"mx-3"],["type","checkbox","id","allowPricePerProductCountry","name","allowPricePerProductCountry",1,"form-check-android",3,"ngModel","ngModelChange"],["for","allowPricePerProductCountry",1,"form-check-android-label","mx-0"],["for","allowPricePerProductCountry",1,"mx-3"],[1,"col-md-12","d-flex","justify-content-center"],[1,"btn","btn-success","text-capitalize",3,"click"],["timer","3000","timerProgressBar","true","icon","success","position","top-end",3,"toast","showConfirmButton","title"],["successedSave",""],["timer","3000","timerProgressBar","true","icon","error","position","top-end",3,"toast","showConfirmButton","title"],["errorSave",""],[3,"value"]],template:function(e,t){if(1&e){const e=i.ac();i.Zb(0,"div",0),i.Zb(1,"div",1),i.Zb(2,"div",2),i.Ub(3,"i",3),i.Zb(4,"span",4),i.Lc(5),i.lc(6,"translate"),i.Yb(),i.Yb(),i.Yb(),i.Zb(7,"div",5),i.Zb(8,"form"),i.Zb(9,"div",6),i.Zb(10,"div",7),i.Zb(11,"label",8),i.Lc(12),i.lc(13,"translate"),i.Yb(),i.Zb(14,"select",9),i.gc("change",function(){return t.rejectPerTypeOnChange(t.system.rejectPerTypeId)})("ngModelChange",function(e){return t.system.rejectPerTypeId=e}),i.Kc(15,p,2,2,"option",10),i.lc(16,"async"),i.Yb(),i.Yb(),i.Zb(17,"div",7),i.Zb(18,"label",8),i.Lc(19),i.lc(20,"translate"),i.lc(21,"translate"),i.lc(22,"translate"),i.lc(23,"translate"),i.Yb(),i.Zb(24,"input",11),i.gc("ngModelChange",function(e){return t.system.rejectRequestsNumbers=e}),i.Yb(),i.Yb(),i.Zb(25,"div",7),i.Zb(26,"label",8),i.Lc(27),i.lc(28,"translate"),i.Yb(),i.Zb(29,"select",12),i.gc("change",function(){return t.rejectPenaltyPerTypeOnChange(t.system.rejectPenaltyPerTypeId)})("ngModelChange",function(e){return t.system.rejectPenaltyPerTypeId=e}),i.Kc(30,m,2,2,"option",10),i.lc(31,"async"),i.Yb(),i.Yb(),i.Zb(32,"div",7),i.Zb(33,"label",8),i.Lc(34),i.lc(35,"translate"),i.lc(36,"translate"),i.lc(37,"translate"),i.lc(38,"translate"),i.Yb(),i.Zb(39,"input",13),i.gc("ngModelChange",function(e){return t.system.rejectPenaltyPeriodNumber=e}),i.Yb(),i.Yb(),i.Zb(40,"div",7),i.Zb(41,"label",8),i.Lc(42),i.lc(43,"translate"),i.Yb(),i.Zb(44,"select",14),i.gc("change",function(){return t.ignorePerTypeOnChange(t.system.ignorPerTypeId)})("ngModelChange",function(e){return t.system.ignorPerTypeId=e}),i.Kc(45,h,2,2,"option",10),i.lc(46,"async"),i.Yb(),i.Yb(),i.Zb(47,"div",7),i.Zb(48,"label",8),i.Lc(49),i.lc(50,"translate"),i.lc(51,"translate"),i.lc(52,"translate"),i.lc(53,"translate"),i.Yb(),i.Zb(54,"input",15),i.gc("ngModelChange",function(e){return t.system.ignorRequestsNumbers=e}),i.Yb(),i.Yb(),i.Zb(55,"div",7),i.Zb(56,"label",8),i.Lc(57),i.lc(58,"translate"),i.Yb(),i.Zb(59,"select",16),i.gc("change",function(){return t.ignorePenaltyPerTypeOnChange(t.system.ignorPenaltyPerTypeId)})("ngModelChange",function(e){return t.system.ignorPenaltyPerTypeId=e}),i.Kc(60,P,2,2,"option",10),i.lc(61,"async"),i.Yb(),i.Yb(),i.Zb(62,"div",7),i.Zb(63,"label",8),i.Lc(64),i.lc(65,"translate"),i.lc(66,"translate"),i.lc(67,"translate"),i.lc(68,"translate"),i.Yb(),i.Zb(69,"input",17),i.gc("ngModelChange",function(e){return t.system.ignorPenaltyPeriodNumber=e}),i.Yb(),i.Yb(),i.Yb(),i.Zb(70,"div"),i.Zb(71,"div",18),i.Zb(72,"div",19),i.Zb(73,"input",20),i.gc("ngModelChange",function(e){return t.system.allowUserToReject=e}),i.Yb(),i.Ub(74,"label",21),i.Zb(75,"label",22),i.Lc(76),i.lc(77,"translate"),i.Yb(),i.Yb(),i.Yb(),i.Yb(),i.Ub(78,"div"),i.Zb(79,"div",18),i.Zb(80,"div",19),i.Zb(81,"input",23),i.gc("ngModelChange",function(e){return t.system.allowUserToWorkOutShift=e}),i.Yb(),i.Ub(82,"label",24),i.Zb(83,"label",25),i.Lc(84),i.lc(85,"translate"),i.Yb(),i.Yb(),i.Yb(),i.Ub(86,"div"),i.Zb(87,"div",18),i.Zb(88,"div",19),i.Zb(89,"input",26),i.gc("ngModelChange",function(e){return t.system.allowFixedPricePerCountry=e}),i.Yb(),i.Ub(90,"label",27),i.Zb(91,"label",28),i.Lc(92),i.lc(93,"translate"),i.Yb(),i.Yb(),i.Yb(),i.Ub(94,"div"),i.Zb(95,"div",18),i.Zb(96,"div",19),i.Zb(97,"input",29),i.gc("ngModelChange",function(e){return t.system.allowPricePerProductCountry=e}),i.Yb(),i.Ub(98,"label",30),i.Zb(99,"label",31),i.Lc(100),i.lc(101,"translate"),i.Yb(),i.Yb(),i.Yb(),i.Zb(102,"div",32),i.Zb(103,"button",33),i.gc("click",function(){i.Ec(e);const r=i.Cc(107),n=i.Cc(110);return t.save(r,n)}),i.Lc(104),i.lc(105,"translate"),i.Yb(),i.Yb(),i.Yb(),i.Yb(),i.Yb(),i.Ub(106,"swal",34,35),i.lc(108,"translate"),i.Ub(109,"swal",36,37),i.lc(111,"translate")}2&e&&(i.Fb(5),i.Nc(" ",i.mc(6,48,"configurations.configurations")," "),i.Fb(7),i.Mc(i.mc(13,50,"configurations.rejectPerType")),i.Fb(2),i.qc("ngModel",t.system.rejectPerTypeId),i.Fb(1),i.qc("ngForOf",i.mc(16,52,t.rejectPerTypes$)),i.Fb(4),i.Pc("",i.mc(20,54,"configurations.captainCanRejectRequests")," ( ",i.mc(21,56,t.system.rejectRequestsNumbers<=0?"configurations.number":t.system.rejectRequestsNumbers.toString())," ) ",i.mc(22,58,"configurations.timesInThe")," [ ",null==t.rejectPerTypeOnChange(t.system.rejectPerTypeId)?i.mc(23,60,"configurations.type"):t.rejectType," ]"),i.Fb(5),i.qc("ngModel",t.system.rejectRequestsNumbers),i.Fb(3),i.Mc(i.mc(28,62,"configurations.rejectPenaltyPerType")),i.Fb(2),i.qc("ngModel",t.system.rejectPenaltyPerTypeId),i.Fb(1),i.qc("ngForOf",i.mc(31,64,t.rejectPenaltyPerTypes$)),i.Fb(4),i.Pc("",i.mc(35,66,"configurations.captainCantWorkFor")," ( ",i.mc(36,68,t.system.rejectPenaltyPeriodNumber<=0?"configurations.number":t.system.rejectPenaltyPeriodNumber.toString())," ) [ ",null==t.rejectPenaltyPerTypeOnChange(t.system.rejectPenaltyPerTypeId)?i.mc(37,70,"configurations.type"):t.rejectPenaltyType," ] ",i.mc(38,72,"configurations.asPenaltyForIgnoreRequests"),""),i.Fb(5),i.qc("ngModel",t.system.rejectPenaltyPeriodNumber),i.Fb(3),i.Mc(i.mc(43,74,"configurations.ignorePerType")),i.Fb(2),i.qc("ngModel",t.system.ignorPerTypeId),i.Fb(1),i.qc("ngForOf",i.mc(46,76,t.ignorPerTypes$)),i.Fb(4),i.Pc("",i.mc(50,78,"configurations.captainCanIgnoreRequests")," ( ",i.mc(51,80,t.system.ignorRequestsNumbers<=0?"configurations.number":t.system.ignorRequestsNumbers.toString())," ) ",i.mc(52,82,"configurations.timesInThe")," [ ",null==t.ignorePerTypeOnChange(t.system.ignorPerTypeId)?i.mc(53,84,"configurations.type"):t.ignoreType," ] "),i.Fb(5),i.qc("ngModel",t.system.ignorRequestsNumbers),i.Fb(3),i.Mc(i.mc(58,86,"configurations.ignorePenaltyPerType")),i.Fb(2),i.qc("ngModel",t.system.ignorPenaltyPerTypeId),i.Fb(1),i.qc("ngForOf",i.mc(61,88,t.ignorePenaltyPerTypes$)),i.Fb(4),i.Pc("",i.mc(65,90,"configurations.captainCantWorkFor")," (",i.mc(66,92,t.system.ignorPenaltyPeriodNumber<=0?"configurations.number":t.system.ignorPenaltyPeriodNumber.toString())," ) [ ",null==t.ignorePenaltyPerTypeOnChange(t.system.ignorPenaltyPerTypeId)?i.mc(67,94,"configurations.type"):t.ignorePenaltyType," ] ",i.mc(68,96,"configurations.asPenaltyForIgnoreRequests"),""),i.Fb(5),i.qc("ngModel",t.system.ignorPenaltyPeriodNumber),i.Fb(4),i.qc("ngModel",t.system.allowUserToReject),i.Fb(3),i.Mc(i.mc(77,98,"configurations.allowCaptainToRejectRequests")),i.Fb(5),i.qc("ngModel",t.system.allowUserToWorkOutShift),i.Fb(3),i.Mc(i.mc(85,100,"configurations.allowCaptainToWorkOutOfShift")),i.Fb(5),i.qc("ngModel",t.system.allowFixedPricePerCountry),i.Fb(3),i.Mc(i.mc(93,102,"configurations.allowFixedPricePerCountry")),i.Fb(5),i.qc("ngModel",t.system.allowPricePerProductCountry),i.Fb(3),i.Mc(i.mc(101,104,"configurations.allowPriceForProductPerCountry")),i.Fb(4),i.Nc(" ",i.mc(105,106,"configurations.save")," "),i.Fb(2),i.rc("title",i.mc(108,108,"user.saveSucceeded")),i.qc("toast",!0)("showConfirmButton",!1),i.Fb(3),i.rc("title",i.mc(111,110,"user.saveError")),i.qc("toast",!0)("showConfirmButton",!1))},directives:[b.v,b.m,b.n,b.s,b.l,b.o,n.k,b.q,b.d,b.a,d.a,b.p,b.u],pipes:[y.c,n.b],styles:[""]}),e=Object(c.a)([Object(s.a)({checkProperties:!0})],e),e})()}];let T=(()=>{class e{}return e.\u0275mod=i.Rb({type:e}),e.\u0275inj=i.Qb({factory:function(t){return new(t||e)},imports:[[a.f.forChild(f)],a.f]}),e})(),j=(()=>{class e{}return e.\u0275mod=i.Rb({type:e}),e.\u0275inj=i.Qb({factory:function(t){return new(t||e)},providers:[],imports:[[n.c,T,o.a]]}),e})()}}]);