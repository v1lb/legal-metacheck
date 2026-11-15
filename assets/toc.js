// Оглавление для длинных документов: строится из заголовков раздела, без внешних библиотек.
(function(){
  var doc=document.querySelector('.doc'); if(!doc) return;
  var hs=doc.querySelectorAll('h2'); if(hs.length<4) return;
  var en=document.documentElement.lang==='en';
  var box=document.createElement('details'); box.className='toc';
  var s=document.createElement('summary'); s.textContent=en?'Contents':'Содержание'; box.appendChild(s);
  var ol=document.createElement('ol');
  hs.forEach(function(h,i){ if(!h.id) h.id='s'+(i+1);
    var li=document.createElement('li'), a=document.createElement('a'); a.href='#'+h.id;
    a.textContent=h.textContent.replace(/^\d+\.\s*/,''); li.appendChild(a); ol.appendChild(li); });
  box.appendChild(ol);
  var after=doc.querySelector('h1 + p')||doc.querySelector('h1'); after.insertAdjacentElement('afterend',box);
})();
