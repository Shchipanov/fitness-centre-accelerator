const video = () => {
  const gumVideo = document.querySelector('[data-video]');
  const videoPlayer = gumVideo.querySelector('[data-video-player]');
  const videoBtn = gumVideo.querySelector('[data-video-btn]');

  videoBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    gumVideo.classList.add('gum__video--active');
    videoPlayer.play();
  });
};

function onYouTubeIframeAPIReady() {

  // eslint-disable-next-line no-undef
  const player = new YT.Player('video-placeholder', {
    videoId: '9TZXsZItgdw',

  });

  function initialize() {
    // Обновляем элементы управления и загружаем
    updateTimerDisplay();
    updateProgressBar();

    // Сброс старого интервала
    clearInterval(time_update_interval);

    // Запускаем обновление таймера и дорожки проигрывания
    // каждую секунду.
    time_update_interval = setInterval(function () {
      updateTimerDisplay();
      updateProgressBar();
    }, 1000);
  }
  return player;
}


export {video, onYouTubeIframeAPIReady};
