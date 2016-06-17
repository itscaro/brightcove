/**
 * Scroll Into View
 */
videojs.plugin('scrollIntoView', function() {
    var myPlayer = this;

    var checkIfVideoInView = function() {
        // Player is fully in viewport, is never played and is in pause
        if ( $(myPlayer.el_).isOnScreen(1, 1).inView && !myPlayer.hasStarted_ && myPlayer.paused()) {
            myPlayer.play()
        }
    }

    var timer;
    $(window).on('scroll.playOnScroll', function () {
        // Trigger 250ms after when finish scrolling and only once
        clearTimeout(timer)
        timer = setTimeout(function() {checkIfVideoInView()}, 250)
    });
});

