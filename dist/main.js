(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)})([function(a,b,c){a.exports=c(1)},function(a,b,c){'use strict';c.r(b);var d=c(2),e=c.n(d),f=c(3),g=c.n(f),h=c(4),j=c.n(h),k=c(5),l=c.n(k),m=c(6),n=c.n(m),o=c(7),p=c.n(o)},function(){},function(a,b,c){a.exports=c.p+'images/broken.png'},function(a,b,c){a.exports=c.p+'images/favicon-32x32.png'},function(a,b,c){a.exports=c.p+'images/favicon.ico'},function(a,b,c){a.exports=c.p+'images/favicon-16x16.png'},function(){function a(a){var b=a.target.closest('.project-item'),c=b.firstElementChild.getElementsByTagName('img')[1],d=c.src;c.src='',c.src=d}function b(){for(i=0;i<d.length;i++){var a=d[i],b=window.pageYOffset+.85*window.innerHeight,c=a.offsetTop+a.height,e=b>a.offsetTop,f=window.scrollY<c,g=b>a.offsetTop;g&&a.classList.add('item-active')}}console.log('hello wasfsagfsagorld');var c=document.querySelectorAll('.project-item');for(i=0;i<c.length;i++)c[i].addEventListener('mouseenter',a);console.log('hello wo2rld');var d=document.querySelectorAll('.project-item');console.log('hello woasfrld'),window.onload=function(){b();var a=document.querySelectorAll('.title-word');for(console.log(a),i=0;i<a.length;i++){var c=a[i];c.classList.add('text-in-view')}},window.addEventListener('scroll',b),console.log('hello world')}]);