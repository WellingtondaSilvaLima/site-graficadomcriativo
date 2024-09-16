document.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('.animacao-a-dom');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('visivel');
      }
    });
  }, { threshold: 0.03 }); // Ajuste o threshold conforme necessário

  observer.observe(target);
});

document.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('.animacao-criatividades');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('visivel');
      }
    });
  }, { threshold: 0.03 }); // Ajuste o threshold conforme necessário

  observer.observe(target);
});

document.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('.animacao-call-to-action');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('visivel');
      }
    });
  }, { threshold: 0.03 }); // Ajuste o threshold conforme necessário

  observer.observe(target);
});

document.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('.animacao-os-criativos');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('visivel');
      }
    });
  }, { threshold: 0.03 }); // Ajuste o threshold conforme necessário

  observer.observe(target);
});

document.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('.animacao-os-criativos-1');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('visivel');
      }
    });
  }, { threshold: 0.03 }); // Ajuste o threshold conforme necessário

  observer.observe(target);
});

document.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('.animacao-os-criativos-2');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('visivel');
      }
    });
  }, { threshold: 0.03 }); // Ajuste o threshold conforme necessário

  observer.observe(target);
});

document.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('.animacao-os-criativos-3');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('visivel');
      }
    });
  }, { threshold: 0.03 }); // Ajuste o threshold conforme necessário

  observer.observe(target);
});

document.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('.animacao-os-criativos-4');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('visivel');
      }
    });
  }, { threshold: 0.03 }); // Ajuste o threshold conforme necessário

  observer.observe(target);
});

document.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('#rodape');
  const btnWhats = document.querySelector('.whatsapp-btn')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        btnWhats.classList.add('remover');
      }
      else {
        btnWhats.classList.remove('remover');
      }
    });
  }, { threshold: 0.03 }); // Ajuste o threshold conforme necessário

  observer.observe(target);
});