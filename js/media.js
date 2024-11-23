var mediaObj;


$(function () {
    'use strict';

    var $container = $('#mediaDiv');
    var $image = $container.children('div.on');
    var iTransform, cTransform;

    mediaObj = new Audio();
    mediaObj.src = 'images/media/倾城琵琶 - 白雪.mp3';
    mediaObj.loop = true;
    mediaObj.autoplay = true;

    $(document).one('touchstart.play click.play', function () {
        mediaObj.play();
        mediaPlay();
    });

    $image.bind('click', function () {
        if (mediaObj.paused) {
            mediaObj.play();
            mediaPlay();
        } else {
            setTimeout(function () {
                mediaObj.pause();
                mediaPause();
            }, 0.1e3);
        }
    });

    function mediaPlay() {
        $image.addClass('animate');
    }

    function mediaPause() {
        iTransform = $image.css('transform');
        cTransform = $container.css('transform');
        $container.css('transform', cTransform === 'none' ? iTransform : iTransform.concat(' ', cTransform));
        $image.removeClass('animate');
    }

    $(mediaObj).bind('canplaythrough', function () {
        // mediaObj.play();
    }).bind('pause ended', function () {
        mediaPause();
    }).bind('playing', function () {
        mediaPlay();
    });

    // Expose control functions globally
    window.playMedia = function () {
        if (mediaObj.paused) {
            mediaObj.play();
            mediaPlay();
        }
    }

    window.pauseMedia = function () {
        if (!mediaObj.paused) {
            mediaObj.pause();
            mediaPause();
        }
    }

    const progressBar = document.getElementById('progressBar');
    const volumeControl = document.getElementById('volume');
    const songImage = document.getElementById('songImage');

// 播放音频时更新进度条
    mediaObj.addEventListener('timeupdate', function () {
        progressBar.value = (mediaObj.currentTime / mediaObj.duration) * 100;

    });

// 允许进度条寻找音频
    progressBar.addEventListener('input', function () {
        mediaObj.currentTime = (progressBar.value / 100) * mediaObj.duration;

    });

// 更新数量
    volumeControl.addEventListener('input', function () {
        mediaObj.volume = volumeControl.value / 100;
    });


});



