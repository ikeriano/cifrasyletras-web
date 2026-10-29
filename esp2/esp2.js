/* ESP2 · cabecera 3D de especiales + saludo largo (voz TTS Piper). Grok Bot para Ikeriano. */
(function(){
var S=document.currentScript,BASE=S?S.src.replace(/esp2\.js(\?.*)?$/,''):'esp2/';
var C={"pres": "Álex Navas", "creditos": [["Presentado por", "Álex Navas"], ["Realización", "Equipo de plató Grok Bot"], ["Producción", "Ikeriano Producciones"], ["Creado por", "Ikeriano"], ["Programado con", "Grok Bot"], ["Voces", "Piper TTS · voz sintética"]], "logo": ["CIFRAS", "Y LETRAS"], "logoCss": "color:#ffd23a;text-shadow:0 0 14px #ff9d00,3px 3px 0 #0a1a4a;font-family:Arial Black,Arial", "font": "Arial Black,Arial", "c1": "#06183a", "c2": "#123d8a", "c3": "#2b62d9", "c4": "#ffd23a", "ring": ["A", "7", "E", "3", "I", "9", "O", "1", "U", "5", "R", "8", "S", "2", "T", "6", "L", "4", "N", "0", "C"], "emojis": ["🔢", "🔤", "⏱️"], "sinto": "snd/cabecera_oficial.m4a", "dur_cab": 17, "g": "cy", "lineas": {"navidad": ["Especial Navidad", "🎄", ["¡Bienvenidos al Especial Navidad de Cifras y Letras! Hoy las letras llevan gorro de Papá Noel.", "Hemos colgado bolas de Navidad con números. Si alguna se cae, sumadla, que algo vale.", "En el Especial Navidad la palabra más larga gana un turrón, y la cifra exacta, un villancico.", "El público ha traído panderetas. Por favor, no las toquéis mientras corre el reloj.", "Lo más bonito de estas fechas es jugar en familia, y vosotros sois nuestra familia.", "¡Que empiece el Especial Navidad de Cifras y Letras! ¡Feliz Navidad!"]], "aniversario": ["Especial siete mil programas", "🎂", ["¡Bienvenidos al Especial siete mil programas de Cifras y Letras! Qué cifra tan bonita.", "Siete mil programas de palabras largas, cuentas imposibles y relojes que no perdonan.", "En el Especial siete mil programas hasta los números están emocionados. El siete no para de llorar.", "Gracias a todos los que habéis pasado por este plató, y a todos los que jugáis desde casa.", "Hoy hay tarta, pero cortarla exacta en siete trozos es la prueba de cifras más difícil.", "¡Que empiece el Especial siete mil programas de Cifras y Letras!"]], "junior": ["Especial Cifras y Letras Junior", "🧒", ["¡Hola, campeones! Bienvenidos al Especial Cifras y Letras Junior.", "Hoy los concursantes son pequeños, pero hacen cuentas más rápido que mi calculadora.", "En el Especial Cifras y Letras Junior vale pensar con los dedos y equivocarse con una sonrisa.", "Papás y mamás, nada de soplar desde el sofá, que los números os oyen.", "Aquí lo importante es aprender jugando, y hoy vamos a aprender muchísimo.", "¡Que empiece el Especial Cifras y Letras Junior! ¡A jugar!"]], "youtube": ["Especial YouTube", "▶️", ["¡Hola, internautas! Bienvenidos al Especial YouTube de Cifras y Letras.", "Hoy vienen los youtubers más listos, con más palabras que comentarios en un directo.", "En el Especial YouTube, si acertáis la cifra exacta, os ganáis un like del público.", "No olvidéis suscribiros al cerebro: ejercitarlo es gratis y no tiene anuncios.", "Y para los que nos veis desde casa: dadle al play a vuestras neuronas.", "¡Que empiece el Especial YouTube de Cifras y Letras!"]]}, "dur": {"navidad": [6.29, 6.68, 6.68, 6.01, 5.48, 4.59], "aniversario": [6.11, 5.35, 5.75, 5.51, 5.41, 3.82], "junior": [4.53, 5.26, 5.85, 4.81, 5.05, 4.08], "youtube": [5.09, 5.04, 6.42, 4.9, 4.68, 3.33]}, "tag": "♪ Sintonía oficial"};
function el(t,css,h){var e=document.createElement(t);if(css)e.style.cssText=css;if(h!=null)e.innerHTML=h;return e}
function esc(s){return String(s).replace(/[&<>]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;'}[c]})}
function info(esp){if(!esp)return null;var id=typeof esp==='string'?esp:esp.id;if(!id||id==='normal')return null;var L=C.lineas[id];return L?{id:id,n:L[0],e:L[1],l:L[2],d:(C.dur[id]||[])}:null}
var st=el('style');st.textContent=
'.e2w{position:fixed;left:0;top:0;right:0;bottom:0;z-index:2147483000;overflow:hidden;background:radial-gradient(ellipse at 50% 60%,'+C.c2+' 0%,'+C.c1+' 45%,#000 100%);perspective:700px;perspective-origin:50% 45%;font-family:'+C.font+';color:#fff;-webkit-user-select:none;user-select:none}'+
'.e2w *{box-sizing:border-box}.e2c{position:absolute;left:50%;top:50%;width:0;height:0;transform-style:preserve-3d;will-change:transform}'+
'.e2o{position:absolute;left:0;top:0;transform-style:preserve-3d;backface-visibility:visible}'+
'.e2f{width:1800px;height:1800px;margin:-900px 0 0 -900px;background:radial-gradient(circle,'+C.c3+'55 0,transparent 30%),repeating-linear-gradient(0deg,'+C.c3+'66 0 3px,transparent 3px 90px),repeating-linear-gradient(90deg,'+C.c3+'66 0 3px,transparent 3px 90px),radial-gradient(circle,#0000 0,#000 70%);border-radius:50%}'+
'.e2r{width:64px;height:64px;margin:-32px 0 0 -32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font:900 34px '+C.font+';color:#fff;background:radial-gradient(circle at 35% 30%,'+C.c4+','+C.c3+' 70%);border:3px solid #fff8}'+
'.e2s{width:330px;height:190px;margin:-95px 0 0 -165px;border:6px solid #222;border-radius:10px;background:linear-gradient(160deg,'+C.c1+','+C.c3+');display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}'+
'.e2p{width:18px;height:520px;margin:-260px 0 0 -9px;background:linear-gradient(#fff,'+C.c4+' 30%,transparent);opacity:.75;border-radius:9px}'+
'.e2e{font-size:70px;margin:-40px 0 0 -40px;width:80px;text-align:center;animation:e2b 2.4s ease-in-out infinite alternate}'+
'@keyframes e2b{to{margin-top:-80px}}'+
'.e2L{line-height:.95;font-weight:900;letter-spacing:1px}'+
'.e2cr{position:absolute;left:6%;bottom:12%;padding:10px 22px 12px;border-left:8px solid '+C.c4+';background:linear-gradient(90deg,#000c,#0000);opacity:0;transform:translateX(-30px);transition:opacity .5s,transform .5s;max-width:80%}'+
'.e2cr.on{opacity:1;transform:none}.e2cr small{display:block;font:700 clamp(12px,2.6vh,20px) Arial;color:'+C.c4+';letter-spacing:2px;text-transform:uppercase}.e2cr b{display:block;font:900 clamp(20px,5vh,40px) '+C.font+'}'+
'.e2lg{position:absolute;left:50%;top:44%;transform:translate(-50%,-50%) scale(.6);opacity:0;transition:all .9s cubic-bezier(.2,1.4,.4,1);text-align:center;pointer-events:none}.e2lg.on{opacity:1;transform:translate(-50%,-50%) scale(1)}'+
'.e2tag{position:absolute;left:12px;top:10px;font:700 13px Arial;background:#0008;padding:4px 10px;border-radius:12px}'+
'.e2x{position:absolute;right:12px;bottom:12px;padding:8px 14px;border-radius:10px;border:2px solid '+C.c4+';background:#000a;color:#fff;font:bold 14px Arial;z-index:3}'+
'.e2bn{position:absolute;left:50%;top:70%;transform:translateX(-50%);padding:8px 26px;border-radius:30px;background:'+C.c4+';color:#000;font:900 clamp(16px,4vh,34px) '+C.font+';white-space:nowrap;opacity:0;transition:opacity .6s}.e2bn.on{opacity:1}'+
'.e2sub{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:2147483001;max-width:min(92vw,900px);padding:10px 18px;border-radius:14px;background:#000d;border:2px solid '+C.c4+';color:#fff;font:600 clamp(14px,2.6vh,20px) system-ui,Arial;text-align:center}'+
'.e2sub b{color:'+C.c4+'}.e2sub i{font-style:normal;font-size:.75em;opacity:.8;white-space:nowrap}.e2sub button{margin-left:10px;border:0;border-radius:8px;padding:3px 8px;font:bold 12px Arial}';
document.head.appendChild(st);
function logoHTML(sz){return '<div class="e2L" style="'+C.logoCss+';font-size:'+sz+'px">'+C.logo.map(esc).join('<br>')+'</div>'}
function ang(o,a,r,y,extra){o.style.transform='rotateY('+a+'deg) translateZ('+r+'px) translateY('+y+'px)'+(extra||'')}
var KF=[[0,0,78,1500,0],[.18,180,52,950,0],[.38,540,22,820,0],[.55,720,4,300,-80],[.70,780,46,760,0],[.85,720,8,560,-40],[1,720,16,1050,0]];
function sm(x){return x*x*(3-2*x)}
function camAt(f){for(var i=1;i<KF.length;i++)if(f<=KF[i][0]){var a=KF[i-1],b=KF[i],u=sm((f-a[0])/(b[0]-a[0]));return a.map(function(v,k){return v+(b[k]-v)*u})}return KF[KF.length-1]}
function cab(esp){var I=info(esp);if(!I)return Promise.resolve(false);
 return new Promise(function(res){
  var w=el('div');w.className='e2w';var cam=el('div');cam.className='e2c';w.appendChild(cam);
  function add(cls,html,css){var o=el('div',css||'',html);o.className='e2o '+cls;cam.appendChild(o);return o}
  var f=add('e2f');f.style.transform='translateY(170px) rotateX(90deg)';
  var R=C.ring,n=R.length;for(var i=0;i<n;i++)ang(add('e2r',R[i]),i*360/n,270,40);
  for(i=0;i<8;i++)ang(add('e2p'),i*45+22.5,420,-90);
  for(i=0;i<6;i++){var s=add('e2s',logoHTML(42)+'<div style="font:800 18px Arial;margin-top:8px">'+esc(I.e+' '+I.n.toUpperCase())+'</div>');ang(s,i*60,620,-120,' rotateY(180deg)')}
  var big=add('e2s',logoHTML(64)+'<div style="font:900 26px Arial;margin-top:10px;color:'+C.c4+'">'+esc(I.e+' '+I.n.toUpperCase())+'</div>','width:560px;height:320px;margin:-160px 0 0 -280px');big.style.transform='translateZ(-560px) translateY(-150px)';
  var em=[I.e].concat(C.emojis);for(i=0;i<10;i++){var e=add('e2e',em[i%em.length]);e.style.animationDelay=(-i*.37)+'s';ang(e,i*36+10,150+(i%3)*80,-40-(i%4)*45)}
  var mid=add('e2e',I.e,'font-size:120px;width:140px;margin:-70px 0 0 -70px');mid.style.transform='translateY(20px)';
  w.appendChild(el('div','',null));var tag=el('div','',(C.tag||'♪ Sintonía oficial')+' · Cabecera 3D');tag.className='e2tag';w.appendChild(tag);
  var cr=el('div');cr.className='e2cr';w.appendChild(cr);
  var lg=el('div','',logoHTML(Math.min(innerWidth/7,90)));lg.className='e2lg';w.appendChild(lg);
  var bn=el('div','',esc(I.e+' '+I.n));bn.className='e2bn';w.appendChild(bn);
  var x=el('button','','Saltar ⏭');x.className='e2x';w.appendChild(x);
  document.body.appendChild(w);
  var au=null;try{au=new Audio(BASE+'../'+C.sinto);au.volume=1;if(C.sintoT)au.currentTime=C.sintoT;var p=au.play();p&&p.catch&&p.catch(function(){})}catch(_){}
  var D=C.dur_cab*1000,t0=performance.now(),done=false,crs=C.creditos,ci=-1;
  function fin(){if(done)return;done=true;var t=performance.now();(function fade(){var k=Math.min(1,(performance.now()-t)/700);w.style.opacity=1-k;if(au)try{au.volume=Math.max(0,1-k)}catch(_){}if(k<1)requestAnimationFrame(fade);else{try{au&&au.pause()}catch(_){}w.remove();res(true)}})()}
  x.onclick=function(ev){ev.stopPropagation();fin()};
  (function loop(){if(done)return;var tt=performance.now()-t0,fr=Math.min(1,tt/D),c=camAt(fr);
   cam.style.transform='translateZ('+(700-c[3])+'px) rotateX('+(-c[2])+'deg) rotateY('+(-c[1])+'deg) translateZ('+(-c[4])+'px)';
   var k=Math.floor((tt-1200)/((D-4200)/crs.length));if(k!==ci&&k>=0&&k<crs.length){ci=k;cr.classList.remove('on');setTimeout(function(){cr.innerHTML='<small>'+esc(crs[ci][0])+'</small><b>'+esc(crs[ci][1])+'</b>';cr.classList.add('on')},300)}
   if(k>=crs.length)cr.classList.remove('on');
   if(fr>.80){lg.classList.add('on');bn.classList.add('on')}
   if(fr>=1)return fin();requestAnimationFrame(loop)})();
 })}
function saludo(esp,cb){var I=info(esp);if(!I)return Promise.resolve(false);
 var sub=el('div');sub.className='e2sub';document.body.appendChild(sub);var stop=false,cur=null,nx=null;
 function una(n){return new Promise(function(r){var ok=false,end=function(){if(!ok){ok=true;r()}};nx=end;
  if(cb)try{cb(I.l[n])}catch(_){}
  sub.innerHTML='<b>'+esc(C.pres)+':</b> '+esc(I.l[n])+' <i>· voz TTS (Piper)</i><button>Saltar ⏭</button>';
  sub.querySelector('button').onclick=function(e){e.stopPropagation();stop=true;try{cur&&cur.pause()}catch(_){}end()};
  try{cur=new Audio(BASE+'voz/'+C.g+'/'+I.id+'_'+n+'.mp3');cur.onended=cur.onerror=end;var p=cur.play();p&&p.catch&&p.catch(function(){})}catch(_){}
  setTimeout(end,((I.d[n]||4)+1.2)*1000)})}
 return (async function(){for(var n=0;n<I.l.length&&!stop;n++){await una(n);await new Promise(function(r){setTimeout(r,250)})}sub.remove();return true})()}
window.ESP2={cab:cab,saludo:saludo,info:info,cfg:C};
})();
