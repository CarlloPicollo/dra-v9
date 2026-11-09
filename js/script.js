document.addEventListener('DOMContentLoaded',()=>{
  const t=document.querySelector('.nav-toggle'), m=document.querySelector('.nav-menu');
  if(t) t.addEventListener('click',()=>m.classList.toggle('active'));

  const ba = document.querySelector('.ba-container');
  if(ba){
    const before = ba.querySelector('.ba-before');
    const slider = ba.querySelector('.ba-slider');
    let isDragging = false;
    function move(e){
      if(!isDragging) return;
      const rect = ba.getBoundingClientRect();
      let x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      x = Math.max(0, Math.min(x, rect.width));
      const pct = (x / rect.width) * 100;
      before.style.width = pct + '%';
      slider.style.left = pct + '%';
    }
    ba.addEventListener('mousedown', ()=> isDragging=true);
    ba.addEventListener('touchstart', ()=> isDragging=true);
    window.addEventListener('mouseup', ()=> isDragging=false);
    window.addEventListener('touchend', ()=> isDragging=false);
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move);
  }
});
