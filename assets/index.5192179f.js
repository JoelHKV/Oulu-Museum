(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const q of document.querySelectorAll('link[rel="modulepreload"]'))n(q);new MutationObserver(q=>{for(const i of q)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(q){const i={};return q.integrity&&(i.integrity=q.integrity),q.referrerpolicy&&(i.referrerPolicy=q.referrerpolicy),q.crossorigin==="use-credentials"?i.credentials="include":q.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(q){if(q.ep)return;q.ep=!0;const i=t(q);fetch(q.href,i)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nt="149",s8=0,s6=1,r8=2,K7=1,o8=2,u4=3,w5=0,U2=1,s5=2,z5=0,P3=1,r6=2,o6=3,a6=4,a8=5,A3=100,l8=101,c8=102,l6=103,c6=104,h8=200,u8=201,f8=202,d8=203,Z7=204,$7=205,m8=206,p8=207,x8=208,g8=209,_8=210,v8=0,y8=1,M8=2,xt=3,b8=4,S8=5,w8=6,T8=7,Q7=0,E8=1,A8=2,S5=0,C8=1,L8=2,R8=3,P8=4,I8=5,e0=300,U3=301,k3=302,gt=303,_t=304,fe=306,B3=1e3,H2=1001,he=1002,x2=1003,vt=1004,se=1005,P2=1006,t0=1007,n3=1008,q3=1009,D8=1010,N8=1011,n0=1012,O8=1013,Q5=1014,O5=1015,v4=1016,F8=1017,z8=1018,I3=1020,U8=1021,W2=1023,k8=1024,B8=1025,e3=1026,G3=1027,G8=1028,V8=1029,H8=1030,W8=1031,X8=1033,Ae=33776,Ce=33777,Le=33778,Re=33779,h6=35840,u6=35841,f6=35842,d6=35843,j8=36196,m6=37492,p6=37496,x6=37808,g6=37809,_6=37810,v6=37811,y6=37812,M6=37813,b6=37814,S6=37815,w6=37816,T6=37817,E6=37818,A6=37819,C6=37820,L6=37821,Pe=36492,Y8=36283,R6=36284,P6=36285,I6=36286,y4=2300,V3=2301,Ie=2302,D6=2400,N6=2401,O6=2402,J8=2500,K8=0,q0=1,yt=2,i3=3e3,J1=3001,Z8=3200,$8=3201,i0=0,Q8=1,t5="srgb",M4="srgb-linear",De=7680,e9=519,Mt=35044,F6="300 es",bt=1035;class Y3{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const q=this._listeners[e];if(q!==void 0){const i=q.indexOf(t);i!==-1&&q.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const q=n.slice(0);for(let i=0,r=q.length;i<r;i++)q[i].call(this,e);e.target=null}}}const b2=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let z6=1234567;const p4=Math.PI/180,b4=180/Math.PI;function j2(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(b2[s&255]+b2[s>>8&255]+b2[s>>16&255]+b2[s>>24&255]+"-"+b2[e&255]+b2[e>>8&255]+"-"+b2[e>>16&15|64]+b2[e>>24&255]+"-"+b2[t&63|128]+b2[t>>8&255]+"-"+b2[t>>16&255]+b2[t>>24&255]+b2[n&255]+b2[n>>8&255]+b2[n>>16&255]+b2[n>>24&255]).toLowerCase()}function _2(s,e,t){return Math.max(e,Math.min(t,s))}function Ot(s,e){return(s%e+e)%e}function t9(s,e,t,n,q){return n+(s-e)*(q-n)/(t-e)}function n9(s,e,t){return s!==e?(t-s)/(e-s):0}function x4(s,e,t){return(1-t)*s+t*e}function q9(s,e,t,n){return x4(s,e,1-Math.exp(-t*n))}function i9(s,e=1){return e-Math.abs(Ot(s,e*2)-e)}function s9(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function r9(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function o9(s,e){return s+Math.floor(Math.random()*(e-s+1))}function a9(s,e){return s+Math.random()*(e-s)}function l9(s){return s*(.5-Math.random())}function c9(s){s!==void 0&&(z6=s);let e=z6+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function h9(s){return s*p4}function u9(s){return s*b4}function St(s){return(s&s-1)===0&&s!==0}function s0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ue(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function f9(s,e,t,n,q){const i=Math.cos,r=Math.sin,o=i(t/2),a=r(t/2),l=i((e+n)/2),c=r((e+n)/2),h=i((e-n)/2),u=r((e-n)/2),m=i((n-e)/2),p=r((n-e)/2);switch(q){case"XYX":s.set(o*c,a*h,a*u,o*l);break;case"YZY":s.set(a*u,o*c,a*h,o*l);break;case"ZXZ":s.set(a*h,a*u,o*c,o*l);break;case"XZX":s.set(o*c,a*p,a*m,o*l);break;case"YXY":s.set(a*m,o*c,a*p,o*l);break;case"ZYZ":s.set(a*p,a*m,o*c,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+q)}}function M5(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Z1(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var d9=Object.freeze({__proto__:null,DEG2RAD:p4,RAD2DEG:b4,ceilPowerOfTwo:s0,clamp:_2,damp:q9,degToRad:h9,denormalize:M5,euclideanModulo:Ot,floorPowerOfTwo:ue,generateUUID:j2,inverseLerp:n9,isPowerOfTwo:St,lerp:x4,mapLinear:t9,normalize:Z1,pingpong:i9,radToDeg:u9,randFloat:a9,randFloatSpread:l9,randInt:o9,seededRandom:c9,setQuaternionFromProperEuler:f9,smootherstep:r9,smoothstep:s9});class l1{constructor(e=0,t=0){l1.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,q=e.elements;return this.x=q[0]*t+q[3]*n+q[6],this.y=q[1]*t+q[4]*n+q[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),q=Math.sin(t),i=this.x-e.x,r=this.y-e.y;return this.x=i*n-r*q+e.x,this.y=i*q+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class c2{constructor(){c2.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,q,i,r,o,a,l){const c=this.elements;return c[0]=e,c[1]=q,c[2]=o,c[3]=t,c[4]=i,c[5]=a,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,q=t.elements,i=this.elements,r=n[0],o=n[3],a=n[6],l=n[1],c=n[4],h=n[7],u=n[2],m=n[5],p=n[8],d=q[0],f=q[3],x=q[6],M=q[1],g=q[4],v=q[7],b=q[2],L=q[5],R=q[8];return i[0]=r*d+o*M+a*b,i[3]=r*f+o*g+a*L,i[6]=r*x+o*v+a*R,i[1]=l*d+c*M+h*b,i[4]=l*f+c*g+h*L,i[7]=l*x+c*v+h*R,i[2]=u*d+m*M+p*b,i[5]=u*f+m*g+p*L,i[8]=u*x+m*v+p*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],q=e[2],i=e[3],r=e[4],o=e[5],a=e[6],l=e[7],c=e[8];return t*r*c-t*o*l-n*i*c+n*o*a+q*i*l-q*r*a}invert(){const e=this.elements,t=e[0],n=e[1],q=e[2],i=e[3],r=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=c*r-o*l,u=o*a-c*i,m=l*i-r*a,p=t*h+n*u+q*m;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/p;return e[0]=h*d,e[1]=(q*l-c*n)*d,e[2]=(o*n-q*r)*d,e[3]=u*d,e[4]=(c*t-q*a)*d,e[5]=(q*i-o*t)*d,e[6]=m*d,e[7]=(n*a-l*t)*d,e[8]=(r*t-n*i)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,q,i,r,o){const a=Math.cos(i),l=Math.sin(i);return this.set(n*a,n*l,-n*(a*r+l*o)+r+e,-q*l,q*a,-q*(-l*r+a*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ne.makeScale(e,t)),this}rotate(e){return this.premultiply(Ne.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ne.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let q=0;q<9;q++)if(t[q]!==n[q])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ne=new c2;function r0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function S4(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function t3(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function re(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Oe={[t5]:{[M4]:t3},[M4]:{[t5]:re}},T2={legacyMode:!0,get workingColorSpace(){return M4},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Oe[e]&&Oe[e][t]!==void 0){const n=Oe[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},o0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},l2={r:0,g:0,b:0},Y2={h:0,s:0,l:0},P4={h:0,s:0,l:0};function Fe(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function I4(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class O1{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=t5){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,T2.toWorkingColorSpace(this,t),this}setRGB(e,t,n,q=T2.workingColorSpace){return this.r=e,this.g=t,this.b=n,T2.toWorkingColorSpace(this,q),this}setHSL(e,t,n,q=T2.workingColorSpace){if(e=Ot(e,1),t=_2(t,0,1),n=_2(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=Fe(r,i,e+1/3),this.g=Fe(r,i,e),this.b=Fe(r,i,e-1/3)}return T2.toWorkingColorSpace(this,q),this}setStyle(e,t=t5){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let q;if(q=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const r=q[1],o=q[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,T2.toWorkingColorSpace(this,t),n(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,T2.toWorkingColorSpace(this,t),n(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(i[1])/360,l=parseFloat(i[2])/100,c=parseFloat(i[3])/100;return n(i[4]),this.setHSL(a,l,c,t)}break}}else if(q=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=q[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,T2.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,T2.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=t5){const n=o0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=t3(e.r),this.g=t3(e.g),this.b=t3(e.b),this}copyLinearToSRGB(e){return this.r=re(e.r),this.g=re(e.g),this.b=re(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=t5){return T2.fromWorkingColorSpace(I4(this,l2),e),_2(l2.r*255,0,255)<<16^_2(l2.g*255,0,255)<<8^_2(l2.b*255,0,255)<<0}getHexString(e=t5){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=T2.workingColorSpace){T2.fromWorkingColorSpace(I4(this,l2),t);const n=l2.r,q=l2.g,i=l2.b,r=Math.max(n,q,i),o=Math.min(n,q,i);let a,l;const c=(o+r)/2;if(o===r)a=0,l=0;else{const h=r-o;switch(l=c<=.5?h/(r+o):h/(2-r-o),r){case n:a=(q-i)/h+(q<i?6:0);break;case q:a=(i-n)/h+2;break;case i:a=(n-q)/h+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getRGB(e,t=T2.workingColorSpace){return T2.fromWorkingColorSpace(I4(this,l2),t),e.r=l2.r,e.g=l2.g,e.b=l2.b,e}getStyle(e=t5){return T2.fromWorkingColorSpace(I4(this,l2),e),e!==t5?`color(${e} ${l2.r} ${l2.g} ${l2.b})`:`rgb(${l2.r*255|0},${l2.g*255|0},${l2.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Y2),Y2.h+=e,Y2.s+=t,Y2.l+=n,this.setHSL(Y2.h,Y2.s,Y2.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Y2),e.getHSL(P4);const n=x4(Y2.h,P4.h,t),q=x4(Y2.s,P4.s,t),i=x4(Y2.l,P4.l,t);return this.setHSL(n,q,i),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}O1.NAMES=o0;let d3;class a0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{d3===void 0&&(d3=S4("canvas")),d3.width=e.width,d3.height=e.height;const n=d3.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=d3}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=S4("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const q=n.getImageData(0,0,e.width,e.height),i=q.data;for(let r=0;r<i.length;r++)i[r]=t3(i[r]/255)*255;return n.putImageData(q,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(t3(t[n]/255)*255):t[n]=t3(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class l0{constructor(e=null){this.isSource=!0,this.uuid=j2(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},q=this.data;if(q!==null){let i;if(Array.isArray(q)){i=[];for(let r=0,o=q.length;r<o;r++)q[r].isDataTexture?i.push(ze(q[r].image)):i.push(ze(q[r]))}else i=ze(q);n.url=i}return t||(e.images[this.uuid]=n),n}}function ze(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?a0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let m9=0;class y2 extends Y3{constructor(e=y2.DEFAULT_IMAGE,t=y2.DEFAULT_MAPPING,n=H2,q=H2,i=P2,r=n3,o=W2,a=q3,l=y2.DEFAULT_ANISOTROPY,c=i3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m9++}),this.uuid=j2(),this.name="",this.source=new l0(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=q,this.magFilter=i,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new l1(0,0),this.repeat=new l1(1,1),this.center=new l1(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new c2,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==e0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case B3:e.x=e.x-Math.floor(e.x);break;case H2:e.x=e.x<0?0:1;break;case he:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case B3:e.y=e.y-Math.floor(e.y);break;case H2:e.y=e.y<0?0:1;break;case he:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}y2.DEFAULT_IMAGE=null;y2.DEFAULT_MAPPING=e0;y2.DEFAULT_ANISOTROPY=1;class $1{constructor(e=0,t=0,n=0,q=1){$1.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=q}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,q){return this.x=e,this.y=t,this.z=n,this.w=q,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,q=this.z,i=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*q+r[12]*i,this.y=r[1]*t+r[5]*n+r[9]*q+r[13]*i,this.z=r[2]*t+r[6]*n+r[10]*q+r[14]*i,this.w=r[3]*t+r[7]*n+r[11]*q+r[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,q,i;const a=e.elements,l=a[0],c=a[4],h=a[8],u=a[1],m=a[5],p=a[9],d=a[2],f=a[6],x=a[10];if(Math.abs(c-u)<.01&&Math.abs(h-d)<.01&&Math.abs(p-f)<.01){if(Math.abs(c+u)<.1&&Math.abs(h+d)<.1&&Math.abs(p+f)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(l+1)/2,v=(m+1)/2,b=(x+1)/2,L=(c+u)/4,R=(h+d)/4,y=(p+f)/4;return g>v&&g>b?g<.01?(n=0,q=.707106781,i=.707106781):(n=Math.sqrt(g),q=L/n,i=R/n):v>b?v<.01?(n=.707106781,q=0,i=.707106781):(q=Math.sqrt(v),n=L/q,i=y/q):b<.01?(n=.707106781,q=.707106781,i=0):(i=Math.sqrt(b),n=R/i,q=y/i),this.set(n,q,i,t),this}let M=Math.sqrt((f-p)*(f-p)+(h-d)*(h-d)+(u-c)*(u-c));return Math.abs(M)<.001&&(M=1),this.x=(f-p)/M,this.y=(h-d)/M,this.z=(u-c)/M,this.w=Math.acos((l+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class s3 extends Y3{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $1(0,0,e,t),this.scissorTest=!1,this.viewport=new $1(0,0,e,t);const q={width:e,height:t,depth:1};this.texture=new y2(q,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:P2,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new l0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class c0 extends y2{constructor(e=null,t=1,n=1,q=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:q},this.magFilter=x2,this.minFilter=x2,this.wrapR=H2,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class p9 extends y2{constructor(e=null,t=1,n=1,q=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:q},this.magFilter=x2,this.minFilter=x2,this.wrapR=H2,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class U5{constructor(e=0,t=0,n=0,q=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=q}static slerpFlat(e,t,n,q,i,r,o){let a=n[q+0],l=n[q+1],c=n[q+2],h=n[q+3];const u=i[r+0],m=i[r+1],p=i[r+2],d=i[r+3];if(o===0){e[t+0]=a,e[t+1]=l,e[t+2]=c,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=p,e[t+3]=d;return}if(h!==d||a!==u||l!==m||c!==p){let f=1-o;const x=a*u+l*m+c*p+h*d,M=x>=0?1:-1,g=1-x*x;if(g>Number.EPSILON){const b=Math.sqrt(g),L=Math.atan2(b,x*M);f=Math.sin(f*L)/b,o=Math.sin(o*L)/b}const v=o*M;if(a=a*f+u*v,l=l*f+m*v,c=c*f+p*v,h=h*f+d*v,f===1-o){const b=1/Math.sqrt(a*a+l*l+c*c+h*h);a*=b,l*=b,c*=b,h*=b}}e[t]=a,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,q,i,r){const o=n[q],a=n[q+1],l=n[q+2],c=n[q+3],h=i[r],u=i[r+1],m=i[r+2],p=i[r+3];return e[t]=o*p+c*h+a*m-l*u,e[t+1]=a*p+c*u+l*h-o*m,e[t+2]=l*p+c*m+o*u-a*h,e[t+3]=c*p-o*h-a*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,q){return this._x=e,this._y=t,this._z=n,this._w=q,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,q=e._y,i=e._z,r=e._order,o=Math.cos,a=Math.sin,l=o(n/2),c=o(q/2),h=o(i/2),u=a(n/2),m=a(q/2),p=a(i/2);switch(r){case"XYZ":this._x=u*c*h+l*m*p,this._y=l*m*h-u*c*p,this._z=l*c*p+u*m*h,this._w=l*c*h-u*m*p;break;case"YXZ":this._x=u*c*h+l*m*p,this._y=l*m*h-u*c*p,this._z=l*c*p-u*m*h,this._w=l*c*h+u*m*p;break;case"ZXY":this._x=u*c*h-l*m*p,this._y=l*m*h+u*c*p,this._z=l*c*p+u*m*h,this._w=l*c*h-u*m*p;break;case"ZYX":this._x=u*c*h-l*m*p,this._y=l*m*h+u*c*p,this._z=l*c*p-u*m*h,this._w=l*c*h+u*m*p;break;case"YZX":this._x=u*c*h+l*m*p,this._y=l*m*h+u*c*p,this._z=l*c*p-u*m*h,this._w=l*c*h-u*m*p;break;case"XZY":this._x=u*c*h-l*m*p,this._y=l*m*h-u*c*p,this._z=l*c*p+u*m*h,this._w=l*c*h+u*m*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,q=Math.sin(n);return this._x=e.x*q,this._y=e.y*q,this._z=e.z*q,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],q=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10],u=n+o+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(c-a)*m,this._y=(i-l)*m,this._z=(r-q)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(c-a)/m,this._x=.25*m,this._y=(q+r)/m,this._z=(i+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(i-l)/m,this._x=(q+r)/m,this._y=.25*m,this._z=(a+c)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(r-q)/m,this._x=(i+l)/m,this._y=(a+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_2(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const q=Math.min(1,t/n);return this.slerp(e,q),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,q=e._y,i=e._z,r=e._w,o=t._x,a=t._y,l=t._z,c=t._w;return this._x=n*c+r*o+q*l-i*a,this._y=q*c+r*a+i*o-n*l,this._z=i*c+r*l+n*a-q*o,this._w=r*c-n*o-q*a-i*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,q=this._y,i=this._z,r=this._w;let o=r*e._w+n*e._x+q*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=q,this._z=i,this;const a=1-o*o;if(a<=Number.EPSILON){const m=1-t;return this._w=m*r+t*this._w,this._x=m*n+t*this._x,this._y=m*q+t*this._y,this._z=m*i+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(a),c=Math.atan2(l,o),h=Math.sin((1-t)*c)/l,u=Math.sin(t*c)/l;return this._w=r*h+this._w*u,this._x=n*h+this._x*u,this._y=q*h+this._y*u,this._z=i*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),q=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(q),n*Math.sin(i),n*Math.cos(i),t*Math.sin(q))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(U6.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(U6.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,q=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*q,this.y=i[1]*t+i[4]*n+i[7]*q,this.z=i[2]*t+i[5]*n+i[8]*q,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,q=this.z,i=e.elements,r=1/(i[3]*t+i[7]*n+i[11]*q+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*q+i[12])*r,this.y=(i[1]*t+i[5]*n+i[9]*q+i[13])*r,this.z=(i[2]*t+i[6]*n+i[10]*q+i[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,q=this.z,i=e.x,r=e.y,o=e.z,a=e.w,l=a*t+r*q-o*n,c=a*n+o*t-i*q,h=a*q+i*n-r*t,u=-i*t-r*n-o*q;return this.x=l*a+u*-i+c*-o-h*-r,this.y=c*a+u*-r+h*-i-l*-o,this.z=h*a+u*-o+l*-r-c*-i,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,q=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*q,this.y=i[1]*t+i[5]*n+i[9]*q,this.z=i[2]*t+i[6]*n+i[10]*q,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,q=e.y,i=e.z,r=t.x,o=t.y,a=t.z;return this.x=q*a-i*o,this.y=i*r-n*a,this.z=n*o-q*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ue.copy(this).projectOnVector(e),this.sub(Ue)}reflect(e){return this.sub(Ue.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_2(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,q=this.z-e.z;return t*t+n*n+q*q}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const q=Math.sin(t)*e;return this.x=q*Math.sin(n),this.y=Math.cos(t)*e,this.z=q*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),q=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=q,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ue=new F,U6=new U5;class J3{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,q=1/0,i=-1/0,r=-1/0,o=-1/0;for(let a=0,l=e.length;a<l;a+=3){const c=e[a],h=e[a+1],u=e[a+2];c<t&&(t=c),h<n&&(n=h),u<q&&(q=u),c>i&&(i=c),h>r&&(r=h),u>o&&(o=u)}return this.min.set(t,n,q),this.max.set(i,r,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,q=1/0,i=-1/0,r=-1/0,o=-1/0;for(let a=0,l=e.count;a<l;a++){const c=e.getX(a),h=e.getY(a),u=e.getZ(a);c<t&&(t=c),h<n&&(n=h),u<q&&(q=u),c>i&&(i=c),h>r&&(r=h),u>o&&(o=u)}return this.min.set(t,n,q),this.max.set(i,r,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=X5.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const i=n.attributes.position;for(let r=0,o=i.count;r<o;r++)X5.fromBufferAttribute(i,r).applyMatrix4(e.matrixWorld),this.expandByPoint(X5)}else n.boundingBox===null&&n.computeBoundingBox(),ke.copy(n.boundingBox),ke.applyMatrix4(e.matrixWorld),this.union(ke);const q=e.children;for(let i=0,r=q.length;i<r;i++)this.expandByObject(q[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,X5),X5.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(t4),D4.subVectors(this.max,t4),m3.subVectors(e.a,t4),p3.subVectors(e.b,t4),x3.subVectors(e.c,t4),E5.subVectors(p3,m3),A5.subVectors(x3,p3),j5.subVectors(m3,x3);let t=[0,-E5.z,E5.y,0,-A5.z,A5.y,0,-j5.z,j5.y,E5.z,0,-E5.x,A5.z,0,-A5.x,j5.z,0,-j5.x,-E5.y,E5.x,0,-A5.y,A5.x,0,-j5.y,j5.x,0];return!Be(t,m3,p3,x3,D4)||(t=[1,0,0,0,1,0,0,0,1],!Be(t,m3,p3,x3,D4))?!1:(N4.crossVectors(E5,A5),t=[N4.x,N4.y,N4.z],Be(t,m3,p3,x3,D4))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return X5.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(X5).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(f5[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),f5[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),f5[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),f5[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),f5[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),f5[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),f5[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),f5[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(f5),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const f5=[new F,new F,new F,new F,new F,new F,new F,new F],X5=new F,ke=new J3,m3=new F,p3=new F,x3=new F,E5=new F,A5=new F,j5=new F,t4=new F,D4=new F,N4=new F,Y5=new F;function Be(s,e,t,n,q){for(let i=0,r=s.length-3;i<=r;i+=3){Y5.fromArray(s,i);const o=q.x*Math.abs(Y5.x)+q.y*Math.abs(Y5.y)+q.z*Math.abs(Y5.z),a=e.dot(Y5),l=t.dot(Y5),c=n.dot(Y5);if(Math.max(-Math.max(a,l,c),Math.min(a,l,c))>o)return!1}return!0}const x9=new J3,n4=new F,Ge=new F;class K3{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):x9.setFromPoints(e).getCenter(n);let q=0;for(let i=0,r=e.length;i<r;i++)q=Math.max(q,n.distanceToSquared(e[i]));return this.radius=Math.sqrt(q),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;n4.subVectors(e,this.center);const t=n4.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),q=(n-this.radius)*.5;this.center.addScaledVector(n4,q/n),this.radius+=q}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ge.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(n4.copy(e.center).add(Ge)),this.expandByPoint(n4.copy(e.center).sub(Ge))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const d5=new F,Ve=new F,O4=new F,C5=new F,He=new F,F4=new F,We=new F;class de{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,d5)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=d5.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(d5.copy(this.direction).multiplyScalar(t).add(this.origin),d5.distanceToSquared(e))}distanceSqToSegment(e,t,n,q){Ve.copy(e).add(t).multiplyScalar(.5),O4.copy(t).sub(e).normalize(),C5.copy(this.origin).sub(Ve);const i=e.distanceTo(t)*.5,r=-this.direction.dot(O4),o=C5.dot(this.direction),a=-C5.dot(O4),l=C5.lengthSq(),c=Math.abs(1-r*r);let h,u,m,p;if(c>0)if(h=r*a-o,u=r*o-a,p=i*c,h>=0)if(u>=-p)if(u<=p){const d=1/c;h*=d,u*=d,m=h*(h+r*u+2*o)+u*(r*h+u+2*a)+l}else u=i,h=Math.max(0,-(r*u+o)),m=-h*h+u*(u+2*a)+l;else u=-i,h=Math.max(0,-(r*u+o)),m=-h*h+u*(u+2*a)+l;else u<=-p?(h=Math.max(0,-(-r*i+o)),u=h>0?-i:Math.min(Math.max(-i,-a),i),m=-h*h+u*(u+2*a)+l):u<=p?(h=0,u=Math.min(Math.max(-i,-a),i),m=u*(u+2*a)+l):(h=Math.max(0,-(r*i+o)),u=h>0?i:Math.min(Math.max(-i,-a),i),m=-h*h+u*(u+2*a)+l);else u=r>0?-i:i,h=Math.max(0,-(r*u+o)),m=-h*h+u*(u+2*a)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),q&&q.copy(O4).multiplyScalar(u).add(Ve),m}intersectSphere(e,t){d5.subVectors(e.center,this.origin);const n=d5.dot(this.direction),q=d5.dot(d5)-n*n,i=e.radius*e.radius;if(q>i)return null;const r=Math.sqrt(i-q),o=n-r,a=n+r;return o<0&&a<0?null:o<0?this.at(a,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,q,i,r,o,a;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,q=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,q=(e.min.x-u.x)*l),c>=0?(i=(e.min.y-u.y)*c,r=(e.max.y-u.y)*c):(i=(e.max.y-u.y)*c,r=(e.min.y-u.y)*c),n>r||i>q||((i>n||isNaN(n))&&(n=i),(r<q||isNaN(q))&&(q=r),h>=0?(o=(e.min.z-u.z)*h,a=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,a=(e.min.z-u.z)*h),n>a||o>q)||((o>n||n!==n)&&(n=o),(a<q||q!==q)&&(q=a),q<0)?null:this.at(n>=0?n:q,t)}intersectsBox(e){return this.intersectBox(e,d5)!==null}intersectTriangle(e,t,n,q,i){He.subVectors(t,e),F4.subVectors(n,e),We.crossVectors(He,F4);let r=this.direction.dot(We),o;if(r>0){if(q)return null;o=1}else if(r<0)o=-1,r=-r;else return null;C5.subVectors(this.origin,e);const a=o*this.direction.dot(F4.crossVectors(C5,F4));if(a<0)return null;const l=o*this.direction.dot(He.cross(C5));if(l<0||a+l>r)return null;const c=-o*C5.dot(We);return c<0?null:this.at(c/r,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class z1{constructor(){z1.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,q,i,r,o,a,l,c,h,u,m,p,d,f){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=q,x[1]=i,x[5]=r,x[9]=o,x[13]=a,x[2]=l,x[6]=c,x[10]=h,x[14]=u,x[3]=m,x[7]=p,x[11]=d,x[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new z1().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,q=1/g3.setFromMatrixColumn(e,0).length(),i=1/g3.setFromMatrixColumn(e,1).length(),r=1/g3.setFromMatrixColumn(e,2).length();return t[0]=n[0]*q,t[1]=n[1]*q,t[2]=n[2]*q,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,q=e.y,i=e.z,r=Math.cos(n),o=Math.sin(n),a=Math.cos(q),l=Math.sin(q),c=Math.cos(i),h=Math.sin(i);if(e.order==="XYZ"){const u=r*c,m=r*h,p=o*c,d=o*h;t[0]=a*c,t[4]=-a*h,t[8]=l,t[1]=m+p*l,t[5]=u-d*l,t[9]=-o*a,t[2]=d-u*l,t[6]=p+m*l,t[10]=r*a}else if(e.order==="YXZ"){const u=a*c,m=a*h,p=l*c,d=l*h;t[0]=u+d*o,t[4]=p*o-m,t[8]=r*l,t[1]=r*h,t[5]=r*c,t[9]=-o,t[2]=m*o-p,t[6]=d+u*o,t[10]=r*a}else if(e.order==="ZXY"){const u=a*c,m=a*h,p=l*c,d=l*h;t[0]=u-d*o,t[4]=-r*h,t[8]=p+m*o,t[1]=m+p*o,t[5]=r*c,t[9]=d-u*o,t[2]=-r*l,t[6]=o,t[10]=r*a}else if(e.order==="ZYX"){const u=r*c,m=r*h,p=o*c,d=o*h;t[0]=a*c,t[4]=p*l-m,t[8]=u*l+d,t[1]=a*h,t[5]=d*l+u,t[9]=m*l-p,t[2]=-l,t[6]=o*a,t[10]=r*a}else if(e.order==="YZX"){const u=r*a,m=r*l,p=o*a,d=o*l;t[0]=a*c,t[4]=d-u*h,t[8]=p*h+m,t[1]=h,t[5]=r*c,t[9]=-o*c,t[2]=-l*c,t[6]=m*h+p,t[10]=u-d*h}else if(e.order==="XZY"){const u=r*a,m=r*l,p=o*a,d=o*l;t[0]=a*c,t[4]=-h,t[8]=l*c,t[1]=u*h+d,t[5]=r*c,t[9]=m*h-p,t[2]=p*h-m,t[6]=o*c,t[10]=d*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(g9,e,_9)}lookAt(e,t,n){const q=this.elements;return O2.subVectors(e,t),O2.lengthSq()===0&&(O2.z=1),O2.normalize(),L5.crossVectors(n,O2),L5.lengthSq()===0&&(Math.abs(n.z)===1?O2.x+=1e-4:O2.z+=1e-4,O2.normalize(),L5.crossVectors(n,O2)),L5.normalize(),z4.crossVectors(O2,L5),q[0]=L5.x,q[4]=z4.x,q[8]=O2.x,q[1]=L5.y,q[5]=z4.y,q[9]=O2.y,q[2]=L5.z,q[6]=z4.z,q[10]=O2.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,q=t.elements,i=this.elements,r=n[0],o=n[4],a=n[8],l=n[12],c=n[1],h=n[5],u=n[9],m=n[13],p=n[2],d=n[6],f=n[10],x=n[14],M=n[3],g=n[7],v=n[11],b=n[15],L=q[0],R=q[4],y=q[8],T=q[12],D=q[1],$=q[5],W=q[9],k=q[13],N=q[2],K=q[6],q1=q[10],e1=q[14],U=q[3],h1=q[7],c1=q[11],g1=q[15];return i[0]=r*L+o*D+a*N+l*U,i[4]=r*R+o*$+a*K+l*h1,i[8]=r*y+o*W+a*q1+l*c1,i[12]=r*T+o*k+a*e1+l*g1,i[1]=c*L+h*D+u*N+m*U,i[5]=c*R+h*$+u*K+m*h1,i[9]=c*y+h*W+u*q1+m*c1,i[13]=c*T+h*k+u*e1+m*g1,i[2]=p*L+d*D+f*N+x*U,i[6]=p*R+d*$+f*K+x*h1,i[10]=p*y+d*W+f*q1+x*c1,i[14]=p*T+d*k+f*e1+x*g1,i[3]=M*L+g*D+v*N+b*U,i[7]=M*R+g*$+v*K+b*h1,i[11]=M*y+g*W+v*q1+b*c1,i[15]=M*T+g*k+v*e1+b*g1,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],q=e[8],i=e[12],r=e[1],o=e[5],a=e[9],l=e[13],c=e[2],h=e[6],u=e[10],m=e[14],p=e[3],d=e[7],f=e[11],x=e[15];return p*(+i*a*h-q*l*h-i*o*u+n*l*u+q*o*m-n*a*m)+d*(+t*a*m-t*l*u+i*r*u-q*r*m+q*l*c-i*a*c)+f*(+t*l*h-t*o*m-i*r*h+n*r*m+i*o*c-n*l*c)+x*(-q*o*c-t*a*h+t*o*u+q*r*h-n*r*u+n*a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const q=this.elements;return e.isVector3?(q[12]=e.x,q[13]=e.y,q[14]=e.z):(q[12]=e,q[13]=t,q[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],q=e[2],i=e[3],r=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=e[9],u=e[10],m=e[11],p=e[12],d=e[13],f=e[14],x=e[15],M=h*f*l-d*u*l+d*a*m-o*f*m-h*a*x+o*u*x,g=p*u*l-c*f*l-p*a*m+r*f*m+c*a*x-r*u*x,v=c*d*l-p*h*l+p*o*m-r*d*m-c*o*x+r*h*x,b=p*h*a-c*d*a-p*o*u+r*d*u+c*o*f-r*h*f,L=t*M+n*g+q*v+i*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return e[0]=M*R,e[1]=(d*u*i-h*f*i-d*q*m+n*f*m+h*q*x-n*u*x)*R,e[2]=(o*f*i-d*a*i+d*q*l-n*f*l-o*q*x+n*a*x)*R,e[3]=(h*a*i-o*u*i-h*q*l+n*u*l+o*q*m-n*a*m)*R,e[4]=g*R,e[5]=(c*f*i-p*u*i+p*q*m-t*f*m-c*q*x+t*u*x)*R,e[6]=(p*a*i-r*f*i-p*q*l+t*f*l+r*q*x-t*a*x)*R,e[7]=(r*u*i-c*a*i+c*q*l-t*u*l-r*q*m+t*a*m)*R,e[8]=v*R,e[9]=(p*h*i-c*d*i-p*n*m+t*d*m+c*n*x-t*h*x)*R,e[10]=(r*d*i-p*o*i+p*n*l-t*d*l-r*n*x+t*o*x)*R,e[11]=(c*o*i-r*h*i-c*n*l+t*h*l+r*n*m-t*o*m)*R,e[12]=b*R,e[13]=(c*d*q-p*h*q+p*n*u-t*d*u-c*n*f+t*h*f)*R,e[14]=(p*o*q-r*d*q-p*n*a+t*d*a+r*n*f-t*o*f)*R,e[15]=(r*h*q-c*o*q+c*n*a-t*h*a-r*n*u+t*o*u)*R,this}scale(e){const t=this.elements,n=e.x,q=e.y,i=e.z;return t[0]*=n,t[4]*=q,t[8]*=i,t[1]*=n,t[5]*=q,t[9]*=i,t[2]*=n,t[6]*=q,t[10]*=i,t[3]*=n,t[7]*=q,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],q=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,q))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),q=Math.sin(t),i=1-n,r=e.x,o=e.y,a=e.z,l=i*r,c=i*o;return this.set(l*r+n,l*o-q*a,l*a+q*o,0,l*o+q*a,c*o+n,c*a-q*r,0,l*a-q*o,c*a+q*r,i*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,q,i,r){return this.set(1,n,i,0,e,1,r,0,t,q,1,0,0,0,0,1),this}compose(e,t,n){const q=this.elements,i=t._x,r=t._y,o=t._z,a=t._w,l=i+i,c=r+r,h=o+o,u=i*l,m=i*c,p=i*h,d=r*c,f=r*h,x=o*h,M=a*l,g=a*c,v=a*h,b=n.x,L=n.y,R=n.z;return q[0]=(1-(d+x))*b,q[1]=(m+v)*b,q[2]=(p-g)*b,q[3]=0,q[4]=(m-v)*L,q[5]=(1-(u+x))*L,q[6]=(f+M)*L,q[7]=0,q[8]=(p+g)*R,q[9]=(f-M)*R,q[10]=(1-(u+d))*R,q[11]=0,q[12]=e.x,q[13]=e.y,q[14]=e.z,q[15]=1,this}decompose(e,t,n){const q=this.elements;let i=g3.set(q[0],q[1],q[2]).length();const r=g3.set(q[4],q[5],q[6]).length(),o=g3.set(q[8],q[9],q[10]).length();this.determinant()<0&&(i=-i),e.x=q[12],e.y=q[13],e.z=q[14],J2.copy(this);const l=1/i,c=1/r,h=1/o;return J2.elements[0]*=l,J2.elements[1]*=l,J2.elements[2]*=l,J2.elements[4]*=c,J2.elements[5]*=c,J2.elements[6]*=c,J2.elements[8]*=h,J2.elements[9]*=h,J2.elements[10]*=h,t.setFromRotationMatrix(J2),n.x=i,n.y=r,n.z=o,this}makePerspective(e,t,n,q,i,r){const o=this.elements,a=2*i/(t-e),l=2*i/(n-q),c=(t+e)/(t-e),h=(n+q)/(n-q),u=-(r+i)/(r-i),m=-2*r*i/(r-i);return o[0]=a,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,q,i,r){const o=this.elements,a=1/(t-e),l=1/(n-q),c=1/(r-i),h=(t+e)*a,u=(n+q)*l,m=(r+i)*c;return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*c,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let q=0;q<16;q++)if(t[q]!==n[q])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const g3=new F,J2=new z1,g9=new F(0,0,0),_9=new F(1,1,1),L5=new F,z4=new F,O2=new F,k6=new z1,B6=new U5;class me{constructor(e=0,t=0,n=0,q=me.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=q}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,q=this._order){return this._x=e,this._y=t,this._z=n,this._order=q,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const q=e.elements,i=q[0],r=q[4],o=q[8],a=q[1],l=q[5],c=q[9],h=q[2],u=q[6],m=q[10];switch(t){case"XYZ":this._y=Math.asin(_2(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-r,i)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_2(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-h,i),this._z=0);break;case"ZXY":this._x=Math.asin(_2(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(a,i));break;case"ZYX":this._y=Math.asin(-_2(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(a,i)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(_2(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,i)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-_2(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return k6.makeRotationFromQuaternion(e),this.setFromRotationMatrix(k6,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return B6.setFromEuler(this),this.setFromQuaternion(B6,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}me.DEFAULT_ORDER="XYZ";class Ft{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v9=0;const G6=new F,_3=new U5,m5=new z1,U4=new F,q4=new F,y9=new F,M9=new U5,V6=new F(1,0,0),H6=new F(0,1,0),W6=new F(0,0,1),b9={type:"added"},X6={type:"removed"};class i2 extends Y3{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v9++}),this.uuid=j2(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i2.DEFAULT_UP.clone();const e=new F,t=new me,n=new U5,q=new F(1,1,1);function i(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(i),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:q},modelViewMatrix:{value:new z1},normalMatrix:{value:new c2}}),this.matrix=new z1,this.matrixWorld=new z1,this.matrixAutoUpdate=i2.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=i2.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ft,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _3.setFromAxisAngle(e,t),this.quaternion.multiply(_3),this}rotateOnWorldAxis(e,t){return _3.setFromAxisAngle(e,t),this.quaternion.premultiply(_3),this}rotateX(e){return this.rotateOnAxis(V6,e)}rotateY(e){return this.rotateOnAxis(H6,e)}rotateZ(e){return this.rotateOnAxis(W6,e)}translateOnAxis(e,t){return G6.copy(e).applyQuaternion(this.quaternion),this.position.add(G6.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(V6,e)}translateY(e){return this.translateOnAxis(H6,e)}translateZ(e){return this.translateOnAxis(W6,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(m5.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?U4.copy(e):U4.set(e,t,n);const q=this.parent;this.updateWorldMatrix(!0,!1),q4.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?m5.lookAt(q4,U4,this.up):m5.lookAt(U4,q4,this.up),this.quaternion.setFromRotationMatrix(m5),q&&(m5.extractRotation(q.matrixWorld),_3.setFromRotationMatrix(m5),this.quaternion.premultiply(_3.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(b9)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(X6)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(X6)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),m5.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),m5.multiply(e.parent.matrixWorld)),e.applyMatrix4(m5),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,q=this.children.length;n<q;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let q=0,i=this.children.length;q<i;q++){const r=this.children[q].getObjectsByProperty(e,t);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(q4,e,y9),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(q4,M9,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,q=t.length;n<q;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,q=t.length;n<q;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,q=t.length;n<q;n++){const i=t[n];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const q=this.children;for(let i=0,r=q.length;i<r;i++){const o=q[i];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const q={};q.uuid=this.uuid,q.type=this.type,this.name!==""&&(q.name=this.name),this.castShadow===!0&&(q.castShadow=!0),this.receiveShadow===!0&&(q.receiveShadow=!0),this.visible===!1&&(q.visible=!1),this.frustumCulled===!1&&(q.frustumCulled=!1),this.renderOrder!==0&&(q.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(q.userData=this.userData),q.layers=this.layers.mask,q.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(q.matrixAutoUpdate=!1),this.isInstancedMesh&&(q.type="InstancedMesh",q.count=this.count,q.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(q.instanceColor=this.instanceColor.toJSON()));function i(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?q.background=this.background.toJSON():this.background.isTexture&&(q.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(q.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){q.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){const h=a[l];i(e.shapes,h)}else i(e.shapes,a)}}if(this.isSkinnedMesh&&(q.bindMode=this.bindMode,q.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),q.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(i(e.materials,this.material[a]));q.material=o}else q.material=i(e.materials,this.material);if(this.children.length>0){q.children=[];for(let o=0;o<this.children.length;o++)q.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){q.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];q.animations.push(i(e.animations,a))}}if(t){const o=r(e.geometries),a=r(e.materials),l=r(e.textures),c=r(e.images),h=r(e.shapes),u=r(e.skeletons),m=r(e.animations),p=r(e.nodes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),p.length>0&&(n.nodes=p)}return n.object=q,n;function r(o){const a=[];for(const l in o){const c=o[l];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const q=e.children[n];this.add(q.clone())}return this}}i2.DEFAULT_UP=new F(0,1,0);i2.DEFAULT_MATRIX_AUTO_UPDATE=!0;i2.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const K2=new F,p5=new F,Xe=new F,x5=new F,v3=new F,y3=new F,j6=new F,je=new F,Ye=new F,Je=new F;class y5{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,q){q.subVectors(n,t),K2.subVectors(e,t),q.cross(K2);const i=q.lengthSq();return i>0?q.multiplyScalar(1/Math.sqrt(i)):q.set(0,0,0)}static getBarycoord(e,t,n,q,i){K2.subVectors(q,t),p5.subVectors(n,t),Xe.subVectors(e,t);const r=K2.dot(K2),o=K2.dot(p5),a=K2.dot(Xe),l=p5.dot(p5),c=p5.dot(Xe),h=r*l-o*o;if(h===0)return i.set(-2,-1,-1);const u=1/h,m=(l*a-o*c)*u,p=(r*c-o*a)*u;return i.set(1-m-p,p,m)}static containsPoint(e,t,n,q){return this.getBarycoord(e,t,n,q,x5),x5.x>=0&&x5.y>=0&&x5.x+x5.y<=1}static getUV(e,t,n,q,i,r,o,a){return this.getBarycoord(e,t,n,q,x5),a.set(0,0),a.addScaledVector(i,x5.x),a.addScaledVector(r,x5.y),a.addScaledVector(o,x5.z),a}static isFrontFacing(e,t,n,q){return K2.subVectors(n,t),p5.subVectors(e,t),K2.cross(p5).dot(q)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,q){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[q]),this}setFromAttributeAndIndices(e,t,n,q){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,q),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return K2.subVectors(this.c,this.b),p5.subVectors(this.a,this.b),K2.cross(p5).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return y5.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return y5.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,q,i){return y5.getUV(e,this.a,this.b,this.c,t,n,q,i)}containsPoint(e){return y5.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return y5.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,q=this.b,i=this.c;let r,o;v3.subVectors(q,n),y3.subVectors(i,n),je.subVectors(e,n);const a=v3.dot(je),l=y3.dot(je);if(a<=0&&l<=0)return t.copy(n);Ye.subVectors(e,q);const c=v3.dot(Ye),h=y3.dot(Ye);if(c>=0&&h<=c)return t.copy(q);const u=a*h-c*l;if(u<=0&&a>=0&&c<=0)return r=a/(a-c),t.copy(n).addScaledVector(v3,r);Je.subVectors(e,i);const m=v3.dot(Je),p=y3.dot(Je);if(p>=0&&m<=p)return t.copy(i);const d=m*l-a*p;if(d<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(y3,o);const f=c*p-m*h;if(f<=0&&h-c>=0&&m-p>=0)return j6.subVectors(i,q),o=(h-c)/(h-c+(m-p)),t.copy(q).addScaledVector(j6,o);const x=1/(f+d+u);return r=d*x,o=u*x,t.copy(n).addScaledVector(v3,r).addScaledVector(y3,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let S9=0;class o5 extends Y3{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S9++}),this.uuid=j2(),this.name="",this.type="Material",this.blending=P3,this.side=w5,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Z7,this.blendDst=$7,this.blendEquation=A3,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xt,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e9,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=De,this.stencilZFail=De,this.stencilZPass=De,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const q=this[t];if(q===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}q&&q.isColor?q.set(n):q&&q.isVector3&&n&&n.isVector3?q.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==P3&&(n.blending=this.blending),this.side!==w5&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function q(i){const r=[];for(const o in i){const a=i[o];delete a.metadata,r.push(a)}return r}if(t){const i=q(e.textures),r=q(e.images);i.length>0&&(n.textures=i),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const q=t.length;n=new Array(q);for(let i=0;i!==q;++i)n[i]=t[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class r5 extends o5{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new O1(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Q7,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const a2=new F,k4=new l1;class L2{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mt,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let q=0,i=this.itemSize;q<i;q++)this.array[e+q]=t.array[n+q];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)k4.fromBufferAttribute(this,t),k4.applyMatrix3(e),this.setXY(t,k4.x,k4.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)a2.fromBufferAttribute(this,t),a2.applyMatrix3(e),this.setXYZ(t,a2.x,a2.y,a2.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)a2.fromBufferAttribute(this,t),a2.applyMatrix4(e),this.setXYZ(t,a2.x,a2.y,a2.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)a2.fromBufferAttribute(this,t),a2.applyNormalMatrix(e),this.setXYZ(t,a2.x,a2.y,a2.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)a2.fromBufferAttribute(this,t),a2.transformDirection(e),this.setXYZ(t,a2.x,a2.y,a2.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=M5(t,this.array)),t}setX(e,t){return this.normalized&&(t=Z1(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=M5(t,this.array)),t}setY(e,t){return this.normalized&&(t=Z1(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=M5(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Z1(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=M5(t,this.array)),t}setW(e,t){return this.normalized&&(t=Z1(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Z1(t,this.array),n=Z1(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,q){return e*=this.itemSize,this.normalized&&(t=Z1(t,this.array),n=Z1(n,this.array),q=Z1(q,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=q,this}setXYZW(e,t,n,q,i){return e*=this.itemSize,this.normalized&&(t=Z1(t,this.array),n=Z1(n,this.array),q=Z1(q,this.array),i=Z1(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=q,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mt&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class h0 extends L2{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class u0 extends L2{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Q1 extends L2{constructor(e,t,n){super(new Float32Array(e),t,n)}}let w9=0;const G2=new z1,Ke=new i2,M3=new F,F2=new J3,i4=new J3,p2=new F;class S2 extends Y3{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w9++}),this.uuid=j2(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(r0(e)?u0:h0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new c2().getNormalMatrix(e);n.applyNormalMatrix(i),n.needsUpdate=!0}const q=this.attributes.tangent;return q!==void 0&&(q.transformDirection(e),q.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return G2.makeRotationFromQuaternion(e),this.applyMatrix4(G2),this}rotateX(e){return G2.makeRotationX(e),this.applyMatrix4(G2),this}rotateY(e){return G2.makeRotationY(e),this.applyMatrix4(G2),this}rotateZ(e){return G2.makeRotationZ(e),this.applyMatrix4(G2),this}translate(e,t,n){return G2.makeTranslation(e,t,n),this.applyMatrix4(G2),this}scale(e,t,n){return G2.makeScale(e,t,n),this.applyMatrix4(G2),this}lookAt(e){return Ke.lookAt(e),Ke.updateMatrix(),this.applyMatrix4(Ke.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(M3).negate(),this.translate(M3.x,M3.y,M3.z),this}setFromPoints(e){const t=[];for(let n=0,q=e.length;n<q;n++){const i=e[n];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new Q1(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new J3);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,q=t.length;n<q;n++){const i=t[n];F2.setFromBufferAttribute(i),this.morphTargetsRelative?(p2.addVectors(this.boundingBox.min,F2.min),this.boundingBox.expandByPoint(p2),p2.addVectors(this.boundingBox.max,F2.max),this.boundingBox.expandByPoint(p2)):(this.boundingBox.expandByPoint(F2.min),this.boundingBox.expandByPoint(F2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new K3);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(F2.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];i4.setFromBufferAttribute(o),this.morphTargetsRelative?(p2.addVectors(F2.min,i4.min),F2.expandByPoint(p2),p2.addVectors(F2.max,i4.max),F2.expandByPoint(p2)):(F2.expandByPoint(i4.min),F2.expandByPoint(i4.max))}F2.getCenter(n);let q=0;for(let i=0,r=e.count;i<r;i++)p2.fromBufferAttribute(e,i),q=Math.max(q,n.distanceToSquared(p2));if(t)for(let i=0,r=t.length;i<r;i++){const o=t[i],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)p2.fromBufferAttribute(o,l),a&&(M3.fromBufferAttribute(e,l),p2.add(M3)),q=Math.max(q,n.distanceToSquared(p2))}this.boundingSphere.radius=Math.sqrt(q),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,q=t.position.array,i=t.normal.array,r=t.uv.array,o=q.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new L2(new Float32Array(4*o),4));const a=this.getAttribute("tangent").array,l=[],c=[];for(let D=0;D<o;D++)l[D]=new F,c[D]=new F;const h=new F,u=new F,m=new F,p=new l1,d=new l1,f=new l1,x=new F,M=new F;function g(D,$,W){h.fromArray(q,D*3),u.fromArray(q,$*3),m.fromArray(q,W*3),p.fromArray(r,D*2),d.fromArray(r,$*2),f.fromArray(r,W*2),u.sub(h),m.sub(h),d.sub(p),f.sub(p);const k=1/(d.x*f.y-f.x*d.y);!isFinite(k)||(x.copy(u).multiplyScalar(f.y).addScaledVector(m,-d.y).multiplyScalar(k),M.copy(m).multiplyScalar(d.x).addScaledVector(u,-f.x).multiplyScalar(k),l[D].add(x),l[$].add(x),l[W].add(x),c[D].add(M),c[$].add(M),c[W].add(M))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let D=0,$=v.length;D<$;++D){const W=v[D],k=W.start,N=W.count;for(let K=k,q1=k+N;K<q1;K+=3)g(n[K+0],n[K+1],n[K+2])}const b=new F,L=new F,R=new F,y=new F;function T(D){R.fromArray(i,D*3),y.copy(R);const $=l[D];b.copy($),b.sub(R.multiplyScalar(R.dot($))).normalize(),L.crossVectors(y,$);const k=L.dot(c[D])<0?-1:1;a[D*4]=b.x,a[D*4+1]=b.y,a[D*4+2]=b.z,a[D*4+3]=k}for(let D=0,$=v.length;D<$;++D){const W=v[D],k=W.start,N=W.count;for(let K=k,q1=k+N;K<q1;K+=3)T(n[K+0]),T(n[K+1]),T(n[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new L2(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const q=new F,i=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F;if(e)for(let u=0,m=e.count;u<m;u+=3){const p=e.getX(u+0),d=e.getX(u+1),f=e.getX(u+2);q.fromBufferAttribute(t,p),i.fromBufferAttribute(t,d),r.fromBufferAttribute(t,f),c.subVectors(r,i),h.subVectors(q,i),c.cross(h),o.fromBufferAttribute(n,p),a.fromBufferAttribute(n,d),l.fromBufferAttribute(n,f),o.add(c),a.add(c),l.add(c),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(d,a.x,a.y,a.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)q.fromBufferAttribute(t,u+0),i.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),c.subVectors(r,i),h.subVectors(q,i),c.cross(h),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)p2.fromBufferAttribute(e,t),p2.normalize(),e.setXYZ(t,p2.x,p2.y,p2.z)}toNonIndexed(){function e(o,a){const l=o.array,c=o.itemSize,h=o.normalized,u=new l.constructor(a.length*c);let m=0,p=0;for(let d=0,f=a.length;d<f;d++){o.isInterleavedBufferAttribute?m=a[d]*o.data.stride+o.offset:m=a[d]*c;for(let x=0;x<c;x++)u[p++]=l[m++]}return new L2(u,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new S2,n=this.index.array,q=this.attributes;for(const o in q){const a=q[o],l=e(a,n);t.setAttribute(o,l)}const i=this.morphAttributes;for(const o in i){const a=[],l=i[o];for(let c=0,h=l.length;c<h;c++){const u=l[c],m=e(u,n);a.push(m)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,a=r.length;o<a;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const l in a)a[l]!==void 0&&(e[l]=a[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const l=n[a];e.data.attributes[a]=l.toJSON(e.data)}const q={};let i=!1;for(const a in this.morphAttributes){const l=this.morphAttributes[a],c=[];for(let h=0,u=l.length;h<u;h++){const m=l[h];c.push(m.toJSON(e.data))}c.length>0&&(q[a]=c,i=!0)}i&&(e.data.morphAttributes=q,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const q=e.attributes;for(const l in q){const c=q[l];this.setAttribute(l,c.clone(t))}const i=e.morphAttributes;for(const l in i){const c=[],h=i[l];for(let u=0,m=h.length;u<m;u++)c.push(h[u].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,c=r.length;l<c;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Y6=new z1,b3=new de,Ze=new K3,s4=new F,r4=new F,o4=new F,$e=new F,B4=new F,G4=new l1,V4=new l1,H4=new l1,Qe=new F,W4=new F;class W1 extends i2{constructor(e=new S2,t=new r5){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const q=t[n[0]];if(q!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=q.length;i<r;i++){const o=q[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const n=this.geometry,q=n.attributes.position,i=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(q,e);const o=this.morphTargetInfluences;if(i&&o){B4.set(0,0,0);for(let a=0,l=i.length;a<l;a++){const c=o[a],h=i[a];c!==0&&($e.fromBufferAttribute(h,e),r?B4.addScaledVector($e,c):B4.addScaledVector($e.sub(t),c))}t.add(B4)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,q=this.material,i=this.matrixWorld;if(q===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ze.copy(n.boundingSphere),Ze.applyMatrix4(i),e.ray.intersectsSphere(Ze)===!1)||(Y6.copy(i).invert(),b3.copy(e.ray).applyMatrix4(Y6),n.boundingBox!==null&&b3.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,a=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv2,h=n.groups,u=n.drawRange;if(o!==null)if(Array.isArray(q))for(let m=0,p=h.length;m<p;m++){const d=h[m],f=q[d.materialIndex],x=Math.max(d.start,u.start),M=Math.min(o.count,Math.min(d.start+d.count,u.start+u.count));for(let g=x,v=M;g<v;g+=3){const b=o.getX(g),L=o.getX(g+1),R=o.getX(g+2);r=X4(this,f,e,b3,l,c,b,L,R),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const m=Math.max(0,u.start),p=Math.min(o.count,u.start+u.count);for(let d=m,f=p;d<f;d+=3){const x=o.getX(d),M=o.getX(d+1),g=o.getX(d+2);r=X4(this,q,e,b3,l,c,x,M,g),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(a!==void 0)if(Array.isArray(q))for(let m=0,p=h.length;m<p;m++){const d=h[m],f=q[d.materialIndex],x=Math.max(d.start,u.start),M=Math.min(a.count,Math.min(d.start+d.count,u.start+u.count));for(let g=x,v=M;g<v;g+=3){const b=g,L=g+1,R=g+2;r=X4(this,f,e,b3,l,c,b,L,R),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const m=Math.max(0,u.start),p=Math.min(a.count,u.start+u.count);for(let d=m,f=p;d<f;d+=3){const x=d,M=d+1,g=d+2;r=X4(this,q,e,b3,l,c,x,M,g),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function T9(s,e,t,n,q,i,r,o){let a;if(e.side===U2?a=n.intersectTriangle(r,i,q,!0,o):a=n.intersectTriangle(q,i,r,e.side===w5,o),a===null)return null;W4.copy(o),W4.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(W4);return l<t.near||l>t.far?null:{distance:l,point:W4.clone(),object:s}}function X4(s,e,t,n,q,i,r,o,a){s.getVertexPosition(r,s4),s.getVertexPosition(o,r4),s.getVertexPosition(a,o4);const l=T9(s,e,t,n,s4,r4,o4,Qe);if(l){q&&(G4.fromBufferAttribute(q,r),V4.fromBufferAttribute(q,o),H4.fromBufferAttribute(q,a),l.uv=y5.getUV(Qe,s4,r4,o4,G4,V4,H4,new l1)),i&&(G4.fromBufferAttribute(i,r),V4.fromBufferAttribute(i,o),H4.fromBufferAttribute(i,a),l.uv2=y5.getUV(Qe,s4,r4,o4,G4,V4,H4,new l1));const c={a:r,b:o,c:a,normal:new F,materialIndex:0};y5.getNormal(s4,r4,o4,c.normal),l.face=c}return l}class v2 extends S2{constructor(e=1,t=1,n=1,q=1,i=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:q,heightSegments:i,depthSegments:r};const o=this;q=Math.floor(q),i=Math.floor(i),r=Math.floor(r);const a=[],l=[],c=[],h=[];let u=0,m=0;p("z","y","x",-1,-1,n,t,e,r,i,0),p("z","y","x",1,-1,n,t,-e,r,i,1),p("x","z","y",1,1,e,n,t,q,r,2),p("x","z","y",1,-1,e,n,-t,q,r,3),p("x","y","z",1,-1,e,t,n,q,i,4),p("x","y","z",-1,-1,e,t,-n,q,i,5),this.setIndex(a),this.setAttribute("position",new Q1(l,3)),this.setAttribute("normal",new Q1(c,3)),this.setAttribute("uv",new Q1(h,2));function p(d,f,x,M,g,v,b,L,R,y,T){const D=v/R,$=b/y,W=v/2,k=b/2,N=L/2,K=R+1,q1=y+1;let e1=0,U=0;const h1=new F;for(let c1=0;c1<q1;c1++){const g1=c1*$-k;for(let Z=0;Z<K;Z++){const a1=Z*D-W;h1[d]=a1*M,h1[f]=g1*g,h1[x]=N,l.push(h1.x,h1.y,h1.z),h1[d]=0,h1[f]=0,h1[x]=L>0?1:-1,c.push(h1.x,h1.y,h1.z),h.push(Z/R),h.push(1-c1/y),e1+=1}}for(let c1=0;c1<y;c1++)for(let g1=0;g1<R;g1++){const Z=u+g1+K*c1,a1=u+g1+K*(c1+1),I=u+(g1+1)+K*(c1+1),P=u+(g1+1)+K*c1;a.push(Z,a1,P),a.push(a1,I,P),U+=6}o.addGroup(m,U,T),m+=U,u+=e1}}static fromJSON(e){return new v2(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function H3(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const q=s[t][n];q&&(q.isColor||q.isMatrix3||q.isMatrix4||q.isVector2||q.isVector3||q.isVector4||q.isTexture||q.isQuaternion)?e[t][n]=q.clone():Array.isArray(q)?e[t][n]=q.slice():e[t][n]=q}}return e}function A2(s){const e={};for(let t=0;t<s.length;t++){const n=H3(s[t]);for(const q in n)e[q]=n[q]}return e}function E9(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function f0(s){return s.getRenderTarget()===null&&s.outputEncoding===J1?t5:M4}const A9={clone:H3,merge:A2};var C9=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L9=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class r3 extends o5{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C9,this.fragmentShader=L9,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=H3(e.uniforms),this.uniformsGroups=E9(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const q in this.uniforms){const r=this.uniforms[q].value;r&&r.isTexture?t.uniforms[q]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[q]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[q]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[q]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[q]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[q]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[q]={type:"m4",value:r.toArray()}:t.uniforms[q]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const q in this.extensions)this.extensions[q]===!0&&(n[q]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class d0 extends i2{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new z1,this.projectionMatrix=new z1,this.projectionMatrixInverse=new z1}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class C2 extends d0{constructor(e=50,t=1,n=.1,q=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=q,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=b4*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(p4*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return b4*2*Math.atan(Math.tan(p4*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,q,i,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=q,this.view.width=i,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(p4*.5*this.fov)/this.zoom,n=2*t,q=this.aspect*n,i=-.5*q;const r=this.view;if(this.view!==null&&this.view.enabled){const a=r.fullWidth,l=r.fullHeight;i+=r.offsetX*q/a,t-=r.offsetY*n/l,q*=r.width/a,n*=r.height/l}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+q,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const S3=-90,w3=1;class R9 extends i2{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const q=new C2(S3,w3,e,t);q.layers=this.layers,q.up.set(0,1,0),q.lookAt(1,0,0),this.add(q);const i=new C2(S3,w3,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(-1,0,0),this.add(i);const r=new C2(S3,w3,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new C2(S3,w3,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const a=new C2(S3,w3,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(0,0,1),this.add(a);const l=new C2(S3,w3,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[q,i,r,o,a,l]=this.children,c=e.getRenderTarget(),h=e.toneMapping,u=e.xr.enabled;e.toneMapping=S5,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,q),e.setRenderTarget(n,1),e.render(t,i),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,a),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(c),e.toneMapping=h,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class m0 extends y2{constructor(e,t,n,q,i,r,o,a,l,c){e=e!==void 0?e:[],t=t!==void 0?t:U3,super(e,t,n,q,i,r,o,a,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class P9 extends s3{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},q=[n,n,n,n,n,n];this.texture=new m0(q,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:P2}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},q=new v2(5,5,5),i=new r3({name:"CubemapFromEquirect",uniforms:H3(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:U2,blending:z5});i.uniforms.tEquirect.value=t;const r=new W1(q,i),o=t.minFilter;return t.minFilter===n3&&(t.minFilter=P2),new R9(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,q){const i=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,q);e.setRenderTarget(i)}}const et=new F,I9=new F,D9=new c2;class J5{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,q){return this.normal.set(e,t,n),this.constant=q,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const q=et.subVectors(n,t).cross(I9.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(q,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(et),q=this.normal.dot(n);if(q===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/q;return i<0||i>1?null:t.copy(n).multiplyScalar(i).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||D9.getNormalMatrix(e),q=this.coplanarPoint(et).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-q.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const T3=new K3,j4=new F;class zt{constructor(e=new J5,t=new J5,n=new J5,q=new J5,i=new J5,r=new J5){this.planes=[e,t,n,q,i,r]}set(e,t,n,q,i,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(q),o[4].copy(i),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,q=n[0],i=n[1],r=n[2],o=n[3],a=n[4],l=n[5],c=n[6],h=n[7],u=n[8],m=n[9],p=n[10],d=n[11],f=n[12],x=n[13],M=n[14],g=n[15];return t[0].setComponents(o-q,h-a,d-u,g-f).normalize(),t[1].setComponents(o+q,h+a,d+u,g+f).normalize(),t[2].setComponents(o+i,h+l,d+m,g+x).normalize(),t[3].setComponents(o-i,h-l,d-m,g-x).normalize(),t[4].setComponents(o-r,h-c,d-p,g-M).normalize(),t[5].setComponents(o+r,h+c,d+p,g+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),T3.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(T3)}intersectsSprite(e){return T3.center.set(0,0,0),T3.radius=.7071067811865476,T3.applyMatrix4(e.matrixWorld),this.intersectsSphere(T3)}intersectsSphere(e){const t=this.planes,n=e.center,q=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(n)<q)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const q=t[n];if(j4.x=q.normal.x>0?e.max.x:e.min.x,j4.y=q.normal.y>0?e.max.y:e.min.y,j4.z=q.normal.z>0?e.max.z:e.min.z,q.distanceToPoint(j4)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function p0(){let s=null,e=!1,t=null,n=null;function q(i,r){t(i,r),n=s.requestAnimationFrame(q)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(q),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){s=i}}}function N9(s,e){const t=e.isWebGL2,n=new WeakMap;function q(l,c){const h=l.array,u=l.usage,m=s.createBuffer();s.bindBuffer(c,m),s.bufferData(c,h,u),l.onUploadCallback();let p;if(h instanceof Float32Array)p=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)p=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=5123;else if(h instanceof Int16Array)p=5122;else if(h instanceof Uint32Array)p=5125;else if(h instanceof Int32Array)p=5124;else if(h instanceof Int8Array)p=5120;else if(h instanceof Uint8Array)p=5121;else if(h instanceof Uint8ClampedArray)p=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function i(l,c,h){const u=c.array,m=c.updateRange;s.bindBuffer(h,l),m.count===-1?s.bufferSubData(h,0,u):(t?s.bufferSubData(h,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):s.bufferSubData(h,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=n.get(l);c&&(s.deleteBuffer(c.buffer),n.delete(l))}function a(l,c){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,q(l,c)):h.version<l.version&&(i(h.buffer,l,c),h.version=l.version)}return{get:r,remove:o,update:a}}class pe extends S2{constructor(e=1,t=1,n=1,q=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:q};const i=e/2,r=t/2,o=Math.floor(n),a=Math.floor(q),l=o+1,c=a+1,h=e/o,u=t/a,m=[],p=[],d=[],f=[];for(let x=0;x<c;x++){const M=x*u-r;for(let g=0;g<l;g++){const v=g*h-i;p.push(v,-M,0),d.push(0,0,1),f.push(g/o),f.push(1-x/a)}}for(let x=0;x<a;x++)for(let M=0;M<o;M++){const g=M+l*x,v=M+l*(x+1),b=M+1+l*(x+1),L=M+1+l*x;m.push(g,v,L),m.push(v,b,L)}this.setIndex(m),this.setAttribute("position",new Q1(p,3)),this.setAttribute("normal",new Q1(d,3)),this.setAttribute("uv",new Q1(f,2))}static fromJSON(e){return new pe(e.width,e.height,e.widthSegments,e.heightSegments)}}var O9=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,F9=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z9=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,U9=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k9=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,B9=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,G9="vec3 transformed = vec3( position );",V9=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H9=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,W9=`#ifdef USE_IRIDESCENCE
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
#endif`,X9=`#ifdef USE_BUMPMAP
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
#endif`,j9=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Y9=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J9=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,K9=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z9=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$9=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Q9=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,en=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tn=`#define PI 3.141592653589793
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
}`,nn=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qn=`vec3 transformedNormal = objectNormal;
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
#endif`,sn=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rn=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,on=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,an=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ln="gl_FragColor = linearToOutputTexel( gl_FragColor );",cn=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hn=`#ifdef USE_ENVMAP
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
#endif`,un=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fn=`#ifdef USE_ENVMAP
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
#endif`,dn=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mn=`#ifdef USE_ENVMAP
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
#endif`,pn=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xn=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gn=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_n=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vn=`#ifdef USE_GRADIENTMAP
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
}`,yn=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mn=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bn=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sn=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wn=`uniform bool receiveShadow;
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
#endif`,Tn=`#if defined( USE_ENVMAP )
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
#endif`,En=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,An=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cn=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ln=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rn=`PhysicalMaterial material;
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
#endif`,Pn=`struct PhysicalMaterial {
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
}`,In=`
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
#endif`,Dn=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nn=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,On=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fn=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zn=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Un=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kn=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bn=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gn=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vn=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hn=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wn=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xn=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jn=`#ifdef USE_MORPHNORMALS
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
#endif`,Yn=`#ifdef USE_MORPHTARGETS
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
#endif`,Jn=`#ifdef USE_MORPHTARGETS
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
#endif`,Kn=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Zn=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,$n=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qn=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eq=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tq=`#ifdef USE_NORMALMAP
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
#endif`,nq=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,qq=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,iq=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,sq=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rq=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oq=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aq=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lq=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cq=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hq=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uq=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fq=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dq=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mq=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pq=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xq=`float getShadowMask() {
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
}`,gq=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_q=`#ifdef USE_SKINNING
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
#endif`,vq=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yq=`#ifdef USE_SKINNING
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
#endif`,Mq=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bq=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sq=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wq=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tq=`#ifdef USE_TRANSMISSION
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
#endif`,Eq=`#ifdef USE_TRANSMISSION
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
#endif`,Aq=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Cq=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Lq=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Rq=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Pq=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Iq=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Dq=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nq=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Oq=`uniform sampler2D t2D;
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
}`,Fq=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zq=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Uq=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kq=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bq=`#include <common>
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
}`,Gq=`#if DEPTH_PACKING == 3200
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
}`,Vq=`#define DISTANCE
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
}`,Hq=`#define DISTANCE
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
}`,Wq=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xq=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jq=`uniform float scale;
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
}`,Yq=`uniform vec3 diffuse;
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
}`,Jq=`#include <common>
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
}`,Kq=`uniform vec3 diffuse;
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
}`,Zq=`#define LAMBERT
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
}`,$q=`#define LAMBERT
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
}`,Qq=`#define MATCAP
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
}`,ei=`#define MATCAP
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
}`,ti=`#define NORMAL
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
}`,ni=`#define NORMAL
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
}`,qi=`#define PHONG
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
}`,ii=`#define PHONG
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
}`,si=`#define STANDARD
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
}`,ri=`#define STANDARD
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
}`,oi=`#define TOON
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
}`,ai=`#define TOON
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
}`,li=`uniform float size;
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
}`,ci=`uniform vec3 diffuse;
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
}`,hi=`#include <common>
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
}`,ui=`uniform vec3 color;
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
}`,fi=`uniform float rotation;
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
}`,di=`uniform vec3 diffuse;
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
}`,N1={alphamap_fragment:O9,alphamap_pars_fragment:F9,alphatest_fragment:z9,alphatest_pars_fragment:U9,aomap_fragment:k9,aomap_pars_fragment:B9,begin_vertex:G9,beginnormal_vertex:V9,bsdfs:H9,iridescence_fragment:W9,bumpmap_pars_fragment:X9,clipping_planes_fragment:j9,clipping_planes_pars_fragment:Y9,clipping_planes_pars_vertex:J9,clipping_planes_vertex:K9,color_fragment:Z9,color_pars_fragment:$9,color_pars_vertex:Q9,color_vertex:en,common:tn,cube_uv_reflection_fragment:nn,defaultnormal_vertex:qn,displacementmap_pars_vertex:sn,displacementmap_vertex:rn,emissivemap_fragment:on,emissivemap_pars_fragment:an,encodings_fragment:ln,encodings_pars_fragment:cn,envmap_fragment:hn,envmap_common_pars_fragment:un,envmap_pars_fragment:fn,envmap_pars_vertex:dn,envmap_physical_pars_fragment:Tn,envmap_vertex:mn,fog_vertex:pn,fog_pars_vertex:xn,fog_fragment:gn,fog_pars_fragment:_n,gradientmap_pars_fragment:vn,lightmap_fragment:yn,lightmap_pars_fragment:Mn,lights_lambert_fragment:bn,lights_lambert_pars_fragment:Sn,lights_pars_begin:wn,lights_toon_fragment:En,lights_toon_pars_fragment:An,lights_phong_fragment:Cn,lights_phong_pars_fragment:Ln,lights_physical_fragment:Rn,lights_physical_pars_fragment:Pn,lights_fragment_begin:In,lights_fragment_maps:Dn,lights_fragment_end:Nn,logdepthbuf_fragment:On,logdepthbuf_pars_fragment:Fn,logdepthbuf_pars_vertex:zn,logdepthbuf_vertex:Un,map_fragment:kn,map_pars_fragment:Bn,map_particle_fragment:Gn,map_particle_pars_fragment:Vn,metalnessmap_fragment:Hn,metalnessmap_pars_fragment:Wn,morphcolor_vertex:Xn,morphnormal_vertex:jn,morphtarget_pars_vertex:Yn,morphtarget_vertex:Jn,normal_fragment_begin:Kn,normal_fragment_maps:Zn,normal_pars_fragment:$n,normal_pars_vertex:Qn,normal_vertex:eq,normalmap_pars_fragment:tq,clearcoat_normal_fragment_begin:nq,clearcoat_normal_fragment_maps:qq,clearcoat_pars_fragment:iq,iridescence_pars_fragment:sq,output_fragment:rq,packing:oq,premultiplied_alpha_fragment:aq,project_vertex:lq,dithering_fragment:cq,dithering_pars_fragment:hq,roughnessmap_fragment:uq,roughnessmap_pars_fragment:fq,shadowmap_pars_fragment:dq,shadowmap_pars_vertex:mq,shadowmap_vertex:pq,shadowmask_pars_fragment:xq,skinbase_vertex:gq,skinning_pars_vertex:_q,skinning_vertex:vq,skinnormal_vertex:yq,specularmap_fragment:Mq,specularmap_pars_fragment:bq,tonemapping_fragment:Sq,tonemapping_pars_fragment:wq,transmission_fragment:Tq,transmission_pars_fragment:Eq,uv_pars_fragment:Aq,uv_pars_vertex:Cq,uv_vertex:Lq,uv2_pars_fragment:Rq,uv2_pars_vertex:Pq,uv2_vertex:Iq,worldpos_vertex:Dq,background_vert:Nq,background_frag:Oq,backgroundCube_vert:Fq,backgroundCube_frag:zq,cube_vert:Uq,cube_frag:kq,depth_vert:Bq,depth_frag:Gq,distanceRGBA_vert:Vq,distanceRGBA_frag:Hq,equirect_vert:Wq,equirect_frag:Xq,linedashed_vert:jq,linedashed_frag:Yq,meshbasic_vert:Jq,meshbasic_frag:Kq,meshlambert_vert:Zq,meshlambert_frag:$q,meshmatcap_vert:Qq,meshmatcap_frag:ei,meshnormal_vert:ti,meshnormal_frag:ni,meshphong_vert:qi,meshphong_frag:ii,meshphysical_vert:si,meshphysical_frag:ri,meshtoon_vert:oi,meshtoon_frag:ai,points_vert:li,points_frag:ci,shadow_vert:hi,shadow_frag:ui,sprite_vert:fi,sprite_frag:di},_1={common:{diffuse:{value:new O1(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new c2},uv2Transform:{value:new c2},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new l1(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new O1(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new O1(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new c2}},sprite:{diffuse:{value:new O1(16777215)},opacity:{value:1},center:{value:new l1(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new c2}}},q5={basic:{uniforms:A2([_1.common,_1.specularmap,_1.envmap,_1.aomap,_1.lightmap,_1.fog]),vertexShader:N1.meshbasic_vert,fragmentShader:N1.meshbasic_frag},lambert:{uniforms:A2([_1.common,_1.specularmap,_1.envmap,_1.aomap,_1.lightmap,_1.emissivemap,_1.bumpmap,_1.normalmap,_1.displacementmap,_1.fog,_1.lights,{emissive:{value:new O1(0)}}]),vertexShader:N1.meshlambert_vert,fragmentShader:N1.meshlambert_frag},phong:{uniforms:A2([_1.common,_1.specularmap,_1.envmap,_1.aomap,_1.lightmap,_1.emissivemap,_1.bumpmap,_1.normalmap,_1.displacementmap,_1.fog,_1.lights,{emissive:{value:new O1(0)},specular:{value:new O1(1118481)},shininess:{value:30}}]),vertexShader:N1.meshphong_vert,fragmentShader:N1.meshphong_frag},standard:{uniforms:A2([_1.common,_1.envmap,_1.aomap,_1.lightmap,_1.emissivemap,_1.bumpmap,_1.normalmap,_1.displacementmap,_1.roughnessmap,_1.metalnessmap,_1.fog,_1.lights,{emissive:{value:new O1(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:N1.meshphysical_vert,fragmentShader:N1.meshphysical_frag},toon:{uniforms:A2([_1.common,_1.aomap,_1.lightmap,_1.emissivemap,_1.bumpmap,_1.normalmap,_1.displacementmap,_1.gradientmap,_1.fog,_1.lights,{emissive:{value:new O1(0)}}]),vertexShader:N1.meshtoon_vert,fragmentShader:N1.meshtoon_frag},matcap:{uniforms:A2([_1.common,_1.bumpmap,_1.normalmap,_1.displacementmap,_1.fog,{matcap:{value:null}}]),vertexShader:N1.meshmatcap_vert,fragmentShader:N1.meshmatcap_frag},points:{uniforms:A2([_1.points,_1.fog]),vertexShader:N1.points_vert,fragmentShader:N1.points_frag},dashed:{uniforms:A2([_1.common,_1.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:N1.linedashed_vert,fragmentShader:N1.linedashed_frag},depth:{uniforms:A2([_1.common,_1.displacementmap]),vertexShader:N1.depth_vert,fragmentShader:N1.depth_frag},normal:{uniforms:A2([_1.common,_1.bumpmap,_1.normalmap,_1.displacementmap,{opacity:{value:1}}]),vertexShader:N1.meshnormal_vert,fragmentShader:N1.meshnormal_frag},sprite:{uniforms:A2([_1.sprite,_1.fog]),vertexShader:N1.sprite_vert,fragmentShader:N1.sprite_frag},background:{uniforms:{uvTransform:{value:new c2},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:N1.background_vert,fragmentShader:N1.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:N1.backgroundCube_vert,fragmentShader:N1.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:N1.cube_vert,fragmentShader:N1.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:N1.equirect_vert,fragmentShader:N1.equirect_frag},distanceRGBA:{uniforms:A2([_1.common,_1.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:N1.distanceRGBA_vert,fragmentShader:N1.distanceRGBA_frag},shadow:{uniforms:A2([_1.lights,_1.fog,{color:{value:new O1(0)},opacity:{value:1}}]),vertexShader:N1.shadow_vert,fragmentShader:N1.shadow_frag}};q5.physical={uniforms:A2([q5.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new l1(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new O1(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new l1},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new O1(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new O1(1,1,1)},specularColorMap:{value:null}}]),vertexShader:N1.meshphysical_vert,fragmentShader:N1.meshphysical_frag};const Y4={r:0,b:0,g:0};function mi(s,e,t,n,q,i,r){const o=new O1(0);let a=i===!0?0:1,l,c,h=null,u=0,m=null;function p(f,x){let M=!1,g=x.isScene===!0?x.background:null;g&&g.isTexture&&(g=(x.backgroundBlurriness>0?t:e).get(g));const v=s.xr,b=v.getSession&&v.getSession();b&&b.environmentBlendMode==="additive"&&(g=null),g===null?d(o,a):g&&g.isColor&&(d(g,1),M=!0),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),g&&(g.isCubeTexture||g.mapping===fe)?(c===void 0&&(c=new W1(new v2(1,1,1),new r3({name:"BackgroundCubeMaterial",uniforms:H3(q5.backgroundCube.uniforms),vertexShader:q5.backgroundCube.vertexShader,fragmentShader:q5.backgroundCube.fragmentShader,side:U2,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,R,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),q.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=g.encoding!==J1,(h!==g||u!==g.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,h=g,u=g.version,m=s.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new W1(new pe(2,2),new r3({name:"BackgroundMaterial",uniforms:H3(q5.background.uniforms),vertexShader:q5.background.vertexShader,fragmentShader:q5.background.fragmentShader,side:w5,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),q.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=g.encoding!==J1,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||u!==g.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,h=g,u=g.version,m=s.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function d(f,x){f.getRGB(Y4,f0(s)),n.buffers.color.setClear(Y4.r,Y4.g,Y4.b,x,r)}return{getClearColor:function(){return o},setClearColor:function(f,x=1){o.set(f),a=x,d(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(f){a=f,d(o,a)},render:p}}function pi(s,e,t,n){const q=s.getParameter(34921),i=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||i!==null,o={},a=f(null);let l=a,c=!1;function h(N,K,q1,e1,U){let h1=!1;if(r){const c1=d(e1,q1,K);l!==c1&&(l=c1,m(l.object)),h1=x(N,e1,q1,U),h1&&M(N,e1,q1,U)}else{const c1=K.wireframe===!0;(l.geometry!==e1.id||l.program!==q1.id||l.wireframe!==c1)&&(l.geometry=e1.id,l.program=q1.id,l.wireframe=c1,h1=!0)}U!==null&&t.update(U,34963),(h1||c)&&(c=!1,y(N,K,q1,e1),U!==null&&s.bindBuffer(34963,t.get(U).buffer))}function u(){return n.isWebGL2?s.createVertexArray():i.createVertexArrayOES()}function m(N){return n.isWebGL2?s.bindVertexArray(N):i.bindVertexArrayOES(N)}function p(N){return n.isWebGL2?s.deleteVertexArray(N):i.deleteVertexArrayOES(N)}function d(N,K,q1){const e1=q1.wireframe===!0;let U=o[N.id];U===void 0&&(U={},o[N.id]=U);let h1=U[K.id];h1===void 0&&(h1={},U[K.id]=h1);let c1=h1[e1];return c1===void 0&&(c1=f(u()),h1[e1]=c1),c1}function f(N){const K=[],q1=[],e1=[];for(let U=0;U<q;U++)K[U]=0,q1[U]=0,e1[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:q1,attributeDivisors:e1,object:N,attributes:{},index:null}}function x(N,K,q1,e1){const U=l.attributes,h1=K.attributes;let c1=0;const g1=q1.getAttributes();for(const Z in g1)if(g1[Z].location>=0){const I=U[Z];let P=h1[Z];if(P===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(P=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(P=N.instanceColor)),I===void 0||I.attribute!==P||P&&I.data!==P.data)return!0;c1++}return l.attributesNum!==c1||l.index!==e1}function M(N,K,q1,e1){const U={},h1=K.attributes;let c1=0;const g1=q1.getAttributes();for(const Z in g1)if(g1[Z].location>=0){let I=h1[Z];I===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(I=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(I=N.instanceColor));const P={};P.attribute=I,I&&I.data&&(P.data=I.data),U[Z]=P,c1++}l.attributes=U,l.attributesNum=c1,l.index=e1}function g(){const N=l.newAttributes;for(let K=0,q1=N.length;K<q1;K++)N[K]=0}function v(N){b(N,0)}function b(N,K){const q1=l.newAttributes,e1=l.enabledAttributes,U=l.attributeDivisors;q1[N]=1,e1[N]===0&&(s.enableVertexAttribArray(N),e1[N]=1),U[N]!==K&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,K),U[N]=K)}function L(){const N=l.newAttributes,K=l.enabledAttributes;for(let q1=0,e1=K.length;q1<e1;q1++)K[q1]!==N[q1]&&(s.disableVertexAttribArray(q1),K[q1]=0)}function R(N,K,q1,e1,U,h1){n.isWebGL2===!0&&(q1===5124||q1===5125)?s.vertexAttribIPointer(N,K,q1,U,h1):s.vertexAttribPointer(N,K,q1,e1,U,h1)}function y(N,K,q1,e1){if(n.isWebGL2===!1&&(N.isInstancedMesh||e1.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const U=e1.attributes,h1=q1.getAttributes(),c1=K.defaultAttributeValues;for(const g1 in h1){const Z=h1[g1];if(Z.location>=0){let a1=U[g1];if(a1===void 0&&(g1==="instanceMatrix"&&N.instanceMatrix&&(a1=N.instanceMatrix),g1==="instanceColor"&&N.instanceColor&&(a1=N.instanceColor)),a1!==void 0){const I=a1.normalized,P=a1.itemSize,_=t.get(a1);if(_===void 0)continue;const w=_.buffer,X=_.type,n1=_.bytesPerElement;if(a1.isInterleavedBufferAttribute){const z=a1.data,u1=z.stride,V=a1.offset;if(z.isInstancedInterleavedBuffer){for(let H=0;H<Z.locationSize;H++)b(Z.location+H,z.meshPerAttribute);N.isInstancedMesh!==!0&&e1._maxInstanceCount===void 0&&(e1._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let H=0;H<Z.locationSize;H++)v(Z.location+H);s.bindBuffer(34962,w);for(let H=0;H<Z.locationSize;H++)R(Z.location+H,P/Z.locationSize,X,I,u1*n1,(V+P/Z.locationSize*H)*n1)}else{if(a1.isInstancedBufferAttribute){for(let z=0;z<Z.locationSize;z++)b(Z.location+z,a1.meshPerAttribute);N.isInstancedMesh!==!0&&e1._maxInstanceCount===void 0&&(e1._maxInstanceCount=a1.meshPerAttribute*a1.count)}else for(let z=0;z<Z.locationSize;z++)v(Z.location+z);s.bindBuffer(34962,w);for(let z=0;z<Z.locationSize;z++)R(Z.location+z,P/Z.locationSize,X,I,P*n1,P/Z.locationSize*z*n1)}}else if(c1!==void 0){const I=c1[g1];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(Z.location,I);break;case 3:s.vertexAttrib3fv(Z.location,I);break;case 4:s.vertexAttrib4fv(Z.location,I);break;default:s.vertexAttrib1fv(Z.location,I)}}}}L()}function T(){W();for(const N in o){const K=o[N];for(const q1 in K){const e1=K[q1];for(const U in e1)p(e1[U].object),delete e1[U];delete K[q1]}delete o[N]}}function D(N){if(o[N.id]===void 0)return;const K=o[N.id];for(const q1 in K){const e1=K[q1];for(const U in e1)p(e1[U].object),delete e1[U];delete K[q1]}delete o[N.id]}function $(N){for(const K in o){const q1=o[K];if(q1[N.id]===void 0)continue;const e1=q1[N.id];for(const U in e1)p(e1[U].object),delete e1[U];delete q1[N.id]}}function W(){k(),c=!0,l!==a&&(l=a,m(l.object))}function k(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:W,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:$,initAttributes:g,enableAttribute:v,disableUnusedAttributes:L}}function xi(s,e,t,n){const q=n.isWebGL2;let i;function r(l){i=l}function o(l,c){s.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){if(h===0)return;let u,m;if(q)u=s,m="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](i,l,c,h),t.update(c,i,h)}this.setMode=r,this.render=o,this.renderInstances=a}function gi(s,e,t){let n;function q(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function i(R){if(R==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const a=i(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=r||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),u=s.getParameter(35660),m=s.getParameter(3379),p=s.getParameter(34076),d=s.getParameter(34921),f=s.getParameter(36347),x=s.getParameter(36348),M=s.getParameter(36349),g=u>0,v=r||e.has("OES_texture_float"),b=g&&v,L=r?s.getParameter(36183):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:q,getMaxPrecision:i,precision:o,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:g,floatFragmentTextures:v,floatVertexTextures:b,maxSamples:L}}function _i(s){const e=this;let t=null,n=0,q=!1,i=!1;const r=new J5,o=new c2,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||n!==0||q;return q=u,n=h.length,m},this.beginShadows=function(){i=!0,c(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,m){const p=h.clippingPlanes,d=h.clipIntersection,f=h.clipShadows,x=s.get(h);if(!q||p===null||p.length===0||i&&!f)i?c(null):l();else{const M=i?0:n,g=M*4;let v=x.clippingState||null;a.value=v,v=c(p,u,g,m);for(let b=0;b!==g;++b)v[b]=t[b];x.clippingState=v,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=M}};function l(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,u,m,p){const d=h!==null?h.length:0;let f=null;if(d!==0){if(f=a.value,p!==!0||f===null){const x=m+d*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<x)&&(f=new Float32Array(x));for(let g=0,v=m;g!==d;++g,v+=4)r.copy(h[g]).applyMatrix4(M,o),r.normal.toArray(f,v),f[v+3]=r.constant}a.value=f,a.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,f}}function vi(s){let e=new WeakMap;function t(r,o){return o===gt?r.mapping=U3:o===_t&&(r.mapping=k3),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===gt||o===_t)if(e.has(r)){const a=e.get(r).texture;return t(a,r.mapping)}else{const a=r.image;if(a&&a.height>0){const l=new P9(a.height/2);return l.fromEquirectangularTexture(s,r),e.set(r,l),r.addEventListener("dispose",q),t(l.texture,r.mapping)}else return null}}return r}function q(r){const o=r.target;o.removeEventListener("dispose",q);const a=e.get(o);a!==void 0&&(e.delete(o),a.dispose())}function i(){e=new WeakMap}return{get:n,dispose:i}}class Ut extends d0{constructor(e=-1,t=1,n=1,q=-1,i=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=q,this.near=i,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,q,i,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=q,this.view.width=i,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,q=(this.top+this.bottom)/2;let i=n-e,r=n+e,o=q+t,a=q-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=l*this.view.offsetX,r=i+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(i,r,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const L3=4,J6=[.125,.215,.35,.446,.526,.582],Z5=20,tt=new Ut,K6=new O1;let nt=null;const K5=(1+Math.sqrt(5))/2,E3=1/K5,Z6=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,K5,E3),new F(0,K5,-E3),new F(E3,0,K5),new F(-E3,0,K5),new F(K5,E3,0),new F(-K5,E3,0)];class $6{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,q=100){nt=this._renderer.getRenderTarget(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,q,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=t7(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e7(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nt),e.scissorTest=!1,J4(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===U3||e.mapping===k3?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nt=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:P2,minFilter:P2,generateMipmaps:!1,type:v4,format:W2,encoding:i3,depthBuffer:!1},q=Q6(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Q6(e,t,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yi(i)),this._blurMaterial=Mi(i,e,t)}return q}_compileMaterial(e){const t=new W1(this._lodPlanes[0],e);this._renderer.compile(t,tt)}_sceneToCubeUV(e,t,n,q){const o=new C2(90,1,t,n),a=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(K6),c.toneMapping=S5,c.autoClear=!1;const m=new r5({name:"PMREM.Background",side:U2,depthWrite:!1,depthTest:!1}),p=new W1(new v2,m);let d=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,d=!0):(m.color.copy(K6),d=!0);for(let x=0;x<6;x++){const M=x%3;M===0?(o.up.set(0,a[x],0),o.lookAt(l[x],0,0)):M===1?(o.up.set(0,0,a[x]),o.lookAt(0,l[x],0)):(o.up.set(0,a[x],0),o.lookAt(0,0,l[x]));const g=this._cubeSize;J4(q,M*g,x>2?g:0,g,g),c.setRenderTarget(q),d&&c.render(p,o),c.render(e,o)}p.geometry.dispose(),p.material.dispose(),c.toneMapping=u,c.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,q=e.mapping===U3||e.mapping===k3;q?(this._cubemapMaterial===null&&(this._cubemapMaterial=t7()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e7());const i=q?this._cubemapMaterial:this._equirectMaterial,r=new W1(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;const a=this._cubeSize;J4(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(r,tt)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let q=1;q<this._lodPlanes.length;q++){const i=Math.sqrt(this._sigmas[q]*this._sigmas[q]-this._sigmas[q-1]*this._sigmas[q-1]),r=Z6[(q-1)%Z6.length];this._blur(e,q-1,q,i,r)}t.autoClear=n}_blur(e,t,n,q,i){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,q,"latitudinal",i),this._halfBlur(r,e,n,n,q,"longitudinal",i)}_halfBlur(e,t,n,q,i,r,o){const a=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new W1(this._lodPlanes[q],l),u=l.uniforms,m=this._sizeLods[n]-1,p=isFinite(i)?Math.PI/(2*m):2*Math.PI/(2*Z5-1),d=i/p,f=isFinite(i)?1+Math.floor(c*d):Z5;f>Z5&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Z5}`);const x=[];let M=0;for(let R=0;R<Z5;++R){const y=R/d,T=Math.exp(-y*y/2);x.push(T),R===0?M+=T:R<f&&(M+=2*T)}for(let R=0;R<x.length;R++)x[R]=x[R]/M;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=x,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:g}=this;u.dTheta.value=p,u.mipInt.value=g-n;const v=this._sizeLods[q],b=3*v*(q>g-L3?q-g+L3:0),L=4*(this._cubeSize-v);J4(t,b,L,3*v,2*v),a.setRenderTarget(t),a.render(h,tt)}}function yi(s){const e=[],t=[],n=[];let q=s;const i=s-L3+1+J6.length;for(let r=0;r<i;r++){const o=Math.pow(2,q);t.push(o);let a=1/o;r>s-L3?a=J6[r-s+L3-1]:r===0&&(a=0),n.push(a);const l=1/(o-2),c=-l,h=1+l,u=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,p=6,d=3,f=2,x=1,M=new Float32Array(d*p*m),g=new Float32Array(f*p*m),v=new Float32Array(x*p*m);for(let L=0;L<m;L++){const R=L%3*2/3-1,y=L>2?0:-1,T=[R,y,0,R+2/3,y,0,R+2/3,y+1,0,R,y,0,R+2/3,y+1,0,R,y+1,0];M.set(T,d*p*L),g.set(u,f*p*L);const D=[L,L,L,L,L,L];v.set(D,x*p*L)}const b=new S2;b.setAttribute("position",new L2(M,d)),b.setAttribute("uv",new L2(g,f)),b.setAttribute("faceIndex",new L2(v,x)),e.push(b),q>L3&&q--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Q6(s,e,t){const n=new s3(s,e,t);return n.texture.mapping=fe,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function J4(s,e,t,n,q){s.viewport.set(e,t,n,q),s.scissor.set(e,t,n,q)}function Mi(s,e,t){const n=new Float32Array(Z5),q=new F(0,1,0);return new r3({name:"SphericalGaussianBlur",defines:{n:Z5,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:q}},vertexShader:kt(),fragmentShader:`

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
		`,blending:z5,depthTest:!1,depthWrite:!1})}function e7(){return new r3({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kt(),fragmentShader:`

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
		`,blending:z5,depthTest:!1,depthWrite:!1})}function t7(){return new r3({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:z5,depthTest:!1,depthWrite:!1})}function kt(){return`

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
	`}function bi(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const a=o.mapping,l=a===gt||a===_t,c=a===U3||a===k3;if(l||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new $6(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||c&&h&&q(h)){t===null&&(t=new $6(s));const u=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",i),u.texture}else return null}}}return o}function q(o){let a=0;const l=6;for(let c=0;c<l;c++)o[c]!==void 0&&a++;return a===l}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Si(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let q;switch(n){case"WEBGL_depth_texture":q=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":q=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":q=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":q=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:q=s.getExtension(n)}return e[n]=q,q}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const q=t(n);return q===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),q}}}function wi(s,e,t,n){const q={},i=new WeakMap;function r(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",r),delete q[u.id];const m=i.get(u);m&&(e.remove(m),i.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return q[u.id]===!0||(u.addEventListener("dispose",r),q[u.id]=!0,t.memory.geometries++),u}function a(h){const u=h.attributes;for(const p in u)e.update(u[p],34962);const m=h.morphAttributes;for(const p in m){const d=m[p];for(let f=0,x=d.length;f<x;f++)e.update(d[f],34962)}}function l(h){const u=[],m=h.index,p=h.attributes.position;let d=0;if(m!==null){const M=m.array;d=m.version;for(let g=0,v=M.length;g<v;g+=3){const b=M[g+0],L=M[g+1],R=M[g+2];u.push(b,L,L,R,R,b)}}else{const M=p.array;d=p.version;for(let g=0,v=M.length/3-1;g<v;g+=3){const b=g+0,L=g+1,R=g+2;u.push(b,L,L,R,R,b)}}const f=new(r0(u)?u0:h0)(u,1);f.version=d;const x=i.get(h);x&&e.remove(x),i.set(h,f)}function c(h){const u=i.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&l(h)}else l(h);return i.get(h)}return{get:o,update:a,getWireframeAttribute:c}}function Ti(s,e,t,n){const q=n.isWebGL2;let i;function r(u){i=u}let o,a;function l(u){o=u.type,a=u.bytesPerElement}function c(u,m){s.drawElements(i,m,o,u*a),t.update(m,i,1)}function h(u,m,p){if(p===0)return;let d,f;if(q)d=s,f="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](i,m,o,u*a,p),t.update(m,i,p)}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=h}function Ei(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,r,o){switch(t.calls++,r){case 4:t.triangles+=o*(i/3);break;case 1:t.lines+=o*(i/2);break;case 3:t.lines+=o*(i-1);break;case 2:t.lines+=o*i;break;case 0:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function q(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:q,update:n}}function Ai(s,e){return s[0]-e[0]}function Ci(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Li(s,e,t){const n={},q=new Float32Array(8),i=new WeakMap,r=new $1,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function a(l,c,h,u){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=d!==void 0?d.length:0;let x=i.get(c);if(x===void 0||x.count!==f){let q1=function(){N.dispose(),i.delete(c),c.removeEventListener("dispose",q1)};var p=q1;x!==void 0&&x.texture.dispose();const v=c.morphAttributes.position!==void 0,b=c.morphAttributes.normal!==void 0,L=c.morphAttributes.color!==void 0,R=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],T=c.morphAttributes.color||[];let D=0;v===!0&&(D=1),b===!0&&(D=2),L===!0&&(D=3);let $=c.attributes.position.count*D,W=1;$>e.maxTextureSize&&(W=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const k=new Float32Array($*W*4*f),N=new c0(k,$,W,f);N.type=O5,N.needsUpdate=!0;const K=D*4;for(let e1=0;e1<f;e1++){const U=R[e1],h1=y[e1],c1=T[e1],g1=$*W*4*e1;for(let Z=0;Z<U.count;Z++){const a1=Z*K;v===!0&&(r.fromBufferAttribute(U,Z),k[g1+a1+0]=r.x,k[g1+a1+1]=r.y,k[g1+a1+2]=r.z,k[g1+a1+3]=0),b===!0&&(r.fromBufferAttribute(h1,Z),k[g1+a1+4]=r.x,k[g1+a1+5]=r.y,k[g1+a1+6]=r.z,k[g1+a1+7]=0),L===!0&&(r.fromBufferAttribute(c1,Z),k[g1+a1+8]=r.x,k[g1+a1+9]=r.y,k[g1+a1+10]=r.z,k[g1+a1+11]=c1.itemSize===4?r.w:1)}}x={count:f,texture:N,size:new l1($,W)},i.set(c,x),c.addEventListener("dispose",q1)}let M=0;for(let v=0;v<m.length;v++)M+=m[v];const g=c.morphTargetsRelative?1:1-M;u.getUniforms().setValue(s,"morphTargetBaseInfluence",g),u.getUniforms().setValue(s,"morphTargetInfluences",m),u.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const d=m===void 0?0:m.length;let f=n[c.id];if(f===void 0||f.length!==d){f=[];for(let b=0;b<d;b++)f[b]=[b,0];n[c.id]=f}for(let b=0;b<d;b++){const L=f[b];L[0]=b,L[1]=m[b]}f.sort(Ci);for(let b=0;b<8;b++)b<d&&f[b][1]?(o[b][0]=f[b][0],o[b][1]=f[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(Ai);const x=c.morphAttributes.position,M=c.morphAttributes.normal;let g=0;for(let b=0;b<8;b++){const L=o[b],R=L[0],y=L[1];R!==Number.MAX_SAFE_INTEGER&&y?(x&&c.getAttribute("morphTarget"+b)!==x[R]&&c.setAttribute("morphTarget"+b,x[R]),M&&c.getAttribute("morphNormal"+b)!==M[R]&&c.setAttribute("morphNormal"+b,M[R]),q[b]=y,g+=y):(x&&c.hasAttribute("morphTarget"+b)===!0&&c.deleteAttribute("morphTarget"+b),M&&c.hasAttribute("morphNormal"+b)===!0&&c.deleteAttribute("morphNormal"+b),q[b]=0)}const v=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",q)}}return{update:a}}function Ri(s,e,t,n){let q=new WeakMap;function i(a){const l=n.render.frame,c=a.geometry,h=e.get(a,c);return q.get(h)!==l&&(e.update(h),q.set(h,l)),a.isInstancedMesh&&(a.hasEventListener("dispose",o)===!1&&a.addEventListener("dispose",o),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),h}function r(){q=new WeakMap}function o(a){const l=a.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:i,dispose:r}}const x0=new y2,g0=new c0,_0=new p9,v0=new m0,n7=[],q7=[],i7=new Float32Array(16),s7=new Float32Array(9),r7=new Float32Array(4);function Z3(s,e,t){const n=s[0];if(n<=0||n>0)return s;const q=e*t;let i=n7[q];if(i===void 0&&(i=new Float32Array(q),n7[q]=i),e!==0){n.toArray(i,0);for(let r=1,o=0;r!==e;++r)o+=t,s[r].toArray(i,o)}return i}function h2(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function u2(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function xe(s,e){let t=q7[e];t===void 0&&(t=new Int32Array(e),q7[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Pi(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ii(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(h2(t,e))return;s.uniform2fv(this.addr,e),u2(t,e)}}function Di(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(h2(t,e))return;s.uniform3fv(this.addr,e),u2(t,e)}}function Ni(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(h2(t,e))return;s.uniform4fv(this.addr,e),u2(t,e)}}function Oi(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(h2(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),u2(t,e)}else{if(h2(t,n))return;r7.set(n),s.uniformMatrix2fv(this.addr,!1,r7),u2(t,n)}}function Fi(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(h2(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),u2(t,e)}else{if(h2(t,n))return;s7.set(n),s.uniformMatrix3fv(this.addr,!1,s7),u2(t,n)}}function zi(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(h2(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),u2(t,e)}else{if(h2(t,n))return;i7.set(n),s.uniformMatrix4fv(this.addr,!1,i7),u2(t,n)}}function Ui(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ki(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(h2(t,e))return;s.uniform2iv(this.addr,e),u2(t,e)}}function Bi(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(h2(t,e))return;s.uniform3iv(this.addr,e),u2(t,e)}}function Gi(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(h2(t,e))return;s.uniform4iv(this.addr,e),u2(t,e)}}function Vi(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Hi(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(h2(t,e))return;s.uniform2uiv(this.addr,e),u2(t,e)}}function Wi(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(h2(t,e))return;s.uniform3uiv(this.addr,e),u2(t,e)}}function Xi(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(h2(t,e))return;s.uniform4uiv(this.addr,e),u2(t,e)}}function ji(s,e,t){const n=this.cache,q=t.allocateTextureUnit();n[0]!==q&&(s.uniform1i(this.addr,q),n[0]=q),t.setTexture2D(e||x0,q)}function Yi(s,e,t){const n=this.cache,q=t.allocateTextureUnit();n[0]!==q&&(s.uniform1i(this.addr,q),n[0]=q),t.setTexture3D(e||_0,q)}function Ji(s,e,t){const n=this.cache,q=t.allocateTextureUnit();n[0]!==q&&(s.uniform1i(this.addr,q),n[0]=q),t.setTextureCube(e||v0,q)}function Ki(s,e,t){const n=this.cache,q=t.allocateTextureUnit();n[0]!==q&&(s.uniform1i(this.addr,q),n[0]=q),t.setTexture2DArray(e||g0,q)}function Zi(s){switch(s){case 5126:return Pi;case 35664:return Ii;case 35665:return Di;case 35666:return Ni;case 35674:return Oi;case 35675:return Fi;case 35676:return zi;case 5124:case 35670:return Ui;case 35667:case 35671:return ki;case 35668:case 35672:return Bi;case 35669:case 35673:return Gi;case 5125:return Vi;case 36294:return Hi;case 36295:return Wi;case 36296:return Xi;case 35678:case 36198:case 36298:case 36306:case 35682:return ji;case 35679:case 36299:case 36307:return Yi;case 35680:case 36300:case 36308:case 36293:return Ji;case 36289:case 36303:case 36311:case 36292:return Ki}}function $i(s,e){s.uniform1fv(this.addr,e)}function Qi(s,e){const t=Z3(e,this.size,2);s.uniform2fv(this.addr,t)}function es(s,e){const t=Z3(e,this.size,3);s.uniform3fv(this.addr,t)}function ts(s,e){const t=Z3(e,this.size,4);s.uniform4fv(this.addr,t)}function ns(s,e){const t=Z3(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function qs(s,e){const t=Z3(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function is(s,e){const t=Z3(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ss(s,e){s.uniform1iv(this.addr,e)}function rs(s,e){s.uniform2iv(this.addr,e)}function os(s,e){s.uniform3iv(this.addr,e)}function as(s,e){s.uniform4iv(this.addr,e)}function ls(s,e){s.uniform1uiv(this.addr,e)}function cs(s,e){s.uniform2uiv(this.addr,e)}function hs(s,e){s.uniform3uiv(this.addr,e)}function us(s,e){s.uniform4uiv(this.addr,e)}function fs(s,e,t){const n=this.cache,q=e.length,i=xe(t,q);h2(n,i)||(s.uniform1iv(this.addr,i),u2(n,i));for(let r=0;r!==q;++r)t.setTexture2D(e[r]||x0,i[r])}function ds(s,e,t){const n=this.cache,q=e.length,i=xe(t,q);h2(n,i)||(s.uniform1iv(this.addr,i),u2(n,i));for(let r=0;r!==q;++r)t.setTexture3D(e[r]||_0,i[r])}function ms(s,e,t){const n=this.cache,q=e.length,i=xe(t,q);h2(n,i)||(s.uniform1iv(this.addr,i),u2(n,i));for(let r=0;r!==q;++r)t.setTextureCube(e[r]||v0,i[r])}function ps(s,e,t){const n=this.cache,q=e.length,i=xe(t,q);h2(n,i)||(s.uniform1iv(this.addr,i),u2(n,i));for(let r=0;r!==q;++r)t.setTexture2DArray(e[r]||g0,i[r])}function xs(s){switch(s){case 5126:return $i;case 35664:return Qi;case 35665:return es;case 35666:return ts;case 35674:return ns;case 35675:return qs;case 35676:return is;case 5124:case 35670:return ss;case 35667:case 35671:return rs;case 35668:case 35672:return os;case 35669:case 35673:return as;case 5125:return ls;case 36294:return cs;case 36295:return hs;case 36296:return us;case 35678:case 36198:case 36298:case 36306:case 35682:return fs;case 35679:case 36299:case 36307:return ds;case 35680:case 36300:case 36308:case 36293:return ms;case 36289:case 36303:case 36311:case 36292:return ps}}class gs{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Zi(t.type)}}class _s{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=xs(t.type)}}class vs{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const q=this.seq;for(let i=0,r=q.length;i!==r;++i){const o=q[i];o.setValue(e,t[o.id],n)}}}const qt=/(\w+)(\])?(\[|\.)?/g;function o7(s,e){s.seq.push(e),s.map[e.id]=e}function ys(s,e,t){const n=s.name,q=n.length;for(qt.lastIndex=0;;){const i=qt.exec(n),r=qt.lastIndex;let o=i[1];const a=i[2]==="]",l=i[3];if(a&&(o=o|0),l===void 0||l==="["&&r+2===q){o7(t,l===void 0?new gs(o,s,e):new _s(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new vs(o),o7(t,h)),t=h}}}class oe{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let q=0;q<n;++q){const i=e.getActiveUniform(t,q),r=e.getUniformLocation(t,i.name);ys(i,r,this)}}setValue(e,t,n,q){const i=this.map[t];i!==void 0&&i.setValue(e,n,q)}setOptional(e,t,n){const q=t[n];q!==void 0&&this.setValue(e,n,q)}static upload(e,t,n,q){for(let i=0,r=t.length;i!==r;++i){const o=t[i],a=n[o.id];a.needsUpdate!==!1&&o.setValue(e,a.value,q)}}static seqWithValue(e,t){const n=[];for(let q=0,i=e.length;q!==i;++q){const r=e[q];r.id in t&&n.push(r)}return n}}function a7(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Ms=0;function bs(s,e){const t=s.split(`
`),n=[],q=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let r=q;r<i;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function Ss(s){switch(s){case i3:return["Linear","( value )"];case J1:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function l7(s,e,t){const n=s.getShaderParameter(e,35713),q=s.getShaderInfoLog(e).trim();if(n&&q==="")return"";const i=/ERROR: 0:(\d+)/.exec(q);if(i){const r=parseInt(i[1]);return t.toUpperCase()+`

`+q+`

`+bs(s.getShaderSource(e),r)}else return q}function ws(s,e){const t=Ss(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ts(s,e){let t;switch(e){case C8:t="Linear";break;case L8:t="Reinhard";break;case R8:t="OptimizedCineon";break;case P8:t="ACESFilmic";break;case I8:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Es(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(f4).join(`
`)}function As(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cs(s,e){const t={},n=s.getProgramParameter(e,35721);for(let q=0;q<n;q++){const i=s.getActiveAttrib(e,q),r=i.name;let o=1;i.type===35674&&(o=2),i.type===35675&&(o=3),i.type===35676&&(o=4),t[r]={type:i.type,location:s.getAttribLocation(e,r),locationSize:o}}return t}function f4(s){return s!==""}function c7(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function h7(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ls=/^[ \t]*#include +<([\w\d./]+)>/gm;function wt(s){return s.replace(Ls,Rs)}function Rs(s,e){const t=N1[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return wt(t)}const Ps=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u7(s){return s.replace(Ps,Is)}function Is(s,e,t,n){let q="";for(let i=parseInt(e);i<parseInt(t);i++)q+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return q}function f7(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ds(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===K7?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===o8?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===u4&&(e="SHADOWMAP_TYPE_VSM"),e}function Ns(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case U3:case k3:e="ENVMAP_TYPE_CUBE";break;case fe:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Os(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case k3:e="ENVMAP_MODE_REFRACTION";break}return e}function Fs(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Q7:e="ENVMAP_BLENDING_MULTIPLY";break;case E8:e="ENVMAP_BLENDING_MIX";break;case A8:e="ENVMAP_BLENDING_ADD";break}return e}function zs(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Us(s,e,t,n){const q=s.getContext(),i=t.defines;let r=t.vertexShader,o=t.fragmentShader;const a=Ds(t),l=Ns(t),c=Os(t),h=Fs(t),u=zs(t),m=t.isWebGL2?"":Es(t),p=As(i),d=q.createProgram();let f,x,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[p].filter(f4).join(`
`),f.length>0&&(f+=`
`),x=[m,p].filter(f4).join(`
`),x.length>0&&(x+=`
`)):(f=[f7(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(f4).join(`
`),x=[m,f7(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==S5?"#define TONE_MAPPING":"",t.toneMapping!==S5?N1.tonemapping_pars_fragment:"",t.toneMapping!==S5?Ts("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",N1.encodings_pars_fragment,ws("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(f4).join(`
`)),r=wt(r),r=c7(r,t),r=h7(r,t),o=wt(o),o=c7(o,t),o=h7(o,t),r=u7(r),o=u7(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["#define varying in",t.glslVersion===F6?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===F6?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const g=M+f+r,v=M+x+o,b=a7(q,35633,g),L=a7(q,35632,v);if(q.attachShader(d,b),q.attachShader(d,L),t.index0AttributeName!==void 0?q.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&q.bindAttribLocation(d,0,"position"),q.linkProgram(d),s.debug.checkShaderErrors){const T=q.getProgramInfoLog(d).trim(),D=q.getShaderInfoLog(b).trim(),$=q.getShaderInfoLog(L).trim();let W=!0,k=!0;if(q.getProgramParameter(d,35714)===!1){W=!1;const N=l7(q,b,"vertex"),K=l7(q,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+q.getError()+" - VALIDATE_STATUS "+q.getProgramParameter(d,35715)+`

Program Info Log: `+T+`
`+N+`
`+K)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(D===""||$==="")&&(k=!1);k&&(this.diagnostics={runnable:W,programLog:T,vertexShader:{log:D,prefix:f},fragmentShader:{log:$,prefix:x}})}q.deleteShader(b),q.deleteShader(L);let R;this.getUniforms=function(){return R===void 0&&(R=new oe(q,d)),R};let y;return this.getAttributes=function(){return y===void 0&&(y=Cs(q,d)),y},this.destroy=function(){n.releaseStatesOfProgram(this),q.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=Ms++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=b,this.fragmentShader=L,this}let ks=0;class Bs{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,q=this._getShaderStage(t),i=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(q)===!1&&(r.add(q),q.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gs(e),t.set(e,n)),n}}class Gs{constructor(e){this.id=ks++,this.code=e,this.usedTimes=0}}function Vs(s,e,t,n,q,i,r){const o=new Ft,a=new Bs,l=[],c=q.isWebGL2,h=q.logarithmicDepthBuffer,u=q.vertexTextures;let m=q.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y,T,D,$,W){const k=$.fog,N=W.geometry,K=y.isMeshStandardMaterial?$.environment:null,q1=(y.isMeshStandardMaterial?t:e).get(y.envMap||K),e1=!!q1&&q1.mapping===fe?q1.image.height:null,U=p[y.type];y.precision!==null&&(m=q.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const h1=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,c1=h1!==void 0?h1.length:0;let g1=0;N.morphAttributes.position!==void 0&&(g1=1),N.morphAttributes.normal!==void 0&&(g1=2),N.morphAttributes.color!==void 0&&(g1=3);let Z,a1,I,P;if(U){const u1=q5[U];Z=u1.vertexShader,a1=u1.fragmentShader}else Z=y.vertexShader,a1=y.fragmentShader,a.update(y),I=a.getVertexShaderID(y),P=a.getFragmentShaderID(y);const _=s.getRenderTarget(),w=y.alphaTest>0,X=y.clearcoat>0,n1=y.iridescence>0;return{isWebGL2:c,shaderID:U,shaderName:y.type,vertexShader:Z,fragmentShader:a1,defines:y.defines,customVertexShaderID:I,customFragmentShaderID:P,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:u,outputEncoding:_===null?s.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:i3,map:!!y.map,matcap:!!y.matcap,envMap:!!q1,envMapMode:q1&&q1.mapping,envMapCubeUVHeight:e1,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Q8,tangentSpaceNormalMap:y.normalMapType===i0,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===J1,clearcoat:X,clearcoatMap:X&&!!y.clearcoatMap,clearcoatRoughnessMap:X&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:X&&!!y.clearcoatNormalMap,iridescence:n1,iridescenceMap:n1&&!!y.iridescenceMap,iridescenceThicknessMap:n1&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===P3,alphaMap:!!y.alphaMap,alphaTest:w,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!N.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!k,useFog:y.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:h,skinning:W.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:c1,morphTextureStride:g1,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:y.toneMapped?s.toneMapping:S5,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===s5,flipSided:y.side===U2,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)T.push(D),T.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(x(T,y),M(T,y),T.push(s.outputEncoding)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputEncoding),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.combine),y.push(T.vertexUvs),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function M(y,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.map&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.lightMap&&o.enable(7),T.aoMap&&o.enable(8),T.emissiveMap&&o.enable(9),T.bumpMap&&o.enable(10),T.normalMap&&o.enable(11),T.objectSpaceNormalMap&&o.enable(12),T.tangentSpaceNormalMap&&o.enable(13),T.clearcoat&&o.enable(14),T.clearcoatMap&&o.enable(15),T.clearcoatRoughnessMap&&o.enable(16),T.clearcoatNormalMap&&o.enable(17),T.iridescence&&o.enable(18),T.iridescenceMap&&o.enable(19),T.iridescenceThicknessMap&&o.enable(20),T.displacementMap&&o.enable(21),T.specularMap&&o.enable(22),T.roughnessMap&&o.enable(23),T.metalnessMap&&o.enable(24),T.gradientMap&&o.enable(25),T.alphaMap&&o.enable(26),T.alphaTest&&o.enable(27),T.vertexColors&&o.enable(28),T.vertexAlphas&&o.enable(29),T.vertexUvs&&o.enable(30),T.vertexTangents&&o.enable(31),T.uvsVertexOnly&&o.enable(32),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.physicallyCorrectLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.specularIntensityMap&&o.enable(15),T.specularColorMap&&o.enable(16),T.transmission&&o.enable(17),T.transmissionMap&&o.enable(18),T.thicknessMap&&o.enable(19),T.sheen&&o.enable(20),T.sheenColorMap&&o.enable(21),T.sheenRoughnessMap&&o.enable(22),T.decodeVideoTexture&&o.enable(23),T.opaque&&o.enable(24),y.push(o.mask)}function g(y){const T=p[y.type];let D;if(T){const $=q5[T];D=A9.clone($.uniforms)}else D=y.uniforms;return D}function v(y,T){let D;for(let $=0,W=l.length;$<W;$++){const k=l[$];if(k.cacheKey===T){D=k,++D.usedTimes;break}}return D===void 0&&(D=new Us(s,T,y,i),l.push(D)),D}function b(y){if(--y.usedTimes===0){const T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),y.destroy()}}function L(y){a.remove(y)}function R(){a.dispose()}return{getParameters:d,getProgramCacheKey:f,getUniforms:g,acquireProgram:v,releaseProgram:b,releaseShaderCache:L,programs:l,dispose:R}}function Hs(){let s=new WeakMap;function e(i){let r=s.get(i);return r===void 0&&(r={},s.set(i,r)),r}function t(i){s.delete(i)}function n(i,r,o){s.get(i)[r]=o}function q(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:q}}function Ws(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function d7(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function m7(){const s=[];let e=0;const t=[],n=[],q=[];function i(){e=0,t.length=0,n.length=0,q.length=0}function r(h,u,m,p,d,f){let x=s[e];return x===void 0?(x={id:h.id,object:h,geometry:u,material:m,groupOrder:p,renderOrder:h.renderOrder,z:d,group:f},s[e]=x):(x.id=h.id,x.object=h,x.geometry=u,x.material=m,x.groupOrder=p,x.renderOrder=h.renderOrder,x.z=d,x.group=f),e++,x}function o(h,u,m,p,d,f){const x=r(h,u,m,p,d,f);m.transmission>0?n.push(x):m.transparent===!0?q.push(x):t.push(x)}function a(h,u,m,p,d,f){const x=r(h,u,m,p,d,f);m.transmission>0?n.unshift(x):m.transparent===!0?q.unshift(x):t.unshift(x)}function l(h,u){t.length>1&&t.sort(h||Ws),n.length>1&&n.sort(u||d7),q.length>1&&q.sort(u||d7)}function c(){for(let h=e,u=s.length;h<u;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:q,init:i,push:o,unshift:a,finish:c,sort:l}}function Xs(){let s=new WeakMap;function e(n,q){const i=s.get(n);let r;return i===void 0?(r=new m7,s.set(n,[r])):q>=i.length?(r=new m7,i.push(r)):r=i[q],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function js(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new O1};break;case"SpotLight":t={position:new F,direction:new F,color:new O1,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new O1,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new O1,groundColor:new O1};break;case"RectAreaLight":t={color:new O1,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function Ys(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new l1};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new l1};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new l1,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Js=0;function Ks(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Zs(s,e){const t=new js,n=Ys(),q={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)q.probe.push(new F);const i=new F,r=new z1,o=new z1;function a(c,h){let u=0,m=0,p=0;for(let $=0;$<9;$++)q.probe[$].set(0,0,0);let d=0,f=0,x=0,M=0,g=0,v=0,b=0,L=0,R=0,y=0;c.sort(Ks);const T=h!==!0?Math.PI:1;for(let $=0,W=c.length;$<W;$++){const k=c[$],N=k.color,K=k.intensity,q1=k.distance,e1=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)u+=N.r*K*T,m+=N.g*K*T,p+=N.b*K*T;else if(k.isLightProbe)for(let U=0;U<9;U++)q.probe[U].addScaledVector(k.sh.coefficients[U],K);else if(k.isDirectionalLight){const U=t.get(k);if(U.color.copy(k.color).multiplyScalar(k.intensity*T),k.castShadow){const h1=k.shadow,c1=n.get(k);c1.shadowBias=h1.bias,c1.shadowNormalBias=h1.normalBias,c1.shadowRadius=h1.radius,c1.shadowMapSize=h1.mapSize,q.directionalShadow[d]=c1,q.directionalShadowMap[d]=e1,q.directionalShadowMatrix[d]=k.shadow.matrix,v++}q.directional[d]=U,d++}else if(k.isSpotLight){const U=t.get(k);U.position.setFromMatrixPosition(k.matrixWorld),U.color.copy(N).multiplyScalar(K*T),U.distance=q1,U.coneCos=Math.cos(k.angle),U.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),U.decay=k.decay,q.spot[x]=U;const h1=k.shadow;if(k.map&&(q.spotLightMap[R]=k.map,R++,h1.updateMatrices(k),k.castShadow&&y++),q.spotLightMatrix[x]=h1.matrix,k.castShadow){const c1=n.get(k);c1.shadowBias=h1.bias,c1.shadowNormalBias=h1.normalBias,c1.shadowRadius=h1.radius,c1.shadowMapSize=h1.mapSize,q.spotShadow[x]=c1,q.spotShadowMap[x]=e1,L++}x++}else if(k.isRectAreaLight){const U=t.get(k);U.color.copy(N).multiplyScalar(K),U.halfWidth.set(k.width*.5,0,0),U.halfHeight.set(0,k.height*.5,0),q.rectArea[M]=U,M++}else if(k.isPointLight){const U=t.get(k);if(U.color.copy(k.color).multiplyScalar(k.intensity*T),U.distance=k.distance,U.decay=k.decay,k.castShadow){const h1=k.shadow,c1=n.get(k);c1.shadowBias=h1.bias,c1.shadowNormalBias=h1.normalBias,c1.shadowRadius=h1.radius,c1.shadowMapSize=h1.mapSize,c1.shadowCameraNear=h1.camera.near,c1.shadowCameraFar=h1.camera.far,q.pointShadow[f]=c1,q.pointShadowMap[f]=e1,q.pointShadowMatrix[f]=k.shadow.matrix,b++}q.point[f]=U,f++}else if(k.isHemisphereLight){const U=t.get(k);U.skyColor.copy(k.color).multiplyScalar(K*T),U.groundColor.copy(k.groundColor).multiplyScalar(K*T),q.hemi[g]=U,g++}}M>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(q.rectAreaLTC1=_1.LTC_FLOAT_1,q.rectAreaLTC2=_1.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(q.rectAreaLTC1=_1.LTC_HALF_1,q.rectAreaLTC2=_1.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),q.ambient[0]=u,q.ambient[1]=m,q.ambient[2]=p;const D=q.hash;(D.directionalLength!==d||D.pointLength!==f||D.spotLength!==x||D.rectAreaLength!==M||D.hemiLength!==g||D.numDirectionalShadows!==v||D.numPointShadows!==b||D.numSpotShadows!==L||D.numSpotMaps!==R)&&(q.directional.length=d,q.spot.length=x,q.rectArea.length=M,q.point.length=f,q.hemi.length=g,q.directionalShadow.length=v,q.directionalShadowMap.length=v,q.pointShadow.length=b,q.pointShadowMap.length=b,q.spotShadow.length=L,q.spotShadowMap.length=L,q.directionalShadowMatrix.length=v,q.pointShadowMatrix.length=b,q.spotLightMatrix.length=L+R-y,q.spotLightMap.length=R,q.numSpotLightShadowsWithMaps=y,D.directionalLength=d,D.pointLength=f,D.spotLength=x,D.rectAreaLength=M,D.hemiLength=g,D.numDirectionalShadows=v,D.numPointShadows=b,D.numSpotShadows=L,D.numSpotMaps=R,q.version=Js++)}function l(c,h){let u=0,m=0,p=0,d=0,f=0;const x=h.matrixWorldInverse;for(let M=0,g=c.length;M<g;M++){const v=c[M];if(v.isDirectionalLight){const b=q.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(x),u++}else if(v.isSpotLight){const b=q.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(x),p++}else if(v.isRectAreaLight){const b=q.rectArea[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(x),o.identity(),r.copy(v.matrixWorld),r.premultiply(x),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),d++}else if(v.isPointLight){const b=q.point[m];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(x),m++}else if(v.isHemisphereLight){const b=q.hemi[f];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(x),f++}}}return{setup:a,setupView:l,state:q}}function p7(s,e){const t=new Zs(s,e),n=[],q=[];function i(){n.length=0,q.length=0}function r(h){n.push(h)}function o(h){q.push(h)}function a(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:i,state:{lightsArray:n,shadowsArray:q,lights:t},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function $s(s,e){let t=new WeakMap;function n(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new p7(s,e),t.set(i,[a])):r>=o.length?(a=new p7(s,e),o.push(a)):a=o[r],a}function q(){t=new WeakMap}return{get:n,dispose:q}}class Qs extends o5{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z8,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class er extends o5{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tr=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nr=`uniform sampler2D shadow_pass;
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
}`;function qr(s,e,t){let n=new zt;const q=new l1,i=new l1,r=new $1,o=new Qs({depthPacking:$8}),a=new er,l={},c=t.maxTextureSize,h={[w5]:U2,[U2]:w5,[s5]:s5},u=new r3({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new l1},radius:{value:4}},vertexShader:tr,fragmentShader:nr}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const p=new S2;p.setAttribute("position",new L2(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new W1(p,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=K7,this.render=function(v,b,L){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||v.length===0)return;const R=s.getRenderTarget(),y=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),D=s.state;D.setBlending(z5),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let $=0,W=v.length;$<W;$++){const k=v[$],N=k.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;q.copy(N.mapSize);const K=N.getFrameExtents();if(q.multiply(K),i.copy(N.mapSize),(q.x>c||q.y>c)&&(q.x>c&&(i.x=Math.floor(c/K.x),q.x=i.x*K.x,N.mapSize.x=i.x),q.y>c&&(i.y=Math.floor(c/K.y),q.y=i.y*K.y,N.mapSize.y=i.y)),N.map===null){const e1=this.type!==u4?{minFilter:x2,magFilter:x2}:{};N.map=new s3(q.x,q.y,e1),N.map.texture.name=k.name+".shadowMap",N.camera.updateProjectionMatrix()}s.setRenderTarget(N.map),s.clear();const q1=N.getViewportCount();for(let e1=0;e1<q1;e1++){const U=N.getViewport(e1);r.set(i.x*U.x,i.y*U.y,i.x*U.z,i.y*U.w),D.viewport(r),N.updateMatrices(k,e1),n=N.getFrustum(),g(b,L,N.camera,k,this.type)}N.isPointLightShadow!==!0&&this.type===u4&&x(N,L),N.needsUpdate=!1}f.needsUpdate=!1,s.setRenderTarget(R,y,T)};function x(v,b){const L=e.update(d);u.defines.VSM_SAMPLES!==v.blurSamples&&(u.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new s3(q.x,q.y)),u.uniforms.shadow_pass.value=v.map.texture,u.uniforms.resolution.value=v.mapSize,u.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(b,null,L,u,d,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(b,null,L,m,d,null)}function M(v,b,L,R,y,T){let D=null;const $=L.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if($!==void 0)D=$;else if(D=L.isPointLight===!0?a:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const W=D.uuid,k=b.uuid;let N=l[W];N===void 0&&(N={},l[W]=N);let K=N[k];K===void 0&&(K=D.clone(),N[k]=K),D=K}return D.visible=b.visible,D.wireframe=b.wireframe,T===u4?D.side=b.shadowSide!==null?b.shadowSide:b.side:D.side=b.shadowSide!==null?b.shadowSide:h[b.side],D.alphaMap=b.alphaMap,D.alphaTest=b.alphaTest,D.map=b.map,D.clipShadows=b.clipShadows,D.clippingPlanes=b.clippingPlanes,D.clipIntersection=b.clipIntersection,D.displacementMap=b.displacementMap,D.displacementScale=b.displacementScale,D.displacementBias=b.displacementBias,D.wireframeLinewidth=b.wireframeLinewidth,D.linewidth=b.linewidth,L.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(L.matrixWorld),D.nearDistance=R,D.farDistance=y),D}function g(v,b,L,R,y){if(v.visible===!1)return;if(v.layers.test(b.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&y===u4)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,v.matrixWorld);const $=e.update(v),W=v.material;if(Array.isArray(W)){const k=$.groups;for(let N=0,K=k.length;N<K;N++){const q1=k[N],e1=W[q1.materialIndex];if(e1&&e1.visible){const U=M(v,e1,R,L.near,L.far,y);s.renderBufferDirect(L,null,$,U,v,q1)}}}else if(W.visible){const k=M(v,W,R,L.near,L.far,y);s.renderBufferDirect(L,null,$,k,v,null)}}const D=v.children;for(let $=0,W=D.length;$<W;$++)g(D[$],b,L,R,y)}}function ir(s,e,t){const n=t.isWebGL2;function q(){let B=!1;const i1=new $1;let m1=null;const b1=new $1(0,0,0,0);return{setMask:function(E1){m1!==E1&&!B&&(s.colorMask(E1,E1,E1,E1),m1=E1)},setLocked:function(E1){B=E1},setClear:function(E1,Y1,d2,M2,G5){G5===!0&&(E1*=M2,Y1*=M2,d2*=M2),i1.set(E1,Y1,d2,M2),b1.equals(i1)===!1&&(s.clearColor(E1,Y1,d2,M2),b1.copy(i1))},reset:function(){B=!1,m1=null,b1.set(-1,0,0,0)}}}function i(){let B=!1,i1=null,m1=null,b1=null;return{setTest:function(E1){E1?w(2929):X(2929)},setMask:function(E1){i1!==E1&&!B&&(s.depthMask(E1),i1=E1)},setFunc:function(E1){if(m1!==E1){switch(E1){case v8:s.depthFunc(512);break;case y8:s.depthFunc(519);break;case M8:s.depthFunc(513);break;case xt:s.depthFunc(515);break;case b8:s.depthFunc(514);break;case S8:s.depthFunc(518);break;case w8:s.depthFunc(516);break;case T8:s.depthFunc(517);break;default:s.depthFunc(515)}m1=E1}},setLocked:function(E1){B=E1},setClear:function(E1){b1!==E1&&(s.clearDepth(E1),b1=E1)},reset:function(){B=!1,i1=null,m1=null,b1=null}}}function r(){let B=!1,i1=null,m1=null,b1=null,E1=null,Y1=null,d2=null,M2=null,G5=null;return{setTest:function(t2){B||(t2?w(2960):X(2960))},setMask:function(t2){i1!==t2&&!B&&(s.stencilMask(t2),i1=t2)},setFunc:function(t2,h5,B2){(m1!==t2||b1!==h5||E1!==B2)&&(s.stencilFunc(t2,h5,B2),m1=t2,b1=h5,E1=B2)},setOp:function(t2,h5,B2){(Y1!==t2||d2!==h5||M2!==B2)&&(s.stencilOp(t2,h5,B2),Y1=t2,d2=h5,M2=B2)},setLocked:function(t2){B=t2},setClear:function(t2){G5!==t2&&(s.clearStencil(t2),G5=t2)},reset:function(){B=!1,i1=null,m1=null,b1=null,E1=null,Y1=null,d2=null,M2=null,G5=null}}}const o=new q,a=new i,l=new r,c=new WeakMap,h=new WeakMap;let u={},m={},p=new WeakMap,d=[],f=null,x=!1,M=null,g=null,v=null,b=null,L=null,R=null,y=null,T=!1,D=null,$=null,W=null,k=null,N=null;const K=s.getParameter(35661);let q1=!1,e1=0;const U=s.getParameter(7938);U.indexOf("WebGL")!==-1?(e1=parseFloat(/^WebGL (\d)/.exec(U)[1]),q1=e1>=1):U.indexOf("OpenGL ES")!==-1&&(e1=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),q1=e1>=2);let h1=null,c1={};const g1=s.getParameter(3088),Z=s.getParameter(2978),a1=new $1().fromArray(g1),I=new $1().fromArray(Z);function P(B,i1,m1){const b1=new Uint8Array(4),E1=s.createTexture();s.bindTexture(B,E1),s.texParameteri(B,10241,9728),s.texParameteri(B,10240,9728);for(let Y1=0;Y1<m1;Y1++)s.texImage2D(i1+Y1,0,6408,1,1,0,6408,5121,b1);return E1}const _={};_[3553]=P(3553,3553,1),_[34067]=P(34067,34069,6),o.setClear(0,0,0,1),a.setClear(1),l.setClear(0),w(2929),a.setFunc(xt),t1(!1),f1(s6),w(2884),G(z5);function w(B){u[B]!==!0&&(s.enable(B),u[B]=!0)}function X(B){u[B]!==!1&&(s.disable(B),u[B]=!1)}function n1(B,i1){return m[B]!==i1?(s.bindFramebuffer(B,i1),m[B]=i1,n&&(B===36009&&(m[36160]=i1),B===36160&&(m[36009]=i1)),!0):!1}function z(B,i1){let m1=d,b1=!1;if(B)if(m1=p.get(i1),m1===void 0&&(m1=[],p.set(i1,m1)),B.isWebGLMultipleRenderTargets){const E1=B.texture;if(m1.length!==E1.length||m1[0]!==36064){for(let Y1=0,d2=E1.length;Y1<d2;Y1++)m1[Y1]=36064+Y1;m1.length=E1.length,b1=!0}}else m1[0]!==36064&&(m1[0]=36064,b1=!0);else m1[0]!==1029&&(m1[0]=1029,b1=!0);b1&&(t.isWebGL2?s.drawBuffers(m1):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(m1))}function u1(B){return f!==B?(s.useProgram(B),f=B,!0):!1}const V={[A3]:32774,[l8]:32778,[c8]:32779};if(n)V[l6]=32775,V[c6]=32776;else{const B=e.get("EXT_blend_minmax");B!==null&&(V[l6]=B.MIN_EXT,V[c6]=B.MAX_EXT)}const H={[h8]:0,[u8]:1,[f8]:768,[Z7]:770,[_8]:776,[x8]:774,[m8]:772,[d8]:769,[$7]:771,[g8]:775,[p8]:773};function G(B,i1,m1,b1,E1,Y1,d2,M2){if(B===z5){x===!0&&(X(3042),x=!1);return}if(x===!1&&(w(3042),x=!0),B!==a8){if(B!==M||M2!==T){if((g!==A3||L!==A3)&&(s.blendEquation(32774),g=A3,L=A3),M2)switch(B){case P3:s.blendFuncSeparate(1,771,1,771);break;case r6:s.blendFunc(1,1);break;case o6:s.blendFuncSeparate(0,769,0,1);break;case a6:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case P3:s.blendFuncSeparate(770,771,1,771);break;case r6:s.blendFunc(770,1);break;case o6:s.blendFuncSeparate(0,769,0,1);break;case a6:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}v=null,b=null,R=null,y=null,M=B,T=M2}return}E1=E1||i1,Y1=Y1||m1,d2=d2||b1,(i1!==g||E1!==L)&&(s.blendEquationSeparate(V[i1],V[E1]),g=i1,L=E1),(m1!==v||b1!==b||Y1!==R||d2!==y)&&(s.blendFuncSeparate(H[m1],H[b1],H[Y1],H[d2]),v=m1,b=b1,R=Y1,y=d2),M=B,T=!1}function Q(B,i1){B.side===s5?X(2884):w(2884);let m1=B.side===U2;i1&&(m1=!m1),t1(m1),B.blending===P3&&B.transparent===!1?G(z5):G(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),o.setMask(B.colorWrite);const b1=B.stencilWrite;l.setTest(b1),b1&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),A(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?w(32926):X(32926)}function t1(B){D!==B&&(B?s.frontFace(2304):s.frontFace(2305),D=B)}function f1(B){B!==s8?(w(2884),B!==$&&(B===s6?s.cullFace(1029):B===r8?s.cullFace(1028):s.cullFace(1032))):X(2884),$=B}function O(B){B!==W&&(q1&&s.lineWidth(B),W=B)}function A(B,i1,m1){B?(w(32823),(k!==i1||N!==m1)&&(s.polygonOffset(i1,m1),k=i1,N=m1)):X(32823)}function x1(B){B?w(3089):X(3089)}function S1(B){B===void 0&&(B=33984+K-1),h1!==B&&(s.activeTexture(B),h1=B)}function C(B,i1,m1){m1===void 0&&(h1===null?m1=33984+K-1:m1=h1);let b1=c1[m1];b1===void 0&&(b1={type:void 0,texture:void 0},c1[m1]=b1),(b1.type!==B||b1.texture!==i1)&&(h1!==m1&&(s.activeTexture(m1),h1=m1),s.bindTexture(B,i1||_[B]),b1.type=B,b1.texture=i1)}function S(){const B=c1[h1];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function d1(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function p1(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function v1(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function P1(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function y1(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function r1(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function T1(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function I1(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function w1(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function L1(B){a1.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),a1.copy(B))}function C1(B){I.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),I.copy(B))}function X1(B,i1){let m1=h.get(i1);m1===void 0&&(m1=new WeakMap,h.set(i1,m1));let b1=m1.get(B);b1===void 0&&(b1=s.getUniformBlockIndex(i1,B.name),m1.set(B,b1))}function e2(B,i1){const b1=h.get(i1).get(B);c.get(i1)!==b1&&(s.uniformBlockBinding(i1,b1,B.__bindingPointIndex),c.set(i1,b1))}function f2(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},h1=null,c1={},m={},p=new WeakMap,d=[],f=null,x=!1,M=null,g=null,v=null,b=null,L=null,R=null,y=null,T=!1,D=null,$=null,W=null,k=null,N=null,a1.set(0,0,s.canvas.width,s.canvas.height),I.set(0,0,s.canvas.width,s.canvas.height),o.reset(),a.reset(),l.reset()}return{buffers:{color:o,depth:a,stencil:l},enable:w,disable:X,bindFramebuffer:n1,drawBuffers:z,useProgram:u1,setBlending:G,setMaterial:Q,setFlipSided:t1,setCullFace:f1,setLineWidth:O,setPolygonOffset:A,setScissorTest:x1,activeTexture:S1,bindTexture:C,unbindTexture:S,compressedTexImage2D:Y,compressedTexImage3D:d1,texImage2D:I1,texImage3D:w1,updateUBOMapping:X1,uniformBlockBinding:e2,texStorage2D:r1,texStorage3D:T1,texSubImage2D:p1,texSubImage3D:v1,compressedTexSubImage2D:P1,compressedTexSubImage3D:y1,scissor:L1,viewport:C1,reset:f2}}function sr(s,e,t,n,q,i,r){const o=q.isWebGL2,a=q.maxTextures,l=q.maxCubemapSize,c=q.maxTextureSize,h=q.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let d;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,S){return x?new OffscreenCanvas(C,S):S4("canvas")}function g(C,S,Y,d1){let p1=1;if((C.width>d1||C.height>d1)&&(p1=d1/Math.max(C.width,C.height)),p1<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const v1=S?ue:Math.floor,P1=v1(p1*C.width),y1=v1(p1*C.height);d===void 0&&(d=M(P1,y1));const r1=Y?M(P1,y1):d;return r1.width=P1,r1.height=y1,r1.getContext("2d").drawImage(C,0,0,P1,y1),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+P1+"x"+y1+")."),r1}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function v(C){return St(C.width)&&St(C.height)}function b(C){return o?!1:C.wrapS!==H2||C.wrapT!==H2||C.minFilter!==x2&&C.minFilter!==P2}function L(C,S){return C.generateMipmaps&&S&&C.minFilter!==x2&&C.minFilter!==P2}function R(C){s.generateMipmap(C)}function y(C,S,Y,d1,p1=!1){if(o===!1)return S;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let v1=S;return S===6403&&(Y===5126&&(v1=33326),Y===5131&&(v1=33325),Y===5121&&(v1=33321)),S===33319&&(Y===5126&&(v1=33328),Y===5131&&(v1=33327),Y===5121&&(v1=33323)),S===6408&&(Y===5126&&(v1=34836),Y===5131&&(v1=34842),Y===5121&&(v1=d1===J1&&p1===!1?35907:32856),Y===32819&&(v1=32854),Y===32820&&(v1=32855)),(v1===33325||v1===33326||v1===33327||v1===33328||v1===34842||v1===34836)&&e.get("EXT_color_buffer_float"),v1}function T(C,S,Y){return L(C,Y)===!0||C.isFramebufferTexture&&C.minFilter!==x2&&C.minFilter!==P2?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function D(C){return C===x2||C===vt||C===se?9728:9729}function $(C){const S=C.target;S.removeEventListener("dispose",$),k(S),S.isVideoTexture&&p.delete(S)}function W(C){const S=C.target;S.removeEventListener("dispose",W),K(S)}function k(C){const S=n.get(C);if(S.__webglInit===void 0)return;const Y=C.source,d1=f.get(Y);if(d1){const p1=d1[S.__cacheKey];p1.usedTimes--,p1.usedTimes===0&&N(C),Object.keys(d1).length===0&&f.delete(Y)}n.remove(C)}function N(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const Y=C.source,d1=f.get(Y);delete d1[S.__cacheKey],r.memory.textures--}function K(C){const S=C.texture,Y=n.get(C),d1=n.get(S);if(d1.__webglTexture!==void 0&&(s.deleteTexture(d1.__webglTexture),r.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let p1=0;p1<6;p1++)s.deleteFramebuffer(Y.__webglFramebuffer[p1]),Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer[p1]);else{if(s.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let p1=0;p1<Y.__webglColorRenderbuffer.length;p1++)Y.__webglColorRenderbuffer[p1]&&s.deleteRenderbuffer(Y.__webglColorRenderbuffer[p1]);Y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let p1=0,v1=S.length;p1<v1;p1++){const P1=n.get(S[p1]);P1.__webglTexture&&(s.deleteTexture(P1.__webglTexture),r.memory.textures--),n.remove(S[p1])}n.remove(S),n.remove(C)}let q1=0;function e1(){q1=0}function U(){const C=q1;return C>=a&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a),q1+=1,C}function h1(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.encoding),S.join()}function c1(C,S){const Y=n.get(C);if(C.isVideoTexture&&x1(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const d1=C.image;if(d1===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(d1.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(Y,C,S);return}}t.bindTexture(3553,Y.__webglTexture,33984+S)}function g1(C,S){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){X(Y,C,S);return}t.bindTexture(35866,Y.__webglTexture,33984+S)}function Z(C,S){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){X(Y,C,S);return}t.bindTexture(32879,Y.__webglTexture,33984+S)}function a1(C,S){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){n1(Y,C,S);return}t.bindTexture(34067,Y.__webglTexture,33984+S)}const I={[B3]:10497,[H2]:33071,[he]:33648},P={[x2]:9728,[vt]:9984,[se]:9986,[P2]:9729,[t0]:9985,[n3]:9987};function _(C,S,Y){if(Y?(s.texParameteri(C,10242,I[S.wrapS]),s.texParameteri(C,10243,I[S.wrapT]),(C===32879||C===35866)&&s.texParameteri(C,32882,I[S.wrapR]),s.texParameteri(C,10240,P[S.magFilter]),s.texParameteri(C,10241,P[S.minFilter])):(s.texParameteri(C,10242,33071),s.texParameteri(C,10243,33071),(C===32879||C===35866)&&s.texParameteri(C,32882,33071),(S.wrapS!==H2||S.wrapT!==H2)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,10240,D(S.magFilter)),s.texParameteri(C,10241,D(S.minFilter)),S.minFilter!==x2&&S.minFilter!==P2&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const d1=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===x2||S.minFilter!==se&&S.minFilter!==n3||S.type===O5&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===v4&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(C,d1.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,q.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function w(C,S){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",$));const d1=S.source;let p1=f.get(d1);p1===void 0&&(p1={},f.set(d1,p1));const v1=h1(S);if(v1!==C.__cacheKey){p1[v1]===void 0&&(p1[v1]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,Y=!0),p1[v1].usedTimes++;const P1=p1[C.__cacheKey];P1!==void 0&&(p1[C.__cacheKey].usedTimes--,P1.usedTimes===0&&N(S)),C.__cacheKey=v1,C.__webglTexture=p1[v1].texture}return Y}function X(C,S,Y){let d1=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(d1=35866),S.isData3DTexture&&(d1=32879);const p1=w(C,S),v1=S.source;t.bindTexture(d1,C.__webglTexture,33984+Y);const P1=n.get(v1);if(v1.version!==P1.__version||p1===!0){t.activeTexture(33984+Y),s.pixelStorei(37440,S.flipY),s.pixelStorei(37441,S.premultiplyAlpha),s.pixelStorei(3317,S.unpackAlignment),s.pixelStorei(37443,0);const y1=b(S)&&v(S.image)===!1;let r1=g(S.image,y1,!1,c);r1=S1(S,r1);const T1=v(r1)||o,I1=i.convert(S.format,S.encoding);let w1=i.convert(S.type),L1=y(S.internalFormat,I1,w1,S.encoding,S.isVideoTexture);_(d1,S,T1);let C1;const X1=S.mipmaps,e2=o&&S.isVideoTexture!==!0,f2=P1.__version===void 0||p1===!0,B=T(S,r1,T1);if(S.isDepthTexture)L1=6402,o?S.type===O5?L1=36012:S.type===Q5?L1=33190:S.type===I3?L1=35056:L1=33189:S.type===O5&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===e3&&L1===6402&&S.type!==n0&&S.type!==Q5&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Q5,w1=i.convert(S.type)),S.format===G3&&L1===6402&&(L1=34041,S.type!==I3&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=I3,w1=i.convert(S.type))),f2&&(e2?t.texStorage2D(3553,1,L1,r1.width,r1.height):t.texImage2D(3553,0,L1,r1.width,r1.height,0,I1,w1,null));else if(S.isDataTexture)if(X1.length>0&&T1){e2&&f2&&t.texStorage2D(3553,B,L1,X1[0].width,X1[0].height);for(let i1=0,m1=X1.length;i1<m1;i1++)C1=X1[i1],e2?t.texSubImage2D(3553,i1,0,0,C1.width,C1.height,I1,w1,C1.data):t.texImage2D(3553,i1,L1,C1.width,C1.height,0,I1,w1,C1.data);S.generateMipmaps=!1}else e2?(f2&&t.texStorage2D(3553,B,L1,r1.width,r1.height),t.texSubImage2D(3553,0,0,0,r1.width,r1.height,I1,w1,r1.data)):t.texImage2D(3553,0,L1,r1.width,r1.height,0,I1,w1,r1.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){e2&&f2&&t.texStorage3D(35866,B,L1,X1[0].width,X1[0].height,r1.depth);for(let i1=0,m1=X1.length;i1<m1;i1++)C1=X1[i1],S.format!==W2?I1!==null?e2?t.compressedTexSubImage3D(35866,i1,0,0,0,C1.width,C1.height,r1.depth,I1,C1.data,0,0):t.compressedTexImage3D(35866,i1,L1,C1.width,C1.height,r1.depth,0,C1.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):e2?t.texSubImage3D(35866,i1,0,0,0,C1.width,C1.height,r1.depth,I1,w1,C1.data):t.texImage3D(35866,i1,L1,C1.width,C1.height,r1.depth,0,I1,w1,C1.data)}else{e2&&f2&&t.texStorage2D(3553,B,L1,X1[0].width,X1[0].height);for(let i1=0,m1=X1.length;i1<m1;i1++)C1=X1[i1],S.format!==W2?I1!==null?e2?t.compressedTexSubImage2D(3553,i1,0,0,C1.width,C1.height,I1,C1.data):t.compressedTexImage2D(3553,i1,L1,C1.width,C1.height,0,C1.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):e2?t.texSubImage2D(3553,i1,0,0,C1.width,C1.height,I1,w1,C1.data):t.texImage2D(3553,i1,L1,C1.width,C1.height,0,I1,w1,C1.data)}else if(S.isDataArrayTexture)e2?(f2&&t.texStorage3D(35866,B,L1,r1.width,r1.height,r1.depth),t.texSubImage3D(35866,0,0,0,0,r1.width,r1.height,r1.depth,I1,w1,r1.data)):t.texImage3D(35866,0,L1,r1.width,r1.height,r1.depth,0,I1,w1,r1.data);else if(S.isData3DTexture)e2?(f2&&t.texStorage3D(32879,B,L1,r1.width,r1.height,r1.depth),t.texSubImage3D(32879,0,0,0,0,r1.width,r1.height,r1.depth,I1,w1,r1.data)):t.texImage3D(32879,0,L1,r1.width,r1.height,r1.depth,0,I1,w1,r1.data);else if(S.isFramebufferTexture){if(f2)if(e2)t.texStorage2D(3553,B,L1,r1.width,r1.height);else{let i1=r1.width,m1=r1.height;for(let b1=0;b1<B;b1++)t.texImage2D(3553,b1,L1,i1,m1,0,I1,w1,null),i1>>=1,m1>>=1}}else if(X1.length>0&&T1){e2&&f2&&t.texStorage2D(3553,B,L1,X1[0].width,X1[0].height);for(let i1=0,m1=X1.length;i1<m1;i1++)C1=X1[i1],e2?t.texSubImage2D(3553,i1,0,0,I1,w1,C1):t.texImage2D(3553,i1,L1,I1,w1,C1);S.generateMipmaps=!1}else e2?(f2&&t.texStorage2D(3553,B,L1,r1.width,r1.height),t.texSubImage2D(3553,0,0,0,I1,w1,r1)):t.texImage2D(3553,0,L1,I1,w1,r1);L(S,T1)&&R(d1),P1.__version=v1.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function n1(C,S,Y){if(S.image.length!==6)return;const d1=w(C,S),p1=S.source;t.bindTexture(34067,C.__webglTexture,33984+Y);const v1=n.get(p1);if(p1.version!==v1.__version||d1===!0){t.activeTexture(33984+Y),s.pixelStorei(37440,S.flipY),s.pixelStorei(37441,S.premultiplyAlpha),s.pixelStorei(3317,S.unpackAlignment),s.pixelStorei(37443,0);const P1=S.isCompressedTexture||S.image[0].isCompressedTexture,y1=S.image[0]&&S.image[0].isDataTexture,r1=[];for(let i1=0;i1<6;i1++)!P1&&!y1?r1[i1]=g(S.image[i1],!1,!0,l):r1[i1]=y1?S.image[i1].image:S.image[i1],r1[i1]=S1(S,r1[i1]);const T1=r1[0],I1=v(T1)||o,w1=i.convert(S.format,S.encoding),L1=i.convert(S.type),C1=y(S.internalFormat,w1,L1,S.encoding),X1=o&&S.isVideoTexture!==!0,e2=v1.__version===void 0||d1===!0;let f2=T(S,T1,I1);_(34067,S,I1);let B;if(P1){X1&&e2&&t.texStorage2D(34067,f2,C1,T1.width,T1.height);for(let i1=0;i1<6;i1++){B=r1[i1].mipmaps;for(let m1=0;m1<B.length;m1++){const b1=B[m1];S.format!==W2?w1!==null?X1?t.compressedTexSubImage2D(34069+i1,m1,0,0,b1.width,b1.height,w1,b1.data):t.compressedTexImage2D(34069+i1,m1,C1,b1.width,b1.height,0,b1.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X1?t.texSubImage2D(34069+i1,m1,0,0,b1.width,b1.height,w1,L1,b1.data):t.texImage2D(34069+i1,m1,C1,b1.width,b1.height,0,w1,L1,b1.data)}}}else{B=S.mipmaps,X1&&e2&&(B.length>0&&f2++,t.texStorage2D(34067,f2,C1,r1[0].width,r1[0].height));for(let i1=0;i1<6;i1++)if(y1){X1?t.texSubImage2D(34069+i1,0,0,0,r1[i1].width,r1[i1].height,w1,L1,r1[i1].data):t.texImage2D(34069+i1,0,C1,r1[i1].width,r1[i1].height,0,w1,L1,r1[i1].data);for(let m1=0;m1<B.length;m1++){const E1=B[m1].image[i1].image;X1?t.texSubImage2D(34069+i1,m1+1,0,0,E1.width,E1.height,w1,L1,E1.data):t.texImage2D(34069+i1,m1+1,C1,E1.width,E1.height,0,w1,L1,E1.data)}}else{X1?t.texSubImage2D(34069+i1,0,0,0,w1,L1,r1[i1]):t.texImage2D(34069+i1,0,C1,w1,L1,r1[i1]);for(let m1=0;m1<B.length;m1++){const b1=B[m1];X1?t.texSubImage2D(34069+i1,m1+1,0,0,w1,L1,b1.image[i1]):t.texImage2D(34069+i1,m1+1,C1,w1,L1,b1.image[i1])}}}L(S,I1)&&R(34067),v1.__version=p1.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function z(C,S,Y,d1,p1){const v1=i.convert(Y.format,Y.encoding),P1=i.convert(Y.type),y1=y(Y.internalFormat,v1,P1,Y.encoding);n.get(S).__hasExternalTextures||(p1===32879||p1===35866?t.texImage3D(p1,0,y1,S.width,S.height,S.depth,0,v1,P1,null):t.texImage2D(p1,0,y1,S.width,S.height,0,v1,P1,null)),t.bindFramebuffer(36160,C),A(S)?u.framebufferTexture2DMultisampleEXT(36160,d1,p1,n.get(Y).__webglTexture,0,O(S)):(p1===3553||p1>=34069&&p1<=34074)&&s.framebufferTexture2D(36160,d1,p1,n.get(Y).__webglTexture,0),t.bindFramebuffer(36160,null)}function u1(C,S,Y){if(s.bindRenderbuffer(36161,C),S.depthBuffer&&!S.stencilBuffer){let d1=33189;if(Y||A(S)){const p1=S.depthTexture;p1&&p1.isDepthTexture&&(p1.type===O5?d1=36012:p1.type===Q5&&(d1=33190));const v1=O(S);A(S)?u.renderbufferStorageMultisampleEXT(36161,v1,d1,S.width,S.height):s.renderbufferStorageMultisample(36161,v1,d1,S.width,S.height)}else s.renderbufferStorage(36161,d1,S.width,S.height);s.framebufferRenderbuffer(36160,36096,36161,C)}else if(S.depthBuffer&&S.stencilBuffer){const d1=O(S);Y&&A(S)===!1?s.renderbufferStorageMultisample(36161,d1,35056,S.width,S.height):A(S)?u.renderbufferStorageMultisampleEXT(36161,d1,35056,S.width,S.height):s.renderbufferStorage(36161,34041,S.width,S.height),s.framebufferRenderbuffer(36160,33306,36161,C)}else{const d1=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let p1=0;p1<d1.length;p1++){const v1=d1[p1],P1=i.convert(v1.format,v1.encoding),y1=i.convert(v1.type),r1=y(v1.internalFormat,P1,y1,v1.encoding),T1=O(S);Y&&A(S)===!1?s.renderbufferStorageMultisample(36161,T1,r1,S.width,S.height):A(S)?u.renderbufferStorageMultisampleEXT(36161,T1,r1,S.width,S.height):s.renderbufferStorage(36161,r1,S.width,S.height)}}s.bindRenderbuffer(36161,null)}function V(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),c1(S.depthTexture,0);const d1=n.get(S.depthTexture).__webglTexture,p1=O(S);if(S.depthTexture.format===e3)A(S)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,d1,0,p1):s.framebufferTexture2D(36160,36096,3553,d1,0);else if(S.depthTexture.format===G3)A(S)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,d1,0,p1):s.framebufferTexture2D(36160,33306,3553,d1,0);else throw new Error("Unknown depthTexture format")}function H(C){const S=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");V(S.__webglFramebuffer,C)}else if(Y){S.__webglDepthbuffer=[];for(let d1=0;d1<6;d1++)t.bindFramebuffer(36160,S.__webglFramebuffer[d1]),S.__webglDepthbuffer[d1]=s.createRenderbuffer(),u1(S.__webglDepthbuffer[d1],C,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),u1(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function G(C,S,Y){const d1=n.get(C);S!==void 0&&z(d1.__webglFramebuffer,C,C.texture,36064,3553),Y!==void 0&&H(C)}function Q(C){const S=C.texture,Y=n.get(C),d1=n.get(S);C.addEventListener("dispose",W),C.isWebGLMultipleRenderTargets!==!0&&(d1.__webglTexture===void 0&&(d1.__webglTexture=s.createTexture()),d1.__version=S.version,r.memory.textures++);const p1=C.isWebGLCubeRenderTarget===!0,v1=C.isWebGLMultipleRenderTargets===!0,P1=v(C)||o;if(p1){Y.__webglFramebuffer=[];for(let y1=0;y1<6;y1++)Y.__webglFramebuffer[y1]=s.createFramebuffer()}else{if(Y.__webglFramebuffer=s.createFramebuffer(),v1)if(q.drawBuffers){const y1=C.texture;for(let r1=0,T1=y1.length;r1<T1;r1++){const I1=n.get(y1[r1]);I1.__webglTexture===void 0&&(I1.__webglTexture=s.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&A(C)===!1){const y1=v1?S:[S];Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer);for(let r1=0;r1<y1.length;r1++){const T1=y1[r1];Y.__webglColorRenderbuffer[r1]=s.createRenderbuffer(),s.bindRenderbuffer(36161,Y.__webglColorRenderbuffer[r1]);const I1=i.convert(T1.format,T1.encoding),w1=i.convert(T1.type),L1=y(T1.internalFormat,I1,w1,T1.encoding,C.isXRRenderTarget===!0),C1=O(C);s.renderbufferStorageMultisample(36161,C1,L1,C.width,C.height),s.framebufferRenderbuffer(36160,36064+r1,36161,Y.__webglColorRenderbuffer[r1])}s.bindRenderbuffer(36161,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),u1(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(p1){t.bindTexture(34067,d1.__webglTexture),_(34067,S,P1);for(let y1=0;y1<6;y1++)z(Y.__webglFramebuffer[y1],C,S,36064,34069+y1);L(S,P1)&&R(34067),t.unbindTexture()}else if(v1){const y1=C.texture;for(let r1=0,T1=y1.length;r1<T1;r1++){const I1=y1[r1],w1=n.get(I1);t.bindTexture(3553,w1.__webglTexture),_(3553,I1,P1),z(Y.__webglFramebuffer,C,I1,36064+r1,3553),L(I1,P1)&&R(3553)}t.unbindTexture()}else{let y1=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?y1=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(y1,d1.__webglTexture),_(y1,S,P1),z(Y.__webglFramebuffer,C,S,36064,y1),L(S,P1)&&R(y1),t.unbindTexture()}C.depthBuffer&&H(C)}function t1(C){const S=v(C)||o,Y=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let d1=0,p1=Y.length;d1<p1;d1++){const v1=Y[d1];if(L(v1,S)){const P1=C.isWebGLCubeRenderTarget?34067:3553,y1=n.get(v1).__webglTexture;t.bindTexture(P1,y1),R(P1),t.unbindTexture()}}}function f1(C){if(o&&C.samples>0&&A(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Y=C.width,d1=C.height;let p1=16384;const v1=[],P1=C.stencilBuffer?33306:36096,y1=n.get(C),r1=C.isWebGLMultipleRenderTargets===!0;if(r1)for(let T1=0;T1<S.length;T1++)t.bindFramebuffer(36160,y1.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+T1,36161,null),t.bindFramebuffer(36160,y1.__webglFramebuffer),s.framebufferTexture2D(36009,36064+T1,3553,null,0);t.bindFramebuffer(36008,y1.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,y1.__webglFramebuffer);for(let T1=0;T1<S.length;T1++){v1.push(36064+T1),C.depthBuffer&&v1.push(P1);const I1=y1.__ignoreDepthValues!==void 0?y1.__ignoreDepthValues:!1;if(I1===!1&&(C.depthBuffer&&(p1|=256),C.stencilBuffer&&(p1|=1024)),r1&&s.framebufferRenderbuffer(36008,36064,36161,y1.__webglColorRenderbuffer[T1]),I1===!0&&(s.invalidateFramebuffer(36008,[P1]),s.invalidateFramebuffer(36009,[P1])),r1){const w1=n.get(S[T1]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,w1,0)}s.blitFramebuffer(0,0,Y,d1,0,0,Y,d1,p1,9728),m&&s.invalidateFramebuffer(36008,v1)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),r1)for(let T1=0;T1<S.length;T1++){t.bindFramebuffer(36160,y1.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+T1,36161,y1.__webglColorRenderbuffer[T1]);const I1=n.get(S[T1]).__webglTexture;t.bindFramebuffer(36160,y1.__webglFramebuffer),s.framebufferTexture2D(36009,36064+T1,3553,I1,0)}t.bindFramebuffer(36009,y1.__webglMultisampledFramebuffer)}}function O(C){return Math.min(h,C.samples)}function A(C){const S=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function x1(C){const S=r.render.frame;p.get(C)!==S&&(p.set(C,S),C.update())}function S1(C,S){const Y=C.encoding,d1=C.format,p1=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===bt||Y!==i3&&(Y===J1?o===!1?e.has("EXT_sRGB")===!0&&d1===W2?(C.format=bt,C.minFilter=P2,C.generateMipmaps=!1):S=a0.sRGBToLinear(S):(d1!==W2||p1!==q3)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Y)),S}this.allocateTextureUnit=U,this.resetTextureUnits=e1,this.setTexture2D=c1,this.setTexture2DArray=g1,this.setTexture3D=Z,this.setTextureCube=a1,this.rebindTextures=G,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=t1,this.updateMultisampleRenderTarget=f1,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=z,this.useMultisampledRTT=A}function rr(s,e,t){const n=t.isWebGL2;function q(i,r=null){let o;if(i===q3)return 5121;if(i===F8)return 32819;if(i===z8)return 32820;if(i===D8)return 5120;if(i===N8)return 5122;if(i===n0)return 5123;if(i===O8)return 5124;if(i===Q5)return 5125;if(i===O5)return 5126;if(i===v4)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(i===U8)return 6406;if(i===W2)return 6408;if(i===k8)return 6409;if(i===B8)return 6410;if(i===e3)return 6402;if(i===G3)return 34041;if(i===bt)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(i===G8)return 6403;if(i===V8)return 36244;if(i===H8)return 33319;if(i===W8)return 33320;if(i===X8)return 36249;if(i===Ae||i===Ce||i===Le||i===Re)if(r===J1)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ae)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ce)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Le)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Re)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ae)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ce)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Le)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Re)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===h6||i===u6||i===f6||i===d6)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===h6)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===u6)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===f6)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===d6)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===j8)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===m6||i===p6)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===m6)return r===J1?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===p6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===x6||i===g6||i===_6||i===v6||i===y6||i===M6||i===b6||i===S6||i===w6||i===T6||i===E6||i===A6||i===C6||i===L6)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===x6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===g6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===v6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===y6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===M6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===b6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===S6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===w6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===T6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===E6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===A6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===C6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===L6)return r===J1?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pe)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Pe)return r===J1?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(i===Y8||i===R6||i===P6||i===I6)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Pe)return o.COMPRESSED_RED_RGTC1_EXT;if(i===R6)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===P6)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===I6)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===I3?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[i]!==void 0?s[i]:null}return{convert:q}}class or extends C2{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class X2 extends i2{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ar={type:"move"};class it{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new X2,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new X2,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new X2,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let q=null,i=null,r=null;const o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const d of e.hand.values()){const f=t.getJointPose(d,n),x=this._getHandJoint(l,d);f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=f.radius),x.visible=f!==null}const c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=c.position.distanceTo(h.position),m=.02,p=.005;l.inputState.pinching&&u>m+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1));o!==null&&(q=t.getPose(e.targetRaySpace,n),q===null&&i!==null&&(q=i),q!==null&&(o.matrix.fromArray(q.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),q.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(q.linearVelocity)):o.hasLinearVelocity=!1,q.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(q.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ar)))}return o!==null&&(o.visible=q!==null),a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new X2;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class lr extends y2{constructor(e,t,n,q,i,r,o,a,l,c){if(c=c!==void 0?c:e3,c!==e3&&c!==G3)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===e3&&(n=Q5),n===void 0&&c===G3&&(n=I3),super(null,q,i,r,o,a,c,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:x2,this.minFilter=a!==void 0?a:x2,this.flipY=!1,this.generateMipmaps=!1}}class cr extends Y3{constructor(e,t){super();const n=this;let q=null,i=1,r=null,o="local-floor",a=1,l=null,c=null,h=null,u=null,m=null,p=null;const d=t.getContextAttributes();let f=null,x=null;const M=[],g=[],v=new Set,b=new Map,L=new C2;L.layers.enable(1),L.viewport=new $1;const R=new C2;R.layers.enable(2),R.viewport=new $1;const y=[L,R],T=new or;T.layers.enable(1),T.layers.enable(2);let D=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let a1=M[Z];return a1===void 0&&(a1=new it,M[Z]=a1),a1.getTargetRaySpace()},this.getControllerGrip=function(Z){let a1=M[Z];return a1===void 0&&(a1=new it,M[Z]=a1),a1.getGripSpace()},this.getHand=function(Z){let a1=M[Z];return a1===void 0&&(a1=new it,M[Z]=a1),a1.getHandSpace()};function W(Z){const a1=g.indexOf(Z.inputSource);if(a1===-1)return;const I=M[a1];I!==void 0&&I.dispatchEvent({type:Z.type,data:Z.inputSource})}function k(){q.removeEventListener("select",W),q.removeEventListener("selectstart",W),q.removeEventListener("selectend",W),q.removeEventListener("squeeze",W),q.removeEventListener("squeezestart",W),q.removeEventListener("squeezeend",W),q.removeEventListener("end",k),q.removeEventListener("inputsourceschange",N);for(let Z=0;Z<M.length;Z++){const a1=g[Z];a1!==null&&(g[Z]=null,M[Z].disconnect(a1))}D=null,$=null,e.setRenderTarget(f),m=null,u=null,h=null,q=null,x=null,g1.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){i=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return q},this.setSession=async function(Z){if(q=Z,q!==null){if(f=e.getRenderTarget(),q.addEventListener("select",W),q.addEventListener("selectstart",W),q.addEventListener("selectend",W),q.addEventListener("squeeze",W),q.addEventListener("squeezestart",W),q.addEventListener("squeezeend",W),q.addEventListener("end",k),q.addEventListener("inputsourceschange",N),d.xrCompatible!==!0&&await t.makeXRCompatible(),q.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const a1={antialias:q.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:i};m=new XRWebGLLayer(q,t,a1),q.updateRenderState({baseLayer:m}),x=new s3(m.framebufferWidth,m.framebufferHeight,{format:W2,type:q3,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let a1=null,I=null,P=null;d.depth&&(P=d.stencil?35056:33190,a1=d.stencil?G3:e3,I=d.stencil?I3:Q5);const _={colorFormat:32856,depthFormat:P,scaleFactor:i};h=new XRWebGLBinding(q,t),u=h.createProjectionLayer(_),q.updateRenderState({layers:[u]}),x=new s3(u.textureWidth,u.textureHeight,{format:W2,type:q3,depthTexture:new lr(u.textureWidth,u.textureHeight,I,void 0,void 0,void 0,void 0,void 0,void 0,a1),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const w=e.properties.get(x);w.__ignoreDepthValues=u.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(a),l=null,r=await q.requestReferenceSpace(o),g1.setContext(q),g1.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(Z){for(let a1=0;a1<Z.removed.length;a1++){const I=Z.removed[a1],P=g.indexOf(I);P>=0&&(g[P]=null,M[P].disconnect(I))}for(let a1=0;a1<Z.added.length;a1++){const I=Z.added[a1];let P=g.indexOf(I);if(P===-1){for(let w=0;w<M.length;w++)if(w>=g.length){g.push(I),P=w;break}else if(g[w]===null){g[w]=I,P=w;break}if(P===-1)break}const _=M[P];_&&_.connect(I)}}const K=new F,q1=new F;function e1(Z,a1,I){K.setFromMatrixPosition(a1.matrixWorld),q1.setFromMatrixPosition(I.matrixWorld);const P=K.distanceTo(q1),_=a1.projectionMatrix.elements,w=I.projectionMatrix.elements,X=_[14]/(_[10]-1),n1=_[14]/(_[10]+1),z=(_[9]+1)/_[5],u1=(_[9]-1)/_[5],V=(_[8]-1)/_[0],H=(w[8]+1)/w[0],G=X*V,Q=X*H,t1=P/(-V+H),f1=t1*-V;a1.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(f1),Z.translateZ(t1),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const O=X+t1,A=n1+t1,x1=G-f1,S1=Q+(P-f1),C=z*n1/A*O,S=u1*n1/A*O;Z.projectionMatrix.makePerspective(x1,S1,C,S,O,A)}function U(Z,a1){a1===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(a1.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(q===null)return;T.near=R.near=L.near=Z.near,T.far=R.far=L.far=Z.far,(D!==T.near||$!==T.far)&&(q.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,$=T.far);const a1=Z.parent,I=T.cameras;U(T,a1);for(let _=0;_<I.length;_++)U(I[_],a1);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),Z.matrix.copy(T.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale);const P=Z.children;for(let _=0,w=P.length;_<w;_++)P[_].updateMatrixWorld(!0);I.length===2?e1(T,L,R):T.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(u===null&&m===null))return a},this.setFoveation=function(Z){a=Z,u!==null&&(u.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.getPlanes=function(){return v};let h1=null;function c1(Z,a1){if(c=a1.getViewerPose(l||r),p=a1,c!==null){const I=c.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let P=!1;I.length!==T.cameras.length&&(T.cameras.length=0,P=!0);for(let _=0;_<I.length;_++){const w=I[_];let X=null;if(m!==null)X=m.getViewport(w);else{const z=h.getViewSubImage(u,w);X=z.viewport,_===0&&(e.setRenderTargetTextures(x,z.colorTexture,u.ignoreDepthValues?void 0:z.depthStencilTexture),e.setRenderTarget(x))}let n1=y[_];n1===void 0&&(n1=new C2,n1.layers.enable(_),n1.viewport=new $1,y[_]=n1),n1.matrix.fromArray(w.transform.matrix),n1.projectionMatrix.fromArray(w.projectionMatrix),n1.viewport.set(X.x,X.y,X.width,X.height),_===0&&T.matrix.copy(n1.matrix),P===!0&&T.cameras.push(n1)}}for(let I=0;I<M.length;I++){const P=g[I],_=M[I];P!==null&&_!==void 0&&_.update(P,a1,l||r)}if(h1&&h1(Z,a1),a1.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:a1.detectedPlanes});let I=null;for(const P of v)a1.detectedPlanes.has(P)||(I===null&&(I=[]),I.push(P));if(I!==null)for(const P of I)v.delete(P),b.delete(P),n.dispatchEvent({type:"planeremoved",data:P});for(const P of a1.detectedPlanes)if(!v.has(P))v.add(P),b.set(P,a1.lastChangedTime),n.dispatchEvent({type:"planeadded",data:P});else{const _=b.get(P);P.lastChangedTime>_&&(b.set(P,P.lastChangedTime),n.dispatchEvent({type:"planechanged",data:P}))}}p=null}const g1=new p0;g1.setAnimationLoop(c1),this.setAnimationLoop=function(Z){h1=Z},this.dispose=function(){}}}function hr(s,e){function t(d,f){f.color.getRGB(d.fogColor.value,f0(s)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function n(d,f,x,M,g){f.isMeshBasicMaterial||f.isMeshLambertMaterial?q(d,f):f.isMeshToonMaterial?(q(d,f),c(d,f)):f.isMeshPhongMaterial?(q(d,f),l(d,f)):f.isMeshStandardMaterial?(q(d,f),h(d,f),f.isMeshPhysicalMaterial&&u(d,f,g)):f.isMeshMatcapMaterial?(q(d,f),m(d,f)):f.isMeshDepthMaterial?q(d,f):f.isMeshDistanceMaterial?(q(d,f),p(d,f)):f.isMeshNormalMaterial?q(d,f):f.isLineBasicMaterial?(i(d,f),f.isLineDashedMaterial&&r(d,f)):f.isPointsMaterial?o(d,f,x,M):f.isSpriteMaterial?a(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function q(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map),f.alphaMap&&(d.alphaMap.value=f.alphaMap),f.bumpMap&&(d.bumpMap.value=f.bumpMap,d.bumpScale.value=f.bumpScale,f.side===U2&&(d.bumpScale.value*=-1)),f.displacementMap&&(d.displacementMap.value=f.displacementMap,d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap),f.normalMap&&(d.normalMap.value=f.normalMap,d.normalScale.value.copy(f.normalScale),f.side===U2&&d.normalScale.value.negate()),f.specularMap&&(d.specularMap.value=f.specularMap),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(d.envMap.value=x,d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap){d.lightMap.value=f.lightMap;const v=s.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=f.lightMapIntensity*v}f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity);let M;f.map?M=f.map:f.specularMap?M=f.specularMap:f.displacementMap?M=f.displacementMap:f.normalMap?M=f.normalMap:f.bumpMap?M=f.bumpMap:f.roughnessMap?M=f.roughnessMap:f.metalnessMap?M=f.metalnessMap:f.alphaMap?M=f.alphaMap:f.emissiveMap?M=f.emissiveMap:f.clearcoatMap?M=f.clearcoatMap:f.clearcoatNormalMap?M=f.clearcoatNormalMap:f.clearcoatRoughnessMap?M=f.clearcoatRoughnessMap:f.iridescenceMap?M=f.iridescenceMap:f.iridescenceThicknessMap?M=f.iridescenceThicknessMap:f.specularIntensityMap?M=f.specularIntensityMap:f.specularColorMap?M=f.specularColorMap:f.transmissionMap?M=f.transmissionMap:f.thicknessMap?M=f.thicknessMap:f.sheenColorMap?M=f.sheenColorMap:f.sheenRoughnessMap&&(M=f.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uvTransform.value.copy(M.matrix));let g;f.aoMap?g=f.aoMap:f.lightMap&&(g=f.lightMap),g!==void 0&&(g.isWebGLRenderTarget&&(g=g.texture),g.matrixAutoUpdate===!0&&g.updateMatrix(),d.uv2Transform.value.copy(g.matrix))}function i(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity}function r(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function o(d,f,x,M){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*x,d.scale.value=M*.5,f.map&&(d.map.value=f.map),f.alphaMap&&(d.alphaMap.value=f.alphaMap),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);let g;f.map?g=f.map:f.alphaMap&&(g=f.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),d.uvTransform.value.copy(g.matrix))}function a(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map),f.alphaMap&&(d.alphaMap.value=f.alphaMap),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function l(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function c(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function h(d,f){d.roughness.value=f.roughness,d.metalness.value=f.metalness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function u(d,f,x){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),d.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===U2&&d.clearcoatNormalScale.value.negate())),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap)}function m(d,f){f.matcap&&(d.matcap.value=f.matcap)}function p(d,f){d.referencePosition.value.copy(f.referencePosition),d.nearDistance.value=f.nearDistance,d.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function ur(s,e,t,n){let q={},i={},r=[];const o=t.isWebGL2?s.getParameter(35375):0;function a(M,g){const v=g.program;n.uniformBlockBinding(M,v)}function l(M,g){let v=q[M.id];v===void 0&&(p(M),v=c(M),q[M.id]=v,M.addEventListener("dispose",f));const b=g.program;n.updateUBOMapping(M,b);const L=e.render.frame;i[M.id]!==L&&(u(M),i[M.id]=L)}function c(M){const g=h();M.__bindingPointIndex=g;const v=s.createBuffer(),b=M.__size,L=M.usage;return s.bindBuffer(35345,v),s.bufferData(35345,b,L),s.bindBuffer(35345,null),s.bindBufferBase(35345,g,v),v}function h(){for(let M=0;M<o;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const g=q[M.id],v=M.uniforms,b=M.__cache;s.bindBuffer(35345,g);for(let L=0,R=v.length;L<R;L++){const y=v[L];if(m(y,L,b)===!0){const T=y.__offset,D=Array.isArray(y.value)?y.value:[y.value];let $=0;for(let W=0;W<D.length;W++){const k=D[W],N=d(k);typeof k=="number"?(y.__data[0]=k,s.bufferSubData(35345,T+$,y.__data)):k.isMatrix3?(y.__data[0]=k.elements[0],y.__data[1]=k.elements[1],y.__data[2]=k.elements[2],y.__data[3]=k.elements[0],y.__data[4]=k.elements[3],y.__data[5]=k.elements[4],y.__data[6]=k.elements[5],y.__data[7]=k.elements[0],y.__data[8]=k.elements[6],y.__data[9]=k.elements[7],y.__data[10]=k.elements[8],y.__data[11]=k.elements[0]):(k.toArray(y.__data,$),$+=N.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,T,y.__data)}}s.bindBuffer(35345,null)}function m(M,g,v){const b=M.value;if(v[g]===void 0){if(typeof b=="number")v[g]=b;else{const L=Array.isArray(b)?b:[b],R=[];for(let y=0;y<L.length;y++)R.push(L[y].clone());v[g]=R}return!0}else if(typeof b=="number"){if(v[g]!==b)return v[g]=b,!0}else{const L=Array.isArray(v[g])?v[g]:[v[g]],R=Array.isArray(b)?b:[b];for(let y=0;y<L.length;y++){const T=L[y];if(T.equals(R[y])===!1)return T.copy(R[y]),!0}}return!1}function p(M){const g=M.uniforms;let v=0;const b=16;let L=0;for(let R=0,y=g.length;R<y;R++){const T=g[R],D={boundary:0,storage:0},$=Array.isArray(T.value)?T.value:[T.value];for(let W=0,k=$.length;W<k;W++){const N=$[W],K=d(N);D.boundary+=K.boundary,D.storage+=K.storage}if(T.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=v,R>0){L=v%b;const W=b-L;L!==0&&W-D.boundary<0&&(v+=b-L,T.__offset=v)}v+=D.storage}return L=v%b,L>0&&(v+=b-L),M.__size=v,M.__cache={},this}function d(M){const g={boundary:0,storage:0};return typeof M=="number"?(g.boundary=4,g.storage=4):M.isVector2?(g.boundary=8,g.storage=8):M.isVector3||M.isColor?(g.boundary=16,g.storage=12):M.isVector4?(g.boundary=16,g.storage=16):M.isMatrix3?(g.boundary=48,g.storage=48):M.isMatrix4?(g.boundary=64,g.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),g}function f(M){const g=M.target;g.removeEventListener("dispose",f);const v=r.indexOf(g.__bindingPointIndex);r.splice(v,1),s.deleteBuffer(q[g.id]),delete q[g.id],delete i[g.id]}function x(){for(const M in q)s.deleteBuffer(q[M]);r=[],q={},i={}}return{bind:a,update:l,dispose:x}}function fr(){const s=S4("canvas");return s.style.display="block",s}function y0(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:fr(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,q=s.stencil!==void 0?s.stencil:!0,i=s.antialias!==void 0?s.antialias:!1,r=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,o=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,a=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=s.alpha!==void 0?s.alpha:!1;let h=null,u=null;const m=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=i3,this.physicallyCorrectLights=!1,this.toneMapping=S5,this.toneMappingExposure=1;const d=this;let f=!1,x=0,M=0,g=null,v=-1,b=null;const L=new $1,R=new $1;let y=null,T=e.width,D=e.height,$=1,W=null,k=null;const N=new $1(0,0,T,D),K=new $1(0,0,T,D);let q1=!1;const e1=new zt;let U=!1,h1=!1,c1=null;const g1=new z1,Z=new l1,a1=new F,I={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function P(){return g===null?$:1}let _=t;function w(E,J){for(let s1=0;s1<E.length;s1++){const j=E[s1],o1=e.getContext(j,J);if(o1!==null)return o1}return null}try{const E={alpha:!0,depth:n,stencil:q,antialias:i,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:a,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nt}`),e.addEventListener("webglcontextlost",L1,!1),e.addEventListener("webglcontextrestored",C1,!1),e.addEventListener("webglcontextcreationerror",X1,!1),_===null){const J=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&J.shift(),_=w(J,E),_===null)throw w(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}_.getShaderPrecisionFormat===void 0&&(_.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let X,n1,z,u1,V,H,G,Q,t1,f1,O,A,x1,S1,C,S,Y,d1,p1,v1,P1,y1,r1,T1;function I1(){X=new Si(_),n1=new gi(_,X,s),X.init(n1),y1=new rr(_,X,n1),z=new ir(_,X,n1),u1=new Ei,V=new Hs,H=new sr(_,X,z,V,n1,y1,u1),G=new vi(d),Q=new bi(d),t1=new N9(_,n1),r1=new pi(_,X,t1,n1),f1=new wi(_,t1,u1,r1),O=new Ri(_,f1,t1,u1),p1=new Li(_,n1,H),S=new _i(V),A=new Vs(d,G,Q,X,n1,r1,S),x1=new hr(d,V),S1=new Xs,C=new $s(X,n1),d1=new mi(d,G,Q,z,O,c,r),Y=new qr(d,O,n1),T1=new ur(_,u1,n1,z),v1=new xi(_,X,u1,n1),P1=new Ti(_,X,u1,n1),u1.programs=A.programs,d.capabilities=n1,d.extensions=X,d.properties=V,d.renderLists=S1,d.shadowMap=Y,d.state=z,d.info=u1}I1();const w1=new cr(d,_);this.xr=w1,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const E=X.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=X.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(T,D,!1))},this.getSize=function(E){return E.set(T,D)},this.setSize=function(E,J,s1){if(w1.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,D=J,e.width=Math.floor(E*$),e.height=Math.floor(J*$),s1!==!1&&(e.style.width=E+"px",e.style.height=J+"px"),this.setViewport(0,0,E,J)},this.getDrawingBufferSize=function(E){return E.set(T*$,D*$).floor()},this.setDrawingBufferSize=function(E,J,s1){T=E,D=J,$=s1,e.width=Math.floor(E*s1),e.height=Math.floor(J*s1),this.setViewport(0,0,E,J)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(N)},this.setViewport=function(E,J,s1,j){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,J,s1,j),z.viewport(L.copy(N).multiplyScalar($).floor())},this.getScissor=function(E){return E.copy(K)},this.setScissor=function(E,J,s1,j){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,J,s1,j),z.scissor(R.copy(K).multiplyScalar($).floor())},this.getScissorTest=function(){return q1},this.setScissorTest=function(E){z.setScissorTest(q1=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){k=E},this.getClearColor=function(E){return E.copy(d1.getClearColor())},this.setClearColor=function(){d1.setClearColor.apply(d1,arguments)},this.getClearAlpha=function(){return d1.getClearAlpha()},this.setClearAlpha=function(){d1.setClearAlpha.apply(d1,arguments)},this.clear=function(E=!0,J=!0,s1=!0){let j=0;E&&(j|=16384),J&&(j|=256),s1&&(j|=1024),_.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",L1,!1),e.removeEventListener("webglcontextrestored",C1,!1),e.removeEventListener("webglcontextcreationerror",X1,!1),S1.dispose(),C.dispose(),V.dispose(),G.dispose(),Q.dispose(),O.dispose(),r1.dispose(),T1.dispose(),A.dispose(),w1.dispose(),w1.removeEventListener("sessionstart",b1),w1.removeEventListener("sessionend",E1),c1&&(c1.dispose(),c1=null),Y1.stop()};function L1(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function C1(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const E=u1.autoReset,J=Y.enabled,s1=Y.autoUpdate,j=Y.needsUpdate,o1=Y.type;I1(),u1.autoReset=E,Y.enabled=J,Y.autoUpdate=s1,Y.needsUpdate=j,Y.type=o1}function X1(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function e2(E){const J=E.target;J.removeEventListener("dispose",e2),f2(J)}function f2(E){B(E),V.remove(E)}function B(E){const J=V.get(E).programs;J!==void 0&&(J.forEach(function(s1){A.releaseProgram(s1)}),E.isShaderMaterial&&A.releaseShaderCache(E))}this.renderBufferDirect=function(E,J,s1,j,o1,R1){J===null&&(J=I);const D1=o1.isMesh&&o1.matrixWorld.determinant()<0,F1=t8(E,J,s1,j,o1);z.setMaterial(j,D1);let U1=s1.index,j1=1;j.wireframe===!0&&(U1=f1.getWireframeAttribute(s1),j1=2);const k1=s1.drawRange,B1=s1.attributes.position;let r2=k1.start*j1,D2=(k1.start+k1.count)*j1;R1!==null&&(r2=Math.max(r2,R1.start*j1),D2=Math.min(D2,(R1.start+R1.count)*j1)),U1!==null?(r2=Math.max(r2,0),D2=Math.min(D2,U1.count)):B1!=null&&(r2=Math.max(r2,0),D2=Math.min(D2,B1.count));const u5=D2-r2;if(u5<0||u5===1/0)return;r1.setup(o1,j,F1,s1,U1);let V5,o2=v1;if(U1!==null&&(V5=t1.get(U1),o2=P1,o2.setIndex(V5)),o1.isMesh)j.wireframe===!0?(z.setLineWidth(j.wireframeLinewidth*P()),o2.setMode(1)):o2.setMode(4);else if(o1.isLine){let G1=j.linewidth;G1===void 0&&(G1=1),z.setLineWidth(G1*P()),o1.isLineSegments?o2.setMode(1):o1.isLineLoop?o2.setMode(2):o2.setMode(3)}else o1.isPoints?o2.setMode(0):o1.isSprite&&o2.setMode(4);if(o1.isInstancedMesh)o2.renderInstances(r2,u5,o1.count);else if(s1.isInstancedBufferGeometry){const G1=s1._maxInstanceCount!==void 0?s1._maxInstanceCount:1/0,Se=Math.min(s1.instanceCount,G1);o2.renderInstances(r2,u5,Se)}else o2.render(r2,u5)},this.compile=function(E,J){function s1(j,o1,R1){j.transparent===!0&&j.side===s5&&j.forceSinglePass===!1?(j.side=U2,j.needsUpdate=!0,B2(j,o1,R1),j.side=w5,j.needsUpdate=!0,B2(j,o1,R1),j.side=s5):B2(j,o1,R1)}u=C.get(E),u.init(),p.push(u),E.traverseVisible(function(j){j.isLight&&j.layers.test(J.layers)&&(u.pushLight(j),j.castShadow&&u.pushShadow(j))}),u.setupLights(d.physicallyCorrectLights),E.traverse(function(j){const o1=j.material;if(o1)if(Array.isArray(o1))for(let R1=0;R1<o1.length;R1++){const D1=o1[R1];s1(D1,E,j)}else s1(o1,E,j)}),p.pop(),u=null};let i1=null;function m1(E){i1&&i1(E)}function b1(){Y1.stop()}function E1(){Y1.start()}const Y1=new p0;Y1.setAnimationLoop(m1),typeof self<"u"&&Y1.setContext(self),this.setAnimationLoop=function(E){i1=E,w1.setAnimationLoop(E),E===null?Y1.stop():Y1.start()},w1.addEventListener("sessionstart",b1),w1.addEventListener("sessionend",E1),this.render=function(E,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),w1.enabled===!0&&w1.isPresenting===!0&&(w1.cameraAutoUpdate===!0&&w1.updateCamera(J),J=w1.getCamera()),E.isScene===!0&&E.onBeforeRender(d,E,J,g),u=C.get(E,p.length),u.init(),p.push(u),g1.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),e1.setFromProjectionMatrix(g1),h1=this.localClippingEnabled,U=S.init(this.clippingPlanes,h1),h=S1.get(E,m.length),h.init(),m.push(h),d2(E,J,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(W,k),U===!0&&S.beginShadows();const s1=u.state.shadowsArray;if(Y.render(s1,E,J),U===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),d1.render(h,E),u.setupLights(d.physicallyCorrectLights),J.isArrayCamera){const j=J.cameras;for(let o1=0,R1=j.length;o1<R1;o1++){const D1=j[o1];M2(h,E,D1,D1.viewport)}}else M2(h,E,J);g!==null&&(H.updateMultisampleRenderTarget(g),H.updateRenderTargetMipmap(g)),E.isScene===!0&&E.onAfterRender(d,E,J),r1.resetDefaultState(),v=-1,b=null,p.pop(),p.length>0?u=p[p.length-1]:u=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function d2(E,J,s1,j){if(E.visible===!1)return;if(E.layers.test(J.layers)){if(E.isGroup)s1=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(J);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||e1.intersectsSprite(E)){j&&a1.setFromMatrixPosition(E.matrixWorld).applyMatrix4(g1);const D1=O.update(E),F1=E.material;F1.visible&&h.push(E,D1,F1,s1,a1.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==u1.render.frame&&(E.skeleton.update(),E.skeleton.frame=u1.render.frame),!E.frustumCulled||e1.intersectsObject(E))){j&&a1.setFromMatrixPosition(E.matrixWorld).applyMatrix4(g1);const D1=O.update(E),F1=E.material;if(Array.isArray(F1)){const U1=D1.groups;for(let j1=0,k1=U1.length;j1<k1;j1++){const B1=U1[j1],r2=F1[B1.materialIndex];r2&&r2.visible&&h.push(E,D1,r2,s1,a1.z,B1)}}else F1.visible&&h.push(E,D1,F1,s1,a1.z,null)}}const R1=E.children;for(let D1=0,F1=R1.length;D1<F1;D1++)d2(R1[D1],J,s1,j)}function M2(E,J,s1,j){const o1=E.opaque,R1=E.transmissive,D1=E.transparent;u.setupLightsView(s1),U===!0&&S.setGlobalState(d.clippingPlanes,s1),R1.length>0&&G5(o1,J,s1),j&&z.viewport(L.copy(j)),o1.length>0&&t2(o1,J,s1),R1.length>0&&t2(R1,J,s1),D1.length>0&&t2(D1,J,s1),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function G5(E,J,s1){const j=n1.isWebGL2;c1===null&&(c1=new s3(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?v4:q3,minFilter:n3,samples:j&&i===!0?4:0})),d.getDrawingBufferSize(Z),j?c1.setSize(Z.x,Z.y):c1.setSize(ue(Z.x),ue(Z.y));const o1=d.getRenderTarget();d.setRenderTarget(c1),d.clear();const R1=d.toneMapping;d.toneMapping=S5,t2(E,J,s1),d.toneMapping=R1,H.updateMultisampleRenderTarget(c1),H.updateRenderTargetMipmap(c1),d.setRenderTarget(o1)}function t2(E,J,s1){const j=J.isScene===!0?J.overrideMaterial:null;for(let o1=0,R1=E.length;o1<R1;o1++){const D1=E[o1],F1=D1.object,U1=D1.geometry,j1=j===null?D1.material:j,k1=D1.group;F1.layers.test(s1.layers)&&h5(F1,J,s1,U1,j1,k1)}}function h5(E,J,s1,j,o1,R1){E.onBeforeRender(d,J,s1,j,o1,R1),E.modelViewMatrix.multiplyMatrices(s1.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),o1.onBeforeRender(d,J,s1,j,E,R1),o1.transparent===!0&&o1.side===s5&&o1.forceSinglePass===!1?(o1.side=U2,o1.needsUpdate=!0,d.renderBufferDirect(s1,J,j,o1,E,R1),o1.side=w5,o1.needsUpdate=!0,d.renderBufferDirect(s1,J,j,o1,E,R1),o1.side=s5):d.renderBufferDirect(s1,J,j,o1,E,R1),E.onAfterRender(d,J,s1,j,o1,R1)}function B2(E,J,s1){J.isScene!==!0&&(J=I);const j=V.get(E),o1=u.state.lights,R1=u.state.shadowsArray,D1=o1.state.version,F1=A.getParameters(E,o1.state,R1,J,s1),U1=A.getProgramCacheKey(F1);let j1=j.programs;j.environment=E.isMeshStandardMaterial?J.environment:null,j.fog=J.fog,j.envMap=(E.isMeshStandardMaterial?Q:G).get(E.envMap||j.environment),j1===void 0&&(E.addEventListener("dispose",e2),j1=new Map,j.programs=j1);let k1=j1.get(U1);if(k1!==void 0){if(j.currentProgram===k1&&j.lightsStateVersion===D1)return n6(E,F1),k1}else F1.uniforms=A.getUniforms(E),E.onBuild(s1,F1,d),E.onBeforeCompile(F1,d),k1=A.acquireProgram(F1,U1),j1.set(U1,k1),j.uniforms=F1.uniforms;const B1=j.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(B1.clippingPlanes=S.uniform),n6(E,F1),j.needsLights=q8(E),j.lightsStateVersion=D1,j.needsLights&&(B1.ambientLightColor.value=o1.state.ambient,B1.lightProbe.value=o1.state.probe,B1.directionalLights.value=o1.state.directional,B1.directionalLightShadows.value=o1.state.directionalShadow,B1.spotLights.value=o1.state.spot,B1.spotLightShadows.value=o1.state.spotShadow,B1.rectAreaLights.value=o1.state.rectArea,B1.ltc_1.value=o1.state.rectAreaLTC1,B1.ltc_2.value=o1.state.rectAreaLTC2,B1.pointLights.value=o1.state.point,B1.pointLightShadows.value=o1.state.pointShadow,B1.hemisphereLights.value=o1.state.hemi,B1.directionalShadowMap.value=o1.state.directionalShadowMap,B1.directionalShadowMatrix.value=o1.state.directionalShadowMatrix,B1.spotShadowMap.value=o1.state.spotShadowMap,B1.spotLightMatrix.value=o1.state.spotLightMatrix,B1.spotLightMap.value=o1.state.spotLightMap,B1.pointShadowMap.value=o1.state.pointShadowMap,B1.pointShadowMatrix.value=o1.state.pointShadowMatrix);const r2=k1.getUniforms(),D2=oe.seqWithValue(r2.seq,B1);return j.currentProgram=k1,j.uniformsList=D2,k1}function n6(E,J){const s1=V.get(E);s1.outputEncoding=J.outputEncoding,s1.instancing=J.instancing,s1.skinning=J.skinning,s1.morphTargets=J.morphTargets,s1.morphNormals=J.morphNormals,s1.morphColors=J.morphColors,s1.morphTargetsCount=J.morphTargetsCount,s1.numClippingPlanes=J.numClippingPlanes,s1.numIntersection=J.numClipIntersection,s1.vertexAlphas=J.vertexAlphas,s1.vertexTangents=J.vertexTangents,s1.toneMapping=J.toneMapping}function t8(E,J,s1,j,o1){J.isScene!==!0&&(J=I),H.resetTextureUnits();const R1=J.fog,D1=j.isMeshStandardMaterial?J.environment:null,F1=g===null?d.outputEncoding:g.isXRRenderTarget===!0?g.texture.encoding:i3,U1=(j.isMeshStandardMaterial?Q:G).get(j.envMap||D1),j1=j.vertexColors===!0&&!!s1.attributes.color&&s1.attributes.color.itemSize===4,k1=!!j.normalMap&&!!s1.attributes.tangent,B1=!!s1.morphAttributes.position,r2=!!s1.morphAttributes.normal,D2=!!s1.morphAttributes.color,u5=j.toneMapped?d.toneMapping:S5,V5=s1.morphAttributes.position||s1.morphAttributes.normal||s1.morphAttributes.color,o2=V5!==void 0?V5.length:0,G1=V.get(j),Se=u.state.lights;if(U===!0&&(h1===!0||E!==b)){const N2=E===b&&j.id===v;S.setState(j,E,N2)}let m2=!1;j.version===G1.__version?(G1.needsLights&&G1.lightsStateVersion!==Se.state.version||G1.outputEncoding!==F1||o1.isInstancedMesh&&G1.instancing===!1||!o1.isInstancedMesh&&G1.instancing===!0||o1.isSkinnedMesh&&G1.skinning===!1||!o1.isSkinnedMesh&&G1.skinning===!0||G1.envMap!==U1||j.fog===!0&&G1.fog!==R1||G1.numClippingPlanes!==void 0&&(G1.numClippingPlanes!==S.numPlanes||G1.numIntersection!==S.numIntersection)||G1.vertexAlphas!==j1||G1.vertexTangents!==k1||G1.morphTargets!==B1||G1.morphNormals!==r2||G1.morphColors!==D2||G1.toneMapping!==u5||n1.isWebGL2===!0&&G1.morphTargetsCount!==o2)&&(m2=!0):(m2=!0,G1.__version=j.version);let H5=G1.currentProgram;m2===!0&&(H5=B2(j,J,o1));let q6=!1,e4=!1,we=!1;const w2=H5.getUniforms(),W5=G1.uniforms;if(z.useProgram(H5.program)&&(q6=!0,e4=!0,we=!0),j.id!==v&&(v=j.id,e4=!0),q6||b!==E){if(w2.setValue(_,"projectionMatrix",E.projectionMatrix),n1.logarithmicDepthBuffer&&w2.setValue(_,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),b!==E&&(b=E,e4=!0,we=!0),j.isShaderMaterial||j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshStandardMaterial||j.envMap){const N2=w2.map.cameraPosition;N2!==void 0&&N2.setValue(_,a1.setFromMatrixPosition(E.matrixWorld))}(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&w2.setValue(_,"isOrthographic",E.isOrthographicCamera===!0),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial||j.isShadowMaterial||o1.isSkinnedMesh)&&w2.setValue(_,"viewMatrix",E.matrixWorldInverse)}if(o1.isSkinnedMesh){w2.setOptional(_,o1,"bindMatrix"),w2.setOptional(_,o1,"bindMatrixInverse");const N2=o1.skeleton;N2&&(n1.floatVertexTextures?(N2.boneTexture===null&&N2.computeBoneTexture(),w2.setValue(_,"boneTexture",N2.boneTexture,H),w2.setValue(_,"boneTextureSize",N2.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Te=s1.morphAttributes;if((Te.position!==void 0||Te.normal!==void 0||Te.color!==void 0&&n1.isWebGL2===!0)&&p1.update(o1,s1,j,H5),(e4||G1.receiveShadow!==o1.receiveShadow)&&(G1.receiveShadow=o1.receiveShadow,w2.setValue(_,"receiveShadow",o1.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(W5.envMap.value=U1,W5.flipEnvMap.value=U1.isCubeTexture&&U1.isRenderTargetTexture===!1?-1:1),e4&&(w2.setValue(_,"toneMappingExposure",d.toneMappingExposure),G1.needsLights&&n8(W5,we),R1&&j.fog===!0&&x1.refreshFogUniforms(W5,R1),x1.refreshMaterialUniforms(W5,j,$,D,c1),oe.upload(_,G1.uniformsList,W5,H)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(oe.upload(_,G1.uniformsList,W5,H),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&w2.setValue(_,"center",o1.center),w2.setValue(_,"modelViewMatrix",o1.modelViewMatrix),w2.setValue(_,"normalMatrix",o1.normalMatrix),w2.setValue(_,"modelMatrix",o1.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const N2=j.uniformsGroups;for(let Ee=0,i8=N2.length;Ee<i8;Ee++)if(n1.isWebGL2){const i6=N2[Ee];T1.update(i6,H5),T1.bind(i6,H5)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return H5}function n8(E,J){E.ambientLightColor.needsUpdate=J,E.lightProbe.needsUpdate=J,E.directionalLights.needsUpdate=J,E.directionalLightShadows.needsUpdate=J,E.pointLights.needsUpdate=J,E.pointLightShadows.needsUpdate=J,E.spotLights.needsUpdate=J,E.spotLightShadows.needsUpdate=J,E.rectAreaLights.needsUpdate=J,E.hemisphereLights.needsUpdate=J}function q8(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return g},this.setRenderTargetTextures=function(E,J,s1){V.get(E.texture).__webglTexture=J,V.get(E.depthTexture).__webglTexture=s1;const j=V.get(E);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=s1===void 0,j.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,J){const s1=V.get(E);s1.__webglFramebuffer=J,s1.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(E,J=0,s1=0){g=E,x=J,M=s1;let j=!0,o1=null,R1=!1,D1=!1;if(E){const U1=V.get(E);U1.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(36160,null),j=!1):U1.__webglFramebuffer===void 0?H.setupRenderTarget(E):U1.__hasExternalTextures&&H.rebindTextures(E,V.get(E.texture).__webglTexture,V.get(E.depthTexture).__webglTexture);const j1=E.texture;(j1.isData3DTexture||j1.isDataArrayTexture||j1.isCompressedArrayTexture)&&(D1=!0);const k1=V.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(o1=k1[J],R1=!0):n1.isWebGL2&&E.samples>0&&H.useMultisampledRTT(E)===!1?o1=V.get(E).__webglMultisampledFramebuffer:o1=k1,L.copy(E.viewport),R.copy(E.scissor),y=E.scissorTest}else L.copy(N).multiplyScalar($).floor(),R.copy(K).multiplyScalar($).floor(),y=q1;if(z.bindFramebuffer(36160,o1)&&n1.drawBuffers&&j&&z.drawBuffers(E,o1),z.viewport(L),z.scissor(R),z.setScissorTest(y),R1){const U1=V.get(E.texture);_.framebufferTexture2D(36160,36064,34069+J,U1.__webglTexture,s1)}else if(D1){const U1=V.get(E.texture),j1=J||0;_.framebufferTextureLayer(36160,36064,U1.__webglTexture,s1||0,j1)}v=-1},this.readRenderTargetPixels=function(E,J,s1,j,o1,R1,D1){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let F1=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&D1!==void 0&&(F1=F1[D1]),F1){z.bindFramebuffer(36160,F1);try{const U1=E.texture,j1=U1.format,k1=U1.type;if(j1!==W2&&y1.convert(j1)!==_.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const B1=k1===v4&&(X.has("EXT_color_buffer_half_float")||n1.isWebGL2&&X.has("EXT_color_buffer_float"));if(k1!==q3&&y1.convert(k1)!==_.getParameter(35738)&&!(k1===O5&&(n1.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!B1){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=E.width-j&&s1>=0&&s1<=E.height-o1&&_.readPixels(J,s1,j,o1,y1.convert(j1),y1.convert(k1),R1)}finally{const U1=g!==null?V.get(g).__webglFramebuffer:null;z.bindFramebuffer(36160,U1)}}},this.copyFramebufferToTexture=function(E,J,s1=0){const j=Math.pow(2,-s1),o1=Math.floor(J.image.width*j),R1=Math.floor(J.image.height*j);H.setTexture2D(J,0),_.copyTexSubImage2D(3553,s1,0,0,E.x,E.y,o1,R1),z.unbindTexture()},this.copyTextureToTexture=function(E,J,s1,j=0){const o1=J.image.width,R1=J.image.height,D1=y1.convert(s1.format),F1=y1.convert(s1.type);H.setTexture2D(s1,0),_.pixelStorei(37440,s1.flipY),_.pixelStorei(37441,s1.premultiplyAlpha),_.pixelStorei(3317,s1.unpackAlignment),J.isDataTexture?_.texSubImage2D(3553,j,E.x,E.y,o1,R1,D1,F1,J.image.data):J.isCompressedTexture?_.compressedTexSubImage2D(3553,j,E.x,E.y,J.mipmaps[0].width,J.mipmaps[0].height,D1,J.mipmaps[0].data):_.texSubImage2D(3553,j,E.x,E.y,D1,F1,J.image),j===0&&s1.generateMipmaps&&_.generateMipmap(3553),z.unbindTexture()},this.copyTextureToTexture3D=function(E,J,s1,j,o1=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const R1=E.max.x-E.min.x+1,D1=E.max.y-E.min.y+1,F1=E.max.z-E.min.z+1,U1=y1.convert(j.format),j1=y1.convert(j.type);let k1;if(j.isData3DTexture)H.setTexture3D(j,0),k1=32879;else if(j.isDataArrayTexture)H.setTexture2DArray(j,0),k1=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(37440,j.flipY),_.pixelStorei(37441,j.premultiplyAlpha),_.pixelStorei(3317,j.unpackAlignment);const B1=_.getParameter(3314),r2=_.getParameter(32878),D2=_.getParameter(3316),u5=_.getParameter(3315),V5=_.getParameter(32877),o2=s1.isCompressedTexture?s1.mipmaps[0]:s1.image;_.pixelStorei(3314,o2.width),_.pixelStorei(32878,o2.height),_.pixelStorei(3316,E.min.x),_.pixelStorei(3315,E.min.y),_.pixelStorei(32877,E.min.z),s1.isDataTexture||s1.isData3DTexture?_.texSubImage3D(k1,o1,J.x,J.y,J.z,R1,D1,F1,U1,j1,o2.data):s1.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),_.compressedTexSubImage3D(k1,o1,J.x,J.y,J.z,R1,D1,F1,U1,o2.data)):_.texSubImage3D(k1,o1,J.x,J.y,J.z,R1,D1,F1,U1,j1,o2),_.pixelStorei(3314,B1),_.pixelStorei(32878,r2),_.pixelStorei(3316,D2),_.pixelStorei(3315,u5),_.pixelStorei(32877,V5),o1===0&&j.generateMipmaps&&_.generateMipmap(k1),z.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?H.setTextureCube(E,0):E.isData3DTexture?H.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?H.setTexture2DArray(E,0):H.setTexture2D(E,0),z.unbindTexture()},this.resetState=function(){x=0,M=0,g=null,z.reset(),r1.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class dr extends y0{}dr.prototype.isWebGL1Renderer=!0;class mr extends i2{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class pr{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mt,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=j2()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let q=0,i=this.stride;q<i;q++)this.array[e+q]=t.array[n+q];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=j2()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=j2()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const E2=new F;class Bt{constructor(e,t,n,q=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=q}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)E2.fromBufferAttribute(this,t),E2.applyMatrix4(e),this.setXYZ(t,E2.x,E2.y,E2.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)E2.fromBufferAttribute(this,t),E2.applyNormalMatrix(e),this.setXYZ(t,E2.x,E2.y,E2.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)E2.fromBufferAttribute(this,t),E2.transformDirection(e),this.setXYZ(t,E2.x,E2.y,E2.z);return this}setX(e,t){return this.normalized&&(t=Z1(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Z1(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Z1(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Z1(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=M5(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=M5(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=M5(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=M5(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Z1(t,this.array),n=Z1(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,q){return e=e*this.data.stride+this.offset,this.normalized&&(t=Z1(t,this.array),n=Z1(n,this.array),q=Z1(q,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=q,this}setXYZW(e,t,n,q,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Z1(t,this.array),n=Z1(n,this.array),q=Z1(q,this.array),i=Z1(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=q,this.data.array[e+3]=i,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const q=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[q+i])}return new L2(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Bt(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const q=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[q+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const x7=new F,g7=new $1,_7=new $1,xr=new F,v7=new z1;class gr extends W1{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new z1,this.bindMatrixInverse=new z1}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $1,t=this.geometry.attributes.skinWeight;for(let n=0,q=t.count;n<q;n++){e.fromBufferAttribute(t,n);const i=1/e.manhattanLength();i!==1/0?e.multiplyScalar(i):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,q=this.geometry;g7.fromBufferAttribute(q.attributes.skinIndex,e),_7.fromBufferAttribute(q.attributes.skinWeight,e),x7.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let i=0;i<4;i++){const r=_7.getComponent(i);if(r!==0){const o=g7.getComponent(i);v7.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(xr.copy(x7).applyMatrix4(v7),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class M0 extends i2{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _r extends y2{constructor(e=null,t=1,n=1,q,i,r,o,a,l=x2,c=x2,h,u){super(null,r,o,a,l,c,q,i,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const y7=new z1,vr=new z1;class Gt{constructor(e=[],t=[]){this.uuid=j2(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,q=this.bones.length;n<q;n++)this.boneInverses.push(new z1)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new z1;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,q=this.boneTexture;for(let i=0,r=e.length;i<r;i++){const o=e[i]?e[i].matrixWorld:vr;y7.multiplyMatrices(o,t[i]),y7.toArray(n,i*16)}q!==null&&(q.needsUpdate=!0)}clone(){return new Gt(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=s0(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new _r(t,e,e,W2,O5);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const q=this.bones[t];if(q.name===e)return q}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,q=e.bones.length;n<q;n++){const i=e.bones[n];let r=t[i];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",i),r=new M0),this.bones.push(r),this.boneInverses.push(new z1().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let q=0,i=t.length;q<i;q++){const r=t[q];e.bones.push(r.uuid);const o=n[q];e.boneInverses.push(o.toArray())}return e}}class M7 extends L2{constructor(e,t,n,q=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=q}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const b7=new z1,S7=new z1,K4=[],yr=new z1,a4=new W1;class Mr extends W1{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new M7(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let q=0;q<n;q++)this.setMatrixAt(q,yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,q=this.count;if(a4.geometry=this.geometry,a4.material=this.material,a4.material!==void 0)for(let i=0;i<q;i++){this.getMatrixAt(i,b7),S7.multiplyMatrices(n,b7),a4.matrixWorld=S7,a4.raycast(e,K4);for(let r=0,o=K4.length;r<o;r++){const a=K4[r];a.instanceId=i,a.object=this,t.push(a)}K4.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new M7(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class b0 extends o5{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new O1(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const w7=new F,T7=new F,E7=new z1,st=new de,Z4=new K3;class Vt extends i2{constructor(e=new S2,t=new b0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let q=1,i=t.count;q<i;q++)w7.fromBufferAttribute(t,q-1),T7.fromBufferAttribute(t,q),n[q]=n[q-1],n[q]+=w7.distanceTo(T7);e.setAttribute("lineDistance",new Q1(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,q=this.matrixWorld,i=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Z4.copy(n.boundingSphere),Z4.applyMatrix4(q),Z4.radius+=i,e.ray.intersectsSphere(Z4)===!1)return;E7.copy(q).invert(),st.copy(e.ray).applyMatrix4(E7);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=new F,c=new F,h=new F,u=new F,m=this.isLineSegments?2:1,p=n.index,f=n.attributes.position;if(p!==null){const x=Math.max(0,r.start),M=Math.min(p.count,r.start+r.count);for(let g=x,v=M-1;g<v;g+=m){const b=p.getX(g),L=p.getX(g+1);if(l.fromBufferAttribute(f,b),c.fromBufferAttribute(f,L),st.distanceSqToSegment(l,c,u,h)>a)continue;u.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(u);y<e.near||y>e.far||t.push({distance:y,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,r.start),M=Math.min(f.count,r.start+r.count);for(let g=x,v=M-1;g<v;g+=m){if(l.fromBufferAttribute(f,g),c.fromBufferAttribute(f,g+1),st.distanceSqToSegment(l,c,u,h)>a)continue;u.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(u);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const q=t[n[0]];if(q!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=q.length;i<r;i++){const o=q[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}const A7=new F,C7=new F;class br extends Vt{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let q=0,i=t.count;q<i;q+=2)A7.fromBufferAttribute(t,q),C7.fromBufferAttribute(t,q+1),n[q]=q===0?0:n[q-1],n[q+1]=n[q]+A7.distanceTo(C7);e.setAttribute("lineDistance",new Q1(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sr extends Vt{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class S0 extends o5{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new O1(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const L7=new z1,Tt=new de,$4=new K3,Q4=new F;class wr extends i2{constructor(e=new S2,t=new S0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,q=this.matrixWorld,i=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$4.copy(n.boundingSphere),$4.applyMatrix4(q),$4.radius+=i,e.ray.intersectsSphere($4)===!1)return;L7.copy(q).invert(),Tt.copy(e.ray).applyMatrix4(L7);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=n.index,h=n.attributes.position;if(l!==null){const u=Math.max(0,r.start),m=Math.min(l.count,r.start+r.count);for(let p=u,d=m;p<d;p++){const f=l.getX(p);Q4.fromBufferAttribute(h,f),R7(Q4,f,a,q,e,t,this)}}else{const u=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let p=u,d=m;p<d;p++)Q4.fromBufferAttribute(h,p),R7(Q4,p,a,q,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const q=t[n[0]];if(q!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=q.length;i<r;i++){const o=q[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}function R7(s,e,t,n,q,i,r){const o=Tt.distanceSqToPoint(s);if(o<t){const a=new F;Tt.closestPointToPoint(s,a),a.applyMatrix4(n);const l=q.ray.origin.distanceTo(a);if(l<q.near||l>q.far)return;i.push({distance:l,distanceToRay:Math.sqrt(o),point:a,index:e,face:null,object:r})}}class l5{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,q=this.getPoint(0),i=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),i+=n.distanceTo(q),t.push(i),q=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let q=0;const i=n.length;let r;t?r=t:r=e*n[i-1];let o=0,a=i-1,l;for(;o<=a;)if(q=Math.floor(o+(a-o)/2),l=n[q]-r,l<0)o=q+1;else if(l>0)a=q-1;else{a=q;break}if(q=a,n[q]===r)return q/(i-1);const c=n[q],u=n[q+1]-c,m=(r-c)/u;return(q+m)/(i-1)}getTangent(e,t){let q=e-1e-4,i=e+1e-4;q<0&&(q=0),i>1&&(i=1);const r=this.getPoint(q),o=this.getPoint(i),a=t||(r.isVector2?new l1:new F);return a.copy(o).sub(r).normalize(),a}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new F,q=[],i=[],r=[],o=new F,a=new z1;for(let m=0;m<=e;m++){const p=m/e;q[m]=this.getTangentAt(p,new F)}i[0]=new F,r[0]=new F;let l=Number.MAX_VALUE;const c=Math.abs(q[0].x),h=Math.abs(q[0].y),u=Math.abs(q[0].z);c<=l&&(l=c,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(q[0],n).normalize(),i[0].crossVectors(q[0],o),r[0].crossVectors(q[0],i[0]);for(let m=1;m<=e;m++){if(i[m]=i[m-1].clone(),r[m]=r[m-1].clone(),o.crossVectors(q[m-1],q[m]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(_2(q[m-1].dot(q[m]),-1,1));i[m].applyMatrix4(a.makeRotationAxis(o,p))}r[m].crossVectors(q[m],i[m])}if(t===!0){let m=Math.acos(_2(i[0].dot(i[e]),-1,1));m/=e,q[0].dot(o.crossVectors(i[0],i[e]))>0&&(m=-m);for(let p=1;p<=e;p++)i[p].applyMatrix4(a.makeRotationAxis(q[p],m*p)),r[p].crossVectors(q[p],i[p])}return{tangents:q,normals:i,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ht extends l5{constructor(e=0,t=0,n=1,q=1,i=0,r=Math.PI*2,o=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=q,this.aStartAngle=i,this.aEndAngle=r,this.aClockwise=o,this.aRotation=a}getPoint(e,t){const n=t||new l1,q=Math.PI*2;let i=this.aEndAngle-this.aStartAngle;const r=Math.abs(i)<Number.EPSILON;for(;i<0;)i+=q;for(;i>q;)i-=q;i<Number.EPSILON&&(r?i=0:i=q),this.aClockwise===!0&&!r&&(i===q?i=-q:i=i-q);const o=this.aStartAngle+e*i;let a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=a-this.aX,m=l-this.aY;a=u*c-m*h+this.aX,l=u*h+m*c+this.aY}return n.set(a,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Tr extends Ht{constructor(e,t,n,q,i,r){super(e,t,n,n,q,i,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Wt(){let s=0,e=0,t=0,n=0;function q(i,r,o,a){s=i,e=o,t=-3*i+3*r-2*o-a,n=2*i-2*r+o+a}return{initCatmullRom:function(i,r,o,a,l){q(r,o,l*(o-i),l*(a-r))},initNonuniformCatmullRom:function(i,r,o,a,l,c,h){let u=(r-i)/l-(o-i)/(l+c)+(o-r)/c,m=(o-r)/c-(a-r)/(c+h)+(a-o)/h;u*=c,m*=c,q(r,o,u,m)},calc:function(i){const r=i*i,o=r*i;return s+e*i+t*r+n*o}}}const ee=new F,rt=new Wt,ot=new Wt,at=new Wt;class Er extends l5{constructor(e=[],t=!1,n="centripetal",q=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=q}getPoint(e,t=new F){const n=t,q=this.points,i=q.length,r=(i-(this.closed?0:1))*e;let o=Math.floor(r),a=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:a===0&&o===i-1&&(o=i-2,a=1);let l,c;this.closed||o>0?l=q[(o-1)%i]:(ee.subVectors(q[0],q[1]).add(q[0]),l=ee);const h=q[o%i],u=q[(o+1)%i];if(this.closed||o+2<i?c=q[(o+2)%i]:(ee.subVectors(q[i-1],q[i-2]).add(q[i-1]),c=ee),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(h),m),d=Math.pow(h.distanceToSquared(u),m),f=Math.pow(u.distanceToSquared(c),m);d<1e-4&&(d=1),p<1e-4&&(p=d),f<1e-4&&(f=d),rt.initNonuniformCatmullRom(l.x,h.x,u.x,c.x,p,d,f),ot.initNonuniformCatmullRom(l.y,h.y,u.y,c.y,p,d,f),at.initNonuniformCatmullRom(l.z,h.z,u.z,c.z,p,d,f)}else this.curveType==="catmullrom"&&(rt.initCatmullRom(l.x,h.x,u.x,c.x,this.tension),ot.initCatmullRom(l.y,h.y,u.y,c.y,this.tension),at.initCatmullRom(l.z,h.z,u.z,c.z,this.tension));return n.set(rt.calc(a),ot.calc(a),at.calc(a)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const q=e.points[t];this.points.push(q.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const q=this.points[t];e.points.push(q.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const q=e.points[t];this.points.push(new F().fromArray(q))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function P7(s,e,t,n,q){const i=(n-e)*.5,r=(q-t)*.5,o=s*s,a=s*o;return(2*t-2*n+i+r)*a+(-3*t+3*n-2*i-r)*o+i*s+t}function Ar(s,e){const t=1-s;return t*t*e}function Cr(s,e){return 2*(1-s)*s*e}function Lr(s,e){return s*s*e}function g4(s,e,t,n){return Ar(s,e)+Cr(s,t)+Lr(s,n)}function Rr(s,e){const t=1-s;return t*t*t*e}function Pr(s,e){const t=1-s;return 3*t*t*s*e}function Ir(s,e){return 3*(1-s)*s*s*e}function Dr(s,e){return s*s*s*e}function _4(s,e,t,n,q){return Rr(s,e)+Pr(s,t)+Ir(s,n)+Dr(s,q)}class w0 extends l5{constructor(e=new l1,t=new l1,n=new l1,q=new l1){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=q}getPoint(e,t=new l1){const n=t,q=this.v0,i=this.v1,r=this.v2,o=this.v3;return n.set(_4(e,q.x,i.x,r.x,o.x),_4(e,q.y,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nr extends l5{constructor(e=new F,t=new F,n=new F,q=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=q}getPoint(e,t=new F){const n=t,q=this.v0,i=this.v1,r=this.v2,o=this.v3;return n.set(_4(e,q.x,i.x,r.x,o.x),_4(e,q.y,i.y,r.y,o.y),_4(e,q.z,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xt extends l5{constructor(e=new l1,t=new l1){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new l1){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new l1;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Or extends l5{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T0 extends l5{constructor(e=new l1,t=new l1,n=new l1){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new l1){const n=t,q=this.v0,i=this.v1,r=this.v2;return n.set(g4(e,q.x,i.x,r.x),g4(e,q.y,i.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fr extends l5{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){const n=t,q=this.v0,i=this.v1,r=this.v2;return n.set(g4(e,q.x,i.x,r.x),g4(e,q.y,i.y,r.y),g4(e,q.z,i.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class E0 extends l5{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new l1){const n=t,q=this.points,i=(q.length-1)*e,r=Math.floor(i),o=i-r,a=q[r===0?r:r-1],l=q[r],c=q[r>q.length-2?q.length-1:r+1],h=q[r>q.length-3?q.length-1:r+2];return n.set(P7(o,a.x,l.x,c.x,h.x),P7(o,a.y,l.y,c.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const q=e.points[t];this.points.push(q.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const q=this.points[t];e.points.push(q.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const q=e.points[t];this.points.push(new l1().fromArray(q))}return this}}var A0=Object.freeze({__proto__:null,ArcCurve:Tr,CatmullRomCurve3:Er,CubicBezierCurve:w0,CubicBezierCurve3:Nr,EllipseCurve:Ht,LineCurve:Xt,LineCurve3:Or,QuadraticBezierCurve:T0,QuadraticBezierCurve3:Fr,SplineCurve:E0});class zr extends l5{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Xt(t,e))}getPoint(e,t){const n=e*this.getLength(),q=this.getCurveLengths();let i=0;for(;i<q.length;){if(q[i]>=n){const r=q[i]-n,o=this.curves[i],a=o.getLength(),l=a===0?0:1-r/a;return o.getPointAt(l,t)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,q=this.curves.length;n<q;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let q=0,i=this.curves;q<i.length;q++){const r=i[q],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,a=r.getPoints(o);for(let l=0;l<a.length;l++){const c=a[l];n&&n.equals(c)||(t.push(c),n=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const q=e.curves[t];this.curves.push(q.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const q=this.curves[t];e.curves.push(q.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const q=e.curves[t];this.curves.push(new A0[q.type]().fromJSON(q))}return this}}class D3 extends zr{constructor(e){super(),this.type="Path",this.currentPoint=new l1,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Xt(this.currentPoint.clone(),new l1(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,q){const i=new T0(this.currentPoint.clone(),new l1(e,t),new l1(n,q));return this.curves.push(i),this.currentPoint.set(n,q),this}bezierCurveTo(e,t,n,q,i,r){const o=new w0(this.currentPoint.clone(),new l1(e,t),new l1(n,q),new l1(i,r));return this.curves.push(o),this.currentPoint.set(i,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new E0(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,q,i,r){const o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,n,q,i,r),this}absarc(e,t,n,q,i,r){return this.absellipse(e,t,n,n,q,i,r),this}ellipse(e,t,n,q,i,r,o,a){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,n,q,i,r,o,a),this}absellipse(e,t,n,q,i,r,o,a){const l=new Ht(e,t,n,q,i,r,o,a);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ge extends S2{constructor(e=1,t=32,n=0,q=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:q},t=Math.max(3,t);const i=[],r=[],o=[],a=[],l=new F,c=new l1;r.push(0,0,0),o.push(0,0,1),a.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const m=n+h/t*q;l.x=e*Math.cos(m),l.y=e*Math.sin(m),r.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(r[u]/e+1)/2,c.y=(r[u+1]/e+1)/2,a.push(c.x,c.y)}for(let h=1;h<=t;h++)i.push(h,h+1,0);this.setIndex(i),this.setAttribute("position",new Q1(r,3)),this.setAttribute("normal",new Q1(o,3)),this.setAttribute("uv",new Q1(a,2))}static fromJSON(e){return new ge(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class jt extends S2{constructor(e=1,t=1,n=1,q=32,i=1,r=!1,o=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:q,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a};const l=this;q=Math.floor(q),i=Math.floor(i);const c=[],h=[],u=[],m=[];let p=0;const d=[],f=n/2;let x=0;M(),r===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(c),this.setAttribute("position",new Q1(h,3)),this.setAttribute("normal",new Q1(u,3)),this.setAttribute("uv",new Q1(m,2));function M(){const v=new F,b=new F;let L=0;const R=(t-e)/n;for(let y=0;y<=i;y++){const T=[],D=y/i,$=D*(t-e)+e;for(let W=0;W<=q;W++){const k=W/q,N=k*a+o,K=Math.sin(N),q1=Math.cos(N);b.x=$*K,b.y=-D*n+f,b.z=$*q1,h.push(b.x,b.y,b.z),v.set(K,R,q1).normalize(),u.push(v.x,v.y,v.z),m.push(k,1-D),T.push(p++)}d.push(T)}for(let y=0;y<q;y++)for(let T=0;T<i;T++){const D=d[T][y],$=d[T+1][y],W=d[T+1][y+1],k=d[T][y+1];c.push(D,$,k),c.push($,W,k),L+=6}l.addGroup(x,L,0),x+=L}function g(v){const b=p,L=new l1,R=new F;let y=0;const T=v===!0?e:t,D=v===!0?1:-1;for(let W=1;W<=q;W++)h.push(0,f*D,0),u.push(0,D,0),m.push(.5,.5),p++;const $=p;for(let W=0;W<=q;W++){const N=W/q*a+o,K=Math.cos(N),q1=Math.sin(N);R.x=T*q1,R.y=f*D,R.z=T*K,h.push(R.x,R.y,R.z),u.push(0,D,0),L.x=K*.5+.5,L.y=q1*.5*D+.5,m.push(L.x,L.y),p++}for(let W=0;W<q;W++){const k=b+W,N=$+W;v===!0?c.push(N,N+1,k):c.push(N+1,N,k),y+=3}l.addGroup(x,y,v===!0?1:2),x+=y}}static fromJSON(e){return new jt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class N3 extends D3{constructor(e){super(e),this.uuid=j2(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,q=this.holes.length;n<q;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const q=e.holes[t];this.holes.push(q.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const q=this.holes[t];e.holes.push(q.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const q=e.holes[t];this.holes.push(new D3().fromJSON(q))}return this}}const Ur={triangulate:function(s,e,t=2){const n=e&&e.length,q=n?e[0]*t:s.length;let i=C0(s,0,q,t,!0);const r=[];if(!i||i.next===i.prev)return r;let o,a,l,c,h,u,m;if(n&&(i=Hr(s,e,i,t)),s.length>80*t){o=l=s[0],a=c=s[1];for(let p=t;p<q;p+=t)h=s[p],u=s[p+1],h<o&&(o=h),u<a&&(a=u),h>l&&(l=h),u>c&&(c=u);m=Math.max(l-o,c-a),m=m!==0?32767/m:0}return w4(i,r,t,o,a,m,0),r}};function C0(s,e,t,n,q){let i,r;if(q===to(s,e,t,n)>0)for(i=e;i<t;i+=n)r=I7(i,s[i],s[i+1],r);else for(i=t-n;i>=e;i-=n)r=I7(i,s[i],s[i+1],r);return r&&_e(r,r.next)&&(E4(r),r=r.next),r}function o3(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(_e(t,t.next)||q2(t.prev,t,t.next)===0)){if(E4(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function w4(s,e,t,n,q,i,r){if(!s)return;!r&&i&&Jr(s,n,q,i);let o=s,a,l;for(;s.prev!==s.next;){if(a=s.prev,l=s.next,i?Br(s,n,q,i):kr(s)){e.push(a.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),E4(s),s=l.next,o=l.next;continue}if(s=l,s===o){r?r===1?(s=Gr(o3(s),e,t),w4(s,e,t,n,q,i,2)):r===2&&Vr(s,e,t,n,q,i):w4(o3(s),e,t,n,q,i,1);break}}}function kr(s){const e=s.prev,t=s,n=s.next;if(q2(e,t,n)>=0)return!1;const q=e.x,i=t.x,r=n.x,o=e.y,a=t.y,l=n.y,c=q<i?q<r?q:r:i<r?i:r,h=o<a?o<l?o:l:a<l?a:l,u=q>i?q>r?q:r:i>r?i:r,m=o>a?o>l?o:l:a>l?a:l;let p=n.next;for(;p!==e;){if(p.x>=c&&p.x<=u&&p.y>=h&&p.y<=m&&R3(q,o,i,a,r,l,p.x,p.y)&&q2(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Br(s,e,t,n){const q=s.prev,i=s,r=s.next;if(q2(q,i,r)>=0)return!1;const o=q.x,a=i.x,l=r.x,c=q.y,h=i.y,u=r.y,m=o<a?o<l?o:l:a<l?a:l,p=c<h?c<u?c:u:h<u?h:u,d=o>a?o>l?o:l:a>l?a:l,f=c>h?c>u?c:u:h>u?h:u,x=Et(m,p,e,t,n),M=Et(d,f,e,t,n);let g=s.prevZ,v=s.nextZ;for(;g&&g.z>=x&&v&&v.z<=M;){if(g.x>=m&&g.x<=d&&g.y>=p&&g.y<=f&&g!==q&&g!==r&&R3(o,c,a,h,l,u,g.x,g.y)&&q2(g.prev,g,g.next)>=0||(g=g.prevZ,v.x>=m&&v.x<=d&&v.y>=p&&v.y<=f&&v!==q&&v!==r&&R3(o,c,a,h,l,u,v.x,v.y)&&q2(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;g&&g.z>=x;){if(g.x>=m&&g.x<=d&&g.y>=p&&g.y<=f&&g!==q&&g!==r&&R3(o,c,a,h,l,u,g.x,g.y)&&q2(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;v&&v.z<=M;){if(v.x>=m&&v.x<=d&&v.y>=p&&v.y<=f&&v!==q&&v!==r&&R3(o,c,a,h,l,u,v.x,v.y)&&q2(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Gr(s,e,t){let n=s;do{const q=n.prev,i=n.next.next;!_e(q,i)&&L0(q,n,n.next,i)&&T4(q,i)&&T4(i,q)&&(e.push(q.i/t|0),e.push(n.i/t|0),e.push(i.i/t|0),E4(n),E4(n.next),n=s=i),n=n.next}while(n!==s);return o3(n)}function Vr(s,e,t,n,q,i){let r=s;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&$r(r,o)){let a=R0(r,o);r=o3(r,r.next),a=o3(a,a.next),w4(r,e,t,n,q,i,0),w4(a,e,t,n,q,i,0);return}o=o.next}r=r.next}while(r!==s)}function Hr(s,e,t,n){const q=[];let i,r,o,a,l;for(i=0,r=e.length;i<r;i++)o=e[i]*n,a=i<r-1?e[i+1]*n:s.length,l=C0(s,o,a,n,!1),l===l.next&&(l.steiner=!0),q.push(Zr(l));for(q.sort(Wr),i=0;i<q.length;i++)t=Xr(q[i],t);return t}function Wr(s,e){return s.x-e.x}function Xr(s,e){const t=jr(s,e);if(!t)return e;const n=R0(t,s);return o3(n,n.next),o3(t,t.next)}function jr(s,e){let t=e,n=-1/0,q;const i=s.x,r=s.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>n&&(n=u,q=t.x<t.next.x?t:t.next,u===i))return q}t=t.next}while(t!==e);if(!q)return null;const o=q,a=q.x,l=q.y;let c=1/0,h;t=q;do i>=t.x&&t.x>=a&&i!==t.x&&R3(r<l?i:n,r,a,l,r<l?n:i,r,t.x,t.y)&&(h=Math.abs(r-t.y)/(i-t.x),T4(t,s)&&(h<c||h===c&&(t.x>q.x||t.x===q.x&&Yr(q,t)))&&(q=t,c=h)),t=t.next;while(t!==o);return q}function Yr(s,e){return q2(s.prev,s,e.prev)<0&&q2(e.next,s,s.next)<0}function Jr(s,e,t,n){let q=s;do q.z===0&&(q.z=Et(q.x,q.y,e,t,n)),q.prevZ=q.prev,q.nextZ=q.next,q=q.next;while(q!==s);q.prevZ.nextZ=null,q.prevZ=null,Kr(q)}function Kr(s){let e,t,n,q,i,r,o,a,l=1;do{for(t=s,s=null,i=null,r=0;t;){for(r++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(a=l;o>0||a>0&&n;)o!==0&&(a===0||!n||t.z<=n.z)?(q=t,t=t.nextZ,o--):(q=n,n=n.nextZ,a--),i?i.nextZ=q:s=q,q.prevZ=i,i=q;t=n}i.nextZ=null,l*=2}while(r>1);return s}function Et(s,e,t,n,q){return s=(s-t)*q|0,e=(e-n)*q|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Zr(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function R3(s,e,t,n,q,i,r,o){return(q-r)*(e-o)>=(s-r)*(i-o)&&(s-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(i-o)>=(q-r)*(n-o)}function $r(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Qr(s,e)&&(T4(s,e)&&T4(e,s)&&eo(s,e)&&(q2(s.prev,s,e.prev)||q2(s,e.prev,e))||_e(s,e)&&q2(s.prev,s,s.next)>0&&q2(e.prev,e,e.next)>0)}function q2(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function _e(s,e){return s.x===e.x&&s.y===e.y}function L0(s,e,t,n){const q=ne(q2(s,e,t)),i=ne(q2(s,e,n)),r=ne(q2(t,n,s)),o=ne(q2(t,n,e));return!!(q!==i&&r!==o||q===0&&te(s,t,e)||i===0&&te(s,n,e)||r===0&&te(t,s,n)||o===0&&te(t,e,n))}function te(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ne(s){return s>0?1:s<0?-1:0}function Qr(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&L0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function T4(s,e){return q2(s.prev,s,s.next)<0?q2(s,e,s.next)>=0&&q2(s,s.prev,e)>=0:q2(s,e,s.prev)<0||q2(s,s.next,e)<0}function eo(s,e){let t=s,n=!1;const q=(s.x+e.x)/2,i=(s.y+e.y)/2;do t.y>i!=t.next.y>i&&t.next.y!==t.y&&q<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function R0(s,e){const t=new At(s.i,s.x,s.y),n=new At(e.i,e.x,e.y),q=s.next,i=e.prev;return s.next=e,e.prev=s,t.next=q,q.prev=t,n.next=t,t.prev=n,i.next=n,n.prev=i,n}function I7(s,e,t,n){const q=new At(s,e,t);return n?(q.next=n.next,q.prev=n,n.next.prev=q,n.next=q):(q.prev=q,q.next=q),q}function E4(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function At(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function to(s,e,t,n){let q=0;for(let i=e,r=t-n;i<t;i+=n)q+=(s[r]-s[i])*(s[i+1]+s[r+1]),r=i;return q}class a5{static area(e){const t=e.length;let n=0;for(let q=t-1,i=0;i<t;q=i++)n+=e[q].x*e[i].y-e[i].x*e[q].y;return n*.5}static isClockWise(e){return a5.area(e)<0}static triangulateShape(e,t){const n=[],q=[],i=[];D7(e),N7(n,e);let r=e.length;t.forEach(D7);for(let a=0;a<t.length;a++)q.push(r),r+=t[a].length,N7(n,t[a]);const o=Ur.triangulate(n,q);for(let a=0;a<o.length;a+=3)i.push(o.slice(a,a+3));return i}}function D7(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function N7(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Yt extends S2{constructor(e=new N3([new l1(.5,.5),new l1(-.5,.5),new l1(-.5,-.5),new l1(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,q=[],i=[];for(let o=0,a=e.length;o<a;o++){const l=e[o];r(l)}this.setAttribute("position",new Q1(q,3)),this.setAttribute("uv",new Q1(i,2)),this.computeVertexNormals();function r(o){const a=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:m-.1,d=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:no;let g,v=!1,b,L,R,y;x&&(g=x.getSpacedPoints(c),v=!0,u=!1,b=x.computeFrenetFrames(c,!1),L=new F,R=new F,y=new F),u||(f=0,m=0,p=0,d=0);const T=o.extractPoints(l);let D=T.shape;const $=T.holes;if(!a5.isClockWise(D)){D=D.reverse();for(let V=0,H=$.length;V<H;V++){const G=$[V];a5.isClockWise(G)&&($[V]=G.reverse())}}const k=a5.triangulateShape(D,$),N=D;for(let V=0,H=$.length;V<H;V++){const G=$[V];D=D.concat(G)}function K(V,H,G){return H||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().multiplyScalar(G).add(V)}const q1=D.length,e1=k.length;function U(V,H,G){let Q,t1,f1;const O=V.x-H.x,A=V.y-H.y,x1=G.x-V.x,S1=G.y-V.y,C=O*O+A*A,S=O*S1-A*x1;if(Math.abs(S)>Number.EPSILON){const Y=Math.sqrt(C),d1=Math.sqrt(x1*x1+S1*S1),p1=H.x-A/Y,v1=H.y+O/Y,P1=G.x-S1/d1,y1=G.y+x1/d1,r1=((P1-p1)*S1-(y1-v1)*x1)/(O*S1-A*x1);Q=p1+O*r1-V.x,t1=v1+A*r1-V.y;const T1=Q*Q+t1*t1;if(T1<=2)return new l1(Q,t1);f1=Math.sqrt(T1/2)}else{let Y=!1;O>Number.EPSILON?x1>Number.EPSILON&&(Y=!0):O<-Number.EPSILON?x1<-Number.EPSILON&&(Y=!0):Math.sign(A)===Math.sign(S1)&&(Y=!0),Y?(Q=-A,t1=O,f1=Math.sqrt(C)):(Q=O,t1=A,f1=Math.sqrt(C/2))}return new l1(Q/f1,t1/f1)}const h1=[];for(let V=0,H=N.length,G=H-1,Q=V+1;V<H;V++,G++,Q++)G===H&&(G=0),Q===H&&(Q=0),h1[V]=U(N[V],N[G],N[Q]);const c1=[];let g1,Z=h1.concat();for(let V=0,H=$.length;V<H;V++){const G=$[V];g1=[];for(let Q=0,t1=G.length,f1=t1-1,O=Q+1;Q<t1;Q++,f1++,O++)f1===t1&&(f1=0),O===t1&&(O=0),g1[Q]=U(G[Q],G[f1],G[O]);c1.push(g1),Z=Z.concat(g1)}for(let V=0;V<f;V++){const H=V/f,G=m*Math.cos(H*Math.PI/2),Q=p*Math.sin(H*Math.PI/2)+d;for(let t1=0,f1=N.length;t1<f1;t1++){const O=K(N[t1],h1[t1],Q);w(O.x,O.y,-G)}for(let t1=0,f1=$.length;t1<f1;t1++){const O=$[t1];g1=c1[t1];for(let A=0,x1=O.length;A<x1;A++){const S1=K(O[A],g1[A],Q);w(S1.x,S1.y,-G)}}}const a1=p+d;for(let V=0;V<q1;V++){const H=u?K(D[V],Z[V],a1):D[V];v?(R.copy(b.normals[0]).multiplyScalar(H.x),L.copy(b.binormals[0]).multiplyScalar(H.y),y.copy(g[0]).add(R).add(L),w(y.x,y.y,y.z)):w(H.x,H.y,0)}for(let V=1;V<=c;V++)for(let H=0;H<q1;H++){const G=u?K(D[H],Z[H],a1):D[H];v?(R.copy(b.normals[V]).multiplyScalar(G.x),L.copy(b.binormals[V]).multiplyScalar(G.y),y.copy(g[V]).add(R).add(L),w(y.x,y.y,y.z)):w(G.x,G.y,h/c*V)}for(let V=f-1;V>=0;V--){const H=V/f,G=m*Math.cos(H*Math.PI/2),Q=p*Math.sin(H*Math.PI/2)+d;for(let t1=0,f1=N.length;t1<f1;t1++){const O=K(N[t1],h1[t1],Q);w(O.x,O.y,h+G)}for(let t1=0,f1=$.length;t1<f1;t1++){const O=$[t1];g1=c1[t1];for(let A=0,x1=O.length;A<x1;A++){const S1=K(O[A],g1[A],Q);v?w(S1.x,S1.y+g[c-1].y,g[c-1].x+G):w(S1.x,S1.y,h+G)}}}I(),P();function I(){const V=q.length/3;if(u){let H=0,G=q1*H;for(let Q=0;Q<e1;Q++){const t1=k[Q];X(t1[2]+G,t1[1]+G,t1[0]+G)}H=c+f*2,G=q1*H;for(let Q=0;Q<e1;Q++){const t1=k[Q];X(t1[0]+G,t1[1]+G,t1[2]+G)}}else{for(let H=0;H<e1;H++){const G=k[H];X(G[2],G[1],G[0])}for(let H=0;H<e1;H++){const G=k[H];X(G[0]+q1*c,G[1]+q1*c,G[2]+q1*c)}}n.addGroup(V,q.length/3-V,0)}function P(){const V=q.length/3;let H=0;_(N,H),H+=N.length;for(let G=0,Q=$.length;G<Q;G++){const t1=$[G];_(t1,H),H+=t1.length}n.addGroup(V,q.length/3-V,1)}function _(V,H){let G=V.length;for(;--G>=0;){const Q=G;let t1=G-1;t1<0&&(t1=V.length-1);for(let f1=0,O=c+f*2;f1<O;f1++){const A=q1*f1,x1=q1*(f1+1),S1=H+Q+A,C=H+t1+A,S=H+t1+x1,Y=H+Q+x1;n1(S1,C,S,Y)}}}function w(V,H,G){a.push(V),a.push(H),a.push(G)}function X(V,H,G){z(V),z(H),z(G);const Q=q.length/3,t1=M.generateTopUV(n,q,Q-3,Q-2,Q-1);u1(t1[0]),u1(t1[1]),u1(t1[2])}function n1(V,H,G,Q){z(V),z(H),z(Q),z(H),z(G),z(Q);const t1=q.length/3,f1=M.generateSideWallUV(n,q,t1-6,t1-3,t1-2,t1-1);u1(f1[0]),u1(f1[1]),u1(f1[3]),u1(f1[1]),u1(f1[2]),u1(f1[3])}function z(V){q.push(a[V*3+0]),q.push(a[V*3+1]),q.push(a[V*3+2])}function u1(V){i.push(V.x),i.push(V.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return qo(t,n,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}const q=e.options.extrudePath;return q!==void 0&&(e.options.extrudePath=new A0[q.type]().fromJSON(q)),new Yt(n,e.options)}}const no={generateTopUV:function(s,e,t,n,q){const i=e[t*3],r=e[t*3+1],o=e[n*3],a=e[n*3+1],l=e[q*3],c=e[q*3+1];return[new l1(i,r),new l1(o,a),new l1(l,c)]},generateSideWallUV:function(s,e,t,n,q,i){const r=e[t*3],o=e[t*3+1],a=e[t*3+2],l=e[n*3],c=e[n*3+1],h=e[n*3+2],u=e[q*3],m=e[q*3+1],p=e[q*3+2],d=e[i*3],f=e[i*3+1],x=e[i*3+2];return Math.abs(o-c)<Math.abs(r-l)?[new l1(r,1-a),new l1(l,1-h),new l1(u,1-p),new l1(d,1-x)]:[new l1(o,1-a),new l1(c,1-h),new l1(m,1-p),new l1(f,1-x)]}};function qo(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,q=s.length;n<q;n++){const i=s[n];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Jt extends S2{constructor(e=new N3([new l1(0,.5),new l1(-.5,-.5),new l1(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],q=[],i=[],r=[];let o=0,a=0;if(Array.isArray(e)===!1)l(e);else for(let c=0;c<e.length;c++)l(e[c]),this.addGroup(o,a,c),o+=a,a=0;this.setIndex(n),this.setAttribute("position",new Q1(q,3)),this.setAttribute("normal",new Q1(i,3)),this.setAttribute("uv",new Q1(r,2));function l(c){const h=q.length/3,u=c.extractPoints(t);let m=u.shape;const p=u.holes;a5.isClockWise(m)===!1&&(m=m.reverse());for(let f=0,x=p.length;f<x;f++){const M=p[f];a5.isClockWise(M)===!0&&(p[f]=M.reverse())}const d=a5.triangulateShape(m,p);for(let f=0,x=p.length;f<x;f++){const M=p[f];m=m.concat(M)}for(let f=0,x=m.length;f<x;f++){const M=m[f];q.push(M.x,M.y,0),i.push(0,0,1),r.push(M.x,M.y)}for(let f=0,x=d.length;f<x;f++){const M=d[f],g=M[0]+h,v=M[1]+h,b=M[2]+h;n.push(g,v,b),a+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return io(t,e)}static fromJSON(e,t){const n=[];for(let q=0,i=e.shapes.length;q<i;q++){const r=t[e.shapes[q]];n.push(r)}return new Jt(n,e.curveSegments)}}function io(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const q=s[t];e.shapes.push(q.uuid)}else e.shapes.push(s.uuid);return e}class Kt extends S2{constructor(e=1,t=32,n=16,q=0,i=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:q,phiLength:i,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const a=Math.min(r+o,Math.PI);let l=0;const c=[],h=new F,u=new F,m=[],p=[],d=[],f=[];for(let x=0;x<=n;x++){const M=[],g=x/n;let v=0;x==0&&r==0?v=.5/t:x==n&&a==Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const L=b/t;h.x=-e*Math.cos(q+L*i)*Math.sin(r+g*o),h.y=e*Math.cos(r+g*o),h.z=e*Math.sin(q+L*i)*Math.sin(r+g*o),p.push(h.x,h.y,h.z),u.copy(h).normalize(),d.push(u.x,u.y,u.z),f.push(L+v,1-g),M.push(l++)}c.push(M)}for(let x=0;x<n;x++)for(let M=0;M<t;M++){const g=c[x][M+1],v=c[x][M],b=c[x+1][M],L=c[x+1][M+1];(x!==0||r>0)&&m.push(g,v,L),(x!==n-1||a<Math.PI)&&m.push(v,b,L)}this.setIndex(m),this.setAttribute("position",new Q1(p,3)),this.setAttribute("normal",new Q1(d,3)),this.setAttribute("uv",new Q1(f,2))}static fromJSON(e){return new Kt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class s2 extends o5{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new O1(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new O1(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=i0,this.normalScale=new l1(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class c3 extends s2{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new l1(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _2(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new O1(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new O1(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new O1(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function R5(s,e,t){return P0(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function qe(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function P0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function so(s){function e(q,i){return s[q]-s[i]}const t=s.length,n=new Array(t);for(let q=0;q!==t;++q)n[q]=q;return n.sort(e),n}function O7(s,e,t){const n=s.length,q=new s.constructor(n);for(let i=0,r=0;r!==n;++i){const o=t[i]*e;for(let a=0;a!==e;++a)q[r++]=s[o+a]}return q}function I0(s,e,t,n){let q=1,i=s[0];for(;i!==void 0&&i[n]===void 0;)i=s[q++];if(i===void 0)return;let r=i[n];if(r!==void 0)if(Array.isArray(r))do r=i[n],r!==void 0&&(e.push(i.time),t.push.apply(t,r)),i=s[q++];while(i!==void 0);else if(r.toArray!==void 0)do r=i[n],r!==void 0&&(e.push(i.time),r.toArray(t,t.length)),i=s[q++];while(i!==void 0);else do r=i[n],r!==void 0&&(e.push(i.time),t.push(r)),i=s[q++];while(i!==void 0)}class L4{constructor(e,t,n,q){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=q!==void 0?q:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,q=t[n],i=t[n-1];n:{e:{let r;t:{q:if(!(e<q)){for(let o=n+2;;){if(q===void 0){if(e<i)break q;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(i=q,q=t[++n],e<q)break e}r=t.length;break t}if(!(e>=i)){const o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(q=i,i=t[--n-1],e>=i)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(q=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(q===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,q)}return this.interpolate_(n,i,e,q)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,q=this.valueSize,i=e*q;for(let r=0;r!==q;++r)t[r]=n[i+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ro extends L4{constructor(e,t,n,q){super(e,t,n,q),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:D6,endingEnd:D6}}intervalChanged_(e,t,n){const q=this.parameterPositions;let i=e-2,r=e+1,o=q[i],a=q[r];if(o===void 0)switch(this.getSettings_().endingStart){case N6:i=e,o=2*t-n;break;case O6:i=q.length-2,o=t+q[i]-q[i+1];break;default:i=e,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case N6:r=e,a=2*n-t;break;case O6:r=1,a=n+q[1]-q[0];break;default:r=e-1,a=t}const l=(n-t)*.5,c=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-n),this._offsetPrev=i*c,this._offsetNext=r*c}interpolate_(e,t,n,q){const i=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,m=this._weightNext,p=(n-t)/(q-t),d=p*p,f=d*p,x=-u*f+2*u*d-u*p,M=(1+u)*f+(-1.5-2*u)*d+(-.5+u)*p+1,g=(-1-m)*f+(1.5+m)*d+.5*p,v=m*f-m*d;for(let b=0;b!==o;++b)i[b]=x*r[c+b]+M*r[l+b]+g*r[a+b]+v*r[h+b];return i}}class oo extends L4{constructor(e,t,n,q){super(e,t,n,q)}interpolate_(e,t,n,q){const i=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=(n-t)/(q-t),h=1-c;for(let u=0;u!==o;++u)i[u]=r[l+u]*h+r[a+u]*c;return i}}class ao extends L4{constructor(e,t,n,q){super(e,t,n,q)}interpolate_(e){return this.copySampleValue_(e-1)}}class c5{constructor(e,t,n,q){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qe(t,this.TimeBufferType),this.values=qe(n,this.ValueBufferType),this.setInterpolation(q||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qe(e.times,Array),values:qe(e.values,Array)};const q=e.getInterpolation();q!==e.DefaultInterpolation&&(n.interpolation=q)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ro(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case y4:t=this.InterpolantFactoryMethodDiscrete;break;case V3:t=this.InterpolantFactoryMethodLinear;break;case Ie:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return y4;case this.InterpolantFactoryMethodLinear:return V3;case this.InterpolantFactoryMethodSmooth:return Ie}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,q=t.length;n!==q;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,q=t.length;n!==q;++n)t[n]*=e}return this}trim(e,t){const n=this.times,q=n.length;let i=0,r=q-1;for(;i!==q&&n[i]<e;)++i;for(;r!==-1&&n[r]>t;)--r;if(++r,i!==0||r!==q){i>=r&&(r=Math.max(r,1),i=r-1);const o=this.getValueSize();this.times=R5(n,i,r),this.values=R5(this.values,i*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,q=this.values,i=n.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==i;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(r!==null&&r>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,r),e=!1;break}r=a}if(q!==void 0&&P0(q))for(let o=0,a=q.length;o!==a;++o){const l=q[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=R5(this.times),t=R5(this.values),n=this.getValueSize(),q=this.getInterpolation()===Ie,i=e.length-1;let r=1;for(let o=1;o<i;++o){let a=!1;const l=e[o],c=e[o+1];if(l!==c&&(o!==1||l!==e[0]))if(q)a=!0;else{const h=o*n,u=h-n,m=h+n;for(let p=0;p!==n;++p){const d=t[h+p];if(d!==t[u+p]||d!==t[m+p]){a=!0;break}}}if(a){if(o!==r){e[r]=e[o];const h=o*n,u=r*n;for(let m=0;m!==n;++m)t[u+m]=t[h+m]}++r}}if(i>0){e[r]=e[i];for(let o=i*n,a=r*n,l=0;l!==n;++l)t[a+l]=t[o+l];++r}return r!==e.length?(this.times=R5(e,0,r),this.values=R5(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=R5(this.times,0),t=R5(this.values,0),n=this.constructor,q=new n(this.name,e,t);return q.createInterpolant=this.createInterpolant,q}}c5.prototype.TimeBufferType=Float32Array;c5.prototype.ValueBufferType=Float32Array;c5.prototype.DefaultInterpolation=V3;class $3 extends c5{}$3.prototype.ValueTypeName="bool";$3.prototype.ValueBufferType=Array;$3.prototype.DefaultInterpolation=y4;$3.prototype.InterpolantFactoryMethodLinear=void 0;$3.prototype.InterpolantFactoryMethodSmooth=void 0;class D0 extends c5{}D0.prototype.ValueTypeName="color";class A4 extends c5{}A4.prototype.ValueTypeName="number";class lo extends L4{constructor(e,t,n,q){super(e,t,n,q)}interpolate_(e,t,n,q){const i=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=(n-t)/(q-t);let l=e*o;for(let c=l+o;l!==c;l+=4)U5.slerpFlat(i,0,r,l-o,r,l,a);return i}}class a3 extends c5{InterpolantFactoryMethodLinear(e){return new lo(this.times,this.values,this.getValueSize(),e)}}a3.prototype.ValueTypeName="quaternion";a3.prototype.DefaultInterpolation=V3;a3.prototype.InterpolantFactoryMethodSmooth=void 0;class Q3 extends c5{}Q3.prototype.ValueTypeName="string";Q3.prototype.ValueBufferType=Array;Q3.prototype.DefaultInterpolation=y4;Q3.prototype.InterpolantFactoryMethodLinear=void 0;Q3.prototype.InterpolantFactoryMethodSmooth=void 0;class C4 extends c5{}C4.prototype.ValueTypeName="vector";class co{constructor(e,t=-1,n,q=J8){this.name=e,this.tracks=n,this.duration=t,this.blendMode=q,this.uuid=j2(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,q=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(uo(n[r]).scale(q));const i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){const t=[],n=e.tracks,q={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let i=0,r=n.length;i!==r;++i)t.push(c5.toJSON(n[i]));return q}static CreateFromMorphTargetSequence(e,t,n,q){const i=t.length,r=[];for(let o=0;o<i;o++){let a=[],l=[];a.push((o+i-1)%i,o,(o+1)%i),l.push(0,1,0);const c=so(a);a=O7(a,1,c),l=O7(l,1,c),!q&&a[0]===0&&(a.push(i),l.push(l[0])),r.push(new A4(".morphTargetInfluences["+t[o].name+"]",a,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const q=e;n=q.geometry&&q.geometry.animations||q.animations}for(let q=0;q<n.length;q++)if(n[q].name===t)return n[q];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const q={},i=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){const l=e[o],c=l.name.match(i);if(c&&c.length>1){const h=c[1];let u=q[h];u||(q[h]=u=[]),u.push(l)}}const r=[];for(const o in q)r.push(this.CreateFromMorphTargetSequence(o,q[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,m,p,d){if(m.length!==0){const f=[],x=[];I0(m,f,x,p),f.length!==0&&d.push(new h(u,f,x))}},q=[],i=e.name||"default",r=e.fps||30,o=e.blendMode;let a=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const u=l[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const m={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let d=0;d<u[p].morphTargets.length;d++)m[u[p].morphTargets[d]]=-1;for(const d in m){const f=[],x=[];for(let M=0;M!==u[p].morphTargets.length;++M){const g=u[p];f.push(g.time),x.push(g.morphTarget===d?1:0)}q.push(new A4(".morphTargetInfluence["+d+"]",f,x))}a=m.length*r}else{const m=".bones["+t[h].name+"]";n(C4,m+".position",u,"pos",q),n(a3,m+".quaternion",u,"rot",q),n(C4,m+".scale",u,"scl",q)}}return q.length===0?null:new this(i,a,q,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,q=e.length;n!==q;++n){const i=this.tracks[n];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ho(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return A4;case"vector":case"vector2":case"vector3":case"vector4":return C4;case"color":return D0;case"quaternion":return a3;case"bool":case"boolean":return $3;case"string":return Q3}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function uo(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ho(s.type);if(s.times===void 0){const t=[],n=[];I0(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const W3={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class fo{constructor(e,t,n){const q=this;let i=!1,r=0,o=0,a;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){o++,i===!1&&q.onStart!==void 0&&q.onStart(c,r,o),i=!0},this.itemEnd=function(c){r++,q.onProgress!==void 0&&q.onProgress(c,r,o),r===o&&(i=!1,q.onLoad!==void 0&&q.onLoad())},this.itemError=function(c){q.onError!==void 0&&q.onError(c)},this.resolveURL=function(c){return a?a(c):c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){const h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,u=l.length;h<u;h+=2){const m=l[h],p=l[h+1];if(m.global&&(m.lastIndex=0),m.test(c))return p}return null}}}const mo=new fo;class h3{constructor(e){this.manager=e!==void 0?e:mo,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(q,i){n.load(e,q,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const g5={};class po extends Error{constructor(e,t){super(e),this.response=t}}class ve extends h3{constructor(e){super(e)}load(e,t,n,q){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=W3.get(e);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(g5[e]!==void 0){g5[e].push({onLoad:t,onProgress:n,onError:q});return}g5[e]=[],g5[e].push({onLoad:t,onProgress:n,onError:q});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,a=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const c=g5[e],h=l.body.getReader(),u=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=u?parseInt(u):0,p=m!==0;let d=0;const f=new ReadableStream({start(x){M();function M(){h.read().then(({done:g,value:v})=>{if(g)x.close();else{d+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:p,loaded:d,total:m});for(let L=0,R=c.length;L<R;L++){const y=c[L];y.onProgress&&y.onProgress(b)}x.enqueue(v),M()}})}}});return new Response(f)}else throw new po(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(a){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(u);return l.arrayBuffer().then(p=>m.decode(p))}}}).then(l=>{W3.add(e,l);const c=g5[e];delete g5[e];for(let h=0,u=c.length;h<u;h++){const m=c[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{const c=g5[e];if(c===void 0)throw this.manager.itemError(e),l;delete g5[e];for(let h=0,u=c.length;h<u;h++){const m=c[h];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class xo extends h3{constructor(e){super(e)}load(e,t,n,q){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,r=W3.get(e);if(r!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(r),i.manager.itemEnd(e)},0),r;const o=S4("img");function a(){c(),W3.add(e,this),t&&t(this),i.manager.itemEnd(e)}function l(h){c(),q&&q(h),i.manager.itemError(e),i.manager.itemEnd(e)}function c(){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",a,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}}class N0 extends h3{constructor(e){super(e)}load(e,t,n,q){const i=new y2,r=new xo(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){i.image=o,i.needsUpdate=!0,t!==void 0&&t(i)},n,q),i}}class ye extends i2{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new O1(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const lt=new z1,F7=new F,z7=new F;class Zt{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new l1(512,512),this.map=null,this.mapPass=null,this.matrix=new z1,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zt,this._frameExtents=new l1(1,1),this._viewportCount=1,this._viewports=[new $1(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;F7.setFromMatrixPosition(e.matrixWorld),t.position.copy(F7),z7.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(z7),t.updateMatrixWorld(),lt.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lt),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lt)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class go extends Zt{constructor(){super(new C2(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=b4*2*e.angle*this.focus,q=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(n!==t.fov||q!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=q,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class O0 extends ye{constructor(e,t,n=0,q=Math.PI/3,i=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(i2.DEFAULT_UP),this.updateMatrix(),this.target=new i2,this.distance=n,this.angle=q,this.penumbra=i,this.decay=r,this.map=null,this.shadow=new go}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const U7=new z1,l4=new F,ct=new F;class _o extends Zt{constructor(){super(new C2(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new l1(4,2),this._viewportCount=6,this._viewports=[new $1(2,1,1,1),new $1(0,1,1,1),new $1(3,1,1,1),new $1(1,1,1,1),new $1(3,0,1,1),new $1(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,q=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),l4.setFromMatrixPosition(e.matrixWorld),n.position.copy(l4),ct.copy(n.position),ct.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ct),n.updateMatrixWorld(),q.makeTranslation(-l4.x,-l4.y,-l4.z),U7.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(U7)}}class $t extends ye{constructor(e,t,n=0,q=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=q,this.shadow=new _o}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vo extends Zt{constructor(){super(new Ut(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yo extends ye{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(i2.DEFAULT_UP),this.updateMatrix(),this.target=new i2,this.shadow=new vo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mo extends ye{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ct{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,q=e.length;n<q;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class bo extends h3{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,q){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,r=W3.get(e);if(r!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(r),i.manager.itemEnd(e)},0),r;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,Object.assign(i.options,{colorSpaceConversion:"none"}))}).then(function(a){W3.add(e,a),t&&t(a),i.manager.itemEnd(e)}).catch(function(a){q&&q(a),i.manager.itemError(e),i.manager.itemEnd(e)}),i.manager.itemStart(e)}}const Qt="\\[\\]\\.:\\/",So=new RegExp("["+Qt+"]","g"),e6="[^"+Qt+"]",wo="[^"+Qt.replace("\\.","")+"]",To=/((?:WC+[\/:])*)/.source.replace("WC",e6),Eo=/(WCOD+)?/.source.replace("WCOD",wo),Ao=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",e6),Co=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",e6),Lo=new RegExp("^"+To+Eo+Ao+Co+"$"),Ro=["material","materials","bones","map"];class Po{constructor(e,t,n){const q=n||K1.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,q)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,q=this._bindings[n];q!==void 0&&q.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let q=this._targetGroup.nCachedObjects_,i=n.length;q!==i;++q)n[q].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class K1{constructor(e,t,n){this.path=t,this.parsedPath=n||K1.parseTrackName(t),this.node=K1.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new K1.Composite(e,t,n):new K1(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(So,"")}static parseTrackName(e){const t=Lo.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},q=n.nodeName&&n.nodeName.lastIndexOf(".");if(q!==void 0&&q!==-1){const i=n.nodeName.substring(q+1);Ro.indexOf(i)!==-1&&(n.nodeName=n.nodeName.substring(0,q),n.objectName=i)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(i){for(let r=0;r<i.length;r++){const o=i[r];if(o.name===t||o.uuid===t)return o;const a=n(o.children);if(a)return a}return null},q=n(e.children);if(q)return q}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let q=0,i=n.length;q!==i;++q)e[t++]=n[q]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let q=0,i=n.length;q!==i;++q)n[q]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let q=0,i=n.length;q!==i;++q)n[q]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let q=0,i=n.length;q!==i;++q)n[q]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,q=t.propertyName;let i=t.propertyIndex;if(e||(e=K1.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[q];if(r===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+q+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(i!==void 0){if(q==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[i]!==void 0&&(i=e.morphTargetDictionary[i])}a=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=i}else r.fromArray!==void 0&&r.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(a=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=q;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}K1.Composite=Po;K1.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};K1.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};K1.prototype.GetterByBindingType=[K1.prototype._getValue_direct,K1.prototype._getValue_array,K1.prototype._getValue_arrayElement,K1.prototype._getValue_toArray];K1.prototype.SetterByBindingTypeAndVersioning=[[K1.prototype._setValue_direct,K1.prototype._setValue_direct_setNeedsUpdate,K1.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[K1.prototype._setValue_array,K1.prototype._setValue_array_setNeedsUpdate,K1.prototype._setValue_array_setMatrixWorldNeedsUpdate],[K1.prototype._setValue_arrayElement,K1.prototype._setValue_arrayElement_setNeedsUpdate,K1.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[K1.prototype._setValue_fromArray,K1.prototype._setValue_fromArray_setNeedsUpdate,K1.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Io{constructor(e,t,n=0,q=1/0){this.ray=new de(e,t),this.near=n,this.far=q,this.camera=null,this.layers=new Ft,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Lt(e,this,n,t),n.sort(k7),n}intersectObjects(e,t=!0,n=[]){for(let q=0,i=e.length;q<i;q++)Lt(e[q],this,n,t);return n.sort(k7),n}}function k7(s,e){return s.distance-e.distance}function Lt(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const q=s.children;for(let i=0,r=q.length;i<r;i++)Lt(q[i],e,t,!0)}}const B7=new l1;class Do{constructor(e=new l1(1/0,1/0),t=new l1(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=B7.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return B7.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class I5{constructor(){this.type="ShapePath",this.color=new O1,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new D3,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,q){return this.currentPath.quadraticCurveTo(e,t,n,q),this}bezierCurveTo(e,t,n,q,i,r){return this.currentPath.bezierCurveTo(e,t,n,q,i,r),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(x){const M=[];for(let g=0,v=x.length;g<v;g++){const b=x[g],L=new N3;L.curves=b.curves,M.push(L)}return M}function n(x,M){const g=M.length;let v=!1;for(let b=g-1,L=0;L<g;b=L++){let R=M[b],y=M[L],T=y.x-R.x,D=y.y-R.y;if(Math.abs(D)>Number.EPSILON){if(D<0&&(R=M[L],T=-T,y=M[b],D=-D),x.y<R.y||x.y>y.y)continue;if(x.y===R.y){if(x.x===R.x)return!0}else{const $=D*(x.x-R.x)-T*(x.y-R.y);if($===0)return!0;if($<0)continue;v=!v}}else{if(x.y!==R.y)continue;if(y.x<=x.x&&x.x<=R.x||R.x<=x.x&&x.x<=y.x)return!0}}return v}const q=a5.isClockWise,i=this.subPaths;if(i.length===0)return[];let r,o,a;const l=[];if(i.length===1)return o=i[0],a=new N3,a.curves=o.curves,l.push(a),l;let c=!q(i[0].getPoints());c=e?!c:c;const h=[],u=[];let m=[],p=0,d;u[p]=void 0,m[p]=[];for(let x=0,M=i.length;x<M;x++)o=i[x],d=o.getPoints(),r=q(d),r=e?!r:r,r?(!c&&u[p]&&p++,u[p]={s:new N3,p:d},u[p].s.curves=o.curves,c&&p++,m[p]=[]):m[p].push({h:o,p:d[0]});if(!u[0])return t(i);if(u.length>1){let x=!1,M=0;for(let g=0,v=u.length;g<v;g++)h[g]=[];for(let g=0,v=u.length;g<v;g++){const b=m[g];for(let L=0;L<b.length;L++){const R=b[L];let y=!0;for(let T=0;T<u.length;T++)n(R.p,u[T].p)&&(g!==T&&M++,y?(y=!1,h[T].push(R)):x=!0);y&&h[g].push(R)}}M>0&&x===!1&&(m=h)}let f;for(let x=0,M=u.length;x<M;x++){a=u[x].s,l.push(a),f=m[x];for(let g=0,v=f.length;g<v;g++)a.holes.push(f[g].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nt}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nt);class No extends h3{constructor(e){super(e)}load(e,t,n,q){const i=this,r=new ve(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(o){const a=i.parse(JSON.parse(o));t&&t(a)},n,q)}parse(e){return new Oo(e)}}class Oo{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],q=Fo(e,t,this.data);for(let i=0,r=q.length;i<r;i++)n.push(...q[i].toShapes());return n}}function Fo(s,e,t){const n=Array.from(s),q=e/t.resolution,i=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*q,r=[];let o=0,a=0;for(let l=0;l<n.length;l++){const c=n[l];if(c===`
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
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:"SIL International",font_sub_family_name:"Bold"},W0=-394,X0="Gentilis",j0=1607,Y0=100,ko={glyphs:F0,cssFontWeight:z0,ascender:U0,underlinePosition:k0,cssFontStyle:B0,boundingBox:G0,resolution:V0,original_font_information:H0,descender:W0,familyName:X0,lineHeight:j0,underlineThickness:Y0},Bo=Object.freeze(Object.defineProperty({__proto__:null,glyphs:F0,cssFontWeight:z0,ascender:U0,underlinePosition:k0,cssFontStyle:B0,boundingBox:G0,resolution:V0,original_font_information:H0,descender:W0,familyName:X0,lineHeight:j0,underlineThickness:Y0,default:ko},Symbol.toStringTag,{value:"Module"}));function G7(s,e){if(e===K8)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===yt||e===q0){let t=s.getIndex();if(t===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,q=[];if(e===yt)for(let r=1;r<=n;r++)q.push(t.getX(0)),q.push(t.getX(r)),q.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(q.push(t.getX(r)),q.push(t.getX(r+1)),q.push(t.getX(r+2))):(q.push(t.getX(r+2)),q.push(t.getX(r+1)),q.push(t.getX(r)));q.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const i=s.clone();return i.setIndex(q),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Go extends h3{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jo(t)}),this.register(function(t){return new ea(t)}),this.register(function(t){return new ta(t)}),this.register(function(t){return new Jo(t)}),this.register(function(t){return new Ko(t)}),this.register(function(t){return new Zo(t)}),this.register(function(t){return new $o(t)}),this.register(function(t){return new Xo(t)}),this.register(function(t){return new Qo(t)}),this.register(function(t){return new Yo(t)}),this.register(function(t){return new Ho(t)}),this.register(function(t){return new na(t)}),this.register(function(t){return new qa(t)})}load(e,t,n,q){const i=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=Ct.extractUrlBase(e),this.manager.itemStart(e);const o=function(l){q?q(l):console.error(l),i.manager.itemError(e),i.manager.itemEnd(e)},a=new ve(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{i.parse(l,r,function(c){t(c),i.manager.itemEnd(e)},o)}catch(c){o(c)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,q){let i;const r={},o={},a=new TextDecoder;if(typeof e=="string")i=JSON.parse(e);else if(e instanceof ArrayBuffer)if(a.decode(new Uint8Array(e,0,4))===J0){try{r[H1.KHR_BINARY_GLTF]=new ia(e)}catch(h){q&&q(h);return}i=JSON.parse(r[H1.KHR_BINARY_GLTF].content)}else i=JSON.parse(a.decode(e));else i=e;if(i.asset===void 0||i.asset.version[0]<2){q&&q(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new xa(i,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const h=this.pluginCallbacks[c](l);o[h.name]=h,r[h.name]=!0}if(i.extensionsUsed)for(let c=0;c<i.extensionsUsed.length;++c){const h=i.extensionsUsed[c],u=i.extensionsRequired||[];switch(h){case H1.KHR_MATERIALS_UNLIT:r[h]=new Wo;break;case H1.KHR_DRACO_MESH_COMPRESSION:r[h]=new sa(i,this.dracoLoader);break;case H1.KHR_TEXTURE_TRANSFORM:r[h]=new ra;break;case H1.KHR_MESH_QUANTIZATION:r[h]=new oa;break;default:u.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,q)}parseAsync(e,t){const n=this;return new Promise(function(q,i){n.parse(e,t,q,i)})}}function Vo(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const H1={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ho{constructor(e){this.parser=e,this.name=H1.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,q=t.length;n<q;n++){const i=t[n];i.extensions&&i.extensions[this.name]&&i.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,i.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let q=t.cache.get(n);if(q)return q;const i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e];let l;const c=new O1(16777215);a.color!==void 0&&c.fromArray(a.color);const h=a.range!==void 0?a.range:0;switch(a.type){case"directional":l=new yo(c),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new $t(c),l.distance=h;break;case"spot":l=new O0(c),l.distance=h,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,l.angle=a.spot.outerConeAngle,l.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return l.position.set(0,0,0),l.decay=2,D5(l,a),a.intensity!==void 0&&(l.intensity=a.intensity),l.name=t.createUniqueName(a.name||"light_"+e),q=Promise.resolve(l),t.cache.add(n,q),q}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,i=n.json.nodes[e],o=(i.extensions&&i.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(a){return n._getNodeRef(t.cache,o,a)})}}class Wo{constructor(){this.name=H1.KHR_MATERIALS_UNLIT}getMaterialType(){return r5}extendParams(e,t,n){const q=[];e.color=new O1(1,1,1),e.opacity=1;const i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){const r=i.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}i.baseColorTexture!==void 0&&q.push(n.assignTexture(e,"map",i.baseColorTexture,J1))}return Promise.all(q)}}class Xo{constructor(e){this.parser=e,this.name=H1.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const q=this.parser.json.materials[e];if(!q.extensions||!q.extensions[this.name])return Promise.resolve();const i=q.extensions[this.name].emissiveStrength;return i!==void 0&&(t.emissiveIntensity=i),Promise.resolve()}}class jo{constructor(e){this.parser=e,this.name=H1.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:c3}extendMaterialParams(e,t){const n=this.parser,q=n.json.materials[e];if(!q.extensions||!q.extensions[this.name])return Promise.resolve();const i=[],r=q.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(i.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new l1(o,o)}return Promise.all(i)}}class Yo{constructor(e){this.parser=e,this.name=H1.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:c3}extendMaterialParams(e,t){const n=this.parser,q=n.json.materials[e];if(!q.extensions||!q.extensions[this.name])return Promise.resolve();const i=[],r=q.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&i.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&i.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(i)}}class Jo{constructor(e){this.parser=e,this.name=H1.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:c3}extendMaterialParams(e,t){const n=this.parser,q=n.json.materials[e];if(!q.extensions||!q.extensions[this.name])return Promise.resolve();const i=[];t.sheenColor=new O1(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=q.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&i.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,J1)),r.sheenRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(i)}}class Ko{constructor(e){this.parser=e,this.name=H1.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:c3}extendMaterialParams(e,t){const n=this.parser,q=n.json.materials[e];if(!q.extensions||!q.extensions[this.name])return Promise.resolve();const i=[],r=q.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&i.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(i)}}class Zo{constructor(e){this.parser=e,this.name=H1.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:c3}extendMaterialParams(e,t){const n=this.parser,q=n.json.materials[e];if(!q.extensions||!q.extensions[this.name])return Promise.resolve();const i=[],r=q.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&i.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new O1(o[0],o[1],o[2]),Promise.all(i)}}class $o{constructor(e){this.parser=e,this.name=H1.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:c3}extendMaterialParams(e,t){const q=this.parser.json.materials[e];if(!q.extensions||!q.extensions[this.name])return Promise.resolve();const i=q.extensions[this.name];return t.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}}class Qo{constructor(e){this.parser=e,this.name=H1.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:c3}extendMaterialParams(e,t){const n=this.parser,q=n.json.materials[e];if(!q.extensions||!q.extensions[this.name])return Promise.resolve();const i=[],r=q.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&i.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new O1(o[0],o[1],o[2]),r.specularColorTexture!==void 0&&i.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,J1)),Promise.all(i)}}class ea{constructor(e){this.parser=e,this.name=H1.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,q=n.textures[e];if(!q.extensions||!q.extensions[this.name])return null;const i=q.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,i.source,r)}}class ta{constructor(e){this.parser=e,this.name=H1.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,q=n.json,i=q.textures[e];if(!i.extensions||!i.extensions[t])return null;const r=i.extensions[t],o=q.images[r.source];let a=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(a=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,a);if(q.extensionsRequired&&q.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class na{constructor(e){this.name=H1.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const q=n.extensions[this.name],i=this.parser.getDependency("buffer",q.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return i.then(function(o){const a=q.byteOffset||0,l=q.byteLength||0,c=q.count,h=q.byteStride,u=new Uint8Array(o,a,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(c,h,u,q.mode,q.filter).then(function(m){return m.buffer}):r.ready.then(function(){const m=new ArrayBuffer(c*h);return r.decodeGltfBuffer(new Uint8Array(m),c,h,u,q.mode,q.filter),m})})}else return null}}class qa{constructor(e){this.name=H1.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const q=t.meshes[n.mesh];for(const l of q.primitives)if(l.mode!==V2.TRIANGLES&&l.mode!==V2.TRIANGLE_STRIP&&l.mode!==V2.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],a={};for(const l in r)o.push(this.parser.getDependency("accessor",r[l]).then(c=>(a[l]=c,a[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const c=l.pop(),h=c.isGroup?c.children:[c],u=l[0].count,m=[];for(const p of h){const d=new z1,f=new F,x=new U5,M=new F(1,1,1),g=new Mr(p.geometry,p.material,u);for(let v=0;v<u;v++)a.TRANSLATION&&f.fromBufferAttribute(a.TRANSLATION,v),a.ROTATION&&x.fromBufferAttribute(a.ROTATION,v),a.SCALE&&M.fromBufferAttribute(a.SCALE,v),g.setMatrixAt(v,d.compose(f,x,M));for(const v in a)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&p.geometry.setAttribute(v,a[v]);i2.prototype.copy.call(g,p),g.frustumCulled=!1,this.parser.assignFinalMaterial(g),m.push(g)}return c.isGroup?(c.clear(),c.add(...m),c):m[0]}))}}const J0="glTF",c4=12,V7={JSON:1313821514,BIN:5130562};class ia{constructor(e){this.name=H1.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,c4),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==J0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const q=this.header.length-c4,i=new DataView(e,c4);let r=0;for(;r<q;){const o=i.getUint32(r,!0);r+=4;const a=i.getUint32(r,!0);if(r+=4,a===V7.JSON){const l=new Uint8Array(e,c4+r,o);this.content=n.decode(l)}else if(a===V7.BIN){const l=c4+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class sa{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=H1.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,q=this.dracoLoader,i=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},a={},l={};for(const c in r){const h=Rt[c]||c.toLowerCase();o[h]=r[c]}for(const c in e.attributes){const h=Rt[c]||c.toLowerCase();if(r[c]!==void 0){const u=n.accessors[e.attributes[c]],m=O3[u.componentType];l[h]=m.name,a[h]=u.normalized===!0}}return t.getDependency("bufferView",i).then(function(c){return new Promise(function(h){q.decodeDracoFile(c,function(u){for(const m in u.attributes){const p=u.attributes[m],d=a[m];d!==void 0&&(p.normalized=d)}h(u)},o,l)})})}}class ra{constructor(){this.name=H1.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class oa{constructor(){this.name=H1.KHR_MESH_QUANTIZATION}}class K0 extends L4{constructor(e,t,n,q){super(e,t,n,q)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,q=this.valueSize,i=e*q*3+q;for(let r=0;r!==q;r++)t[r]=n[i+r];return t}interpolate_(e,t,n,q){const i=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=o*2,l=o*3,c=q-t,h=(n-t)/c,u=h*h,m=u*h,p=e*l,d=p-l,f=-2*m+3*u,x=m-u,M=1-f,g=x-u+h;for(let v=0;v!==o;v++){const b=r[d+v+o],L=r[d+v+a]*c,R=r[p+v+o],y=r[p+v]*c;i[v]=M*b+g*L+f*R+x*y}return i}}const aa=new U5;class la extends K0{interpolate_(e,t,n,q){const i=super.interpolate_(e,t,n,q);return aa.fromArray(i).normalize().toArray(i),i}}const V2={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},O3={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},H7={9728:x2,9729:P2,9984:vt,9985:t0,9986:se,9987:n3},W7={33071:H2,33648:he,10497:B3},ht={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rt={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},P5={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ca={CUBICSPLINE:void 0,LINEAR:V3,STEP:y4},ut={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ha(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new s2({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:w5})),s.DefaultMaterial}function h4(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function D5(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ua(s,e,t){let n=!1,q=!1,i=!1;for(let l=0,c=e.length;l<c;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(q=!0),h.COLOR_0!==void 0&&(i=!0),n&&q&&i)break}if(!n&&!q&&!i)return Promise.resolve(s);const r=[],o=[],a=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];if(n){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;r.push(u)}if(q){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(u)}if(i){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;a.push(u)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(a)]).then(function(l){const c=l[0],h=l[1],u=l[2];return n&&(s.morphAttributes.position=c),q&&(s.morphAttributes.normal=h),i&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function fa(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,q=t.length;n<q;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function da(s){const e=s.extensions&&s.extensions[H1.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+X7(e.attributes):t=s.indices+":"+X7(s.attributes)+":"+s.mode,t}function X7(s){let e="";const t=Object.keys(s).sort();for(let n=0,q=t.length;n<q;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Pt(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ma(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const pa=new z1;class xa{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Vo,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,q=!1,i=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,q=navigator.userAgent.indexOf("Firefox")>-1,i=q?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||q&&i<98?this.textureLoader=new N0(this.options.manager):this.textureLoader=new bo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ve(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,q=this.json,i=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][q.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:q.asset,parser:n,userData:{}};h4(i,o,q),D5(o,q),Promise.all(n._invokeAll(function(a){return a.afterRoot&&a.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let q=0,i=t.length;q<i;q++){const r=t[q].joints;for(let o=0,a=r.length;o<a;o++)e[r[o]].isBone=!0}for(let q=0,i=e.length;q<i;q++){const r=e[q];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const q=n.clone(),i=(r,o)=>{const a=this.associations.get(r);a!=null&&this.associations.set(o,a);for(const[l,c]of r.children.entries())i(c,o.children[l])};return i(n,q),q.name+="_instance_"+e.uses[t]++,q}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const q=e(t[n]);if(q)return q}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let q=0;q<t.length;q++){const i=e(t[q]);i&&n.push(i)}return n}getDependency(e,t){const n=e+":"+t;let q=this.cache.get(n);if(!q){switch(e){case"scene":q=this.loadScene(t);break;case"node":q=this._invokeOne(function(i){return i.loadNode&&i.loadNode(t)});break;case"mesh":q=this._invokeOne(function(i){return i.loadMesh&&i.loadMesh(t)});break;case"accessor":q=this.loadAccessor(t);break;case"bufferView":q=this._invokeOne(function(i){return i.loadBufferView&&i.loadBufferView(t)});break;case"buffer":q=this.loadBuffer(t);break;case"material":q=this._invokeOne(function(i){return i.loadMaterial&&i.loadMaterial(t)});break;case"texture":q=this._invokeOne(function(i){return i.loadTexture&&i.loadTexture(t)});break;case"skin":q=this.loadSkin(t);break;case"animation":q=this._invokeOne(function(i){return i.loadAnimation&&i.loadAnimation(t)});break;case"camera":q=this.loadCamera(t);break;default:if(q=this._invokeOne(function(i){return i!=this&&i.getDependency&&i.getDependency(e,t)}),!q)throw new Error("Unknown type: "+e);break}this.cache.add(n,q)}return q}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,q=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(q.map(function(i,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[H1.KHR_BINARY_GLTF].body);const q=this.options;return new Promise(function(i,r){n.load(Ct.resolveURL(t.uri,q.path),i,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const q=t.byteLength||0,i=t.byteOffset||0;return n.slice(i,i+q)})}loadAccessor(e){const t=this,n=this.json,q=this.json.accessors[e];if(q.bufferView===void 0&&q.sparse===void 0){const r=ht[q.type],o=O3[q.componentType],a=q.normalized===!0,l=new o(q.count*r);return Promise.resolve(new L2(l,r,a))}const i=[];return q.bufferView!==void 0?i.push(this.getDependency("bufferView",q.bufferView)):i.push(null),q.sparse!==void 0&&(i.push(this.getDependency("bufferView",q.sparse.indices.bufferView)),i.push(this.getDependency("bufferView",q.sparse.values.bufferView))),Promise.all(i).then(function(r){const o=r[0],a=ht[q.type],l=O3[q.componentType],c=l.BYTES_PER_ELEMENT,h=c*a,u=q.byteOffset||0,m=q.bufferView!==void 0?n.bufferViews[q.bufferView].byteStride:void 0,p=q.normalized===!0;let d,f;if(m&&m!==h){const x=Math.floor(u/m),M="InterleavedBuffer:"+q.bufferView+":"+q.componentType+":"+x+":"+q.count;let g=t.cache.get(M);g||(d=new l(o,x*m,q.count*m/c),g=new pr(d,m/c),t.cache.add(M,g)),f=new Bt(g,a,u%m/c,p)}else o===null?d=new l(q.count*a):d=new l(o,u,q.count*a),f=new L2(d,a,p);if(q.sparse!==void 0){const x=ht.SCALAR,M=O3[q.sparse.indices.componentType],g=q.sparse.indices.byteOffset||0,v=q.sparse.values.byteOffset||0,b=new M(r[1],g,q.sparse.count*x),L=new l(r[2],v,q.sparse.count*a);o!==null&&(f=new L2(f.array.slice(),f.itemSize,f.normalized));for(let R=0,y=b.length;R<y;R++){const T=b[R];if(f.setX(T,L[R*a]),a>=2&&f.setY(T,L[R*a+1]),a>=3&&f.setZ(T,L[R*a+2]),a>=4&&f.setW(T,L[R*a+3]),a>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e].source,r=t.images[i];let o=this.textureLoader;if(r.uri){const a=n.manager.getHandler(r.uri);a!==null&&(o=a)}return this.loadTextureImage(e,i,o)}loadTextureImage(e,t,n){const q=this,i=this.json,r=i.textures[e],o=i.images[t],a=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[a])return this.textureCache[a];const l=this.loadImageSource(t,n).then(function(c){c.flipY=!1,c.name=r.name||o.name||"";const u=(i.samplers||{})[r.sampler]||{};return c.magFilter=H7[u.magFilter]||P2,c.minFilter=H7[u.minFilter]||n3,c.wrapS=W7[u.wrapS]||B3,c.wrapT=W7[u.wrapT]||B3,q.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[a]=l,l}loadImageSource(e,t){const n=this,q=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const r=q.images[e],o=self.URL||self.webkitURL;let a=r.uri||"",l=!1;if(r.bufferView!==void 0)a=n.getDependency("bufferView",r.bufferView).then(function(h){l=!0;const u=new Blob([h],{type:r.mimeType});return a=o.createObjectURL(u),a});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(a).then(function(h){return new Promise(function(u,m){let p=u;t.isImageBitmapLoader===!0&&(p=function(d){const f=new y2(d);f.needsUpdate=!0,u(f)}),t.load(Ct.resolveURL(h,i.path),p,void 0,m)})}).then(function(h){return l===!0&&o.revokeObjectURL(a),h.userData.mimeType=r.mimeType||ma(r.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),h});return this.sourceCache[e]=c,c}assignTexture(e,t,n,q){const i=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),i.extensions[H1.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[H1.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const a=i.associations.get(r);r=i.extensions[H1.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),i.associations.set(r,a)}}return q!==void 0&&(r.encoding=q),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const q=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let a=this.cache.get(o);a||(a=new S0,o5.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,a.sizeAttenuation=!1,this.cache.add(o,a)),n=a}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let a=this.cache.get(o);a||(a=new b0,o5.prototype.copy.call(a,n),a.color.copy(n.color),this.cache.add(o,a)),n=a}if(q||i||r){let o="ClonedMaterial:"+n.uuid+":";q&&(o+="derivative-tangents:"),i&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let a=this.cache.get(o);a||(a=n.clone(),i&&(a.vertexColors=!0),r&&(a.flatShading=!0),q&&(a.normalScale&&(a.normalScale.y*=-1),a.clearcoatNormalScale&&(a.clearcoatNormalScale.y*=-1)),this.cache.add(o,a),this.associations.set(a,this.associations.get(n))),n=a}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return s2}loadMaterial(e){const t=this,n=this.json,q=this.extensions,i=n.materials[e];let r;const o={},a=i.extensions||{},l=[];if(a[H1.KHR_MATERIALS_UNLIT]){const h=q[H1.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),l.push(h.extendParams(o,i,t))}else{const h=i.pbrMetallicRoughness||{};if(o.color=new O1(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;o.color.fromArray(u),o.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,J1)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=s5);const c=i.alphaMode||ut.OPAQUE;if(c===ut.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,c===ut.MASK&&(o.alphaTest=i.alphaCutoff!==void 0?i.alphaCutoff:.5)),i.normalTexture!==void 0&&r!==r5&&(l.push(t.assignTexture(o,"normalMap",i.normalTexture)),o.normalScale=new l1(1,1),i.normalTexture.scale!==void 0)){const h=i.normalTexture.scale;o.normalScale.set(h,h)}return i.occlusionTexture!==void 0&&r!==r5&&(l.push(t.assignTexture(o,"aoMap",i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&r!==r5&&(o.emissive=new O1().fromArray(i.emissiveFactor)),i.emissiveTexture!==void 0&&r!==r5&&l.push(t.assignTexture(o,"emissiveMap",i.emissiveTexture,J1)),Promise.all(l).then(function(){const h=new r(o);return i.name&&(h.name=i.name),D5(h,i),t.associations.set(h,{materials:e}),i.extensions&&h4(q,h,i),h})}createUniqueName(e){const t=K1.sanitizeNodeName(e||"");let n=t;for(let q=1;this.nodeNamesUsed[n];++q)n=t+"_"+q;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,q=this.primitiveCache;function i(o){return n[H1.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(a){return j7(a,o,t)})}const r=[];for(let o=0,a=e.length;o<a;o++){const l=e[o],c=da(l),h=q[c];if(h)r.push(h.promise);else{let u;l.extensions&&l.extensions[H1.KHR_DRACO_MESH_COMPRESSION]?u=i(l):u=j7(new S2,l,t),q[c]={primitive:l,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,q=this.extensions,i=n.meshes[e],r=i.primitives,o=[];for(let a=0,l=r.length;a<l;a++){const c=r[a].material===void 0?ha(this.cache):this.getDependency("material",r[a].material);o.push(c)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(a){const l=a.slice(0,a.length-1),c=a[a.length-1],h=[];for(let m=0,p=c.length;m<p;m++){const d=c[m],f=r[m];let x;const M=l[m];if(f.mode===V2.TRIANGLES||f.mode===V2.TRIANGLE_STRIP||f.mode===V2.TRIANGLE_FAN||f.mode===void 0)x=i.isSkinnedMesh===!0?new gr(d,M):new W1(d,M),x.isSkinnedMesh===!0&&!x.geometry.attributes.skinWeight.normalized&&x.normalizeSkinWeights(),f.mode===V2.TRIANGLE_STRIP?x.geometry=G7(x.geometry,q0):f.mode===V2.TRIANGLE_FAN&&(x.geometry=G7(x.geometry,yt));else if(f.mode===V2.LINES)x=new br(d,M);else if(f.mode===V2.LINE_STRIP)x=new Vt(d,M);else if(f.mode===V2.LINE_LOOP)x=new Sr(d,M);else if(f.mode===V2.POINTS)x=new wr(d,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(x.geometry.morphAttributes).length>0&&fa(x,i),x.name=t.createUniqueName(i.name||"mesh_"+e),D5(x,i),f.extensions&&h4(q,x,f),t.assignFinalMaterial(x),h.push(x)}for(let m=0,p=h.length;m<p;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return h[0];const u=new X2;t.associations.set(u,{meshes:e});for(let m=0,p=h.length;m<p;m++)u.add(h[m]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],q=n[n.type];if(!q){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new C2(d9.radToDeg(q.yfov),q.aspectRatio||1,q.znear||1,q.zfar||2e6):n.type==="orthographic"&&(t=new Ut(-q.xmag,q.xmag,q.ymag,-q.ymag,q.znear,q.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),D5(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let q=0,i=t.joints.length;q<i;q++)n.push(this.getDependency("node",t.joints[q]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(q){const i=q.pop(),r=q,o=[],a=[];for(let l=0,c=r.length;l<c;l++){const h=r[l];if(h){o.push(h);const u=new z1;i!==null&&u.fromArray(i.array,l*16),a.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Gt(o,a)})}loadAnimation(e){const n=this.json.animations[e],q=[],i=[],r=[],o=[],a=[];for(let l=0,c=n.channels.length;l<c;l++){const h=n.channels[l],u=n.samplers[h.sampler],m=h.target,p=m.node,d=n.parameters!==void 0?n.parameters[u.input]:u.input,f=n.parameters!==void 0?n.parameters[u.output]:u.output;q.push(this.getDependency("node",p)),i.push(this.getDependency("accessor",d)),r.push(this.getDependency("accessor",f)),o.push(u),a.push(m)}return Promise.all([Promise.all(q),Promise.all(i),Promise.all(r),Promise.all(o),Promise.all(a)]).then(function(l){const c=l[0],h=l[1],u=l[2],m=l[3],p=l[4],d=[];for(let x=0,M=c.length;x<M;x++){const g=c[x],v=h[x],b=u[x],L=m[x],R=p[x];if(g===void 0)continue;g.updateMatrix();let y;switch(P5[R.path]){case P5.weights:y=A4;break;case P5.rotation:y=a3;break;case P5.position:case P5.scale:default:y=C4;break}const T=g.name?g.name:g.uuid,D=L.interpolation!==void 0?ca[L.interpolation]:V3,$=[];P5[R.path]===P5.weights?g.traverse(function(k){k.morphTargetInfluences&&$.push(k.name?k.name:k.uuid)}):$.push(T);let W=b.array;if(b.normalized){const k=Pt(W.constructor),N=new Float32Array(W.length);for(let K=0,q1=W.length;K<q1;K++)N[K]=W[K]*k;W=N}for(let k=0,N=$.length;k<N;k++){const K=new y($[k]+"."+P5[R.path],v.array,W,D);L.interpolation==="CUBICSPLINE"&&(K.createInterpolant=function(e1){const U=this instanceof a3?la:K0;return new U(this.times,this.values,this.getValueSize()/3,e1)},K.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),d.push(K)}}const f=n.name?n.name:"animation_"+e;return new co(f,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,q=t.nodes[e];return q.mesh===void 0?null:n.getDependency("mesh",q.mesh).then(function(i){const r=n._getNodeRef(n.meshCache,q.mesh,i);return q.weights!==void 0&&r.traverse(function(o){if(!!o.isMesh)for(let a=0,l=q.weights.length;a<l;a++)o.morphTargetInfluences[a]=q.weights[a]}),r})}loadNode(e){const t=this.json,n=this.extensions,q=this,i=t.nodes[e],r=i.name?q.createUniqueName(i.name):"";return function(){const o=[],a=q._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});a&&o.push(a),i.camera!==void 0&&o.push(q.getDependency("camera",i.camera).then(function(u){return q._getNodeRef(q.cameraCache,i.camera,u)})),q._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)});const l=[],c=i.children||[];for(let u=0,m=c.length;u<m;u++)l.push(q.getDependency("node",c[u]));const h=i.skin===void 0?Promise.resolve(null):q.getDependency("skin",i.skin);return Promise.all([Promise.all(o),Promise.all(l),h])}().then(function(o){const a=o[0],l=o[1],c=o[2];let h;if(i.isBone===!0?h=new M0:a.length>1?h=new X2:a.length===1?h=a[0]:h=new i2,h!==a[0])for(let u=0,m=a.length;u<m;u++)h.add(a[u]);if(i.name&&(h.userData.name=i.name,h.name=r),D5(h,i),i.extensions&&h4(n,h,i),i.matrix!==void 0){const u=new z1;u.fromArray(i.matrix),h.applyMatrix4(u)}else i.translation!==void 0&&h.position.fromArray(i.translation),i.rotation!==void 0&&h.quaternion.fromArray(i.rotation),i.scale!==void 0&&h.scale.fromArray(i.scale);q.associations.has(h)||q.associations.set(h,{}),q.associations.get(h).nodes=e,c!==null&&h.traverse(function(u){!u.isSkinnedMesh||u.bind(c,pa)});for(let u=0,m=l.length;u<m;u++)h.add(l[u]);return h})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],q=this,i=new X2;n.name&&(i.name=q.createUniqueName(n.name)),D5(i,n),n.extensions&&h4(t,i,n);const r=n.nodes||[],o=[];for(let a=0,l=r.length;a<l;a++)o.push(q.getDependency("node",r[a]));return Promise.all(o).then(function(a){for(let c=0,h=a.length;c<h;c++)i.add(a[c]);const l=c=>{const h=new Map;for(const[u,m]of q.associations)(u instanceof o5||u instanceof y2)&&h.set(u,m);return c.traverse(u=>{const m=q.associations.get(u);m!=null&&h.set(u,m)}),h};return q.associations=l(i),i})}}function ga(s,e,t){const n=e.attributes,q=new J3;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],a=o.min,l=o.max;if(a!==void 0&&l!==void 0){if(q.set(new F(a[0],a[1],a[2]),new F(l[0],l[1],l[2])),o.normalized){const c=Pt(O3[o.componentType]);q.min.multiplyScalar(c),q.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const i=e.targets;if(i!==void 0){const o=new F,a=new F;for(let l=0,c=i.length;l<c;l++){const h=i[l];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],m=u.min,p=u.max;if(m!==void 0&&p!==void 0){if(a.setX(Math.max(Math.abs(m[0]),Math.abs(p[0]))),a.setY(Math.max(Math.abs(m[1]),Math.abs(p[1]))),a.setZ(Math.max(Math.abs(m[2]),Math.abs(p[2]))),u.normalized){const d=Pt(O3[u.componentType]);a.multiplyScalar(d)}o.max(a)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}q.expandByVector(o)}s.boundingBox=q;const r=new K3;q.getCenter(r.center),r.radius=q.min.distanceTo(q.max)/2,s.boundingSphere=r}function j7(s,e,t){const n=e.attributes,q=[];function i(r,o){return t.getDependency("accessor",r).then(function(a){s.setAttribute(o,a)})}for(const r in n){const o=Rt[r]||r.toLowerCase();o in s.attributes||q.push(i(n[r],o))}if(e.indices!==void 0&&!s.index){const r=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});q.push(r)}return D5(s,e),ga(s,e,t),Promise.all(q).then(function(){return e.targets!==void 0?ua(s,e.targets,t):s})}const I2=new mr;var It=new Io,R2=It.intersectObjects(I2.children);const _a=new No;let va=_a.parse(Bo);const k2=new N0;var C3,ae,Y7;const M1=new C2(75,1,.1,1e3),F3=new y0({canvas:document.querySelector("#bg")});window.addEventListener("resize",Z0,!1);function Z0(){C3=window.innerWidth,ae=window.innerHeight,Y7=C3/ae,M1.aspect=Y7,C3<750&&(M1.fov=95),C3>=750&&(M1.fov=75),M1.updateProjectionMatrix(),F3.setSize(C3,ae),F3.setPixelRatio(window.devicePixelRatio)}Z0();const $0=new s2({color:13421772}),R4=new s2({color:11141290}),le=new s2({color:0}),ya=new s2({color:43520});var z2=[];const t6=Da(R4,$0,"./ouluitems/ouluplane.png");I2.add(t6);const A1=new W1(new v2(1,1,1),$0),d4=[];function ft(s,e,t){var n=4.5,q=7;const i=new v2((F5-n)/2,b5,1),r=new v2(F5,b5-q,1),o=new v2(n,q,1),a=new X2,l=new W1(i,s);l.position.x=3.5;const c=new W1(i,s);c.position.x=-3.5;const h=new W1(r,s);h.position.y+=q/2;const u=new X2;if(t==0){const m=new W1(o,R4);m.position.y-=(b5-q)/2,m.position.z+=.5,m.position.x-=n/2,u.add(m);const p=ce(e[0],le,0,0,0,1,1,.004),d=ce(e[1],le,0,-.5,0,1,1,.004),f=ce("Aula",le,0,-.25,0,1,1,.004);p.position.x-=n/2,d.position.x-=n/2,f.position.x-=n/2,p.rotation.y=Math.PI,d.rotation.y=Math.PI,f.position.z+=1,u.add(p),u.add(d),u.add(f),u.position.x+=n/2,m.name=e[0],p.name=e[0],d.name=e[0],d4.push(u)}return a.add(l,c,h,u),a}var n2=[];for(let s=0;s<5;s++)n2[s]=new O0(16777215,.6),n2[s].angle=.78,n2[s].position.x=-11,n2[s].position.y=0,I2.add(n2[s]),n2[s].visible=!1;n2[4].position.x=0;n2[4].position.y=3;n2[4].position.z=11;n2[4].angle=.07;var Ma=new v2(5.3,5.3,1.09),ba=new v2(5.2,5.2,1.1),Sa=new v2(4.8,4.8,1.11);const wa=new s2({color:0}),$5=new X2;Na(R4);I2.add($5);var F5=10,b5=10,X3=10,Ta=[F5,F5,F5,X3,X3,F5],Ea=[X3,b5,b5,b5,b5,X3];const u3=[];u3[0]=new s2({map:k2.load("./ouluitems/floor-texture.png")});u3[1]=new s2({map:k2.load("./ouluitems/ceiling-texture2.png")});u3[2]=new s2({color:9994340});u3[3]=new s2({map:k2.load("./ouluitems/brickwall.png")});u3[4]=new s2({map:k2.load("./ouluitems/concretewall.png")});u3[5]=new s2({color:85});const T5=[];T5[0]=new s2({map:k2.load("./ouluitems/oldhouse2.png")});T5[1]=new s2({map:k2.load("./ouluitems/riverfishing.png")});T5[2]=new s2({map:k2.load("./ouluitems/riverburning.png")});T5[3]=new s2({map:k2.load("./ouluitems/oulufinland.png")});T5[4]=new s2({map:k2.load("./ouluitems/starttext.png")});T5[5]=new s2({map:k2.load("./ouluitems/tauno.jpg")});T5[6]=new s2({map:k2.load("./ouluitems/Franzen.png")});T5[7]=new s2({map:k2.load("./ouluitems/taunotext2.png")});const V1=[];for(let s=0;s<4;s++){V1[s]=new Array(6);for(let e=0;e<6;e++){e==0&&(V1[s][e]="0"),e==5&&(V1[s][e]="1"),e>0&&e<5&&s==0&&(V1[s][e]="2"),e>0&&e<5&&s==1&&(V1[s][e]="5"),e>0&&e<5&&s==2&&(V1[s][e]="3"),e==1&&s==2&&(V1[s][e]="4"),e>0&&e<5&&s==3&&(V1[s][e]="4");var f3=",0";if(s==0&&e==1)var f3=",1";if(s==0&&e==2)var f3=",2";if(s==0&&e==3)var f3=",3";if(s==1&&e==2)var f3=",1";if(s==2&&e==1)var f3=",2";if(s==3&&e==4)var f3=",3";V1[s][e]=V1[s][e]+f3}}V1[0][4]=V1[0][4]+",TS_0_4.1_0.003_Voit klikata kaikkea violettia. Klikkaa ensin t\xE4st\xE4!";V1[0][4]=V1[0][4]+",T_0_3_0.008_Pohjois-";V1[0][4]=V1[0][4]+",T_0_2_0.008_Pohjanmaan";V1[0][4]=V1[0][4]+",T_0_0.8_0.008_museo";V1[0][4]=V1[0][4]+",P_-2.2_-2.3_0.55_0.55_5";V1[0][4]=V1[0][4]+",P_-2.2_-0.7_0.55_0.12_7";V1[2][3]=V1[2][3]+",PF1_0_0_1_1_0";V1[2][2]=V1[2][2]+",PF0_0_0_1_1_1";V1[2][4]=V1[2][4]+",PF2_0_0_1_1_2";V1[2][1]=V1[2][1]+",PF3_-3.2_0_0.4_0.5_6";V1[3][3]=V1[3][3]+",P_0_0.4_1_1.2_3";const z3=[];for(let s=0;s<4;s++){z3[s]=new X2;for(let e=0;e<6;e++){const n=V1[s][e].split(","),q=u3[Number(n[0])];if(Number(n[1])==1)var g2=ft(q,["Laiva","Toivo"],s);if(Number(n[1])==2)var g2=ft(q,["Oulu","Art"],s);if(Number(n[1])==3)var g2=ft(q,["Mini-","Oulu"],s);if(Number(n[1])==0)var Aa=new v2(1+Ta[e],1+Ea[e],1),g2=new W1(Aa,q);for(let i=0;i<n.length;i++){if(n[i][0]=="T"){var i5=n[i].split("_"),dt=ce(i5[4],le,Number(i5[1]),Number(i5[2]),.6,1,1,Number(i5[3]));if(n[i][1]=="S"){var Ca=dt;dt.name="start"}g2.add(dt)}if(n[i][0]=="P"){var i5=n[i].split("_"),Z2=[];Z2[0]=new W1(ba,wa),Z2[1]=new W1(Sa,T5[Number(i5[5])]),Z2[2]=new W1(Ma,R4);var J7=2;if(n[i][1]=="F"){var mt=Number(n[i][2]);mt>-1&&mt<4&&(n2[mt].target=g2),J7=3,Z2[0].name="Turn90",Z2[1].name="Turn90",Z2[2].name="Turn90"}for(let o=0;o<J7;o++)Z2[o].position.y=Number(i5[2]),Z2[o].position.x=Number(i5[1]),Z2[o].scale.y=Number(i5[4]),Z2[o].scale.x=Number(i5[3]),g2.add(Z2[o])}}e==0&&(g2.position.y=-b5/2,g2.rotation.x=Math.PI/2),e==1&&(g2.position.x=F5/2,g2.rotation.y=Math.PI/2),e==2&&(g2.position.x=-F5/2,g2.rotation.y=-Math.PI/2),e==3&&(g2.position.z=X3/2),e==4&&(g2.position.z=-X3/2),e==5&&(g2.position.y=b5/2,g2.rotation.x=Math.PI/2),z3[s].add(g2)}I2.add(z3[s])}z3[1].position.x+=11;z3[2].position.x-=11;z3[3].position.z+=11;t6.position.z+=11;const l3=new W1(new pe(10,.7),R4);l3.position.y=4.1;l3.position.z=-4.4;l3.name="start";const be=new W1(new ge(1.9,32),ya);be.position.z=-4.4;be.position.x=2.15;be.position.y=-2.1;I2.add(l3,be);const Q0=new $t(16777215,.4);Q0.position.set(0,3,0);const j3=new $t(16777215,.6);j3.position.set(11,-1,0);const La=new Mo(16777215,.4);I2.add(La,Q0,j3);j3.visible=!1;const k5=new Go;k5.load("./ouluitems/PositiveSnowflake_sunset_extended.glb",function(s){B5(s.scene,[10.2-.2,-4.4,-.8-.2,0,Math.PI/4,Math.PI,.85],0)});k5.load("./ouluitems/PositiveSnowflake_sunset_extended.glb",function(s){B5(s.scene,[10.2+1.8,-4.4,-.8+1.8,0,Math.PI/4,Math.PI,.85],0)});k5.load("./ouluitems/toivo_prop3.glb",function(s){B5(s.scene,[12,-1.55,1,0,Math.PI/4,0,.32],0)});k5.load("./ouluitems/blue2026.glb",function(s){B5(s.scene,[15.5,1.8,0,0,-Math.PI/2,0,1],0)});k5.load("./ouluitems/ouluCoat.glb",function(s){B5(s.scene,[-4.4,1,10,0,Math.PI,0,1.4],0)});k5.load("./ouluitems/tuomio_mesh_cleanup_cut.glb",function(s){B5(s.scene,[-1.2,-.98,.2,0,1.3*Math.PI/4,0,.25],1)});k5.load("./ouluitems/ainola.glb",function(s){B5(s.scene,[-.8,-.89,1.1,0,2.2*Math.PI/4,0,.18],1)});k5.load("./ouluitems/Kaup_only.glb",function(s){B5(s.scene,[-.4,-.95,-.1,0,1.2*Math.PI/4,0,.2],1)});function B5(s,e,t){s.position.setX(e[0]),s.position.setY(e[1]),s.position.setZ(e[2]),s.rotation.x=e[3],s.rotation.y=e[4],s.rotation.z=e[5],s.scale.setScalar(e[6]),t==0&&I2.add(s),t==1&&t6.add(s)}const Ra=new Me;Ra.load("./ouluitems/pp_logo.svg",function(s){Pa(s,[.5,-.5,-4.2,0,Math.PI,Math.PI,.004])});function Pa(s,e){const t=s.paths;for(let n=0;n<t.length;n++){const q=t[n],i=new r5({color:q.color,side:s5,depthWrite:!1}),r=Me.createShapes(q);for(let o=0;o<r.length;o++){const a=r[o],l=new Jt(a),c=new W1(l,i);c.position.setX(e[0]),c.position.setY(e[1]),c.position.setZ(e[2]),c.rotation.x=e[3],c.rotation.y=e[4],c.rotation.z=e[5],c.scale.setScalar(e[6]),I2.add(c)}}}F3.domElement.addEventListener("click",Ia);function Ia(s){if(!($2.length>0)){var e=new F(s.clientX/C3*2-1,-(s.clientY/ae)*2+1,.5);if(It.setFromCamera(e,M1),R2=It.intersectObjects(I2.children),R2.length>0){if(R2[0].object.name=="start"&&(Ca.visible=!1,l3.visible=!1),l3.visible==!0)return;if(R2[0].object.name.substring(0,8)=="Gohere"&&(Dt(!1),Q2([M1.position.x,M1.position.y,M1.position.z,R2[0].object.position.x,R2[0].object.position.y,R2[0].object.position.z],10)),R2[0].object.name=="kirkko"){m4(!1);var t=[M1.position.x,M1.position.y,M1.position.z],n=[0,1,15],q=[t[0]+1.5,t[1]-1.7,t[2]-2.9],i=[t[0]+0,t[1]-1.7,t[2]-5],r=[t[0]-1,t[1]-1.7,t[2]-3.3];Q2(t.concat(r,i,q,n),40);var o=[A1.position.x,A1.position.y,A1.position.z],a=[M1.position.x+1.1,M1.position.y-1.7,M1.position.z-4.25];e5(o.concat(a,a,a,o))}if(R2[0].object.name=="ainola"){m4(!1);var t=[M1.position.x,M1.position.y,M1.position.z],n=[0,1,15],q=[t[0]+2,t[1]-1.8,t[2]-4.5],i=[t[0]+1.5,t[1]-1.8,t[2]-5],r=[t[0]+1.35,t[1]-1.8,t[2]-5];Q2(t.concat(q,i,r,i,q,n),40);var o=[A1.position.x,A1.position.y,A1.position.z],a=[M1.position.x+.5,M1.position.y-1.7,M1.position.z-5.75];e5(o.concat(a,a,a,a,a,o))}if(R2[0].object.name=="ktalo"){m4(!1);var t=[M1.position.x,M1.position.y,M1.position.z],n=[0,1,15],q=[t[0]+1,t[1]-1.8,t[2]-4],i=[t[0]+0,t[1]-1.8,t[2]-4.5],r=[t[0]-.6,t[1]-1.8,t[2]-4.1];Q2(t.concat(q,i,r,n),40);var o=[A1.position.x,A1.position.y,A1.position.z],a=[M1.position.x+0,M1.position.y-1.7,M1.position.z-3.5];e5(o.concat(a,a,a,o))}if(R2[0].object.name=="Turn90"){if(n2[0].visible=!1,n2[1].visible=!1,n2[2].visible=!1,n2[3].visible=!1,A1.position.x==-15)var l=[-11,A1.position.y,-4];if(A1.position.z==4)var l=[-15,A1.position.y,0];if(A1.position.x==-7)var l=[-11,A1.position.y,4];if(A1.position.z==-4)var l=[-7,A1.position.y,0];e5([A1.position.x,A1.position.y,A1.position.z,l[0],l[1],l[2]]);return}R2[0].object.name=="Laiva"&&(M1.position.x>5?(v5=Math.PI/2,e5([A1.position.x,A1.position.y,A1.position.z,0,0,0]),Q2([M1.position.x,M1.position.y,M1.position.z,11,1,4,4,-.5,0],10),N5=0,j3.visible=!1,Dt(!1)):(e5([A1.position.x,A1.position.y,A1.position.z,11,0,0]),Q2([M1.position.x,M1.position.y,M1.position.z,0,0,0,6,1,0,10,1,4,12,3,4],10),N5=2),n5=0),R2[0].object.name=="Oulu"&&(M1.position.x<-5?(v5=-Math.PI/2,n2[3].visible=!1,e5([A1.position.x,A1.position.y,A1.position.z,0,0,0]),Q2([M1.position.x,M1.position.y,M1.position.z,-4,-.5,0],10),N5=0):(e5([A1.position.x,A1.position.y,A1.position.z,-15,0,0]),Q2([M1.position.x,M1.position.y,M1.position.z,0,0,0,-11,0,0],10),N5=1),n5=1),R2[0].object.name=="Mini-"&&(M1.position.z>5?(m4(!1),e5([A1.position.x,A1.position.y,A1.position.z,0,0,0]),Q2([M1.position.x,M1.position.y,M1.position.z,-3,1,14,-3,1,8,0,-.5,4],10),v5=0,N5=0):(e5([A1.position.x,A1.position.y,A1.position.z,0,-.5,11]),Q2([M1.position.x,M1.position.y,M1.position.z,0,0,0,0,1,8,3,1,8,3,1,14,0,1,15],10),N5=3),n5=2)}}}function Q2(s,e){var t=[],n=[],q=[];for(let i=0;i<s.length/3-1;i++)for(let r=0;r<=100;r++)t.push(r/100*s[3+3*i]+(100-r)/100*s[0+3*i]),n.push(r/100*s[4+3*i]+(100-r)/100*s[1+3*i]),q.push(r/100*s[5+3*i]+(100-r)/100*s[2+3*i]);t=pt(t,e),n=pt(n,e),q=pt(q,e);for(let i=0;i<t.length;i++)$2.push(t[i]),$2.push(n[i]),$2.push(q[i])}function pt(s,e){let t=[],n=0,q=0;for(let r=0;r<s.length;r++){n=0,q=0;var i=Math.min(e,r+1,s.length-r+2);for(let o=Math.max(r-i,0);o<Math.min(r+i,s.length);o++)n+=s[o],q++;t.push(n/q)}return t}function e5(s){for(let e=0;e<s.length/3-1;e++)for(let t=0;t<=100;t++)_5.push(t/100*s[3+3*e]+(100-t)/100*s[0+3*e]),_5.push(t/100*s[4+3*e]+(100-t)/100*s[1+3*e]),_5.push(t/100*s[5+3*e]+(100-t)/100*s[2+3*e])}var $2=[],_5=[],n5=-1,N5=0,v5=0,ie=0;function e8(){requestAnimationFrame(e8),z2[0].visible==!0?(ie++,ie>119&&(ie=0),n2[4].target=z2[2-Math.floor(ie/40)],n2[4].visible=!0):n2[4].visible=!1,n5>-1&&d4[n5].rotation.y>-1.5*Math.PI/2&&(d4[n5].rotation.y-=.03);for(let s=0;s<3;s++)d4[s].rotation.y<0&&s!=n5&&(d4[s].rotation.y+=.01,s==0&&j3.visible==!1&&N5==2&&(j3.visible=!0));if(_5.length>0&&(A1.position.x=_5[0],A1.position.y=_5[1],A1.position.z=_5[2],_5.splice(0,3),_5.length<10&&(A1.position.x==-15&&(n2[0].visible=!0),A1.position.x==-11&&A1.position.z==-4&&(n2[2].visible=!0),A1.position.x==-11&&A1.position.z==4&&(n2[1].visible=!0),A1.position.x==-7&&A1.position.z==0&&(n2[3].visible=!0))),$2.length>0){M1.position.x=$2[0],M1.position.y=$2[1],M1.position.z=$2[2],$2.splice(0,3),M1.position.x>4.4&&M1.position.x<4.6&&(n5=-1),M1.position.x>-4.6&&M1.position.x<-4.4&&(n5=-1),M1.position.z>4.4&&M1.position.z<4.6&&(n5=-1),M1.position.z>14.6&&M1.position.x<.1&&$2.length<20&&m4(!0),M1.position.x>6&&$2.length<2&&setTimeout(function(){Dt(!0)},1e3),M1.lookAt(A1.position),F3.render(I2,M1);return}if(N5==0){v5-=.01,l3.visible==!0&&(v5=0),v5<0&&(v5+=2*Math.PI),M1.position.x=-0+4*Math.sin(v5),M1.position.z=4*Math.cos(v5),M1.position.y=-.5,A1.position.x=-0,A1.position.z=0,M1.lookAt(A1.position),F3.render(I2,M1);return}M1.lookAt(A1.position),F3.render(I2,M1)}e8();function ce(s,e,t,n,q,i,r,o){const a=new Uo(s,{font:va,size:90,height:10,curveSegments:12,bevelEnabled:!0,bevelThickness:2,bevelSize:3,bevelOffset:1,bevelSegments:1});a.computeBoundingBox();const l=-.5*(a.boundingBox.max.x-a.boundingBox.min.x),c=-.5*(a.boundingBox.max.y-a.boundingBox.min.y),h=-.5*(a.boundingBox.max.z-a.boundingBox.min.z);r==1&&a.translate(l,c,h);const u=new W1(a,e);return u.position.set(t,n,q),u.scale.set(o,o,o),i==0&&(u.visible=!1),u}function Da(s,e,t){const n=new X2;var q=new r5({color:16777215,transparent:!0,opacity:.3}),i=new v2(5,5,.5),r=new W1(i,q);r.rotation.x=Math.PI/2,r.position.y=-.8,n.add(r);var o=new v2(1,1,1),a=[-5,5,0,0],l=[0,0,-5,5];for(let R=0;R<4;R++){var c=new W1(o,e);c.position.set(a[R]/2,-.5,l[R]/2),c.scale.set(5,.05,.05),R<2&&(c.rotation.y=Math.PI/2),n.add(c)}var h=.025,u=[-5+h,5-h,-5+h,5-h],m=[-5+h,-5+h,5-h,5-h];for(let R=0;R<4;R++){var c=new W1(o,e);c.position.set(u[R]/2,-.75,m[R]/2),c.scale.set(.05,.55,.05),c.rotation.y=Math.PI,n.add(c);var p=new W1(new jt(.2,.2,4,32),e);p.position.y=-2.5,p.position.x=u[R]/2,p.position.z=m[R]/2,n.add(p)}var d=new W1(new v2(5.01,5.01,.1),new r5({color:13421772,transparent:!0,opacity:1}));d.position.y=-1.01,d.rotation.x=Math.PI/2;const f=new v2(5,5,.1),x=new s2({map:k2.load(t)}),M=new W1(f,x);M.position.y=-1,M.rotation.x=Math.PI/2,n.add(M,d),n.rotation.y=Math.PI;var g=new ge(.35,15);for(let R=0;R<3;R++){var v=[1,.8,.3],b=[-.2,-1.27,.06],L=["kirkko","ainola","ktalo"];z2[R]=new W1(g,s),z2[R].rotation.x=Math.PI/2,z2[R].rotation.y=Math.PI,z2[R].position.z=11,z2[R].position.y=-.5,z2[R].visible=!1,I2.add(z2[R]),z2[R].position.x+=v[R],z2[R].position.z+=b[R],z2[R].name=L[R]}return n}function Na(s){var e=new Kt(.5,16,16),t=new W1(e,s);t.name="Gohere";var n=[4,4,4,4,-4,-4,-4,-4],q=[4.5,4.5,-4.5,-4.5,4.5,4.5,-4.5,-4.5],i=[4,-4,4,-4,4,-4,4,-4];for(let c=1;c<3;c++){for(let h=0;h<n.length;h++){var r=t.clone();r.position.x=n[h]/c+11,r.position.y=q[h]/c,c==2&&(r.position.y=.5),r.position.z=i[h]/c,$5.add(r)}t.scale.setScalar(.2)}t.scale.setScalar(.1);var o=Math.PI/4;for(let c=0;c<360;c+=20){var r=t.clone(),a=4*Math.sin(c*2*Math.PI/180),l=1.5*Math.cos(c*2*Math.PI/180);r.position.y=.5,r.position.x=a*Math.cos(o)-l*Math.sin(o)+11,r.position.z=a*Math.sin(o)+l*Math.cos(o),$5.add(r)}for(let c=0;c<10;c+=2){var r=t.clone(),a=.5*c-2.5,l=.5;r.position.y=0,r.position.x=a*Math.cos(o)-l*Math.sin(o)+11,r.position.z=a*Math.sin(o)+l*Math.cos(o),$5.add(r)}for(let c=0;c<10;c+=2){var r=t.clone(),a=.5*c-2.5,l=-.5;r.position.y=0,r.position.x=a*Math.cos(o)-l*Math.sin(o)+11,r.position.z=a*Math.sin(o)+l*Math.cos(o),$5.add(r)}$5.visible=!1}function m4(s){for(let e=0;e<3;e++)z2[e].visible=s}function Dt(s){$5.visible=s}