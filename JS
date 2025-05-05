const applySmoothFade = () => {
  const videoElements = document.querySelectorAll('ytd-video-renderer, ytd-compact-video-renderer, ytd-rich-item-renderer, ytd-playlist-video-renderer');
  
  videoElements.forEach((video) => {
    video.style.opacity = 0;
    video.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      video.style.opacity = 1;
    }, 50); 
  });
};

applySmoothFade();
setInterval(applySmoothFade, 3000);
