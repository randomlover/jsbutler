ace.config.set("basePath","https://cdn.jsdelivr.net/npm/ace-builds/src-noconflict");var e=ace.edit("editor-container");e.session.setMode("ace/mode/javascript");e.session.setUseWrapMode(true);e.setShowPrintMargin(false);e.setOptions({theme:"ace/theme/xcode",fontSize:"14px"});e.container.style.lineHeight=1.6;$((function(){t();d(e.getValue());localStorage.autoSave==1?$("#autosave").prop("checked",true):$("#autosave").prop("checked",false);localStorage.theme==="dark"?($("#switcher").prop("checked",true),$("html").attr("data-theme","dark"),e.setTheme("ace/theme/one_dark"),$(".icon-sun").hide(),$(".icon-moon").show()):($(".icon-sun").show(),$(".icon-moon").hide())}));$("#autosave").change((function(){$(this).is(":checked")?localStorage.autoSave=1:localStorage.autoSave=0}));e.session.on("change",(function(){const t=e.getValue();d(t);if($("#autosave").is(":checked")){localStorage.code=t}}));$(".actionbtn button").click((function(){const t=e.getValue();if(!t){l("Editor is empty, please type, paste or load your code first.");return false}switch(this.id){case"beautify-default":beautify_options={parser:"babel",plugins:prettierPlugins,trailingComma:"es5",tabWidth:4,semi:true,singleQuote:true};a(t,beautify_options);break;case"removelines":n(t);break;case"mergelines":o(t);break;case"ltrim":r(t);break;case"rtrim":s(t);break;case"minify-default":case"minify-low":const e={mangle:false,compress:false};c(t,e);break;case"minify-med":const d={compress:false,toplevel:true};c(t,d);break;case"minify-top":const m={compress:true,toplevel:true};c(t,m);break;case"obfuscate-default":i(t);break;case"obfuscate-low":const p={compact:true,controlFlowFlattening:false,deadCodeInjection:false,debugProtection:false,debugProtectionInterval:false,disableConsoleOutput:true,identifierNamesGenerator:"hexadecimal",log:false,numbersToExpressions:false,renameGlobals:false,selfDefending:true,simplify:true,splitStrings:false,stringArray:true,stringArrayEncoding:[],stringArrayIndexShift:true,stringArrayRotate:true,stringArrayShuffle:true,stringArrayWrappersCount:1,stringArrayWrappersChainedCalls:true,stringArrayWrappersParametersMaxCount:2,stringArrayWrappersType:"variable",stringArrayThreshold:.75,unicodeEscapeSequence:false};i(t,p);break;case"obfuscate-med":const f={compact:true,controlFlowFlattening:true,controlFlowFlatteningThreshold:.75,deadCodeInjection:true,deadCodeInjectionThreshold:.4,debugProtection:false,debugProtectionInterval:false,disableConsoleOutput:true,identifierNamesGenerator:"hexadecimal",log:false,numbersToExpressions:true,renameGlobals:false,selfDefending:true,simplify:true,splitStrings:true,splitStringsChunkLength:10,stringArray:true,stringArrayEncoding:["base64"],stringArrayIndexShift:true,stringArrayRotate:true,stringArrayShuffle:true,stringArrayWrappersCount:2,stringArrayWrappersChainedCalls:true,stringArrayWrappersParametersMaxCount:4,stringArrayWrappersType:"function",stringArrayThreshold:.75,transformObjectKeys:true,unicodeEscapeSequence:false};i(t,f);break;case"obfuscate-top":const g={compact:true,controlFlowFlattening:true,controlFlowFlatteningThreshold:1,deadCodeInjection:true,deadCodeInjectionThreshold:1,debugProtection:true,debugProtectionInterval:true,disableConsoleOutput:true,identifierNamesGenerator:"hexadecimal",log:false,numbersToExpressions:true,renameGlobals:false,selfDefending:true,simplify:true,splitStrings:true,splitStringsChunkLength:5,stringArray:true,stringArrayEncoding:["rc4"],stringArrayIndexShift:true,stringArrayRotate:true,stringArrayShuffle:true,stringArrayWrappersCount:5,stringArrayWrappersChainedCalls:true,stringArrayWrappersParametersMaxCount:5,stringArrayWrappersType:"function",stringArrayThreshold:1,transformObjectKeys:true,unicodeEscapeSequence:false};i(t,g);break;case"escape":h(t);break;case"unescape":u(t);break;default:{l("Something went wrong, please check if your code contains errors.")}}}));$(".editor-toolbar button").click((function(){const t=e.getValue();switch(this.id){case"save":!t?l("Editor is empty, please type, paste or load your code first."):localStorage.setItem("code",t);break;case"restore":const a=localStorage.getItem("code");!a?l("You have not saved any code yet."):e.setValue(a);break;case"clear":e.setValue("");break;case"copy":t?navigator.clipboard.writeText(t).then((()=>{l("Code Copied!")}),(e=>{l("An error occurred while copying to clipboard.")})):l("Editor is empty, please type, paste or load your code first.");break;case"download":if(!t){l("Editor is empty, please type, paste or load your code first.")}else{const e=new Blob([t]);const a=document.createElement("a");a.setAttribute("href",URL.createObjectURL(e));a.setAttribute("download","code.txt");a.click();URL.revokeObjectURL(e)}break;default:return false}}));$("#open").change((function(){const t=new FileReader;const a=$(this)[0].files[0];if(a){t.readAsText(a);t.onload=function(t){data=t.target.result;data?e.setValue(data):l("The content of this file is empty, nothing to load.")}}}));$("#load").click((function(){const t=$(this);const a=$("#url").val();if(a){t.addClass("disabled").html('<svg class="icon icon-loading" aria-hidden="true"><use xlink:href="#icon-loading"></use></svg> Loading');$.get(a,(function(t){console.log(a);e.setValue(t)})).done((function(){t.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-complate"></use></svg> Done');setTimeout((function(){$("#modal").modal("hide");t.removeClass("disabled").html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-load"></use></svg> Load')}),1e3)})).fail((function(){t.removeClass("disabled").html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-error"></use></svg> Load failed');setTimeout((function(){t.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-load"></use></svg> Load')}),2e3)}))}}));$("#switcher").change((function(){if(this.checked){$(".icon-sun").hide();$(".icon-moon").show();$("html").attr("data-theme","dark");e.setTheme("ace/theme/one_dark");localStorage.theme="dark"}else{$(".icon-moon").hide();$(".icon-sun").show();$("html").removeAttr("data-theme","dark");e.setTheme("ace/theme/xcode");localStorage.theme="light"}}));$("#fullscreen").click((function(){if($(".editor").hasClass("fsbox")){$(".editor").removeClass("fsbox");$("#editor-container").removeClass("fseditor");e.resize()}else{$(".editor").addClass("fsbox");$("#editor-container").addClass("fseditor");e.resize()}}));$((()=>{$('[data-tooltip="tooltip"]').tooltip();$('[data-tooltip="tooltip"]').click((function(){$(this).tooltip("hide")}))}));const t=()=>{const t='/*   Sample code\t*/\r\n/*   Please read over instructions first!\t*/\r\nconst world = "world"\r\nconst my_important_message = \r\n"Hello " + world    \r\n\r\nif (world != \r\n\'world\') {\r\nconsole.log("This cannot happen")\r\n}\r\n\r\nconsole.log(my_important_message)';localStorage.code==null?e.setValue(t):localStorage.code?e.setValue(localStorage.code):e.setValue(t)};const a=(t,a)=>{try{newCode=prettier.format(t,a);e.setValue(newCode)}catch(e){l("Something went wrong, please check if your code contains errors.")}};const o=t=>{const a=t.replace(/(\n\s*)+\n/g,"\n\n");e.setValue(a)};const r=t=>{const a=t.split("\n");const o=[];for(let e=0;e<a.length;e++){let t=a[e].replace(/^\s*/,"");o.push(t)}newCode=o.join("\n").trim()+"\n";e.setValue(newCode)};const s=t=>{const a=t.split("\n");const o=[];for(let e=0;e<a.length;e++){let t=a[e].replace(/\s+$/,"");o.push(t)}newCode=o.join("\n").trim()+"\n";e.setValue(newCode)};const n=t=>{const a=t.split("\n");const o=[];for(let e=0;e<a.length;e++){let t=a[e].replace(/\s+$/,"");if(t==""){continue}o.push(t)}newCode=o.join("\n").trim()+"\n";e.setValue(newCode)};const c=async(t,a)=>{try{const o=await Terser.minify(t,a);e.setValue(o.code)}catch(e){l("Something went wrong, please check if your code contains errors.")}};const i=(t,a)=>{try{const o=JavaScriptObfuscator.obfuscate(t,a);newCode=o.getObfuscatedCode();e.setValue(newCode)}catch(e){l("Something went wrong, please check if your code contains errors.")}};const l=e=>{$("#tips").modal("show").find(".modal-body").html(e)};const d=t=>{const a=e.session.getLength();const o=t.length;$("#status").html(a+" Lines, "+o+" chars")};const h=t=>{let a="";let o=0;for(o=0;o<t.length;o++){a=a+m(t.charAt(o),false)}e.setValue(a)};const u=t=>{const a=t.replace(/\\r/g,"\r").replace(/\\n/g,"\n").replace(/\\'/g,"'").replace(/\\\"/g,'"').replace(/\\&/g,"&").replace(/\\\\/g,"\\").replace(/\\t/g,"\t").replace(/\\b/g,"\b").replace(/\\f/g,"\f").replace(/\\x2F/g,"/").replace(/\\x3C/g,"<").replace(/\\x3E/g,">");e.setValue(a)};const m=e=>{var t=e.charAt(0);switch(t){case"\r":return"\\r";break;case"\n":return"\\n";break;case"\v":return"\\v";break;case"'":return"\\'";break;case'"':return'\\"';break;case"&":return"\\&";break;case"\\":return"\\\\";break;case"\t":return"\\t";break;case"\b":return"\\b";break;case"\f":return"\\f";break;default:return e;break}};!function(e){var t,a,o,r,s,n='<svg><symbol id="icon-linkedin" viewBox="0 0 1024 1024"><path d="M512.18829107 141.21142578h-0.36934018C307.13931274 141.21142578 141.21142578 307.13931274 141.21142578 511.81170893v0.36934018C141.21142578 716.86068726 307.13931274 882.78857422 511.81170893 882.78857422h0.36934018C716.86068726 882.78857422 882.78857422 716.86068726 882.78857422 512.18829107v-0.36934018C882.78857422 307.13931274 716.86068726 141.21142578 512.18829107 141.21142578zM325.69322538 289.33132242c27.30220557 0.01448393 49.42640662 22.16041088 49.4119227 49.46261646-0.01448393 27.30220557-22.16041088 49.42640662-49.46261645 49.41192268-27.30220557-0.01448393-49.42640662-22.16041088-49.4119227-49.46261644 0.01448393-27.30220557 22.16041088-49.42640662 49.46261646-49.4119227z m50.89652539 444.96801496H277.71521163V424.8139913h98.8817811v309.48534608z m370.78857421 0H649.73491979V571.89828705c0-98.88178111-117.91366339-90.4738605-117.91366339 0v162.40105033H434.43131996V424.8139913h98.38208556l-0.99214912 41.52542354c41.03296995-74.90363717 215.54982662-80.58857917 215.54982662 71.93443179v196.02549075z"  ></path></symbol><symbol id="icon-cofee" viewBox="0 0 1024 1024"><path d="M783.20957779 737.57011407H621.77951086c-27.08492308 0-49.06688964-21.98196656-49.06688962-49.06688964V532.66678291c0-27.08492308 21.98196656-49.06688964 49.06688963-49.06688963h161.43006692c52.89410704 0 95.97483614 43.08072912 95.97483612 95.97483614v61.92241473c0.0981338 52.99224082-42.98259532 96.07296994-95.97483613 96.07296992z m-151.61668898-58.88026757h151.61668898c20.50995986 0 37.09456857-16.68274249 37.09456855-37.09456857v-61.92241473c0-20.50995986-16.68274249-37.09456857-37.09456856-37.09456857H631.59288881V678.6898465z" fill="#F74D7A" ></path><path d="M545.13702927 871.71899037H351.42094894c-112.55944485 0-204.60892983-92.04948496-204.6089298-204.60892982V436.59381299c0-10.79471572 8.83204014-19.62675586 19.62675586-19.62675584h563.6804282c10.79471572 0 19.62675586 8.83204014 19.62675586 19.62675586v230.51624753c0 112.46131104-92.04948496 204.60892983-204.60892981 204.60892983zM447.78832018 352.10062905c-16.29020736 0-29.44013379-13.14992643-29.44013375-29.44013378V175.65609389c0-16.29020736 13.14992643-29.44013379 29.44013375-29.4401338s29.44013379 13.14992643 29.44013383 29.4401338v147.00440138c0 16.19207359-13.24806021 29.44013379-29.44013383 29.44013378zM291.16680846 352.10062905c-16.29020736 0-29.44013379-13.14992643-29.44013377-29.44013378v-78.31075588c0-16.29020736 13.14992643-29.44013379 29.44013379-29.44013379s29.44013379 13.14992643 29.44013378 29.44013379v78.31075588c0 16.19207359-13.14992643 29.44013379-29.44013378 29.44013378zM604.31169817 352.10062905c-16.29020736 0-29.44013379-13.14992643-29.44013381-29.44013378v-78.31075588c0-16.29020736 13.14992643-29.44013379 29.44013381-29.44013379s29.44013379 13.14992643 29.44013379 29.44013379v78.31075588c0 16.19207359-13.24806021 29.44013379-29.44013379 29.44013378z" fill="#F74D7A" ></path><path d="M448.27898911 561.22371269c-25.12224749-25.12224749-65.94589968-24.92597993-90.77374585 0.58880267-24.43531105 25.12224749-23.55210703 65.4552308 1.27573914 90.28307697l63.29628764 63.29628762c14.52379933 14.52379933 37.97777258 14.52379933 52.50157192 0l63.29628764-63.29628762c24.82784616-24.82784616 25.71105018-65.16082944 1.27573912-90.28307696-24.92597993-25.51478262-65.74963211-25.71105018-90.87187961-0.58880268z" fill="#FFFFFF" ></path></symbol><symbol id="icon-facebook" viewBox="0 0 1024 1024"><path d="M512 141.21142578C716.7911644 141.21142578 882.78857422 307.2088356 882.78857422 512 882.78857422 701.07899856 741.2632103 857.11146545 558.34857177 879.91496277L558.34857177 604.69714356 685.80714417 604.69714356 697.39428711 512 558.34857177 512 558.34857177 465.65142823C558.34857177 440.04384231 579.08955764 419.30285644 604.69714356 419.30285644L697.39428711 419.30285644 697.39428711 326.60571289 604.69714356 326.60571289C527.89756013 326.60571289 465.65142823 388.85184478 465.65142823 465.65142823L465.65142823 512 396.12857055 512 396.12857055 604.69714356 465.65142823 604.69714356 465.65142823 787.91304779 465.65142823 871.10873413 465.65142823 879.91496277C282.7367897 857.11146545 141.21142578 701.07899856 141.21142578 512 141.21142578 307.2088356 307.2088356 141.21142578 512 141.21142578Z"  ></path></symbol><symbol id="icon-twitter" viewBox="0 0 1024 1024"><path d="M883.42857143 281.91071429c-27.32142858 11.78571428-57.05357143 20.26785714-87.67857143 23.57142857 31.60714285-18.83928572 55.625-48.57142858 66.96428572-83.92857144-29.19642857 17.41071428-62.23214285 30.17857143-96.60714286 36.7857143C738.25000001 228.60714285 698.69642855 210.21428571 654.85714286 210.21428571c-84.37499999 0-152.23214285 68.39285715-152.23214285 152.32142858 0 11.78571428 1.42857143 23.57142857 3.74999999 34.91071429-126.33928572-6.60714284-239.01785714-66.96428572-313.92857143-159.37500001-13.21428572 22.67857142-20.71428572 48.57142858-20.71428571 76.875 0 52.85714286 26.875 99.46428572 67.85714285 126.875-24.99999999-0.98214286-48.57142858-8.03571428-68.83928572-19.375v1.875c0 74.01785716 52.32142858 135.35714286 122.05357144 149.46428571-12.76785713 3.30357142-26.42857143 5.17857143-40.08928571 5.17857144-9.91071429 0-19.28571429-0.98214286-28.75000001-2.32142858C243.25 637 299.41071429 680.83928572 366.28571428 682.26785714c-52.32142858 40.98214286-117.85714285 65.08928572-189.01785714 65.08928571-12.76785713 0-24.55357143-0.44642858-36.78571428-1.87499998C207.98214285 788.78571429 288.07142857 813.78571429 374.32142855 813.78571429 654.32142857 813.78571429 807.53571428 581.82142857 807.53571428 380.48214285c0-6.60714284 0-13.21428572-0.44642857-19.82142857 29.64285713-21.69642858 55.625-48.57142858 76.33928572-78.74999999z"  ></path></symbol><symbol id="icon-restore" viewBox="0 0 1024 1024"><path d="M870.37462501 153.95583898a503.43510074 503.43510074 0 0 0-711.96474721 2e-8L39.7490866 35.29504781l-3e-8 307.72698455-2.76875207 8.30625632L356.17786281 351.72382403 237.51707161 233.06303282a391.56063434 391.56063434 0 0 1 553.75035958 0 391.56063434 391.56063434 0 0 1-9.4e-7 553.75035864 391.56063434 391.56063434 0 0 1-553.75035864 9.4e-7c-76.33844264-76.33844264-114.30989494-176.80457891-113.91435955-276.87518072l-112.33221537 9.4e-7A497.61762888 497.61762888 0 0 0 158.40987778 865.92058622a503.43510074 503.43510074 0 0 0 711.96474721-2e-8 503.43510074 503.43510074 0 0 0 2e-8-711.96474722m-237.32158241 158.21438768l-197.76798594 197.76798595 68.82325887 269.75553137 76.33844269-19.38126286-56.16610816-220.70907071L692.38343821 371.50062226 633.0530426 312.17022666z" fill="" ></path></symbol><symbol id="icon-fullscreen" viewBox="0 0 1024 1024"><path d="M162.47466667 861.52533333v-233.01688888H45.96622222v233.01688888c0 64.07964445 52.4288 116.50844445 116.50844445 116.50844445h233.01688888v-116.50844445H162.47466667zM861.52533333 45.96622222h-233.01688888v116.50844445h233.01688888v233.01688888h116.50844445V162.47466667c0-64.07964445-52.4288-116.50844445-116.50844445-116.50844445zM162.47466667 162.47466667h233.01688888V45.96622222H162.47466667c-64.07964445 0-116.50844445 52.4288-116.50844445 116.50844445v233.01688888h116.50844445V162.47466667zM861.52533333 861.52533333h-233.01688888v116.50844445h233.01688888c64.07964445 0 116.50844445-52.4288 116.50844445-116.50844445v-233.01688888h-116.50844445v233.01688888z"  ></path></symbol><symbol id="icon-complate" viewBox="0 0 1024 1024"><path d="M426.666667 766.293333 426.666667 766.293333 426.666667 766.293333 237.226667 462.506667l138.24-85.333333 104.106667 167.253333 472.746667-290.133333C861.866667 102.4 699.733333 0 512 0 228.693333 0 0 228.693333 0 512s228.693333 512 512 512c283.306667 0 512-228.693333 512-512 0-35.84-3.413333-71.68-11.946667-105.813333L426.666667 766.293333z"  ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M626.345 121.83c0 53.151-43.08 96.23-96.23 96.23-53.146 0-96.23-43.079-96.23-96.23 0.004-53.15 43.084-96.23 96.23-96.23 53.145 0 96.23 43.085 96.23 96.23z m-96.23 712.167c-46.505 0-84.199 37.698-84.199 84.198s37.699 84.199 84.199 84.199 84.198-37.699 84.198-84.199-37.693-84.198-84.198-84.198z m398.187-253.84c-33.218 0-60.145-26.92-60.145-60.144 0-33.219 26.927-60.145 60.145-60.145 33.224 0 60.145 26.926 60.145 60.145-0.005 33.218-26.931 60.144-60.145 60.144z m-700.145-60.144c0-53.146-43.08-96.23-96.23-96.23-53.146 0-96.23 43.08-96.23 96.23 0 53.145 43.08 96.23 96.23 96.23 53.15 0 96.23-43.085 96.23-96.23z m88.448-349.599c37.581 37.58 37.581 98.509 0 136.085-37.58 37.58-98.508 37.58-136.09 0s-37.58-98.51 0-136.09 98.51-37.58 136.09 0.005z m444.038 580.127c-28.186 28.185-28.186 73.881-0.006 102.067 28.186 28.186 73.882 28.186 102.068 0 28.185-28.186 28.185-73.882 0-102.067-28.18-28.19-73.877-28.19-102.062 0zM845.7 272.476c-18.79 18.79-49.26 18.79-68.04 0-18.795-18.795-18.795-49.26 0-68.045a48.097 48.097 0 0 1 68.04 0c18.79 18.79 18.79 49.26 0 68.045zM316.605 733.527c-37.58-37.58-98.508-37.58-136.09 0s-37.58 98.509 0 136.085c37.582 37.58 98.51 37.58 136.085 0 37.581-37.576 37.581-98.504 0.005-136.085z"  ></path></symbol><symbol id="icon-error" viewBox="0 0 1024 1024"><path d="M753.326637 693.321116a41.778587 41.778587 0 0 0 12.697413-30.651283 40.959399 40.959399 0 0 0-12.697413-30.036893L632.701206 512.007509l120.625431-120.693697a40.959399 40.959399 0 0 0 12.697413-29.968627 41.778587 41.778587 0 0 0-12.697413-30.719549l-60.00552-59.937254a41.778587 41.778587 0 0 0-30.651284-12.697414 40.959399 40.959399 0 0 0-30.036893 12.697414L512.007509 391.313812 391.313813 270.688382a40.959399 40.959399 0 0 0-29.968627-12.697414 41.778587 41.778587 0 0 0-30.71955 12.697414l-59.937254 60.00552a41.778587 41.778587 0 0 0-12.697414 30.651283 40.959399 40.959399 0 0 0 12.697414 30.036893L391.313813 512.007509 270.688382 632.701206a40.959399 40.959399 0 0 0-12.697414 29.968627c0 12.014757 4.232471 22.254607 12.697414 30.719549l60.00552 59.937254a41.778587 41.778587 0 0 0 30.651284 12.697414 40.959399 40.959399 0 0 0 30.036892-12.697414L512.007509 632.701206l120.693697 120.62543a40.959399 40.959399 0 0 0 29.968627 12.697414 41.778587 41.778587 0 0 0 30.719549-12.697414l59.937255-60.00552z m202.066369-438.265572A500.865188 500.865188 0 0 1 1024 512.007509c0 92.841305-22.868998 178.582981-68.675259 257.02023a509.671458 509.671458 0 0 1-186.365267 186.365267A500.865188 500.865188 0 0 1 512.007509 1024a500.865188 500.865188 0 0 1-257.02023-68.675259 509.671458 509.671458 0 0 1-186.365267-186.365267A500.865188 500.865188 0 0 1 0.015018 512.007509c0-92.841305 22.868998-178.582981 68.67526-257.02023a509.671458 509.671458 0 0 1 186.365266-186.365267A500.865188 500.865188 0 0 1 512.007509 0.015018c92.841305 0 178.582981 22.868998 257.020231 68.675259a509.671458 509.671458 0 0 1 186.365266 186.365267z"  ></path></symbol><symbol id="icon-load" viewBox="0 0 1024 1024"><path d="M308.11022183 675.58399999a50.97244484 50.97244484 0 0 1-50.97244366 50.97244484H206.16533334a203.88977817 203.88977817 0 0 1-48.11798717-402.07064217 356.85808315 356.85808315 0 0 1 681.14477433-97.255424A254.86222183 254.86222183 0 0 1 766.86222183 726.55644483a50.97244484 50.97244484 0 0 1 0.05097283-101.94488968 152.91733333 152.91733333 0 0 0 43.47949551-299.61602765l-45.56936533-13.45672534-19.01272217-43.53046835a254.91319466 254.91319466 0 0 0-486.58295466 69.32252485l-8.8182325 69.730304-68.30307636 16.515072A102.04683417 102.04683417 0 0 0 206.16533334 624.61155515h50.97244483a50.97244484 50.97244484 0 0 1 50.97244366 50.97244484z m384.33223149 104.34059418a50.97244484 50.97244484 0 0 1 0 72.07503565l-144.45590715 144.35396267c-19.93022618 19.87925333-52.19578351 19.87925333-72.12600967 0l-144.45590716-144.35396267a50.97244484 50.97244484 0 0 1 72.07503683-72.07503565L461.02755516 837.47248316V420.72177817a50.97244484 50.97244484 0 0 1 101.94488968 0v416.59778765l57.39497166-57.39497165a50.97244484 50.97244484 0 0 1 72.07503682 0z" fill="#333333" ></path></symbol><symbol id="icon-save" viewBox="0 0 1024 1024"><path d="M832.40298828 955.65350586H191.60716308a123.19145508 123.19145508 0 0 1-123.19145508-123.20991211V191.55640625A123.20068359 123.20068359 0 0 1 191.62654297 68.34649414h640.77644531a123.19145508 123.19145508 0 0 1 123.17115234 123.20991211v640.88626464a123.18130372 123.18130372 0 0 1-123.17115234 123.21083497zM659.8085205 166.96425781H364.10196289v148.20073242a49.30426758 49.30426758 0 0 0 49.26458497 49.28396485h197.1580078a49.31441894 49.31441894 0 0 0 49.28396485-49.28396485z m197.25675294 56.33270508a56.34193359 56.34193359 0 0 0-56.32163086-56.33270508H758.31831055v197.48469727a98.53932129 98.53932129 0 0 1-98.56977539 98.56977539H364.10288575a98.53932129 98.53932129 0 0 1-98.56885255-98.56977539V167.31125c0-0.14765625 0.04983398-0.24732422 0.04983399-0.34699219h-42.28598144a56.35208497 56.35208497 0 0 0-56.33270508 56.33270508v577.4559082a56.31240234 56.31240234 0 0 0 56.33270508 56.33178223h577.41622558a56.30317383 56.30317383 0 0 0 56.32163086-56.33178223z"  ></path></symbol><symbol id="icon-menu" viewBox="0 0 1024 1024"><path d="M153.6 256a51.2 51.2 0 0 1 51.2-51.2h614.4a51.2 51.2 0 1 1 0 102.4H204.8a51.2 51.2 0 0 1-51.2-51.2z m0 256a51.2 51.2 0 0 1 51.2-51.2h614.4a51.2 51.2 0 1 1 0 102.4H204.8a51.2 51.2 0 0 1-51.2-51.2z m0 256a51.2 51.2 0 0 1 51.2-51.2h614.4a51.2 51.2 0 1 1 0 102.4H204.8a51.2 51.2 0 0 1-51.2-51.2z"  ></path></symbol><symbol id="icon-sun" viewBox="0 0 1024 1024"><path d="M415.25600804 278.45988629L478.95407364 214.76182002a46.70802301 46.70802301 0 0 1 66.09185272 0L608.68560716 278.45988629H698.83209135a46.70802301 46.70802301 0 0 1 46.70802236 46.70802236v90.08809939l63.69806626 63.6980656a46.70802301 46.70802301 0 0 1 0 66.09185272L745.54011371 608.68560716V698.83209135a46.70802301 46.70802301 0 0 1-46.70802236 46.70802236H608.74399196l-63.6980656 63.69806626a46.70802301 46.70802301 0 0 1-66.09185272 0L415.31439284 745.54011371H325.16790865a46.70802301 46.70802301 0 0 1-46.70802236-46.70802236V608.74399196L214.76182002 545.04592636a46.70802301 46.70802301 0 0 1 0-66.09185272L278.45988629 415.31439284V325.16790865a46.70802301 46.70802301 0 0 1 46.70802236-46.70802236h90.08809939zM512 687.15508543a175.15508543 175.15508543 0 1 0 0-350.31017086 175.15508543 175.15508543 0 0 0 0 350.31017086z m0-58.38502825a116.77005718 116.77005718 0 1 1 0-233.54011436 116.77005718 116.77005718 0 0 1 0 233.54011436z"  ></path></symbol><symbol id="icon-moon" viewBox="0 0 1024 1024"><path d="M572.34425133 240.51491692l0.82705318 2.7443129A263.15328795 263.15328795 0 0 1 244.0041346 568.77984701a18.79666346 18.79666346 0 0 0-23.42064264 23.45823595 300.74661482 300.74661482 0 1 0 375.18140199-375.21899532 18.79666346 18.79666346 0 0 0-23.42064261 23.49582928z"  ></path></symbol><symbol id="icon-cloud" viewBox="0 0 1024 1024"><path d="M705.58161259 899.16322405H270.0229851c-133.42612623 0-241.9770149-108.55088868-241.97701601-241.97701488a240.37996658 240.37996658 0 0 1 145.37979114-221.98971381 290.85637274 290.85637274 0 0 1 289.93685971-312.73109453 290.85637274 290.85637274 0 0 1 275.03107593 197.79201266A290.80797696 290.80797696 0 0 1 995.95403091 608.79080573c0 160.1403887-130.23202961 290.37241833-290.37241832 290.37241832zM463.36261994 219.25620655a193.92037965 193.92037965 0 0 0-190.43591065 230.60409594l1.54865251 7.35610086a48.54058963 48.54058963 0 0 1-36.39334271 58.36485611A144.3150919 144.3150919 0 0 0 124.83677595 657.18620917c0 80.04599703 65.14021213 145.18620917 145.18620915 145.18620916h435.55862749c106.76025951 0 193.58161259-86.82135308 193.58161146-193.5816126s-86.82135308-193.58161259-193.58161146-193.58161146c-23.18139768 0-47.91144902-16.35764586-52.31543106-39.15188182a193.82358924 193.82358924 0 0 0-189.90356159-156.8011059z"  ></path></symbol><symbol id="icon-folder" viewBox="0 0 1024 1024"><path d="M850.76782177 899.16322405H173.23217823c-80.04599703 0-145.18620917-65.14021213-145.18620914-145.18620915V270.0229851c0-80.04599703 65.14021213-145.18620917 145.18620914-145.18620915h290.37241835c12.82478217 0 25.16560998 5.08151731 34.21555071 14.17985271L580.43110029 221.62758167H850.76782177c80.04599703 0 145.18620917 65.14021213 145.18620914 145.18620916v387.16322407c0 80.04599703-65.14021213 145.18620917-145.18620914 145.18620915zM173.23217823 221.62758167c-26.66586671 0-48.39540342 21.72953559-48.39540228 48.39540343v483.9540298c0 26.71426248 21.72953559 48.39540342 48.39540228 48.39540343h677.53564354a48.39540342 48.39540342 0 0 0 48.39540228-48.39540343V366.81379083c0-26.66586671-21.68114094-48.39540342-48.39540228-48.39540342h-290.37241835a48.20182143 48.20182143 0 0 1-34.21555071-14.17985272L443.56889971 221.62758167H173.23217823z"  ></path></symbol><symbol id="icon-code" viewBox="0 0 1024 1024"><path d="M810.666667 896H213.333333c-70.570667 0-128-57.429333-128-128V256c0-70.570667 57.429333-128 128-128h597.333334c70.570667 0 128 57.429333 128 128v512c0 70.570667-57.429333 128-128 128zM213.333333 213.333333c-23.509333 0-42.666667 19.157333-42.666666 42.666667v512c0 23.552 19.157333 42.666667 42.666666 42.666667h597.333334a42.666667 42.666667 0 0 0 42.666666-42.666667V256c0-23.509333-19.114667-42.666667-42.666666-42.666667H213.333333z m469.333334 469.333334h-128a42.666667 42.666667 0 1 1 0-85.333334h128a42.666667 42.666667 0 1 1 0 85.333334z m-341.333334 0a42.624 42.624 0 0 1-30.165333-72.832L409.002667 512 311.168 414.165333a42.624 42.624 0 1 1 60.330667-60.330666l128 128a42.624 42.624 0 0 1 0 60.330666l-128 128A42.538667 42.538667 0 0 1 341.333333 682.666667z"  ></path></symbol><symbol id="icon-trash" viewBox="0 0 1024 1024"><path d="M703.06505477 973.6212981H320.98110664a138.94801098 138.94801098 0 0 1-138.11709156-128.65385568L145.88814913 327.35148055H142.70296217a46.16213013 46.16213013 0 0 1 0-92.3242592h184.64851838V142.70296217c0-50.91682878 41.40743039-92.32425919 92.32426026-92.32426027h184.64851838c50.91682878 0 92.32425919 41.40743039 92.32426026 92.32426027v92.32425918h184.64851838a46.16213013 46.16213013 0 1 1 0 92.3242592h-3.18518696l-36.97586595 517.66212328A138.90184849 138.90184849 0 0 1 703.06505477 973.6212981zM238.44321859 327.35148055l36.51424538 511.06093909a46.16213013 46.16213013 0 0 0 46.02364267 42.88461819h382.08394813c24.05046925 0 44.31564459-18.78798647 46.02364375-42.83845571L785.55678141 327.35148055H238.44321859zM419.67574081 235.02722135h184.64851838V142.70296217h-184.64851838v92.32425918z m184.64851838 553.9455573a46.16213013 46.16213013 0 0 1-46.16212906-46.16213014v-276.97277864a46.16213013 46.16213013 0 1 1 92.32425919 0v276.97277864a46.16213013 46.16213013 0 0 1-46.16213013 46.16213014z m-184.64851838 0a46.16213013 46.16213013 0 0 1-46.16213013-46.16213014v-276.97277864a46.16213013 46.16213013 0 0 1 92.32425919 0v276.97277864a46.16213013 46.16213013 0 0 1-46.16212906 46.16213014z"  ></path></symbol><symbol id="icon-copy" viewBox="0 0 1024 1024"><path d="M821.25238645 975.87857967h-412.33651486c-85.25057492 0-154.62619322-69.37561829-154.62619323-154.62619322v-51.54206481H202.74761355c-85.25057492 0-154.62619322-69.37561829-154.62619322-154.62619323V202.74761355c0-85.25057492 69.37561829-154.62619322 154.62619322-154.62619322h412.33651486c85.25057492 0 154.62619322 69.37561829 154.62619323 154.62619322v51.54206481h51.54206481c85.25057492 0 154.62619322 69.37561829 154.62619322 154.62619323v412.33651486c0 85.25057492-69.37561829 154.62619322-154.62619322 154.62619322z m-463.87857967-257.71032165v103.08412843c0 28.45121955 23.14238651 51.5420648 51.54206481 51.54206481h412.33651486a51.5420648 51.5420648 0 0 0 51.54206481-51.54206481v-412.33651486c0-28.39967709-23.09084524-51.5420648-51.54206481-51.54206481h-412.33651486c-28.39967709 0-51.5420648 23.14238651-51.54206481 51.54206481v309.25238643zM202.74761355 151.20554874c-28.39967709 0-51.5420648 23.14238651-51.54206481 51.54206481v412.33651486c0 28.45121955 23.14238651 51.5420648 51.54206481 51.54206481h51.54206481v-257.71032163c0-85.25057492 69.37561829-154.62619322 154.62619323-154.62619323h257.71032163V202.74761355c0-28.39967709-23.09084524-51.5420648-51.54206481-51.54206481H202.74761355z"  ></path></symbol><symbol id="icon-archive" viewBox="0 0 1024 1024"><path d="M750.93333296 942.08H273.06666704c-79.03914703 0-143.35999999-64.32085296-143.36-143.36V360.46848A143.64672 143.64672 0 0 1 34.13333296 225.28c0-79.03914703 64.32085296-143.35999999 143.36000001-143.36h669.01333406c79.03914703 0 143.35999999 64.32085296 143.36000001 143.36a143.64672 143.64672 0 0 1-95.57333408 135.18848V798.72c0 79.03914703-64.32085296 143.35999999-143.36 143.36zM225.28 368.64000001v430.07999999c0 26.37824 21.45621296 47.78666705 47.78666704 47.78666703h477.86666592a47.78666705 47.78666705 0 0 0 47.78666704-47.78666703V368.64000001H225.28zM177.49333297 273.06666704h669.01333406a47.83445296 47.83445296 0 0 0 0-95.57333407H177.49333297c-26.33045296 0-47.78666705 21.45621296-47.78666593 47.78666703s21.45621296 47.78666705 47.78666593 47.78666704z m430.07999999 286.72000001h-191.14666592a47.78666705 47.78666705 0 1 1 0-95.5733341h191.14666592a47.78666705 47.78666705 0 1 1 0 95.5733341z"  ></path></symbol><symbol id="icon-download" viewBox="0 0 1024 1024"><path d="M452.05640487 92.39483687a59.94359513 59.94359513 0 0 1 119.88719026 0v429.07625062l194.33713344-194.3970775 84.82018599 84.76024331L512 750.93516787l-339.10091456-339.10091457 84.76024192-84.76024331L452.05640487 521.47108749V92.39483687z"  ></path><path d="M32.45124314 631.88718886h119.88718886v239.77437914h719.323136v-239.77437914h119.88718886v239.77437914a119.88718886 119.88718886 0 0 1-119.88718886 119.88718886H152.338432a119.88718886 119.88718886 0 0 1-119.88718886-119.88718886v-239.77437914z"  ></path></symbol></svg>',c=(c=document.getElementsByTagName("script"))[c.length-1].getAttribute("data-injectcss"),i=function(e,t){t.parentNode.insertBefore(e,t)};if(c&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}function l(){s||(s=!0,o())}function d(){try{r.documentElement.doScroll("left")}catch(e){return void setTimeout(d,50)}l()}t=function(){var e,t;(t=document.createElement("div")).innerHTML=n,n=null,(e=t.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width=0,e.style.height=0,e.style.overflow="hidden",t=e,(e=document.body).firstChild?i(t,e.firstChild):e.appendChild(t))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(t,0):(a=function(){document.removeEventListener("DOMContentLoaded",a,!1),t()},document.addEventListener("DOMContentLoaded",a,!1)):document.attachEvent&&(o=t,r=e.document,s=!1,d(),r.onreadystatechange=function(){"complete"==r.readyState&&(r.onreadystatechange=null,l())})}(window);
