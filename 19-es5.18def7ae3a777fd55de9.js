!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"4fi/":function(n,o,i){"use strict";i.r(o),i.d(o,"ApplicationModule",function(){return Z});var a=i("SVse"),r=i("FpXt"),d=i("iInd"),l=i("mrSG"),c=i("0sX0"),s=i("Iab2"),b=i("3bzS"),p=i("8Y7J"),f=i("jy+X"),u=i("SOeY"),h=i("TSSN"),g=i("s7LF"),m=i("hvj1");function v(e,t){if(1&e){var n=p.ac();p.Zb(0,"div",27),p.Zb(1,"button",28),p.gc("click",function(){return p.Ec(n),p.kc().download()}),p.Lc(2),p.lc(3,"translate"),p.Yb(),p.Yb()}2&e&&(p.Fb(2),p.Nc(" ",p.mc(3,1,"addEditApp.download")," "))}var M,w,y,Y=[{path:"",component:(M=function(){function n(t,o,i,a){e(this,n),this.activatedRoute=t,this.loader=o,this.systemService=i,this.translate=a,this.currentLang="ar"===localStorage.getItem("sender-manage-lang")?"ar":"en",this.state="",this.appModel=new c.d,this.versionId=0,this.formData=new FormData,this.blob=new Blob}var o,i,a;return o=n,(i=[{key:"ngOnInit",value:function(){var e=this;this.activatedRoute.params.subscribe(function(t){e.versionId=Number.parseInt(t.id),"0"===t.id?e.state="add":(e.state="edit",e.loader.showLoader$.next(!0),e.loadAndroidVersion(e.versionId))}),this.getCurrentLang()}},{key:"getCurrentLang",value:function(){var e=this;this.translate.onLangChange.pipe(Object(b.b)(this)).subscribe(function(t){e.currentLang="ar"===t.lang?"ar":"en"})}},{key:"loadAndroidVersion",value:function(e){var t=this;this.systemService.getAndroidVersion(this.versionId).pipe(Object(b.b)(this)).subscribe(function(e){t.loader.showLoader$.next(!1),t.appModel=e})}},{key:"onAppFileChange",value:function(e){if(e&&e.target&&e.target.files&&0!==e.target.files.length){var t=e.target.files[0],n=t.type.split("/")[1];"vnd.android.package-archive"===n&&(n="apk");var o="Android_"+Math.floor((new Date).valueOf()*Math.random())+"."+n;this.appModel.fileExtension=n,this.appModel.fileName=o,this.appModel.file=new File([t],o,{type:t.type})}}},{key:"prepareFile",value:function(){null!=this.appModel.file&&this.formData.append("Android",this.appModel.file,this.appModel.file.name)}},{key:"showTemplate",value:function(){}},{key:"save",value:function(e){var t=this;this.prepareFile(),this.loader.showLoader$.next(!0),"add"===this.state?this.systemService.addAndroidVersion(this.appModel).pipe(Object(b.b)(this)).subscribe(function(n){var o;if(null!=n&&n>0){if(null==(null===(o=t.appModel)||void 0===o?void 0:o.file))return t.loader.showLoader$.next(!1),void e.fire();t.systemService.submitAndroidVersionFile(t.formData).pipe(Object(b.b)(t)).subscribe(function(n){t.loader.showLoader$.next(!1),1==n&&e.fire()},function(e){t.loader.showLoader$.next(!1),console.log(e)})}else t.loader.showLoader$.next(!1)},function(e){console.log(e),t.loader.showLoader$.next(!1)}):this.systemService.updateAndroidVersion(this.appModel).pipe(Object(b.b)(this)).subscribe(function(n){var o;if(1==n){if(null==(null===(o=t.appModel)||void 0===o?void 0:o.file))return t.loader.showLoader$.next(!1),void e.fire();t.systemService.submitAndroidVersionFile(t.formData).pipe(Object(b.b)(t)).subscribe(function(n){t.loader.showLoader$.next(!1),1==n&&e.fire()})}else t.loader.showLoader$.next(!1)},function(e){console.log(e),t.loader.showLoader$.next(!1)})}},{key:"download",value:function(){var e=this;this.loader.showLoader$.next(!0),this.systemService.downloadAndroidFile(this.appModel.fileName).pipe(Object(b.b)(this)).subscribe(function(t){e.loader.showLoader$.next(!1);var n=new Blob([t],{type:"application/vnd.android.package-archive; "});window.URL.createObjectURL(n),s.saveAs(n,"sender.apk")},function(t){e.loader.showLoader$.next(!1),console.log("%cError downloading the file","background: #f00; color: #fff")})}}])&&t(o.prototype,i),a&&t(o,a),n}(),M.\u0275fac=function(e){return new(e||M)(p.Tb(d.a),p.Tb(f.a),p.Tb(u.a),p.Tb(h.d))},M.\u0275cmp=p.Nb({type:M,selectors:[["app-application"]],decls:59,vars:45,consts:[[1,"py-4"],[1,"row"],[1,"my-2","col-12"],[1,"card"],[1,"card-header","card-header-shadow","gradient-default","text-white","border-0","inside-card"],[1,"font-weight-normal","mb-2","text-capitalize"],[1,"card-text","mb-1"],[1,"card-body"],[1,"form-group","col-lg-4","col-md-6"],[1,"text-capitalize"],["type","text","name","name",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","Version",1,"form-control",3,"ngModel","ngModelChange"],["type","file","name","file",1,"form-control",3,"change"],["disabled","disabled","type","text","name","fileExtension",1,"form-control",3,"ngModel","ngModelChange"],["disabled","disabled","type","text","name","fileName",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","col-lg-8","col-md-12"],["name","Description","id","","rows","4",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","col-12"],[1,"form-check-for-android"],["type","checkbox","id","switch","name","isCurrent",1,"form-check-android",3,"ngModel","ngModelChange"],["for","switch",1,"form-check-android-label"],["for","switch",1,"mx-3"],["class","col-md-12 d-flex justify-content-start",4,"ngIf"],[1,"col-md-12","d-flex","justify-content-center"],[1,"btn","btn-info","text-capitalize",3,"click"],["timer","3000","timerProgressBar","true","icon","success","position","top-end",3,"toast","showConfirmButton","title"],["successedSave",""],[1,"col-md-12","d-flex","justify-content-start"],[1,"btn","btn-warning","text-capitalize",3,"click"]],template:function(e,t){if(1&e){var n=p.ac();p.Zb(0,"div",0),p.Zb(1,"div",1),p.Zb(2,"div",2),p.Zb(3,"div",3),p.Zb(4,"div",4),p.Zb(5,"h3",5),p.Lc(6),p.lc(7,"translate"),p.lc(8,"translate"),p.Yb(),p.Zb(9,"p",6),p.Lc(10),p.lc(11,"translate"),p.Yb(),p.Yb(),p.Zb(12,"div",7),p.Zb(13,"form",1),p.Zb(14,"div",8),p.Zb(15,"label",9),p.Lc(16),p.lc(17,"translate"),p.Yb(),p.Zb(18,"input",10),p.gc("ngModelChange",function(e){return t.appModel.name=e}),p.Yb(),p.Yb(),p.Zb(19,"div",8),p.Zb(20,"label",9),p.Lc(21),p.lc(22,"translate"),p.Yb(),p.Zb(23,"input",11),p.gc("ngModelChange",function(e){return t.appModel.version=e}),p.Yb(),p.Yb(),p.Zb(24,"div",8),p.Zb(25,"label",9),p.Lc(26),p.lc(27,"translate"),p.Yb(),p.Zb(28,"input",12),p.gc("change",function(e){return t.onAppFileChange(e)}),p.Yb(),p.Yb(),p.Zb(29,"div",8),p.Zb(30,"label",9),p.Lc(31),p.lc(32,"translate"),p.Yb(),p.Zb(33,"input",13),p.gc("ngModelChange",function(e){return t.appModel.fileExtension=e}),p.Yb(),p.Yb(),p.Zb(34,"div",8),p.Zb(35,"label",9),p.Lc(36),p.lc(37,"translate"),p.Yb(),p.Zb(38,"input",14),p.gc("ngModelChange",function(e){return t.appModel.fileName=e}),p.Yb(),p.Yb(),p.Zb(39,"div",15),p.Zb(40,"label",9),p.Lc(41),p.lc(42,"translate"),p.Yb(),p.Zb(43,"textarea",16),p.gc("ngModelChange",function(e){return t.appModel.description=e}),p.Yb(),p.Yb(),p.Zb(44,"div",17),p.Zb(45,"div",18),p.Zb(46,"input",19),p.gc("ngModelChange",function(e){return t.appModel.isCurrent=e}),p.Yb(),p.Ub(47,"label",20),p.Zb(48,"label",21),p.Lc(49),p.lc(50,"translate"),p.Yb(),p.Yb(),p.Yb(),p.Kc(51,v,4,3,"div",22),p.Zb(52,"div",23),p.Zb(53,"button",24),p.gc("click",function(){p.Ec(n);var e=p.Cc(57);return t.save(e)}),p.Lc(54),p.lc(55,"translate"),p.Yb(),p.Yb(),p.Yb(),p.Yb(),p.Yb(),p.Yb(),p.Yb(),p.Yb(),p.Ub(56,"swal",25,26),p.lc(58,"translate")}2&e&&(p.Fb(6),p.Oc(" ",p.mc(7,21,"addEditApp."+t.state)," ",p.mc(8,23,"addEditApp.app")," "),p.Fb(4),p.Nc(" ",p.mc(11,25,"addEditApp.discription")," "),p.Fb(6),p.Mc(p.mc(17,27,"addEditApp.name")),p.Fb(2),p.qc("ngModel",t.appModel.name),p.Fb(3),p.Mc(p.mc(22,29,"addEditApp.version")),p.Fb(2),p.qc("ngModel",t.appModel.version),p.Fb(3),p.Mc(p.mc(27,31,"addEditApp.file")),p.Fb(5),p.Mc(p.mc(32,33,"addEditApp.fileExtension")),p.Fb(2),p.qc("ngModel",t.appModel.fileExtension),p.Fb(3),p.Mc(p.mc(37,35,"addEditApp.fileName")),p.Fb(2),p.qc("ngModel",t.appModel.fileName),p.Fb(3),p.Mc(p.mc(42,37,"addEditApp.description")),p.Fb(2),p.qc("ngModel",t.appModel.description),p.Fb(3),p.qc("ngModel",t.appModel.isCurrent),p.Fb(3),p.Mc(p.mc(50,39,"addEditApp.isCurrent")),p.Fb(2),p.qc("ngIf","edit"===t.state),p.Fb(3),p.Nc(" ",p.mc(55,41,"addEditApp.save")," "),p.Fb(2),p.rc("title",p.mc(58,43,"addEditApp.saveSucceeded")),p.qc("toast",!0)("showConfirmButton",!1))},directives:[g.v,g.m,g.n,g.d,g.l,g.o,g.a,a.l,m.a],pipes:[h.c],styles:[".form-check-android-label[_ngcontent-%COMP%]{margin-left:0;margin-right:0}"]}),M=Object(l.a)([Object(b.a)({checkProperties:!0})],M))}],x=((y=function t(){e(this,t)}).\u0275mod=p.Rb({type:y}),y.\u0275inj=p.Qb({factory:function(e){return new(e||y)},imports:[[d.f.forChild(Y)],d.f]}),y),Z=((w=function t(){e(this,t)}).\u0275mod=p.Rb({type:w}),w.\u0275inj=p.Qb({factory:function(e){return new(e||w)},providers:[],imports:[[a.c,x,r.a]]}),w)}}])}();