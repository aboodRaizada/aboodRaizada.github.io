!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"St/x":function(i,n,a){"use strict";a.r(n),a.d(n,"AppsNotificationsModule",function(){return W});var o=a("SVse"),c=a("FpXt"),r=a("iInd"),s=a("mrSG"),l=a("3bzS"),p=a("AytR"),b=a("PSD3"),d=a.n(b),f=a("8Y7J"),u=a("TSSN"),m=a("jy+X"),v=a("0dPT"),h=a("SOeY"),g=a("s7LF"),N=a("Q2Ze"),F=a("ZTz/"),Y=a("UhP/"),Z=a("e6WT"),I=a("vrAh"),C=a("Dxy4"),L=a("pu8Q"),A=a("f44v"),y=["driversInput"];function T(t,e){1&t&&(f.Zb(0,"mat-hint"),f.Zb(1,"span",38),f.Lc(2),f.lc(3,"translate"),f.Yb(),f.Yb()),2&t&&(f.Fb(2),f.Nc(" ",f.mc(3,1,"appNotifications.selectFromSelections")," "))}function O(t,e){1&t&&(f.Zb(0,"mat-option"),f.Ub(1,"mat-spinner",39),f.Yb())}function w(t,e){if(1&t&&(f.Zb(0,"mat-option",40),f.Zb(1,"span",41),f.Lc(2),f.Yb(),f.Yb()),2&t){var i=e.$implicit;f.qc("value",i),f.Fb(2),f.Oc(" ",i.firstName," ",i.familyName," ")}}function S(t,e){if(1&t){var i=f.ac();f.Zb(0,"button",35),f.gc("click",function(){f.Ec(i),f.kc();var t=f.Cc(7);return f.kc().clearSendingValue(t)}),f.Ub(1,"i",42),f.Yb()}}function j(t,e){if(1&t){var i=f.ac();f.Zb(0,"div",1),f.Zb(1,"div",8),f.Zb(2,"mat-form-field",28),f.Zb(3,"mat-label"),f.Lc(4),f.lc(5,"translate"),f.Yb(),f.Ub(6,"input",29,30),f.Kc(8,T,4,3,"mat-hint",31),f.Zb(9,"mat-autocomplete",32,33),f.gc("optionSelected",function(t){return f.Ec(i),f.kc().selectedDriver(t)}),f.Kc(11,O,2,0,"mat-option",31),f.Kc(12,w,3,3,"mat-option",34),f.Yb(),f.Zb(13,"button",35),f.gc("click",function(){f.Ec(i);var t=f.Cc(7);return f.kc().filteringDrivers(t)}),f.Ub(14,"i",36),f.Yb(),f.Kc(15,S,2,0,"button",37),f.Yb(),f.Yb(),f.Yb()}if(2&t){var n=f.Cc(10),a=f.kc();f.Fb(2),f.qc("appearance",a.matInputAppearance)("color",a.matInputsColor),f.Fb(2),f.Nc(" ",f.mc(5,9,"appNotifications.captainName")," "),f.Fb(2),f.qc("matAutocomplete",n),f.Fb(2),f.qc("ngIf",!a.driverId),f.Fb(1),f.qc("displayWith",a.displayFn),f.Fb(2),f.qc("ngIf",a.driversIsLoading),f.Fb(1),f.qc("ngForOf",a.filteredDriversOptions),f.Fb(3),f.qc("ngIf",a.driverId)}}function k(t,e){if(1&t){var i=f.ac();f.Zb(0,"mat-chip",52),f.gc("removed",function(){var t=f.Ec(i).$implicit;return f.kc(2).remove(t)}),f.Lc(1),f.Ub(2,"i",53),f.Yb()}if(2&t){var n=e.$implicit;f.Fb(1),f.Oc(" ",n.firstName," ",n.familyName," ")}}function x(t,e){1&t&&(f.Zb(0,"mat-option",54),f.Ub(1,"mat-spinner",39),f.Yb())}function q(t,e){if(1&t&&(f.Zb(0,"mat-option",40),f.Lc(1),f.Yb()),2&t){var i=e.$implicit;f.qc("value",i),f.Fb(1),f.Oc(" ",i.firstName," ",i.familyName," ")}}function U(t,e){1&t&&(f.Zb(0,"mat-hint"),f.Zb(1,"span",38),f.Lc(2),f.lc(3,"translate"),f.Yb(),f.Yb()),2&t&&(f.Fb(2),f.Nc(" ",f.mc(3,1,"appNotifications.selectFromSelections")," "))}function M(t,e){if(1&t){var i=f.ac();f.Zb(0,"div",1),f.Zb(1,"div",43),f.Zb(2,"mat-form-field",28),f.Zb(3,"mat-label"),f.Lc(4),f.lc(5,"translate"),f.Yb(),f.Zb(6,"mat-chip-list",null,44),f.Kc(8,k,3,2,"mat-chip",45),f.Zb(9,"input",46,47),f.gc("keyup.enter",function(){f.Ec(i);var t=f.Cc(10);return f.kc().filteringDrivers(t)}),f.lc(11,"translate"),f.Yb(),f.Yb(),f.Zb(12,"mat-autocomplete",48,49),f.gc("optionSelected",function(t){return f.Ec(i),f.kc().driverSelected(t)}),f.Kc(14,x,2,0,"mat-option",50),f.Kc(15,q,2,3,"mat-option",34),f.Yb(),f.Zb(16,"button",35),f.gc("click",function(){f.Ec(i);var t=f.Cc(10);return f.kc().filteringDrivers(t),t.focus()}),f.Ub(17,"i",51),f.Yb(),f.Kc(18,U,4,3,"mat-hint",31),f.Yb(),f.Yb(),f.Yb()}if(2&t){var n=f.Cc(7),a=f.Cc(13),o=f.kc();f.Fb(2),f.qc("appearance",o.matInputAppearance)("color",o.matInputsColor),f.Fb(2),f.Nc(" ",f.mc(5,10,"appNotifications.listOfCaptains")," "),f.Fb(4),f.qc("ngForOf",o.driversChips),f.Fb(1),f.qc("placeholder",f.mc(11,12,"appNotifications.captainName"))("matAutocomplete",a)("matChipInputFor",n),f.Fb(5),f.qc("ngIf",o.driversIsLoading),f.Fb(1),f.qc("ngForOf",o.filteredDriversOptions),f.Fb(3),f.qc("ngIf",!o.driversChips.length)}}function D(t,e){if(1&t){var i=f.ac();f.Zb(0,"div",1),f.Zb(1,"div",55),f.Zb(2,"button",56),f.gc("click",function(){return f.Ec(i),f.kc().send()}),f.Lc(3),f.lc(4,"translate"),f.Yb(),f.Yb(),f.Yb()}2&t&&(f.Fb(3),f.Nc(" ",f.mc(4,1,"appNotifications.sendNotification")," "))}var B,P,E,K=[{path:"",component:(B=function(){function i(e,n,a,o){t(this,i),this.translate=e,this.loader=n,this.driverService=a,this.systemService=o,this.currentLang="ar"===localStorage.getItem("sender-manage-lang")?"ar":"en",this.matInputAppearance=p.a.inputsStyleAppearance,this.matInputsColor=p.a.inputsStyleColor,this.objectToApi={Topic:null,UserId:null,UserIds:null,Title:null,Message:null},this.notificationTo="allCaptains",this.driverId=null,this.driversIsLoading=!1,this.filteredDriversOptions=[],this.fruits=["Lemon"],this.driversChips=[]}var n,a,o;return n=i,(a=[{key:"filteringDrivers",value:function(t){var e=this;this.driversIsLoading=!0;var i=t.value;this.driverService.getAllDriversByFullName({page:1,numberOfObjectsPerPage:20},i).pipe(Object(l.b)(this)).subscribe(function(t){var n=i.toLowerCase();e.filteredDriversOptions=t.drivers.filter(function(t){return-1!==t.firstName.toLowerCase().indexOf(n)||-1!==t.familyName.toLowerCase().indexOf(n)}),e.driversIsLoading=!1})}},{key:"selectedDriver",value:function(t){this.driverId=t.option.value.id}},{key:"displayFn",value:function(t){return t&&t.firstName+" "+t.familyName}},{key:"remove",value:function(t){var e=this.driversChips.indexOf(t);e>=0&&(this.driversChips.splice(e,1),this.fillDriversIdsForObjectApi())}},{key:"driverSelected",value:function(t){this.driversChips.find(function(e){return e.id===t.option.value.id})?this.driversInput.nativeElement.value="":(this.driversChips.push(t.option.value),this.driversInput.nativeElement.value="",this.fillDriversIdsForObjectApi())}},{key:"fillDriversIdsForObjectApi",value:function(){this.objectToApi.UserIds=this.driversChips.map(function(t){return t.id})}},{key:"ngOnInit",value:function(){this.getCurrentLang()}},{key:"getCurrentLang",value:function(){var t=this;this.translate.onLangChange.pipe(Object(l.b)(this)).subscribe(function(e){t.currentLang="ar"===e.lang?"ar":"en"})}},{key:"clearSendingValue",value:function(t){t&&(t.value=null),this.driverId=null,this.driversChips=[],this.objectToApi={Topic:null,UserId:null,UserIds:null,Title:null,Message:null}}},{key:"send",value:function(){var t=this;this.loader.showLoader$.next(!0),this.notificationTo.toLocaleLowerCase().includes("captain")&&(this.objectToApi.Topic="captains",this.driverId?(this.objectToApi.UserId=this.driverId,delete this.objectToApi.UserIds,this.systemService.sendNotificationsToUsers(this.objectToApi).pipe(Object(l.b)(this)).subscribe(function(e){t.loader.showLoader$.next(!1),d.a.fire({title:"".concat(t.translate.instant("appNotifications.sendNotificationSucceded")),toast:!0,showConfirmButton:!1,timer:5e3,timerProgressBar:!0,icon:"success",position:"en"===t.currentLang?"top-right":"top-left"})},function(e){t.loader.showLoader$.next(!1),d.a.fire({title:"".concat(t.translate.instant("shared.somethingWentWrong")),toast:!0,showConfirmButton:!1,timer:5e3,timerProgressBar:!0,icon:"error",position:"en"===t.currentLang?"top-right":"top-left"})})):this.driversChips.length?(delete this.objectToApi.UserId,this.systemService.sendNotificationsToUsers(this.objectToApi).pipe(Object(l.b)(this)).subscribe(function(e){t.loader.showLoader$.next(!1),d.a.fire({title:"".concat(t.translate.instant("appNotifications.sendNotificationSucceded")),toast:!0,showConfirmButton:!1,timer:5e3,timerProgressBar:!0,icon:"success",position:"en"===t.currentLang?"top-right":"top-left"})},function(e){t.loader.showLoader$.next(!1),d.a.fire({title:"".concat(t.translate.instant("shared.somethingWentWrong")),toast:!0,showConfirmButton:!1,timer:5e3,timerProgressBar:!0,icon:"error",position:"en"===t.currentLang?"top-right":"top-left"})})):(delete this.objectToApi.UserId,delete this.objectToApi.UserIds,this.systemService.sendNotificationsToUsers(this.objectToApi).pipe(Object(l.b)(this)).subscribe(function(e){t.loader.showLoader$.next(!1),d.a.fire({title:"".concat(t.translate.instant("appNotifications.sendNotificationSucceded")),toast:!0,showConfirmButton:!1,timer:5e3,timerProgressBar:!0,icon:"success",position:"en"===t.currentLang?"top-right":"top-left"})},function(e){t.loader.showLoader$.next(!1),d.a.fire({title:"".concat(t.translate.instant("shared.somethingWentWrong")),toast:!0,showConfirmButton:!1,timer:5e3,timerProgressBar:!0,icon:"error",position:"en"===t.currentLang?"top-right":"top-left"})})))}}])&&e(n.prototype,a),o&&e(n,o),i}(),B.\u0275fac=function(t){return new(t||B)(f.Tb(u.d),f.Tb(m.a),f.Tb(v.a),f.Tb(h.a))},B.\u0275cmp=f.Nb({type:B,selectors:[["app-app-notifications"]],viewQuery:function(t,e){var i;1&t&&f.Qc(y,1),2&t&&f.Bc(i=f.hc())&&(e.driversInput=i.first)},decls:73,vars:63,consts:[[1,"py-4"],[1,"row"],[1,"my-2","col-12"],[1,"card"],[1,"card-header","card-header-shadow","gradient-default","text-white","border-0","inside-card"],[1,"font-weight-normal","mb-2","text-capitalize"],[1,"card-text","mb-1"],[1,"card-body"],[1,"form-group","col-12","col-sm-8","col-md-7","col-lg-6","col-xl-4"],[1,"w-100","text-capitalize","mt-2",3,"appearance","color"],["name","notificationTo",3,"ngModel","ngModelChange","selectionChange"],["value","allCaptains"],["value","oneCaptain"],["value","listOfCaptains"],["value","allAgents","disabled",""],["value","oneAgent","disabled",""],["value","listOfAgents","disabled",""],["value","allAdmins","disabled",""],["value","oneAdmin","disabled",""],["value","listOfAdmins","disabled",""],["value","allSupports","disabled",""],["value","oneSupport","disabled",""],["value","listOfSupports","disabled",""],["class","row",4,"ngIf"],[1,"text-capitalize","w-100",3,"appearance","color"],["matInput","","name","notificationTitle",3,"ngModel","ngModelChange"],[1,"form-group","col-12","col-md-8"],["matInput","","name","notificationMessage",3,"ngModel","ngModelChange"],[1,"w-100","text-capitalize",3,"appearance","color"],["type","text","matInput","",3,"matAutocomplete"],["driverInput",""],[4,"ngIf"],[3,"displayWith","optionSelected"],["driverAutoComplete","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["mat-button","","matSuffix","","mat-icon-button","",3,"click"],[1,"fa","fa-search"],["mat-button","","matSuffix","","mat-icon-button","",3,"click",4,"ngIf"],[1,"text-danger","h6"],["diameter","30"],[3,"value"],[1,"mx-2"],[1,"fa","fa-times","text-danger"],[1,"form-group","col-12"],["chipList",""],[3,"removed",4,"ngFor","ngForOf"],[3,"placeholder","matAutocomplete","matChipInputFor","keyup.enter"],["driversInput",""],[3,"optionSelected"],["driversAutoComplete","matAutocomplete"],["disabled","",4,"ngIf"],[1,"fa","fa-search","text-primary"],[3,"removed"],["matChipRemove","",1,"fa","fa-times-circle","mx-1","mt-1"],["disabled",""],[1,"col-md-12","d-flex","justify-content-center"],["type","button",1,"btn","btn-success","text-capitalize",3,"click"]],template:function(t,e){1&t&&(f.Zb(0,"div",0),f.Zb(1,"div",1),f.Zb(2,"div",2),f.Zb(3,"div",3),f.Zb(4,"div",4),f.Zb(5,"h3",5),f.Lc(6),f.lc(7,"translate"),f.Yb(),f.Zb(8,"p",6),f.Lc(9),f.lc(10,"translate"),f.Yb(),f.Yb(),f.Zb(11,"div",7),f.Zb(12,"form"),f.Zb(13,"div",1),f.Zb(14,"div",8),f.Zb(15,"mat-form-field",9),f.Zb(16,"mat-label"),f.Lc(17),f.lc(18,"translate"),f.Yb(),f.Zb(19,"mat-select",10),f.gc("ngModelChange",function(t){return e.notificationTo=t})("selectionChange",function(){return e.clearSendingValue()}),f.Zb(20,"mat-option",11),f.Lc(21),f.lc(22,"translate"),f.Yb(),f.Zb(23,"mat-option",12),f.Lc(24),f.lc(25,"translate"),f.Yb(),f.Zb(26,"mat-option",13),f.Lc(27),f.lc(28,"translate"),f.Yb(),f.Zb(29,"mat-option",14),f.Lc(30),f.lc(31,"translate"),f.Yb(),f.Zb(32,"mat-option",15),f.Lc(33),f.lc(34,"translate"),f.Yb(),f.Zb(35,"mat-option",16),f.Lc(36),f.lc(37,"translate"),f.Yb(),f.Zb(38,"mat-option",17),f.Lc(39),f.lc(40,"translate"),f.Yb(),f.Zb(41,"mat-option",18),f.Lc(42),f.lc(43,"translate"),f.Yb(),f.Zb(44,"mat-option",19),f.Lc(45),f.lc(46,"translate"),f.Yb(),f.Zb(47,"mat-option",20),f.Lc(48),f.lc(49,"translate"),f.Yb(),f.Zb(50,"mat-option",21),f.Lc(51),f.lc(52,"translate"),f.Yb(),f.Zb(53,"mat-option",22),f.Lc(54),f.lc(55,"translate"),f.Yb(),f.Yb(),f.Yb(),f.Yb(),f.Yb(),f.Kc(56,j,16,11,"div",23),f.Kc(57,M,19,14,"div",23),f.Zb(58,"div",1),f.Zb(59,"div",8),f.Zb(60,"mat-form-field",24),f.Zb(61,"mat-label"),f.Lc(62),f.lc(63,"translate"),f.Yb(),f.Zb(64,"input",25),f.gc("ngModelChange",function(t){return e.objectToApi.Title=t}),f.Yb(),f.Yb(),f.Yb(),f.Yb(),f.Zb(65,"div",1),f.Zb(66,"div",26),f.Zb(67,"mat-form-field",24),f.Zb(68,"mat-label"),f.Lc(69),f.lc(70,"translate"),f.Yb(),f.Zb(71,"textarea",27),f.gc("ngModelChange",function(t){return e.objectToApi.Message=t}),f.Yb(),f.Yb(),f.Yb(),f.Yb(),f.Kc(72,D,5,3,"div",23),f.Yb(),f.Yb(),f.Yb(),f.Yb(),f.Yb(),f.Yb()),2&t&&(f.Fb(6),f.Nc(" ",f.mc(7,29,"appNotifications.applicationNotifications")," "),f.Fb(3),f.Nc(" ",f.mc(10,31,"appNotifications.addNewNotification")," "),f.Fb(6),f.qc("appearance",e.matInputAppearance)("color",e.matInputsColor),f.Fb(2),f.Nc(" ",f.mc(18,33,"appNotifications.sendNotificationTo")," "),f.Fb(2),f.qc("ngModel",e.notificationTo),f.Fb(2),f.Nc(" ",f.mc(22,35,"appNotifications.allCaptains")," "),f.Fb(3),f.Nc(" ",f.mc(25,37,"appNotifications.oneCaptain")," "),f.Fb(3),f.Nc(" ",f.mc(28,39,"appNotifications.listOfCaptains")," "),f.Fb(3),f.Nc(" ",f.mc(31,41,"appNotifications.allAgents")," "),f.Fb(3),f.Nc(" ",f.mc(34,43,"appNotifications.oneAgent")," "),f.Fb(3),f.Nc(" ",f.mc(37,45,"appNotifications.listOfAgents")," "),f.Fb(3),f.Nc(" ",f.mc(40,47,"appNotifications.allAdmins")," "),f.Fb(3),f.Nc(" ",f.mc(43,49,"appNotifications.oneAdmin")," "),f.Fb(3),f.Nc(" ",f.mc(46,51,"appNotifications.listOfAdmins")," "),f.Fb(3),f.Nc(" ",f.mc(49,53,"appNotifications.allSupports")," "),f.Fb(3),f.Nc(" ",f.mc(52,55,"appNotifications.oneSupport")," "),f.Fb(3),f.Nc(" ",f.mc(55,57,"appNotifications.listOfSupports")," "),f.Fb(2),f.qc("ngIf","oneCaptain"===e.notificationTo),f.Fb(1),f.qc("ngIf","listOfCaptains"===e.notificationTo),f.Fb(3),f.qc("appearance",e.matInputAppearance)("color",e.matInputsColor),f.Fb(2),f.Nc(" ",f.mc(63,59,"appNotifications.notificationTitle")," "),f.Fb(2),f.qc("ngModel",e.objectToApi.Title),f.Fb(3),f.qc("appearance",e.matInputAppearance)("color",e.matInputsColor),f.Fb(2),f.Nc(" ",f.mc(70,61,"appNotifications.notificationMessage")," "),f.Fb(2),f.qc("ngModel",e.objectToApi.Message),f.Fb(1),f.qc("ngIf",e.objectToApi.Title&&e.objectToApi.Message))},directives:[g.v,g.m,g.n,N.b,N.f,F.a,g.l,g.o,Y.j,o.l,Z.b,g.d,I.c,I.a,o.k,C.a,N.g,N.e,L.b,A.c,A.b,A.a,A.d],pipes:[u.c],styles:[""]}),B=Object(s.a)([Object(l.a)({checkProperties:!0})],B))}],$=((E=function e(){t(this,e)}).\u0275mod=f.Rb({type:E}),E.\u0275inj=f.Qb({factory:function(t){return new(t||E)},imports:[[r.f.forChild(K)],r.f]}),E),W=((P=function e(){t(this,e)}).\u0275mod=f.Rb({type:P}),P.\u0275inj=f.Qb({factory:function(t){return new(t||P)},providers:[],imports:[[o.c,$,c.a]]}),P)}}])}();