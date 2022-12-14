const videos = document.querySelectorAll('[data-video]');
const MEDIA = '9TZXsZItgdw';

function findVideos() {
  if (videos.length >= 1) {
    for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
    }
  }
}

function setupVideo(video) {
  const link = video.querySelector('[data-video-btn]');

  video.addEventListener('click', () => {
    const iframe = createIframe(MEDIA);

    link.remove();
    // button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('is--enabled');
}

function createIframe(id) {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL(id) {
  return 'https://www.youtube.com/embed/' + id;
}

export {findVideos};
