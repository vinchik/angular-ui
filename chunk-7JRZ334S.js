import{$ as p,A as J,Aa as M,Ca as Ce,D as C,Fb as ye,G as u,Gb as Me,H as g,Ha as q,Ia as H,Ja as we,K as fe,Ka as z,La as D,Lb as ke,M as B,O as l,Ob as oe,P as v,Pb as Ae,Sb as U,T as h,Tb as k,U as c,W as d,X as a,Y as A,Z as x,Za as be,_,b as le,d as ce,da as ee,e as me,ea as te,fa as ie,fb as W,ga as s,gb as P,ha as E,hb as ne,ia as X,ib as I,j as pe,ja as w,jb as Se,ka as b,kb as G,l as ue,la as S,lb as Q,m as ge,ma as y,mb as K,oa as ve,p as Z,pb as F,qb as V,sa as xe,ta as T,u as R,ua as L,v as _e,w as j,y as he}from"./chunk-JQ6P2Q5K.js";import{a as de,b as se}from"./chunk-2VMXMS7J.js";var Ee=(()=>{let r=class r{};r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=C({type:r,selectors:[["app-admin"]],standalone:!0,features:[y],decls:1,vars:0,template:function(e,i){e&1&&A(0,"router-outlet")},dependencies:[we]});let n=r;return n})();var O=(()=>{let r=class r{constructor(t,e){this.http=t,this.store=e,this.allWordsUrl=`${k.apiUrl}/admin/words`,this.baseDefinitionsUrl=`${k.apiUrl}/admin/definitions`,this.baseExamplesUrl=`${k.apiUrl}/admin/examples`,this.baseTranslationsUrl=`${k.apiUrl}/admin/translations`,this.saveWordUrl=`${k.apiUrl}/admin/words`,this.getAudioUrl=i=>`https://api.elevenlabs.io/v1/text-to-speech/${i}`,this.getSaveDefinitionsUrl=i=>`${k.apiUrl}/admin/words/${i}/definitions`,this.getSaveExamplesUrl=i=>`${k.apiUrl}/admin/words/${i}/example`,this.getSaveTranslationsUrl=i=>`${k.apiUrl}/admin/words/${i}/translations`,this.updatePhrasePronunciationUrl=(i,m)=>`${k.apiUrl}/admin/dialogs/${i}/phrase/${m}/pronunciation`,this.getWordBreakdownUrl=i=>`${k.apiUrl}/admin/breakdown/${i}`,this.dialogsUrl=`${k.apiUrl}/admin/dialogs`,this.audioVoices={word:"onwK4e9ZLuTAKqWW03F9",Rachel:"21m00Tcm4TlvDq8ikWAM",Drew:"29vD33N1CtxCmqQRPOHJ",Clyde:"2EiwWnXFnvU5JabPnv8n",Paul:"5Q0t7uMcjvnagumLfvZi",Domi:"AZnzlk1XvdvUeBnXmlld",Dave:"CYw3kZ02Hs0563khs1Fj",Fin:"D38z5RcWu1voky8WS1ja",Sarah:"EXAVITQu4vr4xnSDxMaL",Antoni:"ErXwobaYiN019PkySvjV",Thomas:"GBv7mTt0atIp3Br8iCZE",Charlie:"IKne3meq5aSn9XLyUdCD",George:"JBFqnCBsd6RMkjVDRZzb",Elli:"MF3mGyEYCl7XYWbV9V6O",Callum:"N2lVS1w4EtoT3dr4eOWO",Patrick:"ODq5zmih8GrVes37Dizd",Harry:"SOYHLrjzK2X1ezoPC6cr",Liam:"TX3LPaxmHKxFdv7VOQHJ",Dorothy:"ThT5KcBeYPX3keUQqHPh",Josh:"TxGEqnHWrfWFTfGW9XjX",Matilda:"XrExE9yKIg1WjnnlVkGX",Michael:"flq6f7yk4E4fJM5XTYuZ",Gigi:"jBpfuIE2acCO8z3wKNLl",Freya:"jsCqWAovK2LkecY7zXl4",Grace:"oWAxZDx7w5VEj9dCyTzz"},this.audioModelId="eleven_multilingual_v2"}getToken(){return this.store.selectSnapshot(ye.token)}updatePhrasePronunciation(t,e,i){return this.http.patch(this.updatePhrasePronunciationUrl(t,e),i,{headers:new M({Authorization:`Bearer ${this.getToken()}`})})}getAllDialogs(){return this.http.get(this.dialogsUrl,{headers:new M({Authorization:`Bearer ${this.getToken()}`})})}getAllWords(){return this.http.get(this.allWordsUrl,{headers:new M({Authorization:`Bearer ${this.getToken()}`})})}getDefinitions(t){return this.http.get(`${this.baseDefinitionsUrl}/${t}`,{headers:new M({Authorization:`Bearer ${this.getToken()}`})})}getExamples(t){return this.http.get(`${this.baseExamplesUrl}/${t}`,{headers:new M({Authorization:`Bearer ${this.getToken()}`})})}getTranslations(t){return this.http.get(`${this.baseTranslationsUrl}/${t}`,{headers:new M({Authorization:`Bearer ${this.getToken()}`})})}saveWord(t){return this.http.post(this.saveWordUrl,t,{headers:new M({Authorization:`Bearer ${this.getToken()}`})})}getWordBreakDown(t){return this.http.get(this.getWordBreakdownUrl(t),{headers:new M({Authorization:`Bearer ${this.getToken()}`})})}saveDefinitions(t,e){return this.http.post(this.getSaveDefinitionsUrl(t),{definitions:e},{headers:new M({Authorization:`Bearer ${this.getToken()}`})})}saveTranslations(t,e){return this.http.post(this.getSaveTranslationsUrl(t),{translations:e},{headers:new M({Authorization:`Bearer ${this.getToken()}`})})}saveExample(t,e){return this.http.post(this.getSaveExamplesUrl(t),e,{headers:new M({Authorization:`Bearer ${this.getToken()}`})})}getAudioForPhrase(t,e){let i=e||Ae(Me(this.audioVoices)),m=this.audioVoices[i],f=this.getAudioUrl(m),Y={text:t,model_id:this.audioModelId};return this.http.post(f,Y,{responseType:"blob",headers:new M({Accept:"audio/mpeg","Content-Type":"application/json","xi-api-key":"877030f988b65342aa6ad0eaccc49b7d"})})}saveDialog(t){return this.http.post(this.dialogsUrl,{dialog:t},{headers:new M({Authorization:`Bearer ${this.getToken()}`})})}};r.\u0275fac=function(e){return new(e||r)(J(Ce),J(be))},r.\u0275prov=he({token:r,factory:r.\u0275fac,providedIn:"root"});let n=r;return n})();function Fe(n,r){if(n&1){let o=x();d(0,"div",4),_("click",function(){let e=u(o).$implicit,i=p();return g(i.selectClick(e))}),s(1),a()}if(n&2){let o=r.$implicit;l(),E(o.word)}}var Te=(()=>{let r=class r{constructor(t,e){this.adminService=t,this.router=e,this.wordList=[],this.search=""}ngOnInit(){this.adminService.getAllWords().subscribe({next:t=>this.wordList=t})}getWordData(){return this.wordList.filter(t=>t.word.includes(this.search))}selectClick(t){this.router.navigate([`admin/edit-word/${t.id}`])}addNewWord(){this.router.navigate(["admin/create-word"])}addNewDialog(){this.router.navigate(["admin/create-dialog"])}openDialogsList(){this.router.navigate(["admin/dialogs-list"])}};r.\u0275fac=function(e){return new(e||r)(v(O),v(z))},r.\u0275cmp=C({type:r,selectors:[["app-admin-word-table"]],standalone:!0,features:[y],decls:12,vars:2,consts:[[1,"admin-word-table"],[1,"btn",3,"click"],["type","text",1,"admin-input-text",3,"ngModelChange","ngModel"],["class","word-list-data",3,"click",4,"ngFor","ngForOf"],[1,"word-list-data",3,"click"]],template:function(e,i){e&1&&(d(0,"div",0)(1,"div")(2,"button",1),_("click",function(){return i.addNewWord()}),s(3,"Add new word"),a(),d(4,"button",1),_("click",function(){return i.addNewDialog()}),s(5,"Add new dialog"),a(),d(6,"button",1),_("click",function(){return i.openDialogsList()}),s(7,"Open Dialogs List"),a()(),d(8,"div"),s(9," Search: "),d(10,"input",2),S("ngModelChange",function(f){return b(i.search,f)||(i.search=f),f}),a(),h(11,Fe,2,1,"div",3),a()()),e&2&&(l(10),w("ngModel",i.search),l(),c("ngForOf",i.getWordData()))},dependencies:[V,W,P,F,I,T],styles:[".admin-word-table[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{cursor:pointer;outline:0;display:inline-block;font-weight:400;line-height:1.5;text-align:center;background-color:transparent;border:1px solid #0d6efd;padding:6px 12px;font-size:1rem;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;color:#0d6efd}.admin-word-table[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.admin-word-table[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled{background-color:gray;color:#fff}.admin-word-table[_ngcontent-%COMP%]   .admin-input-text[_ngcontent-%COMP%]{line-height:1.5;border:1px solid #ccc;padding:7px 14px 9px;font-size:17px}.admin-word-table[_ngcontent-%COMP%]   .word-list-data[_ngcontent-%COMP%]{font-size:1.3em;margin:5px;padding:3px;border:1px solid grey;border-radius:5px}.admin-word-table[_ngcontent-%COMP%]   .word-list-data[_ngcontent-%COMP%]:hover{background-color:#e0ffff;cursor:pointer}"]});let n=r;return n})();var Oe=(()=>{let r=class r{constructor(t){this.route=t}ngOnInit(){console.log(this.route.snapshot.paramMap.get("id"))}};r.\u0275fac=function(e){return new(e||r)(v(H))},r.\u0275cmp=C({type:r,selectors:[["app-admin-edit-word"]],standalone:!0,features:[y],decls:2,vars:0,template:function(e,i){e&1&&(d(0,"p"),s(1,"admin-edit-word works!"),a())}});let n=r;return n})();var Ue=["audioInput"],Ne=["dynamicElements"];function Le(n,r){if(n&1&&(d(0,"audio",6),s(1,"AUDIO"),a()),n&2){let o=p(2);c("src",o.audioSrc,B)}}function ze(n,r){if(n&1){let o=x();d(0,"div")(1,"button",2),_("click",function(){u(o);let e=p();return g(e.getAudioForWord())}),s(2,"Get audio"),a(),h(3,Le,2,1,"audio",5),a()}if(n&2){let o=p();l(3),c("ngIf",o.audioSrc)}}function Be(n,r){n&1&&(d(0,"span"),s(1,"Save word"),a())}function $e(n,r){n&1&&(d(0,"span"),s(1,"Saved!"),a())}function Re(n,r){if(n&1){let o=x();d(0,"div")(1,"button",7),_("click",function(){u(o);let e=p();return g(e.saveNewWord())}),h(2,Be,2,0,"span",4)(3,$e,2,0,"span",4),a()()}if(n&2){let o=p();l(),c("disabled",!o.audioSrc||!o.word.value||o.wordId),l(),c("ngIf",!o.wordId),l(),c("ngIf",o.wordId)}}function je(n,r){if(n&1){let o=x();d(0,"div")(1,"input",11),S("ngModelChange",function(e){let i=u(o).$implicit;return b(i.translation,e)||(i.translation=e),g(e)}),a(),d(2,"select",12),S("ngModelChange",function(e){let i=u(o).$implicit;return b(i.language,e)||(i.language=e),g(e)}),d(3,"option"),s(4,"Russian"),a(),d(5,"option"),s(6,"Ukrainian"),a()(),d(7,"button",13),_("click",function(){let e=u(o).index,i=p(2);return g(i.delete("translations",e))}),s(8,"X"),a()()}if(n&2){let o=r.$implicit;l(),w("ngModel",o.translation),l(),w("ngModel",o.language)}}function Xe(n,r){if(n&1){let o=x();d(0,"div")(1,"input",11),S("ngModelChange",function(e){let i=u(o).$implicit;return b(i.definition,e)||(i.definition=e),g(e)}),a(),d(2,"button",13),_("click",function(){let e=u(o).index,i=p(2);return g(i.delete("definitions",e))}),s(3,"X"),a()()}if(n&2){let o=r.$implicit;l(),w("ngModel",o.definition)}}function qe(n,r){if(n&1&&(d(0,"audio",6),s(1,"AUDIO"),a()),n&2){let o=p().index,t=p(2);c("src",t.examples[o].audioSrc,B)}}function He(n,r){if(n&1){let o=x();d(0,"button",9),_("click",function(){u(o);let e=p().index,i=p(2);return g(i.saveExample(e))}),s(1,"\u2713 "),a()}if(n&2){let o=p(3);c("disabled",!o.wordId)}}function Ge(n,r){if(n&1){let o=x();d(0,"div",14)(1,"textarea",15),S("ngModelChange",function(e){let i=u(o).$implicit;return b(i.example,e)||(i.example=e),g(e)}),_("select",function(e){let i=u(o).index,m=p(2);return g(m.selected(e,i))}),a(),d(2,"span",16),s(3),a(),d(4,"span",16),s(5),a(),d(6,"button",2),_("click",function(){let e=u(o).index,i=p(2);return g(i.getAudioForExample(e))}),s(7,"Get audio"),a(),h(8,qe,2,1,"audio",5),d(9,"button",13),_("click",function(){let e=u(o).index,i=p(2);return g(i.delete("examples",e))}),s(10,"X"),a(),h(11,He,2,1,"button",17),a()}if(n&2){let o=r.$implicit,t=r.index,e=p(2);l(),w("ngModel",o.example),l(2),E(o.inclusionStart),l(2),E(o.inclusionEnd),l(3),c("ngIf",e.examples[t].audioSrc),l(3),c("ngIf",!e.examples[t].saved)}}function Qe(n,r){if(n&1){let o=x();d(0,"div")(1,"h3"),s(2,"Translations"),a(),d(3,"button",2),_("click",function(){u(o);let e=p();return g(e.addNewTranslation())}),s(4,"New translation"),a(),h(5,je,9,2,"div",8),d(6,"div")(7,"button",9),_("click",function(){u(o);let e=p();return g(e.saveTranslations())}),s(8,"\u2713 Save translations "),a()(),d(9,"h3"),s(10,"Definitions"),a(),d(11,"button",2),_("click",function(){u(o);let e=p();return g(e.addNewDefinition())}),s(12,"New definition"),a(),h(13,Xe,4,1,"div",8),d(14,"div")(15,"button",9),_("click",function(){u(o);let e=p();return g(e.saveDefinitions())}),s(16,"\u2713 Save definitions "),a()(),d(17,"h3"),s(18,"Examples"),a(),d(19,"button",2),_("click",function(){u(o);let e=p();return g(e.addNewExample())}),s(20,"New example"),a(),h(21,Ge,12,5,"div",10),a()}if(n&2){let o=p();l(5),c("ngForOf",o.translations),l(2),c("disabled",!o.wordId||!o.translations.length||o.translationsSaved),l(6),c("ngForOf",o.definitions),l(2),c("disabled",!o.wordId||!o.definitions.length||o.definitionsSaved),l(6),c("ngForOf",o.examples)}}var De=(()=>{let r=class r{constructor(t,e){this.adminService=t,this.sanitizer=e,this.word=new ne(""),this.language=new ne(""),this.audioSrc="",this.pronunciation=null,this.translationsSaved=!1,this.definitionsSaved=!1,this.definitions=[],this.examples=[],this.translations=[]}saveExample(t){let e=this.examples[t].audio;if(!e||!this.examples[t].inclusionEnd){console.error("NO AUDIO ATTACHED OR NO INCLUSION");return}let i=this.examples[t],m=new FormData;return m.append("file",e),m.append("example",i.example),m.append("inclusionStart",i.inclusionStart.toString()),m.append("inclusionEnd",i.inclusionEnd.toString()),this.adminService.saveExample(this.wordId,m).subscribe({next:()=>this.examples[t].saved=!0})}getAudioForWord(){this.adminService.getAudioForPhrase(this.word.value,"word").subscribe(t=>{this.pronunciation=t;let e=window.URL.createObjectURL(t);this.audioSrc=this.sanitizer.bypassSecurityTrustUrl(e)})}getAudioForExample(t){let e=this.examples[t].example;this.adminService.getAudioForPhrase(e).subscribe(i=>{this.examples[t].audio=i;let m=window.URL.createObjectURL(i);this.examples[t].audioSrc=this.sanitizer.bypassSecurityTrustUrl(m)})}selected(t,e){this.examples[e].inclusionStart=t.target.selectionStart,this.examples[e].inclusionEnd=t.target.selectionEnd-1}addNewDefinition(){this.definitions.push({definition:""})}addNewExample(){this.examples.push({example:"",inclusionEnd:0,inclusionStart:0})}addNewTranslation(){this.translations.push({translation:"",language:"Russian"})}delete(t,e){this[t].splice(e,1)}saveNewWord(){let t=new FormData;return t.append("file",this.pronunciation),t.append("word",this.word.value.trim()),this.adminService.saveWord(t).pipe(j(e=>this.wordId=e.id)).pipe(R(()=>this.adminService.getWordBreakDown(this.word.value.trim()))).subscribe(({translations:e,definitions:i,examples:m})=>{this.addTranslationsFromBreakdown(e),this.addDefinitionsFromBreakdown(i),this.addExamplesFromBreakdown(m)})}addTranslationsFromBreakdown(t){t.forEach(e=>{this.translations.push({translation:e,language:"Russian"})})}addDefinitionsFromBreakdown(t){t.forEach(e=>{this.definitions.push({definition:e})})}addExamplesFromBreakdown(t){t.forEach(e=>{this.examples.push({example:e,inclusionEnd:0,inclusionStart:0})}),ge(5e3).pipe(_e(e=>e<this.examples.length)).subscribe(e=>this.getAudioForExample(e))}saveTranslations(){this.adminService.saveTranslations(this.wordId,this.translations).subscribe({next:()=>this.translationsSaved=!0})}saveDefinitions(){this.adminService.saveDefinitions(this.wordId,this.definitions).subscribe({next:()=>this.definitionsSaved=!0})}reset(){this.wordId=null,this.word.setValue(""),this.audioSrc="",this.pronunciation=null,this.translationsSaved=!1,this.definitionsSaved=!1,this.definitions=[],this.translations=[],this.examples=[]}};r.\u0275fac=function(e){return new(e||r)(v(O),v(q))},r.\u0275cmp=C({type:r,selectors:[["app-admin-create-word"]],viewQuery:function(e,i){if(e&1&&(ee(Ue,5),ee(Ne,5,fe)),e&2){let m;te(m=ie())&&(i.audioInput=m.first),te(m=ie())&&(i.dynamicElements=m)}},standalone:!0,features:[y],decls:11,vars:4,consts:[[1,"admin-create-word"],["routerLink","/admin/word-table",1,"btn"],[1,"btn",3,"click"],["type","text",1,"admin-input-text",3,"formControl"],[4,"ngIf"],["controls","",3,"src",4,"ngIf"],["controls","",3,"src"],[1,"btn","green",3,"click","disabled"],[4,"ngFor","ngForOf"],[1,"btn","save-btn",3,"click","disabled"],["class","example-configuration",4,"ngFor","ngForOf"],["type","text",1,"admin-input-text","texts",3,"ngModelChange","ngModel"],[1,"admin-input-text",3,"ngModelChange","ngModel"],[1,"btn","delete-btn",3,"click"],[1,"example-configuration"],[1,"admin-input-text","texts",3,"ngModelChange","select","ngModel"],[1,"inclusion-span"],["class","btn save-btn",3,"disabled","click",4,"ngIf"]],template:function(e,i){e&1&&(d(0,"div",0)(1,"button",1),s(2,"Main Page"),a(),d(3,"button",2),_("click",function(){return i.reset()}),s(4,"RESET"),a(),d(5,"h3"),s(6,"Word"),a(),A(7,"input",3),h(8,ze,4,1,"div",4)(9,Re,4,3,"div",4)(10,Qe,22,5,"div",4),a()),e&2&&(l(7),c("formControl",i.word),l(),c("ngIf",i.word.value),l(),c("ngIf",i.audioSrc),l(),c("ngIf",i.wordId))},dependencies:[D,L,V,Q,K,W,G,P,Se,T,F,I],styles:[".admin-create-word[_ngcontent-%COMP%]{overflow:scroll;height:100vh}.admin-create-word[_ngcontent-%COMP%]   .example-configuration[_ngcontent-%COMP%]{display:flex}.admin-create-word[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{cursor:pointer;outline:0;display:inline-block;font-weight:400;line-height:1.5;text-align:center;background-color:transparent;border:1px solid #0d6efd;padding:6px 12px;font-size:1rem;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;color:#0d6efd}.admin-create-word[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.admin-create-word[_ngcontent-%COMP%]   .btn.green[_ngcontent-%COMP%]{background-color:green;border:none}.admin-create-word[_ngcontent-%COMP%]   .btn.green[_ngcontent-%COMP%]{background-color:green;color:#fff}.admin-create-word[_ngcontent-%COMP%]   .btn.green[_ngcontent-%COMP%]:disabled{background-color:gray;color:#fff}.admin-create-word[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled{background-color:gray;color:#fff}.admin-create-word[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]{background-color:#f6b0b0;color:#0d6efd}.admin-create-word[_ngcontent-%COMP%]   .save-btn[_ngcontent-%COMP%]{background-color:green;color:#fff}.admin-create-word[_ngcontent-%COMP%]   .admin-input-text[_ngcontent-%COMP%]{line-height:1.5;border:1px solid #ccc;padding:7px 14px 9px;font-size:17px}.admin-create-word[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]{width:60%}.admin-create-word[_ngcontent-%COMP%]   .inclusion-span[_ngcontent-%COMP%]{display:inline-block;border:1px solid grey;padding:5px;margin-right:10px;min-width:40px}"]});let n=r;return n})();var Ke=(n,r)=>({d_even:n,d_odd:r});function Ye(n,r){if(n&1&&(d(0,"option"),s(1),a()),n&2){let o=r.$implicit;l(),E(o)}}function Ze(n,r){if(n&1&&(d(0,"option"),s(1),a()),n&2){let o=r.$implicit;l(),E(o)}}function Je(n,r){if(n&1&&(d(0,"option",16),s(1),a()),n&2){let o=r.$implicit;c("value",o.id),l(),E(o.word)}}function et(n,r){if(n&1&&A(0,"audio",17),n&2){let o=p().index,t=p();c("src",t.audioData[o]==null?null:t.audioData[o].audioSrc,B)}}function tt(n,r){if(n&1){let o=x();d(0,"div",8)(1,"textarea",9),S("ngModelChange",function(e){let i=u(o).$implicit;return b(i.phrase,e)||(i.phrase=e),g(e)}),_("select",function(e){let i=u(o).index,m=p();return g(m.selected(e,i))}),a(),d(2,"input",10),S("ngModelChange",function(e){let i=u(o).$implicit;return b(i.wordId,e)||(i.wordId=e),g(e)}),a(),d(3,"datalist",11),h(4,Je,2,2,"option",12),a(),d(5,"span",13),s(6),a(),d(7,"span",13),s(8),a(),h(9,et,1,1,"audio",14),d(10,"span",15),_("click",function(){let e=u(o).index,i=p();return g(i.delete(e))}),s(11,"X"),a()()}if(n&2){let o=r.$implicit,t=r.index,e=p();l(),w("ngModel",o.phrase),c("ngClass",ve(7,Ke,t%2===0,t%2!==0)),l(),w("ngModel",o.wordId),l(2),c("ngForOf",e.wordList),l(2),E(o.inclusionStart),l(2),E(o.inclusionEnd),l(),c("ngIf",e.audioData[t]==null?null:e.audioData[t].audioSrc)}}var We=(()=>{let r=class r{constructor(t,e){this.adminService=t,this.sanitizer=e,this.dialog=[],this.audioData=[],this.voices=Object.keys(this.adminService.audioVoices)}ngOnInit(){this.adminService.getAllWords().subscribe({next:t=>this.wordList=t})}getAudios(){me(this.dialog).pipe(Z((t,e)=>ue(3e3*e).pipe(pe(()=>this.adminService.getAudioForPhrase(t.phrase,e%2?this.secondSpeaker:this.firstSpeaker).pipe(j(i=>{this.audioData[e]={blob:i,audioSrc:this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(i))}})))))).subscribe(()=>{})}addNewDialogLine(){this.dialog.push({phrase:""})}delete(t){this.dialog.splice(t,1)}selected(t,e){this.dialog[e].inclusionStart=t.target.selectionStart,this.dialog[e].inclusionEnd=t.target.selectionEnd-1}isValid(){let t=this.dialog.filter(e=>e.phrase&&(!e.wordId&&!e.inclusionStart&&!e.inclusionEnd||e.wordId&&oe(e.inclusionStart)&&oe(e.inclusionEnd)));return this.dialog.length&&t.length===this.dialog.length}composeRequest(t,e){let i=new FormData;return i.append("file",this.audioData[e].blob),this.adminService.updatePhrasePronunciation(t.dialogId,t.id,i)}saveEverything(){if(this.dialog.length!==this.audioData.length){console.error("NOT ALL AUDIO ATTACHED");return}let t=this.dialog.map((e,i)=>{let m=se(de({},e),{order:i,phrase:e.phrase.trim()});return e.wordId&&(m.wordId=Number(e.wordId)),m});return this.adminService.saveDialog(t).pipe(R(e=>ce(e,le))).pipe(Z((e,i)=>this.composeRequest(e,i))).subscribe({next:e=>{console.log("saved!"),this.dialog=[]},error:e=>{console.log(e),alert(e)}})}};r.\u0275fac=function(e){return new(e||r)(v(O),v(q))},r.\u0275cmp=C({type:r,selectors:[["app-admin-add-dialog"]],standalone:!0,features:[y],decls:22,vars:7,consts:[[1,"admin-create-dialog"],["routerLink","/admin/word-table",1,"btn"],[3,"ngModelChange","ngModel"],[4,"ngFor","ngForOf"],[1,"btn",3,"click"],[1,"create-dialog-container"],["class","dialog-phrase-config",4,"ngFor","ngForOf"],[1,"btn",3,"click","disabled"],[1,"dialog-phrase-config"],[1,"admin-input-text","texts",3,"ngModelChange","select","ngModel","ngClass"],["list","word-from-db",3,"ngModelChange","ngModel"],["id","word-from-db"],[3,"value",4,"ngFor","ngForOf"],[1,"inclusion-span"],["controls","",3,"src",4,"ngIf"],[1,"btn","delete-btn",3,"click"],[3,"value"],["controls","",3,"src"]],template:function(e,i){e&1&&(d(0,"div",0)(1,"button",1),s(2,"Main Page"),a(),d(3,"h3"),s(4,"Dialog"),a(),d(5,"h5"),s(6,"First speaker:"),a(),d(7,"select",2),S("ngModelChange",function(f){return b(i.firstSpeaker,f)||(i.firstSpeaker=f),f}),h(8,Ye,2,1,"option",3),a(),d(9,"h5"),s(10,"Second speaker:"),a(),d(11,"select",2),S("ngModelChange",function(f){return b(i.secondSpeaker,f)||(i.secondSpeaker=f),f}),h(12,Ze,2,1,"option",3),a(),A(13,"hr"),d(14,"button",4),_("click",function(){return i.addNewDialogLine()}),s(15,"New phrase"),a(),d(16,"div",5),h(17,tt,12,10,"div",6),a(),d(18,"button",7),_("click",function(){return i.getAudios()}),s(19,"Get audios "),a(),d(20,"button",7),_("click",function(){return i.saveEverything()}),s(21,"Save everything "),a()()),e&2&&(l(7),w("ngModel",i.firstSpeaker),l(),c("ngForOf",i.voices),l(3),w("ngModel",i.secondSpeaker),l(),c("ngForOf",i.voices),l(5),c("ngForOf",i.dialog),l(),c("disabled",!i.firstSpeaker||!i.secondSpeaker),l(2),c("disabled",!i.isValid()))},dependencies:[D,V,Q,K,W,G,P,F,I,T,xe,L],styles:[".admin-create-dialog[_ngcontent-%COMP%]{margin:8px}.admin-create-dialog[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]{background-color:#f6b0b0;color:#0d6efd}.admin-create-dialog[_ngcontent-%COMP%]   .dialog-phrase-config[_ngcontent-%COMP%]{display:flex}.admin-create-dialog[_ngcontent-%COMP%]   .create-dialog-container[_ngcontent-%COMP%]{overflow:scroll;max-height:70vh;margin:10px 0}.admin-create-dialog[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{cursor:pointer;outline:0;display:inline-block;font-weight:400;line-height:1.5;text-align:center;background-color:transparent;border:1px solid #0d6efd;padding:6px 12px;font-size:1rem;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;color:#0d6efd}.admin-create-dialog[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.admin-create-dialog[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled{background-color:gray;color:#fff}.admin-create-dialog[_ngcontent-%COMP%]   .admin-input-text[_ngcontent-%COMP%]{line-height:1.5;border:2px solid #ccc;padding:7px 14px 9px;font-size:17px;margin:2px 0}.admin-create-dialog[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]{width:70%}.admin-create-dialog[_ngcontent-%COMP%]   .inclusion-span[_ngcontent-%COMP%]{display:inline-block;border:1px solid grey;padding:5px;margin-right:10px;min-width:40px}.admin-create-dialog[_ngcontent-%COMP%]   .d_even[_ngcontent-%COMP%]{border-color:red}.admin-create-dialog[_ngcontent-%COMP%]   .d_odd[_ngcontent-%COMP%]{border-color:green}"]});let n=r;return n})();function it(n,r){if(n&1&&(d(0,"div")(1,"p")(2,"span"),s(3),a(),s(4," | "),d(5,"span"),s(6),a(),s(7," | "),d(8,"span"),s(9),a()()()),n&2){let o=r.$implicit;l(3),X("phrase: ",o.phrase,""),l(3),X("pronunciation: ",!!o.pronunciation,""),l(3),X("wordId: ",o.wordId,"")}}function nt(n,r){if(n&1){let o=x();d(0,"div",2)(1,"button",3),_("click",function(){let e=u(o).$implicit,i=p();return g(i.editDialog(e))}),s(2,"Edit"),a(),h(3,it,10,3,"div",4),A(4,"hr"),a()}if(n&2){let o=r.$implicit;l(3),c("ngForOf",o)}}var Pe=(()=>{let r=class r{constructor(t,e){this.adminService=t,this.router=e,this.dialogs=[]}ngOnInit(){this.adminService.getAllDialogs().subscribe({next:t=>{this.dialogs=ke(t),console.log(this.dialogs)}})}editDialog(t){this.router.navigate(["admin/edit-dialog"],{state:{data:t}})}};r.\u0275fac=function(e){return new(e||r)(v(O),v(z))},r.\u0275cmp=C({type:r,selectors:[["app-dialogs-list"]],standalone:!0,features:[y],decls:4,vars:1,consts:[["routerLink","/admin/word-table",1,"btn"],["class","dialog",4,"ngFor","ngForOf"],[1,"dialog"],[3,"click"],[4,"ngFor","ngForOf"]],template:function(e,i){e&1&&(d(0,"div")(1,"button",0),s(2,"Main Page"),a(),h(3,nt,5,1,"div",1),a()),e&2&&(l(3),c("ngForOf",i.dialogs))},dependencies:[D,T],styles:[".dialog[_ngcontent-%COMP%]:nth-child(odd){background-color:#b2c1f6}.dialog[_ngcontent-%COMP%]:nth-child(2n){background-color:#ecccf6}"]});let n=r;return n})();function ot(n,r){n&1&&A(0,"input",8)}function rt(n,r){if(n&1){let o=x();d(0,"button",9),_("click",function(){u(o);let e=p().index,i=p();return g(i.savePronunciation(e))}),s(1,"Save"),a()}}function at(n,r){n&1&&(d(0,"audio",10),s(1,"AUDIO"),a())}function dt(n,r){if(n&1){let o=x();d(0,"div",3)(1,"textarea",4),S("ngModelChange",function(e){let i=u(o).$implicit;return b(i.phrase,e)||(i.phrase=e),g(e)}),a(),h(2,ot,1,0,"input",5)(3,rt,2,0,"button",6)(4,at,2,0,"audio",7),a()}if(n&2){let o=r.$implicit;l(),w("ngModel",o.phrase),l(),c("ngIf",!o.pronunciation),l(),c("ngIf",!o.pronunciation),l(),c("ngIf",o.pronunciation)}}var Ie=(()=>{let r=class r{constructor(t,e,i){this.route=t,this.router=e,this.adminService=i,this.dialog=[],this.route.paramMap.subscribe(m=>{let f=window.history.state.data;f||this.router.navigate(["admin/dialogs-list"]),this.dialog=f,console.log("data"),console.log(f)})}savePronunciation(t){let i=document.querySelectorAll(".phrase-audio")[t].files[0];if(!i){console.error("NO AUDIO ATTACHED");return}console.log(i);let m=new FormData;m.append("file",i);let f=this.dialog[0].dialogId,Y=this.dialog[t].id;return this.adminService.updatePhrasePronunciation(f,Y,m).subscribe()}};r.\u0275fac=function(e){return new(e||r)(v(H),v(z),v(O))},r.\u0275cmp=C({type:r,selectors:[["app-edit-dialog"]],standalone:!0,features:[y],decls:4,vars:1,consts:[["routerLink","/admin/word-table",1,"btn"],[1,"container-of-all"],["class","container-of-phrases",4,"ngFor","ngForOf"],[1,"container-of-phrases"],["rows","3",1,"phrase",3,"ngModelChange","ngModel"],["type","file","accept",".mp3","class","phrase-audio",4,"ngIf"],[3,"click",4,"ngIf"],["controls","",4,"ngIf"],["type","file","accept",".mp3",1,"phrase-audio"],[3,"click"],["controls",""]],template:function(e,i){e&1&&(d(0,"button",0),s(1,"Main Page"),a(),d(2,"div",1),h(3,dt,5,4,"div",2),a()),e&2&&(l(3),c("ngForOf",i.dialog))},dependencies:[D,T,V,W,P,F,I,L],styles:[".container-of-phrases[_ngcontent-%COMP%]{display:flex;justify-items:center;align-items:center}.phrase[_ngcontent-%COMP%]{width:70vw;resize:none;margin-bottom:10px}"]});let n=r;return n})();var Zt=[{path:"",component:Ee,canActivate:[U],data:{adminOnly:!0},children:[{path:"",redirectTo:"word-table",pathMatch:"full"},{path:"word-table",canActivate:[U],data:{adminOnly:!0},component:Te},{path:"edit-word/:id",canActivate:[U],data:{adminOnly:!0},component:Oe},{path:"create-word",canActivate:[U],data:{adminOnly:!0},component:De},{path:"create-dialog",canActivate:[U],data:{adminOnly:!0},component:We},{path:"dialogs-list",canActivate:[U],data:{adminOnly:!0},component:Pe},{path:"edit-dialog",canActivate:[U],data:{adminOnly:!0},component:Ie}]}];export{Zt as adminRoutes};
