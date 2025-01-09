const audio = document.getElementById('audio');
        const playPauseBtn = document.querySelector('.play-pause-btn');
        const seekBar = document.querySelector('.seek-bar');
        const timeDisplay = document.querySelector('.time-display');

        playPauseBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Pause icon
            } else {
                audio.pause();
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'; // Play icon
            }
        });

        audio.addEventListener('timeupdate', () => {
            seekBar.value = (audio.currentTime / audio.duration) * 100 || 0;
            const minutes = Math.floor(audio.currentTime / 60);
            const seconds = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
            timeDisplay.textContent = `${minutes}:${seconds}`;
        });

        seekBar.addEventListener('input', () => {
            audio.currentTime = (seekBar.value / 100) * audio.duration;
        });
