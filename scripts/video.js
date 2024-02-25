const video = document.getElementById('video');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const backwardBtn = document.getElementById('backwardBtn');
const forwardBtn = document.getElementById('forwardBtn');
const speedSlider = document.getElementById('speedSlider');
const videoSlider = document.getElementById('videoSlider');
const volumeRange = document.getElementById('volumeRange');
const muteBtn = document.getElementById('muteBtn');
const currentTime = document.getElementById('currentTime');
const duration = document.getElementById('duration');

playBtn.addEventListener('click', () => {
    if (video.paused || video.ended) {
        video.play();
        playBtn.textContent = 'Pause';
    } else {
        video.pause();
        playBtn.textContent = 'Play';
    }
});

stopBtn.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
    playBtn.textContent = 'Play';
});

backwardBtn.addEventListener('click', () => {
    video.currentTime -= 10;
});

forwardBtn.addEventListener('click', () => {
    video.currentTime += 10;
});

speedSlider.addEventListener('input', () => {
    video.playbackRate = speedSlider.value;
});

volumeRange.addEventListener('input', () => {
    video.volume = volumeRange.value;
});

muteBtn.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        muteBtn.textContent = 'Mute';
    } else {
        video.muted = true;
        muteBtn.textContent = 'Unmute';
    }
});

video.addEventListener('timeupdate', () => {
    const seconds = Math.floor(video.currentTime);
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);

    videoSlider.value = video.currentTime;
    currentTime.textContent = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
});

videoSlider.addEventListener('input', () => {
    video.currentTime = videoSlider.value;
});

video.addEventListener('loadedmetadata', function () {
    const seconds = Math.floor(video.duration);
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);

    videoSlider.max = video.duration;
    duration.textContent = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
});
