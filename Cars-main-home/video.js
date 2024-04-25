document.addEventListener("DOMContentLoaded", function() {
    const videoContainer = document.getElementById('video-slider');
    const allVideos = [
        'video/video1.mp4',
        'video/video2.mp4',
        'video/video3.mp4',
        'video/video4.mp4',
        'video/video5.mp4',
        'video/video6.mp4',
        'video/video7.mp4',
        'video/video8.mp4',
        'video/video9.mp4',
        'video/video10.mp4',
        'video/video11.mp4',
        'video/video12.mp4',
        'video/video13.mp4',
        'video/video14.mp4',
        'video/video15.mp4'
    ];
    let currentVideoIndex = 0; // Start from the first video

    function updateVideos() {
        videoContainer.innerHTML = ''; // Clear existing videos

        // Calculate index for center video
        let centerIndex = currentVideoIndex + 2;

        // Append five videos
        for (let i = currentVideoIndex; i < currentVideoIndex + 5; i++) {
            const video = document.createElement('video');
            video.src = allVideos[i % allVideos.length];
            video.className = (i === centerIndex) ? 'video-main' : 'video-thumbnail';
            video.controls = true;
            if (i === centerIndex) {
                video.autoplay = true;
                video.addEventListener('ended', function() {
                    // Move to the next group of videos
                    currentVideoIndex = (currentVideoIndex + 5) % allVideos.length;
                    updateVideos();
                });
            }
            videoContainer.appendChild(video);
        }
    }

    updateVideos(); // Initialize the videos
});
