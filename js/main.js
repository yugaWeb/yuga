$(function () {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.imgHover').hover(function () {
            $(this).toggleClass('imgHover_after')
            $(this).toggleClass('pHover')
        })
    }
})
