(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/8Cc":function(t,n,e){"use strict";e.d(n,"a",function(){return i});var r=e("VMjx"),c=e("CcnG"),o=e("t/Na"),i=function(){function t(t){this._http=t}return t.prototype.getAdwordsAccounts=function(){return this._http.get(r.a.AdwordsAccount.getAccounts)},t.prototype.removeWebsite=function(t){var n=r.a.Website.removeWebsite.replace("{website_id}",t);return this._http.delete(n)},t.prototype.getWebsites=function(t){var n=r.a.Website.getWebsites.replace("{accountId}",t);return this._http.get(n)},t.prototype.addWebsite=function(t){return this._http.post(r.a.Website.addWebsite,t)},t.prototype.getWebsiteTrackingInfo=function(t){var n=r.a.Website.getWebsiteTrackingInfo.replace("{account_id}",t);return this._http.get(n)},t.prototype.getAdwordsAccountDetail=function(t){var n=r.a.AdwordsAccount.getAwordsAccountDetail.replace("{account_id}",t);return this._http.get(n)},t.ngInjectableDef=c["\u0275\u0275defineInjectable"]({factory:function(){return new t(c["\u0275\u0275inject"](o.c))},token:t,providedIn:"root"}),t}()},"1N2P":function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(){return function(){}}()},"6Wmm":function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e("4+yM"),e("n6gG"),e("CcnG"),e("Wf4p");var r=function(){return function(){}}()},FVSy:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return c});var r=function(){return function(){}}(),c=function(){return function(){}}()},L53J:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(){return function(){}}()},Sm0G:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(){return function(){}}()}}]);