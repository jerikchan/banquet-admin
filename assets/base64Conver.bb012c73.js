function t(t){const e=t.split(","),n=e[0].match(/:(.*?);/)[1],o=atob(e[1]);let r=o.length;const a=new Uint8Array(r);for(;r--;)a[r]=o.charCodeAt(r);return new Blob([a],{type:n})}function e(t,e){return new Promise(((n,o)=>{let r=document.createElement("CANVAS");const a=r.getContext("2d"),i=new Image;i.crossOrigin="",i.onload=function(){if(!r||!a)return o();r.height=i.height,r.width=i.width,a.drawImage(i,0,0);const t=r.toDataURL(e||"image/png");r=null,n(t)},i.src=t}))}export{t as d,e as u};
