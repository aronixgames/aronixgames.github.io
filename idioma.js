(function(){
var L=["es", "en", "pt", "fr", "it", "zh", "ru", "ja"],def='es',k='lb_idioma';
function elegir(){var q=new URLSearchParams(location.search).get('lang');if(q&&L.indexOf(q)>=0)return q;
try{var g=localStorage.getItem(k);if(g&&L.indexOf(g)>=0)return g;}catch(e){}
var n=(navigator.languages||[navigator.language||'']);for(var i=0;i<n.length;i++){var c=(n[i]||'').slice(0,2).toLowerCase();if(L.indexOf(c)>=0)return c;}return 'en';}
function poner(c){document.querySelectorAll('.l').forEach(function(e){e.classList.toggle('on',e.getAttribute('data-l')===c);});
document.querySelectorAll('nav.idiomas button').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-l')===c);});
document.documentElement.lang={"es": "es", "en": "en", "pt": "pt-BR", "fr": "fr", "it": "it", "zh": "zh-CN", "ru": "ru", "ja": "ja"}[c];
document.querySelectorAll('a[data-p]').forEach(function(a){a.href=a.getAttribute('data-p')+'?lang='+c;});}
var c=elegir();poner(c);
document.querySelectorAll('nav.idiomas button').forEach(function(b){b.addEventListener('click',function(){var c=b.getAttribute('data-l');try{localStorage.setItem(k,c);}catch(e){}poner(c);history.replaceState(null,'','?lang='+c);});});
})();
