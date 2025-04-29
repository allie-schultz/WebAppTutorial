00// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.addEventListener('DOMContentLoaded', function () {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.style.top = '-500px';

    function dropVideo() {
        videoContainer.style.transition = 'top 3s ease-out';
        videoContainer.style.top = '210px';
    }
    dropVideo();

    setTimeout(dropVideo, 4000);
});


