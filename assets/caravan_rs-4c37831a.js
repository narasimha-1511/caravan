import{p as X,g as Y,a as Z,u as ee}from"./index-d39e8d77.js";function re(w,t){for(var e=0;e<t.length;e++){const d=t[e];if(typeof d!="string"&&!Array.isArray(d)){for(const c in d)if(c!=="default"&&!(c in w)){const f=Object.getOwnPropertyDescriptor(d,c);f&&Object.defineProperty(w,c,f.get?f:{enumerable:!0,get:()=>d[c]})}}}return Object.freeze(Object.defineProperty(w,Symbol.toStringTag,{value:"Module"}))}var R={exports:{}};function O(w){if(typeof w!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(w))}function F(w,t){for(var e="",d=0,c=-1,f=0,s,g=0;g<=w.length;++g){if(g<w.length)s=w.charCodeAt(g);else{if(s===47)break;s=47}if(s===47){if(!(c===g-1||f===1))if(c!==g-1&&f===2){if(e.length<2||d!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){var l=e.lastIndexOf("/");if(l!==e.length-1){l===-1?(e="",d=0):(e=e.slice(0,l),d=e.length-1-e.lastIndexOf("/")),c=g,f=0;continue}}else if(e.length===2||e.length===1){e="",d=0,c=g,f=0;continue}}t&&(e.length>0?e+="/..":e="..",d=2)}else e.length>0?e+="/"+w.slice(c+1,g):e=w.slice(c+1,g),d=g-c-1;c=g,f=0}else s===46&&f!==-1?++f:f=-1}return e}function te(w,t){var e=t.dir||t.root,d=t.base||(t.name||"")+(t.ext||"");return e?e===t.root?e+d:e+w+d:d}var D={resolve:function(){for(var t="",e=!1,d,c=arguments.length-1;c>=-1&&!e;c--){var f;c>=0?f=arguments[c]:(d===void 0&&(d=X.cwd()),f=d),O(f),f.length!==0&&(t=f+"/"+t,e=f.charCodeAt(0)===47)}return t=F(t,!e),e?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(t){if(O(t),t.length===0)return".";var e=t.charCodeAt(0)===47,d=t.charCodeAt(t.length-1)===47;return t=F(t,!e),t.length===0&&!e&&(t="."),t.length>0&&d&&(t+="/"),e?"/"+t:t},isAbsolute:function(t){return O(t),t.length>0&&t.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var t,e=0;e<arguments.length;++e){var d=arguments[e];O(d),d.length>0&&(t===void 0?t=d:t+="/"+d)}return t===void 0?".":D.normalize(t)},relative:function(t,e){if(O(t),O(e),t===e||(t=D.resolve(t),e=D.resolve(e),t===e))return"";for(var d=1;d<t.length&&t.charCodeAt(d)===47;++d);for(var c=t.length,f=c-d,s=1;s<e.length&&e.charCodeAt(s)===47;++s);for(var g=e.length,l=g-s,m=f<l?f:l,k=-1,y=0;y<=m;++y){if(y===m){if(l>m){if(e.charCodeAt(s+y)===47)return e.slice(s+y+1);if(y===0)return e.slice(s+y)}else f>m&&(t.charCodeAt(d+y)===47?k=y:y===0&&(k=0));break}var C=t.charCodeAt(d+y),M=e.charCodeAt(s+y);if(C!==M)break;C===47&&(k=y)}var E="";for(y=d+k+1;y<=c;++y)(y===c||t.charCodeAt(y)===47)&&(E.length===0?E+="..":E+="/..");return E.length>0?E+e.slice(s+k):(s+=k,e.charCodeAt(s)===47&&++s,e.slice(s))},_makeLong:function(t){return t},dirname:function(t){if(O(t),t.length===0)return".";for(var e=t.charCodeAt(0),d=e===47,c=-1,f=!0,s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),e===47){if(!f){c=s;break}}else f=!1;return c===-1?d?"/":".":d&&c===1?"//":t.slice(0,c)},basename:function(t,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');O(t);var d=0,c=-1,f=!0,s;if(e!==void 0&&e.length>0&&e.length<=t.length){if(e.length===t.length&&e===t)return"";var g=e.length-1,l=-1;for(s=t.length-1;s>=0;--s){var m=t.charCodeAt(s);if(m===47){if(!f){d=s+1;break}}else l===-1&&(f=!1,l=s+1),g>=0&&(m===e.charCodeAt(g)?--g===-1&&(c=s):(g=-1,c=l))}return d===c?c=l:c===-1&&(c=t.length),t.slice(d,c)}else{for(s=t.length-1;s>=0;--s)if(t.charCodeAt(s)===47){if(!f){d=s+1;break}}else c===-1&&(f=!1,c=s+1);return c===-1?"":t.slice(d,c)}},extname:function(t){O(t);for(var e=-1,d=0,c=-1,f=!0,s=0,g=t.length-1;g>=0;--g){var l=t.charCodeAt(g);if(l===47){if(!f){d=g+1;break}continue}c===-1&&(f=!1,c=g+1),l===46?e===-1?e=g:s!==1&&(s=1):e!==-1&&(s=-1)}return e===-1||c===-1||s===0||s===1&&e===c-1&&e===d+1?"":t.slice(e,c)},format:function(t){if(t===null||typeof t!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return te("/",t)},parse:function(t){O(t);var e={root:"",dir:"",base:"",ext:"",name:""};if(t.length===0)return e;var d=t.charCodeAt(0),c=d===47,f;c?(e.root="/",f=1):f=0;for(var s=-1,g=0,l=-1,m=!0,k=t.length-1,y=0;k>=f;--k){if(d=t.charCodeAt(k),d===47){if(!m){g=k+1;break}continue}l===-1&&(m=!1,l=k+1),d===46?s===-1?s=k:y!==1&&(y=1):s!==-1&&(y=-1)}return s===-1||l===-1||y===0||y===1&&s===l-1&&s===g+1?l!==-1&&(g===0&&c?e.base=e.name=t.slice(1,l):e.base=e.name=t.slice(g,l)):(g===0&&c?(e.name=t.slice(1,s),e.base=t.slice(1,l)):(e.name=t.slice(g,s),e.base=t.slice(g,l)),e.ext=t.slice(s,l)),g>0?e.dir=t.slice(0,g-1):c&&(e.dir="/"),e},sep:"/",delimiter:":",win32:null,posix:null};D.posix=D;var ne=D,_e=null;const ae=Object.freeze(Object.defineProperty({__proto__:null,default:_e},Symbol.toStringTag,{value:"Module"})),ie=Y(ae);(function(w){let t={};t.__wbindgen_placeholder__=w.exports;let e;const{TextDecoder:d,TextEncoder:c}=ee;let f=new d("utf-8",{ignoreBOM:!0,fatal:!0});f.decode();let s=null;function g(){return(s===null||s.byteLength===0)&&(s=new Uint8Array(e.memory.buffer)),s}function l(u,r){return u=u>>>0,f.decode(g().subarray(u,u+r))}const m=new Array(128).fill(void 0);m.push(void 0,null,!0,!1);let k=m.length;function y(u){k===m.length&&m.push(m.length+1);const r=k;return k=m[r],m[r]=u,r}let C=0,M=new c("utf-8");const E=typeof M.encodeInto=="function"?function(u,r){return M.encodeInto(u,r)}:function(u,r){const n=M.encode(u);return r.set(n),{read:u.length,written:n.length}};function P(u,r,n){if(n===void 0){const b=M.encode(u),h=r(b.length,1)>>>0;return g().subarray(h,h+b.length).set(b),C=b.length,h}let i=u.length,_=r(i,1)>>>0;const a=g();let v=0;for(;v<i;v++){const b=u.charCodeAt(v);if(b>127)break;a[_+v]=b}if(v!==i){v!==0&&(u=u.slice(v)),_=n(_,i,i=v+u.length*3,1)>>>0;const b=g().subarray(_+v,_+i),h=E(u,b);v+=h.written}return C=v,_}let $=null;function o(){return($===null||$.byteLength===0)&&($=new Int32Array(e.memory.buffer)),$}function B(u){return m[u]}function q(u){u<132||(m[u]=k,k=u)}function x(u){const r=B(u);return q(u),r}w.exports.init=function(){e.init()};function I(u,r){if(!(u instanceof r))throw new Error(`expected instance of ${r.name}`);return u.ptr}class L{static __wrap(r){r=r>>>0;const n=Object.create(L.prototype);return n.__wbg_ptr=r,n}__destroy_into_raw(){const r=this.__wbg_ptr;return this.__wbg_ptr=0,r}free(){const r=this.__destroy_into_raw();e.__wbg_caravanconfig_free(r)}static from_str(r){try{const a=e.__wbindgen_add_to_stack_pointer(-16),v=P(r,e.__wbindgen_malloc,e.__wbindgen_realloc),b=C;e.caravanconfig_from_str(a,v,b);var n=o()[a/4+0],i=o()[a/4+1],_=o()[a/4+2];if(_)throw x(i);return L.__wrap(n)}finally{e.__wbindgen_add_to_stack_pointer(16)}}static new(r,n,i,_,a){try{const S=e.__wbindgen_add_to_stack_pointer(-16);I(r,T);var v=r.__destroy_into_raw();I(n,j);var b=n.__destroy_into_raw();I(i,j);var h=i.__destroy_into_raw();const V=P(_,e.__wbindgen_malloc,e.__wbindgen_realloc),G=C,K=P(a,e.__wbindgen_malloc,e.__wbindgen_realloc),Q=C;e.caravanconfig_new(S,v,b,h,V,G,K,Q);var A=o()[S/4+0],p=o()[S/4+1],z=o()[S/4+2];if(z)throw x(p);return L.__wrap(A)}finally{e.__wbindgen_add_to_stack_pointer(16)}}to_string(){let r,n;try{const a=e.__wbindgen_add_to_stack_pointer(-16);e.caravanconfig_to_string(a,this.__wbg_ptr);var i=o()[a/4+0],_=o()[a/4+1];return r=i,n=_,l(i,_)}finally{e.__wbindgen_add_to_stack_pointer(16),e.__wbindgen_free(r,n,1)}}to_string_pretty(){let r,n;try{const a=e.__wbindgen_add_to_stack_pointer(-16);e.caravanconfig_to_string_pretty(a,this.__wbg_ptr);var i=o()[a/4+0],_=o()[a/4+1];return r=i,n=_,l(i,_)}finally{e.__wbindgen_add_to_stack_pointer(16),e.__wbindgen_free(r,n,1)}}name(){let r,n;try{const a=e.__wbindgen_add_to_stack_pointer(-16);e.caravanconfig_name(a,this.__wbg_ptr);var i=o()[a/4+0],_=o()[a/4+1];return r=i,n=_,l(i,_)}finally{e.__wbindgen_add_to_stack_pointer(16),e.__wbindgen_free(r,n,1)}}address_type(){let r,n;try{const a=e.__wbindgen_add_to_stack_pointer(-16);e.caravanconfig_address_type(a,this.__wbg_ptr);var i=o()[a/4+0],_=o()[a/4+1];return r=i,n=_,l(i,_)}finally{e.__wbindgen_add_to_stack_pointer(16),e.__wbindgen_free(r,n,1)}}external_descriptor(){try{const _=e.__wbindgen_add_to_stack_pointer(-16);e.caravanconfig_external_descriptor(_,this.__wbg_ptr);var r=o()[_/4+0],n=o()[_/4+1],i=o()[_/4+2];if(i)throw x(n);return j.__wrap(r)}finally{e.__wbindgen_add_to_stack_pointer(16)}}external_address(r){let n,i;try{const p=e.__wbindgen_add_to_stack_pointer(-16);e.caravanconfig_external_address(p,this.__wbg_ptr,r);var _=o()[p/4+0],a=o()[p/4+1],v=o()[p/4+2],b=o()[p/4+3],h=_,A=a;if(b)throw h=0,A=0,x(v);return n=h,i=A,l(h,A)}finally{e.__wbindgen_add_to_stack_pointer(16),e.__wbindgen_free(n,i,1)}}internal_descriptor(){try{const _=e.__wbindgen_add_to_stack_pointer(-16);e.caravanconfig_internal_descriptor(_,this.__wbg_ptr);var r=o()[_/4+0],n=o()[_/4+1],i=o()[_/4+2];if(i)throw x(n);return j.__wrap(r)}finally{e.__wbindgen_add_to_stack_pointer(16)}}internal_address(r){let n,i;try{const p=e.__wbindgen_add_to_stack_pointer(-16);e.caravanconfig_internal_address(p,this.__wbg_ptr,r);var _=o()[p/4+0],a=o()[p/4+1],v=o()[p/4+2],b=o()[p/4+3],h=_,A=a;if(b)throw h=0,A=0,x(v);return n=h,i=A,l(h,A)}finally{e.__wbindgen_add_to_stack_pointer(16),e.__wbindgen_free(n,i,1)}}network(){const r=e.caravanconfig_network(this.__wbg_ptr);return T.__wrap(r)}}w.exports.CaravanConfig=L;class j{static __wrap(r){r=r>>>0;const n=Object.create(j.prototype);return n.__wbg_ptr=r,n}__destroy_into_raw(){const r=this.__wbg_ptr;return this.__wbg_ptr=0,r}free(){const r=this.__destroy_into_raw();e.__wbg_extendeddescriptor_free(r)}static from_str(r){try{const a=e.__wbindgen_add_to_stack_pointer(-16),v=P(r,e.__wbindgen_malloc,e.__wbindgen_realloc),b=C;e.extendeddescriptor_from_str(a,v,b);var n=o()[a/4+0],i=o()[a/4+1],_=o()[a/4+2];if(_)throw x(i);return j.__wrap(n)}finally{e.__wbindgen_add_to_stack_pointer(16)}}to_string(){let r,n;try{const a=e.__wbindgen_add_to_stack_pointer(-16);e.extendeddescriptor_to_string(a,this.__wbg_ptr);var i=o()[a/4+0],_=o()[a/4+1];return r=i,n=_,l(i,_)}finally{e.__wbindgen_add_to_stack_pointer(16),e.__wbindgen_free(r,n,1)}}get_address(r,n){let i,_;try{const S=e.__wbindgen_add_to_stack_pointer(-16);I(n,T);var a=n.__destroy_into_raw();e.extendeddescriptor_get_address(S,this.__wbg_ptr,r,a);var v=o()[S/4+0],b=o()[S/4+1],h=o()[S/4+2],A=o()[S/4+3],p=v,z=b;if(A)throw p=0,z=0,x(h);return i=p,_=z,l(p,z)}finally{e.__wbindgen_add_to_stack_pointer(16),e.__wbindgen_free(i,_,1)}}}w.exports.ExtendedDescriptor=j;class W{static __wrap(r){r=r>>>0;const n=Object.create(W.prototype);return n.__wbg_ptr=r,n}__destroy_into_raw(){const r=this.__wbg_ptr;return this.__wbg_ptr=0,r}free(){const r=this.__destroy_into_raw();e.__wbg_multisigwalletconfig_free(r)}static from_str(r){try{const a=e.__wbindgen_add_to_stack_pointer(-16),v=P(r,e.__wbindgen_malloc,e.__wbindgen_realloc),b=C;e.multisigwalletconfig_from_str(a,v,b);var n=o()[a/4+0],i=o()[a/4+1],_=o()[a/4+2];if(_)throw x(i);return W.__wrap(n)}finally{e.__wbindgen_add_to_stack_pointer(16)}}to_string(){let r,n;try{const a=e.__wbindgen_add_to_stack_pointer(-16);e.multisigwalletconfig_to_string(a,this.__wbg_ptr);var i=o()[a/4+0],_=o()[a/4+1];return r=i,n=_,l(i,_)}finally{e.__wbindgen_add_to_stack_pointer(16),e.__wbindgen_free(r,n,1)}}to_string_pretty(){let r,n;try{const a=e.__wbindgen_add_to_stack_pointer(-16);e.multisigwalletconfig_to_string_pretty(a,this.__wbg_ptr);var i=o()[a/4+0],_=o()[a/4+1];return r=i,n=_,l(i,_)}finally{e.__wbindgen_add_to_stack_pointer(16),e.__wbindgen_free(r,n,1)}}external_descriptor(){try{const _=e.__wbindgen_add_to_stack_pointer(-16);e.multisigwalletconfig_external_descriptor(_,this.__wbg_ptr);var r=o()[_/4+0],n=o()[_/4+1],i=o()[_/4+2];if(i)throw x(n);return j.__wrap(r)}finally{e.__wbindgen_add_to_stack_pointer(16)}}external_address(r){let n,i;try{const p=e.__wbindgen_add_to_stack_pointer(-16);e.multisigwalletconfig_external_address(p,this.__wbg_ptr,r);var _=o()[p/4+0],a=o()[p/4+1],v=o()[p/4+2],b=o()[p/4+3],h=_,A=a;if(b)throw h=0,A=0,x(v);return n=h,i=A,l(h,A)}finally{e.__wbindgen_add_to_stack_pointer(16),e.__wbindgen_free(n,i,1)}}internal_descriptor(){try{const _=e.__wbindgen_add_to_stack_pointer(-16);e.multisigwalletconfig_internal_descriptor(_,this.__wbg_ptr);var r=o()[_/4+0],n=o()[_/4+1],i=o()[_/4+2];if(i)throw x(n);return j.__wrap(r)}finally{e.__wbindgen_add_to_stack_pointer(16)}}internal_address(r){let n,i;try{const p=e.__wbindgen_add_to_stack_pointer(-16);e.multisigwalletconfig_internal_address(p,this.__wbg_ptr,r);var _=o()[p/4+0],a=o()[p/4+1],v=o()[p/4+2],b=o()[p/4+3],h=_,A=a;if(b)throw h=0,A=0,x(v);return n=h,i=A,l(h,A)}finally{e.__wbindgen_add_to_stack_pointer(16),e.__wbindgen_free(n,i,1)}}network(){const r=e.multisigwalletconfig_network(this.__wbg_ptr);return T.__wrap(r)}}w.exports.MultisigWalletConfig=W;class T{static __wrap(r){r=r>>>0;const n=Object.create(T.prototype);return n.__wbg_ptr=r,n}__destroy_into_raw(){const r=this.__wbg_ptr;return this.__wbg_ptr=0,r}free(){const r=this.__destroy_into_raw();e.__wbg_network_free(r)}static from_str(r){try{const a=e.__wbindgen_add_to_stack_pointer(-16),v=P(r,e.__wbindgen_malloc,e.__wbindgen_realloc),b=C;e.network_from_str(a,v,b);var n=o()[a/4+0],i=o()[a/4+1],_=o()[a/4+2];if(_)throw x(i);return T.__wrap(n)}finally{e.__wbindgen_add_to_stack_pointer(16)}}to_string(){let r,n;try{const a=e.__wbindgen_add_to_stack_pointer(-16);e.network_to_string(a,this.__wbg_ptr);var i=o()[a/4+0],_=o()[a/4+1];return r=i,n=_,l(i,_)}finally{e.__wbindgen_add_to_stack_pointer(16),e.__wbindgen_free(r,n,1)}}}w.exports.Network=T,w.exports.__wbindgen_error_new=function(u,r){const n=new Error(l(u,r));return y(n)},w.exports.__wbindgen_throw=function(u,r){throw new Error(l(u,r))};const H=ne.join(__dirname,"caravan_rs_bg.wasm"),J=ie.readFileSync(H),N=new WebAssembly.Module(J);e=new WebAssembly.Instance(N,t).exports,w.exports.__wasm=e,e.__wbindgen_start()})(R);var U=R.exports;const oe=Z(U),ce=re({__proto__:null,default:oe},[U]);export{ce as c};
