webpackJsonp([0],{"6hCB":function(t,a){},E51W:function(t,a){},GWga:function(t,a){},M8Hi:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=e("7+uW"),s={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var r=e("VU/8")({name:"App",created:function(){}},s,!1,function(t){e("GWga")},null,null).exports,n=e("/ocq"),i=e("LlRI"),u=e.n(i),l=e("nSX4"),m=e.n(l),c={directives:{autoscroll:l.autoscroll},name:"Dialog",props:{id:""},data:function(){return{dialogs:"",textarea:""}},created:function(){var t=this;u.a.ajaxSetup({headers:{Authorization:"Token "+sessionStorage.getItem("auth_token")}}),this.loadDialog(),setInterval(function(){t.loadDialog()},5e3)},methods:{loadDialog:function(){var t=this;u.a.ajax({url:"https://musicchat-django.herokuapp.com/api/v1/chat/chat/",type:"GET",data:{room:this.id},success:function(a){t.dialogs=a.data.data}})},sendMessage:function(){var t=this;u.a.ajax({url:"https://musicchat-django.herokuapp.com/api/v1/chat/chat/",type:"POST",data:{room:this.id,text:this.textarea},success:function(a){t.loadDialog()},error:function(t){alert("Вы не можете отправить пустое сообщение")}}),this.textarea=""},scrollToElement:function(){var t=this.$el.getElementsByClassName("scroll-to-me")[0];t&&t.scrollIntoView({behavior:"smooth"})}}},d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("mu-col",{attrs:{span:"8"}},[e("mu-container",{staticClass:"dialog"},t._l(t.dialogs,function(a){return e("mu-row",{directives:[{name:"autoscroll",rawName:"v-autoscroll:noscroll",value:"bottom",expression:"'bottom'",arg:"noscroll"}],attrs:{direction:"column","justify-content":"start","align-items":"end"}},[e("p",[e("strong",[t._v(t._s(a.user.username)+" ("+t._s(a.user.first_name)+" "+t._s(a.user.last_name)+")")])]),t._v(" "),e("p",[t._v(t._s(a.text))])])}),1),t._v(" "),e("mu-container",{staticClass:"message",attrs:{id:"app"}},[e("mu-row",[e("mu-text-field",{attrs:{placeholder:"сообщение","full-width":""},model:{value:t.textarea,callback:function(a){t.textarea=a},expression:"textarea"}}),t._v(" "),e("mu-button",{attrs:{round:"",color:"primary"},on:{click:t.sendMessage}},[t._v("Отправить")])],1)],1)],1)},staticRenderFns:[]};var p=e("VU/8")(c,d,!1,function(t){e("M8Hi")},"data-v-71ed395b",null).exports,h={name:"Room",components:{Dialog:p},data:function(){return{rooms:""}},mounted:function(){this.openDialog(1)},created:function(){u.a.ajaxSetup({headers:{Authorization:"Token "+sessionStorage.getItem("auth_token")}}),this.loadRoom()},methods:{loadRoom:function(){var t=this;u.a.ajax({url:"https://musicchat-django.herokuapp.com/api/v1/chat/room/",type:"GET",success:function(a){t.rooms=a.data.data}})},openDialog:function(t){this.$emit("openDialog",t)},AddRoom:function(){var t=this;u.a.ajax({url:"https://musicchat-django.herokuapp.com/api/v1/chat/room/",type:"POST",success:function(a){t.loadRoom()},error:function(t){alert(t.statusText)}})}}},f={render:function(){var t=this.$createElement,a=this._self._c||t;return a("mu-col",{staticClass:"rooms_list",attrs:{span:"4",sm:"3"}},[a("h3",[this._v("Это общий фид ---\x3e")])])},staticRenderFns:[]};var v=e("VU/8")(h,f,!1,function(t){e("icfx")},"data-v-3514fb6c",null).exports,_={name:"UserPage",components:{Home:w},data:function(){return{user:"",email:"",first_name:"",last_name:""}},created:function(){u.a.ajaxSetup({headers:{Authorization:"Token "+sessionStorage.getItem("auth_token")}})},mounted:function(){this.loadUser()},methods:{loadUser:function(){var t=this;u.a.ajax({url:"https://musicchat-django.herokuapp.com/auth/users/me/",type:"GET",success:function(a){t.user=a.data.attributes}})},changeUserEmail:function(){var t=this;u.a.ajax({url:"https://musicchat-django.herokuapp.com/auth/users/me/",type:"PATCH",data:{email:this.email},success:function(a){t.user=a.data.attributes}})},changeUserName:function(){var t=this;u.a.ajax({url:"https://musicchat-django.herokuapp.com/auth/users/me/",type:"PATCH",data:{first_name:this.first_name},success:function(a){t.user=a.data.attributes}}),this.first_name=""},changeUserLastName:function(){var t=this;u.a.ajax({url:"https://musicchat-django.herokuapp.com/auth/users/me/",type:"PATCH",data:{last_name:this.last_name},success:function(a){t.user=a.data.attributes}}),this.last_name=""},goHome:function(){this.$router.push({name:"home"})}}},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("mu-col",[e("p",{staticClass:"text"},[t._v("Страница пользователя "+t._s(t.user.username))]),t._v(" "),e("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.goHome},slot:"right"},[t._v("Домашняя страница")]),t._v(" "),e("small",[t._v("Внимание не отправляйте пустую форму, если не хотете потерять данные")]),t._v(" "),e("mu-container",{staticClass:"form"},[e("mu-container",[t._v("\n      Ваш Email: "+t._s(t.user.email)+"\n      "),e("mu-text-field",{model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),t._v(" "),e("mu-button",{attrs:{round:"",color:"primary"},on:{click:t.changeUserEmail}},[t._v("Сменить Email")])],1),t._v(" "),e("mu-container",[t._v("\n      Ваше имя: "+t._s(t.user.first_name)+"\n      "),e("mu-text-field",{model:{value:t.first_name,callback:function(a){t.first_name=a},expression:"first_name"}}),t._v(" "),e("mu-button",{attrs:{round:"",color:"primary"},on:{click:t.changeUserName}},[t._v("Сменить имя")])],1),t._v(" "),e("mu-container",[t._v("\n      Ваша фамилия: "+t._s(t.user.last_name)+"\n      "),e("mu-text-field",{model:{value:t.last_name,callback:function(a){t.last_name=a},expression:"last_name"}}),t._v(" "),e("mu-button",{attrs:{round:"",color:"primary"},on:{click:t.changeUserLastName}},[t._v("Сменить фамилию")])],1)],1)],1)},staticRenderFns:[]};var x=e("VU/8")(_,g,!1,function(t){e("UKXH")},"data-v-6e31a49f",null).exports,b={name:"Home",components:{Room:v,Dialog:p,UserPage:x},data:function(){return{dialog:{id:"",show:!1}}},computed:{auth:function(){if(sessionStorage.getItem("auth_token"))return!0}},methods:{goLogin:function(){this.$router.push({name:"login"})},logout:function(){sessionStorage.removeItem("auth_token"),window.location="/"},goRegistrate:function(){this.$router.push({name:"reg"})},GoUserPage:function(){this.$router.push({name:"usrpg"})},openDialog:function(t){this.dialog.id=t,this.dialog.show=!0}}},k={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("mu-container",[e("mu-appbar",{staticClass:"bar",staticStyle:{width:"100%"},attrs:{color:"primary"}},[t._v("\n    ЫЫЫ\n    "),t.auth?t._e():e("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.goLogin},slot:"right"},[t._v("Вход")]),t._v(" "),t.auth?e("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.logout},slot:"right"},[t._v("Выход")]):e("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.goRegistrate},slot:"right"},[t._v("Зарегистрироваться")]),t._v(" "),t.auth?e("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.GoUserPage},slot:"right"},[t._v("Личный кабинет")]):t._e()],1),t._v(" "),e("mu-row",[t.auth?e("h1"):e("h1",[t._v("Приветствуем Вас в самой прогрессивной сети, чтобы оставлять сообщения необходимо войти")])]),t._v(" "),e("mu-row",[t.auth?e("Room",{on:{openDialog:t.openDialog}}):t._e(),t._v(" "),t.dialog.show?e("Dialog",{attrs:{id:t.dialog.id}}):t._e()],1)],1)},staticRenderFns:[]};var w=e("VU/8")(b,k,!1,function(t){e("6hCB")},"data-v-a3844340",null).exports,F={name:"Login",data:function(){return{login:"",password:"",usernameRules:[{validate:function(t){return!!t},message:"Обязательное поле"}],passwordRules:[{validate:function(t){return!!t},message:"Вы не можете войти без пароля"}],validateForm:{username:"",password:""}}},methods:{submit:function(){this.$refs.form.validate().then(function(t){console.log("form valid: ",t)})},clear:function(){this.$refs.form.clear(),this.validateForm={username:"",password:"",isAgree:!1}},setLogin:function(){var t=this;u.a.ajax({url:"https://musicchat-django.herokuapp.com/auth/token/login/",type:"POST",data:{username:this.validateForm.username,password:this.validateForm.password},success:function(a){alert("Добро пожаловать"),sessionStorage.setItem("auth_token",a.data.attributes.auth_token),t.$router.push({name:"home"})},error:function(t){400===t.status&&alert("Логин или пароль неверен")}})},goHome:function(){this.$router.push({name:"home"})}}},R={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("mu-container",[e("mu-row",[t._v("\n    Пожалуйста, введите данные указанные при регистрации чтобы войти\n  ")]),t._v(" "),e("mu-form",{ref:"form",staticClass:"mu-form",attrs:{model:t.validateForm}},[e("mu-form-item",{attrs:{label:"Имя пользователя (логин)",prop:"username",rules:t.usernameRules}},[e("mu-text-field",{attrs:{prop:"username"},model:{value:t.validateForm.username,callback:function(a){t.$set(t.validateForm,"username",a)},expression:"validateForm.username"}})],1),t._v(" "),e("mu-form-item",{attrs:{label:"Пароль",prop:"password",rules:t.passwordRules}},[e("mu-text-field",{attrs:{type:"password",prop:"password"},model:{value:t.validateForm.password,callback:function(a){t.$set(t.validateForm,"password",a)},expression:"validateForm.password"}})],1),t._v(" "),e("mu-form-item",[e("mu-button",{attrs:{color:"primary"},on:{click:t.setLogin}},[t._v("войти")]),t._v(" "),e("mu-button",{on:{click:t.clear}},[t._v("сбросить")]),t._v(" "),e("mu-button",{on:{click:t.goHome}},[t._v("на главную")])],1)],1)],1)},staticRenderFns:[]};var $=e("VU/8")(F,R,!1,function(t){e("lUpe")},"data-v-0ab91ee9",null).exports,j={name:"Reg",data:function(){return{usernameRules:[{validate:function(t){return!!t},message:"Обязательное поле"},{validate:function(t){return t.length>=3},message:"Ваш логин не может быть короче 3 символов"}],passwordRules:[{validate:function(t){return!!t},message:"Обязательное поле"},{validate:function(t){return t.length>=10},message:"Пароль должен быть не короче 10 символов"}],validateForm:{username:"",password:"",email:"",first_name:"",last_name:""}}},methods:{goHome:function(){this.$router.push({name:"home"})},clear:function(){this.$refs.form.clear(),this.validateForm={username:"",password:"",email:"",first_name:"",last_name:""}},setReg:function(){var t=this;u.a.ajax({url:"https://musicchat-django.herokuapp.com/auth/users/",type:"POST",data:{username:this.validateForm.username,password:this.validateForm.password,email:this.validateForm.email,first_name:this.validateForm.first_name,last_name:this.validateForm.last_name},success:function(a){alert("Спасибо за регистрацию"),t.$router.push({name:"login"})},error:function(t){400===t.status&&alert("Данные не корректны. Пожалуйста, проверьте Ваш пароль. Он должен содержать как минимум одну букву латинского алфавита, а также он не должен быть слишком простым")}})}}},y={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("mu-container",[e("mu-row",{staticClass:"text"},[t._v("\n    Регистрация\n  ")]),t._v(" "),e("mu-form",{ref:"form",staticClass:"mu-demo-form",attrs:{model:t.validateForm}},[e("mu-form-item",{attrs:{label:"Имя",prop:"first_name"}},[e("mu-text-field",{attrs:{prop:"first_name"},model:{value:t.validateForm.first_name,callback:function(a){t.$set(t.validateForm,"first_name",a)},expression:"validateForm.first_name"}})],1),t._v(" "),e("mu-form-item",{attrs:{label:"Фамилия",prop:"last_name"}},[e("mu-text-field",{attrs:{prop:"last_name"},model:{value:t.validateForm.last_name,callback:function(a){t.$set(t.validateForm,"last_name",a)},expression:"validateForm.last_name"}})],1),t._v(" "),e("mu-form-item",{attrs:{label:"Имя пользователя (логин)",prop:"username",rules:t.usernameRules}},[e("mu-text-field",{attrs:{prop:"username"},model:{value:t.validateForm.username,callback:function(a){t.$set(t.validateForm,"username",a)},expression:"validateForm.username"}})],1),t._v(" "),e("mu-form-item",{attrs:{label:"Пароль",prop:"password",rules:t.passwordRules}},[e("mu-text-field",{attrs:{type:"text",prop:"password"},model:{value:t.validateForm.password,callback:function(a){t.$set(t.validateForm,"password",a)},expression:"validateForm.password"}})],1),t._v(" "),e("mu-form-item",{attrs:{label:"email",prop:"email"}},[e("mu-text-field",{attrs:{type:"text",prop:"email"},model:{value:t.validateForm.email,callback:function(a){t.$set(t.validateForm,"email",a)},expression:"validateForm.email"}})],1),t._v(" "),e("mu-form-item",[e("mu-button",{attrs:{color:"primary"},on:{click:t.setReg}},[t._v("Зарегистрироваться")]),t._v(" "),e("mu-button",{on:{click:t.clear}},[t._v("Сбросить")]),t._v(" "),e("mu-button",{on:{click:t.goHome}},[t._v("на главную")])],1)],1)],1)},staticRenderFns:[]};var U=e("VU/8")(j,y,!1,function(t){e("o9z3")},"data-v-f6fcdcc8",null).exports;o.a.use(n.a);var E=new n.a({routes:[{path:"/",name:"home",component:w},{path:"/login",name:"login",component:$},{path:"/reg",name:"reg",component:U},{path:"/usrpg",name:"usrpg",component:x}]}),H=e("aFc6");e("E51W");o.a.use(H.a),o.a.use(m.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:E,components:{App:r},template:"<App/>"})},UKXH:function(t,a){},icfx:function(t,a){},lUpe:function(t,a){},o9z3:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.a096847be46edbdca1e9.js.map