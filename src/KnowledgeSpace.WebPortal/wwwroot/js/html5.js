/*! HTML5 Shiv 3.4 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
  Uncompressed source: https://github.com/aFarkas/html5shiv  */
(function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}function o(a){var b,c=a.getElementsByTagName("*"),d=c.length,e=RegExp("^(?:"+h().join("|")+")$","i"),f=[];while(d--)b=c[d],e.test(b.nodeName)&&f.push(b.applyElement(p(b)));return f}function p(a){var b,c=a.attributes,d=c.length,e=a.ownerDocument.createElement(m+":"+a.nodeName);while(d--)b=c[d],b.specified&&e.setAttribute(b.nodeName,b.nodeValue);return e.style.cssText=a.style.cssText,e}function q(a){var b,c=a.split("{"),d=c.length,e=RegExp("(^|[\\s,>+~])("+h().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),f="$1"+m+"\\:$2";while(d--)b=c[d]=c[d].split("}"),b[b.length-1]=b[b.length-1].replace(e,f),c[d]=b.join("}");return c.join("{")}function r(a){var b=a.length;while(b--)a[b].removeNode()}function s(a){var b,c,d=a.namespaces,e=a.parentWindow;return!n||a.printShived?a:(typeof d[m]=="undefined"&&d.add(m),e.attachEvent("onbeforeprint",function(){var d,e,f,h=a.styleSheets,i=[],j=h.length,k=Array(j);while(j--)k[j]=h[j];while(f=k.pop())if(!f.disabled&&l.test(f.media)){for(d=f.imports,j=0,e=d.length;j<e;j++)k.push(d[j]);try{i.push(f.cssText)}catch(m){}}i=q(i.reverse().join("")),c=o(a),b=g(a,i)}),e.attachEvent("onafterprint",function(){r(c),b.removeNode(!0)}),a.printShived=!0,a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b);var l=/^$|\b(?:all|print)\b/,m="html5shiv",n=!f&&function(){var c=b.documentElement;return typeof b.namespaces!="undefined"&&typeof b.parentWindow!="undefined"&&typeof c.applyElement!="undefined"&&typeof c.removeNode!="undefined"&&typeof a.attachEvent!="undefined"}();k.type+=" print",k.shivPrint=s,s(b)})(this,document)