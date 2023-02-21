(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const q of document.querySelectorAll('link[rel="modulepreload"]'))n(q);new MutationObserver(q=>{for(const i of q)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(q){const i={};return q.integrity&&(i.integrity=q.integrity),q.referrerpolicy&&(i.referrerPolicy=q.referrerpolicy),q.crossorigin==="use-credentials"?i.credentials="include":q.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(q){if(q.ep)return;q.ep=!0;const i=t(q);fetch(q.href,i)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const t6="149",L8=0,L6=1,R8=2,w0=1,P8=2,T4=3,D5=0,B2=1,u5=2,J5=0,K3=1,R6=2,P6=3,I6=4,I8=5,j3=100,D8=101,N8=102,D6=103,N6=104,O8=200,F8=201,z8=202,U8=203,T0=204,E0=205,k8=206,B8=207,G8=208,V8=209,H8=210,W8=0,X8=1,j8=2,Ot=3,Y8=4,J8=5,K8=6,Z8=7,n6=0,$8=1,Q8=2,P5=0,e9=1,t9=2,n9=3,q9=4,i9=5,A0=300,e4=301,t4=302,Ft=303,zt=304,Oe=306,n4=1e3,W2=1001,Pe=1002,g2=1003,Ut=1004,Ce=1005,N2=1006,C0=1007,g3=1008,_3=1009,s9=1010,r9=1011,L0=1012,o9=1013,h3=1014,j5=1015,D4=1016,a9=1017,l9=1018,Z3=1020,c9=1021,X2=1023,h9=1024,u9=1025,d3=1026,q4=1027,f9=1028,d9=1029,m9=1030,p9=1031,x9=1033,Ke=33776,Ze=33777,$e=33778,Qe=33779,O6=35840,F6=35841,z6=35842,U6=35843,g9=36196,k6=37492,B6=37496,G6=37808,V6=37809,H6=37810,W6=37811,X6=37812,j6=37813,Y6=37814,J6=37815,K6=37816,Z6=37817,$6=37818,Q6=37819,e7=37820,t7=37821,et=36492,_9=36283,n7=36284,q7=36285,i7=36286,N4=2300,i4=2301,tt=2302,s7=2400,r7=2401,o7=2402,v9=2500,y9=0,R0=1,kt=2,v3=3e3,J1=3001,M9=3200,b9=3201,q6=0,S9=1,a5="srgb",O4="srgb-linear",nt=7680,w9=519,Bt=35044,a7="300 es",Gt=1035;class a4{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const q=this._listeners[e];if(q!==void 0){const i=q.indexOf(t);i!==-1&&q.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const q=n.slice(0);for(let i=0,r=q.length;i<r;i++)q[i].call(this,e);e.target=null}}}const b2=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let l7=1234567;const L4=Math.PI/180,F4=180/Math.PI;function Y2(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(b2[s&255]+b2[s>>8&255]+b2[s>>16&255]+b2[s>>24&255]+"-"+b2[e&255]+b2[e>>8&255]+"-"+b2[e>>16&15|64]+b2[e>>24&255]+"-"+b2[t&63|128]+b2[t>>8&255]+"-"+b2[t>>16&255]+b2[t>>24&255]+b2[n&255]+b2[n>>8&255]+b2[n>>16&255]+b2[n>>24&255]).toLowerCase()}function _2(s,e,t){return Math.max(e,Math.min(t,s))}function i6(s,e){return(s%e+e)%e}function T9(s,e,t,n,q){return n+(s-e)*(q-n)/(t-e)}function E9(s,e,t){return s!==e?(t-s)/(e-s):0}function R4(s,e,t){return(1-t)*s+t*e}function A9(s,e,t,n){return R4(s,e,1-Math.exp(-t*n))}function C9(s,e=1){return e-Math.abs(i6(s,e*2)-e)}function L9(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function R9(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function P9(s,e){return s+Math.floor(Math.random()*(e-s+1))}function I9(s,e){return s+Math.random()*(e-s)}function D9(s){return s*(.5-Math.random())}function N9(s){s!==void 0&&(l7=s);let e=l7+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function O9(s){return s*L4}function F9(s){return s*F4}function Vt(s){return(s&s-1)===0&&s!==0}function P0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ie(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function z9(s,e,t,n,q){const i=Math.cos,r=Math.sin,o=i(t/2),a=r(t/2),l=i((e+n)/2),c=r((e+n)/2),h=i((e-n)/2),u=r((e-n)/2),m=i((n-e)/2),p=r((n-e)/2);switch(q){case"XYX":s.set(o*c,a*h,a*u,o*l);break;case"YZY":s.set(a*u,o*c,a*h,o*l);break;case"ZXZ":s.set(a*h,a*u,o*c,o*l);break;case"XZX":s.set(o*c,a*p,a*m,o*l);break;case"YXY":s.set(a*m,o*c,a*p,o*l);break;case"ZYZ":s.set(a*p,a*m,o*c,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+q)}}function L5(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Z1(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var U9=Object.freeze({__proto__:null,DEG2RAD:L4,RAD2DEG:F4,ceilPowerOfTwo:P0,clamp:_2,damp:A9,degToRad:O9,denormalize:L5,euclideanModulo:i6,floorPowerOfTwo:Ie,generateUUID:Y2,inverseLerp:E9,isPowerOfTwo:Vt,lerp:R4,mapLinear:T9,normalize:Z1,pingpong:C9,radToDeg:F9,randFloat:I9,randFloatSpread:D9,randInt:P9,seededRandom:N9,setQuaternionFromProperEuler:z9,smootherstep:R9,smoothstep:L9});class l1{constructor(e=0,t=0){l1.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,q=e.elements;return this.x=q[0]*t+q[3]*n+q[6],this.y=q[1]*t+q[4]*n+q[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),q=Math.sin(t),i=this.x-e.x,r=this.y-e.y;return this.x=i*n-r*q+e.x,this.y=i*q+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class c2{constructor(){c2.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,q,i,r,o,a,l){const c=this.elements;return c[0]=e,c[1]=q,c[2]=o,c[3]=t,c[4]=i,c[5]=a,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,q=t.elements,i=this.elements,r=n[0],o=n[3],a=n[6],l=n[1],c=n[4],h=n[7],u=n[2],m=n[5],p=n[8],d=q[0],f=q[3],x=q[6],M=q[1],g=q[4],y=q[7],b=q[2],L=q[5],P=q[8];return i[0]=r*d+o*M+a*b,i[3]=r*f+o*g+a*L,i[6]=r*x+o*y+a*P,i[1]=l*d+c*M+h*b,i[4]=l*f+c*g+h*L,i[7]=l*x+c*y+h*P,i[2]=u*d+m*M+p*b,i[5]=u*f+m*g+p*L,i[8]=u*x+m*y+p*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],q=e[2],i=e[3],r=e[4],o=e[5],a=e[6],l=e[7],c=e[8];return t*r*c-t*o*l-n*i*c+n*o*a+q*i*l-q*r*a}invert(){const e=this.elements,t=e[0],n=e[1],q=e[2],i=e[3],r=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=c*r-o*l,u=o*a-c*i,m=l*i-r*a,p=t*h+n*u+q*m;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/p;return e[0]=h*d,e[1]=(q*l-c*n)*d,e[2]=(o*n-q*r)*d,e[3]=u*d,e[4]=(c*t-q*a)*d,e[5]=(q*i-o*t)*d,e[6]=m*d,e[7]=(n*a-l*t)*d,e[8]=(r*t-n*i)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,q,i,r,o){const a=Math.cos(i),l=Math.sin(i);return this.set(n*a,n*l,-n*(a*r+l*o)+r+e,-q*l,q*a,-q*(-l*r+a*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qt.makeScale(e,t)),this}rotate(e){return this.premultiply(qt.makeRotation(-e)),this}translate(e,t){return this.premultiply(qt.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let q=0;q<9;q++)if(t[q]!==n[q])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qt=new c2;function I0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function z4(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function m3(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Le(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const it={[a5]:{[O4]:m3},[O4]:{[a5]:Le}},A2={legacyMode:!0,get workingColorSpace(){return O4},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(it[e]&&it[e][t]!==void 0){const n=it[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},D0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},l2={r:0,g:0,b:0},K2={h:0,s:0,l:0},Z4={h:0,s:0,l:0};function st(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function $4(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class F1{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=a5){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,A2.toWorkingColorSpace(this,t),this}setRGB(e,t,n,q=A2.workingColorSpace){return this.r=e,this.g=t,this.b=n,A2.toWorkingColorSpace(this,q),this}setHSL(e,t,n,q=A2.workingColorSpace){if(e=i6(e,1),t=_2(t,0,1),n=_2(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=st(r,i,e+1/3),this.g=st(r,i,e),this.b=st(r,i,e-1/3)}return A2.toWorkingColorSpace(this,q),this}setStyle(e,t=a5){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let q;if(q=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const r=q[1],o=q[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,A2.toWorkingColorSpace(this,t),n(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,A2.toWorkingColorSpace(this,t),n(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(i[1])/360,l=parseFloat(i[2])/100,c=parseFloat(i[3])/100;return n(i[4]),this.setHSL(a,l,c,t)}break}}else if(q=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=q[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,A2.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,A2.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=a5){const n=D0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=m3(e.r),this.g=m3(e.g),this.b=m3(e.b),this}copyLinearToSRGB(e){return this.r=Le(e.r),this.g=Le(e.g),this.b=Le(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=a5){return A2.fromWorkingColorSpace($4(this,l2),e),_2(l2.r*255,0,255)<<16^_2(l2.g*255,0,255)<<8^_2(l2.b*255,0,255)<<0}getHexString(e=a5){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=A2.workingColorSpace){A2.fromWorkingColorSpace($4(this,l2),t);const n=l2.r,q=l2.g,i=l2.b,r=Math.max(n,q,i),o=Math.min(n,q,i);let a,l;const c=(o+r)/2;if(o===r)a=0,l=0;else{const h=r-o;switch(l=c<=.5?h/(r+o):h/(2-r-o),r){case n:a=(q-i)/h+(q<i?6:0);break;case q:a=(i-n)/h+2;break;case i:a=(n-q)/h+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getRGB(e,t=A2.workingColorSpace){return A2.fromWorkingColorSpace($4(this,l2),t),e.r=l2.r,e.g=l2.g,e.b=l2.b,e}getStyle(e=a5){return A2.fromWorkingColorSpace($4(this,l2),e),e!==a5?`color(${e} ${l2.r} ${l2.g} ${l2.b})`:`rgb(${l2.r*255|0},${l2.g*255|0},${l2.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(K2),K2.h+=e,K2.s+=t,K2.l+=n,this.setHSL(K2.h,K2.s,K2.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(K2),e.getHSL(Z4);const n=R4(K2.h,Z4.h,t),q=R4(K2.s,Z4.s,t),i=R4(K2.l,Z4.l,t);return this.setHSL(n,q,i),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}F1.NAMES=D0;let P3;class N0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{P3===void 0&&(P3=z4("canvas")),P3.width=e.width,P3.height=e.height;const n=P3.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=P3}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=z4("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const q=n.getImageData(0,0,e.width,e.height),i=q.data;for(let r=0;r<i.length;r++)i[r]=m3(i[r]/255)*255;return n.putImageData(q,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(m3(t[n]/255)*255):t[n]=m3(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class O0{constructor(e=null){this.isSource=!0,this.uuid=Y2(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},q=this.data;if(q!==null){let i;if(Array.isArray(q)){i=[];for(let r=0,o=q.length;r<o;r++)q[r].isDataTexture?i.push(rt(q[r].image)):i.push(rt(q[r]))}else i=rt(q);n.url=i}return t||(e.images[this.uuid]=n),n}}function rt(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?N0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let k9=0;class y2 extends a4{constructor(e=y2.DEFAULT_IMAGE,t=y2.DEFAULT_MAPPING,n=W2,q=W2,i=N2,r=g3,o=X2,a=_3,l=y2.DEFAULT_ANISOTROPY,c=v3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k9++}),this.uuid=Y2(),this.name="",this.source=new O0(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=q,this.magFilter=i,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new l1(0,0),this.repeat=new l1(1,1),this.center=new l1(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new c2,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==A0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n4:e.x=e.x-Math.floor(e.x);break;case W2:e.x=e.x<0?0:1;break;case Pe:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case n4:e.y=e.y-Math.floor(e.y);break;case W2:e.y=e.y<0?0:1;break;case Pe:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}y2.DEFAULT_IMAGE=null;y2.DEFAULT_MAPPING=A0;y2.DEFAULT_ANISOTROPY=1;class $1{constructor(e=0,t=0,n=0,q=1){$1.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=q}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,q){return this.x=e,this.y=t,this.z=n,this.w=q,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,q=this.z,i=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*q+r[12]*i,this.y=r[1]*t+r[5]*n+r[9]*q+r[13]*i,this.z=r[2]*t+r[6]*n+r[10]*q+r[14]*i,this.w=r[3]*t+r[7]*n+r[11]*q+r[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,q,i;const a=e.elements,l=a[0],c=a[4],h=a[8],u=a[1],m=a[5],p=a[9],d=a[2],f=a[6],x=a[10];if(Math.abs(c-u)<.01&&Math.abs(h-d)<.01&&Math.abs(p-f)<.01){if(Math.abs(c+u)<.1&&Math.abs(h+d)<.1&&Math.abs(p+f)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(l+1)/2,y=(m+1)/2,b=(x+1)/2,L=(c+u)/4,P=(h+d)/4,v=(p+f)/4;return g>y&&g>b?g<.01?(n=0,q=.707106781,i=.707106781):(n=Math.sqrt(g),q=L/n,i=P/n):y>b?y<.01?(n=.707106781,q=0,i=.707106781):(q=Math.sqrt(y),n=L/q,i=v/q):b<.01?(n=.707106781,q=.707106781,i=0):(i=Math.sqrt(b),n=P/i,q=v/i),this.set(n,q,i,t),this}let M=Math.sqrt((f-p)*(f-p)+(h-d)*(h-d)+(u-c)*(u-c));return Math.abs(M)<.001&&(M=1),this.x=(f-p)/M,this.y=(h-d)/M,this.z=(u-c)/M,this.w=Math.acos((l+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class y3 extends a4{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $1(0,0,e,t),this.scissorTest=!1,this.viewport=new $1(0,0,e,t);const q={width:e,height:t,depth:1};this.texture=new y2(q,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:N2,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new O0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class F0 extends y2{constructor(e=null,t=1,n=1,q=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:q},this.magFilter=g2,this.minFilter=g2,this.wrapR=W2,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class B9 extends y2{constructor(e=null,t=1,n=1,q=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:q},this.magFilter=g2,this.minFilter=g2,this.wrapR=W2,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $5{constructor(e=0,t=0,n=0,q=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=q}static slerpFlat(e,t,n,q,i,r,o){let a=n[q+0],l=n[q+1],c=n[q+2],h=n[q+3];const u=i[r+0],m=i[r+1],p=i[r+2],d=i[r+3];if(o===0){e[t+0]=a,e[t+1]=l,e[t+2]=c,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=p,e[t+3]=d;return}if(h!==d||a!==u||l!==m||c!==p){let f=1-o;const x=a*u+l*m+c*p+h*d,M=x>=0?1:-1,g=1-x*x;if(g>Number.EPSILON){const b=Math.sqrt(g),L=Math.atan2(b,x*M);f=Math.sin(f*L)/b,o=Math.sin(o*L)/b}const y=o*M;if(a=a*f+u*y,l=l*f+m*y,c=c*f+p*y,h=h*f+d*y,f===1-o){const b=1/Math.sqrt(a*a+l*l+c*c+h*h);a*=b,l*=b,c*=b,h*=b}}e[t]=a,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,q,i,r){const o=n[q],a=n[q+1],l=n[q+2],c=n[q+3],h=i[r],u=i[r+1],m=i[r+2],p=i[r+3];return e[t]=o*p+c*h+a*m-l*u,e[t+1]=a*p+c*u+l*h-o*m,e[t+2]=l*p+c*m+o*u-a*h,e[t+3]=c*p-o*h-a*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,q){return this._x=e,this._y=t,this._z=n,this._w=q,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,q=e._y,i=e._z,r=e._order,o=Math.cos,a=Math.sin,l=o(n/2),c=o(q/2),h=o(i/2),u=a(n/2),m=a(q/2),p=a(i/2);switch(r){case"XYZ":this._x=u*c*h+l*m*p,this._y=l*m*h-u*c*p,this._z=l*c*p+u*m*h,this._w=l*c*h-u*m*p;break;case"YXZ":this._x=u*c*h+l*m*p,this._y=l*m*h-u*c*p,this._z=l*c*p-u*m*h,this._w=l*c*h+u*m*p;break;case"ZXY":this._x=u*c*h-l*m*p,this._y=l*m*h+u*c*p,this._z=l*c*p+u*m*h,this._w=l*c*h-u*m*p;break;case"ZYX":this._x=u*c*h-l*m*p,this._y=l*m*h+u*c*p,this._z=l*c*p-u*m*h,this._w=l*c*h+u*m*p;break;case"YZX":this._x=u*c*h+l*m*p,this._y=l*m*h+u*c*p,this._z=l*c*p-u*m*h,this._w=l*c*h-u*m*p;break;case"XZY":this._x=u*c*h-l*m*p,this._y=l*m*h-u*c*p,this._z=l*c*p+u*m*h,this._w=l*c*h+u*m*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,q=Math.sin(n);return this._x=e.x*q,this._y=e.y*q,this._z=e.z*q,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],q=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10],u=n+o+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(c-a)*m,this._y=(i-l)*m,this._z=(r-q)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(c-a)/m,this._x=.25*m,this._y=(q+r)/m,this._z=(i+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(i-l)/m,this._x=(q+r)/m,this._y=.25*m,this._z=(a+c)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(r-q)/m,this._x=(i+l)/m,this._y=(a+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_2(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const q=Math.min(1,t/n);return this.slerp(e,q),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,q=e._y,i=e._z,r=e._w,o=t._x,a=t._y,l=t._z,c=t._w;return this._x=n*c+r*o+q*l-i*a,this._y=q*c+r*a+i*o-n*l,this._z=i*c+r*l+n*a-q*o,this._w=r*c-n*o-q*a-i*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,q=this._y,i=this._z,r=this._w;let o=r*e._w+n*e._x+q*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=q,this._z=i,this;const a=1-o*o;if(a<=Number.EPSILON){const m=1-t;return this._w=m*r+t*this._w,this._x=m*n+t*this._x,this._y=m*q+t*this._y,this._z=m*i+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(a),c=Math.atan2(l,o),h=Math.sin((1-t)*c)/l,u=Math.sin(t*c)/l;return this._w=r*h+this._w*u,this._x=n*h+this._x*u,this._y=q*h+this._y*u,this._z=i*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),q=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(q),n*Math.sin(i),n*Math.cos(i),t*Math.sin(q))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(c7.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(c7.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,q=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*q,this.y=i[1]*t+i[4]*n+i[7]*q,this.z=i[2]*t+i[5]*n+i[8]*q,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,q=this.z,i=e.elements,r=1/(i[3]*t+i[7]*n+i[11]*q+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*q+i[12])*r,this.y=(i[1]*t+i[5]*n+i[9]*q+i[13])*r,this.z=(i[2]*t+i[6]*n+i[10]*q+i[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,q=this.z,i=e.x,r=e.y,o=e.z,a=e.w,l=a*t+r*q-o*n,c=a*n+o*t-i*q,h=a*q+i*n-r*t,u=-i*t-r*n-o*q;return this.x=l*a+u*-i+c*-o-h*-r,this.y=c*a+u*-r+h*-i-l*-o,this.z=h*a+u*-o+l*-r-c*-i,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,q=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*q,this.y=i[1]*t+i[5]*n+i[9]*q,this.z=i[2]*t+i[6]*n+i[10]*q,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,q=e.y,i=e.z,r=t.x,o=t.y,a=t.z;return this.x=q*a-i*o,this.y=i*r-n*a,this.z=n*o-q*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ot.copy(this).projectOnVector(e),this.sub(ot)}reflect(e){return this.sub(ot.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_2(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,q=this.z-e.z;return t*t+n*n+q*q}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const q=Math.sin(t)*e;return this.x=q*Math.sin(n),this.y=Math.cos(t)*e,this.z=q*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),q=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=q,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ot=new F,c7=new $5;class l4{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,q=1/0,i=-1/0,r=-1/0,o=-1/0;for(let a=0,l=e.length;a<l;a+=3){const c=e[a],h=e[a+1],u=e[a+2];c<t&&(t=c),h<n&&(n=h),u<q&&(q=u),c>i&&(i=c),h>r&&(r=h),u>o&&(o=u)}return this.min.set(t,n,q),this.max.set(i,r,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,q=1/0,i=-1/0,r=-1/0,o=-1/0;for(let a=0,l=e.count;a<l;a++){const c=e.getX(a),h=e.getY(a),u=e.getZ(a);c<t&&(t=c),h<n&&(n=h),u<q&&(q=u),c>i&&(i=c),h>r&&(r=h),u>o&&(o=u)}return this.min.set(t,n,q),this.max.set(i,r,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=s3.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const i=n.attributes.position;for(let r=0,o=i.count;r<o;r++)s3.fromBufferAttribute(i,r).applyMatrix4(e.matrixWorld),this.expandByPoint(s3)}else n.boundingBox===null&&n.computeBoundingBox(),at.copy(n.boundingBox),at.applyMatrix4(e.matrixWorld),this.union(at);const q=e.children;for(let i=0,r=q.length;i<r;i++)this.expandByObject(q[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,s3),s3.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(m4),Q4.subVectors(this.max,m4),I3.subVectors(e.a,m4),D3.subVectors(e.b,m4),N3.subVectors(e.c,m4),O5.subVectors(D3,I3),F5.subVectors(N3,D3),r3.subVectors(I3,N3);let t=[0,-O5.z,O5.y,0,-F5.z,F5.y,0,-r3.z,r3.y,O5.z,0,-O5.x,F5.z,0,-F5.x,r3.z,0,-r3.x,-O5.y,O5.x,0,-F5.y,F5.x,0,-r3.y,r3.x,0];return!lt(t,I3,D3,N3,Q4)||(t=[1,0,0,0,1,0,0,0,1],!lt(t,I3,D3,N3,Q4))?!1:(ee.crossVectors(O5,F5),t=[ee.x,ee.y,ee.z],lt(t,I3,D3,N3,Q4))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return s3.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(s3).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(v5[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),v5[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),v5[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),v5[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),v5[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),v5[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),v5[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),v5[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(v5),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const v5=[new F,new F,new F,new F,new F,new F,new F,new F],s3=new F,at=new l4,I3=new F,D3=new F,N3=new F,O5=new F,F5=new F,r3=new F,m4=new F,Q4=new F,ee=new F,o3=new F;function lt(s,e,t,n,q){for(let i=0,r=s.length-3;i<=r;i+=3){o3.fromArray(s,i);const o=q.x*Math.abs(o3.x)+q.y*Math.abs(o3.y)+q.z*Math.abs(o3.z),a=e.dot(o3),l=t.dot(o3),c=n.dot(o3);if(Math.max(-Math.max(a,l,c),Math.min(a,l,c))>o)return!1}return!0}const G9=new l4,p4=new F,ct=new F;class c4{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):G9.setFromPoints(e).getCenter(n);let q=0;for(let i=0,r=e.length;i<r;i++)q=Math.max(q,n.distanceToSquared(e[i]));return this.radius=Math.sqrt(q),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;p4.subVectors(e,this.center);const t=p4.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),q=(n-this.radius)*.5;this.center.addScaledVector(p4,q/n),this.radius+=q}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ct.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(p4.copy(e.center).add(ct)),this.expandByPoint(p4.copy(e.center).sub(ct))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const y5=new F,ht=new F,te=new F,z5=new F,ut=new F,ne=new F,ft=new F;class Fe{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,y5)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=y5.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(y5.copy(this.direction).multiplyScalar(t).add(this.origin),y5.distanceToSquared(e))}distanceSqToSegment(e,t,n,q){ht.copy(e).add(t).multiplyScalar(.5),te.copy(t).sub(e).normalize(),z5.copy(this.origin).sub(ht);const i=e.distanceTo(t)*.5,r=-this.direction.dot(te),o=z5.dot(this.direction),a=-z5.dot(te),l=z5.lengthSq(),c=Math.abs(1-r*r);let h,u,m,p;if(c>0)if(h=r*a-o,u=r*o-a,p=i*c,h>=0)if(u>=-p)if(u<=p){const d=1/c;h*=d,u*=d,m=h*(h+r*u+2*o)+u*(r*h+u+2*a)+l}else u=i,h=Math.max(0,-(r*u+o)),m=-h*h+u*(u+2*a)+l;else u=-i,h=Math.max(0,-(r*u+o)),m=-h*h+u*(u+2*a)+l;else u<=-p?(h=Math.max(0,-(-r*i+o)),u=h>0?-i:Math.min(Math.max(-i,-a),i),m=-h*h+u*(u+2*a)+l):u<=p?(h=0,u=Math.min(Math.max(-i,-a),i),m=u*(u+2*a)+l):(h=Math.max(0,-(r*i+o)),u=h>0?i:Math.min(Math.max(-i,-a),i),m=-h*h+u*(u+2*a)+l);else u=r>0?-i:i,h=Math.max(0,-(r*u+o)),m=-h*h+u*(u+2*a)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),q&&q.copy(te).multiplyScalar(u).add(ht),m}intersectSphere(e,t){y5.subVectors(e.center,this.origin);const n=y5.dot(this.direction),q=y5.dot(y5)-n*n,i=e.radius*e.radius;if(q>i)return null;const r=Math.sqrt(i-q),o=n-r,a=n+r;return o<0&&a<0?null:o<0?this.at(a,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,q,i,r,o,a;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,q=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,q=(e.min.x-u.x)*l),c>=0?(i=(e.min.y-u.y)*c,r=(e.max.y-u.y)*c):(i=(e.max.y-u.y)*c,r=(e.min.y-u.y)*c),n>r||i>q||((i>n||isNaN(n))&&(n=i),(r<q||isNaN(q))&&(q=r),h>=0?(o=(e.min.z-u.z)*h,a=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,a=(e.min.z-u.z)*h),n>a||o>q)||((o>n||n!==n)&&(n=o),(a<q||q!==q)&&(q=a),q<0)?null:this.at(n>=0?n:q,t)}intersectsBox(e){return this.intersectBox(e,y5)!==null}intersectTriangle(e,t,n,q,i){ut.subVectors(t,e),ne.subVectors(n,e),ft.crossVectors(ut,ne);let r=this.direction.dot(ft),o;if(r>0){if(q)return null;o=1}else if(r<0)o=-1,r=-r;else return null;z5.subVectors(this.origin,e);const a=o*this.direction.dot(ne.crossVectors(z5,ne));if(a<0)return null;const l=o*this.direction.dot(ut.cross(z5));if(l<0||a+l>r)return null;const c=-o*z5.dot(ft);return c<0?null:this.at(c/r,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class k1{constructor(){k1.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,q,i,r,o,a,l,c,h,u,m,p,d,f){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=q,x[1]=i,x[5]=r,x[9]=o,x[13]=a,x[2]=l,x[6]=c,x[10]=h,x[14]=u,x[3]=m,x[7]=p,x[11]=d,x[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new k1().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,q=1/O3.setFromMatrixColumn(e,0).length(),i=1/O3.setFromMatrixColumn(e,1).length(),r=1/O3.setFromMatrixColumn(e,2).length();return t[0]=n[0]*q,t[1]=n[1]*q,t[2]=n[2]*q,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,q=e.y,i=e.z,r=Math.cos(n),o=Math.sin(n),a=Math.cos(q),l=Math.sin(q),c=Math.cos(i),h=Math.sin(i);if(e.order==="XYZ"){const u=r*c,m=r*h,p=o*c,d=o*h;t[0]=a*c,t[4]=-a*h,t[8]=l,t[1]=m+p*l,t[5]=u-d*l,t[9]=-o*a,t[2]=d-u*l,t[6]=p+m*l,t[10]=r*a}else if(e.order==="YXZ"){const u=a*c,m=a*h,p=l*c,d=l*h;t[0]=u+d*o,t[4]=p*o-m,t[8]=r*l,t[1]=r*h,t[5]=r*c,t[9]=-o,t[2]=m*o-p,t[6]=d+u*o,t[10]=r*a}else if(e.order==="ZXY"){const u=a*c,m=a*h,p=l*c,d=l*h;t[0]=u-d*o,t[4]=-r*h,t[8]=p+m*o,t[1]=m+p*o,t[5]=r*c,t[9]=d-u*o,t[2]=-r*l,t[6]=o,t[10]=r*a}else if(e.order==="ZYX"){const u=r*c,m=r*h,p=o*c,d=o*h;t[0]=a*c,t[4]=p*l-m,t[8]=u*l+d,t[1]=a*h,t[5]=d*l+u,t[9]=m*l-p,t[2]=-l,t[6]=o*a,t[10]=r*a}else if(e.order==="YZX"){const u=r*a,m=r*l,p=o*a,d=o*l;t[0]=a*c,t[4]=d-u*h,t[8]=p*h+m,t[1]=h,t[5]=r*c,t[9]=-o*c,t[2]=-l*c,t[6]=m*h+p,t[10]=u-d*h}else if(e.order==="XZY"){const u=r*a,m=r*l,p=o*a,d=o*l;t[0]=a*c,t[4]=-h,t[8]=l*c,t[1]=u*h+d,t[5]=r*c,t[9]=m*h-p,t[2]=p*h-m,t[6]=o*c,t[10]=d*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V9,e,H9)}lookAt(e,t,n){const q=this.elements;return U2.subVectors(e,t),U2.lengthSq()===0&&(U2.z=1),U2.normalize(),U5.crossVectors(n,U2),U5.lengthSq()===0&&(Math.abs(n.z)===1?U2.x+=1e-4:U2.z+=1e-4,U2.normalize(),U5.crossVectors(n,U2)),U5.normalize(),qe.crossVectors(U2,U5),q[0]=U5.x,q[4]=qe.x,q[8]=U2.x,q[1]=U5.y,q[5]=qe.y,q[9]=U2.y,q[2]=U5.z,q[6]=qe.z,q[10]=U2.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,q=t.elements,i=this.elements,r=n[0],o=n[4],a=n[8],l=n[12],c=n[1],h=n[5],u=n[9],m=n[13],p=n[2],d=n[6],f=n[10],x=n[14],M=n[3],g=n[7],y=n[11],b=n[15],L=q[0],P=q[4],v=q[8],T=q[12],D=q[1],$=q[5],W=q[9],k=q[13],N=q[2],K=q[6],q1=q[10],e1=q[14],U=q[3],h1=q[7],c1=q[11],g1=q[15];return i[0]=r*L+o*D+a*N+l*U,i[4]=r*P+o*$+a*K+l*h1,i[8]=r*v+o*W+a*q1+l*c1,i[12]=r*T+o*k+a*e1+l*g1,i[1]=c*L+h*D+u*N+m*U,i[5]=c*P+h*$+u*K+m*h1,i[9]=c*v+h*W+u*q1+m*c1,i[13]=c*T+h*k+u*e1+m*g1,i[2]=p*L+d*D+f*N+x*U,i[6]=p*P+d*$+f*K+x*h1,i[10]=p*v+d*W+f*q1+x*c1,i[14]=p*T+d*k+f*e1+x*g1,i[3]=M*L+g*D+y*N+b*U,i[7]=M*P+g*$+y*K+b*h1,i[11]=M*v+g*W+y*q1+b*c1,i[15]=M*T+g*k+y*e1+b*g1,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],q=e[8],i=e[12],r=e[1],o=e[5],a=e[9],l=e[13],c=e[2],h=e[6],u=e[10],m=e[14],p=e[3],d=e[7],f=e[11],x=e[15];return p*(+i*a*h-q*l*h-i*o*u+n*l*u+q*o*m-n*a*m)+d*(+t*a*m-t*l*u+i*r*u-q*r*m+q*l*c-i*a*c)+f*(+t*l*h-t*o*m-i*r*h+n*r*m+i*o*c-n*l*c)+x*(-q*o*c-t*a*h+t*o*u+q*r*h-n*r*u+n*a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const q=this.elements;return e.isVector3?(q[12]=e.x,q[13]=e.y,q[14]=e.z):(q[12]=e,q[13]=t,q[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],q=e[2],i=e[3],r=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=e[9],u=e[10],m=e[11],p=e[12],d=e[13],f=e[14],x=e[15],M=h*f*l-d*u*l+d*a*m-o*f*m-h*a*x+o*u*x,g=p*u*l-c*f*l-p*a*m+r*f*m+c*a*x-r*u*x,y=c*d*l-p*h*l+p*o*m-r*d*m-c*o*x+r*h*x,b=p*h*a-c*d*a-p*o*u+r*d*u+c*o*f-r*h*f,L=t*M+n*g+q*y+i*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=M*P,e[1]=(d*u*i-h*f*i-d*q*m+n*f*m+h*q*x-n*u*x)*P,e[2]=(o*f*i-d*a*i+d*q*l-n*f*l-o*q*x+n*a*x)*P,e[3]=(h*a*i-o*u*i-h*q*l+n*u*l+o*q*m-n*a*m)*P,e[4]=g*P,e[5]=(c*f*i-p*u*i+p*q*m-t*f*m-c*q*x+t*u*x)*P,e[6]=(p*a*i-r*f*i-p*q*l+t*f*l+r*q*x-t*a*x)*P,e[7]=(r*u*i-c*a*i+c*q*l-t*u*l-r*q*m+t*a*m)*P,e[8]=y*P,e[9]=(p*h*i-c*d*i-p*n*m+t*d*m+c*n*x-t*h*x)*P,e[10]=(r*d*i-p*o*i+p*n*l-t*d*l-r*n*x+t*o*x)*P,e[11]=(c*o*i-r*h*i-c*n*l+t*h*l+r*n*m-t*o*m)*P,e[12]=b*P,e[13]=(c*d*q-p*h*q+p*n*u-t*d*u-c*n*f+t*h*f)*P,e[14]=(p*o*q-r*d*q-p*n*a+t*d*a+r*n*f-t*o*f)*P,e[15]=(r*h*q-c*o*q+c*n*a-t*h*a-r*n*u+t*o*u)*P,this}scale(e){const t=this.elements,n=e.x,q=e.y,i=e.z;return t[0]*=n,t[4]*=q,t[8]*=i,t[1]*=n,t[5]*=q,t[9]*=i,t[2]*=n,t[6]*=q,t[10]*=i,t[3]*=n,t[7]*=q,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],q=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,q))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),q=Math.sin(t),i=1-n,r=e.x,o=e.y,a=e.z,l=i*r,c=i*o;return this.set(l*r+n,l*o-q*a,l*a+q*o,0,l*o+q*a,c*o+n,c*a-q*r,0,l*a-q*o,c*a+q*r,i*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,q,i,r){return this.set(1,n,i,0,e,1,r,0,t,q,1,0,0,0,0,1),this}compose(e,t,n){const q=this.elements,i=t._x,r=t._y,o=t._z,a=t._w,l=i+i,c=r+r,h=o+o,u=i*l,m=i*c,p=i*h,d=r*c,f=r*h,x=o*h,M=a*l,g=a*c,y=a*h,b=n.x,L=n.y,P=n.z;return q[0]=(1-(d+x))*b,q[1]=(m+y)*b,q[2]=(p-g)*b,q[3]=0,q[4]=(m-y)*L,q[5]=(1-(u+x))*L,q[6]=(f+M)*L,q[7]=0,q[8]=(p+g)*P,q[9]=(f-M)*P,q[10]=(1-(u+d))*P,q[11]=0,q[12]=e.x,q[13]=e.y,q[14]=e.z,q[15]=1,this}decompose(e,t,n){const q=this.elements;let i=O3.set(q[0],q[1],q[2]).length();const r=O3.set(q[4],q[5],q[6]).length(),o=O3.set(q[8],q[9],q[10]).length();this.determinant()<0&&(i=-i),e.x=q[12],e.y=q[13],e.z=q[14],Z2.copy(this);const l=1/i,c=1/r,h=1/o;return Z2.elements[0]*=l,Z2.elements[1]*=l,Z2.elements[2]*=l,Z2.elements[4]*=c,Z2.elements[5]*=c,Z2.elements[6]*=c,Z2.elements[8]*=h,Z2.elements[9]*=h,Z2.elements[10]*=h,t.setFromRotationMatrix(Z2),n.x=i,n.y=r,n.z=o,this}makePerspective(e,t,n,q,i,r){const o=this.elements,a=2*i/(t-e),l=2*i/(n-q),c=(t+e)/(t-e),h=(n+q)/(n-q),u=-(r+i)/(r-i),m=-2*r*i/(r-i);return o[0]=a,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,q,i,r){const o=this.elements,a=1/(t-e),l=1/(n-q),c=1/(r-i),h=(t+e)*a,u=(n+q)*l,m=(r+i)*c;return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*c,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let q=0;q<16;q++)if(t[q]!==n[q])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const O3=new F,Z2=new k1,V9=new F(0,0,0),H9=new F(1,1,1),U5=new F,qe=new F,U2=new F,h7=new k1,u7=new $5;class ze{constructor(e=0,t=0,n=0,q=ze.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=q}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,q=this._order){return this._x=e,this._y=t,this._z=n,this._order=q,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const q=e.elements,i=q[0],r=q[4],o=q[8],a=q[1],l=q[5],c=q[9],h=q[2],u=q[6],m=q[10];switch(t){case"XYZ":this._y=Math.asin(_2(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-r,i)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_2(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-h,i),this._z=0);break;case"ZXY":this._x=Math.asin(_2(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(a,i));break;case"ZYX":this._y=Math.asin(-_2(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(a,i)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(_2(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,i)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-_2(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return h7.makeRotationFromQuaternion(e),this.setFromRotationMatrix(h7,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return u7.setFromEuler(this),this.setFromQuaternion(u7,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ze.DEFAULT_ORDER="XYZ";class s6{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W9=0;const f7=new F,F3=new $5,M5=new k1,ie=new F,x4=new F,X9=new F,j9=new $5,d7=new F(1,0,0),m7=new F(0,1,0),p7=new F(0,0,1),Y9={type:"added"},x7={type:"removed"};class s2 extends a4{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W9++}),this.uuid=Y2(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s2.DEFAULT_UP.clone();const e=new F,t=new ze,n=new $5,q=new F(1,1,1);function i(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(i),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:q},modelViewMatrix:{value:new k1},normalMatrix:{value:new c2}}),this.matrix=new k1,this.matrixWorld=new k1,this.matrixAutoUpdate=s2.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=s2.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new s6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return F3.setFromAxisAngle(e,t),this.quaternion.multiply(F3),this}rotateOnWorldAxis(e,t){return F3.setFromAxisAngle(e,t),this.quaternion.premultiply(F3),this}rotateX(e){return this.rotateOnAxis(d7,e)}rotateY(e){return this.rotateOnAxis(m7,e)}rotateZ(e){return this.rotateOnAxis(p7,e)}translateOnAxis(e,t){return f7.copy(e).applyQuaternion(this.quaternion),this.position.add(f7.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(d7,e)}translateY(e){return this.translateOnAxis(m7,e)}translateZ(e){return this.translateOnAxis(p7,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(M5.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ie.copy(e):ie.set(e,t,n);const q=this.parent;this.updateWorldMatrix(!0,!1),x4.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?M5.lookAt(x4,ie,this.up):M5.lookAt(ie,x4,this.up),this.quaternion.setFromRotationMatrix(M5),q&&(M5.extractRotation(q.matrixWorld),F3.setFromRotationMatrix(M5),this.quaternion.premultiply(F3.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Y9)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(x7)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(x7)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),M5.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),M5.multiply(e.parent.matrixWorld)),e.applyMatrix4(M5),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,q=this.children.length;n<q;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let q=0,i=this.children.length;q<i;q++){const r=this.children[q].getObjectsByProperty(e,t);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(x4,e,X9),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(x4,j9,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,q=t.length;n<q;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,q=t.length;n<q;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,q=t.length;n<q;n++){const i=t[n];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const q=this.children;for(let i=0,r=q.length;i<r;i++){const o=q[i];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const q={};q.uuid=this.uuid,q.type=this.type,this.name!==""&&(q.name=this.name),this.castShadow===!0&&(q.castShadow=!0),this.receiveShadow===!0&&(q.receiveShadow=!0),this.visible===!1&&(q.visible=!1),this.frustumCulled===!1&&(q.frustumCulled=!1),this.renderOrder!==0&&(q.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(q.userData=this.userData),q.layers=this.layers.mask,q.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(q.matrixAutoUpdate=!1),this.isInstancedMesh&&(q.type="InstancedMesh",q.count=this.count,q.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(q.instanceColor=this.instanceColor.toJSON()));function i(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?q.background=this.background.toJSON():this.background.isTexture&&(q.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(q.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){q.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){const h=a[l];i(e.shapes,h)}else i(e.shapes,a)}}if(this.isSkinnedMesh&&(q.bindMode=this.bindMode,q.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),q.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(i(e.materials,this.material[a]));q.material=o}else q.material=i(e.materials,this.material);if(this.children.length>0){q.children=[];for(let o=0;o<this.children.length;o++)q.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){q.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];q.animations.push(i(e.animations,a))}}if(t){const o=r(e.geometries),a=r(e.materials),l=r(e.textures),c=r(e.images),h=r(e.shapes),u=r(e.skeletons),m=r(e.animations),p=r(e.nodes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),p.length>0&&(n.nodes=p)}return n.object=q,n;function r(o){const a=[];for(const l in o){const c=o[l];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const q=e.children[n];this.add(q.clone())}return this}}s2.DEFAULT_UP=new F(0,1,0);s2.DEFAULT_MATRIX_AUTO_UPDATE=!0;s2.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $2=new F,b5=new F,dt=new F,S5=new F,z3=new F,U3=new F,g7=new F,mt=new F,pt=new F,xt=new F;class C5{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,q){q.subVectors(n,t),$2.subVectors(e,t),q.cross($2);const i=q.lengthSq();return i>0?q.multiplyScalar(1/Math.sqrt(i)):q.set(0,0,0)}static getBarycoord(e,t,n,q,i){$2.subVectors(q,t),b5.subVectors(n,t),dt.subVectors(e,t);const r=$2.dot($2),o=$2.dot(b5),a=$2.dot(dt),l=b5.dot(b5),c=b5.dot(dt),h=r*l-o*o;if(h===0)return i.set(-2,-1,-1);const u=1/h,m=(l*a-o*c)*u,p=(r*c-o*a)*u;return i.set(1-m-p,p,m)}static containsPoint(e,t,n,q){return this.getBarycoord(e,t,n,q,S5),S5.x>=0&&S5.y>=0&&S5.x+S5.y<=1}static getUV(e,t,n,q,i,r,o,a){return this.getBarycoord(e,t,n,q,S5),a.set(0,0),a.addScaledVector(i,S5.x),a.addScaledVector(r,S5.y),a.addScaledVector(o,S5.z),a}static isFrontFacing(e,t,n,q){return $2.subVectors(n,t),b5.subVectors(e,t),$2.cross(b5).dot(q)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,q){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[q]),this}setFromAttributeAndIndices(e,t,n,q){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,q),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $2.subVectors(this.c,this.b),b5.subVectors(this.a,this.b),$2.cross(b5).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return C5.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return C5.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,q,i){return C5.getUV(e,this.a,this.b,this.c,t,n,q,i)}containsPoint(e){return C5.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return C5.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,q=this.b,i=this.c;let r,o;z3.subVectors(q,n),U3.subVectors(i,n),mt.subVectors(e,n);const a=z3.dot(mt),l=U3.dot(mt);if(a<=0&&l<=0)return t.copy(n);pt.subVectors(e,q);const c=z3.dot(pt),h=U3.dot(pt);if(c>=0&&h<=c)return t.copy(q);const u=a*h-c*l;if(u<=0&&a>=0&&c<=0)return r=a/(a-c),t.copy(n).addScaledVector(z3,r);xt.subVectors(e,i);const m=z3.dot(xt),p=U3.dot(xt);if(p>=0&&m<=p)return t.copy(i);const d=m*l-a*p;if(d<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(U3,o);const f=c*p-m*h;if(f<=0&&h-c>=0&&m-p>=0)return g7.subVectors(i,q),o=(h-c)/(h-c+(m-p)),t.copy(q).addScaledVector(g7,o);const x=1/(f+d+u);return r=d*x,o=u*x,t.copy(n).addScaledVector(z3,r).addScaledVector(U3,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let J9=0;class n5 extends a4{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J9++}),this.uuid=Y2(),this.name="",this.type="Material",this.blending=K3,this.side=D5,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=T0,this.blendDst=E0,this.blendEquation=j3,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ot,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w9,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nt,this.stencilZFail=nt,this.stencilZPass=nt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const q=this[t];if(q===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}q&&q.isColor?q.set(n):q&&q.isVector3&&n&&n.isVector3?q.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==K3&&(n.blending=this.blending),this.side!==D5&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function q(i){const r=[];for(const o in i){const a=i[o];delete a.metadata,r.push(a)}return r}if(t){const i=q(e.textures),r=q(e.images);i.length>0&&(n.textures=i),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const q=t.length;n=new Array(q);for(let i=0;i!==q;++i)n[i]=t[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class f5 extends n5{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new F1(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=n6,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const a2=new F,se=new l1;class P2{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bt,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let q=0,i=this.itemSize;q<i;q++)this.array[e+q]=t.array[n+q];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)se.fromBufferAttribute(this,t),se.applyMatrix3(e),this.setXY(t,se.x,se.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)a2.fromBufferAttribute(this,t),a2.applyMatrix3(e),this.setXYZ(t,a2.x,a2.y,a2.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)a2.fromBufferAttribute(this,t),a2.applyMatrix4(e),this.setXYZ(t,a2.x,a2.y,a2.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)a2.fromBufferAttribute(this,t),a2.applyNormalMatrix(e),this.setXYZ(t,a2.x,a2.y,a2.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)a2.fromBufferAttribute(this,t),a2.transformDirection(e),this.setXYZ(t,a2.x,a2.y,a2.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=L5(t,this.array)),t}setX(e,t){return this.normalized&&(t=Z1(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=L5(t,this.array)),t}setY(e,t){return this.normalized&&(t=Z1(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=L5(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Z1(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=L5(t,this.array)),t}setW(e,t){return this.normalized&&(t=Z1(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Z1(t,this.array),n=Z1(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,q){return e*=this.itemSize,this.normalized&&(t=Z1(t,this.array),n=Z1(n,this.array),q=Z1(q,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=q,this}setXYZW(e,t,n,q,i){return e*=this.itemSize,this.normalized&&(t=Z1(t,this.array),n=Z1(n,this.array),q=Z1(q,this.array),i=Z1(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=q,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bt&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class z0 extends P2{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class U0 extends P2{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Q1 extends P2{constructor(e,t,n){super(new Float32Array(e),t,n)}}let K9=0;const V2=new k1,gt=new s2,k3=new F,k2=new l4,g4=new l4,x2=new F;class w2 extends a4{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K9++}),this.uuid=Y2(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I0(e)?U0:z0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new c2().getNormalMatrix(e);n.applyNormalMatrix(i),n.needsUpdate=!0}const q=this.attributes.tangent;return q!==void 0&&(q.transformDirection(e),q.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return V2.makeRotationFromQuaternion(e),this.applyMatrix4(V2),this}rotateX(e){return V2.makeRotationX(e),this.applyMatrix4(V2),this}rotateY(e){return V2.makeRotationY(e),this.applyMatrix4(V2),this}rotateZ(e){return V2.makeRotationZ(e),this.applyMatrix4(V2),this}translate(e,t,n){return V2.makeTranslation(e,t,n),this.applyMatrix4(V2),this}scale(e,t,n){return V2.makeScale(e,t,n),this.applyMatrix4(V2),this}lookAt(e){return gt.lookAt(e),gt.updateMatrix(),this.applyMatrix4(gt.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(k3).negate(),this.translate(k3.x,k3.y,k3.z),this}setFromPoints(e){const t=[];for(let n=0,q=e.length;n<q;n++){const i=e[n];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new Q1(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new l4);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,q=t.length;n<q;n++){const i=t[n];k2.setFromBufferAttribute(i),this.morphTargetsRelative?(x2.addVectors(this.boundingBox.min,k2.min),this.boundingBox.expandByPoint(x2),x2.addVectors(this.boundingBox.max,k2.max),this.boundingBox.expandByPoint(x2)):(this.boundingBox.expandByPoint(k2.min),this.boundingBox.expandByPoint(k2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new c4);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(k2.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];g4.setFromBufferAttribute(o),this.morphTargetsRelative?(x2.addVectors(k2.min,g4.min),k2.expandByPoint(x2),x2.addVectors(k2.max,g4.max),k2.expandByPoint(x2)):(k2.expandByPoint(g4.min),k2.expandByPoint(g4.max))}k2.getCenter(n);let q=0;for(let i=0,r=e.count;i<r;i++)x2.fromBufferAttribute(e,i),q=Math.max(q,n.distanceToSquared(x2));if(t)for(let i=0,r=t.length;i<r;i++){const o=t[i],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)x2.fromBufferAttribute(o,l),a&&(k3.fromBufferAttribute(e,l),x2.add(k3)),q=Math.max(q,n.distanceToSquared(x2))}this.boundingSphere.radius=Math.sqrt(q),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,q=t.position.array,i=t.normal.array,r=t.uv.array,o=q.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new P2(new Float32Array(4*o),4));const a=this.getAttribute("tangent").array,l=[],c=[];for(let D=0;D<o;D++)l[D]=new F,c[D]=new F;const h=new F,u=new F,m=new F,p=new l1,d=new l1,f=new l1,x=new F,M=new F;function g(D,$,W){h.fromArray(q,D*3),u.fromArray(q,$*3),m.fromArray(q,W*3),p.fromArray(r,D*2),d.fromArray(r,$*2),f.fromArray(r,W*2),u.sub(h),m.sub(h),d.sub(p),f.sub(p);const k=1/(d.x*f.y-f.x*d.y);!isFinite(k)||(x.copy(u).multiplyScalar(f.y).addScaledVector(m,-d.y).multiplyScalar(k),M.copy(m).multiplyScalar(d.x).addScaledVector(u,-f.x).multiplyScalar(k),l[D].add(x),l[$].add(x),l[W].add(x),c[D].add(M),c[$].add(M),c[W].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let D=0,$=y.length;D<$;++D){const W=y[D],k=W.start,N=W.count;for(let K=k,q1=k+N;K<q1;K+=3)g(n[K+0],n[K+1],n[K+2])}const b=new F,L=new F,P=new F,v=new F;function T(D){P.fromArray(i,D*3),v.copy(P);const $=l[D];b.copy($),b.sub(P.multiplyScalar(P.dot($))).normalize(),L.crossVectors(v,$);const k=L.dot(c[D])<0?-1:1;a[D*4]=b.x,a[D*4+1]=b.y,a[D*4+2]=b.z,a[D*4+3]=k}for(let D=0,$=y.length;D<$;++D){const W=y[D],k=W.start,N=W.count;for(let K=k,q1=k+N;K<q1;K+=3)T(n[K+0]),T(n[K+1]),T(n[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new P2(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const q=new F,i=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F;if(e)for(let u=0,m=e.count;u<m;u+=3){const p=e.getX(u+0),d=e.getX(u+1),f=e.getX(u+2);q.fromBufferAttribute(t,p),i.fromBufferAttribute(t,d),r.fromBufferAttribute(t,f),c.subVectors(r,i),h.subVectors(q,i),c.cross(h),o.fromBufferAttribute(n,p),a.fromBufferAttribute(n,d),l.fromBufferAttribute(n,f),o.add(c),a.add(c),l.add(c),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(d,a.x,a.y,a.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)q.fromBufferAttribute(t,u+0),i.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),c.subVectors(r,i),h.subVectors(q,i),c.cross(h),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)x2.fromBufferAttribute(e,t),x2.normalize(),e.setXYZ(t,x2.x,x2.y,x2.z)}toNonIndexed(){function e(o,a){const l=o.array,c=o.itemSize,h=o.normalized,u=new l.constructor(a.length*c);let m=0,p=0;for(let d=0,f=a.length;d<f;d++){o.isInterleavedBufferAttribute?m=a[d]*o.data.stride+o.offset:m=a[d]*c;for(let x=0;x<c;x++)u[p++]=l[m++]}return new P2(u,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new w2,n=this.index.array,q=this.attributes;for(const o in q){const a=q[o],l=e(a,n);t.setAttribute(o,l)}const i=this.morphAttributes;for(const o in i){const a=[],l=i[o];for(let c=0,h=l.length;c<h;c++){const u=l[c],m=e(u,n);a.push(m)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,a=r.length;o<a;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const l in a)a[l]!==void 0&&(e[l]=a[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const l=n[a];e.data.attributes[a]=l.toJSON(e.data)}const q={};let i=!1;for(const a in this.morphAttributes){const l=this.morphAttributes[a],c=[];for(let h=0,u=l.length;h<u;h++){const m=l[h];c.push(m.toJSON(e.data))}c.length>0&&(q[a]=c,i=!0)}i&&(e.data.morphAttributes=q,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const q=e.attributes;for(const l in q){const c=q[l];this.setAttribute(l,c.clone(t))}const i=e.morphAttributes;for(const l in i){const c=[],h=i[l];for(let u=0,m=h.length;u<m;u++)c.push(h[u].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,c=r.length;l<c;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const _7=new k1,B3=new Fe,_t=new c4,_4=new F,v4=new F,y4=new F,vt=new F,re=new F,oe=new l1,ae=new l1,le=new l1,yt=new F,ce=new F;class N1 extends s2{constructor(e=new w2,t=new f5){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const q=t[n[0]];if(q!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=q.length;i<r;i++){const o=q[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const n=this.geometry,q=n.attributes.position,i=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(q,e);const o=this.morphTargetInfluences;if(i&&o){re.set(0,0,0);for(let a=0,l=i.length;a<l;a++){const c=o[a],h=i[a];c!==0&&(vt.fromBufferAttribute(h,e),r?re.addScaledVector(vt,c):re.addScaledVector(vt.sub(t),c))}t.add(re)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,q=this.material,i=this.matrixWorld;if(q===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),_t.copy(n.boundingSphere),_t.applyMatrix4(i),e.ray.intersectsSphere(_t)===!1)||(_7.copy(i).invert(),B3.copy(e.ray).applyMatrix4(_7),n.boundingBox!==null&&B3.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,a=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv2,h=n.groups,u=n.drawRange;if(o!==null)if(Array.isArray(q))for(let m=0,p=h.length;m<p;m++){const d=h[m],f=q[d.materialIndex],x=Math.max(d.start,u.start),M=Math.min(o.count,Math.min(d.start+d.count,u.start+u.count));for(let g=x,y=M;g<y;g+=3){const b=o.getX(g),L=o.getX(g+1),P=o.getX(g+2);r=he(this,f,e,B3,l,c,b,L,P),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const m=Math.max(0,u.start),p=Math.min(o.count,u.start+u.count);for(let d=m,f=p;d<f;d+=3){const x=o.getX(d),M=o.getX(d+1),g=o.getX(d+2);r=he(this,q,e,B3,l,c,x,M,g),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(a!==void 0)if(Array.isArray(q))for(let m=0,p=h.length;m<p;m++){const d=h[m],f=q[d.materialIndex],x=Math.max(d.start,u.start),M=Math.min(a.count,Math.min(d.start+d.count,u.start+u.count));for(let g=x,y=M;g<y;g+=3){const b=g,L=g+1,P=g+2;r=he(this,f,e,B3,l,c,b,L,P),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const m=Math.max(0,u.start),p=Math.min(a.count,u.start+u.count);for(let d=m,f=p;d<f;d+=3){const x=d,M=d+1,g=d+2;r=he(this,q,e,B3,l,c,x,M,g),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function Z9(s,e,t,n,q,i,r,o){let a;if(e.side===B2?a=n.intersectTriangle(r,i,q,!0,o):a=n.intersectTriangle(q,i,r,e.side===D5,o),a===null)return null;ce.copy(o),ce.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ce);return l<t.near||l>t.far?null:{distance:l,point:ce.clone(),object:s}}function he(s,e,t,n,q,i,r,o,a){s.getVertexPosition(r,_4),s.getVertexPosition(o,v4),s.getVertexPosition(a,y4);const l=Z9(s,e,t,n,_4,v4,y4,yt);if(l){q&&(oe.fromBufferAttribute(q,r),ae.fromBufferAttribute(q,o),le.fromBufferAttribute(q,a),l.uv=C5.getUV(yt,_4,v4,y4,oe,ae,le,new l1)),i&&(oe.fromBufferAttribute(i,r),ae.fromBufferAttribute(i,o),le.fromBufferAttribute(i,a),l.uv2=C5.getUV(yt,_4,v4,y4,oe,ae,le,new l1));const c={a:r,b:o,c:a,normal:new F,materialIndex:0};C5.getNormal(_4,v4,y4,c.normal),l.face=c}return l}class T2 extends w2{constructor(e=1,t=1,n=1,q=1,i=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:q,heightSegments:i,depthSegments:r};const o=this;q=Math.floor(q),i=Math.floor(i),r=Math.floor(r);const a=[],l=[],c=[],h=[];let u=0,m=0;p("z","y","x",-1,-1,n,t,e,r,i,0),p("z","y","x",1,-1,n,t,-e,r,i,1),p("x","z","y",1,1,e,n,t,q,r,2),p("x","z","y",1,-1,e,n,-t,q,r,3),p("x","y","z",1,-1,e,t,n,q,i,4),p("x","y","z",-1,-1,e,t,-n,q,i,5),this.setIndex(a),this.setAttribute("position",new Q1(l,3)),this.setAttribute("normal",new Q1(c,3)),this.setAttribute("uv",new Q1(h,2));function p(d,f,x,M,g,y,b,L,P,v,T){const D=y/P,$=b/v,W=y/2,k=b/2,N=L/2,K=P+1,q1=v+1;let e1=0,U=0;const h1=new F;for(let c1=0;c1<q1;c1++){const g1=c1*$-k;for(let Z=0;Z<K;Z++){const a1=Z*D-W;h1[d]=a1*M,h1[f]=g1*g,h1[x]=N,l.push(h1.x,h1.y,h1.z),h1[d]=0,h1[f]=0,h1[x]=L>0?1:-1,c.push(h1.x,h1.y,h1.z),h.push(Z/P),h.push(1-c1/v),e1+=1}}for(let c1=0;c1<v;c1++)for(let g1=0;g1<P;g1++){const Z=u+g1+K*c1,a1=u+g1+K*(c1+1),I=u+(g1+1)+K*(c1+1),R=u+(g1+1)+K*c1;a.push(Z,a1,R),a.push(a1,I,R),U+=6}o.addGroup(m,U,T),m+=U,u+=e1}}static fromJSON(e){return new T2(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function s4(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const q=s[t][n];q&&(q.isColor||q.isMatrix3||q.isMatrix4||q.isVector2||q.isVector3||q.isVector4||q.isTexture||q.isQuaternion)?e[t][n]=q.clone():Array.isArray(q)?e[t][n]=q.slice():e[t][n]=q}}return e}function L2(s){const e={};for(let t=0;t<s.length;t++){const n=s4(s[t]);for(const q in n)e[q]=n[q]}return e}function $9(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function k0(s){return s.getRenderTarget()===null&&s.outputEncoding===J1?a5:O4}const Q9={clone:s4,merge:L2};var en=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tn=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class M3 extends n5{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=en,this.fragmentShader=tn,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=s4(e.uniforms),this.uniformsGroups=$9(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const q in this.uniforms){const r=this.uniforms[q].value;r&&r.isTexture?t.uniforms[q]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[q]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[q]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[q]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[q]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[q]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[q]={type:"m4",value:r.toArray()}:t.uniforms[q]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const q in this.extensions)this.extensions[q]===!0&&(n[q]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class B0 extends s2{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new k1,this.projectionMatrix=new k1,this.projectionMatrixInverse=new k1}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class R2 extends B0{constructor(e=50,t=1,n=.1,q=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=q,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=F4*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(L4*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return F4*2*Math.atan(Math.tan(L4*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,q,i,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=q,this.view.width=i,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(L4*.5*this.fov)/this.zoom,n=2*t,q=this.aspect*n,i=-.5*q;const r=this.view;if(this.view!==null&&this.view.enabled){const a=r.fullWidth,l=r.fullHeight;i+=r.offsetX*q/a,t-=r.offsetY*n/l,q*=r.width/a,n*=r.height/l}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+q,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const G3=-90,V3=1;class nn extends s2{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const q=new R2(G3,V3,e,t);q.layers=this.layers,q.up.set(0,1,0),q.lookAt(1,0,0),this.add(q);const i=new R2(G3,V3,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(-1,0,0),this.add(i);const r=new R2(G3,V3,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new R2(G3,V3,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const a=new R2(G3,V3,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(0,0,1),this.add(a);const l=new R2(G3,V3,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[q,i,r,o,a,l]=this.children,c=e.getRenderTarget(),h=e.toneMapping,u=e.xr.enabled;e.toneMapping=P5,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,q),e.setRenderTarget(n,1),e.render(t,i),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,a),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(c),e.toneMapping=h,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class G0 extends y2{constructor(e,t,n,q,i,r,o,a,l,c){e=e!==void 0?e:[],t=t!==void 0?t:e4,super(e,t,n,q,i,r,o,a,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qn extends y3{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},q=[n,n,n,n,n,n];this.texture=new G0(q,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:N2}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},q=new T2(5,5,5),i=new M3({name:"CubemapFromEquirect",uniforms:s4(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:B2,blending:J5});i.uniforms.tEquirect.value=t;const r=new N1(q,i),o=t.minFilter;return t.minFilter===g3&&(t.minFilter=N2),new nn(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,q){const i=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,q);e.setRenderTarget(i)}}const Mt=new F,sn=new F,rn=new c2;class a3{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,q){return this.normal.set(e,t,n),this.constant=q,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const q=Mt.subVectors(n,t).cross(sn.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(q,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Mt),q=this.normal.dot(n);if(q===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/q;return i<0||i>1?null:t.copy(n).multiplyScalar(i).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rn.getNormalMatrix(e),q=this.coplanarPoint(Mt).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-q.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const H3=new c4,ue=new F;class r6{constructor(e=new a3,t=new a3,n=new a3,q=new a3,i=new a3,r=new a3){this.planes=[e,t,n,q,i,r]}set(e,t,n,q,i,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(q),o[4].copy(i),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,q=n[0],i=n[1],r=n[2],o=n[3],a=n[4],l=n[5],c=n[6],h=n[7],u=n[8],m=n[9],p=n[10],d=n[11],f=n[12],x=n[13],M=n[14],g=n[15];return t[0].setComponents(o-q,h-a,d-u,g-f).normalize(),t[1].setComponents(o+q,h+a,d+u,g+f).normalize(),t[2].setComponents(o+i,h+l,d+m,g+x).normalize(),t[3].setComponents(o-i,h-l,d-m,g-x).normalize(),t[4].setComponents(o-r,h-c,d-p,g-M).normalize(),t[5].setComponents(o+r,h+c,d+p,g+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),H3.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(H3)}intersectsSprite(e){return H3.center.set(0,0,0),H3.radius=.7071067811865476,H3.applyMatrix4(e.matrixWorld),this.intersectsSphere(H3)}intersectsSphere(e){const t=this.planes,n=e.center,q=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(n)<q)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const q=t[n];if(ue.x=q.normal.x>0?e.max.x:e.min.x,ue.y=q.normal.y>0?e.max.y:e.min.y,ue.z=q.normal.z>0?e.max.z:e.min.z,q.distanceToPoint(ue)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function V0(){let s=null,e=!1,t=null,n=null;function q(i,r){t(i,r),n=s.requestAnimationFrame(q)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(q),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){s=i}}}function on(s,e){const t=e.isWebGL2,n=new WeakMap;function q(l,c){const h=l.array,u=l.usage,m=s.createBuffer();s.bindBuffer(c,m),s.bufferData(c,h,u),l.onUploadCallback();let p;if(h instanceof Float32Array)p=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)p=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=5123;else if(h instanceof Int16Array)p=5122;else if(h instanceof Uint32Array)p=5125;else if(h instanceof Int32Array)p=5124;else if(h instanceof Int8Array)p=5120;else if(h instanceof Uint8Array)p=5121;else if(h instanceof Uint8ClampedArray)p=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function i(l,c,h){const u=c.array,m=c.updateRange;s.bindBuffer(h,l),m.count===-1?s.bufferSubData(h,0,u):(t?s.bufferSubData(h,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):s.bufferSubData(h,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=n.get(l);c&&(s.deleteBuffer(c.buffer),n.delete(l))}function a(l,c){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,q(l,c)):h.version<l.version&&(i(h.buffer,l,c),h.version=l.version)}return{get:r,remove:o,update:a}}class X4 extends w2{constructor(e=1,t=1,n=1,q=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:q};const i=e/2,r=t/2,o=Math.floor(n),a=Math.floor(q),l=o+1,c=a+1,h=e/o,u=t/a,m=[],p=[],d=[],f=[];for(let x=0;x<c;x++){const M=x*u-r;for(let g=0;g<l;g++){const y=g*h-i;p.push(y,-M,0),d.push(0,0,1),f.push(g/o),f.push(1-x/a)}}for(let x=0;x<a;x++)for(let M=0;M<o;M++){const g=M+l*x,y=M+l*(x+1),b=M+1+l*(x+1),L=M+1+l*x;m.push(g,y,L),m.push(y,b,L)}this.setIndex(m),this.setAttribute("position",new Q1(p,3)),this.setAttribute("normal",new Q1(d,3)),this.setAttribute("uv",new Q1(f,2))}static fromJSON(e){return new X4(e.width,e.height,e.widthSegments,e.heightSegments)}}var an=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ln=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cn=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hn=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,un=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fn=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dn="vec3 transformed = vec3( position );",mn=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pn=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,xn=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gn=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_n=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,vn=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yn=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mn=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bn=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sn=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wn=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tn=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,En=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,An=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cn=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ln=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rn=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Pn=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,In=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dn="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nn=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,On=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fn=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zn=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Un=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kn=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bn=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gn=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vn=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hn=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wn=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xn=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jn=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yn=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jn=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kn=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zn=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,$n=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qn=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eq=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tq=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nq=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,qq=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iq=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sq=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rq=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,oq=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aq=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lq=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cq=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hq=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uq=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fq=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dq=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mq=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pq=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xq=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gq=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,_q=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,vq=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,yq=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Mq=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bq=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sq=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wq=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tq=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Eq=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Aq=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Cq=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Lq=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rq=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pq=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Iq=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dq=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nq=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Oq=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fq=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zq=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uq=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,kq=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bq=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gq=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vq=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hq=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Wq=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xq=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jq=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yq=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jq=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kq=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zq=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,$q=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Qq=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ei=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ti=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ni=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,qi=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ii=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,si=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ri=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oi=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ai=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,li=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ci=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hi=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ui=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fi=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,di=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mi=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pi=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xi=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gi=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_i=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vi=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yi=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mi=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bi=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Si=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wi=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ti=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ei=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ai=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ci=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Li=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ri=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pi=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ii=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Di=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ni=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Oi=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fi=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,zi=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ui=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,z1={alphamap_fragment:an,alphamap_pars_fragment:ln,alphatest_fragment:cn,alphatest_pars_fragment:hn,aomap_fragment:un,aomap_pars_fragment:fn,begin_vertex:dn,beginnormal_vertex:mn,bsdfs:pn,iridescence_fragment:xn,bumpmap_pars_fragment:gn,clipping_planes_fragment:_n,clipping_planes_pars_fragment:vn,clipping_planes_pars_vertex:yn,clipping_planes_vertex:Mn,color_fragment:bn,color_pars_fragment:Sn,color_pars_vertex:wn,color_vertex:Tn,common:En,cube_uv_reflection_fragment:An,defaultnormal_vertex:Cn,displacementmap_pars_vertex:Ln,displacementmap_vertex:Rn,emissivemap_fragment:Pn,emissivemap_pars_fragment:In,encodings_fragment:Dn,encodings_pars_fragment:Nn,envmap_fragment:On,envmap_common_pars_fragment:Fn,envmap_pars_fragment:zn,envmap_pars_vertex:Un,envmap_physical_pars_fragment:Zn,envmap_vertex:kn,fog_vertex:Bn,fog_pars_vertex:Gn,fog_fragment:Vn,fog_pars_fragment:Hn,gradientmap_pars_fragment:Wn,lightmap_fragment:Xn,lightmap_pars_fragment:jn,lights_lambert_fragment:Yn,lights_lambert_pars_fragment:Jn,lights_pars_begin:Kn,lights_toon_fragment:$n,lights_toon_pars_fragment:Qn,lights_phong_fragment:eq,lights_phong_pars_fragment:tq,lights_physical_fragment:nq,lights_physical_pars_fragment:qq,lights_fragment_begin:iq,lights_fragment_maps:sq,lights_fragment_end:rq,logdepthbuf_fragment:oq,logdepthbuf_pars_fragment:aq,logdepthbuf_pars_vertex:lq,logdepthbuf_vertex:cq,map_fragment:hq,map_pars_fragment:uq,map_particle_fragment:fq,map_particle_pars_fragment:dq,metalnessmap_fragment:mq,metalnessmap_pars_fragment:pq,morphcolor_vertex:xq,morphnormal_vertex:gq,morphtarget_pars_vertex:_q,morphtarget_vertex:vq,normal_fragment_begin:yq,normal_fragment_maps:Mq,normal_pars_fragment:bq,normal_pars_vertex:Sq,normal_vertex:wq,normalmap_pars_fragment:Tq,clearcoat_normal_fragment_begin:Eq,clearcoat_normal_fragment_maps:Aq,clearcoat_pars_fragment:Cq,iridescence_pars_fragment:Lq,output_fragment:Rq,packing:Pq,premultiplied_alpha_fragment:Iq,project_vertex:Dq,dithering_fragment:Nq,dithering_pars_fragment:Oq,roughnessmap_fragment:Fq,roughnessmap_pars_fragment:zq,shadowmap_pars_fragment:Uq,shadowmap_pars_vertex:kq,shadowmap_vertex:Bq,shadowmask_pars_fragment:Gq,skinbase_vertex:Vq,skinning_pars_vertex:Hq,skinning_vertex:Wq,skinnormal_vertex:Xq,specularmap_fragment:jq,specularmap_pars_fragment:Yq,tonemapping_fragment:Jq,tonemapping_pars_fragment:Kq,transmission_fragment:Zq,transmission_pars_fragment:$q,uv_pars_fragment:Qq,uv_pars_vertex:ei,uv_vertex:ti,uv2_pars_fragment:ni,uv2_pars_vertex:qi,uv2_vertex:ii,worldpos_vertex:si,background_vert:ri,background_frag:oi,backgroundCube_vert:ai,backgroundCube_frag:li,cube_vert:ci,cube_frag:hi,depth_vert:ui,depth_frag:fi,distanceRGBA_vert:di,distanceRGBA_frag:mi,equirect_vert:pi,equirect_frag:xi,linedashed_vert:gi,linedashed_frag:_i,meshbasic_vert:vi,meshbasic_frag:yi,meshlambert_vert:Mi,meshlambert_frag:bi,meshmatcap_vert:Si,meshmatcap_frag:wi,meshnormal_vert:Ti,meshnormal_frag:Ei,meshphong_vert:Ai,meshphong_frag:Ci,meshphysical_vert:Li,meshphysical_frag:Ri,meshtoon_vert:Pi,meshtoon_frag:Ii,points_vert:Di,points_frag:Ni,shadow_vert:Oi,shadow_frag:Fi,sprite_vert:zi,sprite_frag:Ui},_1={common:{diffuse:{value:new F1(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new c2},uv2Transform:{value:new c2},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new l1(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new F1(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new F1(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new c2}},sprite:{diffuse:{value:new F1(16777215)},opacity:{value:1},center:{value:new l1(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new c2}}},c5={basic:{uniforms:L2([_1.common,_1.specularmap,_1.envmap,_1.aomap,_1.lightmap,_1.fog]),vertexShader:z1.meshbasic_vert,fragmentShader:z1.meshbasic_frag},lambert:{uniforms:L2([_1.common,_1.specularmap,_1.envmap,_1.aomap,_1.lightmap,_1.emissivemap,_1.bumpmap,_1.normalmap,_1.displacementmap,_1.fog,_1.lights,{emissive:{value:new F1(0)}}]),vertexShader:z1.meshlambert_vert,fragmentShader:z1.meshlambert_frag},phong:{uniforms:L2([_1.common,_1.specularmap,_1.envmap,_1.aomap,_1.lightmap,_1.emissivemap,_1.bumpmap,_1.normalmap,_1.displacementmap,_1.fog,_1.lights,{emissive:{value:new F1(0)},specular:{value:new F1(1118481)},shininess:{value:30}}]),vertexShader:z1.meshphong_vert,fragmentShader:z1.meshphong_frag},standard:{uniforms:L2([_1.common,_1.envmap,_1.aomap,_1.lightmap,_1.emissivemap,_1.bumpmap,_1.normalmap,_1.displacementmap,_1.roughnessmap,_1.metalnessmap,_1.fog,_1.lights,{emissive:{value:new F1(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:z1.meshphysical_vert,fragmentShader:z1.meshphysical_frag},toon:{uniforms:L2([_1.common,_1.aomap,_1.lightmap,_1.emissivemap,_1.bumpmap,_1.normalmap,_1.displacementmap,_1.gradientmap,_1.fog,_1.lights,{emissive:{value:new F1(0)}}]),vertexShader:z1.meshtoon_vert,fragmentShader:z1.meshtoon_frag},matcap:{uniforms:L2([_1.common,_1.bumpmap,_1.normalmap,_1.displacementmap,_1.fog,{matcap:{value:null}}]),vertexShader:z1.meshmatcap_vert,fragmentShader:z1.meshmatcap_frag},points:{uniforms:L2([_1.points,_1.fog]),vertexShader:z1.points_vert,fragmentShader:z1.points_frag},dashed:{uniforms:L2([_1.common,_1.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:z1.linedashed_vert,fragmentShader:z1.linedashed_frag},depth:{uniforms:L2([_1.common,_1.displacementmap]),vertexShader:z1.depth_vert,fragmentShader:z1.depth_frag},normal:{uniforms:L2([_1.common,_1.bumpmap,_1.normalmap,_1.displacementmap,{opacity:{value:1}}]),vertexShader:z1.meshnormal_vert,fragmentShader:z1.meshnormal_frag},sprite:{uniforms:L2([_1.sprite,_1.fog]),vertexShader:z1.sprite_vert,fragmentShader:z1.sprite_frag},background:{uniforms:{uvTransform:{value:new c2},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:z1.background_vert,fragmentShader:z1.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:z1.backgroundCube_vert,fragmentShader:z1.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:z1.cube_vert,fragmentShader:z1.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:z1.equirect_vert,fragmentShader:z1.equirect_frag},distanceRGBA:{uniforms:L2([_1.common,_1.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:z1.distanceRGBA_vert,fragmentShader:z1.distanceRGBA_frag},shadow:{uniforms:L2([_1.lights,_1.fog,{color:{value:new F1(0)},opacity:{value:1}}]),vertexShader:z1.shadow_vert,fragmentShader:z1.shadow_frag}};c5.physical={uniforms:L2([c5.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new l1(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new F1(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new l1},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new F1(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new F1(1,1,1)},specularColorMap:{value:null}}]),vertexShader:z1.meshphysical_vert,fragmentShader:z1.meshphysical_frag};const fe={r:0,b:0,g:0};function ki(s,e,t,n,q,i,r){const o=new F1(0);let a=i===!0?0:1,l,c,h=null,u=0,m=null;function p(f,x){let M=!1,g=x.isScene===!0?x.background:null;g&&g.isTexture&&(g=(x.backgroundBlurriness>0?t:e).get(g));const y=s.xr,b=y.getSession&&y.getSession();b&&b.environmentBlendMode==="additive"&&(g=null),g===null?d(o,a):g&&g.isColor&&(d(g,1),M=!0),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Oe)?(c===void 0&&(c=new N1(new T2(1,1,1),new M3({name:"BackgroundCubeMaterial",uniforms:s4(c5.backgroundCube.uniforms),vertexShader:c5.backgroundCube.vertexShader,fragmentShader:c5.backgroundCube.fragmentShader,side:B2,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,P,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),q.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=g.encoding!==J1,(h!==g||u!==g.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,h=g,u=g.version,m=s.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new N1(new X4(2,2),new M3({name:"BackgroundMaterial",uniforms:s4(c5.background.uniforms),vertexShader:c5.background.vertexShader,fragmentShader:c5.background.fragmentShader,side:D5,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),q.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=g.encoding!==J1,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||u!==g.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,h=g,u=g.version,m=s.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function d(f,x){f.getRGB(fe,k0(s)),n.buffers.color.setClear(fe.r,fe.g,fe.b,x,r)}return{getClearColor:function(){return o},setClearColor:function(f,x=1){o.set(f),a=x,d(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(f){a=f,d(o,a)},render:p}}function Bi(s,e,t,n){const q=s.getParameter(34921),i=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||i!==null,o={},a=f(null);let l=a,c=!1;function h(N,K,q1,e1,U){let h1=!1;if(r){const c1=d(e1,q1,K);l!==c1&&(l=c1,m(l.object)),h1=x(N,e1,q1,U),h1&&M(N,e1,q1,U)}else{const c1=K.wireframe===!0;(l.geometry!==e1.id||l.program!==q1.id||l.wireframe!==c1)&&(l.geometry=e1.id,l.program=q1.id,l.wireframe=c1,h1=!0)}U!==null&&t.update(U,34963),(h1||c)&&(c=!1,v(N,K,q1,e1),U!==null&&s.bindBuffer(34963,t.get(U).buffer))}function u(){return n.isWebGL2?s.createVertexArray():i.createVertexArrayOES()}function m(N){return n.isWebGL2?s.bindVertexArray(N):i.bindVertexArrayOES(N)}function p(N){return n.isWebGL2?s.deleteVertexArray(N):i.deleteVertexArrayOES(N)}function d(N,K,q1){const e1=q1.wireframe===!0;let U=o[N.id];U===void 0&&(U={},o[N.id]=U);let h1=U[K.id];h1===void 0&&(h1={},U[K.id]=h1);let c1=h1[e1];return c1===void 0&&(c1=f(u()),h1[e1]=c1),c1}function f(N){const K=[],q1=[],e1=[];for(let U=0;U<q;U++)K[U]=0,q1[U]=0,e1[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:q1,attributeDivisors:e1,object:N,attributes:{},index:null}}function x(N,K,q1,e1){const U=l.attributes,h1=K.attributes;let c1=0;const g1=q1.getAttributes();for(const Z in g1)if(g1[Z].location>=0){const I=U[Z];let R=h1[Z];if(R===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(R=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(R=N.instanceColor)),I===void 0||I.attribute!==R||R&&I.data!==R.data)return!0;c1++}return l.attributesNum!==c1||l.index!==e1}function M(N,K,q1,e1){const U={},h1=K.attributes;let c1=0;const g1=q1.getAttributes();for(const Z in g1)if(g1[Z].location>=0){let I=h1[Z];I===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(I=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(I=N.instanceColor));const R={};R.attribute=I,I&&I.data&&(R.data=I.data),U[Z]=R,c1++}l.attributes=U,l.attributesNum=c1,l.index=e1}function g(){const N=l.newAttributes;for(let K=0,q1=N.length;K<q1;K++)N[K]=0}function y(N){b(N,0)}function b(N,K){const q1=l.newAttributes,e1=l.enabledAttributes,U=l.attributeDivisors;q1[N]=1,e1[N]===0&&(s.enableVertexAttribArray(N),e1[N]=1),U[N]!==K&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,K),U[N]=K)}function L(){const N=l.newAttributes,K=l.enabledAttributes;for(let q1=0,e1=K.length;q1<e1;q1++)K[q1]!==N[q1]&&(s.disableVertexAttribArray(q1),K[q1]=0)}function P(N,K,q1,e1,U,h1){n.isWebGL2===!0&&(q1===5124||q1===5125)?s.vertexAttribIPointer(N,K,q1,U,h1):s.vertexAttribPointer(N,K,q1,e1,U,h1)}function v(N,K,q1,e1){if(n.isWebGL2===!1&&(N.isInstancedMesh||e1.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const U=e1.attributes,h1=q1.getAttributes(),c1=K.defaultAttributeValues;for(const g1 in h1){const Z=h1[g1];if(Z.location>=0){let a1=U[g1];if(a1===void 0&&(g1==="instanceMatrix"&&N.instanceMatrix&&(a1=N.instanceMatrix),g1==="instanceColor"&&N.instanceColor&&(a1=N.instanceColor)),a1!==void 0){const I=a1.normalized,R=a1.itemSize,_=t.get(a1);if(_===void 0)continue;const w=_.buffer,X=_.type,n1=_.bytesPerElement;if(a1.isInterleavedBufferAttribute){const z=a1.data,u1=z.stride,V=a1.offset;if(z.isInstancedInterleavedBuffer){for(let H=0;H<Z.locationSize;H++)b(Z.location+H,z.meshPerAttribute);N.isInstancedMesh!==!0&&e1._maxInstanceCount===void 0&&(e1._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let H=0;H<Z.locationSize;H++)y(Z.location+H);s.bindBuffer(34962,w);for(let H=0;H<Z.locationSize;H++)P(Z.location+H,R/Z.locationSize,X,I,u1*n1,(V+R/Z.locationSize*H)*n1)}else{if(a1.isInstancedBufferAttribute){for(let z=0;z<Z.locationSize;z++)b(Z.location+z,a1.meshPerAttribute);N.isInstancedMesh!==!0&&e1._maxInstanceCount===void 0&&(e1._maxInstanceCount=a1.meshPerAttribute*a1.count)}else for(let z=0;z<Z.locationSize;z++)y(Z.location+z);s.bindBuffer(34962,w);for(let z=0;z<Z.locationSize;z++)P(Z.location+z,R/Z.locationSize,X,I,R*n1,R/Z.locationSize*z*n1)}}else if(c1!==void 0){const I=c1[g1];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(Z.location,I);break;case 3:s.vertexAttrib3fv(Z.location,I);break;case 4:s.vertexAttrib4fv(Z.location,I);break;default:s.vertexAttrib1fv(Z.location,I)}}}}L()}function T(){W();for(const N in o){const K=o[N];for(const q1 in K){const e1=K[q1];for(const U in e1)p(e1[U].object),delete e1[U];delete K[q1]}delete o[N]}}function D(N){if(o[N.id]===void 0)return;const K=o[N.id];for(const q1 in K){const e1=K[q1];for(const U in e1)p(e1[U].object),delete e1[U];delete K[q1]}delete o[N.id]}function $(N){for(const K in o){const q1=o[K];if(q1[N.id]===void 0)continue;const e1=q1[N.id];for(const U in e1)p(e1[U].object),delete e1[U];delete q1[N.id]}}function W(){k(),c=!0,l!==a&&(l=a,m(l.object))}function k(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:W,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:$,initAttributes:g,enableAttribute:y,disableUnusedAttributes:L}}function Gi(s,e,t,n){const q=n.isWebGL2;let i;function r(l){i=l}function o(l,c){s.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){if(h===0)return;let u,m;if(q)u=s,m="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](i,l,c,h),t.update(c,i,h)}this.setMode=r,this.render=o,this.renderInstances=a}function Vi(s,e,t){let n;function q(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function i(P){if(P==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const a=i(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=r||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),u=s.getParameter(35660),m=s.getParameter(3379),p=s.getParameter(34076),d=s.getParameter(34921),f=s.getParameter(36347),x=s.getParameter(36348),M=s.getParameter(36349),g=u>0,y=r||e.has("OES_texture_float"),b=g&&y,L=r?s.getParameter(36183):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:q,getMaxPrecision:i,precision:o,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:L}}function Hi(s){const e=this;let t=null,n=0,q=!1,i=!1;const r=new a3,o=new c2,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||n!==0||q;return q=u,n=h.length,m},this.beginShadows=function(){i=!0,c(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,m){const p=h.clippingPlanes,d=h.clipIntersection,f=h.clipShadows,x=s.get(h);if(!q||p===null||p.length===0||i&&!f)i?c(null):l();else{const M=i?0:n,g=M*4;let y=x.clippingState||null;a.value=y,y=c(p,u,g,m);for(let b=0;b!==g;++b)y[b]=t[b];x.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=M}};function l(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,u,m,p){const d=h!==null?h.length:0;let f=null;if(d!==0){if(f=a.value,p!==!0||f===null){const x=m+d*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<x)&&(f=new Float32Array(x));for(let g=0,y=m;g!==d;++g,y+=4)r.copy(h[g]).applyMatrix4(M,o),r.normal.toArray(f,y),f[y+3]=r.constant}a.value=f,a.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,f}}function Wi(s){let e=new WeakMap;function t(r,o){return o===Ft?r.mapping=e4:o===zt&&(r.mapping=t4),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===Ft||o===zt)if(e.has(r)){const a=e.get(r).texture;return t(a,r.mapping)}else{const a=r.image;if(a&&a.height>0){const l=new qn(a.height/2);return l.fromEquirectangularTexture(s,r),e.set(r,l),r.addEventListener("dispose",q),t(l.texture,r.mapping)}else return null}}return r}function q(r){const o=r.target;o.removeEventListener("dispose",q);const a=e.get(o);a!==void 0&&(e.delete(o),a.dispose())}function i(){e=new WeakMap}return{get:n,dispose:i}}class o6 extends B0{constructor(e=-1,t=1,n=1,q=-1,i=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=q,this.near=i,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,q,i,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=q,this.view.width=i,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,q=(this.top+this.bottom)/2;let i=n-e,r=n+e,o=q+t,a=q-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=l*this.view.offsetX,r=i+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(i,r,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Y3=4,v7=[.125,.215,.35,.446,.526,.582],c3=20,bt=new o6,y7=new F1;let St=null;const l3=(1+Math.sqrt(5))/2,W3=1/l3,M7=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,l3,W3),new F(0,l3,-W3),new F(W3,0,l3),new F(-W3,0,l3),new F(l3,W3,0),new F(-l3,W3,0)];class b7{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,q=100){St=this._renderer.getRenderTarget(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,q,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T7(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=w7(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(St),e.scissorTest=!1,de(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===e4||e.mapping===t4?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),St=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:N2,minFilter:N2,generateMipmaps:!1,type:D4,format:X2,encoding:v3,depthBuffer:!1},q=S7(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=S7(e,t,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xi(i)),this._blurMaterial=ji(i,e,t)}return q}_compileMaterial(e){const t=new N1(this._lodPlanes[0],e);this._renderer.compile(t,bt)}_sceneToCubeUV(e,t,n,q){const o=new R2(90,1,t,n),a=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(y7),c.toneMapping=P5,c.autoClear=!1;const m=new f5({name:"PMREM.Background",side:B2,depthWrite:!1,depthTest:!1}),p=new N1(new T2,m);let d=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,d=!0):(m.color.copy(y7),d=!0);for(let x=0;x<6;x++){const M=x%3;M===0?(o.up.set(0,a[x],0),o.lookAt(l[x],0,0)):M===1?(o.up.set(0,0,a[x]),o.lookAt(0,l[x],0)):(o.up.set(0,a[x],0),o.lookAt(0,0,l[x]));const g=this._cubeSize;de(q,M*g,x>2?g:0,g,g),c.setRenderTarget(q),d&&c.render(p,o),c.render(e,o)}p.geometry.dispose(),p.material.dispose(),c.toneMapping=u,c.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,q=e.mapping===e4||e.mapping===t4;q?(this._cubemapMaterial===null&&(this._cubemapMaterial=T7()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=w7());const i=q?this._cubemapMaterial:this._equirectMaterial,r=new N1(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;const a=this._cubeSize;de(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(r,bt)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let q=1;q<this._lodPlanes.length;q++){const i=Math.sqrt(this._sigmas[q]*this._sigmas[q]-this._sigmas[q-1]*this._sigmas[q-1]),r=M7[(q-1)%M7.length];this._blur(e,q-1,q,i,r)}t.autoClear=n}_blur(e,t,n,q,i){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,q,"latitudinal",i),this._halfBlur(r,e,n,n,q,"longitudinal",i)}_halfBlur(e,t,n,q,i,r,o){const a=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new N1(this._lodPlanes[q],l),u=l.uniforms,m=this._sizeLods[n]-1,p=isFinite(i)?Math.PI/(2*m):2*Math.PI/(2*c3-1),d=i/p,f=isFinite(i)?1+Math.floor(c*d):c3;f>c3&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${c3}`);const x=[];let M=0;for(let P=0;P<c3;++P){const v=P/d,T=Math.exp(-v*v/2);x.push(T),P===0?M+=T:P<f&&(M+=2*T)}for(let P=0;P<x.length;P++)x[P]=x[P]/M;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=x,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:g}=this;u.dTheta.value=p,u.mipInt.value=g-n;const y=this._sizeLods[q],b=3*y*(q>g-Y3?q-g+Y3:0),L=4*(this._cubeSize-y);de(t,b,L,3*y,2*y),a.setRenderTarget(t),a.render(h,bt)}}function Xi(s){const e=[],t=[],n=[];let q=s;const i=s-Y3+1+v7.length;for(let r=0;r<i;r++){const o=Math.pow(2,q);t.push(o);let a=1/o;r>s-Y3?a=v7[r-s+Y3-1]:r===0&&(a=0),n.push(a);const l=1/(o-2),c=-l,h=1+l,u=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,p=6,d=3,f=2,x=1,M=new Float32Array(d*p*m),g=new Float32Array(f*p*m),y=new Float32Array(x*p*m);for(let L=0;L<m;L++){const P=L%3*2/3-1,v=L>2?0:-1,T=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];M.set(T,d*p*L),g.set(u,f*p*L);const D=[L,L,L,L,L,L];y.set(D,x*p*L)}const b=new w2;b.setAttribute("position",new P2(M,d)),b.setAttribute("uv",new P2(g,f)),b.setAttribute("faceIndex",new P2(y,x)),e.push(b),q>Y3&&q--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function S7(s,e,t){const n=new y3(s,e,t);return n.texture.mapping=Oe,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function de(s,e,t,n,q){s.viewport.set(e,t,n,q),s.scissor.set(e,t,n,q)}function ji(s,e,t){const n=new Float32Array(c3),q=new F(0,1,0);return new M3({name:"SphericalGaussianBlur",defines:{n:c3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:q}},vertexShader:a6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:J5,depthTest:!1,depthWrite:!1})}function w7(){return new M3({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:a6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:J5,depthTest:!1,depthWrite:!1})}function T7(){return new M3({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:a6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:J5,depthTest:!1,depthWrite:!1})}function a6(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yi(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const a=o.mapping,l=a===Ft||a===zt,c=a===e4||a===t4;if(l||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new b7(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||c&&h&&q(h)){t===null&&(t=new b7(s));const u=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",i),u.texture}else return null}}}return o}function q(o){let a=0;const l=6;for(let c=0;c<l;c++)o[c]!==void 0&&a++;return a===l}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Ji(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let q;switch(n){case"WEBGL_depth_texture":q=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":q=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":q=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":q=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:q=s.getExtension(n)}return e[n]=q,q}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const q=t(n);return q===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),q}}}function Ki(s,e,t,n){const q={},i=new WeakMap;function r(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",r),delete q[u.id];const m=i.get(u);m&&(e.remove(m),i.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return q[u.id]===!0||(u.addEventListener("dispose",r),q[u.id]=!0,t.memory.geometries++),u}function a(h){const u=h.attributes;for(const p in u)e.update(u[p],34962);const m=h.morphAttributes;for(const p in m){const d=m[p];for(let f=0,x=d.length;f<x;f++)e.update(d[f],34962)}}function l(h){const u=[],m=h.index,p=h.attributes.position;let d=0;if(m!==null){const M=m.array;d=m.version;for(let g=0,y=M.length;g<y;g+=3){const b=M[g+0],L=M[g+1],P=M[g+2];u.push(b,L,L,P,P,b)}}else{const M=p.array;d=p.version;for(let g=0,y=M.length/3-1;g<y;g+=3){const b=g+0,L=g+1,P=g+2;u.push(b,L,L,P,P,b)}}const f=new(I0(u)?U0:z0)(u,1);f.version=d;const x=i.get(h);x&&e.remove(x),i.set(h,f)}function c(h){const u=i.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&l(h)}else l(h);return i.get(h)}return{get:o,update:a,getWireframeAttribute:c}}function Zi(s,e,t,n){const q=n.isWebGL2;let i;function r(u){i=u}let o,a;function l(u){o=u.type,a=u.bytesPerElement}function c(u,m){s.drawElements(i,m,o,u*a),t.update(m,i,1)}function h(u,m,p){if(p===0)return;let d,f;if(q)d=s,f="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](i,m,o,u*a,p),t.update(m,i,p)}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=h}function $i(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,r,o){switch(t.calls++,r){case 4:t.triangles+=o*(i/3);break;case 1:t.lines+=o*(i/2);break;case 3:t.lines+=o*(i-1);break;case 2:t.lines+=o*i;break;case 0:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function q(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:q,update:n}}function Qi(s,e){return s[0]-e[0]}function es(s,e){return Math.abs(e[1])-Math.abs(s[1])}function ts(s,e,t){const n={},q=new Float32Array(8),i=new WeakMap,r=new $1,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function a(l,c,h,u){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=d!==void 0?d.length:0;let x=i.get(c);if(x===void 0||x.count!==f){let q1=function(){N.dispose(),i.delete(c),c.removeEventListener("dispose",q1)};var p=q1;x!==void 0&&x.texture.dispose();const y=c.morphAttributes.position!==void 0,b=c.morphAttributes.normal!==void 0,L=c.morphAttributes.color!==void 0,P=c.morphAttributes.position||[],v=c.morphAttributes.normal||[],T=c.morphAttributes.color||[];let D=0;y===!0&&(D=1),b===!0&&(D=2),L===!0&&(D=3);let $=c.attributes.position.count*D,W=1;$>e.maxTextureSize&&(W=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const k=new Float32Array($*W*4*f),N=new F0(k,$,W,f);N.type=j5,N.needsUpdate=!0;const K=D*4;for(let e1=0;e1<f;e1++){const U=P[e1],h1=v[e1],c1=T[e1],g1=$*W*4*e1;for(let Z=0;Z<U.count;Z++){const a1=Z*K;y===!0&&(r.fromBufferAttribute(U,Z),k[g1+a1+0]=r.x,k[g1+a1+1]=r.y,k[g1+a1+2]=r.z,k[g1+a1+3]=0),b===!0&&(r.fromBufferAttribute(h1,Z),k[g1+a1+4]=r.x,k[g1+a1+5]=r.y,k[g1+a1+6]=r.z,k[g1+a1+7]=0),L===!0&&(r.fromBufferAttribute(c1,Z),k[g1+a1+8]=r.x,k[g1+a1+9]=r.y,k[g1+a1+10]=r.z,k[g1+a1+11]=c1.itemSize===4?r.w:1)}}x={count:f,texture:N,size:new l1($,W)},i.set(c,x),c.addEventListener("dispose",q1)}let M=0;for(let y=0;y<m.length;y++)M+=m[y];const g=c.morphTargetsRelative?1:1-M;u.getUniforms().setValue(s,"morphTargetBaseInfluence",g),u.getUniforms().setValue(s,"morphTargetInfluences",m),u.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const d=m===void 0?0:m.length;let f=n[c.id];if(f===void 0||f.length!==d){f=[];for(let b=0;b<d;b++)f[b]=[b,0];n[c.id]=f}for(let b=0;b<d;b++){const L=f[b];L[0]=b,L[1]=m[b]}f.sort(es);for(let b=0;b<8;b++)b<d&&f[b][1]?(o[b][0]=f[b][0],o[b][1]=f[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(Qi);const x=c.morphAttributes.position,M=c.morphAttributes.normal;let g=0;for(let b=0;b<8;b++){const L=o[b],P=L[0],v=L[1];P!==Number.MAX_SAFE_INTEGER&&v?(x&&c.getAttribute("morphTarget"+b)!==x[P]&&c.setAttribute("morphTarget"+b,x[P]),M&&c.getAttribute("morphNormal"+b)!==M[P]&&c.setAttribute("morphNormal"+b,M[P]),q[b]=v,g+=v):(x&&c.hasAttribute("morphTarget"+b)===!0&&c.deleteAttribute("morphTarget"+b),M&&c.hasAttribute("morphNormal"+b)===!0&&c.deleteAttribute("morphNormal"+b),q[b]=0)}const y=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",q)}}return{update:a}}function ns(s,e,t,n){let q=new WeakMap;function i(a){const l=n.render.frame,c=a.geometry,h=e.get(a,c);return q.get(h)!==l&&(e.update(h),q.set(h,l)),a.isInstancedMesh&&(a.hasEventListener("dispose",o)===!1&&a.addEventListener("dispose",o),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),h}function r(){q=new WeakMap}function o(a){const l=a.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:i,dispose:r}}const H0=new y2,W0=new F0,X0=new B9,j0=new G0,E7=[],A7=[],C7=new Float32Array(16),L7=new Float32Array(9),R7=new Float32Array(4);function h4(s,e,t){const n=s[0];if(n<=0||n>0)return s;const q=e*t;let i=E7[q];if(i===void 0&&(i=new Float32Array(q),E7[q]=i),e!==0){n.toArray(i,0);for(let r=1,o=0;r!==e;++r)o+=t,s[r].toArray(i,o)}return i}function u2(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function f2(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ue(s,e){let t=A7[e];t===void 0&&(t=new Int32Array(e),A7[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function qs(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function is(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(u2(t,e))return;s.uniform2fv(this.addr,e),f2(t,e)}}function ss(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(u2(t,e))return;s.uniform3fv(this.addr,e),f2(t,e)}}function rs(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(u2(t,e))return;s.uniform4fv(this.addr,e),f2(t,e)}}function os(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(u2(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),f2(t,e)}else{if(u2(t,n))return;R7.set(n),s.uniformMatrix2fv(this.addr,!1,R7),f2(t,n)}}function as(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(u2(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),f2(t,e)}else{if(u2(t,n))return;L7.set(n),s.uniformMatrix3fv(this.addr,!1,L7),f2(t,n)}}function ls(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(u2(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),f2(t,e)}else{if(u2(t,n))return;C7.set(n),s.uniformMatrix4fv(this.addr,!1,C7),f2(t,n)}}function cs(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function hs(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(u2(t,e))return;s.uniform2iv(this.addr,e),f2(t,e)}}function us(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(u2(t,e))return;s.uniform3iv(this.addr,e),f2(t,e)}}function fs(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(u2(t,e))return;s.uniform4iv(this.addr,e),f2(t,e)}}function ds(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ms(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(u2(t,e))return;s.uniform2uiv(this.addr,e),f2(t,e)}}function ps(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(u2(t,e))return;s.uniform3uiv(this.addr,e),f2(t,e)}}function xs(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(u2(t,e))return;s.uniform4uiv(this.addr,e),f2(t,e)}}function gs(s,e,t){const n=this.cache,q=t.allocateTextureUnit();n[0]!==q&&(s.uniform1i(this.addr,q),n[0]=q),t.setTexture2D(e||H0,q)}function _s(s,e,t){const n=this.cache,q=t.allocateTextureUnit();n[0]!==q&&(s.uniform1i(this.addr,q),n[0]=q),t.setTexture3D(e||X0,q)}function vs(s,e,t){const n=this.cache,q=t.allocateTextureUnit();n[0]!==q&&(s.uniform1i(this.addr,q),n[0]=q),t.setTextureCube(e||j0,q)}function ys(s,e,t){const n=this.cache,q=t.allocateTextureUnit();n[0]!==q&&(s.uniform1i(this.addr,q),n[0]=q),t.setTexture2DArray(e||W0,q)}function Ms(s){switch(s){case 5126:return qs;case 35664:return is;case 35665:return ss;case 35666:return rs;case 35674:return os;case 35675:return as;case 35676:return ls;case 5124:case 35670:return cs;case 35667:case 35671:return hs;case 35668:case 35672:return us;case 35669:case 35673:return fs;case 5125:return ds;case 36294:return ms;case 36295:return ps;case 36296:return xs;case 35678:case 36198:case 36298:case 36306:case 35682:return gs;case 35679:case 36299:case 36307:return _s;case 35680:case 36300:case 36308:case 36293:return vs;case 36289:case 36303:case 36311:case 36292:return ys}}function bs(s,e){s.uniform1fv(this.addr,e)}function Ss(s,e){const t=h4(e,this.size,2);s.uniform2fv(this.addr,t)}function ws(s,e){const t=h4(e,this.size,3);s.uniform3fv(this.addr,t)}function Ts(s,e){const t=h4(e,this.size,4);s.uniform4fv(this.addr,t)}function Es(s,e){const t=h4(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function As(s,e){const t=h4(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Cs(s,e){const t=h4(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ls(s,e){s.uniform1iv(this.addr,e)}function Rs(s,e){s.uniform2iv(this.addr,e)}function Ps(s,e){s.uniform3iv(this.addr,e)}function Is(s,e){s.uniform4iv(this.addr,e)}function Ds(s,e){s.uniform1uiv(this.addr,e)}function Ns(s,e){s.uniform2uiv(this.addr,e)}function Os(s,e){s.uniform3uiv(this.addr,e)}function Fs(s,e){s.uniform4uiv(this.addr,e)}function zs(s,e,t){const n=this.cache,q=e.length,i=Ue(t,q);u2(n,i)||(s.uniform1iv(this.addr,i),f2(n,i));for(let r=0;r!==q;++r)t.setTexture2D(e[r]||H0,i[r])}function Us(s,e,t){const n=this.cache,q=e.length,i=Ue(t,q);u2(n,i)||(s.uniform1iv(this.addr,i),f2(n,i));for(let r=0;r!==q;++r)t.setTexture3D(e[r]||X0,i[r])}function ks(s,e,t){const n=this.cache,q=e.length,i=Ue(t,q);u2(n,i)||(s.uniform1iv(this.addr,i),f2(n,i));for(let r=0;r!==q;++r)t.setTextureCube(e[r]||j0,i[r])}function Bs(s,e,t){const n=this.cache,q=e.length,i=Ue(t,q);u2(n,i)||(s.uniform1iv(this.addr,i),f2(n,i));for(let r=0;r!==q;++r)t.setTexture2DArray(e[r]||W0,i[r])}function Gs(s){switch(s){case 5126:return bs;case 35664:return Ss;case 35665:return ws;case 35666:return Ts;case 35674:return Es;case 35675:return As;case 35676:return Cs;case 5124:case 35670:return Ls;case 35667:case 35671:return Rs;case 35668:case 35672:return Ps;case 35669:case 35673:return Is;case 5125:return Ds;case 36294:return Ns;case 36295:return Os;case 36296:return Fs;case 35678:case 36198:case 36298:case 36306:case 35682:return zs;case 35679:case 36299:case 36307:return Us;case 35680:case 36300:case 36308:case 36293:return ks;case 36289:case 36303:case 36311:case 36292:return Bs}}class Vs{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Ms(t.type)}}class Hs{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Gs(t.type)}}class Ws{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const q=this.seq;for(let i=0,r=q.length;i!==r;++i){const o=q[i];o.setValue(e,t[o.id],n)}}}const wt=/(\w+)(\])?(\[|\.)?/g;function P7(s,e){s.seq.push(e),s.map[e.id]=e}function Xs(s,e,t){const n=s.name,q=n.length;for(wt.lastIndex=0;;){const i=wt.exec(n),r=wt.lastIndex;let o=i[1];const a=i[2]==="]",l=i[3];if(a&&(o=o|0),l===void 0||l==="["&&r+2===q){P7(t,l===void 0?new Vs(o,s,e):new Hs(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Ws(o),P7(t,h)),t=h}}}class Re{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let q=0;q<n;++q){const i=e.getActiveUniform(t,q),r=e.getUniformLocation(t,i.name);Xs(i,r,this)}}setValue(e,t,n,q){const i=this.map[t];i!==void 0&&i.setValue(e,n,q)}setOptional(e,t,n){const q=t[n];q!==void 0&&this.setValue(e,n,q)}static upload(e,t,n,q){for(let i=0,r=t.length;i!==r;++i){const o=t[i],a=n[o.id];a.needsUpdate!==!1&&o.setValue(e,a.value,q)}}static seqWithValue(e,t){const n=[];for(let q=0,i=e.length;q!==i;++q){const r=e[q];r.id in t&&n.push(r)}return n}}function I7(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let js=0;function Ys(s,e){const t=s.split(`
`),n=[],q=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let r=q;r<i;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function Js(s){switch(s){case v3:return["Linear","( value )"];case J1:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function D7(s,e,t){const n=s.getShaderParameter(e,35713),q=s.getShaderInfoLog(e).trim();if(n&&q==="")return"";const i=/ERROR: 0:(\d+)/.exec(q);if(i){const r=parseInt(i[1]);return t.toUpperCase()+`

`+q+`

`+Ys(s.getShaderSource(e),r)}else return q}function Ks(s,e){const t=Js(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Zs(s,e){let t;switch(e){case e9:t="Linear";break;case t9:t="Reinhard";break;case n9:t="OptimizedCineon";break;case q9:t="ACESFilmic";break;case i9:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $s(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(E4).join(`
`)}function Qs(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function er(s,e){const t={},n=s.getProgramParameter(e,35721);for(let q=0;q<n;q++){const i=s.getActiveAttrib(e,q),r=i.name;let o=1;i.type===35674&&(o=2),i.type===35675&&(o=3),i.type===35676&&(o=4),t[r]={type:i.type,location:s.getAttribLocation(e,r),locationSize:o}}return t}function E4(s){return s!==""}function N7(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function O7(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tr=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ht(s){return s.replace(tr,nr)}function nr(s,e){const t=z1[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ht(t)}const qr=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F7(s){return s.replace(qr,ir)}function ir(s,e,t,n){let q="";for(let i=parseInt(e);i<parseInt(t);i++)q+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return q}function z7(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sr(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===w0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===P8?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===T4&&(e="SHADOWMAP_TYPE_VSM"),e}function rr(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case e4:case t4:e="ENVMAP_TYPE_CUBE";break;case Oe:e="ENVMAP_TYPE_CUBE_UV";break}return e}function or(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case t4:e="ENVMAP_MODE_REFRACTION";break}return e}function ar(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case n6:e="ENVMAP_BLENDING_MULTIPLY";break;case $8:e="ENVMAP_BLENDING_MIX";break;case Q8:e="ENVMAP_BLENDING_ADD";break}return e}function lr(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function cr(s,e,t,n){const q=s.getContext(),i=t.defines;let r=t.vertexShader,o=t.fragmentShader;const a=sr(t),l=rr(t),c=or(t),h=ar(t),u=lr(t),m=t.isWebGL2?"":$s(t),p=Qs(i),d=q.createProgram();let f,x,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[p].filter(E4).join(`
`),f.length>0&&(f+=`
`),x=[m,p].filter(E4).join(`
`),x.length>0&&(x+=`
`)):(f=[z7(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(E4).join(`
`),x=[m,z7(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==P5?"#define TONE_MAPPING":"",t.toneMapping!==P5?z1.tonemapping_pars_fragment:"",t.toneMapping!==P5?Zs("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",z1.encodings_pars_fragment,Ks("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(E4).join(`
`)),r=Ht(r),r=N7(r,t),r=O7(r,t),o=Ht(o),o=N7(o,t),o=O7(o,t),r=F7(r),o=F7(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["#define varying in",t.glslVersion===a7?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===a7?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const g=M+f+r,y=M+x+o,b=I7(q,35633,g),L=I7(q,35632,y);if(q.attachShader(d,b),q.attachShader(d,L),t.index0AttributeName!==void 0?q.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&q.bindAttribLocation(d,0,"position"),q.linkProgram(d),s.debug.checkShaderErrors){const T=q.getProgramInfoLog(d).trim(),D=q.getShaderInfoLog(b).trim(),$=q.getShaderInfoLog(L).trim();let W=!0,k=!0;if(q.getProgramParameter(d,35714)===!1){W=!1;const N=D7(q,b,"vertex"),K=D7(q,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+q.getError()+" - VALIDATE_STATUS "+q.getProgramParameter(d,35715)+`

Program Info Log: `+T+`
`+N+`
`+K)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(D===""||$==="")&&(k=!1);k&&(this.diagnostics={runnable:W,programLog:T,vertexShader:{log:D,prefix:f},fragmentShader:{log:$,prefix:x}})}q.deleteShader(b),q.deleteShader(L);let P;this.getUniforms=function(){return P===void 0&&(P=new Re(q,d)),P};let v;return this.getAttributes=function(){return v===void 0&&(v=er(q,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),q.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=js++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=b,this.fragmentShader=L,this}let hr=0;class ur{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,q=this._getShaderStage(t),i=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(q)===!1&&(r.add(q),q.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fr(e),t.set(e,n)),n}}class fr{constructor(e){this.id=hr++,this.code=e,this.usedTimes=0}}function dr(s,e,t,n,q,i,r){const o=new s6,a=new ur,l=[],c=q.isWebGL2,h=q.logarithmicDepthBuffer,u=q.vertexTextures;let m=q.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,T,D,$,W){const k=$.fog,N=W.geometry,K=v.isMeshStandardMaterial?$.environment:null,q1=(v.isMeshStandardMaterial?t:e).get(v.envMap||K),e1=!!q1&&q1.mapping===Oe?q1.image.height:null,U=p[v.type];v.precision!==null&&(m=q.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const h1=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,c1=h1!==void 0?h1.length:0;let g1=0;N.morphAttributes.position!==void 0&&(g1=1),N.morphAttributes.normal!==void 0&&(g1=2),N.morphAttributes.color!==void 0&&(g1=3);let Z,a1,I,R;if(U){const u1=c5[U];Z=u1.vertexShader,a1=u1.fragmentShader}else Z=v.vertexShader,a1=v.fragmentShader,a.update(v),I=a.getVertexShaderID(v),R=a.getFragmentShaderID(v);const _=s.getRenderTarget(),w=v.alphaTest>0,X=v.clearcoat>0,n1=v.iridescence>0;return{isWebGL2:c,shaderID:U,shaderName:v.type,vertexShader:Z,fragmentShader:a1,defines:v.defines,customVertexShaderID:I,customFragmentShaderID:R,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:u,outputEncoding:_===null?s.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:v3,map:!!v.map,matcap:!!v.matcap,envMap:!!q1,envMapMode:q1&&q1.mapping,envMapCubeUVHeight:e1,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===S9,tangentSpaceNormalMap:v.normalMapType===q6,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===J1,clearcoat:X,clearcoatMap:X&&!!v.clearcoatMap,clearcoatRoughnessMap:X&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:X&&!!v.clearcoatNormalMap,iridescence:n1,iridescenceMap:n1&&!!v.iridescenceMap,iridescenceThicknessMap:n1&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===K3,alphaMap:!!v.alphaMap,alphaTest:w,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!N.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!k,useFog:v.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:W.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:c1,morphTextureStride:g1,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:P5,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===u5,flipSided:v.side===B2,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)T.push(D),T.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(x(T,v),M(T,v),T.push(s.outputEncoding)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputEncoding),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.combine),v.push(T.vertexUvs),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.map&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.lightMap&&o.enable(7),T.aoMap&&o.enable(8),T.emissiveMap&&o.enable(9),T.bumpMap&&o.enable(10),T.normalMap&&o.enable(11),T.objectSpaceNormalMap&&o.enable(12),T.tangentSpaceNormalMap&&o.enable(13),T.clearcoat&&o.enable(14),T.clearcoatMap&&o.enable(15),T.clearcoatRoughnessMap&&o.enable(16),T.clearcoatNormalMap&&o.enable(17),T.iridescence&&o.enable(18),T.iridescenceMap&&o.enable(19),T.iridescenceThicknessMap&&o.enable(20),T.displacementMap&&o.enable(21),T.specularMap&&o.enable(22),T.roughnessMap&&o.enable(23),T.metalnessMap&&o.enable(24),T.gradientMap&&o.enable(25),T.alphaMap&&o.enable(26),T.alphaTest&&o.enable(27),T.vertexColors&&o.enable(28),T.vertexAlphas&&o.enable(29),T.vertexUvs&&o.enable(30),T.vertexTangents&&o.enable(31),T.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.physicallyCorrectLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.specularIntensityMap&&o.enable(15),T.specularColorMap&&o.enable(16),T.transmission&&o.enable(17),T.transmissionMap&&o.enable(18),T.thicknessMap&&o.enable(19),T.sheen&&o.enable(20),T.sheenColorMap&&o.enable(21),T.sheenRoughnessMap&&o.enable(22),T.decodeVideoTexture&&o.enable(23),T.opaque&&o.enable(24),v.push(o.mask)}function g(v){const T=p[v.type];let D;if(T){const $=c5[T];D=Q9.clone($.uniforms)}else D=v.uniforms;return D}function y(v,T){let D;for(let $=0,W=l.length;$<W;$++){const k=l[$];if(k.cacheKey===T){D=k,++D.usedTimes;break}}return D===void 0&&(D=new cr(s,T,v,i),l.push(D)),D}function b(v){if(--v.usedTimes===0){const T=l.indexOf(v);l[T]=l[l.length-1],l.pop(),v.destroy()}}function L(v){a.remove(v)}function P(){a.dispose()}return{getParameters:d,getProgramCacheKey:f,getUniforms:g,acquireProgram:y,releaseProgram:b,releaseShaderCache:L,programs:l,dispose:P}}function mr(){let s=new WeakMap;function e(i){let r=s.get(i);return r===void 0&&(r={},s.set(i,r)),r}function t(i){s.delete(i)}function n(i,r,o){s.get(i)[r]=o}function q(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:q}}function pr(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function U7(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function k7(){const s=[];let e=0;const t=[],n=[],q=[];function i(){e=0,t.length=0,n.length=0,q.length=0}function r(h,u,m,p,d,f){let x=s[e];return x===void 0?(x={id:h.id,object:h,geometry:u,material:m,groupOrder:p,renderOrder:h.renderOrder,z:d,group:f},s[e]=x):(x.id=h.id,x.object=h,x.geometry=u,x.material=m,x.groupOrder=p,x.renderOrder=h.renderOrder,x.z=d,x.group=f),e++,x}function o(h,u,m,p,d,f){const x=r(h,u,m,p,d,f);m.transmission>0?n.push(x):m.transparent===!0?q.push(x):t.push(x)}function a(h,u,m,p,d,f){const x=r(h,u,m,p,d,f);m.transmission>0?n.unshift(x):m.transparent===!0?q.unshift(x):t.unshift(x)}function l(h,u){t.length>1&&t.sort(h||pr),n.length>1&&n.sort(u||U7),q.length>1&&q.sort(u||U7)}function c(){for(let h=e,u=s.length;h<u;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:q,init:i,push:o,unshift:a,finish:c,sort:l}}function xr(){let s=new WeakMap;function e(n,q){const i=s.get(n);let r;return i===void 0?(r=new k7,s.set(n,[r])):q>=i.length?(r=new k7,i.push(r)):r=i[q],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function gr(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new F1};break;case"SpotLight":t={position:new F,direction:new F,color:new F1,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new F1,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new F1,groundColor:new F1};break;case"RectAreaLight":t={color:new F1,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function _r(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new l1};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new l1};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new l1,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let vr=0;function yr(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Mr(s,e){const t=new gr,n=_r(),q={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)q.probe.push(new F);const i=new F,r=new k1,o=new k1;function a(c,h){let u=0,m=0,p=0;for(let $=0;$<9;$++)q.probe[$].set(0,0,0);let d=0,f=0,x=0,M=0,g=0,y=0,b=0,L=0,P=0,v=0;c.sort(yr);const T=h!==!0?Math.PI:1;for(let $=0,W=c.length;$<W;$++){const k=c[$],N=k.color,K=k.intensity,q1=k.distance,e1=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)u+=N.r*K*T,m+=N.g*K*T,p+=N.b*K*T;else if(k.isLightProbe)for(let U=0;U<9;U++)q.probe[U].addScaledVector(k.sh.coefficients[U],K);else if(k.isDirectionalLight){const U=t.get(k);if(U.color.copy(k.color).multiplyScalar(k.intensity*T),k.castShadow){const h1=k.shadow,c1=n.get(k);c1.shadowBias=h1.bias,c1.shadowNormalBias=h1.normalBias,c1.shadowRadius=h1.radius,c1.shadowMapSize=h1.mapSize,q.directionalShadow[d]=c1,q.directionalShadowMap[d]=e1,q.directionalShadowMatrix[d]=k.shadow.matrix,y++}q.directional[d]=U,d++}else if(k.isSpotLight){const U=t.get(k);U.position.setFromMatrixPosition(k.matrixWorld),U.color.copy(N).multiplyScalar(K*T),U.distance=q1,U.coneCos=Math.cos(k.angle),U.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),U.decay=k.decay,q.spot[x]=U;const h1=k.shadow;if(k.map&&(q.spotLightMap[P]=k.map,P++,h1.updateMatrices(k),k.castShadow&&v++),q.spotLightMatrix[x]=h1.matrix,k.castShadow){const c1=n.get(k);c1.shadowBias=h1.bias,c1.shadowNormalBias=h1.normalBias,c1.shadowRadius=h1.radius,c1.shadowMapSize=h1.mapSize,q.spotShadow[x]=c1,q.spotShadowMap[x]=e1,L++}x++}else if(k.isRectAreaLight){const U=t.get(k);U.color.copy(N).multiplyScalar(K),U.halfWidth.set(k.width*.5,0,0),U.halfHeight.set(0,k.height*.5,0),q.rectArea[M]=U,M++}else if(k.isPointLight){const U=t.get(k);if(U.color.copy(k.color).multiplyScalar(k.intensity*T),U.distance=k.distance,U.decay=k.decay,k.castShadow){const h1=k.shadow,c1=n.get(k);c1.shadowBias=h1.bias,c1.shadowNormalBias=h1.normalBias,c1.shadowRadius=h1.radius,c1.shadowMapSize=h1.mapSize,c1.shadowCameraNear=h1.camera.near,c1.shadowCameraFar=h1.camera.far,q.pointShadow[f]=c1,q.pointShadowMap[f]=e1,q.pointShadowMatrix[f]=k.shadow.matrix,b++}q.point[f]=U,f++}else if(k.isHemisphereLight){const U=t.get(k);U.skyColor.copy(k.color).multiplyScalar(K*T),U.groundColor.copy(k.groundColor).multiplyScalar(K*T),q.hemi[g]=U,g++}}M>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(q.rectAreaLTC1=_1.LTC_FLOAT_1,q.rectAreaLTC2=_1.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(q.rectAreaLTC1=_1.LTC_HALF_1,q.rectAreaLTC2=_1.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),q.ambient[0]=u,q.ambient[1]=m,q.ambient[2]=p;const D=q.hash;(D.directionalLength!==d||D.pointLength!==f||D.spotLength!==x||D.rectAreaLength!==M||D.hemiLength!==g||D.numDirectionalShadows!==y||D.numPointShadows!==b||D.numSpotShadows!==L||D.numSpotMaps!==P)&&(q.directional.length=d,q.spot.length=x,q.rectArea.length=M,q.point.length=f,q.hemi.length=g,q.directionalShadow.length=y,q.directionalShadowMap.length=y,q.pointShadow.length=b,q.pointShadowMap.length=b,q.spotShadow.length=L,q.spotShadowMap.length=L,q.directionalShadowMatrix.length=y,q.pointShadowMatrix.length=b,q.spotLightMatrix.length=L+P-v,q.spotLightMap.length=P,q.numSpotLightShadowsWithMaps=v,D.directionalLength=d,D.pointLength=f,D.spotLength=x,D.rectAreaLength=M,D.hemiLength=g,D.numDirectionalShadows=y,D.numPointShadows=b,D.numSpotShadows=L,D.numSpotMaps=P,q.version=vr++)}function l(c,h){let u=0,m=0,p=0,d=0,f=0;const x=h.matrixWorldInverse;for(let M=0,g=c.length;M<g;M++){const y=c[M];if(y.isDirectionalLight){const b=q.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(x),u++}else if(y.isSpotLight){const b=q.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(x),p++}else if(y.isRectAreaLight){const b=q.rectArea[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(x),o.identity(),r.copy(y.matrixWorld),r.premultiply(x),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),d++}else if(y.isPointLight){const b=q.point[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(x),m++}else if(y.isHemisphereLight){const b=q.hemi[f];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(x),f++}}}return{setup:a,setupView:l,state:q}}function B7(s,e){const t=new Mr(s,e),n=[],q=[];function i(){n.length=0,q.length=0}function r(h){n.push(h)}function o(h){q.push(h)}function a(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:i,state:{lightsArray:n,shadowsArray:q,lights:t},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function br(s,e){let t=new WeakMap;function n(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new B7(s,e),t.set(i,[a])):r>=o.length?(a=new B7(s,e),o.push(a)):a=o[r],a}function q(){t=new WeakMap}return{get:n,dispose:q}}class Sr extends n5{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M9,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wr extends n5{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tr=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Er=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ar(s,e,t){let n=new r6;const q=new l1,i=new l1,r=new $1,o=new Sr({depthPacking:b9}),a=new wr,l={},c=t.maxTextureSize,h={[D5]:B2,[B2]:D5,[u5]:u5},u=new M3({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new l1},radius:{value:4}},vertexShader:Tr,fragmentShader:Er}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const p=new w2;p.setAttribute("position",new P2(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new N1(p,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=w0,this.render=function(y,b,L){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;const P=s.getRenderTarget(),v=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),D=s.state;D.setBlending(J5),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let $=0,W=y.length;$<W;$++){const k=y[$],N=k.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;q.copy(N.mapSize);const K=N.getFrameExtents();if(q.multiply(K),i.copy(N.mapSize),(q.x>c||q.y>c)&&(q.x>c&&(i.x=Math.floor(c/K.x),q.x=i.x*K.x,N.mapSize.x=i.x),q.y>c&&(i.y=Math.floor(c/K.y),q.y=i.y*K.y,N.mapSize.y=i.y)),N.map===null){const e1=this.type!==T4?{minFilter:g2,magFilter:g2}:{};N.map=new y3(q.x,q.y,e1),N.map.texture.name=k.name+".shadowMap",N.camera.updateProjectionMatrix()}s.setRenderTarget(N.map),s.clear();const q1=N.getViewportCount();for(let e1=0;e1<q1;e1++){const U=N.getViewport(e1);r.set(i.x*U.x,i.y*U.y,i.x*U.z,i.y*U.w),D.viewport(r),N.updateMatrices(k,e1),n=N.getFrustum(),g(b,L,N.camera,k,this.type)}N.isPointLightShadow!==!0&&this.type===T4&&x(N,L),N.needsUpdate=!1}f.needsUpdate=!1,s.setRenderTarget(P,v,T)};function x(y,b){const L=e.update(d);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new y3(q.x,q.y)),u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(b,null,L,u,d,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(b,null,L,m,d,null)}function M(y,b,L,P,v,T){let D=null;const $=L.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if($!==void 0)D=$;else if(D=L.isPointLight===!0?a:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const W=D.uuid,k=b.uuid;let N=l[W];N===void 0&&(N={},l[W]=N);let K=N[k];K===void 0&&(K=D.clone(),N[k]=K),D=K}return D.visible=b.visible,D.wireframe=b.wireframe,T===T4?D.side=b.shadowSide!==null?b.shadowSide:b.side:D.side=b.shadowSide!==null?b.shadowSide:h[b.side],D.alphaMap=b.alphaMap,D.alphaTest=b.alphaTest,D.map=b.map,D.clipShadows=b.clipShadows,D.clippingPlanes=b.clippingPlanes,D.clipIntersection=b.clipIntersection,D.displacementMap=b.displacementMap,D.displacementScale=b.displacementScale,D.displacementBias=b.displacementBias,D.wireframeLinewidth=b.wireframeLinewidth,D.linewidth=b.linewidth,L.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(L.matrixWorld),D.nearDistance=P,D.farDistance=v),D}function g(y,b,L,P,v){if(y.visible===!1)return;if(y.layers.test(b.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===T4)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,y.matrixWorld);const $=e.update(y),W=y.material;if(Array.isArray(W)){const k=$.groups;for(let N=0,K=k.length;N<K;N++){const q1=k[N],e1=W[q1.materialIndex];if(e1&&e1.visible){const U=M(y,e1,P,L.near,L.far,v);s.renderBufferDirect(L,null,$,U,y,q1)}}}else if(W.visible){const k=M(y,W,P,L.near,L.far,v);s.renderBufferDirect(L,null,$,k,y,null)}}const D=y.children;for(let $=0,W=D.length;$<W;$++)g(D[$],b,L,P,v)}}function Cr(s,e,t){const n=t.isWebGL2;function q(){let B=!1;const i1=new $1;let m1=null;const b1=new $1(0,0,0,0);return{setMask:function(E1){m1!==E1&&!B&&(s.colorMask(E1,E1,E1,E1),m1=E1)},setLocked:function(E1){B=E1},setClear:function(E1,Y1,m2,M2,t3){t3===!0&&(E1*=M2,Y1*=M2,m2*=M2),i1.set(E1,Y1,m2,M2),b1.equals(i1)===!1&&(s.clearColor(E1,Y1,m2,M2),b1.copy(i1))},reset:function(){B=!1,m1=null,b1.set(-1,0,0,0)}}}function i(){let B=!1,i1=null,m1=null,b1=null;return{setTest:function(E1){E1?w(2929):X(2929)},setMask:function(E1){i1!==E1&&!B&&(s.depthMask(E1),i1=E1)},setFunc:function(E1){if(m1!==E1){switch(E1){case W8:s.depthFunc(512);break;case X8:s.depthFunc(519);break;case j8:s.depthFunc(513);break;case Ot:s.depthFunc(515);break;case Y8:s.depthFunc(514);break;case J8:s.depthFunc(518);break;case K8:s.depthFunc(516);break;case Z8:s.depthFunc(517);break;default:s.depthFunc(515)}m1=E1}},setLocked:function(E1){B=E1},setClear:function(E1){b1!==E1&&(s.clearDepth(E1),b1=E1)},reset:function(){B=!1,i1=null,m1=null,b1=null}}}function r(){let B=!1,i1=null,m1=null,b1=null,E1=null,Y1=null,m2=null,M2=null,t3=null;return{setTest:function(n2){B||(n2?w(2960):X(2960))},setMask:function(n2){i1!==n2&&!B&&(s.stencilMask(n2),i1=n2)},setFunc:function(n2,g5,G2){(m1!==n2||b1!==g5||E1!==G2)&&(s.stencilFunc(n2,g5,G2),m1=n2,b1=g5,E1=G2)},setOp:function(n2,g5,G2){(Y1!==n2||m2!==g5||M2!==G2)&&(s.stencilOp(n2,g5,G2),Y1=n2,m2=g5,M2=G2)},setLocked:function(n2){B=n2},setClear:function(n2){t3!==n2&&(s.clearStencil(n2),t3=n2)},reset:function(){B=!1,i1=null,m1=null,b1=null,E1=null,Y1=null,m2=null,M2=null,t3=null}}}const o=new q,a=new i,l=new r,c=new WeakMap,h=new WeakMap;let u={},m={},p=new WeakMap,d=[],f=null,x=!1,M=null,g=null,y=null,b=null,L=null,P=null,v=null,T=!1,D=null,$=null,W=null,k=null,N=null;const K=s.getParameter(35661);let q1=!1,e1=0;const U=s.getParameter(7938);U.indexOf("WebGL")!==-1?(e1=parseFloat(/^WebGL (\d)/.exec(U)[1]),q1=e1>=1):U.indexOf("OpenGL ES")!==-1&&(e1=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),q1=e1>=2);let h1=null,c1={};const g1=s.getParameter(3088),Z=s.getParameter(2978),a1=new $1().fromArray(g1),I=new $1().fromArray(Z);function R(B,i1,m1){const b1=new Uint8Array(4),E1=s.createTexture();s.bindTexture(B,E1),s.texParameteri(B,10241,9728),s.texParameteri(B,10240,9728);for(let Y1=0;Y1<m1;Y1++)s.texImage2D(i1+Y1,0,6408,1,1,0,6408,5121,b1);return E1}const _={};_[3553]=R(3553,3553,1),_[34067]=R(34067,34069,6),o.setClear(0,0,0,1),a.setClear(1),l.setClear(0),w(2929),a.setFunc(Ot),t1(!1),f1(L6),w(2884),G(J5);function w(B){u[B]!==!0&&(s.enable(B),u[B]=!0)}function X(B){u[B]!==!1&&(s.disable(B),u[B]=!1)}function n1(B,i1){return m[B]!==i1?(s.bindFramebuffer(B,i1),m[B]=i1,n&&(B===36009&&(m[36160]=i1),B===36160&&(m[36009]=i1)),!0):!1}function z(B,i1){let m1=d,b1=!1;if(B)if(m1=p.get(i1),m1===void 0&&(m1=[],p.set(i1,m1)),B.isWebGLMultipleRenderTargets){const E1=B.texture;if(m1.length!==E1.length||m1[0]!==36064){for(let Y1=0,m2=E1.length;Y1<m2;Y1++)m1[Y1]=36064+Y1;m1.length=E1.length,b1=!0}}else m1[0]!==36064&&(m1[0]=36064,b1=!0);else m1[0]!==1029&&(m1[0]=1029,b1=!0);b1&&(t.isWebGL2?s.drawBuffers(m1):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(m1))}function u1(B){return f!==B?(s.useProgram(B),f=B,!0):!1}const V={[j3]:32774,[D8]:32778,[N8]:32779};if(n)V[D6]=32775,V[N6]=32776;else{const B=e.get("EXT_blend_minmax");B!==null&&(V[D6]=B.MIN_EXT,V[N6]=B.MAX_EXT)}const H={[O8]:0,[F8]:1,[z8]:768,[T0]:770,[H8]:776,[G8]:774,[k8]:772,[U8]:769,[E0]:771,[V8]:775,[B8]:773};function G(B,i1,m1,b1,E1,Y1,m2,M2){if(B===J5){x===!0&&(X(3042),x=!1);return}if(x===!1&&(w(3042),x=!0),B!==I8){if(B!==M||M2!==T){if((g!==j3||L!==j3)&&(s.blendEquation(32774),g=j3,L=j3),M2)switch(B){case K3:s.blendFuncSeparate(1,771,1,771);break;case R6:s.blendFunc(1,1);break;case P6:s.blendFuncSeparate(0,769,0,1);break;case I6:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case K3:s.blendFuncSeparate(770,771,1,771);break;case R6:s.blendFunc(770,1);break;case P6:s.blendFuncSeparate(0,769,0,1);break;case I6:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,b=null,P=null,v=null,M=B,T=M2}return}E1=E1||i1,Y1=Y1||m1,m2=m2||b1,(i1!==g||E1!==L)&&(s.blendEquationSeparate(V[i1],V[E1]),g=i1,L=E1),(m1!==y||b1!==b||Y1!==P||m2!==v)&&(s.blendFuncSeparate(H[m1],H[b1],H[Y1],H[m2]),y=m1,b=b1,P=Y1,v=m2),M=B,T=!1}function Q(B,i1){B.side===u5?X(2884):w(2884);let m1=B.side===B2;i1&&(m1=!m1),t1(m1),B.blending===K3&&B.transparent===!1?G(J5):G(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),o.setMask(B.colorWrite);const b1=B.stencilWrite;l.setTest(b1),b1&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),A(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?w(32926):X(32926)}function t1(B){D!==B&&(B?s.frontFace(2304):s.frontFace(2305),D=B)}function f1(B){B!==L8?(w(2884),B!==$&&(B===L6?s.cullFace(1029):B===R8?s.cullFace(1028):s.cullFace(1032))):X(2884),$=B}function O(B){B!==W&&(q1&&s.lineWidth(B),W=B)}function A(B,i1,m1){B?(w(32823),(k!==i1||N!==m1)&&(s.polygonOffset(i1,m1),k=i1,N=m1)):X(32823)}function x1(B){B?w(3089):X(3089)}function S1(B){B===void 0&&(B=33984+K-1),h1!==B&&(s.activeTexture(B),h1=B)}function C(B,i1,m1){m1===void 0&&(h1===null?m1=33984+K-1:m1=h1);let b1=c1[m1];b1===void 0&&(b1={type:void 0,texture:void 0},c1[m1]=b1),(b1.type!==B||b1.texture!==i1)&&(h1!==m1&&(s.activeTexture(m1),h1=m1),s.bindTexture(B,i1||_[B]),b1.type=B,b1.texture=i1)}function S(){const B=c1[h1];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function d1(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function p1(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function v1(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function P1(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function y1(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function r1(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function T1(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function I1(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function w1(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function C1(B){a1.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),a1.copy(B))}function A1(B){I.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),I.copy(B))}function X1(B,i1){let m1=h.get(i1);m1===void 0&&(m1=new WeakMap,h.set(i1,m1));let b1=m1.get(B);b1===void 0&&(b1=s.getUniformBlockIndex(i1,B.name),m1.set(B,b1))}function t2(B,i1){const b1=h.get(i1).get(B);c.get(i1)!==b1&&(s.uniformBlockBinding(i1,b1,B.__bindingPointIndex),c.set(i1,b1))}function d2(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},h1=null,c1={},m={},p=new WeakMap,d=[],f=null,x=!1,M=null,g=null,y=null,b=null,L=null,P=null,v=null,T=!1,D=null,$=null,W=null,k=null,N=null,a1.set(0,0,s.canvas.width,s.canvas.height),I.set(0,0,s.canvas.width,s.canvas.height),o.reset(),a.reset(),l.reset()}return{buffers:{color:o,depth:a,stencil:l},enable:w,disable:X,bindFramebuffer:n1,drawBuffers:z,useProgram:u1,setBlending:G,setMaterial:Q,setFlipSided:t1,setCullFace:f1,setLineWidth:O,setPolygonOffset:A,setScissorTest:x1,activeTexture:S1,bindTexture:C,unbindTexture:S,compressedTexImage2D:Y,compressedTexImage3D:d1,texImage2D:I1,texImage3D:w1,updateUBOMapping:X1,uniformBlockBinding:t2,texStorage2D:r1,texStorage3D:T1,texSubImage2D:p1,texSubImage3D:v1,compressedTexSubImage2D:P1,compressedTexSubImage3D:y1,scissor:C1,viewport:A1,reset:d2}}function Lr(s,e,t,n,q,i,r){const o=q.isWebGL2,a=q.maxTextures,l=q.maxCubemapSize,c=q.maxTextureSize,h=q.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let d;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,S){return x?new OffscreenCanvas(C,S):z4("canvas")}function g(C,S,Y,d1){let p1=1;if((C.width>d1||C.height>d1)&&(p1=d1/Math.max(C.width,C.height)),p1<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const v1=S?Ie:Math.floor,P1=v1(p1*C.width),y1=v1(p1*C.height);d===void 0&&(d=M(P1,y1));const r1=Y?M(P1,y1):d;return r1.width=P1,r1.height=y1,r1.getContext("2d").drawImage(C,0,0,P1,y1),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+P1+"x"+y1+")."),r1}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return Vt(C.width)&&Vt(C.height)}function b(C){return o?!1:C.wrapS!==W2||C.wrapT!==W2||C.minFilter!==g2&&C.minFilter!==N2}function L(C,S){return C.generateMipmaps&&S&&C.minFilter!==g2&&C.minFilter!==N2}function P(C){s.generateMipmap(C)}function v(C,S,Y,d1,p1=!1){if(o===!1)return S;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let v1=S;return S===6403&&(Y===5126&&(v1=33326),Y===5131&&(v1=33325),Y===5121&&(v1=33321)),S===33319&&(Y===5126&&(v1=33328),Y===5131&&(v1=33327),Y===5121&&(v1=33323)),S===6408&&(Y===5126&&(v1=34836),Y===5131&&(v1=34842),Y===5121&&(v1=d1===J1&&p1===!1?35907:32856),Y===32819&&(v1=32854),Y===32820&&(v1=32855)),(v1===33325||v1===33326||v1===33327||v1===33328||v1===34842||v1===34836)&&e.get("EXT_color_buffer_float"),v1}function T(C,S,Y){return L(C,Y)===!0||C.isFramebufferTexture&&C.minFilter!==g2&&C.minFilter!==N2?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function D(C){return C===g2||C===Ut||C===Ce?9728:9729}function $(C){const S=C.target;S.removeEventListener("dispose",$),k(S),S.isVideoTexture&&p.delete(S)}function W(C){const S=C.target;S.removeEventListener("dispose",W),K(S)}function k(C){const S=n.get(C);if(S.__webglInit===void 0)return;const Y=C.source,d1=f.get(Y);if(d1){const p1=d1[S.__cacheKey];p1.usedTimes--,p1.usedTimes===0&&N(C),Object.keys(d1).length===0&&f.delete(Y)}n.remove(C)}function N(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const Y=C.source,d1=f.get(Y);delete d1[S.__cacheKey],r.memory.textures--}function K(C){const S=C.texture,Y=n.get(C),d1=n.get(S);if(d1.__webglTexture!==void 0&&(s.deleteTexture(d1.__webglTexture),r.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let p1=0;p1<6;p1++)s.deleteFramebuffer(Y.__webglFramebuffer[p1]),Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer[p1]);else{if(s.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let p1=0;p1<Y.__webglColorRenderbuffer.length;p1++)Y.__webglColorRenderbuffer[p1]&&s.deleteRenderbuffer(Y.__webglColorRenderbuffer[p1]);Y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let p1=0,v1=S.length;p1<v1;p1++){const P1=n.get(S[p1]);P1.__webglTexture&&(s.deleteTexture(P1.__webglTexture),r.memory.textures--),n.remove(S[p1])}n.remove(S),n.remove(C)}let q1=0;function e1(){q1=0}function U(){const C=q1;return C>=a&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a),q1+=1,C}function h1(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.encoding),S.join()}function c1(C,S){const Y=n.get(C);if(C.isVideoTexture&&x1(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const d1=C.image;if(d1===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(d1.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(Y,C,S);return}}t.bindTexture(3553,Y.__webglTexture,33984+S)}function g1(C,S){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){X(Y,C,S);return}t.bindTexture(35866,Y.__webglTexture,33984+S)}function Z(C,S){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){X(Y,C,S);return}t.bindTexture(32879,Y.__webglTexture,33984+S)}function a1(C,S){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){n1(Y,C,S);return}t.bindTexture(34067,Y.__webglTexture,33984+S)}const I={[n4]:10497,[W2]:33071,[Pe]:33648},R={[g2]:9728,[Ut]:9984,[Ce]:9986,[N2]:9729,[C0]:9985,[g3]:9987};function _(C,S,Y){if(Y?(s.texParameteri(C,10242,I[S.wrapS]),s.texParameteri(C,10243,I[S.wrapT]),(C===32879||C===35866)&&s.texParameteri(C,32882,I[S.wrapR]),s.texParameteri(C,10240,R[S.magFilter]),s.texParameteri(C,10241,R[S.minFilter])):(s.texParameteri(C,10242,33071),s.texParameteri(C,10243,33071),(C===32879||C===35866)&&s.texParameteri(C,32882,33071),(S.wrapS!==W2||S.wrapT!==W2)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,10240,D(S.magFilter)),s.texParameteri(C,10241,D(S.minFilter)),S.minFilter!==g2&&S.minFilter!==N2&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const d1=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===g2||S.minFilter!==Ce&&S.minFilter!==g3||S.type===j5&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===D4&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(C,d1.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,q.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function w(C,S){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",$));const d1=S.source;let p1=f.get(d1);p1===void 0&&(p1={},f.set(d1,p1));const v1=h1(S);if(v1!==C.__cacheKey){p1[v1]===void 0&&(p1[v1]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,Y=!0),p1[v1].usedTimes++;const P1=p1[C.__cacheKey];P1!==void 0&&(p1[C.__cacheKey].usedTimes--,P1.usedTimes===0&&N(S)),C.__cacheKey=v1,C.__webglTexture=p1[v1].texture}return Y}function X(C,S,Y){let d1=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(d1=35866),S.isData3DTexture&&(d1=32879);const p1=w(C,S),v1=S.source;t.bindTexture(d1,C.__webglTexture,33984+Y);const P1=n.get(v1);if(v1.version!==P1.__version||p1===!0){t.activeTexture(33984+Y),s.pixelStorei(37440,S.flipY),s.pixelStorei(37441,S.premultiplyAlpha),s.pixelStorei(3317,S.unpackAlignment),s.pixelStorei(37443,0);const y1=b(S)&&y(S.image)===!1;let r1=g(S.image,y1,!1,c);r1=S1(S,r1);const T1=y(r1)||o,I1=i.convert(S.format,S.encoding);let w1=i.convert(S.type),C1=v(S.internalFormat,I1,w1,S.encoding,S.isVideoTexture);_(d1,S,T1);let A1;const X1=S.mipmaps,t2=o&&S.isVideoTexture!==!0,d2=P1.__version===void 0||p1===!0,B=T(S,r1,T1);if(S.isDepthTexture)C1=6402,o?S.type===j5?C1=36012:S.type===h3?C1=33190:S.type===Z3?C1=35056:C1=33189:S.type===j5&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===d3&&C1===6402&&S.type!==L0&&S.type!==h3&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=h3,w1=i.convert(S.type)),S.format===q4&&C1===6402&&(C1=34041,S.type!==Z3&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Z3,w1=i.convert(S.type))),d2&&(t2?t.texStorage2D(3553,1,C1,r1.width,r1.height):t.texImage2D(3553,0,C1,r1.width,r1.height,0,I1,w1,null));else if(S.isDataTexture)if(X1.length>0&&T1){t2&&d2&&t.texStorage2D(3553,B,C1,X1[0].width,X1[0].height);for(let i1=0,m1=X1.length;i1<m1;i1++)A1=X1[i1],t2?t.texSubImage2D(3553,i1,0,0,A1.width,A1.height,I1,w1,A1.data):t.texImage2D(3553,i1,C1,A1.width,A1.height,0,I1,w1,A1.data);S.generateMipmaps=!1}else t2?(d2&&t.texStorage2D(3553,B,C1,r1.width,r1.height),t.texSubImage2D(3553,0,0,0,r1.width,r1.height,I1,w1,r1.data)):t.texImage2D(3553,0,C1,r1.width,r1.height,0,I1,w1,r1.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){t2&&d2&&t.texStorage3D(35866,B,C1,X1[0].width,X1[0].height,r1.depth);for(let i1=0,m1=X1.length;i1<m1;i1++)A1=X1[i1],S.format!==X2?I1!==null?t2?t.compressedTexSubImage3D(35866,i1,0,0,0,A1.width,A1.height,r1.depth,I1,A1.data,0,0):t.compressedTexImage3D(35866,i1,C1,A1.width,A1.height,r1.depth,0,A1.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t2?t.texSubImage3D(35866,i1,0,0,0,A1.width,A1.height,r1.depth,I1,w1,A1.data):t.texImage3D(35866,i1,C1,A1.width,A1.height,r1.depth,0,I1,w1,A1.data)}else{t2&&d2&&t.texStorage2D(3553,B,C1,X1[0].width,X1[0].height);for(let i1=0,m1=X1.length;i1<m1;i1++)A1=X1[i1],S.format!==X2?I1!==null?t2?t.compressedTexSubImage2D(3553,i1,0,0,A1.width,A1.height,I1,A1.data):t.compressedTexImage2D(3553,i1,C1,A1.width,A1.height,0,A1.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t2?t.texSubImage2D(3553,i1,0,0,A1.width,A1.height,I1,w1,A1.data):t.texImage2D(3553,i1,C1,A1.width,A1.height,0,I1,w1,A1.data)}else if(S.isDataArrayTexture)t2?(d2&&t.texStorage3D(35866,B,C1,r1.width,r1.height,r1.depth),t.texSubImage3D(35866,0,0,0,0,r1.width,r1.height,r1.depth,I1,w1,r1.data)):t.texImage3D(35866,0,C1,r1.width,r1.height,r1.depth,0,I1,w1,r1.data);else if(S.isData3DTexture)t2?(d2&&t.texStorage3D(32879,B,C1,r1.width,r1.height,r1.depth),t.texSubImage3D(32879,0,0,0,0,r1.width,r1.height,r1.depth,I1,w1,r1.data)):t.texImage3D(32879,0,C1,r1.width,r1.height,r1.depth,0,I1,w1,r1.data);else if(S.isFramebufferTexture){if(d2)if(t2)t.texStorage2D(3553,B,C1,r1.width,r1.height);else{let i1=r1.width,m1=r1.height;for(let b1=0;b1<B;b1++)t.texImage2D(3553,b1,C1,i1,m1,0,I1,w1,null),i1>>=1,m1>>=1}}else if(X1.length>0&&T1){t2&&d2&&t.texStorage2D(3553,B,C1,X1[0].width,X1[0].height);for(let i1=0,m1=X1.length;i1<m1;i1++)A1=X1[i1],t2?t.texSubImage2D(3553,i1,0,0,I1,w1,A1):t.texImage2D(3553,i1,C1,I1,w1,A1);S.generateMipmaps=!1}else t2?(d2&&t.texStorage2D(3553,B,C1,r1.width,r1.height),t.texSubImage2D(3553,0,0,0,I1,w1,r1)):t.texImage2D(3553,0,C1,I1,w1,r1);L(S,T1)&&P(d1),P1.__version=v1.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function n1(C,S,Y){if(S.image.length!==6)return;const d1=w(C,S),p1=S.source;t.bindTexture(34067,C.__webglTexture,33984+Y);const v1=n.get(p1);if(p1.version!==v1.__version||d1===!0){t.activeTexture(33984+Y),s.pixelStorei(37440,S.flipY),s.pixelStorei(37441,S.premultiplyAlpha),s.pixelStorei(3317,S.unpackAlignment),s.pixelStorei(37443,0);const P1=S.isCompressedTexture||S.image[0].isCompressedTexture,y1=S.image[0]&&S.image[0].isDataTexture,r1=[];for(let i1=0;i1<6;i1++)!P1&&!y1?r1[i1]=g(S.image[i1],!1,!0,l):r1[i1]=y1?S.image[i1].image:S.image[i1],r1[i1]=S1(S,r1[i1]);const T1=r1[0],I1=y(T1)||o,w1=i.convert(S.format,S.encoding),C1=i.convert(S.type),A1=v(S.internalFormat,w1,C1,S.encoding),X1=o&&S.isVideoTexture!==!0,t2=v1.__version===void 0||d1===!0;let d2=T(S,T1,I1);_(34067,S,I1);let B;if(P1){X1&&t2&&t.texStorage2D(34067,d2,A1,T1.width,T1.height);for(let i1=0;i1<6;i1++){B=r1[i1].mipmaps;for(let m1=0;m1<B.length;m1++){const b1=B[m1];S.format!==X2?w1!==null?X1?t.compressedTexSubImage2D(34069+i1,m1,0,0,b1.width,b1.height,w1,b1.data):t.compressedTexImage2D(34069+i1,m1,A1,b1.width,b1.height,0,b1.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X1?t.texSubImage2D(34069+i1,m1,0,0,b1.width,b1.height,w1,C1,b1.data):t.texImage2D(34069+i1,m1,A1,b1.width,b1.height,0,w1,C1,b1.data)}}}else{B=S.mipmaps,X1&&t2&&(B.length>0&&d2++,t.texStorage2D(34067,d2,A1,r1[0].width,r1[0].height));for(let i1=0;i1<6;i1++)if(y1){X1?t.texSubImage2D(34069+i1,0,0,0,r1[i1].width,r1[i1].height,w1,C1,r1[i1].data):t.texImage2D(34069+i1,0,A1,r1[i1].width,r1[i1].height,0,w1,C1,r1[i1].data);for(let m1=0;m1<B.length;m1++){const E1=B[m1].image[i1].image;X1?t.texSubImage2D(34069+i1,m1+1,0,0,E1.width,E1.height,w1,C1,E1.data):t.texImage2D(34069+i1,m1+1,A1,E1.width,E1.height,0,w1,C1,E1.data)}}else{X1?t.texSubImage2D(34069+i1,0,0,0,w1,C1,r1[i1]):t.texImage2D(34069+i1,0,A1,w1,C1,r1[i1]);for(let m1=0;m1<B.length;m1++){const b1=B[m1];X1?t.texSubImage2D(34069+i1,m1+1,0,0,w1,C1,b1.image[i1]):t.texImage2D(34069+i1,m1+1,A1,w1,C1,b1.image[i1])}}}L(S,I1)&&P(34067),v1.__version=p1.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function z(C,S,Y,d1,p1){const v1=i.convert(Y.format,Y.encoding),P1=i.convert(Y.type),y1=v(Y.internalFormat,v1,P1,Y.encoding);n.get(S).__hasExternalTextures||(p1===32879||p1===35866?t.texImage3D(p1,0,y1,S.width,S.height,S.depth,0,v1,P1,null):t.texImage2D(p1,0,y1,S.width,S.height,0,v1,P1,null)),t.bindFramebuffer(36160,C),A(S)?u.framebufferTexture2DMultisampleEXT(36160,d1,p1,n.get(Y).__webglTexture,0,O(S)):(p1===3553||p1>=34069&&p1<=34074)&&s.framebufferTexture2D(36160,d1,p1,n.get(Y).__webglTexture,0),t.bindFramebuffer(36160,null)}function u1(C,S,Y){if(s.bindRenderbuffer(36161,C),S.depthBuffer&&!S.stencilBuffer){let d1=33189;if(Y||A(S)){const p1=S.depthTexture;p1&&p1.isDepthTexture&&(p1.type===j5?d1=36012:p1.type===h3&&(d1=33190));const v1=O(S);A(S)?u.renderbufferStorageMultisampleEXT(36161,v1,d1,S.width,S.height):s.renderbufferStorageMultisample(36161,v1,d1,S.width,S.height)}else s.renderbufferStorage(36161,d1,S.width,S.height);s.framebufferRenderbuffer(36160,36096,36161,C)}else if(S.depthBuffer&&S.stencilBuffer){const d1=O(S);Y&&A(S)===!1?s.renderbufferStorageMultisample(36161,d1,35056,S.width,S.height):A(S)?u.renderbufferStorageMultisampleEXT(36161,d1,35056,S.width,S.height):s.renderbufferStorage(36161,34041,S.width,S.height),s.framebufferRenderbuffer(36160,33306,36161,C)}else{const d1=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let p1=0;p1<d1.length;p1++){const v1=d1[p1],P1=i.convert(v1.format,v1.encoding),y1=i.convert(v1.type),r1=v(v1.internalFormat,P1,y1,v1.encoding),T1=O(S);Y&&A(S)===!1?s.renderbufferStorageMultisample(36161,T1,r1,S.width,S.height):A(S)?u.renderbufferStorageMultisampleEXT(36161,T1,r1,S.width,S.height):s.renderbufferStorage(36161,r1,S.width,S.height)}}s.bindRenderbuffer(36161,null)}function V(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),c1(S.depthTexture,0);const d1=n.get(S.depthTexture).__webglTexture,p1=O(S);if(S.depthTexture.format===d3)A(S)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,d1,0,p1):s.framebufferTexture2D(36160,36096,3553,d1,0);else if(S.depthTexture.format===q4)A(S)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,d1,0,p1):s.framebufferTexture2D(36160,33306,3553,d1,0);else throw new Error("Unknown depthTexture format")}function H(C){const S=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");V(S.__webglFramebuffer,C)}else if(Y){S.__webglDepthbuffer=[];for(let d1=0;d1<6;d1++)t.bindFramebuffer(36160,S.__webglFramebuffer[d1]),S.__webglDepthbuffer[d1]=s.createRenderbuffer(),u1(S.__webglDepthbuffer[d1],C,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),u1(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function G(C,S,Y){const d1=n.get(C);S!==void 0&&z(d1.__webglFramebuffer,C,C.texture,36064,3553),Y!==void 0&&H(C)}function Q(C){const S=C.texture,Y=n.get(C),d1=n.get(S);C.addEventListener("dispose",W),C.isWebGLMultipleRenderTargets!==!0&&(d1.__webglTexture===void 0&&(d1.__webglTexture=s.createTexture()),d1.__version=S.version,r.memory.textures++);const p1=C.isWebGLCubeRenderTarget===!0,v1=C.isWebGLMultipleRenderTargets===!0,P1=y(C)||o;if(p1){Y.__webglFramebuffer=[];for(let y1=0;y1<6;y1++)Y.__webglFramebuffer[y1]=s.createFramebuffer()}else{if(Y.__webglFramebuffer=s.createFramebuffer(),v1)if(q.drawBuffers){const y1=C.texture;for(let r1=0,T1=y1.length;r1<T1;r1++){const I1=n.get(y1[r1]);I1.__webglTexture===void 0&&(I1.__webglTexture=s.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&A(C)===!1){const y1=v1?S:[S];Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer);for(let r1=0;r1<y1.length;r1++){const T1=y1[r1];Y.__webglColorRenderbuffer[r1]=s.createRenderbuffer(),s.bindRenderbuffer(36161,Y.__webglColorRenderbuffer[r1]);const I1=i.convert(T1.format,T1.encoding),w1=i.convert(T1.type),C1=v(T1.internalFormat,I1,w1,T1.encoding,C.isXRRenderTarget===!0),A1=O(C);s.renderbufferStorageMultisample(36161,A1,C1,C.width,C.height),s.framebufferRenderbuffer(36160,36064+r1,36161,Y.__webglColorRenderbuffer[r1])}s.bindRenderbuffer(36161,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),u1(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(p1){t.bindTexture(34067,d1.__webglTexture),_(34067,S,P1);for(let y1=0;y1<6;y1++)z(Y.__webglFramebuffer[y1],C,S,36064,34069+y1);L(S,P1)&&P(34067),t.unbindTexture()}else if(v1){const y1=C.texture;for(let r1=0,T1=y1.length;r1<T1;r1++){const I1=y1[r1],w1=n.get(I1);t.bindTexture(3553,w1.__webglTexture),_(3553,I1,P1),z(Y.__webglFramebuffer,C,I1,36064+r1,3553),L(I1,P1)&&P(3553)}t.unbindTexture()}else{let y1=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?y1=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(y1,d1.__webglTexture),_(y1,S,P1),z(Y.__webglFramebuffer,C,S,36064,y1),L(S,P1)&&P(y1),t.unbindTexture()}C.depthBuffer&&H(C)}function t1(C){const S=y(C)||o,Y=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let d1=0,p1=Y.length;d1<p1;d1++){const v1=Y[d1];if(L(v1,S)){const P1=C.isWebGLCubeRenderTarget?34067:3553,y1=n.get(v1).__webglTexture;t.bindTexture(P1,y1),P(P1),t.unbindTexture()}}}function f1(C){if(o&&C.samples>0&&A(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Y=C.width,d1=C.height;let p1=16384;const v1=[],P1=C.stencilBuffer?33306:36096,y1=n.get(C),r1=C.isWebGLMultipleRenderTargets===!0;if(r1)for(let T1=0;T1<S.length;T1++)t.bindFramebuffer(36160,y1.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+T1,36161,null),t.bindFramebuffer(36160,y1.__webglFramebuffer),s.framebufferTexture2D(36009,36064+T1,3553,null,0);t.bindFramebuffer(36008,y1.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,y1.__webglFramebuffer);for(let T1=0;T1<S.length;T1++){v1.push(36064+T1),C.depthBuffer&&v1.push(P1);const I1=y1.__ignoreDepthValues!==void 0?y1.__ignoreDepthValues:!1;if(I1===!1&&(C.depthBuffer&&(p1|=256),C.stencilBuffer&&(p1|=1024)),r1&&s.framebufferRenderbuffer(36008,36064,36161,y1.__webglColorRenderbuffer[T1]),I1===!0&&(s.invalidateFramebuffer(36008,[P1]),s.invalidateFramebuffer(36009,[P1])),r1){const w1=n.get(S[T1]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,w1,0)}s.blitFramebuffer(0,0,Y,d1,0,0,Y,d1,p1,9728),m&&s.invalidateFramebuffer(36008,v1)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),r1)for(let T1=0;T1<S.length;T1++){t.bindFramebuffer(36160,y1.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+T1,36161,y1.__webglColorRenderbuffer[T1]);const I1=n.get(S[T1]).__webglTexture;t.bindFramebuffer(36160,y1.__webglFramebuffer),s.framebufferTexture2D(36009,36064+T1,3553,I1,0)}t.bindFramebuffer(36009,y1.__webglMultisampledFramebuffer)}}function O(C){return Math.min(h,C.samples)}function A(C){const S=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function x1(C){const S=r.render.frame;p.get(C)!==S&&(p.set(C,S),C.update())}function S1(C,S){const Y=C.encoding,d1=C.format,p1=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Gt||Y!==v3&&(Y===J1?o===!1?e.has("EXT_sRGB")===!0&&d1===X2?(C.format=Gt,C.minFilter=N2,C.generateMipmaps=!1):S=N0.sRGBToLinear(S):(d1!==X2||p1!==_3)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Y)),S}this.allocateTextureUnit=U,this.resetTextureUnits=e1,this.setTexture2D=c1,this.setTexture2DArray=g1,this.setTexture3D=Z,this.setTextureCube=a1,this.rebindTextures=G,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=t1,this.updateMultisampleRenderTarget=f1,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=z,this.useMultisampledRTT=A}function Rr(s,e,t){const n=t.isWebGL2;function q(i,r=null){let o;if(i===_3)return 5121;if(i===a9)return 32819;if(i===l9)return 32820;if(i===s9)return 5120;if(i===r9)return 5122;if(i===L0)return 5123;if(i===o9)return 5124;if(i===h3)return 5125;if(i===j5)return 5126;if(i===D4)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(i===c9)return 6406;if(i===X2)return 6408;if(i===h9)return 6409;if(i===u9)return 6410;if(i===d3)return 6402;if(i===q4)return 34041;if(i===Gt)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(i===f9)return 6403;if(i===d9)return 36244;if(i===m9)return 33319;if(i===p9)return 33320;if(i===x9)return 36249;if(i===Ke||i===Ze||i===$e||i===Qe)if(r===J1)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ke)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ze)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$e)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qe)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ke)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ze)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$e)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qe)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===O6||i===F6||i===z6||i===U6)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===O6)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===F6)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===z6)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===U6)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===g9)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===k6||i===B6)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===k6)return r===J1?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===B6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===G6||i===V6||i===H6||i===W6||i===X6||i===j6||i===Y6||i===J6||i===K6||i===Z6||i===$6||i===Q6||i===e7||i===t7)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===G6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===V6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===H6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===W6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===X6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===j6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Y6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===J6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===K6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Z6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Q6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===e7)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===t7)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===et)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===et)return r===J1?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(i===_9||i===n7||i===q7||i===i7)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===et)return o.COMPRESSED_RED_RGTC1_EXT;if(i===n7)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===q7)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===i7)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Z3?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[i]!==void 0?s[i]:null}return{convert:q}}class Pr extends R2{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class O2 extends s2{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ir={type:"move"};class Tt{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new O2,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new O2,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new O2,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let q=null,i=null,r=null;const o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const d of e.hand.values()){const f=t.getJointPose(d,n),x=this._getHandJoint(l,d);f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=f.radius),x.visible=f!==null}const c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=c.position.distanceTo(h.position),m=.02,p=.005;l.inputState.pinching&&u>m+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1));o!==null&&(q=t.getPose(e.targetRaySpace,n),q===null&&i!==null&&(q=i),q!==null&&(o.matrix.fromArray(q.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),q.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(q.linearVelocity)):o.hasLinearVelocity=!1,q.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(q.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ir)))}return o!==null&&(o.visible=q!==null),a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new O2;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Dr extends y2{constructor(e,t,n,q,i,r,o,a,l,c){if(c=c!==void 0?c:d3,c!==d3&&c!==q4)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===d3&&(n=h3),n===void 0&&c===q4&&(n=Z3),super(null,q,i,r,o,a,c,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:g2,this.minFilter=a!==void 0?a:g2,this.flipY=!1,this.generateMipmaps=!1}}class Nr extends a4{constructor(e,t){super();const n=this;let q=null,i=1,r=null,o="local-floor",a=1,l=null,c=null,h=null,u=null,m=null,p=null;const d=t.getContextAttributes();let f=null,x=null;const M=[],g=[],y=new Set,b=new Map,L=new R2;L.layers.enable(1),L.viewport=new $1;const P=new R2;P.layers.enable(2),P.viewport=new $1;const v=[L,P],T=new Pr;T.layers.enable(1),T.layers.enable(2);let D=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let a1=M[Z];return a1===void 0&&(a1=new Tt,M[Z]=a1),a1.getTargetRaySpace()},this.getControllerGrip=function(Z){let a1=M[Z];return a1===void 0&&(a1=new Tt,M[Z]=a1),a1.getGripSpace()},this.getHand=function(Z){let a1=M[Z];return a1===void 0&&(a1=new Tt,M[Z]=a1),a1.getHandSpace()};function W(Z){const a1=g.indexOf(Z.inputSource);if(a1===-1)return;const I=M[a1];I!==void 0&&I.dispatchEvent({type:Z.type,data:Z.inputSource})}function k(){q.removeEventListener("select",W),q.removeEventListener("selectstart",W),q.removeEventListener("selectend",W),q.removeEventListener("squeeze",W),q.removeEventListener("squeezestart",W),q.removeEventListener("squeezeend",W),q.removeEventListener("end",k),q.removeEventListener("inputsourceschange",N);for(let Z=0;Z<M.length;Z++){const a1=g[Z];a1!==null&&(g[Z]=null,M[Z].disconnect(a1))}D=null,$=null,e.setRenderTarget(f),m=null,u=null,h=null,q=null,x=null,g1.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){i=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return q},this.setSession=async function(Z){if(q=Z,q!==null){if(f=e.getRenderTarget(),q.addEventListener("select",W),q.addEventListener("selectstart",W),q.addEventListener("selectend",W),q.addEventListener("squeeze",W),q.addEventListener("squeezestart",W),q.addEventListener("squeezeend",W),q.addEventListener("end",k),q.addEventListener("inputsourceschange",N),d.xrCompatible!==!0&&await t.makeXRCompatible(),q.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const a1={antialias:q.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:i};m=new XRWebGLLayer(q,t,a1),q.updateRenderState({baseLayer:m}),x=new y3(m.framebufferWidth,m.framebufferHeight,{format:X2,type:_3,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let a1=null,I=null,R=null;d.depth&&(R=d.stencil?35056:33190,a1=d.stencil?q4:d3,I=d.stencil?Z3:h3);const _={colorFormat:32856,depthFormat:R,scaleFactor:i};h=new XRWebGLBinding(q,t),u=h.createProjectionLayer(_),q.updateRenderState({layers:[u]}),x=new y3(u.textureWidth,u.textureHeight,{format:X2,type:_3,depthTexture:new Dr(u.textureWidth,u.textureHeight,I,void 0,void 0,void 0,void 0,void 0,void 0,a1),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const w=e.properties.get(x);w.__ignoreDepthValues=u.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(a),l=null,r=await q.requestReferenceSpace(o),g1.setContext(q),g1.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(Z){for(let a1=0;a1<Z.removed.length;a1++){const I=Z.removed[a1],R=g.indexOf(I);R>=0&&(g[R]=null,M[R].disconnect(I))}for(let a1=0;a1<Z.added.length;a1++){const I=Z.added[a1];let R=g.indexOf(I);if(R===-1){for(let w=0;w<M.length;w++)if(w>=g.length){g.push(I),R=w;break}else if(g[w]===null){g[w]=I,R=w;break}if(R===-1)break}const _=M[R];_&&_.connect(I)}}const K=new F,q1=new F;function e1(Z,a1,I){K.setFromMatrixPosition(a1.matrixWorld),q1.setFromMatrixPosition(I.matrixWorld);const R=K.distanceTo(q1),_=a1.projectionMatrix.elements,w=I.projectionMatrix.elements,X=_[14]/(_[10]-1),n1=_[14]/(_[10]+1),z=(_[9]+1)/_[5],u1=(_[9]-1)/_[5],V=(_[8]-1)/_[0],H=(w[8]+1)/w[0],G=X*V,Q=X*H,t1=R/(-V+H),f1=t1*-V;a1.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(f1),Z.translateZ(t1),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const O=X+t1,A=n1+t1,x1=G-f1,S1=Q+(R-f1),C=z*n1/A*O,S=u1*n1/A*O;Z.projectionMatrix.makePerspective(x1,S1,C,S,O,A)}function U(Z,a1){a1===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(a1.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(q===null)return;T.near=P.near=L.near=Z.near,T.far=P.far=L.far=Z.far,(D!==T.near||$!==T.far)&&(q.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,$=T.far);const a1=Z.parent,I=T.cameras;U(T,a1);for(let _=0;_<I.length;_++)U(I[_],a1);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),Z.matrix.copy(T.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale);const R=Z.children;for(let _=0,w=R.length;_<w;_++)R[_].updateMatrixWorld(!0);I.length===2?e1(T,L,P):T.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(u===null&&m===null))return a},this.setFoveation=function(Z){a=Z,u!==null&&(u.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.getPlanes=function(){return y};let h1=null;function c1(Z,a1){if(c=a1.getViewerPose(l||r),p=a1,c!==null){const I=c.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let R=!1;I.length!==T.cameras.length&&(T.cameras.length=0,R=!0);for(let _=0;_<I.length;_++){const w=I[_];let X=null;if(m!==null)X=m.getViewport(w);else{const z=h.getViewSubImage(u,w);X=z.viewport,_===0&&(e.setRenderTargetTextures(x,z.colorTexture,u.ignoreDepthValues?void 0:z.depthStencilTexture),e.setRenderTarget(x))}let n1=v[_];n1===void 0&&(n1=new R2,n1.layers.enable(_),n1.viewport=new $1,v[_]=n1),n1.matrix.fromArray(w.transform.matrix),n1.projectionMatrix.fromArray(w.projectionMatrix),n1.viewport.set(X.x,X.y,X.width,X.height),_===0&&T.matrix.copy(n1.matrix),R===!0&&T.cameras.push(n1)}}for(let I=0;I<M.length;I++){const R=g[I],_=M[I];R!==null&&_!==void 0&&_.update(R,a1,l||r)}if(h1&&h1(Z,a1),a1.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:a1.detectedPlanes});let I=null;for(const R of y)a1.detectedPlanes.has(R)||(I===null&&(I=[]),I.push(R));if(I!==null)for(const R of I)y.delete(R),b.delete(R),n.dispatchEvent({type:"planeremoved",data:R});for(const R of a1.detectedPlanes)if(!y.has(R))y.add(R),b.set(R,a1.lastChangedTime),n.dispatchEvent({type:"planeadded",data:R});else{const _=b.get(R);R.lastChangedTime>_&&(b.set(R,R.lastChangedTime),n.dispatchEvent({type:"planechanged",data:R}))}}p=null}const g1=new V0;g1.setAnimationLoop(c1),this.setAnimationLoop=function(Z){h1=Z},this.dispose=function(){}}}function Or(s,e){function t(d,f){f.color.getRGB(d.fogColor.value,k0(s)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function n(d,f,x,M,g){f.isMeshBasicMaterial||f.isMeshLambertMaterial?q(d,f):f.isMeshToonMaterial?(q(d,f),c(d,f)):f.isMeshPhongMaterial?(q(d,f),l(d,f)):f.isMeshStandardMaterial?(q(d,f),h(d,f),f.isMeshPhysicalMaterial&&u(d,f,g)):f.isMeshMatcapMaterial?(q(d,f),m(d,f)):f.isMeshDepthMaterial?q(d,f):f.isMeshDistanceMaterial?(q(d,f),p(d,f)):f.isMeshNormalMaterial?q(d,f):f.isLineBasicMaterial?(i(d,f),f.isLineDashedMaterial&&r(d,f)):f.isPointsMaterial?o(d,f,x,M):f.isSpriteMaterial?a(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function q(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map),f.alphaMap&&(d.alphaMap.value=f.alphaMap),f.bumpMap&&(d.bumpMap.value=f.bumpMap,d.bumpScale.value=f.bumpScale,f.side===B2&&(d.bumpScale.value*=-1)),f.displacementMap&&(d.displacementMap.value=f.displacementMap,d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap),f.normalMap&&(d.normalMap.value=f.normalMap,d.normalScale.value.copy(f.normalScale),f.side===B2&&d.normalScale.value.negate()),f.specularMap&&(d.specularMap.value=f.specularMap),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(d.envMap.value=x,d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap){d.lightMap.value=f.lightMap;const y=s.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=f.lightMapIntensity*y}f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity);let M;f.map?M=f.map:f.specularMap?M=f.specularMap:f.displacementMap?M=f.displacementMap:f.normalMap?M=f.normalMap:f.bumpMap?M=f.bumpMap:f.roughnessMap?M=f.roughnessMap:f.metalnessMap?M=f.metalnessMap:f.alphaMap?M=f.alphaMap:f.emissiveMap?M=f.emissiveMap:f.clearcoatMap?M=f.clearcoatMap:f.clearcoatNormalMap?M=f.clearcoatNormalMap:f.clearcoatRoughnessMap?M=f.clearcoatRoughnessMap:f.iridescenceMap?M=f.iridescenceMap:f.iridescenceThicknessMap?M=f.iridescenceThicknessMap:f.specularIntensityMap?M=f.specularIntensityMap:f.specularColorMap?M=f.specularColorMap:f.transmissionMap?M=f.transmissionMap:f.thicknessMap?M=f.thicknessMap:f.sheenColorMap?M=f.sheenColorMap:f.sheenRoughnessMap&&(M=f.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uvTransform.value.copy(M.matrix));let g;f.aoMap?g=f.aoMap:f.lightMap&&(g=f.lightMap),g!==void 0&&(g.isWebGLRenderTarget&&(g=g.texture),g.matrixAutoUpdate===!0&&g.updateMatrix(),d.uv2Transform.value.copy(g.matrix))}function i(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity}function r(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function o(d,f,x,M){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*x,d.scale.value=M*.5,f.map&&(d.map.value=f.map),f.alphaMap&&(d.alphaMap.value=f.alphaMap),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);let g;f.map?g=f.map:f.alphaMap&&(g=f.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),d.uvTransform.value.copy(g.matrix))}function a(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map),f.alphaMap&&(d.alphaMap.value=f.alphaMap),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function l(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function c(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function h(d,f){d.roughness.value=f.roughness,d.metalness.value=f.metalness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function u(d,f,x){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),d.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===B2&&d.clearcoatNormalScale.value.negate())),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap)}function m(d,f){f.matcap&&(d.matcap.value=f.matcap)}function p(d,f){d.referencePosition.value.copy(f.referencePosition),d.nearDistance.value=f.nearDistance,d.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Fr(s,e,t,n){let q={},i={},r=[];const o=t.isWebGL2?s.getParameter(35375):0;function a(M,g){const y=g.program;n.uniformBlockBinding(M,y)}function l(M,g){let y=q[M.id];y===void 0&&(p(M),y=c(M),q[M.id]=y,M.addEventListener("dispose",f));const b=g.program;n.updateUBOMapping(M,b);const L=e.render.frame;i[M.id]!==L&&(u(M),i[M.id]=L)}function c(M){const g=h();M.__bindingPointIndex=g;const y=s.createBuffer(),b=M.__size,L=M.usage;return s.bindBuffer(35345,y),s.bufferData(35345,b,L),s.bindBuffer(35345,null),s.bindBufferBase(35345,g,y),y}function h(){for(let M=0;M<o;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const g=q[M.id],y=M.uniforms,b=M.__cache;s.bindBuffer(35345,g);for(let L=0,P=y.length;L<P;L++){const v=y[L];if(m(v,L,b)===!0){const T=v.__offset,D=Array.isArray(v.value)?v.value:[v.value];let $=0;for(let W=0;W<D.length;W++){const k=D[W],N=d(k);typeof k=="number"?(v.__data[0]=k,s.bufferSubData(35345,T+$,v.__data)):k.isMatrix3?(v.__data[0]=k.elements[0],v.__data[1]=k.elements[1],v.__data[2]=k.elements[2],v.__data[3]=k.elements[0],v.__data[4]=k.elements[3],v.__data[5]=k.elements[4],v.__data[6]=k.elements[5],v.__data[7]=k.elements[0],v.__data[8]=k.elements[6],v.__data[9]=k.elements[7],v.__data[10]=k.elements[8],v.__data[11]=k.elements[0]):(k.toArray(v.__data,$),$+=N.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,T,v.__data)}}s.bindBuffer(35345,null)}function m(M,g,y){const b=M.value;if(y[g]===void 0){if(typeof b=="number")y[g]=b;else{const L=Array.isArray(b)?b:[b],P=[];for(let v=0;v<L.length;v++)P.push(L[v].clone());y[g]=P}return!0}else if(typeof b=="number"){if(y[g]!==b)return y[g]=b,!0}else{const L=Array.isArray(y[g])?y[g]:[y[g]],P=Array.isArray(b)?b:[b];for(let v=0;v<L.length;v++){const T=L[v];if(T.equals(P[v])===!1)return T.copy(P[v]),!0}}return!1}function p(M){const g=M.uniforms;let y=0;const b=16;let L=0;for(let P=0,v=g.length;P<v;P++){const T=g[P],D={boundary:0,storage:0},$=Array.isArray(T.value)?T.value:[T.value];for(let W=0,k=$.length;W<k;W++){const N=$[W],K=d(N);D.boundary+=K.boundary,D.storage+=K.storage}if(T.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,P>0){L=y%b;const W=b-L;L!==0&&W-D.boundary<0&&(y+=b-L,T.__offset=y)}y+=D.storage}return L=y%b,L>0&&(y+=b-L),M.__size=y,M.__cache={},this}function d(M){const g={boundary:0,storage:0};return typeof M=="number"?(g.boundary=4,g.storage=4):M.isVector2?(g.boundary=8,g.storage=8):M.isVector3||M.isColor?(g.boundary=16,g.storage=12):M.isVector4?(g.boundary=16,g.storage=16):M.isMatrix3?(g.boundary=48,g.storage=48):M.isMatrix4?(g.boundary=64,g.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),g}function f(M){const g=M.target;g.removeEventListener("dispose",f);const y=r.indexOf(g.__bindingPointIndex);r.splice(y,1),s.deleteBuffer(q[g.id]),delete q[g.id],delete i[g.id]}function x(){for(const M in q)s.deleteBuffer(q[M]);r=[],q={},i={}}return{bind:a,update:l,dispose:x}}function zr(){const s=z4("canvas");return s.style.display="block",s}function Y0(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:zr(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,q=s.stencil!==void 0?s.stencil:!0,i=s.antialias!==void 0?s.antialias:!1,r=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,o=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,a=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=s.alpha!==void 0?s.alpha:!1;let h=null,u=null;const m=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=v3,this.physicallyCorrectLights=!1,this.toneMapping=P5,this.toneMappingExposure=1;const d=this;let f=!1,x=0,M=0,g=null,y=-1,b=null;const L=new $1,P=new $1;let v=null,T=e.width,D=e.height,$=1,W=null,k=null;const N=new $1(0,0,T,D),K=new $1(0,0,T,D);let q1=!1;const e1=new r6;let U=!1,h1=!1,c1=null;const g1=new k1,Z=new l1,a1=new F,I={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function R(){return g===null?$:1}let _=t;function w(E,J){for(let s1=0;s1<E.length;s1++){const j=E[s1],o1=e.getContext(j,J);if(o1!==null)return o1}return null}try{const E={alpha:!0,depth:n,stencil:q,antialias:i,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:a,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${t6}`),e.addEventListener("webglcontextlost",C1,!1),e.addEventListener("webglcontextrestored",A1,!1),e.addEventListener("webglcontextcreationerror",X1,!1),_===null){const J=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&J.shift(),_=w(J,E),_===null)throw w(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}_.getShaderPrecisionFormat===void 0&&(_.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let X,n1,z,u1,V,H,G,Q,t1,f1,O,A,x1,S1,C,S,Y,d1,p1,v1,P1,y1,r1,T1;function I1(){X=new Ji(_),n1=new Vi(_,X,s),X.init(n1),y1=new Rr(_,X,n1),z=new Cr(_,X,n1),u1=new $i,V=new mr,H=new Lr(_,X,z,V,n1,y1,u1),G=new Wi(d),Q=new Yi(d),t1=new on(_,n1),r1=new Bi(_,X,t1,n1),f1=new Ki(_,t1,u1,r1),O=new ns(_,f1,t1,u1),p1=new ts(_,n1,H),S=new Hi(V),A=new dr(d,G,Q,X,n1,r1,S),x1=new Or(d,V),S1=new xr,C=new br(X,n1),d1=new ki(d,G,Q,z,O,c,r),Y=new Ar(d,O,n1),T1=new Fr(_,u1,n1,z),v1=new Gi(_,X,u1,n1),P1=new Zi(_,X,u1,n1),u1.programs=A.programs,d.capabilities=n1,d.extensions=X,d.properties=V,d.renderLists=S1,d.shadowMap=Y,d.state=z,d.info=u1}I1();const w1=new Nr(d,_);this.xr=w1,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const E=X.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=X.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(T,D,!1))},this.getSize=function(E){return E.set(T,D)},this.setSize=function(E,J,s1){if(w1.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,D=J,e.width=Math.floor(E*$),e.height=Math.floor(J*$),s1!==!1&&(e.style.width=E+"px",e.style.height=J+"px"),this.setViewport(0,0,E,J)},this.getDrawingBufferSize=function(E){return E.set(T*$,D*$).floor()},this.setDrawingBufferSize=function(E,J,s1){T=E,D=J,$=s1,e.width=Math.floor(E*s1),e.height=Math.floor(J*s1),this.setViewport(0,0,E,J)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(N)},this.setViewport=function(E,J,s1,j){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,J,s1,j),z.viewport(L.copy(N).multiplyScalar($).floor())},this.getScissor=function(E){return E.copy(K)},this.setScissor=function(E,J,s1,j){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,J,s1,j),z.scissor(P.copy(K).multiplyScalar($).floor())},this.getScissorTest=function(){return q1},this.setScissorTest=function(E){z.setScissorTest(q1=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){k=E},this.getClearColor=function(E){return E.copy(d1.getClearColor())},this.setClearColor=function(){d1.setClearColor.apply(d1,arguments)},this.getClearAlpha=function(){return d1.getClearAlpha()},this.setClearAlpha=function(){d1.setClearAlpha.apply(d1,arguments)},this.clear=function(E=!0,J=!0,s1=!0){let j=0;E&&(j|=16384),J&&(j|=256),s1&&(j|=1024),_.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",C1,!1),e.removeEventListener("webglcontextrestored",A1,!1),e.removeEventListener("webglcontextcreationerror",X1,!1),S1.dispose(),C.dispose(),V.dispose(),G.dispose(),Q.dispose(),O.dispose(),r1.dispose(),T1.dispose(),A.dispose(),w1.dispose(),w1.removeEventListener("sessionstart",b1),w1.removeEventListener("sessionend",E1),c1&&(c1.dispose(),c1=null),Y1.stop()};function C1(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function A1(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const E=u1.autoReset,J=Y.enabled,s1=Y.autoUpdate,j=Y.needsUpdate,o1=Y.type;I1(),u1.autoReset=E,Y.enabled=J,Y.autoUpdate=s1,Y.needsUpdate=j,Y.type=o1}function X1(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function t2(E){const J=E.target;J.removeEventListener("dispose",t2),d2(J)}function d2(E){B(E),V.remove(E)}function B(E){const J=V.get(E).programs;J!==void 0&&(J.forEach(function(s1){A.releaseProgram(s1)}),E.isShaderMaterial&&A.releaseShaderCache(E))}this.renderBufferDirect=function(E,J,s1,j,o1,L1){J===null&&(J=I);const O1=o1.isMesh&&o1.matrixWorld.determinant()<0,U1=T8(E,J,s1,j,o1);z.setMaterial(j,O1);let B1=s1.index,j1=1;j.wireframe===!0&&(B1=f1.getWireframeAttribute(s1),j1=2);const G1=s1.drawRange,V1=s1.attributes.position;let r2=G1.start*j1,F2=(G1.start+G1.count)*j1;L1!==null&&(r2=Math.max(r2,L1.start*j1),F2=Math.min(F2,(L1.start+L1.count)*j1)),B1!==null?(r2=Math.max(r2,0),F2=Math.min(F2,B1.count)):V1!=null&&(r2=Math.max(r2,0),F2=Math.min(F2,V1.count));const _5=F2-r2;if(_5<0||_5===1/0)return;r1.setup(o1,j,U1,s1,B1);let n3,o2=v1;if(B1!==null&&(n3=t1.get(B1),o2=P1,o2.setIndex(n3)),o1.isMesh)j.wireframe===!0?(z.setLineWidth(j.wireframeLinewidth*R()),o2.setMode(1)):o2.setMode(4);else if(o1.isLine){let H1=j.linewidth;H1===void 0&&(H1=1),z.setLineWidth(H1*R()),o1.isLineSegments?o2.setMode(1):o1.isLineLoop?o2.setMode(2):o2.setMode(3)}else o1.isPoints?o2.setMode(0):o1.isSprite&&o2.setMode(4);if(o1.isInstancedMesh)o2.renderInstances(r2,_5,o1.count);else if(s1.isInstancedBufferGeometry){const H1=s1._maxInstanceCount!==void 0?s1._maxInstanceCount:1/0,Xe=Math.min(s1.instanceCount,H1);o2.renderInstances(r2,_5,Xe)}else o2.render(r2,_5)},this.compile=function(E,J){function s1(j,o1,L1){j.transparent===!0&&j.side===u5&&j.forceSinglePass===!1?(j.side=B2,j.needsUpdate=!0,G2(j,o1,L1),j.side=D5,j.needsUpdate=!0,G2(j,o1,L1),j.side=u5):G2(j,o1,L1)}u=C.get(E),u.init(),p.push(u),E.traverseVisible(function(j){j.isLight&&j.layers.test(J.layers)&&(u.pushLight(j),j.castShadow&&u.pushShadow(j))}),u.setupLights(d.physicallyCorrectLights),E.traverse(function(j){const o1=j.material;if(o1)if(Array.isArray(o1))for(let L1=0;L1<o1.length;L1++){const O1=o1[L1];s1(O1,E,j)}else s1(o1,E,j)}),p.pop(),u=null};let i1=null;function m1(E){i1&&i1(E)}function b1(){Y1.stop()}function E1(){Y1.start()}const Y1=new V0;Y1.setAnimationLoop(m1),typeof self<"u"&&Y1.setContext(self),this.setAnimationLoop=function(E){i1=E,w1.setAnimationLoop(E),E===null?Y1.stop():Y1.start()},w1.addEventListener("sessionstart",b1),w1.addEventListener("sessionend",E1),this.render=function(E,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),w1.enabled===!0&&w1.isPresenting===!0&&(w1.cameraAutoUpdate===!0&&w1.updateCamera(J),J=w1.getCamera()),E.isScene===!0&&E.onBeforeRender(d,E,J,g),u=C.get(E,p.length),u.init(),p.push(u),g1.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),e1.setFromProjectionMatrix(g1),h1=this.localClippingEnabled,U=S.init(this.clippingPlanes,h1),h=S1.get(E,m.length),h.init(),m.push(h),m2(E,J,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(W,k),U===!0&&S.beginShadows();const s1=u.state.shadowsArray;if(Y.render(s1,E,J),U===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),d1.render(h,E),u.setupLights(d.physicallyCorrectLights),J.isArrayCamera){const j=J.cameras;for(let o1=0,L1=j.length;o1<L1;o1++){const O1=j[o1];M2(h,E,O1,O1.viewport)}}else M2(h,E,J);g!==null&&(H.updateMultisampleRenderTarget(g),H.updateRenderTargetMipmap(g)),E.isScene===!0&&E.onAfterRender(d,E,J),r1.resetDefaultState(),y=-1,b=null,p.pop(),p.length>0?u=p[p.length-1]:u=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function m2(E,J,s1,j){if(E.visible===!1)return;if(E.layers.test(J.layers)){if(E.isGroup)s1=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(J);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||e1.intersectsSprite(E)){j&&a1.setFromMatrixPosition(E.matrixWorld).applyMatrix4(g1);const O1=O.update(E),U1=E.material;U1.visible&&h.push(E,O1,U1,s1,a1.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==u1.render.frame&&(E.skeleton.update(),E.skeleton.frame=u1.render.frame),!E.frustumCulled||e1.intersectsObject(E))){j&&a1.setFromMatrixPosition(E.matrixWorld).applyMatrix4(g1);const O1=O.update(E),U1=E.material;if(Array.isArray(U1)){const B1=O1.groups;for(let j1=0,G1=B1.length;j1<G1;j1++){const V1=B1[j1],r2=U1[V1.materialIndex];r2&&r2.visible&&h.push(E,O1,r2,s1,a1.z,V1)}}else U1.visible&&h.push(E,O1,U1,s1,a1.z,null)}}const L1=E.children;for(let O1=0,U1=L1.length;O1<U1;O1++)m2(L1[O1],J,s1,j)}function M2(E,J,s1,j){const o1=E.opaque,L1=E.transmissive,O1=E.transparent;u.setupLightsView(s1),U===!0&&S.setGlobalState(d.clippingPlanes,s1),L1.length>0&&t3(o1,J,s1),j&&z.viewport(L.copy(j)),o1.length>0&&n2(o1,J,s1),L1.length>0&&n2(L1,J,s1),O1.length>0&&n2(O1,J,s1),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function t3(E,J,s1){const j=n1.isWebGL2;c1===null&&(c1=new y3(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?D4:_3,minFilter:g3,samples:j&&i===!0?4:0})),d.getDrawingBufferSize(Z),j?c1.setSize(Z.x,Z.y):c1.setSize(Ie(Z.x),Ie(Z.y));const o1=d.getRenderTarget();d.setRenderTarget(c1),d.clear();const L1=d.toneMapping;d.toneMapping=P5,n2(E,J,s1),d.toneMapping=L1,H.updateMultisampleRenderTarget(c1),H.updateRenderTargetMipmap(c1),d.setRenderTarget(o1)}function n2(E,J,s1){const j=J.isScene===!0?J.overrideMaterial:null;for(let o1=0,L1=E.length;o1<L1;o1++){const O1=E[o1],U1=O1.object,B1=O1.geometry,j1=j===null?O1.material:j,G1=O1.group;U1.layers.test(s1.layers)&&g5(U1,J,s1,B1,j1,G1)}}function g5(E,J,s1,j,o1,L1){E.onBeforeRender(d,J,s1,j,o1,L1),E.modelViewMatrix.multiplyMatrices(s1.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),o1.onBeforeRender(d,J,s1,j,E,L1),o1.transparent===!0&&o1.side===u5&&o1.forceSinglePass===!1?(o1.side=B2,o1.needsUpdate=!0,d.renderBufferDirect(s1,J,j,o1,E,L1),o1.side=D5,o1.needsUpdate=!0,d.renderBufferDirect(s1,J,j,o1,E,L1),o1.side=u5):d.renderBufferDirect(s1,J,j,o1,E,L1),E.onAfterRender(d,J,s1,j,o1,L1)}function G2(E,J,s1){J.isScene!==!0&&(J=I);const j=V.get(E),o1=u.state.lights,L1=u.state.shadowsArray,O1=o1.state.version,U1=A.getParameters(E,o1.state,L1,J,s1),B1=A.getProgramCacheKey(U1);let j1=j.programs;j.environment=E.isMeshStandardMaterial?J.environment:null,j.fog=J.fog,j.envMap=(E.isMeshStandardMaterial?Q:G).get(E.envMap||j.environment),j1===void 0&&(E.addEventListener("dispose",t2),j1=new Map,j.programs=j1);let G1=j1.get(B1);if(G1!==void 0){if(j.currentProgram===G1&&j.lightsStateVersion===O1)return E6(E,U1),G1}else U1.uniforms=A.getUniforms(E),E.onBuild(s1,U1,d),E.onBeforeCompile(U1,d),G1=A.acquireProgram(U1,B1),j1.set(B1,G1),j.uniforms=U1.uniforms;const V1=j.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(V1.clippingPlanes=S.uniform),E6(E,U1),j.needsLights=A8(E),j.lightsStateVersion=O1,j.needsLights&&(V1.ambientLightColor.value=o1.state.ambient,V1.lightProbe.value=o1.state.probe,V1.directionalLights.value=o1.state.directional,V1.directionalLightShadows.value=o1.state.directionalShadow,V1.spotLights.value=o1.state.spot,V1.spotLightShadows.value=o1.state.spotShadow,V1.rectAreaLights.value=o1.state.rectArea,V1.ltc_1.value=o1.state.rectAreaLTC1,V1.ltc_2.value=o1.state.rectAreaLTC2,V1.pointLights.value=o1.state.point,V1.pointLightShadows.value=o1.state.pointShadow,V1.hemisphereLights.value=o1.state.hemi,V1.directionalShadowMap.value=o1.state.directionalShadowMap,V1.directionalShadowMatrix.value=o1.state.directionalShadowMatrix,V1.spotShadowMap.value=o1.state.spotShadowMap,V1.spotLightMatrix.value=o1.state.spotLightMatrix,V1.spotLightMap.value=o1.state.spotLightMap,V1.pointShadowMap.value=o1.state.pointShadowMap,V1.pointShadowMatrix.value=o1.state.pointShadowMatrix);const r2=G1.getUniforms(),F2=Re.seqWithValue(r2.seq,V1);return j.currentProgram=G1,j.uniformsList=F2,G1}function E6(E,J){const s1=V.get(E);s1.outputEncoding=J.outputEncoding,s1.instancing=J.instancing,s1.skinning=J.skinning,s1.morphTargets=J.morphTargets,s1.morphNormals=J.morphNormals,s1.morphColors=J.morphColors,s1.morphTargetsCount=J.morphTargetsCount,s1.numClippingPlanes=J.numClippingPlanes,s1.numIntersection=J.numClipIntersection,s1.vertexAlphas=J.vertexAlphas,s1.vertexTangents=J.vertexTangents,s1.toneMapping=J.toneMapping}function T8(E,J,s1,j,o1){J.isScene!==!0&&(J=I),H.resetTextureUnits();const L1=J.fog,O1=j.isMeshStandardMaterial?J.environment:null,U1=g===null?d.outputEncoding:g.isXRRenderTarget===!0?g.texture.encoding:v3,B1=(j.isMeshStandardMaterial?Q:G).get(j.envMap||O1),j1=j.vertexColors===!0&&!!s1.attributes.color&&s1.attributes.color.itemSize===4,G1=!!j.normalMap&&!!s1.attributes.tangent,V1=!!s1.morphAttributes.position,r2=!!s1.morphAttributes.normal,F2=!!s1.morphAttributes.color,_5=j.toneMapped?d.toneMapping:P5,n3=s1.morphAttributes.position||s1.morphAttributes.normal||s1.morphAttributes.color,o2=n3!==void 0?n3.length:0,H1=V.get(j),Xe=u.state.lights;if(U===!0&&(h1===!0||E!==b)){const z2=E===b&&j.id===y;S.setState(j,E,z2)}let p2=!1;j.version===H1.__version?(H1.needsLights&&H1.lightsStateVersion!==Xe.state.version||H1.outputEncoding!==U1||o1.isInstancedMesh&&H1.instancing===!1||!o1.isInstancedMesh&&H1.instancing===!0||o1.isSkinnedMesh&&H1.skinning===!1||!o1.isSkinnedMesh&&H1.skinning===!0||H1.envMap!==B1||j.fog===!0&&H1.fog!==L1||H1.numClippingPlanes!==void 0&&(H1.numClippingPlanes!==S.numPlanes||H1.numIntersection!==S.numIntersection)||H1.vertexAlphas!==j1||H1.vertexTangents!==G1||H1.morphTargets!==V1||H1.morphNormals!==r2||H1.morphColors!==F2||H1.toneMapping!==_5||n1.isWebGL2===!0&&H1.morphTargetsCount!==o2)&&(p2=!0):(p2=!0,H1.__version=j.version);let q3=H1.currentProgram;p2===!0&&(q3=G2(j,J,o1));let A6=!1,d4=!1,je=!1;const E2=q3.getUniforms(),i3=H1.uniforms;if(z.useProgram(q3.program)&&(A6=!0,d4=!0,je=!0),j.id!==y&&(y=j.id,d4=!0),A6||b!==E){if(E2.setValue(_,"projectionMatrix",E.projectionMatrix),n1.logarithmicDepthBuffer&&E2.setValue(_,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),b!==E&&(b=E,d4=!0,je=!0),j.isShaderMaterial||j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshStandardMaterial||j.envMap){const z2=E2.map.cameraPosition;z2!==void 0&&z2.setValue(_,a1.setFromMatrixPosition(E.matrixWorld))}(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&E2.setValue(_,"isOrthographic",E.isOrthographicCamera===!0),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial||j.isShadowMaterial||o1.isSkinnedMesh)&&E2.setValue(_,"viewMatrix",E.matrixWorldInverse)}if(o1.isSkinnedMesh){E2.setOptional(_,o1,"bindMatrix"),E2.setOptional(_,o1,"bindMatrixInverse");const z2=o1.skeleton;z2&&(n1.floatVertexTextures?(z2.boneTexture===null&&z2.computeBoneTexture(),E2.setValue(_,"boneTexture",z2.boneTexture,H),E2.setValue(_,"boneTextureSize",z2.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ye=s1.morphAttributes;if((Ye.position!==void 0||Ye.normal!==void 0||Ye.color!==void 0&&n1.isWebGL2===!0)&&p1.update(o1,s1,j,q3),(d4||H1.receiveShadow!==o1.receiveShadow)&&(H1.receiveShadow=o1.receiveShadow,E2.setValue(_,"receiveShadow",o1.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(i3.envMap.value=B1,i3.flipEnvMap.value=B1.isCubeTexture&&B1.isRenderTargetTexture===!1?-1:1),d4&&(E2.setValue(_,"toneMappingExposure",d.toneMappingExposure),H1.needsLights&&E8(i3,je),L1&&j.fog===!0&&x1.refreshFogUniforms(i3,L1),x1.refreshMaterialUniforms(i3,j,$,D,c1),Re.upload(_,H1.uniformsList,i3,H)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Re.upload(_,H1.uniformsList,i3,H),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&E2.setValue(_,"center",o1.center),E2.setValue(_,"modelViewMatrix",o1.modelViewMatrix),E2.setValue(_,"normalMatrix",o1.normalMatrix),E2.setValue(_,"modelMatrix",o1.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const z2=j.uniformsGroups;for(let Je=0,C8=z2.length;Je<C8;Je++)if(n1.isWebGL2){const C6=z2[Je];T1.update(C6,q3),T1.bind(C6,q3)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return q3}function E8(E,J){E.ambientLightColor.needsUpdate=J,E.lightProbe.needsUpdate=J,E.directionalLights.needsUpdate=J,E.directionalLightShadows.needsUpdate=J,E.pointLights.needsUpdate=J,E.pointLightShadows.needsUpdate=J,E.spotLights.needsUpdate=J,E.spotLightShadows.needsUpdate=J,E.rectAreaLights.needsUpdate=J,E.hemisphereLights.needsUpdate=J}function A8(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return g},this.setRenderTargetTextures=function(E,J,s1){V.get(E.texture).__webglTexture=J,V.get(E.depthTexture).__webglTexture=s1;const j=V.get(E);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=s1===void 0,j.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,J){const s1=V.get(E);s1.__webglFramebuffer=J,s1.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(E,J=0,s1=0){g=E,x=J,M=s1;let j=!0,o1=null,L1=!1,O1=!1;if(E){const B1=V.get(E);B1.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(36160,null),j=!1):B1.__webglFramebuffer===void 0?H.setupRenderTarget(E):B1.__hasExternalTextures&&H.rebindTextures(E,V.get(E.texture).__webglTexture,V.get(E.depthTexture).__webglTexture);const j1=E.texture;(j1.isData3DTexture||j1.isDataArrayTexture||j1.isCompressedArrayTexture)&&(O1=!0);const G1=V.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(o1=G1[J],L1=!0):n1.isWebGL2&&E.samples>0&&H.useMultisampledRTT(E)===!1?o1=V.get(E).__webglMultisampledFramebuffer:o1=G1,L.copy(E.viewport),P.copy(E.scissor),v=E.scissorTest}else L.copy(N).multiplyScalar($).floor(),P.copy(K).multiplyScalar($).floor(),v=q1;if(z.bindFramebuffer(36160,o1)&&n1.drawBuffers&&j&&z.drawBuffers(E,o1),z.viewport(L),z.scissor(P),z.setScissorTest(v),L1){const B1=V.get(E.texture);_.framebufferTexture2D(36160,36064,34069+J,B1.__webglTexture,s1)}else if(O1){const B1=V.get(E.texture),j1=J||0;_.framebufferTextureLayer(36160,36064,B1.__webglTexture,s1||0,j1)}y=-1},this.readRenderTargetPixels=function(E,J,s1,j,o1,L1,O1){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let U1=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&O1!==void 0&&(U1=U1[O1]),U1){z.bindFramebuffer(36160,U1);try{const B1=E.texture,j1=B1.format,G1=B1.type;if(j1!==X2&&y1.convert(j1)!==_.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const V1=G1===D4&&(X.has("EXT_color_buffer_half_float")||n1.isWebGL2&&X.has("EXT_color_buffer_float"));if(G1!==_3&&y1.convert(G1)!==_.getParameter(35738)&&!(G1===j5&&(n1.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!V1){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=E.width-j&&s1>=0&&s1<=E.height-o1&&_.readPixels(J,s1,j,o1,y1.convert(j1),y1.convert(G1),L1)}finally{const B1=g!==null?V.get(g).__webglFramebuffer:null;z.bindFramebuffer(36160,B1)}}},this.copyFramebufferToTexture=function(E,J,s1=0){const j=Math.pow(2,-s1),o1=Math.floor(J.image.width*j),L1=Math.floor(J.image.height*j);H.setTexture2D(J,0),_.copyTexSubImage2D(3553,s1,0,0,E.x,E.y,o1,L1),z.unbindTexture()},this.copyTextureToTexture=function(E,J,s1,j=0){const o1=J.image.width,L1=J.image.height,O1=y1.convert(s1.format),U1=y1.convert(s1.type);H.setTexture2D(s1,0),_.pixelStorei(37440,s1.flipY),_.pixelStorei(37441,s1.premultiplyAlpha),_.pixelStorei(3317,s1.unpackAlignment),J.isDataTexture?_.texSubImage2D(3553,j,E.x,E.y,o1,L1,O1,U1,J.image.data):J.isCompressedTexture?_.compressedTexSubImage2D(3553,j,E.x,E.y,J.mipmaps[0].width,J.mipmaps[0].height,O1,J.mipmaps[0].data):_.texSubImage2D(3553,j,E.x,E.y,O1,U1,J.image),j===0&&s1.generateMipmaps&&_.generateMipmap(3553),z.unbindTexture()},this.copyTextureToTexture3D=function(E,J,s1,j,o1=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const L1=E.max.x-E.min.x+1,O1=E.max.y-E.min.y+1,U1=E.max.z-E.min.z+1,B1=y1.convert(j.format),j1=y1.convert(j.type);let G1;if(j.isData3DTexture)H.setTexture3D(j,0),G1=32879;else if(j.isDataArrayTexture)H.setTexture2DArray(j,0),G1=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(37440,j.flipY),_.pixelStorei(37441,j.premultiplyAlpha),_.pixelStorei(3317,j.unpackAlignment);const V1=_.getParameter(3314),r2=_.getParameter(32878),F2=_.getParameter(3316),_5=_.getParameter(3315),n3=_.getParameter(32877),o2=s1.isCompressedTexture?s1.mipmaps[0]:s1.image;_.pixelStorei(3314,o2.width),_.pixelStorei(32878,o2.height),_.pixelStorei(3316,E.min.x),_.pixelStorei(3315,E.min.y),_.pixelStorei(32877,E.min.z),s1.isDataTexture||s1.isData3DTexture?_.texSubImage3D(G1,o1,J.x,J.y,J.z,L1,O1,U1,B1,j1,o2.data):s1.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),_.compressedTexSubImage3D(G1,o1,J.x,J.y,J.z,L1,O1,U1,B1,o2.data)):_.texSubImage3D(G1,o1,J.x,J.y,J.z,L1,O1,U1,B1,j1,o2),_.pixelStorei(3314,V1),_.pixelStorei(32878,r2),_.pixelStorei(3316,F2),_.pixelStorei(3315,_5),_.pixelStorei(32877,n3),o1===0&&j.generateMipmaps&&_.generateMipmap(G1),z.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?H.setTextureCube(E,0):E.isData3DTexture?H.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?H.setTexture2DArray(E,0):H.setTexture2D(E,0),z.unbindTexture()},this.resetState=function(){x=0,M=0,g=null,z.reset(),r1.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Ur extends Y0{}Ur.prototype.isWebGL1Renderer=!0;class kr extends s2{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Br{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bt,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Y2()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let q=0,i=this.stride;q<i;q++)this.array[e+q]=t.array[n+q];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Y2()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Y2()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const C2=new F;class l6{constructor(e,t,n,q=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=q}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)C2.fromBufferAttribute(this,t),C2.applyMatrix4(e),this.setXYZ(t,C2.x,C2.y,C2.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)C2.fromBufferAttribute(this,t),C2.applyNormalMatrix(e),this.setXYZ(t,C2.x,C2.y,C2.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)C2.fromBufferAttribute(this,t),C2.transformDirection(e),this.setXYZ(t,C2.x,C2.y,C2.z);return this}setX(e,t){return this.normalized&&(t=Z1(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Z1(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Z1(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Z1(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=L5(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=L5(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=L5(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=L5(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Z1(t,this.array),n=Z1(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,q){return e=e*this.data.stride+this.offset,this.normalized&&(t=Z1(t,this.array),n=Z1(n,this.array),q=Z1(q,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=q,this}setXYZW(e,t,n,q,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Z1(t,this.array),n=Z1(n,this.array),q=Z1(q,this.array),i=Z1(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=q,this.data.array[e+3]=i,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const q=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[q+i])}return new P2(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new l6(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const q=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[q+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const G7=new F,V7=new $1,H7=new $1,Gr=new F,W7=new k1;class Vr extends N1{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new k1,this.bindMatrixInverse=new k1}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $1,t=this.geometry.attributes.skinWeight;for(let n=0,q=t.count;n<q;n++){e.fromBufferAttribute(t,n);const i=1/e.manhattanLength();i!==1/0?e.multiplyScalar(i):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,q=this.geometry;V7.fromBufferAttribute(q.attributes.skinIndex,e),H7.fromBufferAttribute(q.attributes.skinWeight,e),G7.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let i=0;i<4;i++){const r=H7.getComponent(i);if(r!==0){const o=V7.getComponent(i);W7.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Gr.copy(G7).applyMatrix4(W7),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class J0 extends s2{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Hr extends y2{constructor(e=null,t=1,n=1,q,i,r,o,a,l=g2,c=g2,h,u){super(null,r,o,a,l,c,q,i,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const X7=new k1,Wr=new k1;class c6{constructor(e=[],t=[]){this.uuid=Y2(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,q=this.bones.length;n<q;n++)this.boneInverses.push(new k1)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new k1;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,q=this.boneTexture;for(let i=0,r=e.length;i<r;i++){const o=e[i]?e[i].matrixWorld:Wr;X7.multiplyMatrices(o,t[i]),X7.toArray(n,i*16)}q!==null&&(q.needsUpdate=!0)}clone(){return new c6(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=P0(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Hr(t,e,e,X2,j5);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const q=this.bones[t];if(q.name===e)return q}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,q=e.bones.length;n<q;n++){const i=e.bones[n];let r=t[i];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",i),r=new J0),this.bones.push(r),this.boneInverses.push(new k1().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let q=0,i=t.length;q<i;q++){const r=t[q];e.bones.push(r.uuid);const o=n[q];e.boneInverses.push(o.toArray())}return e}}class j7 extends P2{constructor(e,t,n,q=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=q}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Y7=new k1,J7=new k1,me=[],Xr=new k1,M4=new N1;class jr extends N1{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new j7(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let q=0;q<n;q++)this.setMatrixAt(q,Xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,q=this.count;if(M4.geometry=this.geometry,M4.material=this.material,M4.material!==void 0)for(let i=0;i<q;i++){this.getMatrixAt(i,Y7),J7.multiplyMatrices(n,Y7),M4.matrixWorld=J7,M4.raycast(e,me);for(let r=0,o=me.length;r<o;r++){const a=me[r];a.instanceId=i,a.object=this,t.push(a)}me.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new j7(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class h6 extends n5{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new F1(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const K7=new F,Z7=new F,$7=new k1,Et=new Fe,pe=new c4;class u6 extends s2{constructor(e=new w2,t=new h6){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let q=1,i=t.count;q<i;q++)K7.fromBufferAttribute(t,q-1),Z7.fromBufferAttribute(t,q),n[q]=n[q-1],n[q]+=K7.distanceTo(Z7);e.setAttribute("lineDistance",new Q1(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,q=this.matrixWorld,i=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pe.copy(n.boundingSphere),pe.applyMatrix4(q),pe.radius+=i,e.ray.intersectsSphere(pe)===!1)return;$7.copy(q).invert(),Et.copy(e.ray).applyMatrix4($7);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=new F,c=new F,h=new F,u=new F,m=this.isLineSegments?2:1,p=n.index,f=n.attributes.position;if(p!==null){const x=Math.max(0,r.start),M=Math.min(p.count,r.start+r.count);for(let g=x,y=M-1;g<y;g+=m){const b=p.getX(g),L=p.getX(g+1);if(l.fromBufferAttribute(f,b),c.fromBufferAttribute(f,L),Et.distanceSqToSegment(l,c,u,h)>a)continue;u.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(u);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,r.start),M=Math.min(f.count,r.start+r.count);for(let g=x,y=M-1;g<y;g+=m){if(l.fromBufferAttribute(f,g),c.fromBufferAttribute(f,g+1),Et.distanceSqToSegment(l,c,u,h)>a)continue;u.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(u);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const q=t[n[0]];if(q!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=q.length;i<r;i++){const o=q[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}const Q7=new F,e0=new F;class Yr extends u6{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let q=0,i=t.count;q<i;q+=2)Q7.fromBufferAttribute(t,q),e0.fromBufferAttribute(t,q+1),n[q]=q===0?0:n[q-1],n[q+1]=n[q]+Q7.distanceTo(e0);e.setAttribute("lineDistance",new Q1(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jr extends u6{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class K0 extends n5{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new F1(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const t0=new k1,Wt=new Fe,xe=new c4,ge=new F;class Kr extends s2{constructor(e=new w2,t=new K0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,q=this.matrixWorld,i=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xe.copy(n.boundingSphere),xe.applyMatrix4(q),xe.radius+=i,e.ray.intersectsSphere(xe)===!1)return;t0.copy(q).invert(),Wt.copy(e.ray).applyMatrix4(t0);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=n.index,h=n.attributes.position;if(l!==null){const u=Math.max(0,r.start),m=Math.min(l.count,r.start+r.count);for(let p=u,d=m;p<d;p++){const f=l.getX(p);ge.fromBufferAttribute(h,f),n0(ge,f,a,q,e,t,this)}}else{const u=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let p=u,d=m;p<d;p++)ge.fromBufferAttribute(h,p),n0(ge,p,a,q,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const q=t[n[0]];if(q!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=q.length;i<r;i++){const o=q[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}function n0(s,e,t,n,q,i,r){const o=Wt.distanceSqToPoint(s);if(o<t){const a=new F;Wt.closestPointToPoint(s,a),a.applyMatrix4(n);const l=q.ray.origin.distanceTo(a);if(l<q.near||l>q.far)return;i.push({distance:l,distanceToRay:Math.sqrt(o),point:a,index:e,face:null,object:r})}}class p5{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,q=this.getPoint(0),i=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),i+=n.distanceTo(q),t.push(i),q=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let q=0;const i=n.length;let r;t?r=t:r=e*n[i-1];let o=0,a=i-1,l;for(;o<=a;)if(q=Math.floor(o+(a-o)/2),l=n[q]-r,l<0)o=q+1;else if(l>0)a=q-1;else{a=q;break}if(q=a,n[q]===r)return q/(i-1);const c=n[q],u=n[q+1]-c,m=(r-c)/u;return(q+m)/(i-1)}getTangent(e,t){let q=e-1e-4,i=e+1e-4;q<0&&(q=0),i>1&&(i=1);const r=this.getPoint(q),o=this.getPoint(i),a=t||(r.isVector2?new l1:new F);return a.copy(o).sub(r).normalize(),a}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new F,q=[],i=[],r=[],o=new F,a=new k1;for(let m=0;m<=e;m++){const p=m/e;q[m]=this.getTangentAt(p,new F)}i[0]=new F,r[0]=new F;let l=Number.MAX_VALUE;const c=Math.abs(q[0].x),h=Math.abs(q[0].y),u=Math.abs(q[0].z);c<=l&&(l=c,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(q[0],n).normalize(),i[0].crossVectors(q[0],o),r[0].crossVectors(q[0],i[0]);for(let m=1;m<=e;m++){if(i[m]=i[m-1].clone(),r[m]=r[m-1].clone(),o.crossVectors(q[m-1],q[m]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(_2(q[m-1].dot(q[m]),-1,1));i[m].applyMatrix4(a.makeRotationAxis(o,p))}r[m].crossVectors(q[m],i[m])}if(t===!0){let m=Math.acos(_2(i[0].dot(i[e]),-1,1));m/=e,q[0].dot(o.crossVectors(i[0],i[e]))>0&&(m=-m);for(let p=1;p<=e;p++)i[p].applyMatrix4(a.makeRotationAxis(q[p],m*p)),r[p].crossVectors(q[p],i[p])}return{tangents:q,normals:i,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class f6 extends p5{constructor(e=0,t=0,n=1,q=1,i=0,r=Math.PI*2,o=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=q,this.aStartAngle=i,this.aEndAngle=r,this.aClockwise=o,this.aRotation=a}getPoint(e,t){const n=t||new l1,q=Math.PI*2;let i=this.aEndAngle-this.aStartAngle;const r=Math.abs(i)<Number.EPSILON;for(;i<0;)i+=q;for(;i>q;)i-=q;i<Number.EPSILON&&(r?i=0:i=q),this.aClockwise===!0&&!r&&(i===q?i=-q:i=i-q);const o=this.aStartAngle+e*i;let a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=a-this.aX,m=l-this.aY;a=u*c-m*h+this.aX,l=u*h+m*c+this.aY}return n.set(a,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Zr extends f6{constructor(e,t,n,q,i,r){super(e,t,n,n,q,i,r),this.isArcCurve=!0,this.type="ArcCurve"}}function d6(){let s=0,e=0,t=0,n=0;function q(i,r,o,a){s=i,e=o,t=-3*i+3*r-2*o-a,n=2*i-2*r+o+a}return{initCatmullRom:function(i,r,o,a,l){q(r,o,l*(o-i),l*(a-r))},initNonuniformCatmullRom:function(i,r,o,a,l,c,h){let u=(r-i)/l-(o-i)/(l+c)+(o-r)/c,m=(o-r)/c-(a-r)/(c+h)+(a-o)/h;u*=c,m*=c,q(r,o,u,m)},calc:function(i){const r=i*i,o=r*i;return s+e*i+t*r+n*o}}}const _e=new F,At=new d6,Ct=new d6,Lt=new d6;class $r extends p5{constructor(e=[],t=!1,n="centripetal",q=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=q}getPoint(e,t=new F){const n=t,q=this.points,i=q.length,r=(i-(this.closed?0:1))*e;let o=Math.floor(r),a=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:a===0&&o===i-1&&(o=i-2,a=1);let l,c;this.closed||o>0?l=q[(o-1)%i]:(_e.subVectors(q[0],q[1]).add(q[0]),l=_e);const h=q[o%i],u=q[(o+1)%i];if(this.closed||o+2<i?c=q[(o+2)%i]:(_e.subVectors(q[i-1],q[i-2]).add(q[i-1]),c=_e),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(h),m),d=Math.pow(h.distanceToSquared(u),m),f=Math.pow(u.distanceToSquared(c),m);d<1e-4&&(d=1),p<1e-4&&(p=d),f<1e-4&&(f=d),At.initNonuniformCatmullRom(l.x,h.x,u.x,c.x,p,d,f),Ct.initNonuniformCatmullRom(l.y,h.y,u.y,c.y,p,d,f),Lt.initNonuniformCatmullRom(l.z,h.z,u.z,c.z,p,d,f)}else this.curveType==="catmullrom"&&(At.initCatmullRom(l.x,h.x,u.x,c.x,this.tension),Ct.initCatmullRom(l.y,h.y,u.y,c.y,this.tension),Lt.initCatmullRom(l.z,h.z,u.z,c.z,this.tension));return n.set(At.calc(a),Ct.calc(a),Lt.calc(a)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const q=e.points[t];this.points.push(q.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const q=this.points[t];e.points.push(q.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const q=e.points[t];this.points.push(new F().fromArray(q))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function q0(s,e,t,n,q){const i=(n-e)*.5,r=(q-t)*.5,o=s*s,a=s*o;return(2*t-2*n+i+r)*a+(-3*t+3*n-2*i-r)*o+i*s+t}function Qr(s,e){const t=1-s;return t*t*e}function eo(s,e){return 2*(1-s)*s*e}function to(s,e){return s*s*e}function P4(s,e,t,n){return Qr(s,e)+eo(s,t)+to(s,n)}function no(s,e){const t=1-s;return t*t*t*e}function qo(s,e){const t=1-s;return 3*t*t*s*e}function io(s,e){return 3*(1-s)*s*s*e}function so(s,e){return s*s*s*e}function I4(s,e,t,n,q){return no(s,e)+qo(s,t)+io(s,n)+so(s,q)}class Z0 extends p5{constructor(e=new l1,t=new l1,n=new l1,q=new l1){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=q}getPoint(e,t=new l1){const n=t,q=this.v0,i=this.v1,r=this.v2,o=this.v3;return n.set(I4(e,q.x,i.x,r.x,o.x),I4(e,q.y,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ro extends p5{constructor(e=new F,t=new F,n=new F,q=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=q}getPoint(e,t=new F){const n=t,q=this.v0,i=this.v1,r=this.v2,o=this.v3;return n.set(I4(e,q.x,i.x,r.x,o.x),I4(e,q.y,i.y,r.y,o.y),I4(e,q.z,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class m6 extends p5{constructor(e=new l1,t=new l1){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new l1){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new l1;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oo extends p5{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $0 extends p5{constructor(e=new l1,t=new l1,n=new l1){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new l1){const n=t,q=this.v0,i=this.v1,r=this.v2;return n.set(P4(e,q.x,i.x,r.x),P4(e,q.y,i.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ao extends p5{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){const n=t,q=this.v0,i=this.v1,r=this.v2;return n.set(P4(e,q.x,i.x,r.x),P4(e,q.y,i.y,r.y),P4(e,q.z,i.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Q0 extends p5{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new l1){const n=t,q=this.points,i=(q.length-1)*e,r=Math.floor(i),o=i-r,a=q[r===0?r:r-1],l=q[r],c=q[r>q.length-2?q.length-1:r+1],h=q[r>q.length-3?q.length-1:r+2];return n.set(q0(o,a.x,l.x,c.x,h.x),q0(o,a.y,l.y,c.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const q=e.points[t];this.points.push(q.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const q=this.points[t];e.points.push(q.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const q=e.points[t];this.points.push(new l1().fromArray(q))}return this}}var e8=Object.freeze({__proto__:null,ArcCurve:Zr,CatmullRomCurve3:$r,CubicBezierCurve:Z0,CubicBezierCurve3:ro,EllipseCurve:f6,LineCurve:m6,LineCurve3:oo,QuadraticBezierCurve:$0,QuadraticBezierCurve3:ao,SplineCurve:Q0});class lo extends p5{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new m6(t,e))}getPoint(e,t){const n=e*this.getLength(),q=this.getCurveLengths();let i=0;for(;i<q.length;){if(q[i]>=n){const r=q[i]-n,o=this.curves[i],a=o.getLength(),l=a===0?0:1-r/a;return o.getPointAt(l,t)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,q=this.curves.length;n<q;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let q=0,i=this.curves;q<i.length;q++){const r=i[q],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,a=r.getPoints(o);for(let l=0;l<a.length;l++){const c=a[l];n&&n.equals(c)||(t.push(c),n=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const q=e.curves[t];this.curves.push(q.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const q=this.curves[t];e.curves.push(q.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const q=e.curves[t];this.curves.push(new e8[q.type]().fromJSON(q))}return this}}class $3 extends lo{constructor(e){super(),this.type="Path",this.currentPoint=new l1,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new m6(this.currentPoint.clone(),new l1(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,q){const i=new $0(this.currentPoint.clone(),new l1(e,t),new l1(n,q));return this.curves.push(i),this.currentPoint.set(n,q),this}bezierCurveTo(e,t,n,q,i,r){const o=new Z0(this.currentPoint.clone(),new l1(e,t),new l1(n,q),new l1(i,r));return this.curves.push(o),this.currentPoint.set(i,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Q0(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,q,i,r){const o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,n,q,i,r),this}absarc(e,t,n,q,i,r){return this.absellipse(e,t,n,n,q,i,r),this}ellipse(e,t,n,q,i,r,o,a){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,n,q,i,r,o,a),this}absellipse(e,t,n,q,i,r,o,a){const l=new f6(e,t,n,q,i,r,o,a);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class p6 extends w2{constructor(e=1,t=32,n=0,q=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:q},t=Math.max(3,t);const i=[],r=[],o=[],a=[],l=new F,c=new l1;r.push(0,0,0),o.push(0,0,1),a.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const m=n+h/t*q;l.x=e*Math.cos(m),l.y=e*Math.sin(m),r.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(r[u]/e+1)/2,c.y=(r[u+1]/e+1)/2,a.push(c.x,c.y)}for(let h=1;h<=t;h++)i.push(h,h+1,0);this.setIndex(i),this.setAttribute("position",new Q1(r,3)),this.setAttribute("normal",new Q1(o,3)),this.setAttribute("uv",new Q1(a,2))}static fromJSON(e){return new p6(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class x6 extends w2{constructor(e=1,t=1,n=1,q=32,i=1,r=!1,o=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:q,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a};const l=this;q=Math.floor(q),i=Math.floor(i);const c=[],h=[],u=[],m=[];let p=0;const d=[],f=n/2;let x=0;M(),r===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(c),this.setAttribute("position",new Q1(h,3)),this.setAttribute("normal",new Q1(u,3)),this.setAttribute("uv",new Q1(m,2));function M(){const y=new F,b=new F;let L=0;const P=(t-e)/n;for(let v=0;v<=i;v++){const T=[],D=v/i,$=D*(t-e)+e;for(let W=0;W<=q;W++){const k=W/q,N=k*a+o,K=Math.sin(N),q1=Math.cos(N);b.x=$*K,b.y=-D*n+f,b.z=$*q1,h.push(b.x,b.y,b.z),y.set(K,P,q1).normalize(),u.push(y.x,y.y,y.z),m.push(k,1-D),T.push(p++)}d.push(T)}for(let v=0;v<q;v++)for(let T=0;T<i;T++){const D=d[T][v],$=d[T+1][v],W=d[T+1][v+1],k=d[T][v+1];c.push(D,$,k),c.push($,W,k),L+=6}l.addGroup(x,L,0),x+=L}function g(y){const b=p,L=new l1,P=new F;let v=0;const T=y===!0?e:t,D=y===!0?1:-1;for(let W=1;W<=q;W++)h.push(0,f*D,0),u.push(0,D,0),m.push(.5,.5),p++;const $=p;for(let W=0;W<=q;W++){const N=W/q*a+o,K=Math.cos(N),q1=Math.sin(N);P.x=T*q1,P.y=f*D,P.z=T*K,h.push(P.x,P.y,P.z),u.push(0,D,0),L.x=K*.5+.5,L.y=q1*.5*D+.5,m.push(L.x,L.y),p++}for(let W=0;W<q;W++){const k=b+W,N=$+W;y===!0?c.push(N,N+1,k):c.push(N+1,N,k),v+=3}l.addGroup(x,v,y===!0?1:2),x+=v}}static fromJSON(e){return new x6(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class p3 extends $3{constructor(e){super(e),this.uuid=Y2(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,q=this.holes.length;n<q;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const q=e.holes[t];this.holes.push(q.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const q=this.holes[t];e.holes.push(q.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const q=e.holes[t];this.holes.push(new $3().fromJSON(q))}return this}}const co={triangulate:function(s,e,t=2){const n=e&&e.length,q=n?e[0]*t:s.length;let i=t8(s,0,q,t,!0);const r=[];if(!i||i.next===i.prev)return r;let o,a,l,c,h,u,m;if(n&&(i=po(s,e,i,t)),s.length>80*t){o=l=s[0],a=c=s[1];for(let p=t;p<q;p+=t)h=s[p],u=s[p+1],h<o&&(o=h),u<a&&(a=u),h>l&&(l=h),u>c&&(c=u);m=Math.max(l-o,c-a),m=m!==0?32767/m:0}return U4(i,r,t,o,a,m,0),r}};function t8(s,e,t,n,q){let i,r;if(q===Eo(s,e,t,n)>0)for(i=e;i<t;i+=n)r=i0(i,s[i],s[i+1],r);else for(i=t-n;i>=e;i-=n)r=i0(i,s[i],s[i+1],r);return r&&ke(r,r.next)&&(B4(r),r=r.next),r}function b3(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ke(t,t.next)||q2(t.prev,t,t.next)===0)){if(B4(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function U4(s,e,t,n,q,i,r){if(!s)return;!r&&i&&yo(s,n,q,i);let o=s,a,l;for(;s.prev!==s.next;){if(a=s.prev,l=s.next,i?uo(s,n,q,i):ho(s)){e.push(a.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),B4(s),s=l.next,o=l.next;continue}if(s=l,s===o){r?r===1?(s=fo(b3(s),e,t),U4(s,e,t,n,q,i,2)):r===2&&mo(s,e,t,n,q,i):U4(b3(s),e,t,n,q,i,1);break}}}function ho(s){const e=s.prev,t=s,n=s.next;if(q2(e,t,n)>=0)return!1;const q=e.x,i=t.x,r=n.x,o=e.y,a=t.y,l=n.y,c=q<i?q<r?q:r:i<r?i:r,h=o<a?o<l?o:l:a<l?a:l,u=q>i?q>r?q:r:i>r?i:r,m=o>a?o>l?o:l:a>l?a:l;let p=n.next;for(;p!==e;){if(p.x>=c&&p.x<=u&&p.y>=h&&p.y<=m&&J3(q,o,i,a,r,l,p.x,p.y)&&q2(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function uo(s,e,t,n){const q=s.prev,i=s,r=s.next;if(q2(q,i,r)>=0)return!1;const o=q.x,a=i.x,l=r.x,c=q.y,h=i.y,u=r.y,m=o<a?o<l?o:l:a<l?a:l,p=c<h?c<u?c:u:h<u?h:u,d=o>a?o>l?o:l:a>l?a:l,f=c>h?c>u?c:u:h>u?h:u,x=Xt(m,p,e,t,n),M=Xt(d,f,e,t,n);let g=s.prevZ,y=s.nextZ;for(;g&&g.z>=x&&y&&y.z<=M;){if(g.x>=m&&g.x<=d&&g.y>=p&&g.y<=f&&g!==q&&g!==r&&J3(o,c,a,h,l,u,g.x,g.y)&&q2(g.prev,g,g.next)>=0||(g=g.prevZ,y.x>=m&&y.x<=d&&y.y>=p&&y.y<=f&&y!==q&&y!==r&&J3(o,c,a,h,l,u,y.x,y.y)&&q2(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;g&&g.z>=x;){if(g.x>=m&&g.x<=d&&g.y>=p&&g.y<=f&&g!==q&&g!==r&&J3(o,c,a,h,l,u,g.x,g.y)&&q2(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;y&&y.z<=M;){if(y.x>=m&&y.x<=d&&y.y>=p&&y.y<=f&&y!==q&&y!==r&&J3(o,c,a,h,l,u,y.x,y.y)&&q2(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function fo(s,e,t){let n=s;do{const q=n.prev,i=n.next.next;!ke(q,i)&&n8(q,n,n.next,i)&&k4(q,i)&&k4(i,q)&&(e.push(q.i/t|0),e.push(n.i/t|0),e.push(i.i/t|0),B4(n),B4(n.next),n=s=i),n=n.next}while(n!==s);return b3(n)}function mo(s,e,t,n,q,i){let r=s;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&So(r,o)){let a=q8(r,o);r=b3(r,r.next),a=b3(a,a.next),U4(r,e,t,n,q,i,0),U4(a,e,t,n,q,i,0);return}o=o.next}r=r.next}while(r!==s)}function po(s,e,t,n){const q=[];let i,r,o,a,l;for(i=0,r=e.length;i<r;i++)o=e[i]*n,a=i<r-1?e[i+1]*n:s.length,l=t8(s,o,a,n,!1),l===l.next&&(l.steiner=!0),q.push(bo(l));for(q.sort(xo),i=0;i<q.length;i++)t=go(q[i],t);return t}function xo(s,e){return s.x-e.x}function go(s,e){const t=_o(s,e);if(!t)return e;const n=q8(t,s);return b3(n,n.next),b3(t,t.next)}function _o(s,e){let t=e,n=-1/0,q;const i=s.x,r=s.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>n&&(n=u,q=t.x<t.next.x?t:t.next,u===i))return q}t=t.next}while(t!==e);if(!q)return null;const o=q,a=q.x,l=q.y;let c=1/0,h;t=q;do i>=t.x&&t.x>=a&&i!==t.x&&J3(r<l?i:n,r,a,l,r<l?n:i,r,t.x,t.y)&&(h=Math.abs(r-t.y)/(i-t.x),k4(t,s)&&(h<c||h===c&&(t.x>q.x||t.x===q.x&&vo(q,t)))&&(q=t,c=h)),t=t.next;while(t!==o);return q}function vo(s,e){return q2(s.prev,s,e.prev)<0&&q2(e.next,s,s.next)<0}function yo(s,e,t,n){let q=s;do q.z===0&&(q.z=Xt(q.x,q.y,e,t,n)),q.prevZ=q.prev,q.nextZ=q.next,q=q.next;while(q!==s);q.prevZ.nextZ=null,q.prevZ=null,Mo(q)}function Mo(s){let e,t,n,q,i,r,o,a,l=1;do{for(t=s,s=null,i=null,r=0;t;){for(r++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(a=l;o>0||a>0&&n;)o!==0&&(a===0||!n||t.z<=n.z)?(q=t,t=t.nextZ,o--):(q=n,n=n.nextZ,a--),i?i.nextZ=q:s=q,q.prevZ=i,i=q;t=n}i.nextZ=null,l*=2}while(r>1);return s}function Xt(s,e,t,n,q){return s=(s-t)*q|0,e=(e-n)*q|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function bo(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function J3(s,e,t,n,q,i,r,o){return(q-r)*(e-o)>=(s-r)*(i-o)&&(s-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(i-o)>=(q-r)*(n-o)}function So(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!wo(s,e)&&(k4(s,e)&&k4(e,s)&&To(s,e)&&(q2(s.prev,s,e.prev)||q2(s,e.prev,e))||ke(s,e)&&q2(s.prev,s,s.next)>0&&q2(e.prev,e,e.next)>0)}function q2(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ke(s,e){return s.x===e.x&&s.y===e.y}function n8(s,e,t,n){const q=ye(q2(s,e,t)),i=ye(q2(s,e,n)),r=ye(q2(t,n,s)),o=ye(q2(t,n,e));return!!(q!==i&&r!==o||q===0&&ve(s,t,e)||i===0&&ve(s,n,e)||r===0&&ve(t,s,n)||o===0&&ve(t,e,n))}function ve(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ye(s){return s>0?1:s<0?-1:0}function wo(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&n8(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function k4(s,e){return q2(s.prev,s,s.next)<0?q2(s,e,s.next)>=0&&q2(s,s.prev,e)>=0:q2(s,e,s.prev)<0||q2(s,s.next,e)<0}function To(s,e){let t=s,n=!1;const q=(s.x+e.x)/2,i=(s.y+e.y)/2;do t.y>i!=t.next.y>i&&t.next.y!==t.y&&q<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function q8(s,e){const t=new jt(s.i,s.x,s.y),n=new jt(e.i,e.x,e.y),q=s.next,i=e.prev;return s.next=e,e.prev=s,t.next=q,q.prev=t,n.next=t,t.prev=n,i.next=n,n.prev=i,n}function i0(s,e,t,n){const q=new jt(s,e,t);return n?(q.next=n.next,q.prev=n,n.next.prev=q,n.next=q):(q.prev=q,q.next=q),q}function B4(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function jt(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Eo(s,e,t,n){let q=0;for(let i=e,r=t-n;i<t;i+=n)q+=(s[r]-s[i])*(s[i+1]+s[r+1]),r=i;return q}class d5{static area(e){const t=e.length;let n=0;for(let q=t-1,i=0;i<t;q=i++)n+=e[q].x*e[i].y-e[i].x*e[q].y;return n*.5}static isClockWise(e){return d5.area(e)<0}static triangulateShape(e,t){const n=[],q=[],i=[];s0(e),r0(n,e);let r=e.length;t.forEach(s0);for(let a=0;a<t.length;a++)q.push(r),r+=t[a].length,r0(n,t[a]);const o=co.triangulate(n,q);for(let a=0;a<o.length;a+=3)i.push(o.slice(a,a+3));return i}}function s0(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function r0(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Be extends w2{constructor(e=new p3([new l1(.5,.5),new l1(-.5,.5),new l1(-.5,-.5),new l1(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,q=[],i=[];for(let o=0,a=e.length;o<a;o++){const l=e[o];r(l)}this.setAttribute("position",new Q1(q,3)),this.setAttribute("uv",new Q1(i,2)),this.computeVertexNormals();function r(o){const a=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:m-.1,d=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Ao;let g,y=!1,b,L,P,v;x&&(g=x.getSpacedPoints(c),y=!0,u=!1,b=x.computeFrenetFrames(c,!1),L=new F,P=new F,v=new F),u||(f=0,m=0,p=0,d=0);const T=o.extractPoints(l);let D=T.shape;const $=T.holes;if(!d5.isClockWise(D)){D=D.reverse();for(let V=0,H=$.length;V<H;V++){const G=$[V];d5.isClockWise(G)&&($[V]=G.reverse())}}const k=d5.triangulateShape(D,$),N=D;for(let V=0,H=$.length;V<H;V++){const G=$[V];D=D.concat(G)}function K(V,H,G){return H||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().multiplyScalar(G).add(V)}const q1=D.length,e1=k.length;function U(V,H,G){let Q,t1,f1;const O=V.x-H.x,A=V.y-H.y,x1=G.x-V.x,S1=G.y-V.y,C=O*O+A*A,S=O*S1-A*x1;if(Math.abs(S)>Number.EPSILON){const Y=Math.sqrt(C),d1=Math.sqrt(x1*x1+S1*S1),p1=H.x-A/Y,v1=H.y+O/Y,P1=G.x-S1/d1,y1=G.y+x1/d1,r1=((P1-p1)*S1-(y1-v1)*x1)/(O*S1-A*x1);Q=p1+O*r1-V.x,t1=v1+A*r1-V.y;const T1=Q*Q+t1*t1;if(T1<=2)return new l1(Q,t1);f1=Math.sqrt(T1/2)}else{let Y=!1;O>Number.EPSILON?x1>Number.EPSILON&&(Y=!0):O<-Number.EPSILON?x1<-Number.EPSILON&&(Y=!0):Math.sign(A)===Math.sign(S1)&&(Y=!0),Y?(Q=-A,t1=O,f1=Math.sqrt(C)):(Q=O,t1=A,f1=Math.sqrt(C/2))}return new l1(Q/f1,t1/f1)}const h1=[];for(let V=0,H=N.length,G=H-1,Q=V+1;V<H;V++,G++,Q++)G===H&&(G=0),Q===H&&(Q=0),h1[V]=U(N[V],N[G],N[Q]);const c1=[];let g1,Z=h1.concat();for(let V=0,H=$.length;V<H;V++){const G=$[V];g1=[];for(let Q=0,t1=G.length,f1=t1-1,O=Q+1;Q<t1;Q++,f1++,O++)f1===t1&&(f1=0),O===t1&&(O=0),g1[Q]=U(G[Q],G[f1],G[O]);c1.push(g1),Z=Z.concat(g1)}for(let V=0;V<f;V++){const H=V/f,G=m*Math.cos(H*Math.PI/2),Q=p*Math.sin(H*Math.PI/2)+d;for(let t1=0,f1=N.length;t1<f1;t1++){const O=K(N[t1],h1[t1],Q);w(O.x,O.y,-G)}for(let t1=0,f1=$.length;t1<f1;t1++){const O=$[t1];g1=c1[t1];for(let A=0,x1=O.length;A<x1;A++){const S1=K(O[A],g1[A],Q);w(S1.x,S1.y,-G)}}}const a1=p+d;for(let V=0;V<q1;V++){const H=u?K(D[V],Z[V],a1):D[V];y?(P.copy(b.normals[0]).multiplyScalar(H.x),L.copy(b.binormals[0]).multiplyScalar(H.y),v.copy(g[0]).add(P).add(L),w(v.x,v.y,v.z)):w(H.x,H.y,0)}for(let V=1;V<=c;V++)for(let H=0;H<q1;H++){const G=u?K(D[H],Z[H],a1):D[H];y?(P.copy(b.normals[V]).multiplyScalar(G.x),L.copy(b.binormals[V]).multiplyScalar(G.y),v.copy(g[V]).add(P).add(L),w(v.x,v.y,v.z)):w(G.x,G.y,h/c*V)}for(let V=f-1;V>=0;V--){const H=V/f,G=m*Math.cos(H*Math.PI/2),Q=p*Math.sin(H*Math.PI/2)+d;for(let t1=0,f1=N.length;t1<f1;t1++){const O=K(N[t1],h1[t1],Q);w(O.x,O.y,h+G)}for(let t1=0,f1=$.length;t1<f1;t1++){const O=$[t1];g1=c1[t1];for(let A=0,x1=O.length;A<x1;A++){const S1=K(O[A],g1[A],Q);y?w(S1.x,S1.y+g[c-1].y,g[c-1].x+G):w(S1.x,S1.y,h+G)}}}I(),R();function I(){const V=q.length/3;if(u){let H=0,G=q1*H;for(let Q=0;Q<e1;Q++){const t1=k[Q];X(t1[2]+G,t1[1]+G,t1[0]+G)}H=c+f*2,G=q1*H;for(let Q=0;Q<e1;Q++){const t1=k[Q];X(t1[0]+G,t1[1]+G,t1[2]+G)}}else{for(let H=0;H<e1;H++){const G=k[H];X(G[2],G[1],G[0])}for(let H=0;H<e1;H++){const G=k[H];X(G[0]+q1*c,G[1]+q1*c,G[2]+q1*c)}}n.addGroup(V,q.length/3-V,0)}function R(){const V=q.length/3;let H=0;_(N,H),H+=N.length;for(let G=0,Q=$.length;G<Q;G++){const t1=$[G];_(t1,H),H+=t1.length}n.addGroup(V,q.length/3-V,1)}function _(V,H){let G=V.length;for(;--G>=0;){const Q=G;let t1=G-1;t1<0&&(t1=V.length-1);for(let f1=0,O=c+f*2;f1<O;f1++){const A=q1*f1,x1=q1*(f1+1),S1=H+Q+A,C=H+t1+A,S=H+t1+x1,Y=H+Q+x1;n1(S1,C,S,Y)}}}function w(V,H,G){a.push(V),a.push(H),a.push(G)}function X(V,H,G){z(V),z(H),z(G);const Q=q.length/3,t1=M.generateTopUV(n,q,Q-3,Q-2,Q-1);u1(t1[0]),u1(t1[1]),u1(t1[2])}function n1(V,H,G,Q){z(V),z(H),z(Q),z(H),z(G),z(Q);const t1=q.length/3,f1=M.generateSideWallUV(n,q,t1-6,t1-3,t1-2,t1-1);u1(f1[0]),u1(f1[1]),u1(f1[3]),u1(f1[1]),u1(f1[2]),u1(f1[3])}function z(V){q.push(a[V*3+0]),q.push(a[V*3+1]),q.push(a[V*3+2])}function u1(V){i.push(V.x),i.push(V.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Co(t,n,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}const q=e.options.extrudePath;return q!==void 0&&(e.options.extrudePath=new e8[q.type]().fromJSON(q)),new Be(n,e.options)}}const Ao={generateTopUV:function(s,e,t,n,q){const i=e[t*3],r=e[t*3+1],o=e[n*3],a=e[n*3+1],l=e[q*3],c=e[q*3+1];return[new l1(i,r),new l1(o,a),new l1(l,c)]},generateSideWallUV:function(s,e,t,n,q,i){const r=e[t*3],o=e[t*3+1],a=e[t*3+2],l=e[n*3],c=e[n*3+1],h=e[n*3+2],u=e[q*3],m=e[q*3+1],p=e[q*3+2],d=e[i*3],f=e[i*3+1],x=e[i*3+2];return Math.abs(o-c)<Math.abs(r-l)?[new l1(r,1-a),new l1(l,1-h),new l1(u,1-p),new l1(d,1-x)]:[new l1(o,1-a),new l1(c,1-h),new l1(m,1-p),new l1(f,1-x)]}};function Co(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,q=s.length;n<q;n++){const i=s[n];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class g6 extends w2{constructor(e=new p3([new l1(0,.5),new l1(-.5,-.5),new l1(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],q=[],i=[],r=[];let o=0,a=0;if(Array.isArray(e)===!1)l(e);else for(let c=0;c<e.length;c++)l(e[c]),this.addGroup(o,a,c),o+=a,a=0;this.setIndex(n),this.setAttribute("position",new Q1(q,3)),this.setAttribute("normal",new Q1(i,3)),this.setAttribute("uv",new Q1(r,2));function l(c){const h=q.length/3,u=c.extractPoints(t);let m=u.shape;const p=u.holes;d5.isClockWise(m)===!1&&(m=m.reverse());for(let f=0,x=p.length;f<x;f++){const M=p[f];d5.isClockWise(M)===!0&&(p[f]=M.reverse())}const d=d5.triangulateShape(m,p);for(let f=0,x=p.length;f<x;f++){const M=p[f];m=m.concat(M)}for(let f=0,x=m.length;f<x;f++){const M=m[f];q.push(M.x,M.y,0),i.push(0,0,1),r.push(M.x,M.y)}for(let f=0,x=d.length;f<x;f++){const M=d[f],g=M[0]+h,y=M[1]+h,b=M[2]+h;n.push(g,y,b),a+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Lo(t,e)}static fromJSON(e,t){const n=[];for(let q=0,i=e.shapes.length;q<i;q++){const r=t[e.shapes[q]];n.push(r)}return new g6(n,e.curveSegments)}}function Lo(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const q=s[t];e.shapes.push(q.uuid)}else e.shapes.push(s.uuid);return e}class _6 extends w2{constructor(e=1,t=32,n=16,q=0,i=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:q,phiLength:i,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const a=Math.min(r+o,Math.PI);let l=0;const c=[],h=new F,u=new F,m=[],p=[],d=[],f=[];for(let x=0;x<=n;x++){const M=[],g=x/n;let y=0;x==0&&r==0?y=.5/t:x==n&&a==Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){const L=b/t;h.x=-e*Math.cos(q+L*i)*Math.sin(r+g*o),h.y=e*Math.cos(r+g*o),h.z=e*Math.sin(q+L*i)*Math.sin(r+g*o),p.push(h.x,h.y,h.z),u.copy(h).normalize(),d.push(u.x,u.y,u.z),f.push(L+y,1-g),M.push(l++)}c.push(M)}for(let x=0;x<n;x++)for(let M=0;M<t;M++){const g=c[x][M+1],y=c[x][M],b=c[x+1][M],L=c[x+1][M+1];(x!==0||r>0)&&m.push(g,y,L),(x!==n-1||a<Math.PI)&&m.push(y,b,L)}this.setIndex(m),this.setAttribute("position",new Q1(p,3)),this.setAttribute("normal",new Q1(d,3)),this.setAttribute("uv",new Q1(f,2))}static fromJSON(e){return new _6(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class v2 extends n5{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new F1(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new F1(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=q6,this.normalScale=new l1(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class T3 extends v2{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new l1(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _2(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new F1(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new F1(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new F1(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ro extends n5{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new F1(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new F1(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=q6,this.normalScale=new l1(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=n6,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Po extends h6{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function k5(s,e,t){return i8(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function Me(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function i8(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Io(s){function e(q,i){return s[q]-s[i]}const t=s.length,n=new Array(t);for(let q=0;q!==t;++q)n[q]=q;return n.sort(e),n}function o0(s,e,t){const n=s.length,q=new s.constructor(n);for(let i=0,r=0;r!==n;++i){const o=t[i]*e;for(let a=0;a!==e;++a)q[r++]=s[o+a]}return q}function s8(s,e,t,n){let q=1,i=s[0];for(;i!==void 0&&i[n]===void 0;)i=s[q++];if(i===void 0)return;let r=i[n];if(r!==void 0)if(Array.isArray(r))do r=i[n],r!==void 0&&(e.push(i.time),t.push.apply(t,r)),i=s[q++];while(i!==void 0);else if(r.toArray!==void 0)do r=i[n],r!==void 0&&(e.push(i.time),r.toArray(t,t.length)),i=s[q++];while(i!==void 0);else do r=i[n],r!==void 0&&(e.push(i.time),t.push(r)),i=s[q++];while(i!==void 0)}class j4{constructor(e,t,n,q){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=q!==void 0?q:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,q=t[n],i=t[n-1];n:{e:{let r;t:{q:if(!(e<q)){for(let o=n+2;;){if(q===void 0){if(e<i)break q;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(i=q,q=t[++n],e<q)break e}r=t.length;break t}if(!(e>=i)){const o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(q=i,i=t[--n-1],e>=i)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(q=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(q===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,q)}return this.interpolate_(n,i,e,q)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,q=this.valueSize,i=e*q;for(let r=0;r!==q;++r)t[r]=n[i+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Do extends j4{constructor(e,t,n,q){super(e,t,n,q),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:s7,endingEnd:s7}}intervalChanged_(e,t,n){const q=this.parameterPositions;let i=e-2,r=e+1,o=q[i],a=q[r];if(o===void 0)switch(this.getSettings_().endingStart){case r7:i=e,o=2*t-n;break;case o7:i=q.length-2,o=t+q[i]-q[i+1];break;default:i=e,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case r7:r=e,a=2*n-t;break;case o7:r=1,a=n+q[1]-q[0];break;default:r=e-1,a=t}const l=(n-t)*.5,c=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-n),this._offsetPrev=i*c,this._offsetNext=r*c}interpolate_(e,t,n,q){const i=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,m=this._weightNext,p=(n-t)/(q-t),d=p*p,f=d*p,x=-u*f+2*u*d-u*p,M=(1+u)*f+(-1.5-2*u)*d+(-.5+u)*p+1,g=(-1-m)*f+(1.5+m)*d+.5*p,y=m*f-m*d;for(let b=0;b!==o;++b)i[b]=x*r[c+b]+M*r[l+b]+g*r[a+b]+y*r[h+b];return i}}class No extends j4{constructor(e,t,n,q){super(e,t,n,q)}interpolate_(e,t,n,q){const i=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=(n-t)/(q-t),h=1-c;for(let u=0;u!==o;++u)i[u]=r[l+u]*h+r[a+u]*c;return i}}class Oo extends j4{constructor(e,t,n,q){super(e,t,n,q)}interpolate_(e){return this.copySampleValue_(e-1)}}class x5{constructor(e,t,n,q){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Me(t,this.TimeBufferType),this.values=Me(n,this.ValueBufferType),this.setInterpolation(q||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Me(e.times,Array),values:Me(e.values,Array)};const q=e.getInterpolation();q!==e.DefaultInterpolation&&(n.interpolation=q)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new No(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Do(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case N4:t=this.InterpolantFactoryMethodDiscrete;break;case i4:t=this.InterpolantFactoryMethodLinear;break;case tt:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return N4;case this.InterpolantFactoryMethodLinear:return i4;case this.InterpolantFactoryMethodSmooth:return tt}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,q=t.length;n!==q;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,q=t.length;n!==q;++n)t[n]*=e}return this}trim(e,t){const n=this.times,q=n.length;let i=0,r=q-1;for(;i!==q&&n[i]<e;)++i;for(;r!==-1&&n[r]>t;)--r;if(++r,i!==0||r!==q){i>=r&&(r=Math.max(r,1),i=r-1);const o=this.getValueSize();this.times=k5(n,i,r),this.values=k5(this.values,i*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,q=this.values,i=n.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==i;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(r!==null&&r>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,r),e=!1;break}r=a}if(q!==void 0&&i8(q))for(let o=0,a=q.length;o!==a;++o){const l=q[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=k5(this.times),t=k5(this.values),n=this.getValueSize(),q=this.getInterpolation()===tt,i=e.length-1;let r=1;for(let o=1;o<i;++o){let a=!1;const l=e[o],c=e[o+1];if(l!==c&&(o!==1||l!==e[0]))if(q)a=!0;else{const h=o*n,u=h-n,m=h+n;for(let p=0;p!==n;++p){const d=t[h+p];if(d!==t[u+p]||d!==t[m+p]){a=!0;break}}}if(a){if(o!==r){e[r]=e[o];const h=o*n,u=r*n;for(let m=0;m!==n;++m)t[u+m]=t[h+m]}++r}}if(i>0){e[r]=e[i];for(let o=i*n,a=r*n,l=0;l!==n;++l)t[a+l]=t[o+l];++r}return r!==e.length?(this.times=k5(e,0,r),this.values=k5(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=k5(this.times,0),t=k5(this.values,0),n=this.constructor,q=new n(this.name,e,t);return q.createInterpolant=this.createInterpolant,q}}x5.prototype.TimeBufferType=Float32Array;x5.prototype.ValueBufferType=Float32Array;x5.prototype.DefaultInterpolation=i4;class u4 extends x5{}u4.prototype.ValueTypeName="bool";u4.prototype.ValueBufferType=Array;u4.prototype.DefaultInterpolation=N4;u4.prototype.InterpolantFactoryMethodLinear=void 0;u4.prototype.InterpolantFactoryMethodSmooth=void 0;class r8 extends x5{}r8.prototype.ValueTypeName="color";class G4 extends x5{}G4.prototype.ValueTypeName="number";class Fo extends j4{constructor(e,t,n,q){super(e,t,n,q)}interpolate_(e,t,n,q){const i=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=(n-t)/(q-t);let l=e*o;for(let c=l+o;l!==c;l+=4)$5.slerpFlat(i,0,r,l-o,r,l,a);return i}}class S3 extends x5{InterpolantFactoryMethodLinear(e){return new Fo(this.times,this.values,this.getValueSize(),e)}}S3.prototype.ValueTypeName="quaternion";S3.prototype.DefaultInterpolation=i4;S3.prototype.InterpolantFactoryMethodSmooth=void 0;class f4 extends x5{}f4.prototype.ValueTypeName="string";f4.prototype.ValueBufferType=Array;f4.prototype.DefaultInterpolation=N4;f4.prototype.InterpolantFactoryMethodLinear=void 0;f4.prototype.InterpolantFactoryMethodSmooth=void 0;class V4 extends x5{}V4.prototype.ValueTypeName="vector";class zo{constructor(e,t=-1,n,q=v9){this.name=e,this.tracks=n,this.duration=t,this.blendMode=q,this.uuid=Y2(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,q=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(ko(n[r]).scale(q));const i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){const t=[],n=e.tracks,q={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let i=0,r=n.length;i!==r;++i)t.push(x5.toJSON(n[i]));return q}static CreateFromMorphTargetSequence(e,t,n,q){const i=t.length,r=[];for(let o=0;o<i;o++){let a=[],l=[];a.push((o+i-1)%i,o,(o+1)%i),l.push(0,1,0);const c=Io(a);a=o0(a,1,c),l=o0(l,1,c),!q&&a[0]===0&&(a.push(i),l.push(l[0])),r.push(new G4(".morphTargetInfluences["+t[o].name+"]",a,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const q=e;n=q.geometry&&q.geometry.animations||q.animations}for(let q=0;q<n.length;q++)if(n[q].name===t)return n[q];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const q={},i=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){const l=e[o],c=l.name.match(i);if(c&&c.length>1){const h=c[1];let u=q[h];u||(q[h]=u=[]),u.push(l)}}const r=[];for(const o in q)r.push(this.CreateFromMorphTargetSequence(o,q[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,m,p,d){if(m.length!==0){const f=[],x=[];s8(m,f,x,p),f.length!==0&&d.push(new h(u,f,x))}},q=[],i=e.name||"default",r=e.fps||30,o=e.blendMode;let a=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const u=l[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const m={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let d=0;d<u[p].morphTargets.length;d++)m[u[p].morphTargets[d]]=-1;for(const d in m){const f=[],x=[];for(let M=0;M!==u[p].morphTargets.length;++M){const g=u[p];f.push(g.time),x.push(g.morphTarget===d?1:0)}q.push(new G4(".morphTargetInfluence["+d+"]",f,x))}a=m.length*r}else{const m=".bones["+t[h].name+"]";n(V4,m+".position",u,"pos",q),n(S3,m+".quaternion",u,"rot",q),n(V4,m+".scale",u,"scl",q)}}return q.length===0?null:new this(i,a,q,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,q=e.length;n!==q;++n){const i=this.tracks[n];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Uo(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return G4;case"vector":case"vector2":case"vector3":case"vector4":return V4;case"color":return r8;case"quaternion":return S3;case"bool":case"boolean":return u4;case"string":return f4}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function ko(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Uo(s.type);if(s.times===void 0){const t=[],n=[];s8(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const r4={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Bo{constructor(e,t,n){const q=this;let i=!1,r=0,o=0,a;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){o++,i===!1&&q.onStart!==void 0&&q.onStart(c,r,o),i=!0},this.itemEnd=function(c){r++,q.onProgress!==void 0&&q.onProgress(c,r,o),r===o&&(i=!1,q.onLoad!==void 0&&q.onLoad())},this.itemError=function(c){q.onError!==void 0&&q.onError(c)},this.resolveURL=function(c){return a?a(c):c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){const h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,u=l.length;h<u;h+=2){const m=l[h],p=l[h+1];if(m.global&&(m.lastIndex=0),m.test(c))return p}return null}}}const Go=new Bo;class E3{constructor(e){this.manager=e!==void 0?e:Go,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(q,i){n.load(e,q,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const w5={};class Vo extends Error{constructor(e,t){super(e),this.response=t}}class Ge extends E3{constructor(e){super(e)}load(e,t,n,q){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=r4.get(e);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(w5[e]!==void 0){w5[e].push({onLoad:t,onProgress:n,onError:q});return}w5[e]=[],w5[e].push({onLoad:t,onProgress:n,onError:q});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,a=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const c=w5[e],h=l.body.getReader(),u=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=u?parseInt(u):0,p=m!==0;let d=0;const f=new ReadableStream({start(x){M();function M(){h.read().then(({done:g,value:y})=>{if(g)x.close();else{d+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:p,loaded:d,total:m});for(let L=0,P=c.length;L<P;L++){const v=c[L];v.onProgress&&v.onProgress(b)}x.enqueue(y),M()}})}}});return new Response(f)}else throw new Vo(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(a){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(u);return l.arrayBuffer().then(p=>m.decode(p))}}}).then(l=>{r4.add(e,l);const c=w5[e];delete w5[e];for(let h=0,u=c.length;h<u;h++){const m=c[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{const c=w5[e];if(c===void 0)throw this.manager.itemError(e),l;delete w5[e];for(let h=0,u=c.length;h<u;h++){const m=c[h];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ho extends E3{constructor(e){super(e)}load(e,t,n,q){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,r=r4.get(e);if(r!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(r),i.manager.itemEnd(e)},0),r;const o=z4("img");function a(){c(),r4.add(e,this),t&&t(this),i.manager.itemEnd(e)}function l(h){c(),q&&q(h),i.manager.itemError(e),i.manager.itemEnd(e)}function c(){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",a,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}}class o8 extends E3{constructor(e){super(e)}load(e,t,n,q){const i=new y2,r=new Ho(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){i.image=o,i.needsUpdate=!0,t!==void 0&&t(i)},n,q),i}}class Ve extends s2{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new F1(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Rt=new k1,a0=new F,l0=new F;class v6{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new l1(512,512),this.map=null,this.mapPass=null,this.matrix=new k1,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new r6,this._frameExtents=new l1(1,1),this._viewportCount=1,this._viewports=[new $1(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;a0.setFromMatrixPosition(e.matrixWorld),t.position.copy(a0),l0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(l0),t.updateMatrixWorld(),Rt.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rt),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rt)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wo extends v6{constructor(){super(new R2(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=F4*2*e.angle*this.focus,q=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(n!==t.fov||q!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=q,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class a8 extends Ve{constructor(e,t,n=0,q=Math.PI/3,i=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(s2.DEFAULT_UP),this.updateMatrix(),this.target=new s2,this.distance=n,this.angle=q,this.penumbra=i,this.decay=r,this.map=null,this.shadow=new Wo}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const c0=new k1,b4=new F,Pt=new F;class Xo extends v6{constructor(){super(new R2(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new l1(4,2),this._viewportCount=6,this._viewports=[new $1(2,1,1,1),new $1(0,1,1,1),new $1(3,1,1,1),new $1(1,1,1,1),new $1(3,0,1,1),new $1(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,q=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),b4.setFromMatrixPosition(e.matrixWorld),n.position.copy(b4),Pt.copy(n.position),Pt.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pt),n.updateMatrixWorld(),q.makeTranslation(-b4.x,-b4.y,-b4.z),c0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(c0)}}class y6 extends Ve{constructor(e,t,n=0,q=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=q,this.shadow=new Xo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jo extends v6{constructor(){super(new o6(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yo extends Ve{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(s2.DEFAULT_UP),this.updateMatrix(),this.target=new s2,this.shadow=new jo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jo extends Ve{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yt{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,q=e.length;n<q;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ko extends E3{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,q){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,r=r4.get(e);if(r!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(r),i.manager.itemEnd(e)},0),r;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,Object.assign(i.options,{colorSpaceConversion:"none"}))}).then(function(a){r4.add(e,a),t&&t(a),i.manager.itemEnd(e)}).catch(function(a){q&&q(a),i.manager.itemError(e),i.manager.itemEnd(e)}),i.manager.itemStart(e)}}const M6="\\[\\]\\.:\\/",Zo=new RegExp("["+M6+"]","g"),b6="[^"+M6+"]",$o="[^"+M6.replace("\\.","")+"]",Qo=/((?:WC+[\/:])*)/.source.replace("WC",b6),ea=/(WCOD+)?/.source.replace("WCOD",$o),ta=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",b6),na=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",b6),qa=new RegExp("^"+Qo+ea+ta+na+"$"),ia=["material","materials","bones","map"];class sa{constructor(e,t,n){const q=n||K1.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,q)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,q=this._bindings[n];q!==void 0&&q.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let q=this._targetGroup.nCachedObjects_,i=n.length;q!==i;++q)n[q].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class K1{constructor(e,t,n){this.path=t,this.parsedPath=n||K1.parseTrackName(t),this.node=K1.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new K1.Composite(e,t,n):new K1(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zo,"")}static parseTrackName(e){const t=qa.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},q=n.nodeName&&n.nodeName.lastIndexOf(".");if(q!==void 0&&q!==-1){const i=n.nodeName.substring(q+1);ia.indexOf(i)!==-1&&(n.nodeName=n.nodeName.substring(0,q),n.objectName=i)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(i){for(let r=0;r<i.length;r++){const o=i[r];if(o.name===t||o.uuid===t)return o;const a=n(o.children);if(a)return a}return null},q=n(e.children);if(q)return q}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let q=0,i=n.length;q!==i;++q)e[t++]=n[q]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let q=0,i=n.length;q!==i;++q)n[q]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let q=0,i=n.length;q!==i;++q)n[q]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let q=0,i=n.length;q!==i;++q)n[q]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,q=t.propertyName;let i=t.propertyIndex;if(e||(e=K1.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[q];if(r===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+q+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(i!==void 0){if(q==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[i]!==void 0&&(i=e.morphTargetDictionary[i])}a=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=i}else r.fromArray!==void 0&&r.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(a=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=q;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}K1.Composite=sa;K1.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};K1.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};K1.prototype.GetterByBindingType=[K1.prototype._getValue_direct,K1.prototype._getValue_array,K1.prototype._getValue_arrayElement,K1.prototype._getValue_toArray];K1.prototype.SetterByBindingTypeAndVersioning=[[K1.prototype._setValue_direct,K1.prototype._setValue_direct_setNeedsUpdate,K1.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[K1.prototype._setValue_array,K1.prototype._setValue_array_setNeedsUpdate,K1.prototype._setValue_array_setMatrixWorldNeedsUpdate],[K1.prototype._setValue_arrayElement,K1.prototype._setValue_arrayElement_setNeedsUpdate,K1.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[K1.prototype._setValue_fromArray,K1.prototype._setValue_fromArray_setNeedsUpdate,K1.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ra{constructor(e,t,n=0,q=1/0){this.ray=new Fe(e,t),this.near=n,this.far=q,this.camera=null,this.layers=new s6,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Jt(e,this,n,t),n.sort(h0),n}intersectObjects(e,t=!0,n=[]){for(let q=0,i=e.length;q<i;q++)Jt(e[q],this,n,t);return n.sort(h0),n}}function h0(s,e){return s.distance-e.distance}function Jt(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const q=s.children;for(let i=0,r=q.length;i<r;i++)Jt(q[i],e,t,!0)}}const u0=new l1;class oa{constructor(e=new l1(1/0,1/0),t=new l1(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=u0.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return u0.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class V5{constructor(){this.type="ShapePath",this.color=new F1,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new $3,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,q){return this.currentPath.quadraticCurveTo(e,t,n,q),this}bezierCurveTo(e,t,n,q,i,r){return this.currentPath.bezierCurveTo(e,t,n,q,i,r),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(x){const M=[];for(let g=0,y=x.length;g<y;g++){const b=x[g],L=new p3;L.curves=b.curves,M.push(L)}return M}function n(x,M){const g=M.length;let y=!1;for(let b=g-1,L=0;L<g;b=L++){let P=M[b],v=M[L],T=v.x-P.x,D=v.y-P.y;if(Math.abs(D)>Number.EPSILON){if(D<0&&(P=M[L],T=-T,v=M[b],D=-D),x.y<P.y||x.y>v.y)continue;if(x.y===P.y){if(x.x===P.x)return!0}else{const $=D*(x.x-P.x)-T*(x.y-P.y);if($===0)return!0;if($<0)continue;y=!y}}else{if(x.y!==P.y)continue;if(v.x<=x.x&&x.x<=P.x||P.x<=x.x&&x.x<=v.x)return!0}}return y}const q=d5.isClockWise,i=this.subPaths;if(i.length===0)return[];let r,o,a;const l=[];if(i.length===1)return o=i[0],a=new p3,a.curves=o.curves,l.push(a),l;let c=!q(i[0].getPoints());c=e?!c:c;const h=[],u=[];let m=[],p=0,d;u[p]=void 0,m[p]=[];for(let x=0,M=i.length;x<M;x++)o=i[x],d=o.getPoints(),r=q(d),r=e?!r:r,r?(!c&&u[p]&&p++,u[p]={s:new p3,p:d},u[p].s.curves=o.curves,c&&p++,m[p]=[]):m[p].push({h:o,p:d[0]});if(!u[0])return t(i);if(u.length>1){let x=!1,M=0;for(let g=0,y=u.length;g<y;g++)h[g]=[];for(let g=0,y=u.length;g<y;g++){const b=m[g];for(let L=0;L<b.length;L++){const P=b[L];let v=!0;for(let T=0;T<u.length;T++)n(P.p,u[T].p)&&(g!==T&&M++,v?(v=!1,h[T].push(P)):x=!0);v&&h[g].push(P)}}M>0&&x===!1&&(m=h)}let f;for(let x=0,M=u.length;x<M;x++){a=u[x].s,l.push(a),f=m[x];for(let g=0,y=f.length;g<y;g++)a.holes.push(f[g].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:t6}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=t6);class aa extends E3{constructor(e){super(e)}load(e,t,n,q){const i=this,r=new Ge(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(o){const a=i.parse(JSON.parse(o));t&&t(a)},n,q)}parse(e){return new la(e)}}class la{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],q=ca(e,t,this.data);for(let i=0,r=q.length;i<r;i++)n.push(...q[i].toShapes());return n}}function ca(s,e,t){const n=Array.from(s),q=e/t.resolution,i=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*q,r=[];let o=0,a=0;for(let l=0;l<n.length;l++){const c=n[l];if(c===`
\r
This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is copied below, and is also available with a FAQ at: http://scripts.sil.org/OFL\r
\r
\r
-----------------------------------------------------------\r
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007\r
-----------------------------------------------------------\r
\r
PREAMBLE\r
The goals of the Open Font License (OFL) are to stimulate worldwide development of collaborative font projects, to support the font creation efforts of academic and linguistic communities, and to provide a free and open framework in which fonts may be shared and improved in partnership with others.\r
\r
The OFL allows the licensed fonts to be used, studied, modified and redistributed freely as long as they are not sold by themselves. The fonts, including any derivative works, can be bundled, embedded, redistributed and/or sold with any software provided that any reserved names are not used by derivative works. The fonts and derivatives, however, cannot be released under any other type of license. The requirement for fonts to remain under this license does not apply to any document created using the fonts or their derivatives.\r
\r
DEFINITIONS\r
"Font Software" refers to the set of files released by the Copyright Holder(s) under this license and clearly marked as such. This may include source files, build scripts and documentation.\r
\r
"Reserved Font Name" refers to any names specified as such after the copyright statement(s).\r
\r
"Original Version" refers to the collection of Font Software components as distributed by the Copyright Holder(s).\r
\r
"Modified Version" refers to any derivative made by adding to, deleting, or substituting -- in part or in whole -- any of the components of the Original Version, by changing formats or by porting the Font Software to a new environment.\r
\r
"Author" refers to any designer, engineer, programmer, technical writer or other person who contributed to the Font Software.\r
\r
PERMISSION & CONDITIONS\r
Permission is hereby granted, free of charge, to any person obtaining a copy of the Font Software, to use, study, copy, merge, embed, modify, redistribute, and sell modified and unmodified copies of the Font Software, subject to the following conditions:\r
\r
1) Neither the Font Software nor any of its individual components, in Original or Modified Versions, may be sold by itself.\r
\r
2) Original or Modified Versions of the Font Software may be bundled, redistributed and/or sold with any software, provided that each copy contains the above copyright notice and this license. These can be included either as stand-alone text files, human-readable headers or in the appropriate machine-readable metadata fields within text or binary files as long as those fields can be easily viewed by the user.\r
\r
3) No Modified Version of the Font Software may use the Reserved Font Name(s) unless explicit written permission is granted by the corresponding Copyright Holder. This restriction only applies to the primary font name as presented to the users.\r
\r
4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font Software shall not be used to promote, endorse or advertise any Modified Version, except to acknowledge the contribution(s) of the Copyright Holder(s) and the Author(s) or with their explicit written permission.\r
\r
5) The Font Software, modified or unmodified, in part or in whole, must be distributed entirely under this license, and must not be distributed under any other license. The requirement for fonts to remain under this license does not apply to any document created using the Font Software.\r
\r
TERMINATION\r
This license becomes null and void if any of the above conditions are not met.\r
\r
DISCLAIMER\r
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:"SIL International",font_sub_family_name:"Bold"},x8=-394,g8="Gentilis",_8=1607,v8=100,fa={glyphs:l8,cssFontWeight:c8,ascender:h8,underlinePosition:u8,cssFontStyle:f8,boundingBox:d8,resolution:m8,original_font_information:p8,descender:x8,familyName:g8,lineHeight:_8,underlineThickness:v8},da=Object.freeze(Object.defineProperty({__proto__:null,glyphs:l8,cssFontWeight:c8,ascender:h8,underlinePosition:u8,cssFontStyle:f8,boundingBox:d8,resolution:m8,original_font_information:p8,descender:x8,familyName:g8,lineHeight:_8,underlineThickness:v8,default:fa},Symbol.toStringTag,{value:"Module"}));function f0(s,e){if(e===y9)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===kt||e===R0){let t=s.getIndex();if(t===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,q=[];if(e===kt)for(let r=1;r<=n;r++)q.push(t.getX(0)),q.push(t.getX(r)),q.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(q.push(t.getX(r)),q.push(t.getX(r+1)),q.push(t.getX(r+2))):(q.push(t.getX(r+2)),q.push(t.getX(r+1)),q.push(t.getX(r)));q.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const i=s.clone();return i.setIndex(q),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class ma extends E3{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new va(t)}),this.register(function(t){return new Ea(t)}),this.register(function(t){return new Aa(t)}),this.register(function(t){return new Ma(t)}),this.register(function(t){return new ba(t)}),this.register(function(t){return new Sa(t)}),this.register(function(t){return new wa(t)}),this.register(function(t){return new _a(t)}),this.register(function(t){return new Ta(t)}),this.register(function(t){return new ya(t)}),this.register(function(t){return new xa(t)}),this.register(function(t){return new Ca(t)}),this.register(function(t){return new La(t)})}load(e,t,n,q){const i=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=Yt.extractUrlBase(e),this.manager.itemStart(e);const o=function(l){q?q(l):console.error(l),i.manager.itemError(e),i.manager.itemEnd(e)},a=new Ge(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{i.parse(l,r,function(c){t(c),i.manager.itemEnd(e)},o)}catch(c){o(c)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,q){let i;const r={},o={},a=new TextDecoder;if(typeof e=="string")i=JSON.parse(e);else if(e instanceof ArrayBuffer)if(a.decode(new Uint8Array(e,0,4))===y8){try{r[W1.KHR_BINARY_GLTF]=new Ra(e)}catch(h){q&&q(h);return}i=JSON.parse(r[W1.KHR_BINARY_GLTF].content)}else i=JSON.parse(a.decode(e));else i=e;if(i.asset===void 0||i.asset.version[0]<2){q&&q(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Ha(i,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const h=this.pluginCallbacks[c](l);o[h.name]=h,r[h.name]=!0}if(i.extensionsUsed)for(let c=0;c<i.extensionsUsed.length;++c){const h=i.extensionsUsed[c],u=i.extensionsRequired||[];switch(h){case W1.KHR_MATERIALS_UNLIT:r[h]=new ga;break;case W1.KHR_DRACO_MESH_COMPRESSION:r[h]=new Pa(i,this.dracoLoader);break;case W1.KHR_TEXTURE_TRANSFORM:r[h]=new Ia;break;case W1.KHR_MESH_QUANTIZATION:r[h]=new Da;break;default:u.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,q)}parseAsync(e,t){const n=this;return new Promise(function(q,i){n.parse(e,t,q,i)})}}function pa(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const W1={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class xa{constructor(e){this.parser=e,this.name=W1.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,q=t.length;n<q;n++){const i=t[n];i.extensions&&i.extensions[this.name]&&i.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,i.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let q=t.cache.get(n);if(q)return q;const i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e];let l;const c=new F1(16777215);a.color!==void 0&&c.fromArray(a.color);const h=a.range!==void 0?a.range:0;switch(a.type){case"directional":l=new Yo(c),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new y6(c),l.distance=h;break;case"spot":l=new a8(c),l.distance=h,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,l.angle=a.spot.outerConeAngle,l.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return l.position.set(0,0,0),l.decay=2,W5(l,a),a.intensity!==void 0&&(l.intensity=a.intensity),l.name=t.createUniqueName(a.name||"light_"+e),q=Promise.resolve(l),t.cache.add(n,q),q}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,i=n.json.nodes[e],o=(i.extensions&&i.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(a){return n._getNodeRef(t.cache,o,a)})}}class ga{constructor(){this.name=W1.KHR_MATERIALS_UNLIT}getMaterialType(){return f5}extendParams(e,t,n){const q=[];e.color=new F1(1,1,1),e.opacity=1;const i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){const r=i.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}i.baseColorTexture!==void 0&&q.push(n.assignTexture(e,"map",i.baseColorTexture,J1))}return Promise.all(q)}}class _a{constructor(e){this.parser=e,this.name=W1.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const q=this.parser.json.materials[e];if(!q.extensions||!q.extensions[this.name])return Promise.resolve();const i=q.extensions[this.name].emissiveStrength;return i!==void 0&&(t.emissiveIntensity=i),Promise.resolve()}}class va{constructor(e){this.parser=e,this.name=W1.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:T3}extendMaterialParams(e,t){const n=this.parser,q=n.json.materials[e];if(!q.extensions||!q.extensions[this.name])return Promise.resolve();const i=[],r=q.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(i.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new l1(o,o)}return Promise.all(i)}}class ya{constructor(e){this.parser=e,this.name=W1.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:T3}extendMaterialParams(e,t){const n=this.parser,q=n.json.materials[e];if(!q.extensions||!q.extensions[this.name])return Promise.resolve();const i=[],r=q.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&i.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&i.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(i)}}class Ma{constructor(e){this.parser=e,this.name=W1.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:T3}extendMaterialParams(e,t){const n=this.parser,q=n.json.materials[e];if(!q.extensions||!q.extensions[this.name])return Promise.resolve();const i=[];t.sheenColor=new F1(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=q.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&i.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,J1)),r.sheenRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(i)}}class ba{constructor(e){this.parser=e,this.name=W1.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:T3}extendMaterialParams(e,t){const n=this.parser,q=n.json.materials[e];if(!q.extensions||!q.extensions[this.name])return Promise.resolve();const i=[],r=q.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&i.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(i)}}class Sa{constructor(e){this.parser=e,this.name=W1.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:T3}extendMaterialParams(e,t){const n=this.parser,q=n.json.materials[e];if(!q.extensions||!q.extensions[this.name])return Promise.resolve();const i=[],r=q.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&i.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new F1(o[0],o[1],o[2]),Promise.all(i)}}class wa{constructor(e){this.parser=e,this.name=W1.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:T3}extendMaterialParams(e,t){const q=this.parser.json.materials[e];if(!q.extensions||!q.extensions[this.name])return Promise.resolve();const i=q.extensions[this.name];return t.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}}class Ta{constructor(e){this.parser=e,this.name=W1.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:T3}extendMaterialParams(e,t){const n=this.parser,q=n.json.materials[e];if(!q.extensions||!q.extensions[this.name])return Promise.resolve();const i=[],r=q.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&i.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new F1(o[0],o[1],o[2]),r.specularColorTexture!==void 0&&i.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,J1)),Promise.all(i)}}class Ea{constructor(e){this.parser=e,this.name=W1.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,q=n.textures[e];if(!q.extensions||!q.extensions[this.name])return null;const i=q.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,i.source,r)}}class Aa{constructor(e){this.parser=e,this.name=W1.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,q=n.json,i=q.textures[e];if(!i.extensions||!i.extensions[t])return null;const r=i.extensions[t],o=q.images[r.source];let a=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(a=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,a);if(q.extensionsRequired&&q.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ca{constructor(e){this.name=W1.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const q=n.extensions[this.name],i=this.parser.getDependency("buffer",q.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return i.then(function(o){const a=q.byteOffset||0,l=q.byteLength||0,c=q.count,h=q.byteStride,u=new Uint8Array(o,a,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(c,h,u,q.mode,q.filter).then(function(m){return m.buffer}):r.ready.then(function(){const m=new ArrayBuffer(c*h);return r.decodeGltfBuffer(new Uint8Array(m),c,h,u,q.mode,q.filter),m})})}else return null}}class La{constructor(e){this.name=W1.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const q=t.meshes[n.mesh];for(const l of q.primitives)if(l.mode!==H2.TRIANGLES&&l.mode!==H2.TRIANGLE_STRIP&&l.mode!==H2.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],a={};for(const l in r)o.push(this.parser.getDependency("accessor",r[l]).then(c=>(a[l]=c,a[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const c=l.pop(),h=c.isGroup?c.children:[c],u=l[0].count,m=[];for(const p of h){const d=new k1,f=new F,x=new $5,M=new F(1,1,1),g=new jr(p.geometry,p.material,u);for(let y=0;y<u;y++)a.TRANSLATION&&f.fromBufferAttribute(a.TRANSLATION,y),a.ROTATION&&x.fromBufferAttribute(a.ROTATION,y),a.SCALE&&M.fromBufferAttribute(a.SCALE,y),g.setMatrixAt(y,d.compose(f,x,M));for(const y in a)y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&p.geometry.setAttribute(y,a[y]);s2.prototype.copy.call(g,p),g.frustumCulled=!1,this.parser.assignFinalMaterial(g),m.push(g)}return c.isGroup?(c.clear(),c.add(...m),c):m[0]}))}}const y8="glTF",S4=12,d0={JSON:1313821514,BIN:5130562};class Ra{constructor(e){this.name=W1.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,S4),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==y8)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const q=this.header.length-S4,i=new DataView(e,S4);let r=0;for(;r<q;){const o=i.getUint32(r,!0);r+=4;const a=i.getUint32(r,!0);if(r+=4,a===d0.JSON){const l=new Uint8Array(e,S4+r,o);this.content=n.decode(l)}else if(a===d0.BIN){const l=S4+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Pa{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=W1.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,q=this.dracoLoader,i=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},a={},l={};for(const c in r){const h=Kt[c]||c.toLowerCase();o[h]=r[c]}for(const c in e.attributes){const h=Kt[c]||c.toLowerCase();if(r[c]!==void 0){const u=n.accessors[e.attributes[c]],m=Q3[u.componentType];l[h]=m.name,a[h]=u.normalized===!0}}return t.getDependency("bufferView",i).then(function(c){return new Promise(function(h){q.decodeDracoFile(c,function(u){for(const m in u.attributes){const p=u.attributes[m],d=a[m];d!==void 0&&(p.normalized=d)}h(u)},o,l)})})}}class Ia{constructor(){this.name=W1.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Da{constructor(){this.name=W1.KHR_MESH_QUANTIZATION}}class M8 extends j4{constructor(e,t,n,q){super(e,t,n,q)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,q=this.valueSize,i=e*q*3+q;for(let r=0;r!==q;r++)t[r]=n[i+r];return t}interpolate_(e,t,n,q){const i=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=o*2,l=o*3,c=q-t,h=(n-t)/c,u=h*h,m=u*h,p=e*l,d=p-l,f=-2*m+3*u,x=m-u,M=1-f,g=x-u+h;for(let y=0;y!==o;y++){const b=r[d+y+o],L=r[d+y+a]*c,P=r[p+y+o],v=r[p+y]*c;i[y]=M*b+g*L+f*P+x*v}return i}}const Na=new $5;class Oa extends M8{interpolate_(e,t,n,q){const i=super.interpolate_(e,t,n,q);return Na.fromArray(i).normalize().toArray(i),i}}const H2={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Q3={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},m0={9728:g2,9729:N2,9984:Ut,9985:C0,9986:Ce,9987:g3},p0={33071:W2,33648:Pe,10497:n4},It={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kt={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},B5={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Fa={CUBICSPLINE:void 0,LINEAR:i4,STEP:N4},Dt={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function za(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new v2({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:D5})),s.DefaultMaterial}function w4(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function W5(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ua(s,e,t){let n=!1,q=!1,i=!1;for(let l=0,c=e.length;l<c;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(q=!0),h.COLOR_0!==void 0&&(i=!0),n&&q&&i)break}if(!n&&!q&&!i)return Promise.resolve(s);const r=[],o=[],a=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];if(n){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;r.push(u)}if(q){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(u)}if(i){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;a.push(u)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(a)]).then(function(l){const c=l[0],h=l[1],u=l[2];return n&&(s.morphAttributes.position=c),q&&(s.morphAttributes.normal=h),i&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function ka(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,q=t.length;n<q;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ba(s){const e=s.extensions&&s.extensions[W1.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+x0(e.attributes):t=s.indices+":"+x0(s.attributes)+":"+s.mode,t}function x0(s){let e="";const t=Object.keys(s).sort();for(let n=0,q=t.length;n<q;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Zt(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ga(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Va=new k1;class Ha{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new pa,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,q=!1,i=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,q=navigator.userAgent.indexOf("Firefox")>-1,i=q?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||q&&i<98?this.textureLoader=new o8(this.options.manager):this.textureLoader=new Ko(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ge(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,q=this.json,i=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][q.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:q.asset,parser:n,userData:{}};w4(i,o,q),W5(o,q),Promise.all(n._invokeAll(function(a){return a.afterRoot&&a.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let q=0,i=t.length;q<i;q++){const r=t[q].joints;for(let o=0,a=r.length;o<a;o++)e[r[o]].isBone=!0}for(let q=0,i=e.length;q<i;q++){const r=e[q];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const q=n.clone(),i=(r,o)=>{const a=this.associations.get(r);a!=null&&this.associations.set(o,a);for(const[l,c]of r.children.entries())i(c,o.children[l])};return i(n,q),q.name+="_instance_"+e.uses[t]++,q}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const q=e(t[n]);if(q)return q}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let q=0;q<t.length;q++){const i=e(t[q]);i&&n.push(i)}return n}getDependency(e,t){const n=e+":"+t;let q=this.cache.get(n);if(!q){switch(e){case"scene":q=this.loadScene(t);break;case"node":q=this._invokeOne(function(i){return i.loadNode&&i.loadNode(t)});break;case"mesh":q=this._invokeOne(function(i){return i.loadMesh&&i.loadMesh(t)});break;case"accessor":q=this.loadAccessor(t);break;case"bufferView":q=this._invokeOne(function(i){return i.loadBufferView&&i.loadBufferView(t)});break;case"buffer":q=this.loadBuffer(t);break;case"material":q=this._invokeOne(function(i){return i.loadMaterial&&i.loadMaterial(t)});break;case"texture":q=this._invokeOne(function(i){return i.loadTexture&&i.loadTexture(t)});break;case"skin":q=this.loadSkin(t);break;case"animation":q=this._invokeOne(function(i){return i.loadAnimation&&i.loadAnimation(t)});break;case"camera":q=this.loadCamera(t);break;default:if(q=this._invokeOne(function(i){return i!=this&&i.getDependency&&i.getDependency(e,t)}),!q)throw new Error("Unknown type: "+e);break}this.cache.add(n,q)}return q}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,q=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(q.map(function(i,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[W1.KHR_BINARY_GLTF].body);const q=this.options;return new Promise(function(i,r){n.load(Yt.resolveURL(t.uri,q.path),i,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const q=t.byteLength||0,i=t.byteOffset||0;return n.slice(i,i+q)})}loadAccessor(e){const t=this,n=this.json,q=this.json.accessors[e];if(q.bufferView===void 0&&q.sparse===void 0){const r=It[q.type],o=Q3[q.componentType],a=q.normalized===!0,l=new o(q.count*r);return Promise.resolve(new P2(l,r,a))}const i=[];return q.bufferView!==void 0?i.push(this.getDependency("bufferView",q.bufferView)):i.push(null),q.sparse!==void 0&&(i.push(this.getDependency("bufferView",q.sparse.indices.bufferView)),i.push(this.getDependency("bufferView",q.sparse.values.bufferView))),Promise.all(i).then(function(r){const o=r[0],a=It[q.type],l=Q3[q.componentType],c=l.BYTES_PER_ELEMENT,h=c*a,u=q.byteOffset||0,m=q.bufferView!==void 0?n.bufferViews[q.bufferView].byteStride:void 0,p=q.normalized===!0;let d,f;if(m&&m!==h){const x=Math.floor(u/m),M="InterleavedBuffer:"+q.bufferView+":"+q.componentType+":"+x+":"+q.count;let g=t.cache.get(M);g||(d=new l(o,x*m,q.count*m/c),g=new Br(d,m/c),t.cache.add(M,g)),f=new l6(g,a,u%m/c,p)}else o===null?d=new l(q.count*a):d=new l(o,u,q.count*a),f=new P2(d,a,p);if(q.sparse!==void 0){const x=It.SCALAR,M=Q3[q.sparse.indices.componentType],g=q.sparse.indices.byteOffset||0,y=q.sparse.values.byteOffset||0,b=new M(r[1],g,q.sparse.count*x),L=new l(r[2],y,q.sparse.count*a);o!==null&&(f=new P2(f.array.slice(),f.itemSize,f.normalized));for(let P=0,v=b.length;P<v;P++){const T=b[P];if(f.setX(T,L[P*a]),a>=2&&f.setY(T,L[P*a+1]),a>=3&&f.setZ(T,L[P*a+2]),a>=4&&f.setW(T,L[P*a+3]),a>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e].source,r=t.images[i];let o=this.textureLoader;if(r.uri){const a=n.manager.getHandler(r.uri);a!==null&&(o=a)}return this.loadTextureImage(e,i,o)}loadTextureImage(e,t,n){const q=this,i=this.json,r=i.textures[e],o=i.images[t],a=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[a])return this.textureCache[a];const l=this.loadImageSource(t,n).then(function(c){c.flipY=!1,c.name=r.name||o.name||"";const u=(i.samplers||{})[r.sampler]||{};return c.magFilter=m0[u.magFilter]||N2,c.minFilter=m0[u.minFilter]||g3,c.wrapS=p0[u.wrapS]||n4,c.wrapT=p0[u.wrapT]||n4,q.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[a]=l,l}loadImageSource(e,t){const n=this,q=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const r=q.images[e],o=self.URL||self.webkitURL;let a=r.uri||"",l=!1;if(r.bufferView!==void 0)a=n.getDependency("bufferView",r.bufferView).then(function(h){l=!0;const u=new Blob([h],{type:r.mimeType});return a=o.createObjectURL(u),a});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(a).then(function(h){return new Promise(function(u,m){let p=u;t.isImageBitmapLoader===!0&&(p=function(d){const f=new y2(d);f.needsUpdate=!0,u(f)}),t.load(Yt.resolveURL(h,i.path),p,void 0,m)})}).then(function(h){return l===!0&&o.revokeObjectURL(a),h.userData.mimeType=r.mimeType||Ga(r.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),h});return this.sourceCache[e]=c,c}assignTexture(e,t,n,q){const i=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),i.extensions[W1.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[W1.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const a=i.associations.get(r);r=i.extensions[W1.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),i.associations.set(r,a)}}return q!==void 0&&(r.encoding=q),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const q=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let a=this.cache.get(o);a||(a=new K0,n5.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,a.sizeAttenuation=!1,this.cache.add(o,a)),n=a}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let a=this.cache.get(o);a||(a=new h6,n5.prototype.copy.call(a,n),a.color.copy(n.color),this.cache.add(o,a)),n=a}if(q||i||r){let o="ClonedMaterial:"+n.uuid+":";q&&(o+="derivative-tangents:"),i&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let a=this.cache.get(o);a||(a=n.clone(),i&&(a.vertexColors=!0),r&&(a.flatShading=!0),q&&(a.normalScale&&(a.normalScale.y*=-1),a.clearcoatNormalScale&&(a.clearcoatNormalScale.y*=-1)),this.cache.add(o,a),this.associations.set(a,this.associations.get(n))),n=a}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return v2}loadMaterial(e){const t=this,n=this.json,q=this.extensions,i=n.materials[e];let r;const o={},a=i.extensions||{},l=[];if(a[W1.KHR_MATERIALS_UNLIT]){const h=q[W1.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),l.push(h.extendParams(o,i,t))}else{const h=i.pbrMetallicRoughness||{};if(o.color=new F1(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;o.color.fromArray(u),o.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,J1)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=u5);const c=i.alphaMode||Dt.OPAQUE;if(c===Dt.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,c===Dt.MASK&&(o.alphaTest=i.alphaCutoff!==void 0?i.alphaCutoff:.5)),i.normalTexture!==void 0&&r!==f5&&(l.push(t.assignTexture(o,"normalMap",i.normalTexture)),o.normalScale=new l1(1,1),i.normalTexture.scale!==void 0)){const h=i.normalTexture.scale;o.normalScale.set(h,h)}return i.occlusionTexture!==void 0&&r!==f5&&(l.push(t.assignTexture(o,"aoMap",i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&r!==f5&&(o.emissive=new F1().fromArray(i.emissiveFactor)),i.emissiveTexture!==void 0&&r!==f5&&l.push(t.assignTexture(o,"emissiveMap",i.emissiveTexture,J1)),Promise.all(l).then(function(){const h=new r(o);return i.name&&(h.name=i.name),W5(h,i),t.associations.set(h,{materials:e}),i.extensions&&w4(q,h,i),h})}createUniqueName(e){const t=K1.sanitizeNodeName(e||"");let n=t;for(let q=1;this.nodeNamesUsed[n];++q)n=t+"_"+q;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,q=this.primitiveCache;function i(o){return n[W1.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(a){return g0(a,o,t)})}const r=[];for(let o=0,a=e.length;o<a;o++){const l=e[o],c=Ba(l),h=q[c];if(h)r.push(h.promise);else{let u;l.extensions&&l.extensions[W1.KHR_DRACO_MESH_COMPRESSION]?u=i(l):u=g0(new w2,l,t),q[c]={primitive:l,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,q=this.extensions,i=n.meshes[e],r=i.primitives,o=[];for(let a=0,l=r.length;a<l;a++){const c=r[a].material===void 0?za(this.cache):this.getDependency("material",r[a].material);o.push(c)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(a){const l=a.slice(0,a.length-1),c=a[a.length-1],h=[];for(let m=0,p=c.length;m<p;m++){const d=c[m],f=r[m];let x;const M=l[m];if(f.mode===H2.TRIANGLES||f.mode===H2.TRIANGLE_STRIP||f.mode===H2.TRIANGLE_FAN||f.mode===void 0)x=i.isSkinnedMesh===!0?new Vr(d,M):new N1(d,M),x.isSkinnedMesh===!0&&!x.geometry.attributes.skinWeight.normalized&&x.normalizeSkinWeights(),f.mode===H2.TRIANGLE_STRIP?x.geometry=f0(x.geometry,R0):f.mode===H2.TRIANGLE_FAN&&(x.geometry=f0(x.geometry,kt));else if(f.mode===H2.LINES)x=new Yr(d,M);else if(f.mode===H2.LINE_STRIP)x=new u6(d,M);else if(f.mode===H2.LINE_LOOP)x=new Jr(d,M);else if(f.mode===H2.POINTS)x=new Kr(d,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(x.geometry.morphAttributes).length>0&&ka(x,i),x.name=t.createUniqueName(i.name||"mesh_"+e),W5(x,i),f.extensions&&w4(q,x,f),t.assignFinalMaterial(x),h.push(x)}for(let m=0,p=h.length;m<p;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return h[0];const u=new O2;t.associations.set(u,{meshes:e});for(let m=0,p=h.length;m<p;m++)u.add(h[m]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],q=n[n.type];if(!q){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new R2(U9.radToDeg(q.yfov),q.aspectRatio||1,q.znear||1,q.zfar||2e6):n.type==="orthographic"&&(t=new o6(-q.xmag,q.xmag,q.ymag,-q.ymag,q.znear,q.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),W5(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let q=0,i=t.joints.length;q<i;q++)n.push(this.getDependency("node",t.joints[q]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(q){const i=q.pop(),r=q,o=[],a=[];for(let l=0,c=r.length;l<c;l++){const h=r[l];if(h){o.push(h);const u=new k1;i!==null&&u.fromArray(i.array,l*16),a.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new c6(o,a)})}loadAnimation(e){const n=this.json.animations[e],q=[],i=[],r=[],o=[],a=[];for(let l=0,c=n.channels.length;l<c;l++){const h=n.channels[l],u=n.samplers[h.sampler],m=h.target,p=m.node,d=n.parameters!==void 0?n.parameters[u.input]:u.input,f=n.parameters!==void 0?n.parameters[u.output]:u.output;q.push(this.getDependency("node",p)),i.push(this.getDependency("accessor",d)),r.push(this.getDependency("accessor",f)),o.push(u),a.push(m)}return Promise.all([Promise.all(q),Promise.all(i),Promise.all(r),Promise.all(o),Promise.all(a)]).then(function(l){const c=l[0],h=l[1],u=l[2],m=l[3],p=l[4],d=[];for(let x=0,M=c.length;x<M;x++){const g=c[x],y=h[x],b=u[x],L=m[x],P=p[x];if(g===void 0)continue;g.updateMatrix();let v;switch(B5[P.path]){case B5.weights:v=G4;break;case B5.rotation:v=S3;break;case B5.position:case B5.scale:default:v=V4;break}const T=g.name?g.name:g.uuid,D=L.interpolation!==void 0?Fa[L.interpolation]:i4,$=[];B5[P.path]===B5.weights?g.traverse(function(k){k.morphTargetInfluences&&$.push(k.name?k.name:k.uuid)}):$.push(T);let W=b.array;if(b.normalized){const k=Zt(W.constructor),N=new Float32Array(W.length);for(let K=0,q1=W.length;K<q1;K++)N[K]=W[K]*k;W=N}for(let k=0,N=$.length;k<N;k++){const K=new v($[k]+"."+B5[P.path],y.array,W,D);L.interpolation==="CUBICSPLINE"&&(K.createInterpolant=function(e1){const U=this instanceof S3?Oa:M8;return new U(this.times,this.values,this.getValueSize()/3,e1)},K.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),d.push(K)}}const f=n.name?n.name:"animation_"+e;return new zo(f,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,q=t.nodes[e];return q.mesh===void 0?null:n.getDependency("mesh",q.mesh).then(function(i){const r=n._getNodeRef(n.meshCache,q.mesh,i);return q.weights!==void 0&&r.traverse(function(o){if(!!o.isMesh)for(let a=0,l=q.weights.length;a<l;a++)o.morphTargetInfluences[a]=q.weights[a]}),r})}loadNode(e){const t=this.json,n=this.extensions,q=this,i=t.nodes[e],r=i.name?q.createUniqueName(i.name):"";return function(){const o=[],a=q._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});a&&o.push(a),i.camera!==void 0&&o.push(q.getDependency("camera",i.camera).then(function(u){return q._getNodeRef(q.cameraCache,i.camera,u)})),q._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)});const l=[],c=i.children||[];for(let u=0,m=c.length;u<m;u++)l.push(q.getDependency("node",c[u]));const h=i.skin===void 0?Promise.resolve(null):q.getDependency("skin",i.skin);return Promise.all([Promise.all(o),Promise.all(l),h])}().then(function(o){const a=o[0],l=o[1],c=o[2];let h;if(i.isBone===!0?h=new J0:a.length>1?h=new O2:a.length===1?h=a[0]:h=new s2,h!==a[0])for(let u=0,m=a.length;u<m;u++)h.add(a[u]);if(i.name&&(h.userData.name=i.name,h.name=r),W5(h,i),i.extensions&&w4(n,h,i),i.matrix!==void 0){const u=new k1;u.fromArray(i.matrix),h.applyMatrix4(u)}else i.translation!==void 0&&h.position.fromArray(i.translation),i.rotation!==void 0&&h.quaternion.fromArray(i.rotation),i.scale!==void 0&&h.scale.fromArray(i.scale);q.associations.has(h)||q.associations.set(h,{}),q.associations.get(h).nodes=e,c!==null&&h.traverse(function(u){!u.isSkinnedMesh||u.bind(c,Va)});for(let u=0,m=l.length;u<m;u++)h.add(l[u]);return h})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],q=this,i=new O2;n.name&&(i.name=q.createUniqueName(n.name)),W5(i,n),n.extensions&&w4(t,i,n);const r=n.nodes||[],o=[];for(let a=0,l=r.length;a<l;a++)o.push(q.getDependency("node",r[a]));return Promise.all(o).then(function(a){for(let c=0,h=a.length;c<h;c++)i.add(a[c]);const l=c=>{const h=new Map;for(const[u,m]of q.associations)(u instanceof n5||u instanceof y2)&&h.set(u,m);return c.traverse(u=>{const m=q.associations.get(u);m!=null&&h.set(u,m)}),h};return q.associations=l(i),i})}}function Wa(s,e,t){const n=e.attributes,q=new l4;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],a=o.min,l=o.max;if(a!==void 0&&l!==void 0){if(q.set(new F(a[0],a[1],a[2]),new F(l[0],l[1],l[2])),o.normalized){const c=Zt(Q3[o.componentType]);q.min.multiplyScalar(c),q.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const i=e.targets;if(i!==void 0){const o=new F,a=new F;for(let l=0,c=i.length;l<c;l++){const h=i[l];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],m=u.min,p=u.max;if(m!==void 0&&p!==void 0){if(a.setX(Math.max(Math.abs(m[0]),Math.abs(p[0]))),a.setY(Math.max(Math.abs(m[1]),Math.abs(p[1]))),a.setZ(Math.max(Math.abs(m[2]),Math.abs(p[2]))),u.normalized){const d=Zt(Q3[u.componentType]);a.multiplyScalar(d)}o.max(a)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}q.expandByVector(o)}s.boundingBox=q;const r=new c4;q.getCenter(r.center),r.radius=q.min.distanceTo(q.max)/2,s.boundingSphere=r}function g0(s,e,t){const n=e.attributes,q=[];function i(r,o){return t.getDependency("accessor",r).then(function(a){s.setAttribute(o,a)})}for(const r in n){const o=Kt[r]||r.toLowerCase();o in s.attributes||q.push(i(n[r],o))}if(e.indices!==void 0&&!s.index){const r=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});q.push(r)}return W5(s,e),Wa(s,e,t),Promise.all(q).then(function(){return e.targets!==void 0?Ua(s,e.targets,t):s})}const S2=new kr;var $t=new ra,I2=$t.intersectObjects(S2.children);const Xa=new aa;let ja=Xa.parse(da);const h5=new o8;var u3=window.innerWidth,De=window.innerHeight,Qt=u3/De;const M1=new R2(75,Qt,.1,1e3);u3<750&&(M1.fov=95);const x3=new Y0({canvas:document.querySelector("#bg")});x3.setPixelRatio(window.devicePixelRatio);x3.setSize(u3,De);window.addEventListener("resize",Ya,!1);function Ya(){u3=window.innerWidth,De=window.innerHeight,Qt=u3/De,M1.aspect=Qt,u3<750&&(M1.fov=95),u3>=750&&(M1.fov=75),M1.updateProjectionMatrix(),x3.setSize(window.innerWidth,window.innerHeight)}var Ja=new f5({color:16777215,transparent:!0,opacity:.3}),Ka=new T2(5,5,.5),S6=new N1(Ka,Ja);S6.rotation.x=Math.PI/2;S6.position.y=-.8;const q5=new O2;q5.add(S6);var Ne=new Po({color:13421772}),b8=new T2(1,1,1),Za=[-5,5,0,0],$a=[0,0,-5,5];for(let s=0;s<4;s++){var R5=new N1(b8,Ne);R5.position.set(Za[s]/2,-.5,$a[s]/2),R5.scale.set(5,.05,.05),s<2&&(R5.rotation.y=Math.PI/2),q5.add(R5)}var Y5=.025,_0=[-5+Y5,5-Y5,-5+Y5,5-Y5],v0=[-5+Y5,-5+Y5,5-Y5,5-Y5];for(let s=0;s<4;s++){var R5=new N1(b8,Ne);R5.position.set(_0[s]/2,-.75,v0[s]/2),R5.scale.set(.05,.55,.05),R5.rotation.y=Math.PI,q5.add(R5);var be=new N1(new x6(.2,.2,4,32),Ne);be.position.y=-2.5,be.position.x=_0[s]/2,be.position.z=v0[s]/2,q5.add(be)}var w6=new N1(new T2(5.01,5.01,.1),new f5({color:13421772,transparent:!0,opacity:1}));w6.position.y=-1.01;w6.rotation.x=Math.PI/2;const Qa=new T2(5,5,.1),el=new v2({map:h5.load("./ouluitems/ouluplane.png")}),T6=new N1(Qa,el);T6.position.y=-1;T6.rotation.x=Math.PI/2;q5.add(T6,w6);S2.add(q5);q5.rotation.y=Math.PI;const R1=new N1(new T2(1,1,1),Ne);var H4=10,W4=10,y0=10;const X3=new T2(H4,W4,1),M0=new T2(H4-7,W4,1),tl=new T2(H4,W4-7,1),nl=new T2(4,7,1),D2=[];D2[0]=new v2({color:9994340});D2[1]=new v2({color:85});D2[2]=new v2({map:h5.load("./ouluitems/brickwall.png")});D2[3]=new v2({map:h5.load("./ouluitems/concretewall.png")});D2[4]=new v2({map:h5.load("./ouluitems/concretewall.png")});const Y4=new v2({color:11141290}),m5=new v2({color:0}),A4=[];function Se(s,e,t){const n=new O2;t==2&&n.add(N5.clone()),t==2&&(s=D2[4]);const q=new N1(M0,s);q.position.x+=3.5;const i=new N1(M0,s);i.position.x-=3.5;const r=new N1(tl,s);r.position.y+=3.5;const o=new O2;if(t==0){const a=new N1(nl,Y4);a.position.y-=1.5,a.position.z+=.5,a.position.x-=2,o.add(a);const l=I5(e[0],m5,0,0,0,1,1),c=I5(e[1],m5,0,-.5,0,1,1),h=I5("Aula",m5,0,-.25,0,1,1);l.position.x-=2,c.position.x-=2,h.position.x-=2,h.rotation.y=Math.PI,h.position.z+=1,o.add(l),o.add(c),o.add(h),o.position.x+=2,a.name=e[0],l.name=e[0],c.name=e[0],A4.push(o)}return n.add(q,i,r,o),n}const Q5=new O2;Q5.add(I5("Pohjois-",m5,0,.25,0,1,1));Q5.add(I5("Pohjanmaan",m5,0,-.25,0,1,1));Q5.add(I5("museo",m5,0,-.85,0,1,1));Q5.rotation.y=Math.PI;Q5.position.z-=4.4;Q5.position.y+=1.5;Q5.scale.setScalar(1.8);S2.add(Q5);const J2=new O2;var e3=I5("Liiku klikkamalla",m5,0,.25,0,1,1);e3.name="start";J2.add(e3);var e3=I5("violettia v\xE4ri\xE4.",m5,0,-.25,0,1,1);e3.name="start";J2.add(e3);var e3=I5("Klikkaa ensin t\xE4st\xE4.",m5,0,-.8,0,1,1);e3.name="start";J2.add(e3);var J4=new N1(new X4(5,2.3),Y4),K4=new N1(new X4(5.4,2.6),m5);J4.name="start";K4.name="start";J4.rotation.y=Math.PI;K4.rotation.y=Math.PI;J4.position.y-=.4;K4.position.y-=.45;J4.position.z+=.2;K4.position.z+=.4;J2.add(J4,K4);J2.position.z-=4;J2.position.y-=2;J2.rotation.y=Math.PI;J2.scale.setScalar(1);S2.add(J2);var e2=[];for(let s=0;s<4;s++)e2[s]=new a8(16777215,.6),e2[s].angle=.65,e2[s].position.x=-11,e2[s].position.y=0,S2.add(e2[s]),e2[s].visible=!1;e2[3].position.x=0;e2[3].position.y=3;e2[3].position.z=11;e2[3].angle=.07;var we=new T2(5.2,4.2,1.1),Te=new T2(4.8,3.8,1.11),Ee=new Ro({color:0});var Ae=["./ouluitems/oldhouse2.png","./ouluitems/riverfishing.png","./ouluitems/riverburning.png","./ouluitems/Franzen.png","./ouluitems/oulufinland.png"],i5=new p3;i5.moveTo(-1,-.5);i5.lineTo(-1,.5);i5.lineTo(0,.5);i5.lineTo(0,1);i5.lineTo(.2,1);i5.lineTo(.7,0);i5.lineTo(.2,-1);i5.lineTo(0,-1);i5.lineTo(0,-.5);i5.lineTo(-1,-.5);var ql=new Be(i5,{depth:.8,bevelEnabled:!1}),N5=new N1(ql,Y4);N5.name="Turn90";N5.scale.setScalar(.8);N5.rotation.y=Math.PI;N5.position.x=-3.5;N5.position.z=-0;var We=N5.clone();We.rotation.y=Math.PI;We.position.z+=0;We.position.x+=7;var il=new _6(.5,16,16),w3=new N1(il,Y4);w3.name="Gohere";var C3=new O2,b0=[4,4,4,4,-4,-4,-4,-4],sl=[4.5,4.5,-4.5,-4.5,4.5,4.5,-4.5,-4.5],rl=[4,-4,4,-4,4,-4,4,-4];for(let s=1;s<3;s++){for(let e=0;e<b0.length;e++){var i2=w3.clone();i2.position.x=b0[e]/s+11,i2.position.y=sl[e]/s,s==2&&(i2.position.y=.5),i2.position.z=rl[e]/s,C3.add(i2)}w3.scale.setScalar(.2)}w3.scale.setScalar(.1);var j2=Math.PI/4;for(let s=0;s<360;s+=20){var i2=w3.clone(),K5=4*Math.sin(s*2*Math.PI/180),Z5=1.5*Math.cos(s*2*Math.PI/180);i2.position.y=.5,i2.position.x=K5*Math.cos(j2)-Z5*Math.sin(j2)+11,i2.position.z=K5*Math.sin(j2)+Z5*Math.cos(j2),C3.add(i2)}for(let s=0;s<10;s+=2){var i2=w3.clone(),K5=.5*s-2.5,Z5=.5;i2.position.y=0,i2.position.x=K5*Math.cos(j2)-Z5*Math.sin(j2)+11,i2.position.z=K5*Math.sin(j2)+Z5*Math.cos(j2),C3.add(i2)}for(let s=0;s<10;s+=2){var i2=w3.clone(),K5=.5*s-2.5,Z5=-.5;i2.position.y=0,i2.position.x=K5*Math.cos(j2)-Z5*Math.sin(j2)+11,i2.position.z=K5*Math.sin(j2)+Z5*Math.cos(j2),C3.add(i2)}S2.add(C3);C3.visible=!1;var ol=new p6(.35,15),h2=new N1(ol,Y4);h2.rotation.x=Math.PI/2;h2.rotation.y=Math.PI;h2.position.z=11;h2.position.y=-.5;var e5=h2.clone(),t5=h2.clone();S2.add(h2,e5,t5);h2.visible=!1;e5.visible=!1;t5.visible=!1;h2.position.x+=1;h2.position.z-=.2;h2.name="kirkko";e5.position.x+=.8;e5.position.z-=1.27;e5.name="ainola";t5.position.x+=.3;t5.position.z+=.06;t5.name="ktalo";e2[3].target=h2;const f3=[];for(let s=0;s<4;s++){f3[s]=new O2;const e=new v2({map:h5.load("./ouluitems/floor-texture.png")}),t=new N1(X3,e);if(t.position.y=-W4/2,t.rotation.x=Math.PI/2,s==0||s==2)var C4=Se(D2[s],["Laiva","Toivo"],s);else var C4=new N1(X3,D2[s]);if(C4.position.x=H4/2,C4.rotation.y=Math.PI/2,s==0||s==1)var T5=Se(D2[s],["Oulu","Art"],s);else var T5=new N1(X3,D2[s]);if(s==2){T5.add(new N1(we,Ee));var A3=new v2({map:h5.load(Ae[2])});T5.add(new N1(Te,A3)),T5.add(N5.clone()),e2[0].target=T5}if(T5.position.x=-H4/2,T5.rotation.y=-Math.PI/2,s==0||s==4)var o5=Se(D2[s],["Mini-","Oulu"],s);else var o5=new N1(X3,D2[s]);if(s==2){o5.add(new N1(we,Ee));var A3=new v2({map:h5.load(Ae[1])});o5.add(new N1(Te,A3)),o5.add(N5.clone()),e2[1].target=o5}if(s==3){var i2=new N1(we,Ee);i2.scale.y=2,o5.add(i2);var A3=new v2({map:h5.load(Ae[4])}),S0=new N1(Te,A3);S0.scale.y=2,o5.add(S0)}if(o5.position.z=y0/2,s==-1||s==3)var H5=Se(D2[s],["Mini-","Oulu"],s);else var H5=new N1(X3,D2[s]);if(H5.position.z=-y0/2,s==2){H5.add(new N1(we,Ee));var A3=new v2({map:h5.load(Ae[0])});H5.add(new N1(Te,A3)),H5.add(We.clone()),e2[2].target=H5}const n=new v2({map:h5.load("./ouluitems/ceiling-texture2.png")}),q=new N1(X3,n);q.position.y=W4/2,q.rotation.x=-Math.PI/2,s==0,f3[s].add(t,C4,T5,o5,H5,q),S2.add(f3[s])}f3[1].position.x+=11;f3[2].position.x-=11;f3[3].position.z+=11;q5.position.z+=11;const S8=new y6(16777215,.4);S8.position.set(0,3,0);const o4=new y6(16777215,.6);o4.position.set(11,-1,0);const al=new Jo(16777215,.4);S2.add(al,S8,o4);o4.visible=!1;var ll=1;const L3=new ma;L3.load("ouluitems/toivo_prop3.glb",function(s){R3(s.scene,0)});L3.load("./ouluitems/PositiveSnowflake_sunset_extended.glb",function(s){R3(s.scene,1)});L3.load("./ouluitems/blue2026.glb",function(s){R3(s.scene,2)});L3.load("./ouluitems/tuomio_mesh_cleanup_cut.glb",function(s){R3(s.scene,3)});L3.load("./ouluitems/ainola.glb",function(s){R3(s.scene,4)});L3.load("./ouluitems/Kaup_only.glb",function(s){R3(s.scene,5)});L3.load("./ouluitems/ouluCoat.glb",function(s){R3(s.scene,9)});var D1={};function R3(s,e){if(D1[e]=s,e==0&&(D1[e].scale.setScalar(.32),D1[e].position.y=-1.55,D1[e].position.z+=1,D1[e].position.x+=12,D1[e].rotation.y=Math.PI/4),e==1&&(D1[e].position.x+=10.2,D1[e].scale.setScalar(.85),D1[e].position.y=-4.4,D1[e].rotation.y=Math.PI/4,D1[e].rotation.z=Math.PI,D1[e].position.z-=.8,D1[6]=D1[e].clone(),D1[6].position.z+=1.8,D1[6].position.x+=1.8,S2.add(D1[6])),e==2&&(D1[e].position.z-=0,D1[e].rotation.y=-Math.PI/2,D1[e].position.y+=1.8,D1[e].position.x=15.5),e==3){D1[e].rotation.y=1.3*Math.PI/4,D1[e].position.setZ(.2),D1[e].position.setX(-1.2),D1[e].position.setY(-.98),D1[e].scale.setScalar(.25),q5.add(D1[e]);return}if(e==4){D1[e].rotation.y=2.2*Math.PI/4,D1[e].position.setZ(1.1),D1[e].position.setX(-.8),D1[e].position.setY(-.89),D1[e].scale.setScalar(.18),q5.add(D1[e]);return}if(e==5){D1[e].rotation.y=1.2*Math.PI/4,D1[e].position.setZ(-.1),D1[e].position.setX(-.4),D1[e].position.setY(-.95),D1[e].scale.setScalar(.2),q5.add(D1[e]);return}e==9&&(D1[e].rotation.y=Math.PI,D1[e].position.x-=4.4,D1[e].position.z+=10,D1[e].position.y+=1,D1[e].scale.setScalar(1.4)),S2.add(D1[e])}const cl=new He;function hl(s,e){const t=s.paths;for(let n=0;n<t.length;n++){const q=t[n],i=new f5({color:q.color,side:u5,depthWrite:!1}),r=He.createShapes(q);for(let o=0;o<r.length;o++){const a=r[o],l=new g6(a),c=new N1(l,i);e==0&&(c.scale.setScalar(.003),c.rotation.y=Math.PI,c.position.y-=3.3,c.position.z-=4.2,c.position.x+=1.2),e==1&&(c.scale.setScalar(.009),c.position.z-=4.4,c.position.y-=3.7,c.position.x-=3.2+11),S2.add(c)}}}function e6(s){C3.visible=s}x3.domElement.addEventListener("click",ul);function ul(s){if(!(Q2.length>0)){var e=window.innerWidth,t=window.innerHeight,n=s.clientX/e,q=s.clientY/t,i=new F(n*2-1,-q*2+1,.5);if($t.setFromCamera(i,M1),I2=$t.intersectObjects(S2.children),I2.length>0){if(I2[0].object.name=="start"&&(J2.visible=!1,cl.load("./ouluitems/pp_logo.svg",function(p){hl(p,0)})),J2.visible==!0)return;if(I2[0].object.name.substring(0,8)=="Gohere"&&(e6(!1),s5([M1.position.x,M1.position.y,M1.position.z,I2[0].object.position.x,I2[0].object.position.y,I2[0].object.position.z],10)),I2[0].object.name=="kirkko"){h2.visible=!1,e5.visible=!1,t5.visible=!1;var r=[M1.position.x,M1.position.y,M1.position.z],o=[0,1,15],a=[r[0]+1.5,r[1]-1.7,r[2]-2.9],l=[r[0]+0,r[1]-1.7,r[2]-5],c=[r[0]-1,r[1]-1.7,r[2]-3.3];s5(r.concat(c,l,a,o),40);var h=[R1.position.x,R1.position.y,R1.position.z],u=[M1.position.x+1.1,M1.position.y-1.7,M1.position.z-4.25];r5(h.concat(u,u,u,h))}if(I2[0].object.name=="ainola"){h2.visible=!1,e5.visible=!1,t5.visible=!1;var r=[M1.position.x,M1.position.y,M1.position.z],o=[0,1,15],a=[r[0]+2,r[1]-1.8,r[2]-4.5],l=[r[0]+1.5,r[1]-1.8,r[2]-5],c=[r[0]+1.35,r[1]-1.8,r[2]-5];s5(r.concat(a,l,c,l,a,o),40);var h=[R1.position.x,R1.position.y,R1.position.z],u=[M1.position.x+.5,M1.position.y-1.7,M1.position.z-5.75];r5(h.concat(u,u,u,u,u,h))}if(I2[0].object.name=="ktalo"){h2.visible=!1,e5.visible=!1,t5.visible=!1;var r=[M1.position.x,M1.position.y,M1.position.z],o=[0,1,15],a=[r[0]+1,r[1]-1.8,r[2]-4],l=[r[0]+0,r[1]-1.8,r[2]-4.5],c=[r[0]-.6,r[1]-1.8,r[2]-4.1];s5(r.concat(a,l,c,o),40);var h=[R1.position.x,R1.position.y,R1.position.z],u=[M1.position.x+0,M1.position.y-1.7,M1.position.z-3.5];r5(h.concat(u,u,u,h))}if(I2[0].object.name=="Turn90"){if(e2[0].visible=!1,e2[1].visible=!1,e2[2].visible=!1,R1.position.x==-15)var m=[-11,R1.position.y,-4];if(R1.position.z==4)var m=[-15,R1.position.y,0];if(R1.position.x==-7)var m=[-11,R1.position.y,4];if(R1.position.z==-4)var m=[-7,R1.position.y,0];r5([R1.position.x,R1.position.y,R1.position.z,m[0],m[1],m[2]]);return}I2[0].object.name=="Laiva"&&(M1.position.x>5?(A5=Math.PI/2,r5([R1.position.x,R1.position.y,R1.position.z,0,0,0]),s5([M1.position.x,M1.position.y,M1.position.z,11,1,4,4,-.5,0],10),X5=0,o4.visible=!1,e6(!1)):(r5([R1.position.x,R1.position.y,R1.position.z,11,0,0]),s5([M1.position.x,M1.position.y,M1.position.z,0,0,0,6,1,0,10,1,4,12,3,4],10),X5=2),l5=0),I2[0].object.name=="Oulu"&&(M1.position.x<-5?(A5=-Math.PI/2,r5([R1.position.x,R1.position.y,R1.position.z,0,0,0]),s5([M1.position.x,M1.position.y,M1.position.z,-4,-.5,0],10),X5=0):(r5([R1.position.x,R1.position.y,R1.position.z,-15,0,0]),s5([M1.position.x,M1.position.y,M1.position.z,0,0,0,-11,0,0],10),X5=1),l5=1),I2[0].object.name=="Mini-"&&(M1.position.z>5?(h2.visible=!1,e5.visible=!1,t5.visible=!1,r5([R1.position.x,R1.position.y,R1.position.z,0,0,0]),s5([M1.position.x,M1.position.y,M1.position.z,-3,1,14,-3,1,8,0,-.5,4],10),A5=0,X5=0):(r5([R1.position.x,R1.position.y,R1.position.z,0,-.5,11]),s5([M1.position.x,M1.position.y,M1.position.z,0,0,0,0,1,8,3,1,8,3,1,14,0,1,15],10),X5=3),l5=2)}}}function s5(s,e){var t=[],n=[],q=[];for(let i=0;i<s.length/3-1;i++)for(let r=0;r<=100;r++)t.push(r/100*s[3+3*i]+(100-r)/100*s[0+3*i]),n.push(r/100*s[4+3*i]+(100-r)/100*s[1+3*i]),q.push(r/100*s[5+3*i]+(100-r)/100*s[2+3*i]);t=Nt(t,e),n=Nt(n,e),q=Nt(q,e);for(let i=0;i<t.length;i++)Q2.push(t[i]),Q2.push(n[i]),Q2.push(q[i])}function Nt(s,e){let t=[],n=0,q=0;for(let r=0;r<s.length;r++){n=0,q=0;var i=Math.min(e,r+1,s.length-r+2);for(let o=Math.max(r-i,0);o<Math.min(r+i,s.length);o++)n+=s[o],q++;t.push(n/q)}return t}function r5(s){for(let e=0;e<s.length/3-1;e++)for(let t=0;t<=100;t++)E5.push(t/100*s[3+3*e]+(100-t)/100*s[0+3*e]),E5.push(t/100*s[4+3*e]+(100-t)/100*s[1+3*e]),E5.push(t/100*s[5+3*e]+(100-t)/100*s[2+3*e])}var Q2=[],E5=[],l5=-1,X5=0,A5=0,G5=0;function w8(){requestAnimationFrame(w8),h2.visible==!0?(G5++,G5<40&&(e2[3].target=h2),G5>39&&G5<80&&(e2[3].target=e5),G5>79&&(e2[3].target=t5),G5>119&&(G5=-1),e2[3].visible=!0):(G5=0,e2[3].visible=!1),l5>-1&&A4[l5].rotation.y>-1.5*Math.PI/2&&(A4[l5].rotation.y-=.03);for(let s=0;s<3;s++)A4[s].rotation.y<0&&s!=l5&&(A4[s].rotation.y+=.01,s==0&&o4.visible==!1&&X5==2&&(o4.visible=!0));if(E5.length>0&&(R1.position.x=E5[0],R1.position.y=E5[1],R1.position.z=E5[2],E5.splice(0,3),E5.length<10&&(R1.position.x==-15&&(e2[0].visible=!0),R1.position.x==-11&&R1.position.z==-4&&(e2[2].visible=!0),R1.position.x==-11&&R1.position.z==4&&(e2[1].visible=!0))),Q2.length>0){M1.position.x=Q2[0],M1.position.y=Q2[1],M1.position.z=Q2[2],Q2.splice(0,3),M1.position.x>4.4&&M1.position.x<4.6&&(l5=-1),M1.position.x>-4.6&&M1.position.x<-4.4&&(l5=-1),M1.position.z>4.4&&M1.position.z<4.6&&(l5=-1),M1.position.z>14.6&&M1.position.x<.1&&Q2.length<20&&(h2.visible=!0,e5.visible=!0,t5.visible=!0),M1.position.x>6&&Q2.length<2&&setTimeout(function(){e6(!0)},1e3),M1.lookAt(R1.position),x3.render(S2,M1);return}if(X5==0&&ll==1){A5-=.01,J2.visible==!0&&(A5=0),A5<0&&(A5+=2*Math.PI),M1.position.x=-0+4*Math.sin(A5),M1.position.z=4*Math.cos(A5),M1.position.y=-.5,R1.position.x=-0,R1.position.z=0,M1.lookAt(R1.position),x3.render(S2,M1);return}M1.lookAt(R1.position),x3.render(S2,M1)}w8();function I5(s,e,t,n,q,i,r,o){const a=new ua(s,{font:ja,size:90,height:10,curveSegments:12,bevelEnabled:!0,bevelThickness:2,bevelSize:3,bevelOffset:1,bevelSegments:1});a.computeBoundingBox();const l=-.5*(a.boundingBox.max.x-a.boundingBox.min.x),c=-.5*(a.boundingBox.max.y-a.boundingBox.min.y),h=-.5*(a.boundingBox.max.z-a.boundingBox.min.z);r==1&&a.translate(l,c,h);const u=new N1(a,e);return u.position.set(t,n,q),u.scale.set(.004,.004,.004),u.rotateY(Math.PI/1),i==0&&(u.visible=!1),u}