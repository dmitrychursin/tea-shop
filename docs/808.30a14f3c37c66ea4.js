"use strict";(self.webpackChunktea_shop=self.webpackChunktea_shop||[]).push([[808],{808:(T,s,u)=>{u.r(s),u.d(s,{ProductsModule:()=>A});var i=u(6895),n=u(646),p=u(8505),t=u(1571),a=u(773),m=u(529);const g=function(o){return["/products",o]};let f=(()=>{class o{constructor(){this.product={id:0,image:"",title:"",price:0,description:""}}}return o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["product-card"]],inputs:{product:"product"},decls:9,vars:6,consts:[[1,"card"],[1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title","fw-bold"],[1,"card-text"],[1,"btn","btn-primary","px-5",3,"routerLink"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"div",2)(3,"h5",3),t._uU(4),t.qZA(),t.TgZ(5,"p",4),t._uU(6),t.qZA(),t.TgZ(7,"a",5),t._uU(8,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),t.qZA()()()),2&r&&(t.xp6(1),t.s9C("src",e.product.image,t.LSH),t.xp6(3),t.Oqu(e.product.title),t.xp6(2),t.Oqu(e.product.description),t.xp6(1),t.Q6J("routerLink",t.VKq(4,g,e.product.id)))},dependencies:[n.rH],styles:[".card[_ngcontent-%COMP%]{height:100%;width:100%}.card-text[_ngcontent-%COMP%]{min-height:645px}"]}),o})();function h(o,c){1&o&&t._UZ(0,"product-card",6),2&o&&t.Q6J("product",c.$implicit)}function v(o,c){1&o&&(t.TgZ(0,"div",7),t._UZ(1,"div",8),t.qZA())}function Z(o,c){1&o&&(t.TgZ(0,"div",12),t._UZ(1,"div",13),t.qZA())}const b=function(o){return{product:o}},C=[{path:"",component:(()=>{class o{constructor(r,e,d){this.productService=r,this.http=e,this.router=d,this.products=[],this.loading=!1,this.subscriptionProductService=null}ngOnInit(){this.loading=!0,this.subscriptionProductService=this.productService.getProducts().pipe((0,p.b)(()=>{this.loading=!1})).subscribe({next:r=>{this.products=r},error:r=>{console.log(r),this.router.navigate(["/"])}})}ngOnDestroy(){this.subscriptionProductService?.unsubscribe()}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(a.M),t.Y36(m.eN),t.Y36(n.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["products-component"]],decls:8,vars:2,consts:[[1,"cards"],[1,"container"],[1,"text-center","my-5","fw-bold","fs-2","title-2"],[1,"row","row-cols-1","row-cols-md-2","row-cols-ms-2","g-3","pb-5"],[3,"product",4,"ngFor","ngForOf"],["class","loader-bg",4,"ngIf"],[3,"product"],[1,"loader-bg"],[1,"loader"]],template:function(r,e){1&r&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1",2),t._uU(3,"\u041d\u0430\u0448\u0438 \u0447\u0430\u0439\u043d\u044b\u0435 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438"),t.qZA(),t.TgZ(4,"div",1)(5,"div",3),t.YNc(6,h,1,1,"product-card",4),t.qZA(),t.YNc(7,v,2,0,"div",5),t.qZA()()()),2&r&&(t.xp6(6),t.Q6J("ngForOf",e.products),t.xp6(1),t.Q6J("ngIf",e.loading))},dependencies:[i.sg,i.O5,f]}),o})()},{path:":id",component:(()=>{class o{constructor(r,e,d){this.activatedRoute=r,this.productService=e,this.router=d,this.loading=!1,this.subscriptionActivatedRoute=null,this.product={id:0,image:"",title:"",price:0,description:""}}ngOnInit(){this.subscriptionActivatedRoute=this.activatedRoute.params.subscribe(r=>{this.loading=!0,r.id&&this.productService.getProduct(+r.id).pipe((0,p.b)(()=>{this.loading=!1})).subscribe({next:e=>{this.product=e},error:e=>{console.log(e),this.router.navigate(["/"])}})})}ngOnDestroy(){this.subscriptionActivatedRoute?.unsubscribe()}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(n.gz),t.Y36(a.M),t.Y36(n.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["product-component"]],decls:16,vars:8,consts:[[1,"cards"],[1,"container","justify-content-center"],[1,"text-center","my-5","fw-bold","fs-2","title-2"],[1,"row","g-3","justify-content-center"],[1,"col-lg-8","pb-5"],[1,"card"],[1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title","fw-bold","fs-3"],[1,"card-text"],["routerLink","/order",1,"btn","btn-primary","px-5","fs-5",3,"queryParams"],["class","loader-bg",4,"ngIf"],[1,"loader-bg"],[1,"loader"]],template:function(r,e){1&r&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3)(5,"div",4)(6,"div",5),t._UZ(7,"img",6),t.TgZ(8,"div",7)(9,"h5",8),t._uU(10),t.qZA(),t.TgZ(11,"p",9),t._uU(12),t.qZA(),t.TgZ(13,"a",10),t._uU(14,"\u041a\u0443\u043f\u0438\u0442\u044c"),t.qZA()()()()(),t.YNc(15,Z,2,0,"div",11),t.qZA()()),2&r&&(t.xp6(3),t.Oqu(e.product.title),t.xp6(4),t.s9C("src",e.product.image,t.LSH),t.xp6(3),t.Oqu(e.product.price+",00 \u0440\u0443\u0431"),t.xp6(2),t.Oqu(e.product.description),t.xp6(1),t.Q6J("queryParams",t.VKq(6,b,e.product.title)),t.xp6(2),t.Q6J("ngIf",e.loading))},dependencies:[i.O5,n.rH]}),o})()}];let l=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[n.Bz.forChild(C),n.Bz]}),o})();var y=u(4466);let A=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[i.ez,y.m,n.Bz,l,l]}),o})()}}]);