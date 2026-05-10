// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('hidden') === false;
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
}

// Audio players: toggle play/pause and swap icons
document.querySelectorAll('.audio-player').forEach((player) => {
  const audio = player.querySelector('audio');
  const btn = player.querySelector('.audio-play-btn');
  const playIcon = player.querySelector('.play-icon');
  const pauseIcon = player.querySelector('.pause-icon');
  if (!audio || !btn) return;

  const title = btn.dataset.title || 'audio';

  btn.addEventListener('click', () => {
    if (audio.paused) {
      // Pause any other audio that's currently playing
      document.querySelectorAll('.audio-player audio').forEach((other) => {
        if (other !== audio) other.pause();
      });
      audio.play();
    } else {
      audio.pause();
    }
  });

  audio.addEventListener('play', () => {
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
    btn.setAttribute('aria-label', `Pause ${title}`);
  });

  const showPlayState = () => {
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
    btn.setAttribute('aria-label', `Play ${title}`);
  };
  audio.addEventListener('pause', showPlayState);
  audio.addEventListener('ended', showPlayState);
});

// Hide navbar on scroll down, show on scroll up
const navbar = document.querySelector('nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    navbar.style.transform = 'translateY(-100%)';
    // Also hide mobile menu when navbar hides
    if (mobileMenu) mobileMenu.classList.add('hidden');
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  lastScrollY = currentScrollY;
}, { passive: true });
