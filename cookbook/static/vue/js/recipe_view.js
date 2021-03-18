(function(e){function t(t){for(var s,r,c=t[0],o=t[1],l=t[2],u=0,p=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);d&&d(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],s=!0,c=1;c<i.length;c++){var o=i[c];0!==a[o]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=i[0]))}return e}var s={},a={recipe_view:0},n=[];function r(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=s,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(i,s,function(t){return e[t]}.bind(null,s));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=o;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("0671")},"0671":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("a026"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[e.loading?[i("loading-spinner")]:e._e(),e.loading?e._e():i("div",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12",staticStyle:{"text-align":"center"}},[i("h3",[e._v(e._s(e.recipe.name))])])]),i("div",{staticStyle:{"text-align":"center"}},[i("keywords",{attrs:{recipe:e.recipe}})],1),i("div",{staticClass:"row",staticStyle:{"margin-top":"8px"}},[i("div",{staticClass:"col-12",staticStyle:{"text-align":"center"}},[i("i",[e._v(e._s(e.recipe.description))])])]),i("hr"),i("div",{staticClass:"row"},[i("div",{staticClass:"col col-md-3"},[i("div",{staticClass:"row d-flex",staticStyle:{"padding-left":"16px"}},[e._m(0),i("div",{staticClass:"my-auto",staticStyle:{"padding-right":"4px"}},[i("span",{staticClass:"text-primary"},[i("b",[e._v(e._s(e._("Preparation")))])]),i("br"),e._v(" "+e._s(e.recipe.working_time)+" "+e._s(e._("min"))+" ")])])]),i("div",{staticClass:"col col-md-3"},[i("div",{staticClass:"row d-flex"},[e._m(1),i("div",{staticClass:"my-auto",staticStyle:{"padding-right":"4px"}},[i("span",{staticClass:"text-primary"},[i("b",[e._v(e._s(e._("Waiting")))])]),i("br"),e._v(" "+e._s(e.recipe.waiting_time)+" "+e._s(e._("min"))+" ")])])]),i("div",{staticClass:"col col-md-4 col-10"},[i("div",{staticClass:"row d-flex",staticStyle:{"padding-left":"16px"}},[e._m(2),i("div",{staticClass:"my-auto",staticStyle:{"padding-right":"4px"}},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.servings,expression:"servings",modifiers:{number:!0}}],staticClass:"form-control form-control-lg",staticStyle:{"border-width":"0px",border:"none",padding:"0px","padding-left":"0.5vw","padding-right":"8px","max-width":"80px"},attrs:{dir:"rtl",value:"1",maxlength:"3",type:"number"},domProps:{value:e.servings},on:{input:function(t){t.target.composing||(e.servings=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),i("div",{staticClass:"my-auto"},[i("b",[""===e.recipe.servings_text?[e._v(e._s(e._("Servings")))]:[e._v(e._s(e.recipe.servings_text))]],2)])])]),i("div",{staticClass:"col col-md-2 col-2 my-auto",staticStyle:{"text-align":"right","padding-right":"1vw"}},[i("recipe-context-menu",{attrs:{recipe:e.recipe,servings:e.servings}})],1)]),i("hr"),i("div",{staticClass:"row"},[e.recipe&&e.ingredient_count>0?i("div",{staticClass:"col-md-6 order-md-1 col-sm-12 order-sm-2 col-12 order-2"},[i("div",{staticClass:"card border-primary"},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col col-md-8"},[i("h4",{staticClass:"card-title"},[i("i",{staticClass:"fas fa-pepper-hot"}),e._v(" "+e._s(e._("Ingredients")))])])]),i("br"),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("table",{staticClass:"table table-sm"},[e._l(e.recipe.steps,(function(t){return[e._l(t.ingredients,(function(t){return[i("Ingredient",{key:t.id,attrs:{ingredient:t,ingredient_factor:e.ingredient_factor},on:{"checked-state-changed":e.updateIngredientCheckedState}})]}))]}))],2)])])])])]):e._e(),i("div",{staticClass:"col-12 order-1 col-sm-12 order-sm-1 col-md-6 order-md-2"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[null!==e.recipe.image?i("img",{staticClass:"img img-fluid rounded",staticStyle:{"max-height":"30vh"},attrs:{src:e.recipe.image,alt:e._("Recipe Image")}}):e._e()])]),i("div",{staticClass:"row",staticStyle:{"margin-top":"2vh","margin-bottom":"2vh"}},[i("div",{staticClass:"col-12"},[i("Nutrition",{attrs:{recipe:e.recipe,ingredient_factor:e.ingredient_factor}})],1)])])]),e.recipe.internal?e._e():[e.recipe.file_path.includes(".pdf")?i("div",[i("PdfViewer",{attrs:{recipe:e.recipe}})],1):e._e(),e.recipe.file_path.includes(".png")||e.recipe.file_path.includes(".jpg")||e.recipe.file_path.includes(".jpeg")||e.recipe.file_path.includes(".gif")?i("div",[i("ImageViewer",{attrs:{recipe:e.recipe}})],1):e._e()],e._l(e.recipe.steps,(function(t,s){return i("div",{key:t.id,staticStyle:{"margin-top":"1vh"}},[i("Step",{attrs:{recipe:e.recipe,step:t,ingredient_factor:e.ingredient_factor,index:s,start_time:e.start_time},on:{"update-start-time":e.updateStartTime,"checked-state-changed":e.updateIngredientCheckedState}})],1)}))],2),i("add-recipe-to-book",{attrs:{recipe:e.recipe}})],2)},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"my-auto",staticStyle:{"padding-right":"4px"}},[i("i",{staticClass:"fas fa-user-clock fa-2x text-primary"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"my-auto",staticStyle:{"padding-right":"4px"}},[i("i",{staticClass:"far fa-clock fa-2x text-primary"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"my-auto",staticStyle:{"padding-right":"4px"}},[i("i",{staticClass:"fas fa-pizza-slice fa-2x text-primary"})])}],r=i("b85c"),c=i("5f5b"),o=(i("2dd8"),i("7c15")),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("hr"),"TEXT"===e.step.type?[e.recipe.steps.length>1?i("div",{staticClass:"row"},[i("div",{staticClass:"col col-md-8"},[i("h5",{staticClass:"text-primary"},[e.step.name?[e._v(e._s(e.step.name))]:[e._v(e._s(e._("Step"))+" "+e._s(e.index+1))],0!==e.step.time?i("small",{staticClass:"text-muted",staticStyle:{"margin-left":"4px"}},[i("i",{staticClass:"fas fa-user-clock"}),e._v(" "+e._s(e.step.time)+" "+e._s(e._("min"))+" ")]):e._e(),""!==e.start_time?i("small",{staticClass:"d-print-none"},[i("b-link",{attrs:{id:"id_reactive_popover_"+e.step.id,href:"#"},on:{click:e.openPopover}},[e._v(" "+e._s(e.moment(e.start_time).add(e.step.time_offset,"minutes").format("HH:mm"))+" ")])],1):e._e()],2)]),i("div",{staticClass:"col col-md-4",staticStyle:{"text-align":"right"}},[i("b-button",{staticClass:"shadow-none",class:{"text-primary":e.details_visible,"text-success":!e.details_visible},staticStyle:{border:"none",background:"none"},on:{click:function(t){e.details_visible=!e.details_visible}}},[i("i",{staticClass:"far fa-check-circle"})])],1)]):e._e(),i("b-collapse",{attrs:{id:"collapse-1"},model:{value:e.details_visible,callback:function(t){e.details_visible=t},expression:"details_visible"}},[i("div",{staticClass:"row"},[e.step.ingredients.length>0&&e.recipe.steps.length>1?i("div",{staticClass:"col col-md-4"},[i("table",{staticClass:"table table-sm"},[e._l(e.step.ingredients,(function(t){return[i("Ingredient",{key:t.id,attrs:{ingredient:t,ingredient_factor:e.ingredient_factor},on:{"checked-state-changed":function(i){return e.$emit("checked-state-changed",t)}}})]}))],2)]):e._e(),i("div",{staticClass:"col",class:{"col-md-8":e.recipe.steps.length>1,"col-md-12":e.recipe.steps.length<=1}},[i("compile-component",{attrs:{code:e.step.ingredients_markdown,ingredient_factor:e.ingredient_factor}})],1)])])]:e._e(),"TIME"===e.step.type?[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-8 offset-md-2",staticStyle:{"text-align":"center"}},[i("h4",{staticClass:"text-primary"},[e.step.name?[e._v(e._s(e.step.name))]:[e._v(e._s(e._("Step"))+" "+e._s(e.index+1))]],2),0!==e.step.time?i("span",{staticClass:"text-muted",staticStyle:{"margin-left":"4px"}},[i("i",{staticClass:"fa fa-stopwatch"}),e._v(" "+e._s(e.step.time)+" "+e._s(e._("min")))]):e._e(),""!==e.start_time?i("b-link",{staticClass:"d-print-none",attrs:{id:"id_reactive_popover_"+e.step.id,href:"#"},on:{click:e.openPopover}},[e._v(" "+e._s(e.moment(e.start_time).add(e.step.time_offset,"minutes").format("HH:mm"))+" ")]):e._e()],1),i("div",{staticClass:"col-md-2",staticStyle:{"text-align":"right"}},[i("b-button",{staticClass:"shadow-none",class:{"text-primary":e.details_visible,"text-success":!e.details_visible},staticStyle:{border:"none",background:"none"},on:{click:function(t){e.details_visible=!e.details_visible}}},[i("i",{staticClass:"far fa-check-circle"})])],1)]),i("b-collapse",{attrs:{id:"collapse-1"},model:{value:e.details_visible,callback:function(t){e.details_visible=t},expression:"details_visible"}},[""!==e.step.instruction?i("div",{staticClass:"row"},[i("div",{staticClass:"col col-md-12",staticStyle:{"text-align":"center"}},[i("compile-component",{attrs:{code:e.step.ingredients_markdown,ingredient_factor:e.ingredient_factor}})],1)]):e._e()])]:e._e(),""!==e.start_time?i("div",[i("b-popover",{ref:"id_reactive_popover_"+e.step.id,attrs:{target:"id_reactive_popover_"+e.step.id,triggers:"click",placement:"bottom",title:e._("Step start time")}},[i("div",[i("b-form-group",{staticClass:"mb-1",attrs:{label:"Time","label-for":"popover-input-1","label-cols":"3"}},[i("b-form-input",{attrs:{type:"datetime-local",id:"popover-input-1",size:"sm"},model:{value:e.set_time_input,callback:function(t){e.set_time_input=t},expression:"set_time_input"}})],1)],1),i("div",{staticClass:"row",staticStyle:{"margin-top":"1vh"}},[i("div",{staticClass:"col-12",staticStyle:{"text-align":"right"}},[i("b-button",{staticStyle:{"margin-right":"8px"},attrs:{size:"sm",variant:"secondary"},on:{click:e.closePopover}},[e._v("Cancel")]),i("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:e.updateTime}},[e._v("Ok")])],1)])])],1):e._e()],2)},d=[],u=(i("a9e3"),i("fa7d")),p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("tr",{on:{click:function(t){return e.$emit("checked-state-changed",e.ingredient)}}},[e.ingredient.is_header?[i("td",{attrs:{colspan:"5"}},[i("b",[e._v(e._s(e.ingredient.note))])])]:[i("td",[e.ingredient.checked?i("i",{staticClass:"far fa-check-circle text-success"}):e._e(),e.ingredient.checked?e._e():i("i",{staticClass:"far fa-check-circle text-primary"})]),i("td",[0!==e.ingredient.amount?i("span",{domProps:{innerHTML:e._s(e.calculateAmount(e.ingredient.amount))}}):e._e()]),i("td",[null===e.ingredient.unit||e.ingredient.no_amount?e._e():i("span",[e._v(e._s(e.ingredient.unit.name))])]),i("td",[null!==e.ingredient.food?[null!==e.ingredient.food.recipe?i("a",{attrs:{href:e.resolveDjangoUrl("view_recipe",e.ingredient.food.recipe),target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(e.ingredient.food.name))]):e._e(),null===e.ingredient.food.recipe?i("span",[e._v(e._s(e.ingredient.food.name))]):e._e()]:e._e()],2),i("td",[e.ingredient.note?i("div",[i("span",{directives:[{name:"b-popover",rawName:"v-b-popover.hover",value:e.ingredient.note,expression:"ingredient.note",modifiers:{hover:!0}}],staticClass:"d-print-none"},[i("i",{staticClass:"far fa-comment"})]),i("div",{staticClass:"d-none d-print-block"},[i("i",{staticClass:"far fa-comment-alt"}),e._v(" "+e._s(e.ingredient.note)+" ")])]):e._e()])]],2)},f=[],m={name:"Ingredient",props:{ingredient:Object,ingredient_factor:{type:Number,default:1}},mixins:[u["b"]],data:function(){return{checked:!1}},methods:{calculateAmount:function(e){return Object(u["d"])(e,this.ingredient_factor)}}},_=m,v=i("2877"),b=Object(v["a"])(_,p,f,!1,null,null,null),g=b.exports,h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i(e.compiled,{tag:"component",attrs:{ingredient_factor:e.ingredient_factor,code:e.code}})],1)},j=[],y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{domProps:{innerHTML:e._s(e.calculateAmount(e.number))}})},C=[],k={name:"ScalableNumber",props:{number:Number,factor:{type:Number,default:4}},methods:{calculateAmount:function(e){return Object(u["d"])(e,this.factor)}}},w=k,x=Object(v["a"])(w,y,C,!1,null,null,null),O=x.exports,S={name:"CompileComponent",props:["code","ingredient_factor"],data:function(){return{compiled:null}},mounted:function(){this.compiled=s["default"].component("compiled-component",{props:["ingredient_factor","code"],components:{ScalableNumber:O},template:"<div>".concat(this.code,"</div>")})}},E=S,T=Object(v["a"])(E,h,j,!1,null,null,null),$=T.exports,P=i("c1df"),M=i.n(P);s["default"].prototype.moment=M.a;var z={name:"Step",mixins:[u["a"]],components:{Ingredient:g,CompileComponent:$},props:{step:Object,ingredient_factor:Number,index:Number,recipe:Object,start_time:String},data:function(){return{details_visible:!0,set_time_input:""}},mounted:function(){this.set_time_input=M()(this.start_time).add(this.step.time_offset,"minutes").format("yyyy-MM-DDTHH:mm")},methods:{calculateAmount:function(e){return Object(u["d"])(e,this.ingredient_factor)},updateTime:function(){var e=M()(this.set_time_input).add(-1*this.step.time_offset,"minutes").format("yyyy-MM-DDTHH:mm");this.$emit("update-start-time",e),this.closePopover()},closePopover:function(){this.$refs["id_reactive_popover_".concat(this.step.id)].$emit("close")},openPopover:function(){this.$refs["id_reactive_popover_".concat(this.step.id)].$emit("open")}}},N=z,D=Object(v["a"])(N,l,d,!1,null,null,null),R=D.exports,U=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"dropdown"},[e._m(0),i("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"dropdownMenuLink"}},[i("a",{staticClass:"dropdown-item",attrs:{href:e.resolveDjangoUrl("edit_recipe",e.recipe.id)}},[i("i",{staticClass:"fas fa-pencil-alt fa-fw"}),e._v(" "+e._s(e._("Edit")))]),e.recipe.internal?e._e():i("a",{staticClass:"dropdown-item",attrs:{href:e.resolveDjangoUrl("edit_convert_recipe",e.recipe.id)}},[i("i",{staticClass:"fas fa-exchange-alt fa-fw"}),e._v(" "+e._s(e._("Convert to internal recipe")))]),i("button",{staticClass:"dropdown-item",on:{click:function(t){return e.$bvModal.show("id_modal_add_book")}}},[i("i",{staticClass:"fas fa-bookmark fa-fw"}),e._v(" "+e._s(e._("Add to Book"))+" ")]),e.recipe.internal?i("a",{staticClass:"dropdown-item",attrs:{href:e.resolveDjangoUrl("view_shopping")+"?r=["+e.recipe.id+","+e.servings_value+"]",target:"_blank",rel:"noopener noreferrer"}},[i("i",{staticClass:"fas fa-shopping-cart fa-fw"}),e._v(" "+e._s(e._("Add to Shopping"))+" ")]):e._e(),i("a",{staticClass:"dropdown-item",attrs:{href:e.resolveDjangoUrl("new_meal_plan")+"?recipe="+e.recipe.id,target:"_blank",rel:"noopener noreferrer"}},[i("i",{staticClass:"fas fa-calendar fa-fw"}),e._v(" "+e._s(e._("Add to Plan"))+" ")]),i("button",{staticClass:"dropdown-item",on:{click:function(t){return e.$bvModal.show("id_modal_cook_log")}}},[i("i",{staticClass:"fas fa-clipboard-list fa-fw"}),e._v(" "+e._s(e._("Log Cooking"))+" ")]),i("button",{staticClass:"dropdown-item",attrs:{onclick:"window.print()"}},[i("i",{staticClass:"fas fa-print fa-fw"}),e._v(" "+e._s(e._("Print"))+" ")]),i("a",{staticClass:"dropdown-item",attrs:{href:e.resolveDjangoUrl("view_export")+"?r="+e.recipe.id,target:"_blank",rel:"noopener noreferrer"}},[i("i",{staticClass:"fas fa-file-export fa-fw"}),e._v(" "+e._s(e._("Export")))]),e.recipe.internal?i("a",{staticClass:"dropdown-item",attrs:{href:e.resolveDjangoUrl("new_share_link",e.recipe.id),target:"_blank",rel:"noopener noreferrer"}},[i("i",{staticClass:"fas fa-share-alt fa-fw"}),e._v(" "+e._s(e._("Share")))]):e._e()])]),i("cook-log",{attrs:{recipe:e.recipe}})],1)},H=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a",{staticClass:"btn shadow-none",attrs:{href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[i("i",{staticClass:"fas fa-ellipsis-v"})])}],I=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("b-modal",{staticClass:"modal",attrs:{id:"id_modal_cook_log",title:e._("Log Recipe Cooking"),"ok-title":e._("Save"),"cancel-title":e._("Close")},on:{ok:function(t){return e.logCook()}}},[i("p",[e._v(e._s(e._("All fields are optional and can be left empty.")))]),i("form",[i("label",{attrs:{for:"id_log_servings"}},[e._v(e._s(e._("Servings")))]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.logObject.servings,expression:"logObject.servings"}],staticClass:"form-control",attrs:{type:"number",id:"id_log_servings"},domProps:{value:e.logObject.servings},on:{input:function(t){t.target.composing||e.$set(e.logObject,"servings",t.target.value)}}}),i("label",{staticStyle:{"margin-top":"2vh"}},[e._v(e._s(e._("Rating"))+" - "),i("span",{attrs:{id:"id_rating_show"}},[e._v(e._s(e.logObject.rating)+"/5")])]),i("b-form-rating",{model:{value:e.logObject.rating,callback:function(t){e.$set(e.logObject,"rating",t)},expression:"logObject.rating"}}),i("label",{staticStyle:{"margin-top":"2vh"},attrs:{for:"id_date"}},[e._v(e._s(e._("Date")))]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.logObject.created_at,expression:"logObject.created_at"}],staticClass:"form-control",attrs:{type:"datetime-local",id:"id_date"},domProps:{value:e.logObject.created_at},on:{input:function(t){t.target.composing||e.$set(e.logObject,"created_at",t.target.value)}}})],1)])],1)},A=[];s["default"].prototype.moment=M.a,s["default"].use(c["a"]);var L={name:"CookLog",mixins:[u["a"]],props:{recipe:Object},data:function(){return{logObject:{recipe:this.recipe.id,servings:0,rating:0,created_at:M()().format("yyyy-MM-DDTHH:mm")}}},methods:{logCook:function(){Object(o["e"])(this.logObject)}}},B=L,V=Object(v["a"])(B,I,A,!1,null,null,null),F=V.exports,q={name:"RecipeContextMenu",mixins:[u["b"],u["a"]],components:{CookLog:F},data:function(){return{servings_value:0}},props:{recipe:Object,servings:{type:Number,default:-1}},mounted:function(){this.servings_value=-1===this.servings?this.recipe.servings:this.servings}},J=q,K=Object(v["a"])(J,U,H,!1,null,null,null),G=K.exports,X=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("iframe",{staticStyle:{border:"none"},attrs:{src:e.pdfUrl,width:"100%",height:"700px"}})])},W=[],Q={name:"PdfViewer",mixins:[u["b"]],props:{recipe:Object},computed:{pdfUrl:function(){return"/static/pdfjs/viewer.html?file="+Object(u["g"])("api_get_recipe_file",this.recipe.id)}}},Y=Q,Z=Object(v["a"])(Y,X,W,!1,null,null,null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"text-align":"center"}},[i("b-img",{attrs:{src:e.pdfUrl,alt:e._("External Recipe Image")}})],1)},ie=[],se={name:"ImageViewer",mixins:[u["a"]],props:{recipe:Object},computed:{pdfUrl:function(){return Object(u["g"])("api_get_recipe_file",this.recipe.id)}}},ae=se,ne=Object(v["a"])(ae,te,ie,!1,null,null,null),re=ne.exports,ce=function(){var e=this,t=e.$createElement,i=e._self._c||t;return null!==e.recipe.nutrition?i("div",[i("div",{staticClass:"card border-success"},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("h4",{staticClass:"card-title"},[i("i",{staticClass:"fas fa-carrot"}),e._v(" "+e._s(e._("Nutrition")))])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6"},[i("i",{staticClass:"fas fa-fire fa-fw text-primary"}),e._v(" "+e._s(e._("Calories"))+" ")]),i("div",{staticClass:"col-6"},[i("span",{domProps:{innerHTML:e._s(e.calculateAmount(e.recipe.nutrition.calories))}}),e._v(" kcal ")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6"},[i("i",{staticClass:"fas fa-bread-slice fa-fw text-primary"}),e._v(" "+e._s(e._("Carbohydrates"))+" ")]),i("div",{staticClass:"col-6"},[i("span",{domProps:{innerHTML:e._s(e.calculateAmount(e.recipe.nutrition.carbohydrates))}}),e._v(" g ")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6"},[i("i",{staticClass:"fas fa-cheese fa-fw text-primary"}),e._v(" "+e._s(e._("Fats"))+" ")]),i("div",{staticClass:"col-6"},[i("span",{domProps:{innerHTML:e._s(e.calculateAmount(e.recipe.nutrition.fats))}}),e._v(" g ")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6"},[i("i",{staticClass:"fas fa-drumstick-bite fa-fw text-primary"}),e._v(" "+e._s(e._("Proteins"))+" ")]),i("div",{staticClass:"col-6"},[i("span",{domProps:{innerHTML:e._s(e.calculateAmount(e.recipe.nutrition.proteins))}}),e._v(" g ")])])])])]):e._e()},oe=[],le={name:"Nutrition",mixins:[u["a"]],props:{recipe:Object,ingredient_factor:Number},methods:{calculateAmount:function(e){return Object(u["d"])(e,this.ingredient_factor)}}},de=le,ue=Object(v["a"])(de,ce,oe,!1,null,null,null),pe=ue.exports,fe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.recipe.keywords.length>0?i("div",e._l(e.recipe.keywords,(function(t){return i("small",{key:t.id,staticStyle:{padding:"2px"}},[e._v(" "+e._s(t.icon)+" "+e._s(t.name)+" ")])})),0):e._e()},me=[],_e={name:"Keywords",props:{recipe:Object}},ve=_e,be=Object(v["a"])(ve,fe,me,!1,null,null,null),ge=be.exports,he=i("d76c"),je=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("b-modal",{staticClass:"modal",attrs:{id:"id_modal_add_book",title:e._("Add to Book"),"ok-title":e._("Add"),"cancel-title":e._("Close")},on:{ok:function(t){return e.addToBook()}}},[i("multiselect",{attrs:{options:e.books,"preserve-search":!0,placeholder:e._("Select Book"),label:"name","track-by":"id",id:"id_books",multiple:!1},on:{"search-change":e.loadBook},model:{value:e.selected_book,callback:function(t){e.selected_book=t},expression:"selected_book"}})],1)],1)},ye=[],Ce=i("8e5f"),ke=i.n(Ce);s["default"].prototype.moment=M.a,s["default"].use(c["a"]);var we={name:"AddRecipeToBook",mixins:[u["a"]],components:{Multiselect:ke.a},props:{recipe:Object},data:function(){return{books:[],selected_book:null}},mounted:function(){this.loadBook("")},methods:{loadBook:function(e){var t=this;Object(o["b"])(e).then((function(e){t.books=e}))},addToBook:function(){Object(o["a"])({recipe:this.recipe.id,book:this.selected_book.id})}}},xe=we,Oe=(i("60bc"),Object(v["a"])(xe,je,ye,!1,null,null,null)),Se=Oe.exports;s["default"].prototype.moment=M.a,s["default"].use(c["a"]);var Ee={name:"RecipeView",mixins:[u["a"],u["b"],u["c"]],components:{PdfViewer:ee,ImageViewer:re,Ingredient:g,Step:R,RecipeContextMenu:G,Nutrition:pe,Keywords:ge,LoadingSpinner:he["a"],AddRecipeToBook:Se},computed:{ingredient_factor:function(){return this.servings/this.recipe.servings}},data:function(){return{loading:!0,recipe:void 0,ingredient_count:0,servings:1,start_time:""}},mounted:function(){this.loadRecipe(window.RECIPE_ID)},methods:{loadRecipe:function(e){var t=this;Object(o["d"])(e).then((function(e){0!==window.USER_SERVINGS&&(e.servings=window.USER_SERVINGS),t.servings=e.servings;var i,s=0,a=Object(r["a"])(e.steps);try{for(a.s();!(i=a.n()).done;){var n=i.value;t.ingredient_count+=n.ingredients.length;var c,o=Object(r["a"])(n.ingredients);try{for(o.s();!(c=o.n()).done;){var l=c.value;t.$set(l,"checked",!1)}}catch(d){o.e(d)}finally{o.f()}n.time_offset=s,s+=n.time}}catch(d){a.e(d)}finally{a.f()}s>0&&(t.start_time=M()().format("yyyy-MM-DDTHH:mm")),t.recipe=e,t.loading=!1}))},updateStartTime:function(e){this.start_time=e},updateIngredientCheckedState:function(e){var t,i=Object(r["a"])(this.recipe.steps);try{for(i.s();!(t=i.n()).done;){var s,a=t.value,n=Object(r["a"])(a.ingredients);try{for(n.s();!(s=n.n()).done;){var c=s.value;c.id===e.id&&this.$set(c,"checked",!c.checked)}}catch(o){n.e(o)}finally{n.f()}}}catch(o){i.e(o)}finally{i.f()}}}},Te=Ee,$e=Object(v["a"])(Te,a,n,!1,null,null,null),Pe=$e.exports;s["default"].config.productionTip=!1,new s["default"]({render:function(e){return e(Pe)}}).$mount("#app")},4678:function(e,t,i){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=n(e);return i(t)}function n(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=n,e.exports=a,a.id="4678"},"7c15":function(e,t,i){"use strict";i.d(t,"d",(function(){return r})),i.d(t,"c",(function(){return c})),i.d(t,"e",(function(){return o})),i.d(t,"b",(function(){return l})),i.d(t,"a",(function(){return d}));var s=i("bc3a"),a=i.n(s),n=i("fa7d");function r(e){var t=Object(n["g"])("api:recipe-detail",e);return void 0!==window.SHARE_UID&&(t+="?share="+window.SHARE_UID),a.a.get(t).then((function(e){return e.data})).catch((function(e){u(e,"There was an error loading a resource!","danger")}))}function c(e){var t=Object(n["g"])("api:importlog-detail",e);return a.a.get(t).then((function(e){return e.data})).catch((function(e){u(e,"There was an error loading a resource!","danger")}))}function o(e){return a.a.post(Object(n["g"])("api:cooklog-list"),e).then((function(e){Object(n["f"])("Saved","Cook Log entry saved!","success")})).catch((function(e){u(e,"There was an error creating a resource!","danger")}))}function l(e){return a.a.get(Object(n["g"])("api:recipebook-list")+"?query="+e).then((function(e){return e.data})).catch((function(e){u(e,"There was an error creating a resource!","danger")}))}function d(e){return a.a.post(Object(n["g"])("api:recipebookentry-list"),e).then((function(e){Object(n["f"])("Saved","Recipe Book entry saved!","success")})).catch((function(e){u(e,"There was an error creating a resource!","danger")}))}function u(e,t){if("response"in e){console.log(e.response);var i="statusText"in e.response?e.response.statusText:Object(n["e"])("Error");t+="\n\n"+JSON.stringify(e.response.data),Object(n["f"])(i,t,"danger")}else Object(n["f"])("Error",t,"danger"),console.log(e)}a.a.defaults.xsrfCookieName="csrftoken",a.a.defaults.xsrfHeaderName="X-CSRFTOKEN"},d76c:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row"},[i("div",{staticClass:"col",staticStyle:{"text-align":"center"}},[i("i",{staticClass:"fas fa-spinner fa-spin fa-10x"})])])}],n={name:"LoadingSpinner",props:{recipe:Object}},r=n,c=i("2877"),o=Object(c["a"])(r,s,a,!1,null,null,null);t["a"]=o.exports},fa7d:function(e,t,i){"use strict";i.d(t,"c",(function(){return n})),i.d(t,"f",(function(){return r})),i.d(t,"a",(function(){return c})),i.d(t,"e",(function(){return o})),i.d(t,"b",(function(){return l})),i.d(t,"g",(function(){return d})),i.d(t,"d",(function(){return p}));i("99af");var s=i("59e4");function a(e,t,i){var s=Math.floor(e),a=1,n=s+1,r=1;if(e!==s)while(a<=t&&r<=t){var c=(s+n)/(a+r);if(e===c){a+r<=t?(a+=r,s+=n,r=t+1):a>r?r=t+1:a=t+1;break}e<c?(n=s+n,r=a+r):(s+=n,a+=r)}if(a>t&&(a=r,s=n),!i)return[0,s,a];var o=Math.floor(s/a);return[o,s-o*a,a]}var n={methods:{makeToast:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return r(e,t,i)}}};function r(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=new s["a"];a.$bvToast.toast(t,{title:e,variant:i,toaster:"b-toaster-top-center",solid:!0})}var c={methods:{_:function(e){return o(e)}}};function o(e){return window.gettext(e)}var l={methods:{resolveDjangoUrl:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return d(e,t)}}};function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!==t?window.Urls[e](t):window.Urls[e]()}function u(e){return window.USER_PREF[e]}function p(e,t){if(u("use_fractions")){var i="",s=a(e*t,9,!0);return s[0]>0&&(i+=s[0]),s[1]>0&&(i+=" <sup>".concat(s[1],"</sup>&frasl;<sub>").concat(s[2],"</sub>")),i}return f(e*t)}function f(e){var t=u("user_fractions")?u("user_fractions"):2;return+(Math.round(e+"e+".concat(t))+"e-".concat(t))}}});