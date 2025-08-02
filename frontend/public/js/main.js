document.addEventListener("DOMContentLoaded", () => {

  // Tombol sosial media styling 
  const socials = document.querySelectorAll('.btn-social');
  socials.forEach(btn => {
    btn.classList.add(
      'inline-block', 'px-4', 'py-2',
      'bg-blue-600', 'text-white', 'rounded',
      'hover:bg-blue-700', 'transition', 'duration-200'
    );
  });

  // Navigasi toggle 
  const toggleBtn = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (toggleBtn && navMenu && menuIcon && closeIcon) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  }

  // Efek scroll fade-in dari samping
  const faders = document.querySelectorAll('.fade-in-scroll');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.remove('opacity-0');
      entry.target.classList.remove('translate-x-10');
      entry.target.classList.remove('translate-y-10');
      entry.target.classList.remove('-translate-x-10');
      entry.target.classList.remove('-translate-y-10');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

//efek tyewriter
  document.addEventListener("DOMContentLoaded", function () {
    const target = document.getElementById("career-text");
    const text = target.getAttribute("data-text")
    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        target.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 30); // 30ms per karakter
      }
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          typeWriter();
          obs.unobserve(entry.target); // Stop observer pertama kali slide
        }
      });
    });

    observer.observe(target);
  });


