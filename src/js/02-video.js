import Vimeo from '@vimeo/player'
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(onPlay, 1000))
  // localStorage.setItem("videoplayer-current-time", data.seconds)
;

 player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0)

  function onPlay(data) {
  localStorage.setItem("videoplayer-current-time", data.seconds)
}

// player.on('timeupdate', throttle(onPlay, 1000));

// player.setCurrentTime(Number(localStorage.getItem("videoplayer-current-time")))