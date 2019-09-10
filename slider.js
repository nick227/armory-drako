document.addEventListener("DOMContentLoaded", load);
window.addEventListener('resize', load);
global_timer = null

function load() {
    preloadImgs(panelData)
    setupCarousel()
    var fpoImages = document.querySelectorAll('.dummy-full')
    var colors = ['000', '333', 'bbb']
    for (var i = 0, length1 = fpoImages.length; i < length1; i++) {
        var elm = fpoImages[i]
        var width = window.innerWidth * 0.55
        elm.src = "https://dummyimage.com/1920x1080/" + colors[i] + "/fff"
    }
}

var panelData = [{ title: 'Power Electronics Head', copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', imgUrl: 'https://dummyimage.com/1920x1080/000/fff' },
    { title: 'Battery Headline', copy: 'Tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  te. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', imgUrl: './technology/battery-tear-down.jpg' },
    { title: 'Powertrain', copy: 'Ut enim ad minim veniam, lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', imgUrl: './technology/rimac-rawtv.png' }
]

function setupNav() {
    var navbar = document.querySelector('.navbar')
    var navBtn = document.querySelector('.nav-btn')
    var closeBtn = document.querySelector('.nav-close-btn')
    navBtn.onclick = toggleNav
    closeBtn.onclick = toggleNav

    function toggleNav() {
        if (navbar.classList.contains('slideInNav')) {
            navbar.classList.remove('slideInNav')
        } else {
            navbar.classList.add('slideInNav')

        }
    }
}

function preloadImgs(obj) {
    for (var i = 0, length1 = obj.length; i < length1; i++) {
        var img = new Image()
        img.src = obj[i].imgUrl
    }
}

function setupCarousel() {
    var carouselElm = document.querySelector('.carousel')
    var backBtn = document.querySelector('.carousel .left-arrow')
    var forwardBtn = document.querySelector('.carousel .right-arrow')
    var innerDiv = document.querySelector('.carousel .inner')
    var imgElm = document.querySelectorAll('.carousel .panel > img')
    var titleElm = document.querySelector('.carousel .panel .copy > h3')
    var copyElm = document.querySelector('.carousel .panel .copy > p')
    var currentPos = 0
    var currentDir = 'forward'
    forwardBtn.onclick = next
    backBtn.onclick = back
    for (var i = 0, length1 = imgElm.length; i < length1; i++) {
        imgElm[i].onclick = handleImgClick
    }

    if (carouselElm.addEventListener) {
        carouselElm.addEventListener("mousewheel", MouseWheelHandler, false);
        carouselElm.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
    } else carouselElm.attachEvent("onmousewheel", MouseWheelHandler);

    function MouseWheelHandler() {
        var rect = isInViewport(this)
        var scrollTop = document.documentElement.scrollTop;

        var marginLeft = Math.round(scaleBetween(scrollTop, 0, 200, 0, rect.width) * -1)
        console.log(marginLeft)
        innerDiv.style.marginLeft = marginLeft + '%'


    }

    function handleMouseover() {}

    function handleImgClick() {
        titleElm.innerHTML = panelData[currentPos].title
        copyElm.innerHTML = panelData[currentPos].copy

        if (currentDir === 'forward' && currentPos < 2) {
            next()
        }
        if (currentDir === 'back' && currentPos > 0) {
            back()
        }
        if (currentPos === 2) {
            currentDir = 'back'
        }
        if (currentPos === 0) {
            currentDir = 'forward'
        }

    }

    function next() {
        if (currentPos < 2) {
            currentPos++
            var marginLeft = (currentPos * 100) * -1
            innerDiv.style.marginLeft = marginLeft + '%'
        }
    }

    function back() {
        if (currentPos > 0) {
            currentPos--
            var marginLeft = (currentPos * 100) * -1
            innerDiv.style.marginLeft = marginLeft + '%'
        }

    }

}

function setupCarousel2() {


    var backBtn = document.querySelector('.carousel-2 .left-arrow')
    var forwardBtn = document.querySelector('.carousel-2 .right-arrow')
    var titleElm = document.querySelector('.carousel-2 .panel .copy > h3')
    var copyElm = document.querySelector('.carousel-2 .panel .copy > p')
    var imgBoxElm = document.querySelector('.carousel-2 .panel > .img-box')
    var imgElm = document.querySelector('.carousel-2 .panel > .img-box > img')
    var imgElms = document.querySelectorAll('.carousel-2 .panel .img-box')
    var currentPos = 0
    var currentDir = 'forward'
    var animationInName = 'fadeInUpMini';
    var animationOutName = 'fadeOut';

    forwardBtn.onclick = next
    backBtn.onclick = back
    for (var i = 0, length1 = imgElms.length; i < length1; i++) {
        imgElms[i].onclick = handleImgClick
    }

    function handleImgClick() {
        titleElm.innerHTML = panelData[currentPos].title
        copyElm.innerHTML = panelData[currentPos].copy

        if (currentDir === 'forward' && currentPos < 2) {
            next()
        }
        if (currentDir === 'back' && currentPos > 0) {
            back()
        }
        if (currentPos === 2) {
            currentDir = 'back'
        }
        if (currentPos === 0) {
            currentDir = 'forward'
        }

    }

    function next() {
        if (backBtn.classList.contains('selected')) {
            backBtn.classList.remove('selected')
        }
        if (currentPos < 2) {
            currentPos++
            loadImg(currentPos)
        }
        if (currentPos === 2) {
            if (!forwardBtn.classList.contains('selected')) {
                forwardBtn.classList.add('selected')
            }
        }
    }

    function back() {
        if (forwardBtn.classList.contains('selected')) {
            forwardBtn.classList.remove('selected')
        }
        if (currentPos > 0) {
            currentPos--
            loadImg(currentPos)
        }
        if (currentPos === 0) {
            if (!backBtn.classList.contains('selected')) {
                backBtn.classList.add('selected')
            }
        }

    }

    function loadImg(currentPos) {
        titleElm.innerHTML = panelData[currentPos].title
        copyElm.innerHTML = panelData[currentPos].copy
        imgBoxElm.classList.remove(animationInName)
        imgBoxElm.classList.add(animationOutName)
        setTimeout(function() {
            imgElm.setAttribute('src', panelData[currentPos].imgUrl)
            imgBoxElm.classList.remove(animationOutName)
            imgBoxElm.classList.add(animationInName)

        }, 900)

    }

}

function setupCarousel3() {
    var carouselElm = document.querySelector('.carousel-3')
    var panelElms = carouselElm.querySelectorAll('.panel')
    for (var i = 0, length1 = panelElms.length; i < length1; i++) {
        addScrollMagic(panelElms[i])
    }
}


function addScrollMagic(elm) {
    var diff = null
    var margin = null
    window.addEventListener("scroll", runOnScroll)

    function runOnScroll() {
        var res = isInViewport(elm)
        var dir = elm.classList.contains('leftAlign') ? 'rtl' : 'ltr'
        var timer = null
        if (res.y - res.height > -50) {
            scrollAction(dir)
        }

        function scrollAction(dir) {
            switch (dir) {
                case 'rtl':
                    diff = res.y - res.height
                    margin = scaleBetween(diff, 0, 15, 0, 100)
                    elm.style.backgroundPosition = (margin * -1) > -15 ? 0 : +(margin * -1) + '%'
                    break;
                default:
                    diff = res.y - res.height
                    margin = scaleBetween(diff, 0, 15, 0, 150)
                    elm.style.backgroundPosition = (100 + margin) < 115 ? '100%' : (100 + margin) + '%'
                    break;
            }

        }
    }
}

function scaleBetween(unscaledNum, minAllowed, maxAllowed, min, max) {
    return (maxAllowed - minAllowed) * (unscaledNum - min) / (max - min) + minAllowed;
}

function setupSlider1() {

    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        w = w.innerWidth || e.clientWidth || g.clientWidth,
        h = w.innerHeight || e.clientHeight || g.clientHeight;

    function addFade(elm) {
        elm.classList.add('animated', 'fadeOut')
        var bodyRect = document.body.getBoundingClientRect()
        var pos = elm.getBoundingClientRect()
        var top = pos.top
        var offset = top - bodyRect.top
        var visible = false
        var b = document.body.getBoundingClientRect()
        if (offset < window.scrollY + window.innerHeight && !visible) {
            fadeIn(elm)
            visible = true
        }
        document.addEventListener("scroll", function() {
            if (offset + 70 < window.scrollY + window.innerHeight && !visible) {
                fadeIn(elm)
                visible = true
            }

        });

        function fadeIn(elm) {
            elm.classList.remove('fadeOut')
            elm.classList.add('fadeIn')

        }
    }


    var imgElms = document.querySelectorAll('section.slider-1 .panel .img')
    for (var i = 0, length1 = imgElms.length; i < length1; i++) {
        var elm = imgElms[i]
        elm.onclick = next
        addFade(elm)
    }

    function next() {
        if (this.parentElement.nextElementSibling) {
            var n = this.parentElement.nextElementSibling
        } else {
            var n = this.parentElement.parentElement.nextElementSibling
        }
        scrollTo(n)
    }
}

function setupSlider2() {

    var panelData = [{ title: 'Inscididunt ut labore', copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', imgUrl: 'https://dummyimage.com/1920x1080/888/fff' },
        { title: 'Lorem ipsum dolor', copy: 'Tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  te. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', imgUrl: 'https://dummyimage.com/1920x1080/ddd/fff' },
        { title: 'Ut labore et dolor', copy: 'Ut enim ad minim veniam, lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', imgUrl: 'https://dummyimage.com/1920x1080/000/fff' }
    ]
    preloadImgs(panelData)

    var sliderElm = document.querySelector('.slider-2')
    var loadingBarElm = document.querySelector('.slider-2 .loading-bar')
    var copyElm = document.querySelector('.slider-2 .panel .copy')
    var imgElm = document.querySelector('.slider-2 .panel img')
    var currentPos = 0
    start()

    function start() {
        global_timer = setInterval(function() {
            loadPanel()
        }, 5555)

    }

    function loadPanel() {
        if (currentPos < panelData.length - 1) {
            currentPos++
        } else {
            currentPos = 0
        }
        imgElm.classList.add('fadeOut')
        setTimeout(function() {
            imgElm.setAttribute('src', panelData[currentPos].imgUrl)
            imgElm.classList.remove('fadeOut')
            imgElm.classList.add('fadeIn')

        }, 1100)
        setTimeout(function() {
            copyElm.innerHTML = '<h3>' + panelData[currentPos].title + '</h3><p>' + panelData[currentPos].copy + '</p><div class="loading-bar animated grower slowest"></div>'

        }, 1)
    }

    document.addEventListener("scroll", function() {
        if (!isInViewport(sliderElm) && global_timer !== null) {
            global_timer = null
            currentPos = 0
            imgElm.setAttribute('src', panelData[currentPos].imgUrl)
            copyElm.innerHTML = '<h3>' + panelData[currentPos].title + '</h3><p>' + panelData[currentPos].copy + '</p><div class="loading-bar animated grower slowest"></div>'
        }

    }, false);



}

var isInViewport = function(el) {

    const rect = el.getBoundingClientRect()
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight)
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth)
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0)
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0)
    if (vertInView && horInView) {
        return rect
    } else {
        return false
    }
};

function scrollTo(target) {
    var MIN_PIXELS_PER_STEP = 30;
    var MAX_SCROLL_STEPS = 50;
    var MARGIN_TOP = 125;
    var scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    var pixelsPerStep = Math.max(MIN_PIXELS_PER_STEP,
        (targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS);

    var stepFunc = function() {
        scrollContainer.scrollTop =
            Math.min(targetY, pixelsPerStep + scrollContainer.scrollTop);

        if (scrollContainer.scrollTop >= targetY - MARGIN_TOP) {
            return;
        }

        window.requestAnimationFrame(stepFunc);
    };

    window.requestAnimationFrame(stepFunc);
}