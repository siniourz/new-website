var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '600',
        width: '1015',
        videoId: 'AmHEfTSBXiY', // Updated videoId
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        document.querySelectorAll('.topic-h4, .topic-h1, .topic-h3, .topic-h4-2, .button-startnow-div, .tuturial').forEach(function(element) {
            element.classList.add('hidden');
        });
    } else if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
        document.querySelectorAll('.hidden').forEach(function(element) {
            element.classList.remove('hidden');
        });
    }
}
