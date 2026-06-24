/* ============================================================================
   SAMAIS — motion & interação (skill: samais-html-presentation)
   nav mobile · scrollspy · parallax · reveal no scroll · count-up ·
   typing do hero · animação de gráficos (linha, donut, barras) na viewport.
   Tudo sob .js-anim e respeitando prefers-reduced-motion.
   ========================================================================== */
(function(){
  /* nav mobile */
  var ham=document.getElementById('navham'), links=document.getElementById('navlinks');
  if(ham&&links){
    ham.addEventListener('click',function(){
      var open=links.classList.toggle('open');
      ham.classList.toggle('open',open);
      ham.setAttribute('aria-expanded',open?'true':'false');
    });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){links.classList.remove('open');ham.classList.remove('open');ham.setAttribute('aria-expanded','false');});
    });
  }

  /* scrollspy */
  var map={};
  document.querySelectorAll('.nav-links a').forEach(function(a){
    var h=a.getAttribute('href')||''; if(h.charAt(0)==='#')map[h.slice(1)]=a;
  });
  if(Object.keys(map).length){
    var ob=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(e.isIntersecting){
          document.querySelectorAll('.nav-links a').forEach(function(x){x.classList.remove('active');});
          var a=map[e.target.id]; if(a)a.classList.add('active');
        }
      });
    },{rootMargin:'-45% 0px -50% 0px'});
    document.querySelectorAll('section[id]').forEach(function(s){if(map[s.id])ob.observe(s);});
  }

  var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* parallax */
  if(!reduce){
    var px=[].slice.call(document.querySelectorAll('[data-px]'));
    if(px.length){
      var tick=false;
      function upd(){
        var vh=innerHeight;
        px.forEach(function(el){
          var host=el.parentElement, r=host.getBoundingClientRect();
          if(r.bottom<-300||r.top>vh+300)return;
          var center=(r.top+r.height/2)-(vh/2);
          var sp=parseFloat(el.getAttribute('data-px'))||0.12;
          var head=host.offsetHeight*0.18;
          var ty=center*-sp; if(ty>head)ty=head; if(ty<-head)ty=-head;
          el.style.transform='translate3d(0,'+ty.toFixed(1)+'px,0)';
        });
        tick=false;
      }
      addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd);}},{passive:true});
      addEventListener('resize',upd); upd();
    }
  }

  if(reduce) return;
  document.documentElement.classList.add('js-anim');

  /* reveal */
  document.querySelectorAll('.g-3,.g-2,.sku-grid,.hz,.cases,.risk,.studies').forEach(function(g){
    [].forEach.call(g.children,function(c,i){c.classList.add('reveal');c.style.transitionDelay=(i*0.07)+'s';});
  });
  ['.sec-head','.bring','.splitviz','.donutviz','.chart','.opsviz','.uof','.cta-box','.pull blockquote','.note','.srcshot'].forEach(function(sel){
    document.querySelectorAll(sel).forEach(function(e){e.classList.add('reveal');});
  });
  document.querySelectorAll('.tbl').forEach(function(e){if(!e.closest('.fold-light'))e.classList.add('reveal');});
  var rio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');rio.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:.06});
  document.querySelectorAll('.reveal').forEach(function(e){rio.observe(e);});

  /* dobra light: linhas escalonadas */
  var fio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('rows-in');fio.unobserve(e.target);}});},{rootMargin:'0px 0px -10% 0px',threshold:.1});
  document.querySelectorAll('.fold-light').forEach(function(e){fio.observe(e);});

  /* count-up */
  function countUp(el,dur){
    if(el.dataset.counted)return; el.dataset.counted='1';
    var full=el.textContent, m=full.match(/(\d{1,3}(?:[.\s]\d{3})*(?:[.,]\d+)?)/);
    if(!m)return;
    var raw=m[1], comma=/,\d+$/.test(raw), parts=raw.split(','), dec=comma&&parts[1]?parts[1].length:0;
    var target=parseFloat(raw.replace(/[.\s]/g,'').replace(',','.')), start=performance.now();
    function grp(s){return s.replace(/\B(?=(\d{3})+(?!\d))/g,'.');}
    function fmt(v){var s=v.toFixed(dec); if(comma){var p=s.split('.');s=grp(p[0])+(p[1]?','+p[1]:'');}else{s=grp(s);} return s;}
    function step(t){
      var p=Math.min((t-start)/dur,1), e=1-Math.pow(1-p,3);
      el.textContent= p<1 ? full.replace(raw,fmt(target*e)) : full;
      if(p<1)requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* typing */
  function typeEl(el,dur){
    if(el.dataset.typed)return; el.dataset.typed='1';
    var toks=[]; el.childNodes.forEach(function(nd){
      if(nd.nodeType===3){nd.textContent.split('').forEach(function(c){toks.push(c);});}
      else if(nd.nodeName==='BR'){toks.push('\n');}
    });
    function html(k){var s='';for(var i=0;i<k;i++){s+= toks[i]==='\n'?'<br>': toks[i].replace(/&/g,'&amp;').replace(/</g,'&lt;');}return s;}
    el.textContent=''; el.style.visibility='visible'; el.classList.add('typing');
    var n=toks.length, start=performance.now();
    function step(t){var p=Math.min((t-start)/dur,1);el.innerHTML=html(Math.round(p*n));if(p<1)requestAnimationFrame(step);else{el.classList.remove('typing');el.innerHTML=html(n);}}
    requestAnimationFrame(step);
  }

  /* gráficos + contadores na viewport */
  var cio=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){
      e.target.classList.add('anim');
      e.target.querySelectorAll('[data-count], .it .n, .study .v[data-n]').forEach(function(n){countUp(n,2000);});
      e.target.querySelectorAll('.donutviz .arc[data-offset]').forEach(function(a){a.style.strokeDashoffset=a.getAttribute('data-offset');});
      cio.unobserve(e.target);
    }});},{rootMargin:'0px 0px -12% 0px',threshold:.2});
  document.querySelectorAll('.chart,.donutviz,.uof,.splitviz,.opsviz,.strip').forEach(function(e){cio.observe(e);});

  /* hero typing + strip count */
  var h1=document.querySelector('.hero h1'), hs=document.querySelector('.hero-sub');
  if(h1)setTimeout(function(){typeEl(h1,1700);},200);
  if(hs)setTimeout(function(){typeEl(hs,2000);},2000);
  setTimeout(function(){document.querySelectorAll('.hero .strip .it .n').forEach(function(n){countUp(n,2000);});},450);
})();
