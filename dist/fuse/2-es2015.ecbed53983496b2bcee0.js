(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/ALb":function(t,e,s){"use strict";s.d(e,"a",function(){return i});class i{}},FVPZ:function(t,e,s){"use strict";s.d(e,"a",function(){return i}),s("8Y7J"),s("Xd0L"),s("KCVW");class i{}},bOtU:function(t,e,s){"use strict";var i=s("8Y7J");s.d(e,"a",function(){return h}),s.d(e,"b",function(){return a}),s.d(e,"c",function(){return p}),s.d(e,"d",function(){return f}),s.d(e,"e",function(){return n}),s.d(e,"f",function(){return r}),s.d(e,"g",function(){return l});const n=new i.InjectionToken("config"),a=new i.InjectionToken("NEW_CONFIG"),h=new i.InjectionToken("INITIAL_CONFIG"),r={suffix:"",prefix:"",clearIfNotMatch:!1,showTemplate:!1,showMaskTyped:!1,dropSpecialCharacters:!0,hiddenInput:void 0,shownMaskExpression:"",validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}};var c;!function(t){t.SEPARATOR="separator",t.COMMA_SEPARATOR="comma_separator",t.DOT_SEPARATOR="dot_separator"}(c||(c={}));let l=class{constructor(t){this._config=t,this.maskExpression="",this.actualValue="",this.shownMaskExpression="",this.separator=((t,e,s,i)=>{const n=(t+="").split(s),a=n.length>1?`${s}${n[1]}`:"";let h=n[0];const r=/(\d+)(\d{3})/;for(;r.test(h);)h=h.replace(r,"$1"+e+"$2");return void 0===i?h+a:0===i?h:h+a.substr(0,i+1)}),this.percentage=(t=>Number(t)>=0&&Number(t)<=100),this.getPrecision=(t=>{const e=t.split(".");return e.length>1?Number(e[e.length-1]):1/0}),this.checkInputPrecision=((t,e,s)=>{if(e<1/0){let i;i="."===s?new RegExp(`\\.\\d{${e}}.*$`):new RegExp(`,\\d{${e}}.*$`);const n=t.match(i);n&&n[0].length-1>e?t=t.substring(0,t.length-1):0===e&&t.endsWith(s)&&(t=t.substring(0,t.length-1))}return t}),this._shift=new Set,this.clearIfNotMatch=this._config.clearIfNotMatch,this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.maskSpecialCharacters=this._config.specialCharacters,this.maskAvailablePatterns=this._config.patterns,this.prefix=this._config.prefix,this.suffix=this._config.suffix,this.hiddenInput=this._config.hiddenInput,this.showMaskTyped=this._config.showMaskTyped,this.validation=this._config.validation}applyMaskWithPattern(t,e){const[s,i]=e;return this.customPattern=i,this.applyMask(t,s)}applyMask(t,e,s=0,i=(()=>{})){if(null==t||void 0===e)return"";let n=0,a="",h=!1,r=!1,l=1,o=!1;t.slice(0,this.prefix.length)===this.prefix&&(t=t.slice(this.prefix.length,t.length));const p=t.toString().split("");if("IP"===e&&(this.ipError=!!(p.filter(t=>"."===t).length<3&&p.length<7),e="099.099.099.099"),e.startsWith("percent")){if(t.match("[a-z]|[A-Z]")||t.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/]/)){t=this._checkInput(t);const s=this.getPrecision(e);t=this.checkInputPrecision(t,s,".")}if(t.indexOf(".")>0&&!this.percentage(t.substring(0,t.indexOf(".")))){const e=t.substring(0,t.indexOf(".")-1);t=`${e}${t.substring(t.indexOf("."),t.length)}`}a=this.percentage(t)?t:t.substring(0,t.length-1)}else if(e.startsWith(c.SEPARATOR)||e.startsWith(c.DOT_SEPARATOR)||e.startsWith(c.COMMA_SEPARATOR)){(t.match("[w\u0430-\u044f\u0410-\u042f]")||t.match("[\u0401\u0451\u0410-\u044f]")||t.match("[a-z]|[A-Z]")||t.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\[\]:";<>.?\/]/)||t.match("[^A-Za-z0-9,]"))&&(t=this._checkInput(t));const i=this.getPrecision(e);let n;e.startsWith(c.SEPARATOR)&&t.includes(".")&&t.endsWith(".")&&t.indexOf(".")!==t.lastIndexOf(".")&&(t=t.substring(0,t.length-1)),e.startsWith(c.DOT_SEPARATOR)&&(t=t.length>1&&"0"===t[0]&&","!==t[1]?t.slice(1,t.length):t),e.startsWith(c.COMMA_SEPARATOR)&&(t=t.length>1&&"0"===t[0]&&"."!==t[1]?t.slice(1,t.length):t);let h=!1;["\u20bd","\u20ac","\u20b4","$","\xa3","\xa5"].forEach(e=>{t.includes(e)&&(h=!0)}),e.startsWith(c.SEPARATOR)?((t.match(/[@#!$%^&*()_+|~=`{}\[\]:,";<>?\/]/)||h)&&(t=t.substring(0,t.length-1)),n=(t=this.checkInputPrecision(t,i,".")).replace(/\s/g,""),a=this.separator(n," ",".",i)):e.startsWith(c.DOT_SEPARATOR)?((t.match(/[@#!$%^&*()_+|~=`{}\[\]:\s";<>?\/]/)||h)&&(t=t.substring(0,t.length-1)),n=(t=this.checkInputPrecision(t,i,",")).replace(/\./g,""),a=this.separator(n,".",",",i)):e.startsWith(c.COMMA_SEPARATOR)&&((t.match(/[@#!$%^&*()_+|~=`{}\[\]:\s";<>?\/]/)||h)&&(t=t.substring(0,t.length-1)),n=t.replace(/,/g,""),a=this.separator(n,",",".",i));const o=a.indexOf(",")-t.indexOf(","),p=a.length-t.length;if(p>0&&","!==a[s]){r=!0;let t=0;do{this._shift.add(s+t),t++}while(t<p)}else 0!==o&&s>0&&!(a.indexOf(",")>=s&&s>3)||!(a.indexOf(".")>=s&&s>3)&&p<=0?(this._shift.clear(),r=!0,l=p,this._shift.add(s+=p)):this._shift.clear()}else for(let c=0,g=p[0];c<p.length&&n!==e.length;g=p[++c])if(this._checkSymbolMask(g,e[n])&&"?"===e[n+1])a+=g,n+=2;else if("*"===e[n+1]&&h&&this._checkSymbolMask(g,e[n+2]))a+=g,n+=3,h=!1;else if(this._checkSymbolMask(g,e[n])&&"*"===e[n+1])a+=g,h=!0;else if("?"===e[n+1]&&this._checkSymbolMask(g,e[n+2]))a+=g,n+=3;else if(this._checkSymbolMask(g,e[n])||this.hiddenInput&&this.maskAvailablePatterns[e[n]]&&this.maskAvailablePatterns[e[n]].symbol===g){if("H"===e[n]&&Number(g)>2){const t=/[*?]/g.test(e.slice(0,n+=1))?p.length:n;this._shift.add(t+this.prefix.length||0),c--;continue}if("h"===e[n]&&"2"===a&&Number(g)>3){n+=1,c--;continue}if("m"===e[n]&&Number(g)>5){const t=/[*?]/g.test(e.slice(0,n+=1))?p.length:n;this._shift.add(t+this.prefix.length||0),c--;continue}if("s"===e[n]&&Number(g)>5){const t=/[*?]/g.test(e.slice(0,n+=1))?p.length:n;this._shift.add(t+this.prefix.length||0),c--;continue}const s=31;if("d"===e[n]&&(Number(t.slice(n,n+2))>s||"/"===t[n+1])){const t=/[*?]/g.test(e.slice(0,n+=1))?p.length:n;this._shift.add(t+this.prefix.length||0),c--;continue}if("M"===e[n]){const i=12,a=0===n&&(Number(g)>2||Number(t.slice(n,n+2))>i||"/"===t[n+1]),h=t.slice(n-3,n-1).includes("/")&&("/"===t[n-2]&&Number(t.slice(n-1,n+1))>i&&"/"!==t[n]||"/"===t[n]||"/"===t[n-3]&&Number(t.slice(n-2,n))>i&&"/"!==t[n-1]||"/"===t[n-1]),r=Number(t.slice(n-3,n-1))<=s&&!t.slice(n-3,n-1).includes("/")&&"/"===t[n-1]&&(Number(t.slice(n,n+2))>i||"/"===t[n+1]),l=Number(t.slice(n-3,n-1))>s&&!t.slice(n-3,n-1).includes("/")&&!t.slice(n-2,n).includes("/")&&Number(t.slice(n-2,n))>i,o=Number(t.slice(n-3,n-1))<=s&&!t.slice(n-3,n-1).includes("/")&&"/"!==t[n-1]&&Number(t.slice(n-1,n+1))>i;if(a||h||r||l||o){const t=/[*?]/g.test(e.slice(0,n+=1))?p.length:n;this._shift.add(t+this.prefix.length||0),c--;continue}}a+=g,n++}else if(-1!==this.maskSpecialCharacters.indexOf(e[n])){a+=e[n];const t=/[*?]/g.test(e.slice(0,++n))?p.length:n;this._shift.add(t+this.prefix.length||0),c--}else this.maskSpecialCharacters.indexOf(g)>-1&&this.maskAvailablePatterns[e[n]]&&this.maskAvailablePatterns[e[n]].optional?(n++,c--):"*"===this.maskExpression[n+1]&&this._findSpecialChar(this.maskExpression[n+2])&&this._findSpecialChar(g)===this.maskExpression[n+2]&&h?(n+=3,a+=g):"?"===this.maskExpression[n+1]&&this._findSpecialChar(this.maskExpression[n+2])&&this._findSpecialChar(g)===this.maskExpression[n+2]&&h?(n+=3,a+=g):this.showMaskTyped&&this.maskSpecialCharacters.indexOf(g)<0&&"_"!==g&&(o=!0);a.length+1===e.length&&-1!==this.maskSpecialCharacters.indexOf(e[e.length-1])&&(a+=e[e.length-1]);let f=s+1;for(;this._shift.has(f);)l++,f++;let u=this._shift.has(s)?l:0;o&&u--,i(u,r),l<0&&this._shift.clear();let d=this.suffix?`${this.prefix}${a}${this.suffix}`:`${this.prefix}${a}`;return 0===a.length&&(d=`${this.prefix}${a}`),d}_findSpecialChar(t){return this.maskSpecialCharacters.find(e=>e===t)}_checkSymbolMask(t,e){return this.maskAvailablePatterns=this.customPattern?this.customPattern:this.maskAvailablePatterns,this.maskAvailablePatterns[e]&&this.maskAvailablePatterns[e].pattern&&this.maskAvailablePatterns[e].pattern.test(t)}_checkInput(t){return t.split("").filter(t=>t.match("\\d")||"."===t||","===t).join("")}};var o;let p=o=class{static forRoot(t){return{ngModule:o,providers:[{provide:a,useValue:t},{provide:h,useValue:r},{provide:n,useFactory:f,deps:[h,a]},l]}}static forChild(t){return{ngModule:o}}};function f(t,e){return e instanceof Function?Object.assign({},t,e()):Object.assign({},t,e)}}}]);