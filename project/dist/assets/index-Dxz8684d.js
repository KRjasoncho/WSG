var jt=Object.defineProperty;var Pt=(e,t,n)=>t in e?jt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var nt=(e,t,n)=>(Pt(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function B(){}function Q(e,t){for(const n in t)e[n]=t[n];return e}function Bt(e){return e()}function mt(){return Object.create(null)}function W(e){e.forEach(Bt)}function lt(e){return typeof e=="function"}function H(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ct(e){return Object.keys(e).length===0}function At(e,...t){if(e==null){for(const s of t)s(void 0);return B}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function x(e,t){e.appendChild(t)}function w(e,t,n){e.insertBefore(t,n||null)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function It(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function ct(e){return document.createTextNode(e)}function L(){return ct(" ")}function ut(){return ct("")}function it(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ht(e){return Array.from(e.childNodes)}function ht(e,t,n,s){e.style.setProperty(t,n,"")}function Nt(e,t,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:s})}function X(e,t){return new e(t)}let z;function Z(e){z=e}function at(){if(!z)throw new Error("Function called outside component initialization");return z}function qt(e){at().$$.after_update.push(e)}function Gt(e){at().$$.on_destroy.push(e)}function Rt(){const e=at();return(t,n,{cancelable:s=!1}={})=>{const r=e.$$.callbacks[t];if(r){const l=Nt(t,n,{cancelable:s});return r.slice().forEach(u=>{u.call(e,l)}),!l.defaultPrevented}return!0}}function _t(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(s=>s.call(this,t))}const F=[],vt=[];let V=[];const gt=[],Et=Promise.resolve();let rt=!1;function St(){rt||(rt=!0,Et.then(Lt))}function Wt(){return St(),Et}function ot(e){V.push(e)}const st=new Set;let D=0;function Lt(){if(D!==0)return;const e=z;do{try{for(;D<F.length;){const t=F[D];D++,Z(t),Dt(t.$$)}}catch(t){throw F.length=0,D=0,t}for(Z(null),F.length=0,D=0;vt.length;)vt.pop()();for(let t=0;t<V.length;t+=1){const n=V[t];st.has(n)||(st.add(n),n())}V.length=0}while(F.length);for(;gt.length;)gt.pop()();rt=!1,st.clear(),Z(e)}function Dt(e){if(e.fragment!==null){e.update(),W(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ot)}}function Ut(e){const t=[],n=[];V.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),V=t}const J=new Set;let R;function ft(){R={r:0,c:[],p:R}}function dt(){R.r||W(R.c),R=R.p}function O(e,t){e&&e.i&&(J.delete(e),e.i(t))}function T(e,t,n,s){if(e&&e.o){if(J.has(e))return;J.add(e),R.c.push(()=>{J.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function Y(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function K(e,t){const n={},s={},r={$$scope:1};let l=e.length;for(;l--;){const u=e[l],i=t[l];if(i){for(const o in u)o in i||(s[o]=1);for(const o in i)r[o]||(n[o]=i[o],r[o]=1);e[l]=i}else for(const o in u)r[o]=1}for(const u in s)u in n||(n[u]=void 0);return n}function tt(e){return typeof e=="object"&&e!==null?e:{}}function A(e){e&&e.c()}function P(e,t,n){const{fragment:s,after_update:r}=e.$$;s&&s.m(t,n),ot(()=>{const l=e.$$.on_mount.map(Bt).filter(lt);e.$$.on_destroy?e.$$.on_destroy.push(...l):W(l),e.$$.on_mount=[]}),r.forEach(ot)}function C(e,t){const n=e.$$;n.fragment!==null&&(Ut(n.after_update),W(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(e,t){e.$$.dirty[0]===-1&&(F.push(e),St(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function q(e,t,n,s,r,l,u=null,i=[-1]){const o=z;Z(e);const c=e.$$={fragment:null,ctx:[],props:l,update:B,not_equal:r,bound:mt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:mt(),dirty:i,skip_bound:!1,root:t.target||o.$$.root};u&&u(c.root);let a=!1;if(c.ctx=n?n(e,t.props||{},(v,I,...S)=>{const p=S.length?S[0]:I;return c.ctx&&r(c.ctx[v],c.ctx[v]=p)&&(!c.skip_bound&&c.bound[v]&&c.bound[v](p),a&&Ft(e,v)),I}):[],c.update(),a=!0,W(c.before_update),c.fragment=s?s(c.ctx):!1,t.target){if(t.hydrate){const v=Ht(t.target);c.fragment&&c.fragment.l(v),v.forEach(b)}else c.fragment&&c.fragment.c();t.intro&&O(e.$$.fragment),P(e,t.target,t.anchor),Lt()}Z(o)}class G{constructor(){nt(this,"$$");nt(this,"$$set")}$destroy(){C(this,1),this.$destroy=B}$on(t,n){if(!lt(n))return B;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!Ct(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Vt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Vt);function Zt(e){let t,n,s,r,l,u,i,o;return{c(){t=g("div"),n=g("div"),n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"></path></svg>',s=L(),r=g("button"),r.textContent="Jason's WSG",l=L(),u=g("div"),u.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clip-rule="evenodd"></path></svg>',y(n,"class","topBar__img svelte-1tqw46n"),y(r,"class","topBar__title svelte-1tqw46n"),y(u,"class","topBar__img svelte-1tqw46n"),y(t,"class","topBar svelte-1tqw46n")},m(c,a){w(c,t,a),x(t,n),x(t,s),x(t,r),x(t,l),x(t,u),i||(o=it(r,"click",e[0]),i=!0)},p:B,i:B,o:B,d(c){c&&b(t),i=!1,o()}}}function zt(e){return[()=>{window.location.hash="/"}]}class et extends G{constructor(t){super(),q(this,t,zt,Zt,H,{})}}function Jt(e){let t,n,s,r,l,u;return t=new et({}),{c(){A(t.$$.fragment),n=L(),s=g("div"),s.innerHTML='<div>게임 목록</div> <div><input class="searchBar svelte-v0sadm" type="search" placeholder="게임 검색"/></div>',r=L(),l=g("div"),l.textContent="//게임 리스트 들어갈 자리",y(s,"class","midBar svelte-v0sadm"),y(l,"class","gameList")},m(i,o){P(t,i,o),w(i,n,o),w(i,s,o),w(i,r,o),w(i,l,o),u=!0},p:B,i(i){u||(O(t.$$.fragment,i),u=!0)},o(i){T(t.$$.fragment,i),u=!1},d(i){i&&(b(n),b(s),b(r),b(l)),C(t,i)}}}class Qt extends G{constructor(t){super(),q(this,t,null,Jt,H,{})}}function Xt(e){let t,n,s,r,l,u;return t=new et({}),{c(){A(t.$$.fragment),n=L(),s=g("div"),s.textContent="10~30개의 단어를 사용하여 게임을 만들 수 있습니다!",r=L(),l=g("form"),l.innerHTML='<div>게임 제목</div> <input type="text"/> <div>게임 설명</div> <input type="text"/> <div>정답 단어</div> <div class="inputBox"><div class="inputBox__cul"><input type="text" class="inputBoxItem" data-key="00"/> <input type="text" class="inputBoxItem" data-key="01"/> <input type="text" class="inputBoxItem" data-key="02"/> <input type="text" class="inputBoxItem" data-key="03"/> <input type="text" class="inputBoxItem" data-key="04"/></div> <div class="inputBox__cul"><input type="text" class="inputBoxItem" data-key="10"/> <input type="text" class="inputBoxItem" data-key="11"/> <input type="text" class="inputBoxItem" data-key="12"/> <input type="text" class="inputBoxItem" data-key="13"/> <input type="text" class="inputBoxItem" data-key="14"/></div> <div class="inputBox__cul"><input type="text" class="inputBoxItem" data-key="20"/> <input type="text" class="inputBoxItem" data-key="21"/> <input type="text" class="inputBoxItem" data-key="22"/> <input type="text" class="inputBoxItem" data-key="23"/> <input type="text" class="inputBoxItem" data-key="24"/></div> <div class="inputBox__cul"><input type="text" class="inputBoxItem" data-key="30"/> <input type="text" class="inputBoxItem" data-key="31"/> <input type="text" class="inputBoxItem" data-key="32"/> <input type="text" class="inputBoxItem" data-key="33"/> <input type="text" class="inputBoxItem" data-key="34"/></div> <div class="inputBox__cul"><input type="text" class="inputBoxItem" data-key="40"/> <input type="text" class="inputBoxItem" data-key="41"/> <input type="text" class="inputBoxItem" data-key="42"/> <input type="text" class="inputBoxItem" data-key="43"/> <input type="text" class="inputBoxItem" data-key="44"/></div> <div class="inputBox__cul"><input type="text" class="inputBoxItem" data-key="50"/> <input type="text" class="inputBoxItem" data-key="51"/> <input type="text" class="inputBoxItem" data-key="52"/> <input type="text" class="inputBoxItem" data-key="53"/> <input type="text" class="inputBoxItem" data-key="54"/></div></div> <button type="submit">게임 생성</button>',y(s,"class","makerInfo svelte-fhsvfa"),y(l,"class","submitForm")},m(i,o){P(t,i,o),w(i,n,o),w(i,s,o),w(i,r,o),w(i,l,o),u=!0},p:B,i(i){u||(O(t.$$.fragment,i),u=!0)},o(i){T(t.$$.fragment,i),u=!1},d(i){i&&(b(n),b(s),b(r),b(l)),C(t,i)}}}class Yt extends G{constructor(t){super(),q(this,t,null,Xt,H,{})}}function Kt(e){let t,n,s,r,l,u,i,o,c,a,v,I,S;return t=new et({}),{c(){A(t.$$.fragment),n=L(),s=g("main"),r=g("div"),l=g("div"),l.innerHTML=`<div class="info__img svelte-1vdbdt8"><img class="info__img__img svelte-1vdbdt8" src="https://play-lh.googleusercontent.com/buGx7Qx6e_M9DUqiwABScUWx-xgiUSJBURBhivVel8OdVVzqOB2F5V3Nt60Ov8Qudw" alt=""/></div> <div class="info__title svelte-1vdbdt8">WSG(Word Search Game)</div> <div class="info_description svelte-1vdbdt8">WSG는 판에 무작위로 배열된 알파벳 중에서 좌측에 있는 &#39;Target&#39;단어를 찾는
        간단한 게임입니다. &#39;Make Game&#39;에서 직접 &#39;Target&#39; 단어를 설정해 게임을
        만들 수 있습니다.</div>`,u=L(),i=g("div"),o=g("button"),o.innerHTML='<span class="text">Game Start!</span>',c=L(),a=g("button"),a.innerHTML='<span class="text">Make Game!</span>',y(l,"class","info svelte-1vdbdt8"),ht(o,"pointer","cursor"),y(o,"class","startBtn svelte-1vdbdt8"),ht(a,"pointer","cursor"),y(a,"class","makeBtn svelte-1vdbdt8"),y(i,"class","btns svelte-1vdbdt8"),y(r,"class","home svelte-1vdbdt8"),y(s,"id","app")},m(p,k){P(t,p,k),w(p,n,k),w(p,s,k),x(s,r),x(r,l),x(r,u),x(r,i),x(i,o),x(i,c),x(i,a),v=!0,I||(S=[it(o,"click",e[1]),it(a,"click",e[0])],I=!0)},p:B,i(p){v||(O(t.$$.fragment,p),v=!0)},o(p){T(t.$$.fragment,p),v=!1},d(p){p&&(b(n),b(s)),C(t,p),I=!1,W(S)}}}function te(e){return[()=>{window.location.hash="/gamemaker"},()=>{window.location.hash="/gamelist"}]}class ee extends G{constructor(t){super(),q(this,t,te,Kt,H,{})}}const U=[];function Ot(e,t){return{subscribe:Mt(e,t).subscribe}}function Mt(e,t=B){let n;const s=new Set;function r(i){if(H(e,i)&&(e=i,n)){const o=!U.length;for(const c of s)c[1](),U.push(c,e);if(o){for(let c=0;c<U.length;c+=2)U[c][0](U[c+1]);U.length=0}}}function l(i){r(i(e))}function u(i,o=B){const c=[i,o];return s.add(c),s.size===1&&(n=t(r,l)||B),i(e),()=>{s.delete(c),s.size===0&&n&&(n(),n=null)}}return{set:r,update:l,subscribe:u}}function Tt(e,t,n){const s=!Array.isArray(e),r=s?[e]:e;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=t.length<2;return Ot(n,(u,i)=>{let o=!1;const c=[];let a=0,v=B;const I=()=>{if(a)return;v();const p=t(s?c[0]:c,u,i);l?u(p):v=lt(p)?p:B},S=r.map((p,k)=>At(p,_=>{c[k]=_,a&=~(1<<k),o&&I()},()=>{a|=1<<k}));return o=!0,I(),function(){W(S),v(),o=!1}})}function ne(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,s,r,l,u=[],i="",o=e.split("/");for(o[0]||o.shift();r=o.shift();)n=r[0],n==="*"?(u.push("wild"),i+="/(.*)"):n===":"?(s=r.indexOf("?",1),l=r.indexOf(".",1),u.push(r.substring(1,~s?s:~l?l:r.length)),i+=~s&&!~l?"(?:/([^/]+?))?":"/([^/]+?)",~l&&(i+=(~s?"?":"")+"\\"+r.substring(l))):i+="/"+r;return{keys:u,pattern:new RegExp("^"+i+"/?$","i")}}function se(e){let t,n,s;const r=[e[2]];var l=e[0];function u(i,o){let c={};for(let a=0;a<r.length;a+=1)c=Q(c,r[a]);return o!==void 0&&o&4&&(c=Q(c,K(r,[tt(i[2])]))),{props:c}}return l&&(t=X(l,u(e)),t.$on("routeEvent",e[7])),{c(){t&&A(t.$$.fragment),n=ut()},m(i,o){t&&P(t,i,o),w(i,n,o),s=!0},p(i,o){if(o&1&&l!==(l=i[0])){if(t){ft();const c=t;T(c.$$.fragment,1,0,()=>{C(c,1)}),dt()}l?(t=X(l,u(i,o)),t.$on("routeEvent",i[7]),A(t.$$.fragment),O(t.$$.fragment,1),P(t,n.parentNode,n)):t=null}else if(l){const c=o&4?K(r,[tt(i[2])]):{};t.$set(c)}},i(i){s||(t&&O(t.$$.fragment,i),s=!0)},o(i){t&&T(t.$$.fragment,i),s=!1},d(i){i&&b(n),t&&C(t,i)}}}function ie(e){let t,n,s;const r=[{params:e[1]},e[2]];var l=e[0];function u(i,o){let c={};for(let a=0;a<r.length;a+=1)c=Q(c,r[a]);return o!==void 0&&o&6&&(c=Q(c,K(r,[o&2&&{params:i[1]},o&4&&tt(i[2])]))),{props:c}}return l&&(t=X(l,u(e)),t.$on("routeEvent",e[6])),{c(){t&&A(t.$$.fragment),n=ut()},m(i,o){t&&P(t,i,o),w(i,n,o),s=!0},p(i,o){if(o&1&&l!==(l=i[0])){if(t){ft();const c=t;T(c.$$.fragment,1,0,()=>{C(c,1)}),dt()}l?(t=X(l,u(i,o)),t.$on("routeEvent",i[6]),A(t.$$.fragment),O(t.$$.fragment,1),P(t,n.parentNode,n)):t=null}else if(l){const c=o&6?K(r,[o&2&&{params:i[1]},o&4&&tt(i[2])]):{};t.$set(c)}},i(i){s||(t&&O(t.$$.fragment,i),s=!0)},o(i){t&&T(t.$$.fragment,i),s=!1},d(i){i&&b(n),t&&C(t,i)}}}function re(e){let t,n,s,r;const l=[ie,se],u=[];function i(o,c){return o[1]?0:1}return t=i(e),n=u[t]=l[t](e),{c(){n.c(),s=ut()},m(o,c){u[t].m(o,c),w(o,s,c),r=!0},p(o,[c]){let a=t;t=i(o),t===a?u[t].p(o,c):(ft(),T(u[a],1,1,()=>{u[a]=null}),dt(),n=u[t],n?n.p(o,c):(n=u[t]=l[t](o),n.c()),O(n,1),n.m(s.parentNode,s))},i(o){r||(O(n),r=!0)},o(o){T(n),r=!1},d(o){o&&b(s),u[t].d(o)}}}function yt(){const e=window.location.href.indexOf("#/");let t=e>-1?window.location.href.substr(e+1):"/";const n=t.indexOf("?");let s="";return n>-1&&(s=t.substr(n+1),t=t.substr(0,n)),{location:t,querystring:s}}const pt=Ot(null,function(t){t(yt());const n=()=>{t(yt())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});Tt(pt,e=>e.location);Tt(pt,e=>e.querystring);const bt=Mt(void 0);function oe(e){e?window.scrollTo(e.__svelte_spa_router_scrollX,e.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function le(e,t,n){let{routes:s={}}=t,{prefix:r=""}=t,{restoreScrollState:l=!1}=t;class u{constructor(d,m){if(!m||typeof m!="function"&&(typeof m!="object"||m._sveltesparouter!==!0))throw Error("Invalid component object");if(!d||typeof d=="string"&&(d.length<1||d.charAt(0)!="/"&&d.charAt(0)!="*")||typeof d=="object"&&!(d instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:M,keys:E}=ne(d);this.path=d,typeof m=="object"&&m._sveltesparouter===!0?(this.component=m.component,this.conditions=m.conditions||[],this.userData=m.userData,this.props=m.props||{}):(this.component=()=>Promise.resolve(m),this.conditions=[],this.props={}),this._pattern=M,this._keys=E}match(d){if(r){if(typeof r=="string")if(d.startsWith(r))d=d.substr(r.length)||"/";else return null;else if(r instanceof RegExp){const N=d.match(r);if(N&&N[0])d=d.substr(N[0].length)||"/";else return null}}const m=this._pattern.exec(d);if(m===null)return null;if(this._keys===!1)return m;const M={};let E=0;for(;E<this._keys.length;){try{M[this._keys[E]]=decodeURIComponent(m[E+1]||"")||null}catch{M[this._keys[E]]=null}E++}return M}async checkConditions(d){for(let m=0;m<this.conditions.length;m++)if(!await this.conditions[m](d))return!1;return!0}}const i=[];s instanceof Map?s.forEach((f,d)=>{i.push(new u(d,f))}):Object.keys(s).forEach(f=>{i.push(new u(f,s[f]))});let o=null,c=null,a={};const v=Rt();async function I(f,d){await Wt(),v(f,d)}let S=null,p=null;l&&(p=f=>{f.state&&(f.state.__svelte_spa_router_scrollY||f.state.__svelte_spa_router_scrollX)?S=f.state:S=null},window.addEventListener("popstate",p),qt(()=>{oe(S)}));let k=null,_=null;const h=pt.subscribe(async f=>{k=f;let d=0;for(;d<i.length;){const m=i[d].match(f.location);if(!m){d++;continue}const M={route:i[d].path,location:f.location,querystring:f.querystring,userData:i[d].userData,params:m&&typeof m=="object"&&Object.keys(m).length?m:null};if(!await i[d].checkConditions(M)){n(0,o=null),_=null,I("conditionsFailed",M);return}I("routeLoading",Object.assign({},M));const E=i[d].component;if(_!=E){E.loading?(n(0,o=E.loading),_=E,n(1,c=E.loadingParams),n(2,a={}),I("routeLoaded",Object.assign({},M,{component:o,name:o.name,params:c}))):(n(0,o=null),_=null);const N=await E();if(f!=k)return;n(0,o=N&&N.default||N),_=E}m&&typeof m=="object"&&Object.keys(m).length?n(1,c=m):n(1,c=null),n(2,a=i[d].props),I("routeLoaded",Object.assign({},M,{component:o,name:o.name,params:c})).then(()=>{bt.set(c)});return}n(0,o=null),_=null,bt.set(void 0)});Gt(()=>{h(),p&&window.removeEventListener("popstate",p)});function j(f){_t.call(this,e,f)}function $(f){_t.call(this,e,f)}return e.$$set=f=>{"routes"in f&&n(3,s=f.routes),"prefix"in f&&n(4,r=f.prefix),"restoreScrollState"in f&&n(5,l=f.restoreScrollState)},e.$$.update=()=>{e.$$.dirty&32&&(history.scrollRestoration=l?"manual":"auto")},[o,c,a,s,r,l,j,$]}class ce extends G{constructor(t){super(),q(this,t,le,re,H,{routes:3,prefix:4,restoreScrollState:5})}}class ue extends G{constructor(t){super(),q(this,t,null,null,H,{})}}function xt(e,t,n){const s=e.slice();return s[9]=t[n],s[11]=n,s}function wt(e,t,n){const s=e.slice();return s[9]=t[n],s[0]=n,s}function $t(e){let t;return{c(){t=g("div"),t.textContent=`${e[2]()}`,y(t,"class","innerItemBox svelte-ivb1pw"),y(t,"id",`item-${e[11]}-${e[0]}`)},m(n,s){w(n,t,s)},p:B,d(n){n&&b(t)}}}function kt(e){let t,n,s=Y(e[1]),r=[];for(let l=0;l<s.length;l+=1)r[l]=$t(wt(e,s,l));return{c(){t=g("div");for(let l=0;l<r.length;l+=1)r[l].c();n=L(),y(t,"class","itemBox svelte-ivb1pw")},m(l,u){w(l,t,u);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(t,null);x(t,n)},p(l,u){if(u&4){s=Y(l[1]);let i;for(i=0;i<s.length;i+=1){const o=wt(l,s,i);r[i]?r[i].p(o,u):(r[i]=$t(o),r[i].c(),r[i].m(t,n))}for(;i<r.length;i+=1)r[i].d(1);r.length=s.length}},d(l){l&&b(t),It(r,l)}}}function ae(e){let t,n,s,r,l,u,i,o,c,a,v,I=e[3]()+"",S,p;t=new et({});let k=Y(e[1]),_=[];for(let h=0;h<k.length;h+=1)_[h]=kt(xt(e,k,h));return{c(){A(t.$$.fragment),n=L(),s=g("div"),s.innerHTML="<div>게임 제목</div> <div>타이머</div> <div>제작자</div>",r=L(),l=g("div"),u=g("div"),i=g("div");for(let h=0;h<_.length;h+=1)_[h].c();o=L(),c=g("div"),a=g("div"),a.textContent="Target Word",v=L(),S=ct(I),y(s,"class","gameTopBar svelte-ivb1pw"),y(i,"class","gameBored"),y(i,"id","GB"),y(c,"class","targetWord svelte-ivb1pw"),y(u,"class","gameGrid svelte-ivb1pw")},m(h,j){P(t,h,j),w(h,n,j),w(h,s,j),w(h,r,j),w(h,l,j),x(l,u),x(u,i);for(let $=0;$<_.length;$+=1)_[$]&&_[$].m(i,null);x(u,o),x(u,c),x(c,a),x(c,v),x(c,S),p=!0},p(h,[j]){if(j&6){k=Y(h[1]);let $;for($=0;$<k.length;$+=1){const f=xt(h,k,$);_[$]?_[$].p(f,j):(_[$]=kt(f),_[$].c(),_[$].m(i,null))}for(;$<_.length;$+=1)_[$].d(1);_.length=k.length}},i(h){p||(O(t.$$.fragment,h),p=!0)},o(h){T(t.$$.fragment,h),p=!1},d(h){h&&(b(n),b(s),b(r),b(l)),C(t,h),It(_,h)}}}const fe=14;function de(e,t,n){const s=[];let r=0;for(r=0;r<fe;r++)s.push(0);return[r,s,()=>String.fromCharCode(65+Math.floor(Math.random()*26)),()=>{}]}class pe extends G{constructor(t){super(),q(this,t,de,ae,H,{})}}function me(e){let t,n;return t=new ce({props:{routes:e[0]}}),{c(){A(t.$$.fragment)},m(s,r){P(t,s,r),n=!0},p:B,i(s){n||(O(t.$$.fragment,s),n=!0)},o(s){T(t.$$.fragment,s),n=!1},d(s){C(t,s)}}}function he(e){return[{"/":ee,"/gamemaker":Yt,"/gamelist":Qt,"/mypage":ue,"/playgame":pe}]}class _e extends G{constructor(t){super(),q(this,t,he,me,H,{})}}new _e({target:document.getElementById("app")});
