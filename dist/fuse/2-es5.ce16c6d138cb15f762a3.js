(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/ALb":function(e,t,s){"use strict";s.d(t,"a",function(){return i});var i=function(){return function(){}}()},"6uYy":function(e,t,s){"use strict";s.d(t,"a",function(){return o}),s.d(t,"b",function(){return f}),s.d(t,"c",function(){return p}),s.d(t,"d",function(){return h}),s.d(t,"e",function(){return m}),s.d(t,"f",function(){return k}),s.d(t,"g",function(){return n}),s.d(t,"h",function(){return l}),s.d(t,"i",function(){return u});var i,r=s("CcnG"),a=s("mrSG"),n=new r.u("config"),h=new r.u("NEW_CONFIG"),o=new r.u("INITIAL_CONFIG"),l={suffix:"",prefix:"",clearIfNotMatch:!1,showTemplate:!1,showMaskTyped:!1,dropSpecialCharacters:!0,hiddenInput:void 0,shownMaskExpression:"",validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}},c=["percent","Hh:m0:s0","Hh:m0","Hh","m0:s0","s0","m0","separator","dot_separator","comma_separator","d0/M0/0000","d0/M0","d0","M0"];!function(e){e.SEPARATOR="separator",e.COMMA_SEPARATOR="comma_separator",e.DOT_SEPARATOR="dot_separator"}(i||(i={}));var u=function(){function e(e){this._config=e,this.maskExpression="",this.actualValue="",this.shownMaskExpression="",this.separator=function(e,t,s,i){for(var r=(e+="").split(s),a=r.length>1?""+s+r[1]:"",n=r[0],h=/(\d+)(\d{3})/;h.test(n);)n=n.replace(h,"$1"+t+"$2");return void 0===i?n+a:0===i?n:n+a.substr(0,i+1)},this.percentage=function(e){return Number(e)>=0&&Number(e)<=100},this.getPrecision=function(e){var t=e.split(".");return t.length>1?Number(t[t.length-1]):1/0},this.checkInputPrecision=function(e,t,s){if(t<1/0){var i;i="."===s?new RegExp("\\.\\d{"+t+"}.*$"):new RegExp(",\\d{"+t+"}.*$");var r=e.match(i);r&&r[0].length-1>t?e=e.substring(0,e.length-1):0===t&&e.endsWith(s)&&(e=e.substring(0,e.length-1))}return e},this._shift=new Set,this.clearIfNotMatch=this._config.clearIfNotMatch,this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.maskSpecialCharacters=this._config.specialCharacters,this.maskAvailablePatterns=this._config.patterns,this.prefix=this._config.prefix,this.suffix=this._config.suffix,this.hiddenInput=this._config.hiddenInput,this.showMaskTyped=this._config.showMaskTyped,this.validation=this._config.validation}return e.prototype.applyMaskWithPattern=function(e,t){var s=Object(a.h)(t,2),i=s[0];return this.customPattern=s[1],this.applyMask(e,i)},e.prototype.applyMask=function(e,t,s,r){if(void 0===s&&(s=0),void 0===r&&(r=function(){}),null==e||void 0===t)return"";var a=0,n="",h=!1,o=!1,l=1;e.slice(0,this.prefix.length)===this.prefix&&(e=e.slice(this.prefix.length,e.length));var c=e.toString().split("");if("IP"===t&&(this.ipError=!!(c.filter(function(e){return"."===e}).length<3&&c.length<7),t="099.099.099.099"),t.startsWith("percent")){if(e.match("[a-z]|[A-Z]")||e.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/]/)){e=this._checkInput(e);var u=this.getPrecision(t);e=this.checkInputPrecision(e,u,".")}n=this.percentage(e)?e:e.substring(0,e.length-1)}else if(t.startsWith(i.SEPARATOR)||t.startsWith(i.DOT_SEPARATOR)||t.startsWith(i.COMMA_SEPARATOR)){(e.match("[w\u0430-\u044f\u0410-\u042f]")||e.match("[\u0401\u0451\u0410-\u044f]")||e.match("[a-z]|[A-Z]")||e.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\[\]:";<>.?\/]/))&&(e=this._checkInput(e)),u=this.getPrecision(t);var p=void 0;t.startsWith(i.SEPARATOR)&&e.includes(",")&&e.endsWith(",")&&e.indexOf(",")!==e.lastIndexOf(",")&&(e=e.substring(0,e.length-1)),t.startsWith(i.DOT_SEPARATOR)&&(-1!==e.indexOf(".")&&e.indexOf(".")===e.lastIndexOf(".")&&(e.indexOf(".")>3||e.length<6)&&(e=e.replace(".",",")),e=e.length>1&&"0"===e[0]&&","!==e[1]?e.slice(1,e.length):e),t.startsWith(i.COMMA_SEPARATOR)&&(e=e.length>1&&"0"===e[0]&&"."!==e[1]?e.slice(1,e.length):e),t.startsWith(i.SEPARATOR)?(e.match(/[@#!$%^&*()_+|~=`{}\[\]:.";<>?\/]/)&&(e=e.substring(0,e.length-1)),p=(e=this.checkInputPrecision(e,u,",")).replace(/\s/g,""),n=this.separator(p," ",",",u)):t.startsWith(i.DOT_SEPARATOR)?(e.match(/[@#!$%^&*()_+|~=`{}\[\]:\s";<>?\/]/)&&(e=e.substring(0,e.length-1)),p=(e=this.checkInputPrecision(e,u,",")).replace(/\./g,""),n=this.separator(p,".",",",u)):t.startsWith(i.COMMA_SEPARATOR)&&(p=e.replace(/,/g,""),n=this.separator(p,",",".",u));var f=n.indexOf(",")-e.indexOf(",");if((d=n.length-e.length)>0&&","!==n[s]){o=!0;var m=0;do{this._shift.add(s+m),m++}while(m<d)}else 0!==f&&s>0&&!(n.indexOf(",")>=s&&s>3)||!(n.indexOf(".")>=s&&s>3)&&d<=0?(this._shift.clear(),o=!0,l=d,this._shift.add(s+=d)):this._shift.clear()}else for(var k=0,_=c[0];k<c.length&&a!==t.length;_=c[++k])if(this._checkSymbolMask(_,t[a])&&"?"===t[a+1])n+=_,a+=2;else if("*"===t[a+1]&&h&&this._checkSymbolMask(_,t[a+2]))n+=_,a+=3,h=!1;else if(this._checkSymbolMask(_,t[a])&&"*"===t[a+1])n+=_,h=!0;else if("?"===t[a+1]&&this._checkSymbolMask(_,t[a+2]))n+=_,a+=3;else if(this._checkSymbolMask(_,t[a])||this.hiddenInput&&this.maskAvailablePatterns[t[a]]&&this.maskAvailablePatterns[t[a]].symbol===_){if("H"===t[a]&&Number(_)>2){var d=/[*?]/g.test(t.slice(0,a+=1))?c.length:a;this._shift.add(d+this.prefix.length||0),k--;continue}if("h"===t[a]&&"2"===n&&Number(_)>3)continue;if("m"===t[a]&&Number(_)>5){d=/[*?]/g.test(t.slice(0,a+=1))?c.length:a,this._shift.add(d+this.prefix.length||0),k--;continue}if("s"===t[a]&&Number(_)>5){d=/[*?]/g.test(t.slice(0,a+=1))?c.length:a,this._shift.add(d+this.prefix.length||0),k--;continue}if("d"===t[a]&&Number(_)>3){d=/[*?]/g.test(t.slice(0,a+=1))?c.length:a,this._shift.add(d+this.prefix.length||0),k--;continue}if("d"===t[a-1]&&Number(e.slice(a-1,a+1))>31)continue;if("M"===t[a]&&Number(_)>1){d=/[*?]/g.test(t.slice(0,a+=1))?c.length:a,this._shift.add(d+this.prefix.length||0),k--;continue}if("M"===t[a-1]&&Number(e.slice(a-1,a+1))>12)continue;n+=_,a++}else-1!==this.maskSpecialCharacters.indexOf(t[a])?(n+=t[a],d=/[*?]/g.test(t.slice(0,++a))?c.length:a,this._shift.add(d+this.prefix.length||0),k--):this.maskSpecialCharacters.indexOf(_)>-1&&this.maskAvailablePatterns[t[a]]&&this.maskAvailablePatterns[t[a]].optional?(a++,k--):"*"===this.maskExpression[a+1]&&this._findSpecialChar(this.maskExpression[a+2])&&this._findSpecialChar(_)===this.maskExpression[a+2]&&h?(a+=3,n+=_):"?"===this.maskExpression[a+1]&&this._findSpecialChar(this.maskExpression[a+2])&&this._findSpecialChar(_)===this.maskExpression[a+2]&&h&&(a+=3,n+=_);n.length+1===t.length&&-1!==this.maskSpecialCharacters.indexOf(t[t.length-1])&&(n+=t[t.length-1]);for(var v=s+1;this._shift.has(v);)l++,v++;r(this._shift.has(s)?l:0,o),l<0&&this._shift.clear();var S=this.suffix?""+this.prefix+n+this.suffix:""+this.prefix+n;return 0===n.length&&(S=""+this.prefix+n),S},e.prototype._findSpecialChar=function(e){return this.maskSpecialCharacters.find(function(t){return t===e})},e.prototype._checkSymbolMask=function(e,t){return this.maskAvailablePatterns=this.customPattern?this.customPattern:this.maskAvailablePatterns,this.maskAvailablePatterns[t]&&this.maskAvailablePatterns[t].pattern&&this.maskAvailablePatterns[t].pattern.test(e)},e.prototype._checkInput=function(e){return e.split("").filter(function(e){return e.match("\\d")||"."===e||","===e}).join("")},e}(),p=function(e){function t(t,s,i,r){var a=e.call(this,s)||this;return a.document=t,a._config=s,a._elementRef=i,a._renderer=r,a.validation=!0,a.maskExpression="",a.isNumberValue=!1,a.showMaskTyped=!1,a.maskIsShown="",a.selStart=null,a.selEnd=null,a.onChange=function(e){},a._formElement=a._elementRef.nativeElement,a}return Object(a.d)(t,e),t.prototype.applyMask=function(t,s,r,a){if(void 0===r&&(r=0),void 0===a&&(a=function(){}),!s)return t;if(this.maskIsShown=this.showMaskTyped?this.showMaskInInput():"","IP"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(t||"#")),!t&&this.showMaskTyped)return this.formControlResult(this.prefix),this.prefix+this.maskIsShown;var n=t&&"number"==typeof this.selStart?t[this.selStart]:"",h="";if(void 0!==this.hiddenInput){var o=this.actualValue.split("");""!==t&&o.length?"number"==typeof this.selStart&&"number"==typeof this.selEnd&&(t.length>o.length?o.splice(this.selStart,0,n):t.length<o.length&&(o.length-t.length==1?o.splice(this.selStart-1,1):o.splice(this.selStart,this.selEnd-this.selStart))):o=[],h=this.actualValue.length?this.shiftTypedSymbols(o.join("")):t}h=Boolean(h)&&h.length?h:t;var l=e.prototype.applyMask.call(this,h,s,r,a);if(this.actualValue=this.getActualValue(l),(this.maskExpression.startsWith(i.SEPARATOR)||this.maskExpression.startsWith(i.DOT_SEPARATOR))&&!0===this.dropSpecialCharacters&&(this.maskSpecialCharacters=this.maskSpecialCharacters.filter(function(e){return","!==e})),this.maskExpression.startsWith(i.COMMA_SEPARATOR)&&!0===this.dropSpecialCharacters&&(this.maskSpecialCharacters=this.maskSpecialCharacters.filter(function(e){return"."!==e})),this.formControlResult(l),!this.showMaskTyped)return this.hiddenInput&&l&&l.length?this.hideInput(l,this.maskExpression):l;var c=this.prefix+this.maskIsShown;return l+("IP"===this.maskExpression?c:c.slice(l.length))},t.prototype.applyValueChanges=function(e,t){void 0===e&&(e=0),void 0===t&&(t=function(){}),this._formElement.value=this.applyMask(this._formElement.value,this.maskExpression,e,t),this._formElement!==this.document.activeElement&&this.clearIfNotMatchFn()},t.prototype.hideInput=function(e,t){var s=this;return e.split("").map(function(e,i){return s.maskAvailablePatterns&&s.maskAvailablePatterns[t[i]]&&s.maskAvailablePatterns[t[i]].symbol?s.maskAvailablePatterns[t[i]].symbol:e}).join("")},t.prototype.getActualValue=function(e){var t=this,s=e.split("").filter(function(e,s){return t._checkSymbolMask(e,t.maskExpression[s])||t.maskSpecialCharacters.includes(t.maskExpression[s])&&e===t.maskExpression[s]});return s.join("")===e?s.join(""):e},t.prototype.shiftTypedSymbols=function(e){var t=this,s="";return(e&&e.split("").map(function(i,r){if(t.maskSpecialCharacters.includes(e[r+1])&&e[r+1]!==t.maskExpression[r+1])return s=i,e[r+1];if(s.length){var a=s;return s="",a}return i})||[]).join("")},t.prototype.showMaskInInput=function(e){if(this.showMaskTyped&&this.shownMaskExpression){if(this.maskExpression.length!==this.shownMaskExpression.length)throw new Error("Mask expression must match mask placeholder length");return this.shownMaskExpression}return this.showMaskTyped?e?this._checkForIp(e):this.maskExpression.replace(/\w/g,"_"):""},t.prototype.clearIfNotMatchFn=function(){this.clearIfNotMatch&&this.prefix.length+this.maskExpression.length+this.suffix.length!==this._formElement.value.length&&(this.formElementProperty=["value",""],this.applyMask(this._formElement.value,this.maskExpression))},Object.defineProperty(t.prototype,"formElementProperty",{set:function(e){var t=Object(a.h)(e,2);this._renderer.setProperty(this._formElement,t[0],t[1])},enumerable:!0,configurable:!0}),t.prototype.checkSpecialCharAmount=function(e){var t=this;return e.split("").filter(function(e){return t._findSpecialChar(e)}).length},t.prototype._checkForIp=function(e){if("#"===e)return"_._._._";for(var t=[],s=0;s<e.length;s++)e[s].match("\\d")&&t.push(e[s]);return t.length<=3?"_._._":t.length>3&&t.length<=6?"_._":t.length>6&&t.length<=9?"_":""},t.prototype.formControlResult=function(e){Array.isArray(this.dropSpecialCharacters)?this.onChange(this._removeMask(this._removeSuffix(this._removePrefix(e)),this.dropSpecialCharacters)):this.onChange(this.dropSpecialCharacters?this._checkSymbols(e):this._removeSuffix(this._removePrefix(e)))},t.prototype._removeMask=function(e,t){return e?e.replace(this._regExpForRemove(t),""):e},t.prototype._removePrefix=function(e){return this.prefix&&e?e.replace(this.prefix,""):e},t.prototype._removeSuffix=function(e){return this.suffix&&e?e.replace(this.suffix,""):e},t.prototype._regExpForRemove=function(e){return new RegExp(e.map(function(e){return"\\"+e}).join("|"),"gi")},t.prototype._checkSymbols=function(e){var t=this.testFn(i.SEPARATOR,this.maskExpression);return t&&this.isNumberValue?""===e?e:","===e?null:Number(this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters).replace(",",".")):(t=this.testFn(i.DOT_SEPARATOR,this.maskExpression))&&this.isNumberValue?""===e?e:","===e?null:Number(this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters).replace(",",".")):(t=this.testFn(i.COMMA_SEPARATOR,this.maskExpression))&&this.isNumberValue?""===e?e:"."===e?null:Number(this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters)):this.isNumberValue?""===e?e:Number(this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters)):-1!==this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters).indexOf(",")?this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters).replace(",","."):this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters)},t.prototype.testFn=function(e,t){var s=t.match(new RegExp("^"+e+"\\.([^d]*)"));return s?Number(s[1]):null},t}(u),f=function(){function e(e,t){this.document=e,this._maskService=t,this.maskExpression="",this.specialCharacters=[],this.patterns={},this.prefix="",this.suffix="",this.dropSpecialCharacters=null,this.hiddenInput=null,this.showMaskTyped=null,this.shownMaskExpression=null,this.showTemplate=null,this.clearIfNotMatch=null,this.validation=null,this._position=null,this.onChange=function(e){},this.onTouch=function(){}}return e.prototype.ngOnChanges=function(e){var t=e.specialCharacters,s=e.patterns,i=e.prefix,r=e.suffix,a=e.dropSpecialCharacters,n=e.hiddenInput,h=e.showMaskTyped,o=e.shownMaskExpression,l=e.showTemplate,c=e.clearIfNotMatch,u=e.validation;if(e.maskExpression&&(this._maskValue=e.maskExpression.currentValue||""),t){if(!t.currentValue||!Array.isArray(t.currentValue)||Array.isArray(t.currentValue)&&!t.currentValue.length)return;this._maskService.maskSpecialCharacters=e.specialCharacters.currentValue||""}s&&(this._maskService.maskAvailablePatterns=s.currentValue),i&&(this._maskService.prefix=i.currentValue),r&&(this._maskService.suffix=r.currentValue),a&&(this._maskService.dropSpecialCharacters=a.currentValue),n&&(this._maskService.hiddenInput=n.currentValue),h&&(this._maskService.showMaskTyped=h.currentValue),o&&(this._maskService.shownMaskExpression=o.currentValue),l&&(this._maskService.showTemplate=l.currentValue),c&&(this._maskService.clearIfNotMatch=c.currentValue),u&&(this._maskService.validation=u.currentValue),this._applyMask()},e.prototype.validate=function(e){var t=e.value;if(!this._maskService.validation)return null;if(this._maskService.ipError)return{"Mask error":!0};if(this._maskValue.startsWith("dot_separator")||this._maskValue.startsWith("comma_separator")||this._maskValue.startsWith("separator"))return null;if(c.includes(this._maskValue))return null;if(this._maskService.clearIfNotMatch)return null;if(t&&t.toString().length>=1){var s=0,i=function(e){if(r._maskService.maskAvailablePatterns[e].optional&&!0===r._maskService.maskAvailablePatterns[e].optional){if(r._maskValue.indexOf(e)!==r._maskValue.lastIndexOf(e)){var i=r._maskValue.split("").filter(function(t){return t===e}).join("");s+=i.length}else-1!==r._maskValue.indexOf(e)&&s++;if(-1!==r._maskValue.indexOf(e)&&t.toString().length>=r._maskValue.indexOf(e))return{value:null};if(s===r._maskValue.length)return{value:null}}},r=this;for(var a in this._maskService.maskAvailablePatterns){var n=i(a);if("object"==typeof n)return n.value}if(1===this._maskValue.indexOf("*")||1===this._maskValue.indexOf("?")||1===this._maskValue.indexOf("{"))return null;if(this._maskValue.indexOf("*")>1&&t.toString().length<this._maskValue.indexOf("*")||this._maskValue.indexOf("?")>1&&t.toString().length<this._maskValue.indexOf("?"))return{"Mask error":!0};if(-1===this._maskValue.indexOf("*")||-1===this._maskValue.indexOf("?")){var h=this._maskService.dropSpecialCharacters?this._maskValue.length-this._maskService.checkSpecialCharAmount(this._maskValue)-s:this._maskValue.length-s;if(t.toString().length<h)return{"Mask error":!0}}}return null},e.prototype.onInput=function(e){var t=e.target;if(this._inputValue=t.value,this._maskValue){var s=1===t.selectionStart?t.selectionStart+this._maskService.prefix.length:t.selectionStart,i=0,r=!1;if(this._maskService.applyValueChanges(s,function(e,t){i=e,r=t}),this.document.activeElement===t){this._position=1===this._position&&1===this._inputValue.length?null:this._position;var a=this._position?this._inputValue.length+s+i:s+("Backspace"!==this._code||r?i:0);t.setSelectionRange(a,a),this._position=null}}else this.onChange(t.value)},e.prototype.onBlur=function(){this._maskService.clearIfNotMatchFn(),this.onTouch()},e.prototype.onFocus=function(e){var t=e.target;null!==t&&null!==t.selectionStart&&t.selectionStart===t.selectionEnd&&t.selectionStart>this._maskService.prefix.length&&38!==e.keyCode&&this._maskService.showMaskTyped&&(this._maskService.maskIsShown=this._maskService.showMaskInInput(),t.setSelectionRange&&this._maskService.prefix+this._maskService.maskIsShown===t.value?(t.focus(),t.setSelectionRange(0,0)):t.setSelectionRange&&this._maskService.maskIsShown!==t.value&&(t.focus(),t.setSelectionRange(0,0)));var s=t.value&&t.value!==this._maskService.prefix?t.value:this._maskService.prefix+this._maskService.maskIsShown;t.value!==s&&(t.value=s),(t.selectionStart||t.selectionEnd)<=this._maskService.prefix.length&&(t.selectionStart=this._maskService.prefix.length)},e.prototype.a=function(e){this._code=e.code?e.code:e.key;var t=e.target;this._maskService.selStart=t.selectionStart,this._maskService.selEnd=t.selectionEnd,38===e.keyCode&&e.preventDefault(),(37===e.keyCode||8===e.keyCode)&&(8===e.keyCode&&0===t.value.length&&(t.selectionStart=t.selectionEnd),8===e.keyCode&&0===t.value.length&&(t.selectionStart=t.selectionEnd),t.selectionStart<=this._maskService.prefix.length&&t.selectionEnd<=this._maskService.prefix.length&&e.preventDefault(),8!==e.keyCode||t.readOnly||0!==t.selectionStart||t.selectionEnd!==t.value.length||0===t.value.length||(this._position=this._maskService.prefix?this._maskService.prefix.length:0,this._maskService.applyMask(this._maskService.prefix,this._maskService.maskExpression,this._position)))},e.prototype.onPaste=function(){this._position=Number.MAX_SAFE_INTEGER},e.prototype.writeValue=function(e){return Object(a.b)(this,void 0,void 0,function(){return Object(a.e)(this,function(t){return void 0===e&&(e=""),"number"==typeof e&&(e=String(e),e=this._maskValue.startsWith("dot_separator")?e.replace(".",","):e,this._maskService.isNumberValue=!0),this._maskService.formElementProperty=e&&this._maskService.maskExpression||this._maskService.maskExpression&&(this._maskService.prefix||this._maskService.showMaskTyped)?["value",this._maskService.applyMask(e,this._maskService.maskExpression)]:["value",e],this._inputValue=e,[2]})})},e.prototype.registerOnChange=function(e){this.onChange=e,this._maskService.onChange=this.onChange},e.prototype.registerOnTouched=function(e){this.onTouch=e},e.prototype.setDisabledState=function(e){this._maskService.formElementProperty=["disabled",e]},e.prototype._repeatPatternSymbols=function(e){var t=this;return e.match(/{[0-9]+}/)&&e.split("").reduce(function(s,i,r){if(t._start="{"===i?r:t._start,"}"!==i)return t._maskService._findSpecialChar(i)?s+i:s;t._end=r;var a=Number(e.slice(t._start+1,t._end));return s+new Array(a+1).join(e[t._start-1])},"")||e},e.prototype._applyMask=function(){this._maskService.maskExpression=this._repeatPatternSymbols(this._maskValue||""),this._maskService.formElementProperty=["value",this._maskService.applyMask(this._inputValue,this._maskService.maskExpression)]},e}(),m=function(){function e(){}var t;return t=e,e.forRoot=function(e){return{ngModule:t,providers:[{provide:h,useValue:e},{provide:o,useValue:l},{provide:n,useFactory:k,deps:[o,h]},u]}},e.forChild=function(e){return{ngModule:t}},e}();function k(e,t){return t instanceof Function?Object(a.a)({},e,t()):Object(a.a)({},e,t)}},r43C:function(e,t,s){"use strict";s.d(t,"a",function(){return i}),s("CcnG"),s("Wf4p"),s("n6gG"),s("mrSG");var i=function(){return function(){}}()}}]);