(function(){
  const menuBtn = document.querySelector('[data-menu-button]');
  const mobilePanel = document.querySelector('[data-mobile-panel]');

  if(menuBtn && mobilePanel){
    const setOpen = (open) => {
      mobilePanel.setAttribute('data-open', open ? 'true' : 'false');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    setOpen(false);

    menuBtn.addEventListener('click', () => {
      const open = mobilePanel.getAttribute('data-open') === 'true';
      setOpen(!open);
    });

    mobilePanel.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if(a) setOpen(false);
    });

    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape') setOpen(false);
    });
  }

  const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
  if(revealEls.length){
    const io = new IntersectionObserver((entries) => {
      for(const entry of entries){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12 });

    for(const el of revealEls){
      el.classList.add('reveal');
      io.observe(el);
    }
  }

  const orderForm = document.querySelector('[data-order-form]');
  const orderSuccess = document.querySelector('[data-order-success]');

  if(orderForm && orderSuccess){
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      orderSuccess.hidden = false;
      orderSuccess.scrollIntoView({ behavior: 'smooth', block: 'start' });
      orderForm.reset();
    });
  }
})();
